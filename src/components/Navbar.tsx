import React from "react";
import { WalletSelector } from "@/components/aptos/WalletSelector.tsx";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen h-fill px-12">
      <div className="w-full h-full py-5 flex justify-between items-center border-b border-zinc-300">
        <div className="font-bold text-2xl">Brand&reg;</div>
        <div className="flex gap-5 items-center font-medium h-full">
          <Link href={"/"}>Link 1</Link>
          <Link href={"/"}>Link 1</Link>
          <Link href={"/"}>Link 1</Link>
          <WalletSelector />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
