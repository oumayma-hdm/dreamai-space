import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { email, password, name, plan } = body;

    // Basic validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, password, and name are required" },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Store user data in a database
    // 4. Create a session or token

    // Mock user data - in a real app this would be stored in a database
    const user = {
      id: "user-" + Math.random().toString(36).substring(2),
      email,
      name,
      plan: plan || "free",
      createdAt: new Date().toISOString(),
    };

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Sign up error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
