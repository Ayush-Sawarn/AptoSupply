module supplyChain :: Product{
    use aptos_std::coin::{transfer, Coin};
    use aptos_framework::aptos_account;
    use std :: vector;
    use std :: Signer;
    use std :: option;
    use std::string::String;

    struct Manufacturer has store {
        account: address
    }
    struct Consumer has store {
        account: address,
        purchases: vector<u64>, 
    }
    struct Product has store {
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

    public fun init_manufacturer(account: &signer) {
        let address = Signer::address_of(account);
        assert(!exists<Manufacturer>(address), 1);
        
        move_to(account, Manufacturer {
            account: address,
        });
        init_manufacturer_products(account);
    }

    public fun init_manufacturer_products(account: &signer){
        let manufacturer_address= Signer::address_of(account);
        move_to(account,ManufacturerProducts{
            products: vector :: empty<Product>(),
        });
    }
    public fun create_product(
        account: &signer,
        product_id : u64,
        product_name: String,
        batch_number: u64, 
        manufacture_date: u64, 
        product_price: u64
    ){
        let manufacturer_address = Signer:: address_of(account);
        let manufacturer_products=borrow_global_mut<ManufacturerProducts>(manufacturer_address)
        let new_product= Product{
            id:product_id,
            name: product_name,
            manufacturer: manufacturer_address,
            batch_number: batch_number,
            manufacture_date: manufacture_date,
            price: product_price,
        }
        vector::push_back(&mut manufacturer_products.products, new_product);
    }
    public fun get_product(manufacturer_address: address, product_id: u64): option<Product>{
        let manufacturer_products = borrow_global<ManufacturerProducts>(manufacturer_address);
        let products= &manufacturer_products.products;
        let index=vector::index_of(products, |product| product.id == product_id);
        if (index.is_some()) {
            return option::some(vector::borrow(products, index.unwrap()));
        }
        option::none()
    }
    public fun purchase_product(
        account: &signer,
        manufacturer_address: address,
        product_id: u64,
    ){
        let manufacturer_products=borrow_global_mut<ManufacturerProducts>(manufacturer_address)
        let products = &mut manufacturer_products.products;
        let index = vector::index_of(products, |product| product.id == product_id);
        assert(index.is_some(), 2);
        let product = vector::borrow(products, index.unwrap());
        transfer(account, manufacturer_address, product.price);
        vector::remove(products, product_index);
    }

}


// 1: Manufacturer does not exist.
// 2: Product not found for purchase.
// 3: Insufficient funds for purchase.