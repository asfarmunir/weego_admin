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
import OddSettings from "@/components/shared/modals/OddSettings";
const reportTabs = [
  {
    name: "Custom Alerts",
    tab: "custom-alerts",
  },
  {
    name: "Incident Reports",
    tab: "incident-reports",
  },
];
const page = () => {
  const [tab, setTab] = React.useState<string>("custom-alerts");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 overflow-hidden ">
      <p className=" font-thin text-xs 2xl:text-sm">Sport Dashboard</p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Notifications</h1>
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
          "custom-alerts": <CustomAlerts />,
          "incident-reports": <IncidentReports />,
        }[tab]
      }
    </div>
  );
};

export default page;

const CustomAlerts = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4">Custom Alerts</h3>
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
                alert type
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Description
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                triggered
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs capitalize  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  High-Risk Bet
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  Bet placed with unusually high stakes.
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  2024-08-13
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  <p className=" capitalize w-fit px-4 py-2 rounded-full bg-[#80ED99]/40 dark:border-slate-700 border-slate-200 border">
                    active
                  </p>
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

const IncidentReports = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4">Incident Reports</h3>
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
                Incident ID
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                Description
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                date
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
                <TableCell className=" text-xs capitalize  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  High-Risk Bet
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  Bet placed with unusually high stakes.
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  2024-08-13
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  Under Investigation
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  <p className=" capitalize w-fit px-4 py-2 rounded-full  dark:border-slate-700 border-slate-200 border">
                    view details
                  </p>
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