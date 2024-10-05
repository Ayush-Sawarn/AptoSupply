"use client";

import { AccountInfo } from "@/components/aptos/AccountInfo.tsx";
import { Header } from "@/components/Header";
import { MessageBoard } from "@/components/aptos/MessageBoard.tsx";
import { NetworkInfo } from "@/components/aptos/NetworkInfo.tsx";
import { TransferAPT } from "@/components/aptos/TransferAPT.tsx";
import { WalletDetails } from "@/components/aptos/WalletDetails.tsx";
// Internal Components
import { Card, CardContent } from "@/components/ui/card";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

function App() {
  const { connected } = useWallet();

  return (
    <>
      <div className="p-5 sm:p-12 grid grid-cols-12 gap-5 sm:gap-12">
        <Header />
      </div>
      <div className="flex items-center justify-center flex-col">
        {connected && (
          <Card>
            <CardContent className="flex flex-col gap-10 pt-6">
              <WalletDetails />
              <NetworkInfo />
              <AccountInfo />
              <TransferAPT />
              <MessageBoard />
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
