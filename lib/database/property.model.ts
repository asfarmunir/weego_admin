import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    acres: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photos: {
      type: [String], // Array of photo URLs
      default: [],
    },
    insurance: {
      type: String,
    },
   gameAvailable: {
      type: [String],
      default: [],
    },
    pricePerNight: {
      type: Number,
      required: true, // Assuming price per night is mandatory
    },
    bookedDates: {
      type: [Date], // Array to store the dates when the property is booked
      default: [],
    },
     nonAvailableDates: {
      type: [Date], // Array to store dates when the owner does not want to rent out the property
      default: [],
    },
    city:{
      type: String,
      required: true,
    },
    location: {
      longitude: {
        type: Number,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
    },
    owner:{
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reviews: {
      type: [
        {
          user: { type: Schema.Types.ObjectId, ref: "User" },
          review: { type: String },
          rating: { type: Number },
        },
      ],
      default: [],
    },
    extraServices: {
      type: String,
      default: "",
    }
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", PropertySchema);

export default Property;
