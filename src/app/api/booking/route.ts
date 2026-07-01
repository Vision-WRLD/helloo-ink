import { NextResponse } from "next/server";
import { db } from "@/db";
import { bookings } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      preferredArtist,
      placement,
      size,
      style,
      budget,
      description,
      referenceFileNames,
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "First name, last name, email, and phone are required." },
        { status: 400 }
      );
    }

    if (!placement || !size || !style) {
      return NextResponse.json(
        { error: "Placement, size, and style are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await db.insert(bookings).values({
      firstName,
      lastName,
      email,
      phone,
      preferredArtist: preferredArtist || null,
      placement,
      size,
      style,
      budget: budget || null,
      description: description || null,
      referenceUrls: referenceFileNames ? JSON.stringify(referenceFileNames) : null,
    });

    return NextResponse.json(
      { message: "Booking consultation request submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking request. Please try again." },
      { status: 500 }
    );
  }
}
