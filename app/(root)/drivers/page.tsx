"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { format } from "date-fns";

interface DriverProfile {
  personalInfo: {
    cnicNumber: string;
    dateOfBirth: string;
  };
  licenseInfo: {
    licenseNumber: string;
    licenseExpiry: string;
    licenseFront: string;
    licenseBack: string;
  };
  vehicleInfo: {
    type: string;
    number: string;
    model: string;
    year: string;
    registrationDocument: string;
  };
  documents: {
    cnicFront: string;
    cnicBack: string;
  };
  isVerified: boolean;
  verificationStatus: string;
  rejectionReason?: string;
}

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  driverProfile: DriverProfile;
}

const Page = () => {
  const [drivers, setDrivers] = useState<User[]>([]);
  const [selectedDriver, setSelectedDriver] = useState<User | null>(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch("/api/drivers");
        const data = await response.json();
        setDrivers(data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDrivers();
  }, []);

  const handleVerify = async (userId: string) => {
    try {
      const response = await fetch("/api/verify-driver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        setDrivers(
          drivers.map((driver) =>
            driver._id === userId
              ? {
                  ...driver,
                  driverProfile: {
                    ...driver.driverProfile,
                    isVerified: true,
                    verificationStatus: "verified",
                  },
                }
              : driver
          )
        );
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Error verifying driver:", error);
    }
  };

  const handleReject = async () => {
    if (!selectedDriver || !rejectionReason) return;

    try {
      const response = await fetch("/api/reject-driver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: selectedDriver._id,
          reason: rejectionReason,
        }),
      });

      if (response.ok) {
        setDrivers(
          drivers.map((driver) =>
            driver._id === selectedDriver._id
              ? { ...driver, driverProfile: null, isDriver: false }
              : driver
          )
        );
        setRejectionReason("");
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Error rejecting driver:", error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-500">Verified</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="w-full px-7 md:px-8 2xl:px-20 bg-[#000214] mt-7 2xl-mt-8">
      <p className="font-thin text-primary-50 mb-1 2xl:text-lg">
        Driver Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold">Driver Applications</h1>

      <div className="w-full rounded-3xl bg-primary-100 mt-6 2xl:mt-8">
        <div className="w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className="bg-background">
            <TableHeader className="mb-1">
              <TableRow className="border-none py-3">
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] rounded-tl-full rounded-bl-full">
                  ID
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Name
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Registered On
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Status
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  License Number
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Vehicle Number
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Phone Number
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : drivers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center">
                    No driver applications found
                  </TableCell>
                </TableRow>
              ) : (
                drivers.map((driver) => (
                  <TableRow key={driver._id}>
                    <TableCell>{driver._id.slice(-6)}</TableCell>
                    <TableCell>{`${driver.firstname} ${
                      driver.lastname || ""
                    }`}</TableCell>
                    <TableCell className="text-center">
                      {format(new Date(driver.createdAt), "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell className="text-center">
                      {driver.driverProfile ? (
                        getStatusBadge(driver.driverProfile.verificationStatus)
                      ) : (
                        <Badge className="bg-gray-500">No Profile</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {driver.driverProfile?.licenseInfo.licenseNumber || "N/A"}
                    </TableCell>
                    <TableCell className="text-center">
                      {driver.driverProfile?.vehicleInfo.number || "N/A"}
                    </TableCell>
                    <TableCell className="text-center">
                      {driver.phoneNumber || "N/A"}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedDriver(driver);
                          setIsDialogOpen(true);
                        }}
                        disabled={
                          !driver.driverProfile ||
                          driver.driverProfile.isVerified
                        }
                        className="text-white"
                      >
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Driver Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="mb-4">
            <DialogTitle>Driver Application Review</DialogTitle>
          </DialogHeader>

          {selectedDriver && selectedDriver.driverProfile && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-2">
                  <h3 className="font-semibold mb-3 text-primary-50 border-b border-primary-50/20 pb-2">
                    Personal Information
                  </h3>
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {selectedDriver.firstname} {selectedDriver.lastname || ""}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {selectedDriver.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {selectedDriver.phoneNumber || "N/A"}
                  </p>
                  <p>
                    <span className="font-medium">CNIC:</span>{" "}
                    {selectedDriver.driverProfile.personalInfo.cnicNumber}
                  </p>
                  <p>
                    <span className="font-medium">Date of Birth:</span>{" "}
                    {selectedDriver.driverProfile.personalInfo.dateOfBirth}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <div>
                      <p className="font-medium mb-2">CNIC Front:</p>
                      <Image
                        src={selectedDriver.driverProfile.documents.cnicFront}
                        alt="CNIC Front"
                        width={200}
                        height={120}
                        className="rounded-md border"
                      />
                    </div>
                    <div>
                      <p className="font-medium mb-2">CNIC Back:</p>
                      <Image
                        src={selectedDriver.driverProfile.documents.cnicBack}
                        alt="CNIC Back"
                        width={200}
                        height={120}
                        className="rounded-md border"
                      />
                    </div>
                  </div>
                </div>

                {/* License Information */}
                <div className="space-y-2">
                  <h3 className="font-semibold mb-3 text-primary-50 border-b border-primary-50/20 pb-2">
                    License Information
                  </h3>
                  <p>
                    <span className="font-medium">License Number:</span>{" "}
                    {selectedDriver.driverProfile.licenseInfo.licenseNumber}
                  </p>
                  <p>
                    <span className="font-medium">Expiry Date:</span>{" "}
                    {selectedDriver.driverProfile.licenseInfo.licenseExpiry}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <div>
                      <p className="font-medium mb-2">License Front:</p>
                      <Image
                        src={
                          selectedDriver.driverProfile.licenseInfo.licenseFront
                        }
                        alt="License Front"
                        width={200}
                        height={120}
                        className="rounded-md border"
                      />
                    </div>
                    <div>
                      <p className="font-medium mb-2">License Back:</p>
                      <Image
                        src={
                          selectedDriver.driverProfile.licenseInfo.licenseBack
                        }
                        alt="License Back"
                        width={200}
                        height={120}
                        className="rounded-md border"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="space-y-2">
                <h3 className="font-semibold mb-3 text-primary-50 border-b border-primary-50/20 pb-2">
                  Vehicle Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <p>
                    <span className="font-medium">Type:</span>{" "}
                    {selectedDriver.driverProfile.vehicleInfo.type}
                  </p>
                  <p>
                    <span className="font-medium">Number:</span>{" "}
                    {selectedDriver.driverProfile.vehicleInfo.number}
                  </p>
                  <p>
                    <span className="font-medium">Model:</span>{" "}
                    {selectedDriver.driverProfile.vehicleInfo.model}
                  </p>
                  <p>
                    <span className="font-medium">Year:</span>{" "}
                    {selectedDriver.driverProfile.vehicleInfo.year}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="font-medium mb-2">Registration Document:</p>
                  <Image
                    src={
                      selectedDriver.driverProfile.vehicleInfo
                        .registrationDocument
                    }
                    alt="Registration Document"
                    width={400}
                    height={200}
                    className="rounded-md border max-w-full"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end items-end gap-4 pt-4 border-t">
                {selectedDriver.driverProfile.verificationStatus ===
                  "pending" && (
                  <>
                    <div className="flex-1">
                      <label
                        htmlFor="rejectionReason"
                        className="block text-sm font-medium mb-1"
                      >
                        Rejection Reason (required)
                      </label>
                      <input
                        id="rejectionReason"
                        type="text"
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter reason for rejection"
                      />
                    </div>
                    <Button
                      variant="destructive"
                      onClick={handleReject}
                      disabled={!rejectionReason}
                    >
                      Reject
                    </Button>
                    <Button
                      className="text-white"
                      onClick={() => handleVerify(selectedDriver._id)}
                    >
                      Approve
                    </Button>
                  </>
                )}
                {selectedDriver.driverProfile.verificationStatus ===
                  "verified" && (
                  <Badge className="bg-green-500 px-4 py-2">
                    Already Verified
                  </Badge>
                )}
                {selectedDriver.driverProfile.verificationStatus ===
                  "rejected" && (
                  <div className="space-y-2">
                    <Badge className="bg-red-500 px-4 py-2">Rejected</Badge>
                    <p className="text-sm">
                      <span className="font-medium">Reason:</span>{" "}
                      {selectedDriver.driverProfile.rejectionReason}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
