import { NextResponse } from "next/server";
import connectDB from "@/utils/mongodb";
import { User } from "@/utils/schema";

export async function POST(res) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Get request body
    const body = await res.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and Password are required",
        },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({
      email: email.trim(),
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    // Check password
    if (user.password !== password) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Password",
        },
        { status: 401 }
      );
    }

    // Login success
    return NextResponse.json(
      {
        success: true,
        message: "Login Successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
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