import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json(
      {
        success: true,
        message: "Database connected successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database health check failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed.",
      },
      { status: 500 }
    );
  }
}