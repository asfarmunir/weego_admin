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
const tabs = [
  {
    name: "template",
    tab: "template",
  },
  {
    name: "history",
    tab: "history",
  },
  {
    name: "Custom Variables",
    tab: "Custom Variables",
  },
  {
    name: "Email Alert",
    tab: "Email Alert",
  },
];
const PayoutByPeriod = () => {
  const [tab, setTab] = React.useState("template");

  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-4">
          <h3 className="font-semibold pl-4">Emails</h3>
          <div className="flex  justify-center md:justify-start     items-center gap-1.5">
            {tabs.map((t, index) => (
              <button
                key={index}
                onClick={() => setTab(t.tab)}
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
      {
        {
          template: <Template />,
          history: <History />,
          "Custom Variables": <CustomVariables />,
          "Email Alert": <EmailAlert />,
        }[tab]
      }
    </div>
  );
};

export default PayoutByPeriod;

const Template = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2 lg:grid-cols-3  rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
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

const details = [
  {
    title: "Select  Group",
    category: "Select  Group",
  },

  {
    title: "Template",
    category: "Template",
  },
  {
    title: " Language",
    category: "Select Language",
  },
  {
    title: "George Winston",
    category: "From",
  },
  {
    title: "no-reply@uwmtrading.com",
    category: "From Email",
  },
  {
    title: "Subject 1",
    category: "Subject Line",
  },
  {
    title: "no-reply@uwmtrading.com",
    category: "Reply to Email",
  },
  {
    title: "Ddkdk@gmail.com",
    category: "BBC Emails",
  },
  {
    title: "Active",
    category: "Status",
  },
];

const History = () => {
  return (
    <>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        <Table className=" bg-background">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
                Subject
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                customer
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Sender
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Recipient
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Opened
              </TableHead>

              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
                Status Events
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                  Hard Breach Detected
                </TableCell>
                <TableCell className=" ">
                  <p className=" bg-[#F2F962] dark:bg-yellow-400/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                    729733
                  </p>
                </TableCell>
                <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                  no-reply@uwmtrading.com
                </TableCell>
                <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                  no-reply@uwmtrading.com
                </TableCell>
                <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                  Yes
                </TableCell>
                <TableCell className=" text-xs  text-primary 2xl:text-sm font-semibold">
                  11/08/2024 UTC 08:10:27 PM
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
    </>
  );
};

const CustomVariables = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        <Table className=" bg-background">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
                Name
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                variable
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                target
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                status
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
                  1
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  Don’t know what actions here
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
const EmailAlert = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        <Table className=" bg-background">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
                Name
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Subject
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Status
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                From
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                To
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                CC
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
                  1
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  Don’t know what actions here
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
