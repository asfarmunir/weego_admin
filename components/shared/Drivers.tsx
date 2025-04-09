import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import Pagination from "./Pagination";
import { IProperty } from "@/lib/types/property";
import GroundFilter from "./GroundFilter";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Delete from "./Delete";

const Page = () => {
  return (
    <div className=" w-full px-7 md:px-8 2xl:px-20 bg-[#000214]  mt-7 2xl-mt-8">
      <p className=" font-thin text-primary-50 mb-1 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Registered Drivers</h1>
      <div className=" w-full rounded-3xl  bg-primary-100 mt-6 2xl:mt-8">
        <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="flex items-center flex-wrap gap-2.5">
            <GroundFilter />
          </div>
        </div>
        <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className=" bg-background">
            <TableHeader className=" mb-1 ">
              <TableRow className=" border-none py-3 ">
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] rounded-tl-full rounded-bl-full ">
                  ID
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Name
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Registered On
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  License Number
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Vehicle Number
                </TableHead>
                <TableHead className="text-sm text-center   bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Vehicle Type
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Phone Number
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Email
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Action
                </TableHead>
                {/* <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Actions
                </TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody className="   ">
              {/* {!properties?.length && (
                <TableRow>
                  <TableCell colSpan={9} className="text-center">
                    No Data Available
                  </TableCell>
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100  px-6">
          <p className="  text-xs font-semibold 2xl:text-sm">
            {/* {totalProperties} Total Grounds */}
          </p>
          {/* <Pagination page={page} totalPages={totalPages} /> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
