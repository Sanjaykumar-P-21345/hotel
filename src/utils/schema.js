import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);




const hotelSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    image: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
    },

    pricePerNight: {
      type: Number,
      required: true,
    },

    amenities: [
      {
        type: String,
      },
    ],

    availableRooms: {
      type: Number,
      default: 0,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);
  