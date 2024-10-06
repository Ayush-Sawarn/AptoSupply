import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "@/constants";

export const initManufacturers = (): InputTransactionData => {
  return {
    data: {
      function: `${MODULE_ADDRESS}::supply_chain::init_all_manufacturers`,
      functionArguments: [],
    },
  };
};
