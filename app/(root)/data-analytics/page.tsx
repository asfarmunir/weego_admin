"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LuSearch } from "react-icons/lu";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import AccountVerification from "@/components/shared/modals/AccountVerification";
const reportTabs = [
  {
    name: "betting trends",
    tab: "betting-trends",
  },
  { name: "user insights", tab: "user-insights" },
  {
    name: "predictive analysis",
    tab: "predictive-analysis",
  },
];
const page = () => {
  const [tab, setTab] = React.useState<string>("betting-trends");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 overflow-hidden ">
      <p className=" font-thin text-xs 2xl:text-sm">Sport Dashboard</p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Data Analytics</h1>
      <div className="flex mt-8 justify-center md:justify-start  max-w-full pb-4 overflow-auto  items-center gap-1.5">
        {reportTabs.map((t, index) => (
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
      {
        {
          "betting-trends": <BettingTrends />,
          "user-insights": <UserInsights />,
          "predictive-analysis": <PredictiveAnalysis />,
        }[tab]
      }
    </div>
  );
};

export default page;

const BettingTrends = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4"> Betting Trends</h3>
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
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full capitalize rounded-bl-full ">
                event
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                bet type
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                total bets
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                popular sports
              </TableHead>

              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                High-Traffic Events
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs capitalize  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  event a
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  win/loss
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1500
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  football
                </TableCell>

                <TableCell className=" text-xs  text-primary rounded-tr-full rounded-br-full   bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  Championship Final
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
const UserInsights = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4"> User Insights</h3>
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
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full capitalize rounded-bl-full ">
                user ID
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                behavior
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                retention rate
              </TableHead>

              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                lifetime value
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs capitalize  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  L923{" "}
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  win/loss
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  1500
                </TableCell>

                <TableCell className=" text-xs  text-primary rounded-tr-full rounded-br-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  football
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
const PredictiveAnalysis = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4"> Predictive Analysis </h3>
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
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full capitalize rounded-bl-full ">
                metric
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Forecasted Outcome
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                User Behavior
              </TableHead>

              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                Potential Risks
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs capitalize  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  Win Rate
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  80%
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  High Activity
                </TableCell>

                <TableCell className=" text-xs  text-primary rounded-tr-full rounded-br-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  low
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
