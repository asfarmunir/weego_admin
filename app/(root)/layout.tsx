import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" relative h-screen ">
      <div
        className="  sticky 
        top-0
        z-50
        w-full
        "
      >
        <div className=" w-full px-1.5 2xl:px-2.5 py-2 justify-between flex items-center absolute">
          <Navbar />
        </div>
      </div>
      <section className=" pt-20 2xl:pt-28">{children}</section>
      <div className=" w-full pt-6 pb-8  flex items-center justify-center ">
        <p className="text-xs 2xl:text-sm">
          Copyright © 2024 - Hero Picks Trading - Version 1.0.37
        </p>
      </div>
    </main>
  );
};

export default layout;
