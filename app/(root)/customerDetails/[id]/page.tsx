import React from "react";
import CustomerDetails from "@/components/shared/CustomerDetails";
import { getUserDetails } from "@/lib/database/actions/user.action";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getUserPayoutSummary } from "@/lib/database/actions/payout.action";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const user = await getUserDetails(id);
  const payoutSummary = await getUserPayoutSummary(id);
  console.log("🚀 ~ page ~ payoutSummary:", payoutSummary);
  return <CustomerDetails user={user.user} payoutSummary={payoutSummary} />;
};

export default page;
