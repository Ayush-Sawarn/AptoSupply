"use client";

// pages/index.tsx
import React, { useState } from "react";
import { AptosAccount } from "aptos";
import { initAllManufacturers } from "./supplychain.ts";

const Home: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  // const fundAccount = async (account: AptosAccount) => {
  //   const faucetUrl = "https://faucet.testnet.aptoslabs.com";
  //   try {
  //     const response = await fetch(`${faucetUrl}/mint`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         address: account.address(),
  //         authKey: account.authKey(),
  //         pubKey: account.pubKey(),
  //         amount: 100_000_000, // Adjust amount as needed
  //       }),
  //     });
  //
  //     if (!response.ok) {
  //       console.log(`HTTP error! Status: ${response.status}`);
  //     } else {
  //       console.log("hi ");
  //     }
  //
  //     const data = await response.json();
  //     console.log("Account funded:", data);
  //   } catch (error) {
  //     console.error("Error funding account:", error);
  //     setStatus("Error occurred while funding the account");
  //   }
  // };

  const handleInitManufacturers = async () => {
    try {
      // Create a new account or use an existing one
      const account = new AptosAccount(); // For demo purposes, creating a new account
      console.log(account.pubKey().toString());
      // await fundAccount(account);

      // Call the initAllManufacturers function
      const response = await initAllManufacturers(account);

      setStatus(`Transaction Hash: ${response.hash}`);
    } catch (error) {
      console.dir(error);
      setStatus("Error occurred while initializing manufacturers");
    }
  };

  return (
    <div>
      <h1>Supply Chain - Init Manufacturers</h1>
      <button onClick={handleInitManufacturers}>Init Manufacturers</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Home;
