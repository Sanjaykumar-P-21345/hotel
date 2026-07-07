import { NextResponse } from "next/server";
import connectDB from "@/utils/mongodb";
import { User } from "@/utils/schema";

export async function POST(res) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Get request body
    const body = await res.json();
    const { name, email, password } = body;

    // Validate fields
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        { status: 409 }
      );
    }

    // Create user
    const newUser = await User.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration Successful",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}