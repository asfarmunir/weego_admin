// "use client";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import React from "react";
// import { LuSearch } from "react-icons/lu";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
// import EditBlacklist from "@/components/shared/modals/EditBlacklist";
// import { IoEyeOutline } from "react-icons/io5";
// import { LuDownload } from "react-icons/lu";

// import { IoIosAlert } from "react-icons/io";

// const payoutTabs = [
//   {
//     name: "Exposure Monitoring",
//     tab: "exposure-monitoring",
//   },
//   {
//     name: "Risk Alerts",
//     tab: "risk-alerts",
//   },
//   {
//     name: "Limit Control",
//     tab: "limit-control",
//   },
// ];
// const page = () => {
//   const [tab, setTab] = React.useState("risk-alerts");

//   const handleTab = (tab: string) => {
//     setTab(tab);
//   };

//   return (
//     <div className=" w-full px-7 mt-7 2xl-mt-8">
//       <p className=" font-thin text-xs 2xl:text-sm">Sales Management</p>
//       <h1 className=" text-4xl 2xl:text-5xl font-bold">Risk Management</h1>
//       <div className="flex gap-6 my-6 w-full flex-col">
//         <div className="flex flex-wrap justify-center md:justify-start w-full md:w-fit  items-center gap-1.5">
//           {payoutTabs.map((t, index) => (
//             <button
//               key={index}
//               onClick={() => handleTab(t.tab)}
//               className={` capitalize text-xs 2xl:text-sm font-semibold p-2.5 2xl:p-3 px-5
//                 tracking-wide 2xl:px-7 text-center rounded-full ${
//                   tab === t.tab
//                     ? "bg-black dark:bg-[#194867] text-white"
//                     : " bg-slate-50 dark:bg-slate-900  text-primary"
//                 }`}
//             >
//               {t.name}
//             </button>
//           ))}
//         </div>
//       </div>
//       {
//         {
//           "risk-alerts": <CopyTraders />,
//           "exposure-monitoring": <CopyTraders />,
//           "limit-control": <CopyTraders />,
//         }[tab]
//       }
//     </div>
//   );
// };

// export default page;

// const CopyTraders = () => {
//   return (
//     <div className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900 dark:bg-slate-900 mt-6 2xl:mt-8">
//       <div className=" w-full px-3 py-3.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
//         <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
//           <p className=" font-semibold">Risk Alerts</p>
//         </div>
//         <div className=" bg-white dark:bg-slate-950 inline-flex  w-full md:w-fit items-center px-2 rounded-full">
//           <LuSearch className="w-4 h-4 text-[#848BAC] " />
//           <Input
//             className="
//                 text-[#848BAC]
//                 border-none
//                 focus:outline-none
//                 w-full
//                 md:w-fit
//                 focus:ring-0
//                 text-xs
//                 focus:border-none
//                 placeholder-slate-900
//                 "
//             placeholder={"search..."}
//           />
//         </div>
//       </div>
//       <div className=" w-full flex flex-col lg:flex-row gap-5 rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
//         <Table className=" bg-background">
//           <TableHeader className=" ">
//             <TableRow className=" border-none">
//               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
//                 Alert Type
//               </TableHead>
//               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
//                 details
//               </TableHead>
//               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
//                 Severity
//               </TableHead>

//               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
//                 status
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody className="  ">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <TableRow key={i} className=" border-none  ">
//                 <TableCell className=" bg-[#FBFBFB] dark:bg-transparent border-none  rounded-tl-full rounded-bl-full">
//                   Football
//                 </TableCell>

//                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none    2xl:text-sm font-semibold">
//                   Match A
//                 </TableCell>

//                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
//                   1
//                 </TableCell>

//                 <TableCell className=" text-xs space-x-1  text-primary bg-[#FBFBFB] dark:bg-transparent border-none rounded-tr-full rounded-br-full 2xl:text-sm font-semibold">
//                   <p className=" bg-[#80ED99] dark:bg-[#80ED9979] text-primary flex items-center justify-start w-fit px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
//                     Active
//                   </p>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-between bg-background py-4  px-6">
//         <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
//         <div className="flex items-center gap-3 pr-1">
//           <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
//           <p className=" font-semibold text-sm 2xl:text-base">1</p>
//           <p className=" text-sm 2xl:text-base">2</p>
//           <p className=" text-sm 2xl:text-base">...</p>
//           <p className=" text-sm 2xl:text-base">8</p>
//           <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
//         </div>
//       </div>
//     </div>
//   );
// };
// // const HedgeTraders = () => {
// //   return (
// //     <div className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900 dark:bg-slate-900 mt-6 2xl:mt-8">
// //       <div className=" w-full px-3 py-3.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
// //         <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
// //           <button
// //             className={` capitalize text-xs 2xl:text-sm flex items-center gap-2 font-semibold p-2.5 2xl:p-3 px-3
// //                 tracking-wide 2xl:px-7 text-center rounded-full bg-background
// //                 `}
// //           >
// //             <IoIosAlert className="w-5 h-5  " />
// //             49 trades flagged
// //           </button>
// //           <button
// //             className={` capitalize text-xs 2xl:text-sm flex items-center gap-2 font-semibold p-2.5 2xl:p-3 px-3
// //                 tracking-wide 2xl:px-7 text-center rounded-full bg-background
// //                 `}
// //           >
// //             <IoIosAlert className="w-5 h-5  " />
// //             100% Match
// //           </button>
// //         </div>
// //         <button
// //           className={` capitalize text-xs 2xl:text-sm flex items-center gap-2 font-semibold p-2.5 2xl:p-3 px-4
// //                 tracking-wide 2xl:px-7 text-center rounded-full bg-background
// //                 `}
// //         >
// //           Export
// //           <LuDownload className="w-4 h-4  " />
// //         </button>
// //       </div>
// //       <div className=" w-full flex flex-col lg:flex-row gap-5 rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
// //         <Table className=" bg-background">
// //           <TableHeader className=" ">
// //             <TableRow className=" border-none">
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
// //                 customer
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 account
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 Name
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 balance
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 equity
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 trader
// //               </TableHead>

// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
// //                 report
// //               </TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody className="  ">
// //             {Array.from({ length: 6 }).map((_, i) => (
// //               <TableRow key={i} className=" border-none  ">
// //                 <TableCell className=" bg-[#FBFBFB] dark:bg-transparent border-none  rounded-tl-full rounded-bl-full">
// //                   <p className=" bg-[#CCCEFD] dark:bg-[#cccefd79] text-primary flex items-center justify-start w-fit px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
// //                     C23645
// //                   </p>
// //                 </TableCell>
// //                 <TableCell className="bg-[#FBFBFB] dark:bg-transparent border-none  ">
// //                   <p className=" bg-[#F2F962] dark:bg-yellow-400/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
// //                     729733
// //                   </p>
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none    2xl:text-sm font-semibold">
// //                   Ronja Preuss
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   14892.00
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   14892.00
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   1
// //                 </TableCell>

// //                 <TableCell className=" text-xs space-x-1  text-primary bg-[#FBFBFB] dark:bg-transparent border-none rounded-tr-full rounded-br-full 2xl:text-sm font-semibold">
// //                   <button
// //                     className="bg-white p-3 dark:bg-slate-900  rounded-full
// //        text-xs 2xl:text-sm font-semibold "
// //                   >
// //                     <LuDownload className="w-4 h-4 text-black dark:text-white" />
// //                   </button>{" "}
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //         <Table className=" bg-background">
// //           <TableHeader className=" ">
// //             <TableRow className=" border-none">
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
// //                 customer
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 account
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 Name
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 balance
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 equity
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 trader
// //               </TableHead>

// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
// //                 report
// //               </TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody className="  ">
// //             {Array.from({ length: 6 }).map((_, i) => (
// //               <TableRow key={i} className=" border-none  ">
// //                 <TableCell className=" bg-[#FBFBFB] dark:bg-transparent border-none  rounded-tl-full rounded-bl-full">
// //                   <p className=" bg-[#CCCEFD] dark:bg-[#cccefd79] text-primary flex items-center justify-start w-fit px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
// //                     C23645
// //                   </p>
// //                 </TableCell>
// //                 <TableCell className="bg-[#FBFBFB] dark:bg-transparent border-none  ">
// //                   <p className=" bg-[#F2F962] dark:bg-yellow-400/60 text-primary  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
// //                     729733
// //                   </p>
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none    2xl:text-sm font-semibold">
// //                   Ronja Preuss
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   14892.00
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   14892.00
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   1
// //                 </TableCell>

// //                 <TableCell className=" text-xs space-x-1  text-primary bg-[#FBFBFB] dark:bg-transparent border-none rounded-tr-full rounded-br-full 2xl:text-sm font-semibold">
// //                   <button
// //                     className="bg-white p-3 dark:bg-slate-900  rounded-full
// //        text-xs 2xl:text-sm font-semibold "
// //                   >
// //                     <LuDownload className="w-4 h-4 text-black dark:text-white" />
// //                   </button>{" "}
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </div>
// //       <div className="flex items-center justify-between bg-background py-4  px-6">
// //         <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
// //         <div className="flex items-center gap-3 pr-1">
// //           <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
// //           <p className=" font-semibold text-sm 2xl:text-base">1</p>
// //           <p className=" text-sm 2xl:text-base">2</p>
// //           <p className=" text-sm 2xl:text-base">...</p>
// //           <p className=" text-sm 2xl:text-base">8</p>
// //           <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const IPAnalysis = () => {
// //   return (
// //     <div className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900 dark:bg-slate-900 mt-6 2xl:mt-8">
// //       <div className=" w-full px-3 py-3.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
// //         <div className="flex items-center justify-end  w-full flex-wrap gap-1.5">
// //           <div className=" bg-white dark:bg-slate-950 inline-flex    items-center px-2 rounded-full">
// //             <LuSearch className="w-4 h-4 text-[#848BAC] " />
// //             <Input
// //               className="
// //                 text-[#848BAC]
// //                 border-none
// //                 focus:outline-none
// //                 w-full
// //                 md:w-fit
// //                 focus:ring-0
// //                 text-xs
// //                 focus:border-none
// //                 placeholder-slate-900
// //                 "
// //               placeholder={"search..."}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
// //         <Table className=" bg-background">
// //           <TableHeader className=" ">
// //             <TableRow className=" border-none">
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
// //                 IP Address
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 Customer
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 countries
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 accounts
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 purchased
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 active
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
// //                 actions
// //               </TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody className="  ">
// //             {Array.from({ length: 6 }).map((_, i) => (
// //               <TableRow key={i} className=" border-none  ">
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none    2xl:text-sm font-semibold">
// //                   193.75.56.73
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   1
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   Germany
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   0
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   0
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   0
// //                 </TableCell>

// //                 <TableCell className=" text-xs space-x-1  text-primary bg-[#FBFBFB] dark:bg-transparent border-none rounded-tr-full rounded-br-full 2xl:text-sm font-semibold">
// //                   <button
// //                     className="bg-white p-3 dark:bg-slate-900  rounded-full
// //        text-xs 2xl:text-sm font-semibold "
// //                   >
// //                     <IoEyeOutline className="w-4 h-4 text-black dark:text-white" />
// //                   </button>{" "}
// //                   <button
// //                     className="bg-white p-3 dark:bg-slate-900  rounded-full
// //        text-xs 2xl:text-sm font-semibold "
// //                   >
// //                     <LuDownload className="w-4 h-4 text-black dark:text-white" />
// //                   </button>{" "}
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </div>
// //       <div className="flex items-center justify-between bg-background py-4  px-6">
// //         <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
// //         <div className="flex items-center gap-3 pr-1">
// //           <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
// //           <p className=" font-semibold text-sm 2xl:text-base">1</p>
// //           <p className=" text-sm 2xl:text-base">2</p>
// //           <p className=" text-sm 2xl:text-base">...</p>
// //           <p className=" text-sm 2xl:text-base">8</p>
// //           <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // const Blocklist = () => {
// //   return (
// //     <div className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900 dark:bg-slate-900 mt-6 2xl:mt-8">
// //       <div className=" w-full px-3 py-3.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
// //         <div className="flex items-center justify-end  w-full flex-wrap gap-1.5">
// //           <div className=" bg-white dark:bg-slate-950 inline-flex    items-center px-2 rounded-full">
// //             <LuSearch className="w-4 h-4 text-[#848BAC] " />
// //             <Input
// //               className="
// //                 text-[#848BAC]
// //                 border-none
// //                 focus:outline-none
// //                 w-full
// //                 md:w-fit
// //                 focus:ring-0
// //                 text-xs
// //                 focus:border-none
// //                 placeholder-slate-900
// //                 "
// //               placeholder={"search..."}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
// //         <Table className=" bg-background">
// //           <TableHeader className=" ">
// //             <TableRow className=" border-none">
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full rounded-bl-full ">
// //                 IP Address
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 Customer
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 name
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 email
// //               </TableHead>
// //               <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 reason
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
// //                 risk score
// //               </TableHead>
// //               <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize rounded-tr-full rounded-br-full">
// //                 actions
// //               </TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody className="  ">
// //             {Array.from({ length: 6 }).map((_, i) => (
// //               <TableRow key={i} className=" border-none  ">
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none    2xl:text-sm font-semibold">
// //                   193.75.56.73
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   5
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   Germany
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   0
// //                 </TableCell>
// //                 <TableCell className="bg-[#FBFBFB] dark:bg-transparent border-none  ">
// //                   <p className=" bg-[#05BAFF1A] dark:bg-blue-400/60 text-primary mx-auto   flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
// //                     Chargeback Abuser
// //                   </p>
// //                 </TableCell>
// //                 <TableCell className=" text-xs  text-primary bg-[#FBFBFB] dark:bg-transparent border-none   2xl:text-sm font-semibold">
// //                   <div className="flex items-center gap-1">
// //                     {Array.from({
// //                       length: 6,
// //                     }).map((_, i) => (
// //                       <div className=" w-3 h-6 bg-[#EDA680] rounded-sm"></div>
// //                     ))}
// //                   </div>
// //                 </TableCell>

// //                 <TableCell className=" text-xs space-x-1  text-primary bg-[#FBFBFB] dark:bg-transparent border-none rounded-tr-full rounded-br-full 2xl:text-sm font-semibold">
// //                   <EditBlacklist />
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </div>
// //       <div className="flex items-center justify-between bg-background py-4  px-6">
// //         <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
// //         <div className="flex items-center gap-3 pr-1">
// //           <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
// //           <p className=" font-semibold text-sm 2xl:text-base">1</p>
// //           <p className=" text-sm 2xl:text-base">2</p>
// //           <p className=" text-sm 2xl:text-base">...</p>
// //           <p className=" text-sm 2xl:text-base">8</p>
// //           <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GeneralUserSettings from "@/components/shared/modals/GeneralUserSettings";
import { LuSearch } from "react-icons/lu";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const reportTabs = [
  {
    name: "active bets",
    tab: "active-bets",
  },
  {
    name: "settled bets",
    tab: "settled-bets",
  },
  {
    name: "suspicous bets",
    tab: "suspicous-bets",
  },
];
const page = () => {
  const [tab, setTab] = React.useState<string>("active-bets");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 overflow-hidden ">
      <p className=" font-thin text-xs 2xl:text-sm">Sales Management</p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Bet Management</h1>
      <div className="flex mt-8 justify-center md:justify-start  max-w-full pb-4 overflow-auto  items-center gap-1.5">
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
      {
        {
          "active-bets": <ActiveBets />,
          "settled-bets": <SettledBets />,
          "suspicous-bets": <SuspiciousBets />,
        }[tab]
      }
    </div>
  );
};

export default page;

const ActiveBets = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4"> Active Bets</h3>
        </div>
        <div className="flex items-center flex-wrap gap-1.5">
          <div className=" bg-white dark:bg-slate-950 inline-flex  w-full md:w-fit items-center px-2 rounded-full">
            <LuSearch className="w-4 h-4 text-[#848BAC] " />
            <Input
              className=" 
                text-[#848BAC]
                border-none
                focus:outline-none
                w-full
                md:w-fit
                focus:ring-0
                text-xs
                focus:border-none
                placeholder-slate-900 
                "
              placeholder={"search..."}
            />
          </div>
        </div>
      </div>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        <Table className=" bg-background">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full capitalize rounded-bl-full ">
                bet type
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                amount
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                odds
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs capitalize  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  football
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  $100
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  2.0
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  <p className=" capitalize w-fit px-4 py-2 rounded-full bg-[#05BAFF]/20 dark:border-slate-700 border-slate-200 border">
                    pending
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between bg-background py-4  px-6">
        <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
        <div className="flex items-center gap-3 pr-1">
          <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
          <p className=" font-semibold text-sm 2xl:text-base">1</p>
          <p className=" text-sm 2xl:text-base">2</p>
          <p className=" text-sm 2xl:text-base">...</p>
          <p className=" text-sm 2xl:text-base">8</p>
          <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
        </div>
      </div>
    </div>
  );
};
const SuspiciousBets = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4"> Settled Bets</h3>
        </div>
        <div className="flex items-center flex-wrap gap-1.5">
          <div className=" bg-white dark:bg-slate-950 inline-flex  w-full md:w-fit items-center px-2 rounded-full">
            <LuSearch className="w-4 h-4 text-[#848BAC] " />
            <Input
              className=" 
                text-[#848BAC]
                border-none
                focus:outline-none
                w-full
                md:w-fit
                focus:ring-0
                text-xs
                focus:border-none
                placeholder-slate-900 
                "
              placeholder={"search..."}
            />
          </div>
        </div>
      </div>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        <Table className=" bg-background">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full capitalize rounded-bl-full ">
                bet type
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                amount
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                odds
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                reason
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs capitalize  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  football
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  $100
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  2.0
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  High Risk
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between bg-background py-4  px-6">
        <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
        <div className="flex items-center gap-3 pr-1">
          <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
          <p className=" font-semibold text-sm 2xl:text-base">1</p>
          <p className=" text-sm 2xl:text-base">2</p>
          <p className=" text-sm 2xl:text-base">...</p>
          <p className=" text-sm 2xl:text-base">8</p>
          <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
        </div>
      </div>
    </div>
  );
};
const SettledBets = () => {
  return (
    <div
      className=" w-full rounded-3xl bg-[#F2F2F2] dark:dark:bg-slate-900
dark:bg-slate-900 mt-6 2xl:mt-8"
    >
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4"> Settled Bets</h3>
        </div>
        <div className="flex items-center flex-wrap gap-1.5">
          <div className=" bg-white dark:bg-slate-950 inline-flex  w-full md:w-fit items-center px-2 rounded-full">
            <LuSearch className="w-4 h-4 text-[#848BAC] " />
            <Input
              className=" 
                text-[#848BAC]
                border-none
                focus:outline-none
                w-full
                md:w-fit
                focus:ring-0
                text-xs
                focus:border-none
                placeholder-slate-900 
                "
              placeholder={"search..."}
            />
          </div>
        </div>
      </div>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        <Table className=" bg-background">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] rounded-tl-full capitalize rounded-bl-full ">
                bet type
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                amount
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#0E293B] capitalize">
                odds
              </TableHead>
              <TableHead className="text-sm bg-[#F4FAFF] rounded-tr-full rounded-br-full dark:bg-[#0E293B] capitalize">
                outcome
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs capitalize  text-primary rounded-tl-full rounded-bl-full  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  football
                </TableCell>

                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  $100
                </TableCell>
                <TableCell className=" text-xs  text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  2.0
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-primary  bg-[#FBFBFB] dark:bg-slate-950 2xl:text-sm font-semibold">
                  win
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between bg-background py-4  px-6">
        <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
        <div className="flex items-center gap-3 pr-1">
          <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-400" />
          <p className=" font-semibold text-sm 2xl:text-base">1</p>
          <p className=" text-sm 2xl:text-base">2</p>
          <p className=" text-sm 2xl:text-base">...</p>
          <p className=" text-sm 2xl:text-base">8</p>
          <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4" />
        </div>
      </div>
    </div>
  );
};
