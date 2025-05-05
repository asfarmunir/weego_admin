"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Ride {
  _id: string;
  userId: any;
  driverId: any;
  pickupLocation: {
    address: string;
    coordinates: [number, number];
  };
  dropoffLocation: {
    address: string;
    coordinates: [number, number];
  };
  distance: number;
  fare: number;
  status: string;
  rideType: string;
  requestedAt: Date;
  completedAt: Date | null;
  paymentMethod: string;
  paymentProof: string | null;
  paymentStatus: string;
  transactionId: string | null;
  createdAt: Date;
}

const Page = () => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await fetch("/api/rides");
        const data = await response.json();
        setRides(data);
      } catch (error) {
        console.error("Error fetching rides:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRides();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "accepted":
        return <Badge className="bg-blue-500">Accepted</Badge>;
      case "ongoing":
        return <Badge className="bg-purple-500">Ongoing</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "cancelled":
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "verified":
        return <Badge className="bg-green-500">Verified</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const formatDistance = (meters: number) => {
    return (meters / 1000).toFixed(2) + " km";
  };

  return (
    <div className="w-full px-7 md:px-8 2xl:px-20 bg-[#000214] mt-7 2xl-mt-8">
      <p className="font-thin text-primary-50 mb-1 2xl:text-lg">
        Ride Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold">All Rides</h1>

      <div className="w-full rounded-3xl bg-primary-100 mt-6 2xl:mt-8">
        <div className="w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className="bg-background">
            <TableHeader className="mb-1">
              <TableRow className="border-none py-3">
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] rounded-tl-full rounded-bl-full">
                  Ride ID
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  User
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Driver
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Pickup Location
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Status
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Fare
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Requested At
                </TableHead>
                <TableHead className="text-sm bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Details
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
              ) : rides.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center">
                    No rides found
                  </TableCell>
                </TableRow>
              ) : (
                rides.map((ride) => (
                  <TableRow key={ride._id}>
                    <TableCell>{ride._id.slice(-6)}</TableCell>
                    <TableCell>{ride.userId?.firstname || "N/A"}</TableCell>
                    <TableCell>
                      {ride.driverId?.firstname || "Unassigned"}
                    </TableCell>
                    <TableCell className="truncate max-w-[150px]">
                      {ride.pickupLocation.address}
                    </TableCell>
                    <TableCell>{getStatusBadge(ride.status)}</TableCell>
                    <TableCell>Rs {ride.fare.toFixed(2)}</TableCell>
                    <TableCell>
                      {format(new Date(ride.requestedAt), "MMM dd, HH:mm")}
                    </TableCell>
                    <TableCell className="text-start">
                      <Button
                        className="text-white"
                        size="sm"
                        onClick={() => {
                          setSelectedRide(ride);
                          setIsDialogOpen(true);
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Ride Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Ride Details</DialogTitle>
          </DialogHeader>

          {selectedRide && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary-50">
                    Basic Information
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Ride ID:</span>{" "}
                      {selectedRide._id}
                    </p>
                    <p>
                      <span className="font-medium">Status:</span>{" "}
                      {getStatusBadge(selectedRide.status)}
                    </p>
                    <p>
                      <span className="font-medium">Type:</span>{" "}
                      {selectedRide.rideType === "shared"
                        ? "Shared"
                        : "Personal"}
                    </p>
                    <p>
                      <span className="font-medium">Requested At:</span>{" "}
                      {format(
                        new Date(selectedRide.requestedAt),
                        "MMM dd, yyyy HH:mm"
                      )}
                    </p>
                    {selectedRide.completedAt && (
                      <p>
                        <span className="font-medium">Completed At:</span>{" "}
                        {format(
                          new Date(selectedRide.completedAt),
                          "MMM dd, yyyy HH:mm"
                        )}
                      </p>
                    )}
                  </div>

                  <h3 className="font-semibold text-primary-50">
                    User Information
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">User:</span>{" "}
                      {selectedRide.userId?.firstname || "N/A"}{" "}
                      {selectedRide.userId?.lastname || ""}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {selectedRide.userId?.email || "N/A"}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      {selectedRide.userId?.phoneNumber || "N/A"}
                    </p>
                  </div>

                  <h3 className="font-semibold text-primary-50">
                    Driver Information
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Driver:</span>{" "}
                      {selectedRide.driverId?.firstname || "Unassigned"}{" "}
                      {selectedRide.driverId?.lastname || ""}
                    </p>
                    {selectedRide.driverId && (
                      <>
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          {selectedRide.driverId?.email || "N/A"}
                        </p>
                        <p>
                          <span className="font-medium">Phone:</span>{" "}
                          {selectedRide.driverId?.phoneNumber || "N/A"}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Ride Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary-50">
                    Ride Details
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Pickup Location:</span>{" "}
                      {selectedRide.pickupLocation.address}
                    </p>
                    <p>
                      <span className="font-medium">Dropoff Location:</span>{" "}
                      {selectedRide.dropoffLocation.address}
                    </p>
                    <p>
                      <span className="font-medium">Distance:</span>{" "}
                      {selectedRide.distance} kms
                    </p>
                    <p>
                      <span className="font-medium">Fare:</span> $
                      {selectedRide.fare.toFixed(2)}
                    </p>
                  </div>

                  <h3 className="font-semibold text-primary-50">
                    Payment Information
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Method:</span>{" "}
                      {selectedRide.paymentMethod === "cash" ? "Cash" : "P2P"}
                    </p>
                    <p>
                      <span className="font-medium">Status:</span>{" "}
                      {getPaymentStatusBadge(selectedRide.paymentStatus)}
                    </p>

                    {selectedRide.transactionId && (
                      <p>
                        <span className="font-medium">Transaction ID:</span>{" "}
                        {selectedRide.transactionId}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
