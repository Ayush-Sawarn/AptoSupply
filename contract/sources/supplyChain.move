module supplyChain :: Product{
    use aptos_std::coin::{transfer};
    use aptos_framework::aptos_coin::AptosCoin;
    use std :: vector;
    use std::signer; 
     use std::option::Option;
    use std :: option;
    use std::string::String;

    struct Manufacturer has store,key,copy {
        account: address,
        name: String
    }
    struct Consumer has store {
        account: address,
        purchases: vector<u64>, 
    }
    struct Product has store,drop,copy {
        id: u64,
        name: String,
        manufacturer : address,
        batch_number : u64,
        manufacture_date: u64, 
        price: u64
    }
    struct ManufacturerProducts  has key{
        products: vector<Product>,
    }
    struct AllManufacturers has key {
        manufacturers: vector<address>,
    }
     public fun init_all_manufacturers(account: &signer) {
        assert!(!exists<AllManufacturers>(0x1), 3);  // If already initialized, return error 3
        move_to(account, AllManufacturers {
            manufacturers: vector::empty<address>(),
        });
    }
    public fun init_manufacturer(account: &signer, manufacturer_name: String) {
        let address = signer::address_of(account);
        assert!(!exists<Manufacturer>(address), 1);
        
        move_to(account, Manufacturer {
            account: address,  
            name: manufacturer_name  
        });
        let global_manufacturers = borrow_global_mut<AllManufacturers>(0x1);
        vector::push_back(&mut global_manufacturers.manufacturers, address);

        // Initialize their product list
        init_manufacturer_products(account);
    }
    
    public fun init_manufacturer_products(account: &signer){
        move_to(account,ManufacturerProducts{
            products: vector :: empty<Product>(),
        });
    }
    public fun create_product (
        account: &signer,
        product_id : u64,
        product_name: String,
        batch_number: u64, 
        manufacture_date: u64, 
        product_price: u64
    )acquires ManufacturerProducts{
        let manufacturer_address = signer:: address_of(account);
        let manufacturer_products=borrow_global_mut<ManufacturerProducts>(manufacturer_address);
        let new_product= Product{
            id:product_id,
            name: product_name,
            manufacturer: manufacturer_address,
            batch_number: batch_number,
            manufacture_date: manufacture_date,
            price: product_price,
        };
        vector::push_back(&mut manufacturer_products.products, new_product);
    }
     public fun get_all_products(manufacturer_address: address): vector<Product> acquires ManufacturerProducts {
        let manufacturer_products = borrow_global<ManufacturerProducts>(manufacturer_address);
        return vector::copy(&manufacturer_products.products); // Return all products for the given manufacturer
    }

    public fun get_product(manufacturer_address: address, product_id: u64): Option<Product> acquires ManufacturerProducts  {
        // Borrow the global ManufacturerProducts object associated with the manufacturer address
        let manufacturer_products = borrow_global<ManufacturerProducts>(manufacturer_address);
        
        // Get a reference to the vector of products
        let products = &manufacturer_products.products;

        // Manually loop through the products to find the one with the given product_id
        let i : u64 = 0;
        while (i < vector::length(products)) {
            let product = vector::borrow(products, i);
            
            // Check if the current product's ID matches the requested product_id
            if (product.id == product_id) {
                // Return the found product wrapped in Option::some
                return option::some(*product) // Dereference to return a copy of the product
            };
            i = i + 1; // Increment index for the next iteration
        };

        // If no matching product is found, return None
        option::none()
    }

    public fun purchase_product(
        account: &signer,
        manufacturer_address: address,
        product_id: u64,
    ) acquires ManufacturerProducts  {
        // Borrow the global ManufacturerProducts object associated with the manufacturer address
        let manufacturer_products = borrow_global_mut<ManufacturerProducts>(manufacturer_address);
        
        // Get a mutable reference to the products vector
        let products = &mut manufacturer_products.products;

        // Initialize index and found flag
        let index: u64 = 0;
        let found: bool = false;

        // Loop through the products to find the one with the given product_id
        while (index < vector::length(products)) {
            let product = vector::borrow(products, index);
            
            // Check if the current product's ID matches the requested product_id
            if (product.id == product_id) {
                found = true; // Set found flag to true
                break // Exit the loop when found
            };
            index = index + 1; // Increment index for the next iteration
        };

        // Assert that the product was found
        assert!(found, 2);

        // Get the product from the vector and make the purchase
        let product = vector::borrow(products, index);
        transfer<AptosCoin>(account, manufacturer_address, product.price);
        vector::remove(products, index);
    }


}


// 1: Manufacturer does not exist.
// 2: Product not found for purchase.
// 3: Insufficient funds for purchase.