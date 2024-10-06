import React from "react";
import data from "@/lib/data.json";
import SectionHeader from "@/components/SectionHeader.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button.tsx";

// TODO: GenerateStaticParams for when data is fetched
export async function generateStaticParams() {
  const posts = data;

  return posts.map((post) => ({
    id: post.id,
  }));
}

const productData = [0, 1, 2, 3, 4];

const ManufacturerPage = ({ params }: { params: { id: string } }) => {
  const manufacturer = data.filter((e) => e.id === params.id)[0];

  return (
    <div className="p-5 sm:p-12 grid grid-cols-12 gap-5 sm:gap-12">
      <SectionHeader type={"Manufacturer"} img={manufacturer.img} name={manufacturer.name}>
        {manufacturer.desc}
      </SectionHeader>
      <div className="x-5 col-span-12 lg:col-span-9 py-5">
        <div className="text-4xl font-semibold mb-5">All products by {manufacturer.name}</div>

        <Table>
          <TableHeader>
            <TableRow className="text-xl">
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productData.map((data) => (
              <TableRow key={data}>
                <TableCell className="font-medium">{`INV00${data}`}</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">
                  <Button className="bg-zinc-200 text-zinc-900 hover:bg-zinc-400">Purchase</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="hidden lg:block col-span-3 bg-zinc-300 p-5 rounded-lg">Something uninmportant</div>
    </div>
  );
};

export default ManufacturerPage;
