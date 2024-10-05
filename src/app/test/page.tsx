"use client";

// pages/index.tsx
import React, { useState } from "react";
import { AptosAccount } from "aptos";
import { initAllManufacturers } from "./supplychain.ts";

const Home: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleInitManufacturers = async () => {
    try {
      // Create a new account or use an existing one
      const account = new AptosAccount(); // For demo purposes, creating a new account

      // Call the initAllManufacturers function
      const response = await initAllManufacturers(account);

      setStatus(`Transaction Hash: ${response.hash}`);
    } catch (error) {
      console.error(error);
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
