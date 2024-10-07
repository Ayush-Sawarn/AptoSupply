"use client";

import React, { useState } from "react";
import { WalletSelector } from "@/components/aptos/WalletSelector.tsx";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";

const Navbar = () => {
  const { account, connected } = useWallet();

  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-zinc-900 w-screen h-fill px-5 sm:px-12 sticky top-0 text-zinc-100">
      <div className="w-full h-full py-5 flex justify-between items-center border-b border-zinc-700">
        <Link href={"/"}>
          <div className="font-bold text-2xl">AptoSupply&reg;</div>
        </Link>
        <div className="hidden sm:flex gap-5 items-center font-medium h-full">
          {connected && (
            <Dialog>
              <DialogTrigger>Become a manufacturer</DialogTrigger>
              <DialogContent className="bg-zinc-900 text-zinc-100 space-y-3">
                <DialogHeader>
                  <DialogTitle>Become a Manufacturer</DialogTitle>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsum maxime molestias. Accusamus
                    accusantium asperiores
                  </DialogDescription>
                  <Label className="pt-5">Manufacturer Address</Label>
                  <Input
                    className="bg-zinc-900 text-zinc-100"
                    placeholder={"Manufacturer Address"}
                    disabled={connected}
                    value={account?.address}
                  />
                  <Label className="pt-3">Manufacturer Name</Label>
                  <Input
                    className="bg-zinc-900 text-zinc-100"
                    placeholder={"Manufacturer Name"}
                    disabled={!connected}
                  />
                  <div>
                    <Button className="bg-zinc-800 hover:bg-zinc-700 mt-3 w-full">Submit</Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
          {connected && (
            <Dialog>
              <DialogTrigger>Add product</DialogTrigger>
              <DialogContent className="bg-zinc-900 text-zinc-100 space-y-3">
                <DialogHeader>
                  <DialogTitle>Add a product</DialogTitle>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsum maxime molestias. Accusamus
                    accusantium asperiores
                  </DialogDescription>
                  <Label className="pt-5">Manufacturer Address</Label>
                  <Input
                    className="bg-zinc-900 text-zinc-100"
                    placeholder={"Manufacturer Address"}
                    disabled={connected}
                    value={account?.address}
                  />
                  <Label className="pt-5">Product ID</Label>
                  <Input className="bg-zinc-900 text-zinc-100" placeholder={"Product ID"} disabled={!connected} />
                  <Label className="pt-5">Batch Number</Label>
                  <Input className="bg-zinc-900 text-zinc-100" type={"number"} disabled={!connected} />
                  <Label className="pt-5">Price</Label>
                  <Input className="bg-zinc-900 text-zinc-100" type={"number"} disabled={!connected} />
                  <div>
                    <Button className="bg-zinc-800 hover:bg-zinc-700 mt-3 w-full">Submit</Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
          <WalletSelector />
        </div>
        <div className="transition-all inline sm:hidden cursor-pointer" onClick={() => setToggle(!toggle)}>
          {toggle ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>
      <div
        className={`transition-all bg-zinc-900 overflow-clip flex flex-col gap-5 ${
          toggle ? "h-fit border-b border-zinc-700 py-5 font-medium" : "h-0"
        }`}
      >
        {connected && (
          <div>
            <Dialog>
              <DialogTrigger>Become a manufacturer</DialogTrigger>
              <DialogContent className="bg-zinc-900 text-zinc-100 space-y-3">
                <DialogHeader>
                  <DialogTitle>Become a Manufacturer</DialogTitle>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsum maxime molestias. Accusamus
                    accusantium asperiores
                  </DialogDescription>
                  <Label className="pt-5">Manufacturer Address</Label>
                  <Input
                    className="bg-zinc-900 text-zinc-100"
                    placeholder={"Manufacturer Address"}
                    disabled={connected}
                    value={account?.address}
                  />
                  <Label className="pt-3">Manufacturer Name</Label>
                  <Input
                    className="bg-zinc-900 text-zinc-100"
                    placeholder={"Manufacturer Name"}
                    disabled={!connected}
                  />
                  <div>
                    <Button className="bg-zinc-800 hover:bg-zinc-700 mt-3 w-full">Submit</Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
        {connected && (
          <div>
            <Dialog>
              <DialogTrigger>Add product</DialogTrigger>
              <DialogContent className="bg-zinc-900 text-zinc-100 space-y-3">
                <DialogHeader>
                  <DialogTitle>Add a product</DialogTitle>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsum maxime molestias. Accusamus
                    accusantium asperiores
                  </DialogDescription>
                  <Label className="pt-5">Manufacturer Address</Label>
                  <Input
                    className="bg-zinc-900 text-zinc-100"
                    placeholder={"Manufacturer Address"}
                    disabled={connected}
                    value={account?.address}
                  />
                  <Label className="pt-5">Product ID</Label>
                  <Input className="bg-zinc-900 text-zinc-100" placeholder={"Product ID"} disabled={!connected} />
                  <Label className="pt-5">Batch Number</Label>
                  <Input className="bg-zinc-900 text-zinc-100" type={"number"} disabled={!connected} />
                  <Label className="pt-5">Price</Label>
                  <Input className="bg-zinc-900 text-zinc-100" type={"number"} disabled={!connected} />
                  <div>
                    <Button className="bg-zinc-800 hover:bg-zinc-700 mt-3 w-full">Submit</Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
        <div>
          <WalletSelector />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
