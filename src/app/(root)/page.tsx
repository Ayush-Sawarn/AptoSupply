"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import manufacturers from "@/lib/data.json";

function App() {
  return (
    <>
      <div className="px-5 col-span-12 lg:col-span-9 py-5">
        <div className="text-4xl font-semibold mb-5">All manufacturers</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-12">
          {/*// TODO: Replace usages of data.json with actual data from smart contract thingy */}
          {manufacturers.map((item, index) => (
            <div className="w-full sm:max-w-96 relative" key={index}>
              <Image
                src={item.img}
                alt={item.name}
                width={600}
                height={400}
                className=" w-full aspect-video object-cover rounded-lg mb-5 opacity-50"
              />
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="text-zinc-400 mb-12">{item.desc}</div>
              <Link
                href={`/manufacturer/${item.id}`}
                className="flex gap-2.5 items-center font-medium text-lg underline absolute bottom-0 left-0"
              >
                Show products <ArrowRight size={16} className="align-middle" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block col-span-3 bg-zinc-300 p-5 rounded-lg">Something uninmportant</div>
    </>
  );
}

export default App;
