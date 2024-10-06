"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import manufacturers from "@/lib/data.json";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast.ts";
import { getTest } from "@/view-functions/getTest.ts";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { aptosClient } from "@/utils/aptosClient.ts";
import { initManufacturers } from "@/entry-functions/initManufacturer.ts";
import { Button } from "@/components/ui/button.tsx";
import { addManufacturer } from "@/entry-functions/addManufacturer.ts";

function App() {
  const queryClient = useQueryClient();
  const { account, signAndSubmitTransaction } = useWallet();

  const [manufacturerData, setManufacturerData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTest();
      setManufacturerData(result);
    };
    fetchData();
  }, []);

  const clickInit = async () => {
    if (!account) {
      return;
    }

    try {
      const committedTransaction = await signAndSubmitTransaction(initManufacturers());
      const executedTransaction = await aptosClient().waitForTransaction({
        transactionHash: committedTransaction.hash,
      });
      await queryClient.invalidateQueries();
      toast({
        title: "Success",
        description: `Transaction succeeded, hash: ${executedTransaction.hash}`,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const clickAdd = async () => {
    if (!account) {
      return;
    }

    try {
      const committedTransaction = await signAndSubmitTransaction(
        addManufacturer({
          manufacturer_name: "manufacturer",
        }),
      );
      const executedTransaction = await aptosClient().waitForTransaction({
        transactionHash: committedTransaction.hash,
      });
      await queryClient.invalidateQueries();
      toast({
        title: "Success",
        description: `Transaction succeeded, hash: ${executedTransaction.hash}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="px-5 col-span-12 lg:col-span-9 py-5">
        <div className="text-4xl font-semibold mb-5">All manufacturers</div>
        {manufacturerData}
        <Button onClick={clickInit}>Init</Button>
        <Button onClick={clickAdd}>Add</Button>
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
    </>
  );
}

export default App;
