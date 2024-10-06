import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "@/constants";

export type WriteMessageArguments = {
  manufacturer_name: string; // the content of the message
};

export const addManufacturer = (args: WriteMessageArguments): InputTransactionData => {
  const { manufacturer_name } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::supply_chain::init_manufacturer`,
      functionArguments: [manufacturer_name],
    },
  };
};
