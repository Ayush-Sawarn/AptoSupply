"use client";

import React, { useState } from "react";
import { WalletSelector } from "@/components/aptos/WalletSelector.tsx";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-zinc-200 w-screen h-fill px-5 sm:px-12 sticky top-0">
      <div className="w-full h-full py-5 flex justify-between items-center border-b border-zinc-300">
        <div className="font-bold text-2xl">Brand&reg;</div>
        <div className="hidden sm:flex gap-5 items-center font-medium h-full">
          <Link href={"/"}>Link 1</Link>
          <Link href={"/"}>Link 1</Link>
          <Link href={"/"}>Link 1</Link>
          <WalletSelector />
        </div>
        <div className="transition-all inline sm:hidden cursor-pointer" onClick={() => setToggle(!toggle)}>
          {toggle ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>
      <div
        className={`transition-all bg-zinc-200 overflow-clip flex flex-col gap-5 ${
          toggle ? "h-fit border-b border-zinc-300 py-5 font-medium" : "h-0"
        }`}
      >
        <Link href={"/"}>Link 1</Link>
        <Link href={"/"}>Link 1</Link>
        <Link href={"/"}>Link 1</Link>
        <div>
          <WalletSelector />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
