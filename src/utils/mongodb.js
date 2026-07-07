import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const connectDB = async () => {
  // Return existing connection if already connected
  if (cached.conn) {
    return cached.conn;
  }

  // Create a new connection if one doesn't exist
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "hotelbooking",
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB Connected");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
};

export default connectDB;