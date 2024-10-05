// supplyChain.ts
import { AptosAccount, client } from "./client.ts";

export async function initAllManufacturers(account: AptosAccount) {
  const payload = {
    type: "entry_function_payload",
    function: "0xe4870253e3c7084cad7fc2fdd30dc199a6092e32daef11777ea46a8cb212a439::supplyChain::init_all_manufacturers",
    type_arguments: [],
    arguments: [],
  };

  // Submit the transaction using the Aptos SDK
  const txn = await client.generateTransaction(account.address(), payload);
  const signedTxn = await client.signTransaction(account, txn);
  const response = await client.submitTransaction(signedTxn);

  // Wait for the transaction to complete
  await client.waitForTransaction(response.hash);

  return response;
}
