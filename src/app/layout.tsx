import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import { ReactQueryProvider } from "@/components/aptos/ReactQueryProvider.tsx";
import { WalletProvider } from "@/components/aptos/WalletProvider.tsx";
import { Toaster } from "@/components/ui/toaster";
import { WrongNetworkAlert } from "@/components/aptos/WrongNetworkAlert.tsx";

import "./globals.css";
import Navbar from "@/components/Navbar.tsx";

const satoshi = localFont({
  src: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brand Name | Aptos Hackathon 2024",
  description: "Dhinka chika dhinka chika dhinka chika dhinka chika a a a a a a a a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <WalletProvider>
          <ReactQueryProvider>
            <div>
              <Navbar />
            </div>
            <div id="root">{children}</div>
            <WrongNetworkAlert />
            <Toaster />
          </ReactQueryProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
