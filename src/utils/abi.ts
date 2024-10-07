export const ABI = {
  address: "0xeb1450909ac54037b395c919d3afae8c1fc20c7b90e0f12fa6df3aea0a6cd7de",
  name: "supply_chain",
  friends: [],
  exposed_functions: [
    {
      name: "create_product",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u64", "0x1::string::String", "u64", "u64", "u64"],
      return: [],
    },
    {
      name: "get_all_manufacturers",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: ["vector<address>"],
    },
    {
      name: "get_product",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address", "u64"],
      return: [
        "0x1::option::Option<0x24abf8e01e29f55635acff7986004320ffc41102833aca32d630cfac181a5e6e::supply_chain::Product>",
      ],
    },
    {
      name: "init_all_manufacturers",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer"],
      return: [],
    },
    {
      name: "init_manufacturer",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "0x1::string::String"],
      return: [],
    },
    {
      name: "init_manufacturer_products",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer"],
      return: [],
    },
    {
      name: "purchase_product",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "address", "u64"],
      return: [],
    },
    {
      name: "test",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: ["u64"],
    },
  ],
  structs: [
    {
      name: "AllManufacturers",
      is_native: false,
      is_event: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "manufacturers",
          type: "vector<address>",
        },
      ],
    },
    {
      name: "Consumer",
      is_native: false,
      is_event: false,
      abilities: ["store"],
      generic_type_params: [],
      fields: [
        {
          name: "account",
          type: "address",
        },
        {
          name: "purchases",
          type: "vector<u64>",
        },
      ],
    },
    {
      name: "Counter",
      is_native: false,
      is_event: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "value",
          type: "u64",
        },
      ],
    },
    {
      name: "Manufacturer",
      is_native: false,
      is_event: false,
      abilities: ["copy", "store", "key"],
      generic_type_params: [],
      fields: [
        {
          name: "account",
          type: "address",
        },
        {
          name: "name",
          type: "0x1::string::String",
        },
      ],
    },
    {
      name: "ManufacturerProducts",
      is_native: false,
      is_event: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "products",
          type: "vector<0x24abf8e01e29f55635acff7986004320ffc41102833aca32d630cfac181a5e6e::supply_chain::Product>",
        },
      ],
    },
    {
      name: "Product",
      is_native: false,
      is_event: false,
      abilities: ["copy", "drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "id",
          type: "u64",
        },
        {
          name: "name",
          type: "0x1::string::String",
        },
        {
          name: "manufacturer",
          type: "address",
        },
        {
          name: "batch_number",
          type: "u64",
        },
        {
          name: "manufacture_date",
          type: "u64",
        },
        {
          name: "price",
          type: "u64",
        },
      ],
    },
  ],
} as const;
