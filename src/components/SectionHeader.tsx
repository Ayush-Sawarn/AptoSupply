import React, { ReactNode } from "react";
import Image from "next/image";

interface Props {
  name: string;
  children: ReactNode;
  img: string;
  type?: string;
}

const SectionHeader = ({ type, name, children, img }: Props) => {
  return (
    <div className="col-span-12 min-h-[40vh] rounded-xl p-12 sm:p-24 flex flex-col justify-center items-start relative">
      <Image
        src={img}
        alt={"Header picture"}
        width={1080}
        height={600}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-xl rotate-180 opacity-25"
      />
      {type ? (
        <div className="text-4xl md:text-5xl font-bold leading-normal md:leading-normal">{`${type}: ${name}`}</div>
      ) : (
        <div className="text-4xl md:text-5xl font-bold leading-normal md:leading-normal">{`${name}`}</div>
      )}
      <div className="text-base font-normal max-w-screen-sm">{children}</div>
    </div>
  );
};

export default SectionHeader;
