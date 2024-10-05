import React from "react";
import HeaderPic from "../../public/header.jpg";
import Image from "next/image";
import { WalletSelector } from "@/components/aptos/WalletSelector.tsx";

export function Header() {
  return (
    <div className="col-span-12 min-h-[40vh] rounded-xl p-12 sm:p-24 flex flex-col justify-center items-start relative">
      <Image
        src={HeaderPic}
        alt={"Header picture"}
        width={1080}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-xl rotate-180 opacity-25"
      />
      <div className="text-4xl md:text-5xl font-bold leading-normal md:leading-normal">Short line about the brand</div>
      <div className="text-base font-normal max-w-screen-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur enim facere hic laboriosam?
        Dicta eaque excepturi, recusandae totam ut velit voluptates!
      </div>
      <div className="mt-5">
        <WalletSelector />
      </div>
    </div>
  );
}
