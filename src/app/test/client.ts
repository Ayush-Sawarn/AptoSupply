// aptosClient.ts
import { AptosAccount, AptosClient } from "aptos";

// Aptos Devnet URL (you can change this for testnet/mainnet as needed)
const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

export { client, AptosAccount };