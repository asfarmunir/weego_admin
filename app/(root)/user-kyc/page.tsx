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
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  kyc: {
    documents: {
      cnicFront: string;
      cnicBack: string;
    };
    verificationStatus: string;
    rejectionReason?: string;
    submittedAt: string;
  };
}

const KYCVerificationPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState<"Male" | "Female" | "">("");

  useEffect(() => {
    const fetchPendingKYCUsers = async () => {
      try {
        const response = await fetch("/api/kyc-pending");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching pending KYC users:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPendingKYCUsers();
  }, []);

  const handleApprove = async () => {
    if (!selectedUser || !gender) return;

    try {
      const response = await fetch("/api/approve-kyc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: selectedUser._id,
          gender,
        }),
      });

      if (response.ok) {
        setUsers(users.filter((user) => user._id !== selectedUser._id));
        setSelectedUser(null);
        setGender("");
        setIsDialogOpen(false);
        toast.success("KYC approved successfully!");
      }
    } catch (error) {
      console.error("Error approving KYC:", error);
    }
  };

  const handleReject = async () => {
    if (!selectedUser || !rejectionReason) return;

    try {
      const response = await fetch("/api/reject-kyc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: selectedUser._id,
          reason: rejectionReason,
        }),
      });

      if (response.ok) {
        setUsers(users.filter((user) => user._id !== selectedUser._id));
        setRejectionReason("");
        setSelectedUser(null);
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Error rejecting KYC:", error);
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
        User Management
      </p>
      <h1 className="text-4xl 2xl:text-5xl font-bold">KYC Verifications</h1>

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
                  Submitted On
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Status
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Email
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Phone
                </TableHead>
                <TableHead className="text-sm text-center bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No pending KYC verifications found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user._id.slice(-6)}</TableCell>
                    <TableCell>{`${user.firstname} ${
                      user.lastname || ""
                    }`}</TableCell>
                    <TableCell className="text-center">
                      {format(new Date(user.kyc.submittedAt), "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell className="text-center">
                      {getStatusBadge(user.kyc.verificationStatus)}
                    </TableCell>
                    <TableCell className="text-center">{user.email}</TableCell>
                    <TableCell className="text-center">
                      {user.phoneNumber || "N/A"}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedUser(user);
                          setIsDialogOpen(true);
                        }}
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

      {/* KYC Review Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="mb-4">
            <DialogTitle>KYC Verification</DialogTitle>
            <DialogDescription>
              Review user's submitted documents for identity verification
            </DialogDescription>
          </DialogHeader>

          {selectedUser && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold mb-3 text-primary-50 border-b border-primary-50/20 pb-2">
                  User Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {selectedUser.firstname} {selectedUser.lastname || ""}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {selectedUser.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {selectedUser.phoneNumber || "N/A"}
                  </p>
                  <p>
                    <span className="font-medium">Submitted On:</span>{" "}
                    {format(
                      new Date(selectedUser.kyc.submittedAt),
                      "MMM dd, yyyy hh:mm a"
                    )}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold mb-3 text-primary-50 border-b border-primary-50/20 pb-2">
                  Identity Documents
                </h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <p className="font-medium mb-2">CNIC Front:</p>
                    <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={selectedUser.kyc.documents.cnicFront}
                        alt="CNIC Front"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-2">CNIC Back:</p>
                    <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={selectedUser.kyc.documents.cnicBack}
                        alt="CNIC Back"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t space-y-4">
                {selectedUser.kyc.verificationStatus === "pending" && (
                  <>
                    <div className="space-y-2">
                      <Label>Select Gender (required for approval)</Label>
                      <RadioGroup
                        value={gender}
                        onValueChange={(value: "Male" | "Female") =>
                          setGender(value)
                        }
                        className="flex gap-4"
                      >
                        <div
                          className={`flex items-center space-x-2
                            ${
                              gender === "Male"
                                ? "bg-blue-800/50 rounded-lg px-4 py-2"
                                : "bg-slate-800/50 rounded-lg px-4 py-2"
                            }
                            
                            `}
                        >
                          <RadioGroupItem value="Male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div
                          className={`
                          ${
                            gender === "Female"
                              ? "bg-blue-800/50 rounded-lg px-4 py-2"
                              : "bg-slate-800/50 rounded-lg px-4 py-2"
                          }
                            
                            flex items-center space-x-2`}
                        >
                          <RadioGroupItem value="Female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rejectionReason">
                        Rejection Reason (required for rejection)
                      </Label>
                      <Input
                        id="rejectionReason"
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                        placeholder="Enter reason for rejection"
                      />
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button
                        variant="destructive"
                        onClick={handleReject}
                        disabled={!rejectionReason}
                      >
                        Reject
                      </Button>
                      <Button
                        onClick={handleApprove}
                        disabled={!gender}
                        className="text-white"
                      >
                        Approve
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KYCVerificationPage;
