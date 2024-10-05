// Test code for the supplyChain::Product module
module supplyChain::tests {
    use aptos_framework::account;
    use aptos_std::vector;
    use aptos_std::signer;
    use supplyChain::Product;

    #[test_only]
    public fun test_init_manufacturer() {
        let manufacturer_account = account::create_account(); // Create an account
        let manufacturer_signer = account::create_signer_for_test(manufacturer_account);
        Product::init_manufacturer(&manufacturer_signer);
        
        // Assert that the Manufacturer resource has been created
        assert!(Product::exists<Product::Manufacturer>(signer::address_of(&manufacturer_signer)), 1);
        
        // Assert that ManufacturerProducts have been initialized
        assert!(Product::exists<Product::ManufacturerProducts>(signer::address_of(&manufacturer_signer)), 1);
    }

    #[test_only]
    public fun test_create_product() {
        let manufacturer_account = account::create_account(); // Create an account
        let manufacturer_signer = account::create_signer_for_test(manufacturer_account);
        Product::init_manufacturer(&manufacturer_signer);
        
        // Create a new product
        Product::create_product(
            &manufacturer_signer,
            1, // product_id
            b"Test Product".to_string(), // product_name
            1001, // batch_number
            1698768000, // manufacture_date (example timestamp)
            500 // product_price
        );

        // Retrieve the product
        let maybe_product = Product::get_product(signer::address_of(&manufacturer_signer), 1);
        assert!(option::is_some(&maybe_product), 2);
        
        // Check product details
        let product = option::borrow(&maybe_product);
        assert!(product.id == 1, 3);
        assert!(product.name == b"Test Product".to_string(), 4);
        assert!(product.price == 500, 5);
    }

    #[test_only]
    public fun test_purchase_product() {
        let manufacturer_account = account::create_account(); // Create an account
        let manufacturer_signer = account::create_signer_for_test(manufacturer_account);
        Product::init_manufacturer(&manufacturer_signer);
        
        // Create a new product
        Product::create_product(
            &manufacturer_signer,
            2, // product_id
            b"Purchase Test Product".to_string(), // product_name
            1002, // batch_number
            1698768000, // manufacture_date (example timestamp)
            1000 // product_price
        );

        let consumer_account = account::create_account(); // Create a consumer account
        let consumer_signer = account::create_signer_for_test(consumer_account); // Create a signer for the consumer account


        // Attempt to purchase the product
        Product::purchase_product(&consumer_signer, signer::address_of(&manufacturer_signer), 2);

        // Verify that the product is removed from the manufacturer products
        let maybe_product = Product::get_product(signer::address_of(&manufacturer_signer), 2);
        assert!(option::is_none(&maybe_product), 6);
    }
}
