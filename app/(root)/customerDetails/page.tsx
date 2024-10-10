"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import Orders from "@/components/shared/customerDetails/Orders";
import EditLogs from "@/components/shared/userDetails/EditLogs";
import Notes from "@/components/shared/userDetails/Notes";
import PropAccount from "@/components/shared/customerDetails/PropAccounts";
import Payouts from "@/components/shared/customerDetails/Payouts";
import Emails from "@/components/shared/customerDetails/Emails";
import Contracts from "@/components/shared/customerDetails/Contracts";
import Certificates from "@/components/shared/customerDetails/Certificates";
import Logs from "@/components/shared/customerDetails/Logs";
import CustomerVerification from "@/components/shared/modals/CustomerVerification";
const reportTabs = [
  {
    name: "orders",
    tab: "orders",
  },
  {
    name: "notes",
    tab: "notes",
  },
  {
    name: "Prop accounts",
    tab: "prop-accounts",
  },
  {
    name: "Payouts",
    tab: "payouts",
  },
  {
    name: "E-mails",
    tab: "emails",
  },
  {
    name: "Certificates",
    tab: "certificates",
  },
  {
    name: "cash history",
    tab: "cash-history",
  },
  {
    name: "Contracts",
    tab: "contracts",
  },
  {
    name: "IP logs",
    tab: "ip-logs",
  },
  {
    name: "logs",
    tab: "logs",
  },
];
const page = () => {
  const [tab, setTab] = React.useState("orders");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 overflow-hidden ">
      <p className=" font-thin text-xs 2xl:text-sm">Sales Management</p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Customers</h1>
      <div className="flex gap-6 my-6 w-full flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full  gap-4">
          <div className="flex flex-col p-4 w-full rounded-2xl gap-4 bg-slate-50 dark:bg-slate-900">
            <div className=" flex flex-col p-5 flex-grow bg-[#80ED99]/10 rounded-2xl">
              <Image
                src="/spend.png"
                width={50}
                height={54}
                alt="warning"
                className=" mb-4 2xl:mb-6"
              />
              <h2 className=" font-bold text-3xl 2xl:text-4xl">$202,304</h2>
              <p className=" text-xs 2xl:text-sm">Total Spend</p>
            </div>{" "}
            <div className=" flex flex-col p-5 flex-grow bg-[#CCCEFD]/10 rounded-2xl">
              <Image
                src="/withdrawl.png"
                width={50}
                height={54}
                alt="warning"
                className=" mb-4 2xl:mb-6"
              />
              <h2 className=" font-bold text-3xl 2xl:text-4xl">$202,304</h2>
              <p className=" text-xs 2xl:text-sm">Total Withdrawl</p>
            </div>{" "}
          </div>
          <div className=" w-full bg-slate-50 dark:bg-slate-900 p-4 flex rounded-2xl flex-col items-center">
            <h3 className=" w-full bg-white dark:bg-slate-800 p-3 mb-5 rounded-2xl font-semibold text-center">
              Detailed Information
            </h3>
            <div className=" p-4 space-y-4 bg-white dark:bg-slate-800 w-full rounded-2xl">
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Name</p>
                <p className=" font-semibold capitalize">Freia bracher</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Email</p>
                <p className=" font-semibold capitalize">
                  Freia.bracher@gmail.com
                </p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Phone</p>
                <p className=" font-semibold capitalize">51809955</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Address 1</p>
                <p className=" font-semibold capitalize">Brooklyn 1#</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Address 2</p>
                <p className=" font-semibold capitalize">-</p>
              </div>
            </div>
          </div>
          <div className=" w-full bg-slate-50 dark:bg-slate-900 p-4 flex rounded-2xl flex-col items-center">
            <h3 className=" w-full bg-[#80ED99]/15 border border-[#80ED99] dark:border-slate-800 dark:bg-slate-800 p-3 mb-5 rounded-3xl font-semibold text-center">
              Activities
            </h3>
            <div className=" p-4 space-y-4 bg-white dark:bg-slate-800 w-full rounded-2xl">
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Last Login</p>
                <p className=" font-semibold capitalize">2024-08-07</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Last Track</p>
                <p className=" font-semibold capitalize">2024-08-07</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">verify</p>
                <p className=" font-semibold capitalize">Verified Customer</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Verified Date</p>
                <p className=" font-semibold capitalize">03/02/2024</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm ">
                <p className=" font-semibold capitalize">Registration</p>
                <p className=" font-semibold capitalize"> 11/09/2023</p>
              </div>
            </div>
          </div>
          <div className=" w-full p-5 2xl:py-10 gap-3 bg-slate-50 dark:bg-slate-900 rounded-2xl flex flex-col items-center justify-center">
            <Image
              src="/hero.png"
              width={500}
              height={500}
              alt="warning"
              className=" w-28 h-28 mb-4 2xl:w-36 2xl:h-36"
            />
            <h3 className=" text-2xl text-center 2xl:text-3xl font-bold">
              Khatia Jintcharadze
            </h3>
            <div className="flex items-center gap-2.5">
              <p className=" text-primary bg-[#CCCEFD] dark:bg-purple-400/20 p-2.5 font-semibold rounded-full px-5">
                343384
              </p>
            </div>
          </div>
        </div>
        <div className="flex  justify-center md:justify-start  max-w-full pb-4 overflow-auto  items-center gap-1.5">
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
          <CustomerVerification />
        </div>
      </div>

      {
        {
          orders: <Orders />,
          notes: <Notes />,
          "prop-accounts": <PropAccount />,
          payouts: <Payouts />,
          emails: <Emails />,
          certificates: <Certificates />,
          "cash-history": <EditLogs />,
          contracts: <Contracts />,
          "ip-logs": <Logs />,
          logs: <Logs />,
        }[tab]
      }
    </div>
  );
};

export default page;
