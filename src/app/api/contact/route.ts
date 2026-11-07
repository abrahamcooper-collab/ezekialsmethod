import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json(
        { error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Server-side audit log for intake lead
    console.log("[Ezekiel Technique Lead Intake Received]:", {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service: service || "General Calibration Assessment",
      message: message || "None provided",
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your calibration assessment request has been received.",
    });
  } catch (err) {
    console.error("[Contact API Error]:", err);
    return NextResponse.json(
      { error: "Internal server error. Please call (424) 653-9123 directly." },
      { status: 500 }
    );
  }
}

