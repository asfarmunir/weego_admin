import React from "react";
import Affiliates from "@/components/shared/Affiliates";
import {
  calculateReferralBookingTotals,
  getReferralEarningsData,
} from "@/lib/database/actions/payout.action";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const affiliateName = searchParams?.affiliateName || "";
  const affiliatePage = Number(searchParams?.affiliatePage) || 1;
  const commisionPage = Number(searchParams?.commisionPage) || 1;
  const commissionateName = searchParams?.commissionateName || "";
  const referralBookings = await calculateReferralBookingTotals({
    limit: 8,
    affiliatePage,
    affiliateName,
  });
  const referralCommission = await getReferralEarningsData({
    limit: 8,
    commissionateName,
    page: commisionPage,
  });
  return (
    <Affiliates
      affiliatePage={affiliatePage}
      commisionPage={commisionPage}
      totalAffiliatePages={referralBookings.totalPages}
      totalCommissionPages={referralCommission.totalPages}
      referralCommission={referralCommission.commissions}
      referralBookings={referralBookings.totalAmountsPerUser}
    />
  );
};

export default page;
