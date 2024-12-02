import React from "react";
import { getAllUsers } from "@/lib/database/actions/user.action";
import Customers from "@/components/shared/Customers";
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
  const name = searchParams?.name || undefined;
  const users = await getAllUsers({
    limit: 8,
    page,
    name,
  });
  return (
    <Customers
      users={users.users}
      totalUsers={users.totalUsers}
      page={page}
      totalPages={users.totalPages!}
    />
  );
};

export default page;
