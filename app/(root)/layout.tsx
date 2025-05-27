import Navbar from "@/components/shared/Navbar";
import React from "react";
import Topbar from "@/components/shared/Topbar";
import Image from "next/image";
const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" relative h-screen bg-[#000214] overflow-x-hidden ">
      <Image
        src="/bg_car.png"
        alt="loader"
        width={800}
        height={200}
        className="absolute -right-10 -bottom-10  opacity-25 "
      />
      <section className=" pb-12 bg-[#000214] ">
        <Navbar />
        <Topbar />
        {children}
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default layout;
