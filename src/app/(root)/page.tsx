"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const manufacturers = [
  {
    id: "1",
    name: "Adidas",
    desc: "Life's too short for boring code, so I sprinkle a little fun into every function I write",
    img: "https://cdn.pixabay.com/photo/2017/04/10/15/06/cherry-blossoms-2218781_960_720.jpg",
  },
  {
    id: "2",
    name: "Reebok",
    desc: "Coffee fuels my creativity, and sometimes my entire personality",
    img: "https://cdn.pixabay.com/photo/2019/02/24/15/29/light-4017836_960_720.png",
  },
  {
    id: "3",
    name: "Wikipedia",
    desc: "Debugging is my cardio, running through lines of code burns more calories than running",
    img: "https://cdn.pixabay.com/photo/2022/02/19/22/48/forest-7023487_960_720.jpg",
  },
  {
    id: "4",
    name: "Skechers",
    desc: "Every time I finish something, I realize it’s just the beginning of the next thing",
    img: "https://cdn.pixabay.com/photo/2023/03/20/06/30/fall-7863868_960_720.jpg",
  },
  {
    id: "5",
    name: "Jaguar",
    desc: "Typing fast makes me feel like a hacker in a movie, even if I’m just writing a grocery list",
    img: "https://cdn.pixabay.com/photo/2020/03/25/14/57/orbs-4967554_960_720.jpg",
  },
];

// Internal Components
// import { useWallet } from "@aptos-labs/wallet-adapter-react";

function App() {
  // const { connected } = useWallet();

  return (
    <>
      <div className="px-5 col-span-12 lg:col-span-9 py-5">
        <div className="text-4xl font-semibold mb-5">All manufacturers</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-12">
          {manufacturers.map((item, index) => (
            <div className="w-full sm:max-w-96 relative" key={index}>
              <Image
                src={item.img}
                alt={item.name}
                width={600}
                height={400}
                className=" w-full aspect-video object-cover rounded-lg mb-5"
              />
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="text-zinc-600 mb-12">{item.desc}</div>
              <Link
                href={"/"}
                className="flex gap-2.5 items-center font-medium text-lg underline absolute bottom-0 left-0"
              >
                Show products <ArrowRight size={16} className="align-middle" />
              </Link>
            </div>
          ))}
        </div>
        {/*{connected && (*/}
        {/*  <Card>*/}
        {/*    <CardContent className="flex flex-col gap-10 pt-6">*/}
        {/*      <WalletDetails />*/}
        {/*      <NetworkInfo />*/}
        {/*      <AccountInfo />*/}
        {/*      <TransferAPT />*/}
        {/*      <MessageBoard />*/}
        {/*    </CardContent>*/}
        {/*  </Card>*/}
        {/*)}*/}
      </div>
      <div className="hidden lg:block col-span-3 bg-zinc-300 p-5 rounded-lg">Something uninmportant</div>
    </>
  );
}

export default App;
