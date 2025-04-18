import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { email, password } = body;

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // In a real app, you would validate credentials against a database
    // This is just a mock implementation

    // Mock user data - in a real app this would come from a database
    const user = {
      id: "user-1",
      email,
      name: "Demo User",
      plan: "free",
    };

    // Mock authentication token - in a real app this would be a JWT
    const token = "mock-auth-token-" + Math.random().toString(36).substring(2);

    // Return success response with user data
    return NextResponse.json(
      {
        success: true,
        user,
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Sign in error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
