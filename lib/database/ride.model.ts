import { Schema, model, models } from "mongoose";

const rideSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    driverId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the driver's profile
      default: null, // Initially, no driver is assigned
    },
    pickupLocation: {
      type: {
        type: String,
        enum: ["Point"], // GeoJSON format
        required: true,
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
      address: {
        type: String, // Pickup address
        required: true,
      },
    },
    dropoffLocation: {
      type: {
        type: String,
        enum: ["Point"], // GeoJSON format
        required: true,
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
      address: {
        type: String, // Drop-off address
        required: true,
      },
    },
    distance: {
      type: Number, // Distance between pickup and drop-off in meters
      required: true,
    },
    fare: {
      type: Number, // Calculated fare based on distance and pricing rules
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "ongoing", "completed", "cancelled"],
      default: "pending",
    },
    rideType: {
      type: String,
      enum: ["shared", "personal"],
      default: "personal",
    },
    requestedAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
      default: null,
    },

    // 🏦 P2P Payment Fields
    paymentMethod: {
      type: String,
      enum: ["cash", "p2p"],
      default: "p2p", // Default is P2P if user needs to upload proof
    },
    paymentProof: {
      type: String, // Image URL of the payment screenshot
      default: null,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
    transactionId: {
      type: String, // Transaction ID of the payment
      default: null,
    },
  },
  { timestamps: true }
);

rideSchema.index({ pickupLocation: "2dsphere" }); // Enable geospatial queries

const Ride = models.Ride || model("Ride", rideSchema);

export default Ride;
