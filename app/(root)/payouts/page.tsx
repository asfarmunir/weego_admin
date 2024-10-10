import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";
import CreatePayout from "@/components/shared/modals/CreatePayout";

const payoutTabs = [
  {
    name: "all",
  },
  {
    name: "pending",
  },
  {
    name: "completed",
  },
  {
    name: "Signed",
  },
];
const page = () => {
  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8">
      <p className=" font-thin text-xs 2xl:text-sm">Sales Management</p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Payouts</h1>
      <div
        className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
      >
        <div className=" w-full px-3 py-3.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
            {payoutTabs.map((tab, index) => (
              <button
                key={index}
                className={` capitalize text-xs 2xl:text-sm font-semibold p-2.5 2xl:p-3 px-5 
                tracking-wide 2xl:px-7 text-center rounded-full ${
                  index === 0
                    ? "bg-black dark:bg-[#194867] text-white"
                    : " bg-background  text-primary"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-1.5">
            <CreatePayout />
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
        <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
          <Table className=" bg-background">
            <TableHeader className=" ">
              <TableRow className=" border-none">
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
                  customer
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                  account
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                  Amount
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                  share
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                  status
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                  Date of Request
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                  method
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
                  actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="  ">
              {Array.from({ length: 6 }).map((_, i) => (
                <TableRow key={i} className=" border-none  ">
                  <TableCell className=" bg-[#FBFBFB] dark:bg-transparent border-none  rounded-tl-full rounded-bl-full">
                    <p className=" bg-[#CCCEFD] dark:bg-[#cccefd79] text-primary flex items-center justify-start w-fit px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      C23645
                    </p>
                  </TableCell>
                  <TableCell className="bg-[#FBFBFB] dark:bg-transparent border-none  ">
                    <p className=" bg-[#F2F962] dark:bg-yellow-400/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      729733
                    </p>
                  </TableCell>
                  <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none    2xl:text-sm font-semibold">
                    14892.00
                  </TableCell>
                  <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
                    14892.00
                  </TableCell>
                  <TableCell className="bg-[#FBFBFB] dark:bg-transparent border-none  ">
                    <p className=" bg-[#FFB70333] dark:bg-orange-400/60 text-primary   flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      Submitted
                    </p>
                  </TableCell>
                  <TableCell className=" text-xs   text-primary bg-[#FBFBFB] dark:bg-transparent border-none 2xl:text-sm font-semibold">
                    2.8.2024 UTC - 9:24:21
                  </TableCell>
                  <TableCell className="bg-[#FBFBFB] dark:bg-transparent border-none ">
                    <p className=" bg-[#05b8ff3a] dark:bg-blue-400/60 text-primary flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      Jazzcash
                    </p>
                  </TableCell>
                  <TableCell className=" text-xs space-x-1  text-primary bg-[#FBFBFB] dark:bg-transparent border-none rounded-tr-full rounded-br-full 2xl:text-sm font-semibold">
                    <button
                      className="bg-white p-3 dark:bg-slate-900  rounded-full
       text-xs 2xl:text-sm font-semibold "
                    >
                      <IoEyeOutline className="w-4 h-4 text-black dark:text-white" />
                    </button>{" "}
                    <button
                      className="bg-white p-3 dark:bg-slate-900  rounded-full
       text-xs 2xl:text-sm font-semibold "
                    >
                      <RxCountdownTimer className="w-4 h-4 text-black dark:text-white" />
                    </button>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between bg-background py-4  px-6">
          <p className="  text-xs font-semibold 2xl:text-sm">
            1-10 of 195 tour
          </p>
          <div className="flex items-center gap-3 pr-1">
            <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
            <p className=" font-semibold text-sm 2xl:text-base">1</p>
            <p className=" text-sm 2xl:text-base">2</p>
            <p className=" text-sm 2xl:text-base">...</p>
            <p className=" text-sm 2xl:text-base">8</p>
            <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
