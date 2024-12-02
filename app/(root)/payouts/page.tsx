import React from "react";
import Payouts from "@/components/shared/Payouts";
import { getAllPayouts } from "@/lib/database/actions/payout.action";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};
const page = async ({ searchParams }: SearchParamProps) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const page = Number(searchParams?.page) || 1;
  const status = searchParams?.status as string;

  const payouts = await getAllPayouts({
    limit: 8,
    page,
    status,
  });
  return (
    <Payouts
      payout={payouts.payouts}
      totalPayouts={payouts.totalPayouts}
      page={page}
      totalPages={payouts.totalPages}
    />
  );
};

export default page;
