import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import AddWidget from "@/components/shared/modals/AddWidget";
const page = () => {
  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8">
      <p className=" font-thin text-xs 2xl:text-sm">Sales Management</p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Dashboard</h1>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 mb-10 lg:grid-cols-3 gap-4">
        <div
          className=" w-full rounded-3xl bg-[#F7F7F7] p-3.5 dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
        >
          <p className=" text-xs 2xl:text-sm font-semibold mb-4 ">Revenue</p>
          <div className=" w-full flex  flex-col bg-background p-4 pb-7 gap-3.5 rounded-3xl">
            <div className=" w-full flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl 2xl:text-4xl font-bold">Rs32,323.99</h1>
                <p className=" text-sm 2xl:text-base font-thin">
                  Total Revenue
                </p>
              </div>
              <p className=" bg-[#DBED80] px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-yellow-400/40">
                +1.5%
              </p>
            </div>
            <div className=" w-full h-10 rounded-full">
              <div className=" w-[60%] bg-[#80ED99] dark:bg-green-400/60 rounded-full h-full"></div>
            </div>
            <div className=" w-full flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl 2xl:text-4xl font-bold">Rs4500</h1>
                <p className=" text-sm 2xl:text-base font-thin">
                  Compared to last month
                </p>
              </div>
              <p className=" bg-[#EDA680]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-orange-400/40">
                +1.5%
              </p>
            </div>
            <div className=" w-full h-10 rounded-full">
              <div className=" w-[50%] bg-[#48CAE4] dark:bg-blue-400/60 rounded-full h-full"></div>
            </div>
          </div>
        </div>
        <div
          className=" w-full rounded-3xl bg-[#F7F7F7] p-3.5 dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
        >
          <p className=" text-xs 2xl:text-sm font-semibold mb-4 ">Revenue</p>
          <div className=" w-full bg-[#80ED99] dark:bg-green-400/60 rounded-3xl p-6 mb-3 relative flex flex-col gap-3">
            <p className="text-xs 2xl:text-sm font-semibold ">Total Revenue</p>
            <h3 className=" text-3xl 2xl:text-4xl font-bold">Rs414,743.84</h3>
            <p className="text-xs 2xl:text-sm font-semibold ">
              +18% Total to pay
            </p>
            <Image
              src="/downLine.png"
              width={100}
              height={100}
              alt="chart"
              className="absolute right-10 top-[40%]"
            />
          </div>
          <div className=" w-full bg-[#48CAE4] dark:bg-blue-400/60  rounded-3xl p-6  relative flex flex-col gap-3">
            <p className="text-xs 2xl:text-sm font-semibold ">Total Profit</p>
            <h3 className=" text-3xl 2xl:text-4xl font-bold">Rs414,743.84</h3>
            <p className="text-xs 2xl:text-sm font-semibold ">
              +18% Total to pay
            </p>
            <Image
              src="/downLine.png"
              width={100}
              height={100}
              alt="chart"
              className="absolute right-10 top-[40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
