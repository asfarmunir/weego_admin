"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Plans from "@/components/shared/settings/Plans";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import Emails from "@/components/shared/settings/Emails";
import CustomerVerification from "@/components/shared/modals/CustomerVerification";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { GrEdit } from "react-icons/gr";
const reportTabs = [
  {
    name: "general settings",
    tab: "general-settings",
  },
  {
    name: "plans",
    tab: "plans",
  },
  {
    name: "downloads",
    tab: "downloads",
  },
  {
    name: "platforms",
    tab: "platforms",
  },
  {
    name: "E-mails",
    tab: "emails",
  },
  {
    name: "contracts",
    tab: "contracts",
  },
  {
    name: "system management",
    tab: "system-management",
  },
];
const page = () => {
  const [tab, setTab] = React.useState("emails");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 bg-[#000214] md:px-20 overflow-hidden oyo ">
      <p className=" font-thin mb-2 text-primary-50 2xl:text-lg">
        User Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Settings</h1>
      <div className="flex gap-6 my-6 w-full flex-col">
        <div className="flex bg-primary-100 rounded-full  justify-center md:justify-start  max-w-full p-5 overflow-auto  items-center gap-1.5">
          {reportTabs.map((t, index) => (
            <button
              key={index}
              onClick={() => handleTab(t.tab)}
              className={` capitalize text-xs text-nowrap font-semibold p-2.5 2xl:p-3 px-5 
                tracking-wide 2xl:px-7 text-center rounded-full ${
                  tab === t.tab
                    ? "bg-[#FF990033] text-primary-50"
                    : " bg-[#372F2F99]  text-white"
                }`}
            >
              {t.name}
            </button>
          ))}
          {/* <CustomerVerification /> */}
        </div>
      </div>

      {
        {
          // "general-settings": <GeneralSettings />,
          // plans: <Plans />,
          emails: <Emails />,
          // contracts: <Contracts />,
          // downloads: <Downloads />,
          // platforms: <Platforms />,
          // "system-management": <SystemManagement />,
        }[tab]
      }
    </div>
  );
};

export default page;

const details = [
  {
    title: "UMU Trading",
    category: "Name of Business",
  },
  {
    title: "Union Wealths Management FZE",
    category: "Business Legal Name",
  },
  {
    title: "200K Live Standart Evaluation - MTR",
    category: "Phone INT Code",
  },
  {
    title: "283003340",
    category: "Phone",
  },
  {
    title: "https://uwmtrading.com/",
    category: "Website",
  },
  {
    title: "no-reply@uwmtrading.com",
    category: "Email",
  },
  {
    title: "no-reply@uwmtrading.com",
    category: "Billing Email",
  },
  {
    title: "St#1",
    category: "Address 1",
  },
  {
    title: "00000",
    category: "zip",
  },
  {
    title: "oslo",
    category: "city",
  },
  {
    title: "ohio",
    category: "state",
  },
  {
    title: "United Arab Emirates",
    category: "country",
  },
  {
    title: "UTC",
    category: "Default Timezone",
  },
  {
    title: "DD/MM/YYYY",
    category: "Date Format",
  },
  {
    title: "HH:MM:SS A",
    category: "Time Format",
  },
];
