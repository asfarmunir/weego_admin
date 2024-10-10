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
import { IoChevronDownOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const tabs = [
  {
    name: "all",
    tab: "all",
  },
  {
    name: "active",
    tab: "active",
  },
  {
    name: "inactive",
    tab: "inactive",
  },
  {
    name: "pending",
    tab: "pending",
  },
  {
    name: "rejected",
    tab: "rejected",
  },
];
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const page = () => {
  const [tab, setTab] = React.useState("all");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 overflow-hidden">
      <Link
        href={"/affiliates"}
        className=" font-semibold mb-3 inline-flex items-center gap-2"
      >
        <IoMdArrowRoundBack className="w-5 h-5" />
        <p>Affiliates</p>
      </Link>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Details</h1>
      <div className="flex gap-6 my-6 w-full flex-col">
        <div className="flex  justify-center md:justify-start  max-w-full pb-4 overflow-auto  items-center gap-1.5">
          {tabs.map((t, index) => (
            <button
              key={index}
              onClick={() => handleTab(t.tab)}
              className={` capitalize text-xs text-nowrap font-semibold p-2.5 2xl:p-3 px-5 
                tracking-wide 2xl:px-7 text-center rounded-full ${
                  tab === t.tab
                    ? "bg-black dark:bg-[#194867] text-white"
                    : " bg-slate-50 dark:bg-slate-900  text-primary"
                }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
      <div className=" w-full">
        <div
          className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
        >
          <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
              <DropdownMenu>
                <DropdownMenuTrigger className=" bg-white dark:bg-slate-950   justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm px-3 md:px-4 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
                  Bulk actions
                  <IoChevronDownOutline className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" border-none bg-slate-50 dark:bg-slate-950  mt-1  p-3 rounded-lg shadow-sm">
                  <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                    <p>TOP EARNERS</p>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                    <p>AVERAGE</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                    <p>BOTTOM EARNERS</p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>{" "}
              <DropdownMenu>
                <DropdownMenuTrigger className=" bg-white dark:bg-slate-950   justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm px-3 md:px-4 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
                  Select affiliate parent...
                  <IoChevronDownOutline className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" border-none bg-slate-50 dark:bg-slate-950  mt-1  p-3 rounded-lg shadow-sm">
                  <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                    <p>TOP EARNERS</p>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                    <p>AVERAGE</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                    <p>BOTTOM EARNERS</p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>{" "}
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
            </div>
          </div>
          <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
            <Table className=" bg-background">
              <TableHeader className=" ">
                <TableRow className=" border-none">
                  <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
                    ID
                  </TableHead>
                  <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                    name
                  </TableHead>
                  <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                    parent
                  </TableHead>
                  <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                    Paid Earnings
                  </TableHead>
                  <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                    Unpaid Earnings
                  </TableHead>
                  <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                    Unpaid Commisions
                  </TableHead>
                  <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                    status
                  </TableHead>

                  <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                    actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 6 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="text-xs  text-primary 2xl:text-sm font-semibold rounded-tl-full rounded-bl-full ">
                      345
                    </TableCell>
                    <TableCell className=" text-xs  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                      <div className="flex items-center gap-4">
                        <Image
                          src={"/avatar.png"}
                          width={35}
                          height={35}
                          alt="avatar"
                          className="rounded-full"
                        />
                        <p>Sandro Castonella</p>
                      </div>
                    </TableCell>
                    <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                      -
                    </TableCell>
                    <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                      $0.00
                    </TableCell>
                    <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                      $0.00
                    </TableCell>
                    <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                      $0.00
                    </TableCell>

                    <TableCell className=" text-xs    text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                      <p className=" capitalize w-fit px-4 py-2 rounded-full bg-[#80ED99]/40 dark:border-slate-700 border-slate-200 border">
                        Active
                      </p>
                    </TableCell>
                    <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                      <p className=" capitalize w-fit px-4 py-2 rounded-full  dark:border-slate-700 border-slate-200 border">
                        Edit
                      </p>
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
      </div>{" "}
    </div>
  );
};

export default page;
