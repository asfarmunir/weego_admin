"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Pagination from "./Pagination";
import { IPayouts } from "@/lib/types/payout";
import { FaEye } from "react-icons/fa";
import CreatePayout from "./CreatePayout";
import PayoutFilter from "./PayoutFilter";

const page = ({
  payout,
  page,
  totalPayouts,
  totalPages,
}: {
  payout: IPayouts[];
  page: number;
  totalPayouts: number;
  totalPages: number;
}) => {
  return (
    <div className="w-full px-7 md:px-8 2xl:px-20 bg-[#000214] mt-7 2xl-mt-8">
      <p className="font-thin text-primary-50 mb-1 2xl:text-lg">
        Sales Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold">Payouts</h1>
      <div className="w-full rounded-3xl bg-primary-100 mt-6 2xl:mt-8">
        <div className="w-full p-2.5 2xl:p-3.5 flex flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="flex flex-col md:flex-row w-full md:w-fit items-center gap-1.5">
            <PayoutFilter />
          </div>
        </div>
        <div className="w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className="bg-background">
            <TableHeader className="mb-1">
              <TableRow className="border-none py-3">
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] rounded-tl-full rounded-bl-full">
                  Payout ID
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  User Name
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Date
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Email
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Amount
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Status
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payout && payout.length > 0 ? (
                payout.map((payout, i) => (
                  <TableRow key={i} className="border-y-4 border-[#000214]">
                    <TableCell className="text-xs text-white border-y-4 border-[#000214] rounded-tl-full rounded-bl-full bg-[#372f2fd4] 2xl:text-sm font-semibold">
                      {payout._id?.slice(0, 6) ?? "N/A"}
                    </TableCell>

                    <TableCell className="bg-[#372f2fd4] capitalize border-y-4 border-[#000214]">
                      {payout.user?.firstname
                        ? `${payout.user.firstname} ${payout.user.lastname}`
                        : "N/A"}
                    </TableCell>

                    <TableCell className="bg-[#372f2fd4] border-y-4 border-[#000214]">
                      {payout.date
                        ? new Date(payout.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "N/A"}
                    </TableCell>

                    <TableCell className="text-xs text-white bg-[#372f2fd4] border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      {payout.accountEmail ?? "N/A"}
                    </TableCell>

                    <TableCell className="text-xs text-center text-white bg-[#372f2fd4] border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      {payout.amount ? `$${payout.amount}` : "N/A"}
                    </TableCell>

                    <TableCell className="bg-[#372f2fd4] border-y-4 border-[#000214]">
                      <p
                        className={`${
                          payout.status === "completed"
                            ? "bg-emerald-600"
                            : payout.status === "rejected"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        } text-white p-2.5 font-semibold capitalize w-fit rounded-full px-5`}
                      >
                        {payout.status ?? "N/A"}
                      </p>
                    </TableCell>

                    <TableCell className="text-xs rounded-tr-full rounded-br-full text-white bg-[#372f2fd4] border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      <CreatePayout payout={payout} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No payouts available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100 px-6">
          <p className="text-xs font-semibold 2xl:text-sm">
            {totalPayouts ?? 0} Total payouts
          </p>
          <Pagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default page;
