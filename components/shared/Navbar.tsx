"use client";
import React from "react";
import Image from "next/image";
import { navlinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronDownOutline, IoSettingsOutline } from "react-icons/io5";
import { HiMoon } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleTheme from "./ToggleTheme";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

const dropdownItems = [
  // {
  //   name: "affiliates",
  //   href: "/affiliates",
  // },
  {
    name: "Customers",
    href: "/customers",
  },
  {
    name: "Verifications",
    href: "/verifications",
  },
  // {
  //   name: "user-management",
  //   href: "/user-management",
  // },
  {
    name: "support management",
    href: "/support-management",
  },
  // {
  //   name: "data analytics",
  //   href: "/data-analytics",
  // },
  {
    name: "system management",
    href: "/system-management",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className=" w-full bg-[#081C15] dark:bg-[#0E293B] rounded-full px-3 pl-5 2xl:px-5 py-3.5 flex items-center justify-around">
      <Link href={"/"} className="text-2xl font-semibold text-white">
        WeeGo
      </Link>
      <div className="hidden lg:flex items-center ">
        {navlinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`  capitalize py-3.5 rounded-full text-[0.65rem] lg:text-xs 2xl:text-sm
                 tracking-wide
            ${
              pathname === link.href
                ? " bg-[#70E000] dark:bg-[#70E00086] px-3.5 font-semibold"
                : " text-slate-300 px-1.5 2xl:px-2 font-thin "
            }  `}
          >
            {link.name}
          </Link>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger className=" text-slate-300    justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm  px-3.5 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
            More
            <IoChevronDownOutline className="w-3 h-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" border-none bg-[#081C15] dark:bg-[#0E293B]   mt-3.5 mr-20  p-1.5 rounded-xl shadow-sm">
            {dropdownItems.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link
                  href={item.href}
                  className={`capitalize  rounded-full  px-5 pr-20 w-full  text-[0.65rem] lg:text-xs 2xl:text-sm
                 tracking-wide 
                 ${
                   pathname === item.href
                     ? " bg-[#70E000] dark:bg-[#70E00086] py-2 2xl:py-3  font-semibold"
                     : " text-slate-300 font-thin py-1 2xl:py-2"
                 } `}
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>{" "}
      </div>
      <div className="flex items-center gap-1">
        <ToggleTheme />

        <button className=" lg:block hidden bg-slate-800 dark:bg-[#374153] hover:bg-[#374153]/70 rounded-full p-2.5 2xl:p-3.5">
          <RiSearchLine className=" text-slate-300 text-lg" />
        </button>
        <Link
          href={"/settings"}
          className={`hidden lg:flex 
            bg-slate-800 dark:bg-[#374153]
           hover:bg-[#374153]/70 rounded-full p-2.5 2xl:p-3.5
           `}
        >
          <IoSettingsOutline
            className={` text-slate-300 text-lg
           ${pathname === "/settings" ? "text-[#70E000]" : ""}

            `}
          />
        </Link>
        <button className=" hidden bg-slate-800 dark:bg-[#374153] hover:bg-[#374153]/70 rounded-full p-1.5 2xl:px-2 py-1 gap-1 lg:flex items-center">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="flex flex-col items-start pr-0.5">
            <span className="text-white text-[0.65rem] 2xl:text-sm text-nowrap">
              Goerg Bush
            </span>
            <span className="text-slate-300 text-[0.6rem] 2xl:text-xs">
              Admin
            </span>
          </div>
        </button>
        <Sheet>
          <SheetTrigger className="border block lg:hidden border-[#374153]  rounded-full p-2.5 2xl:p-3.5">
            <RxHamburgerMenu className=" text-slate-300 text-lg" />
          </SheetTrigger>
          <SheetContent>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={130}
              height={130}
              className=" w-28 2xl:w-36 mb-2  "
            />
            <div className="w-full pb-4 border-b mb-4 "></div>
            <div className="flex items-start mx-auto flex-col ">
              {navlinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`  capitalize py-3.5 text-start rounded-full text-[0.65rem] lg:text-xs 2xl:text-sm  font-thin tracking-wide
            ${
              pathname === link.href
                ? " bg-[#70E000] dark:bg-[#70E00086] px-3.5  text-white"
                : " text-slate-300 px-1.5 2xl:px-2 "
            }  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
