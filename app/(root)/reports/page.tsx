"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";

import WithdrawableProfits from "@/components/shared/reports/WithdrawableProfits";
import PassRatio from "@/components/shared/reports/PassRatio";
import AccountStatus from "@/components/shared/reports/AccountStatus";
import Payouts from "@/components/shared/reports/Payouts";
import PayoutByPeriod from "@/components/shared/reports/PayoutByPeriod";
import CustomerWithNoPurchase from "@/components/shared/reports/CustomerWithNoPurchase";
import OrdersByDate from "@/components/shared/reports/OrdersByDate";
import TradersPayouts from "@/components/shared/reports/TraderPayouts";
import BreachedAccounts from "@/components/shared/reports/BreachedAccounts";
import PassAnalytics from "@/components/shared/reports/PassAnalytics";

const reportTabs = [
  {
    name: "withdraw profits",
    tab: "withdraw-profits",
  },
  {
    name: "pass ratio",
    tab: "pass-ratio",
  },
  {
    name: " account status",
    tab: "account-status",
  },
  {
    name: "payouts",
    tab: "payouts",
  },
  {
    name: "payouts by period",
    tab: "payouts-by-period",
  },
  {
    name: "breached-account",
    tab: "breached-account",
  },
  {
    name: "cutomer with no purchase",
    tab: "cutomer-with-no-purchase",
  },
  {
    name: "order by date",
    tab: "order-by-date",
  },
  {
    name: "trader payouts",
    tab: "trader-payouts",
  },
  {
    name: "pass analytics",
    tab: "pass-analytics",
  },
];
const page = () => {
  const [tab, setTab] = React.useState("withdraw-profits");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 overflow-hidden">
      <p className=" font-thin text-xs 2xl:text-sm">Sales Management</p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Reports</h1>
      <div className="flex gap-6 my-6 w-full flex-col">
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

      {/* <WithdrawableProfits /> */}
      {/* <PassRatio /> */}
      {/* <AccountStatus /> */}
      {/* <Payouts /> */}
      {/* <PayoutByPeriod /> */}
      {/* <CustomerWithNoPurchase /> */}
      {/* <OrdersByDate /> */}
      {/* <TradersPayouts /> */}
      {/* <PassAnalytics /> */}

      {
        {
          "withdraw-profits": <WithdrawableProfits />,
          "pass-ratio": <PassRatio />,
          "account-status": <AccountStatus />,
          payouts: <Payouts />,
          "payouts-by-period": <PayoutByPeriod />,
          "breached-account": <BreachedAccounts />,
          "cutomer-with-no-purchase": <CustomerWithNoPurchase />,
          "order-by-date": <OrdersByDate />,
          "trader-payouts": <TradersPayouts />,
          "pass-analytics": <PassAnalytics />,
        }[tab]
      }
    </div>
  );
};

export default page;
