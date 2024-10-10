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
const PayoutByPeriod = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger className=" bg-white dark:bg-slate-950   justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm px-3 md:px-4 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
              Filter By Date Range
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
                account
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                customer
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                name
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                first name
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                last name
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                email
              </TableHead>

              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                plan name
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className="bg-[#FBFBFB]  rounded-tl-full rounded-bl-full ">
                  <p className=" bg-[#CCCEFD] dark:bg-purple-400/60 text-primary    flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                    48323
                  </p>
                </TableCell>
                <TableCell className="bg-[#FBFBFB]  ">
                  <p className=" bg-[#F2F962] dark:bg-yellow-400/60 text-primary    flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                    48323
                  </p>
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB]  2xl:text-sm font-semibold">
                  Thang Do Chien
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB]  2xl:text-sm font-semibold">
                  Thang
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB]  2xl:text-sm font-semibold">
                  Do Chien
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB]  2xl:text-sm font-semibold">
                  chienthanghd34@gmail.com
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB]  2xl:text-sm font-semibold">
                  10K Phase 1- Swing - MTR
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
