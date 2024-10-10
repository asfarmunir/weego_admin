"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import AccountHistory from "@/components/shared/userDetails/AccountHistory";
import MetricHistory from "@/components/shared/userDetails/MetricHistory";
import TradeHistory from "@/components/shared/userDetails/TraderHistory";
import CashHistory from "@/components/shared/userDetails/CashHistory";
import IPLogs from "@/components/shared/userDetails/IPLogs";
import EditLogs from "@/components/shared/userDetails/EditLogs";
import OpenTrades from "@/components/shared/userDetails/OpenTrades";
import Details from "@/components/shared/userDetails/Details";
import Notes from "@/components/shared/userDetails/Notes";
const reportTabs = [
  {
    name: "details",
    tab: "details",
  },
  {
    name: "notes",
    tab: "notes",
  },
  {
    name: "account history",
    tab: "account-history",
  },
  {
    name: "metric history",
    tab: "metric-history",
  },
  {
    name: "trade history",
    tab: "trade-history",
  },
  {
    name: "open trades",
    tab: "open-trades",
  },
  {
    name: "cash history",
    tab: "cash-history",
  },
  {
    name: "IP logs",
    tab: "ip-logs",
  },
  {
    name: "Edit logs",
    tab: "edit-logs",
  },
];
const page = () => {
  const [tab, setTab] = React.useState("details");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 overflow-hidden ">
      <p className=" font-thin text-xs 2xl:text-sm">Sales Management</p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Prop Accounts</h1>
      <div className="flex gap-6 my-6 w-full flex-col">
        <div className=" w-full flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full md:w-[75%]">
            <div className=" w-full p-5 rounded-2xl flex items-center justify-between bg-slate-50 dark:bg-slate-900">
              <div className="flex flex-col">
                <p className=" font-semibold">Prop Accounts</p>
                <p className="text-sm">
                  your flex-col md:flex-rowprop account status
                </p>
              </div>
              <div className="flex text-xs md:text-base text-nowrap items-center flex-col md:flex-row gap-2.5">
                <p className=" text-primary bg-[#CCCEFD] dark:bg-purple-400/30 p-2.5 font-semibold rounded-full px-5">
                  343384
                </p>
                <p className=" text-primary bg-[#05BAFF]/20 p-2.5 text-center font-semibold rounded-full px-5">
                  Match Trader
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 rounded-2xl gap-4 bg-slate-50 dark:bg-slate-900">
              <div className=" flex flex-col p-5 flex-grow bg-[#80ED99]/10 rounded-2xl">
                <Image
                  src="/balance.png"
                  width={50}
                  height={54}
                  alt="warning"
                  className=" mb-9 2xl:mb-12"
                />
                <h2 className=" font-bold text-3xl 2xl:text-4xl">$202,304</h2>
                <p className=" text-xs 2xl:text-sm">balance</p>
              </div>{" "}
              <div className=" flex flex-col p-5 flex-grow bg-[#8CD3FF]/10 rounded-2xl">
                <Image
                  src="/profit2.png"
                  width={50}
                  height={54}
                  alt="warning"
                  className=" mb-9 2xl:mb-12"
                />
                <h2 className=" font-bold text-3xl 2xl:text-4xl">$9203</h2>
                <p className=" text-xs 2xl:text-sm">Profit</p>
              </div>{" "}
              <div className=" flex flex-col p-5 flex-grow bg-[#CCCEFD]/10 rounded-2xl">
                <Image
                  src="/equity.png"
                  width={50}
                  height={54}
                  alt="warning"
                  className=" mb-9 2xl:mb-12"
                />
                <h2 className=" font-bold text-3xl 2xl:text-4xl">$202,304</h2>
                <p className=" text-xs 2xl:text-sm capitalize">Equity</p>
              </div>{" "}
              <div className=" flex flex-col p-5 flex-grow bg-[#CCCEFD]/10 rounded-2xl">
                <Image
                  src="/withdraw.png"
                  width={50}
                  height={54}
                  alt="warning"
                  className=" mb-9 2xl:mb-12"
                />
                <h2 className=" font-bold text-3xl 2xl:text-4xl">$0</h2>
                <p className=" text-xs 2xl:text-sm capitalize">
                  withdrawable profit
                </p>
              </div>{" "}
              <div className=" flex flex-col p-5 flex-grow bg-[#8CD3FF]/10 rounded-2xl">
                <Image
                  src="/total.png"
                  width={50}
                  height={54}
                  alt="warning"
                  className=" mb-9 2xl:mb-12"
                />
                <h2 className=" font-bold text-3xl 2xl:text-4xl">$0</h2>
                <p className=" text-xs 2xl:text-sm capitalize">total payouts</p>
              </div>{" "}
              <div className=" flex flex-col p-5 flex-grow bg-[#80ED99]/10 rounded-2xl">
                <Image
                  src="/server.png"
                  width={50}
                  height={54}
                  alt="warning"
                  className=" mb-9 2xl:mb-12"
                />
                <h2 className=" font-bold text-3xl 2xl:text-4xl">
                  Match Traders
                </h2>
                <p className=" text-xs 2xl:text-sm capitalize">server</p>
              </div>{" "}
            </div>
            <div className=" w-full p-5 rounded-2xl flex items-center justify-between bg-slate-50 dark:bg-slate-900">
              <div className="flex flex-col">
                <p className=" font-semibold">Notes</p>
                <p className="text-sm">Add notes if necessary</p>
              </div>
              <div className="flex items-center gap-2.5">
                <button className=" text-primary border-slate-400 p-2.5 font-semibold rounded-full px-5">
                  Add Note
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[25%] flex flex-col gap-4">
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
                <p className=" text-primary bg-[#F2F962] dark:bg-yellow-400/20 p-2.5 font-semibold rounded-full px-5">
                  343384
                </p>
                <p className=" text-primary bg-[#80ED99]/20 p-2.5 font-semibold rounded-full px-5">
                  Active
                </p>
              </div>
            </div>
            <div className=" w-full bg-slate-50 dark:bg-slate-900 p-6 flex rounded-2x; flex-col items-center">
              <h3 className=" w-full bg-white dark:bg-slate-800 p-3 mb-5 rounded-2xl font-semibold text-center">
                Detailed Information
              </h3>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm border-b">
                <p className=" font-thin capitalize">Last Login</p>
                <p className=" font-semibold capitalize">
                  05.08.2024 UTC - 14:36 AM
                </p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm border-b">
                <p className=" font-thin capitalize">Last Track</p>
                <p className=" font-semibold capitalize">----</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm border-b">
                <p className=" font-thin capitalize">Country</p>
                <p className=" font-semibold capitalize">DE</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm border-b">
                <p className=" font-thin capitalize">verify</p>
                <p className=" font-semibold capitalize">Verified Customer</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm border-b">
                <p className=" font-thin capitalize">contract</p>
                <p className=" font-semibold capitalize">contract signed</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm border-b">
                <p className=" font-thin capitalize">login</p>
                <p className=" font-semibold capitalize">j.khatia@gmail.com</p>
              </div>
              <div className="flex items-center justify-between w-full py-2 text-xs 2xl:text-sm border-b">
                <p className=" font-thin capitalize">password</p>
                <p className=" font-semibold capitalize">asd3u4y8y3</p>
              </div>
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
        </div>
      </div>

      {/* <Details /> */}
      {/* <Notes /> */}
      {/* <AccountHistory /> */}
      {/* <MetricHistory /> */}
      {/* <TradeHistory /> */}
      {/* <OpenTrades /> */}
      {/* <CashHistory /> */}
      {/* <IPLogs /> */}
      {/* <EditLogs /> */}

      {
        {
          details: <Details />,
          notes: <Notes />,
          "account-history": <AccountHistory />,
          "metric-history": <MetricHistory />,
          "trade-history": <TradeHistory />,
          "open-trades": <OpenTrades />,
          "cash-history": <CashHistory />,
          "ip-logs": <IPLogs />,
          "edit-logs": <EditLogs />,
        }[tab]
      }
    </div>
  );
};

export default page;
