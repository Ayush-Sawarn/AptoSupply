import React from "react";
import data from "@/lib/data.json";
import ManufacturerHeader from "@/components/ManufacturerHeader.tsx";

// TODO: GenerateStaticParams for when data is fetched
export async function generateStaticParams() {
  const posts = data;

  return posts.map((post) => ({
    id: post.id,
  }));
}

const ManufacturerPage = ({ params }: { params: { id: string } }) => {
  const manufacturer = data.filter((e) => e.id === params.id)[0];

  return (
    <div className="p-5 sm:p-12 grid grid-cols-12 gap-5 sm:gap-12">
      <ManufacturerHeader img={manufacturer.img} name={manufacturer.name}>
        {manufacturer.desc}
      </ManufacturerHeader>
      {params.id}
    </div>
  );
};

export default ManufacturerPage;
