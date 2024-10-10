import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
const PayoutByPeriod = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4">Details</h3>
        </div>
        <div className="flex items-center flex-wrap gap-1.5">
          <div className=" bg-white dark:bg-slate-950 inline-flex  w-full md:w-fit items-center px-2 rounded-full">
            <LuSearch className="w-4 h-4 text-[#848BAC] " />
            <Input
              className=" 
                text-[#848BAC]
                border-none
                focus:outline-none
                w-full
                md:w-fit
                focus:ring-0
                text-xs
                focus:border-none
                placeholder-slate-900 
                "
              placeholder={"search..."}
            />
          </div>
          <button className="bg-white    dark:bg-slate-950 p-3 inline-flex items-center font-semibold gap-1 capitalize rounded-full text-xs ">
            export
            <Image
              src="/export.svg"
              width={14}
              height={14}
              alt="export"
              className=" dark:invert"
            />
          </button>
          <button className="bg-white dark:bg-slate-950 p-3 capitalize rounded-full text-xs font-semibold ">
            toggle colomn
          </button>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2 lg:grid-cols-4  rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        {details.map((detail, index) => (
          <div
            key={index}
            className=" p-5 flex flex-col gap-1 bg-[#FBFBFB] dark:bg-slate-900 dark:border-slate-800 border border-[#CED2D6] rounded-[2rem]"
          >
            <p className=" text-sm 2xl:text-lg font-semibold">{detail.title}</p>
            <p className=" text-xs 2xl:text-sm">{detail.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayoutByPeriod;

const details = [
  {
    title: "Funded",
    category: "Plan Category",
  },
  {
    title: "200K Live Standart Evaluation - MTR",
    category: "Plan Description",
  },
  {
    title: "200K Live Standart Evaluation - MTR",
    category: "Plan Label",
  },
  {
    title: "2000",
    category: "Starting Balance",
  },
  {
    title: "20",
    category: "Leverage",
  },
  {
    title: "30",
    category: "Inactivity Period",
  },
  {
    title: "20%",
    category: "Max Drawdown",
  },
  {
    title: "Pervious day balance  / equity",
    category: "Drawndown Type",
  },
  {
    title: "5%",
    category: "Daily Drawdown",
  },
  {
    title: "Yes",
    category: "Contract Required",
  },
  {
    title: "10%",
    category: "Max Open Lots",
  },
  {
    title: "80%",
    category: "Profit Share",
  },
  {
    title: "30",
    category: "Fisrt Withdrawal",
  },
  {
    title: "20",
    category: "Subsequent Withdrawals",
  },
  {
    title: "10%",
    category: "Min. Withdrawal",
  },
  {
    title: "Yes",
    category: "Allow Expert Adviser",
  },
];
