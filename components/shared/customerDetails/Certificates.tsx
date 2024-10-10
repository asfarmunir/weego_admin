"use client";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoChevronDownOutline, IoEyeOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";

const PayoutByPeriod = () => {
  const [tab, setTab] = React.useState("all");

  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-4">
          <h3 className="font-semibold pl-4">Certificates</h3>
        </div>
        <div className="flex items-center flex-wrap md:flex-nowrap gap-1.5">
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
                type
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Created date
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                assigndet date
              </TableHead>

              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  Contract{" "}
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  28/07/2024 UTC 10:36:20 PM
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  28/07/2024 UTC 10:36:20 PM
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
        <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
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
  );
};

export default PayoutByPeriod;
