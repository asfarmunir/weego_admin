"use client";
import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@radix-ui/react-checkbox";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password should be atleast 6 characters",
  }),
});

const page = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@gmail.com",
      password: "password",
    },
  });

  const [toggle, setToggle] = useState(false);

  async function onSubmit(values: any) {
    console.log(values);
    setToggle(!toggle);
  }

  return (
    <div className=" w-full flex  md:items-start justify-center gap-16 pb-4">
      <div className="hidden lg:block ">
        <Image
          src="/loginHero.png"
          alt="login"
          width={400}
          height={400}
          priority
          className=" w-[440px]  2xl:w-[580px] -mt-16 2xl:-mt-24 "
        />
      </div>
      <div className=" bg-[#181926] h-fit shadow-inner shadow-gray-800 w-full sm:w-fit sm:min-w-[459px] 2xl:mt-6 2xl:min-w-[500px] mt-24 md:mt-0 flex flex-col items-start rounded-lg p-7 px-[2.18rem]    2xl:p-10 ">
        <h2 className=" text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-1 2xl:mb-2">
          WELCOME BACK!
        </h2>

        <Form {...form}>
          <div
            id="first"
            className="flex flex-col  items-center justify-center w-full gap-6 md:gap-4  mt-6"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel className="block 2xl:text-[1.05rem] text-gray-300  mb-2.5">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" enter your email"
                        {...field}
                        className="  focus:ring-green-600/50 border-none focus:ring-1 outline-offset-1 
                         shadow  focus:border mr-0 md:mr-6  rounded-lg bg-[#333547]/60  p-4 
                          2xl:py-6 2xl:px-6 text-[#848BAC] leading-tight 
                          


                          flex h-10 w-full  focus:border-[#52FC18]    px-3 py-2 text-sm
                           ring-offset-green-500 file:border-0 file:bg-transparent file:text-sm file:font-medium
                            placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-4
                             focus-visible:ring-[#52FC18]/20 focus-visible:ring-offset-1 disabled:cursor-not-allowed
                              disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950
                               dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300

                          "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel className="block 2xl:text-[1.05rem] text-gray-300  mb-2.5">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" enter your password"
                        {...field}
                        className="  focus:ring-green-600/50 border-none focus:ring-1 outline-offset-1 
                         shadow  focus:border mr-0 md:mr-6  rounded-lg bg-[#333547]/60  p-4 
                          2xl:py-6 2xl:px-6 text-[#848BAC] leading-tight 
                          


                          flex h-10 w-full  focus:border-[#52FC18]    px-3 py-2 text-sm
                           ring-offset-green-500 file:border-0 file:bg-transparent file:text-sm file:font-medium
                            placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-4
                             focus-visible:ring-[#52FC18]/20 focus-visible:ring-offset-1 disabled:cursor-not-allowed
                              disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950
                               dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300

                          "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!toggle ? (
                <Link
                  href={"/login/reset-password"}
                  className="text-xs 2xl:text-sm text-gray-300 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Forgot password?{"  "}
                  <span className="text-emerald-400">Reset it</span>.
                </Link>
              ) : (
                <p className="text-xs inline-flex w-full bg-[#F74418]/15 rounded-xl gap-3 border border-[#F74418]/20 py-2 px-3 items-center 2xl:text-sm text-[#F74418] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Image
                    src="/alert.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=""
                  />
                  <span className=" text-[#F74418]">
                    Incorrrect password. Please try again.
                  </span>
                </p>
              )}

              <div className="flex flex-col w-full mt-2 items-center justify-center">
                <Button
                  type="submit"
                  className="bg-[#333547] mb-4 inner-shadow border border-[#28B601] w-full rounded-xl hover:bg-slate-600 mt-4 text-white font-semibold py-6 px-10 2xl:text-lg   focus:outline-none focus:shadow-outline"
                >
                  {/* {isLoading ? (
                    <ColorRing
                      visible={true}
                      height="35"
                      width="35"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={[
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                      ]}
                    />
                  ) : ( */}
                  <span className=" capitalize">LOG IN</span>
                  {/* )} */}
                </Button>
                <Image
                  src="/divider.png"
                  alt="line"
                  width={400}
                  height={400}
                  className=" my-2"
                />
                <Link
                  href={"/signup"}
                  className="bg-[#333547]  border border-[#21222e] w-full rounded-xl hover:bg-slate-600 mt-4 text-white font-semibold py-3 text-center px-10 2xl:text-lg   focus:outline-none focus:shadow-outline"
                >
                  <span className=" capitalize">SIGN UP</span>
                </Link>
              </div>
            </form>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default page;
