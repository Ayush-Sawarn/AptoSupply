import { createSurfClient } from "@thalalabs/surf";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { ABI } from "./abi";

// First, create an Aptos client, make sure the network is the one that contract lives on
export const aptos = new Aptos(new AptosConfig({ network: Network.TESTNET }));
// Second, create a SurfClient with the Aptos client and the ABI
export const surfClient = createSurfClient(aptos).useABI(ABI);

export const [balance] = await surfClient.view.test({
  functionArguments: [],
  typeArguments: [],
});
