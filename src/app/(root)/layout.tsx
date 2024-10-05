import React, { type ReactNode } from "react";
import { Header } from "@/components/Header.tsx";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="p-5 sm:p-12 grid grid-cols-12 gap-5 sm:gap-12">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
