"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  plan: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // In a real app, this would check for a valid auth token in cookies/localStorage
    // and fetch user data from an API

    // For demo purposes, we'll just simulate a logged-in user
    // or redirect if no user data found
    const simulateAuthCheck = () => {
      // Check if we have stored user data from sign-in
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error("Failed to parse user data", e);
          router.push("/sign-in");
        }
      } else {
        // For demo, create a mock user instead of redirecting
        setUser({
          id: "user-1",
          name: "Demo User",
          email: "demo@example.com",
          plan: "free",
        });

        // In a real app, you would redirect to sign in:
        // router.push("/sign-in");
      }
    };

    simulateAuthCheck();
  }, [router]);

  const handleSignOut = () => {
    // Clear stored user data
    localStorage.removeItem("user");
    // Redirect to home page
    router.push("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-purple-400 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold space-glow">
              Welcome, {user.name}
            </h1>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-900/20"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-black/60 backdrop-blur-md border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">
                  Your Plan
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Current subscription details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white capitalize mb-2">
                  {user.plan || "Free"}
                </div>
                <p className="text-gray-300">
                  {user.plan === "free"
                    ? "5 image colorizations per month"
                    : user.plan === "pro"
                    ? "Unlimited image colorizations"
                    : "All premium features included"}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Upgrade Plan
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-black/60 backdrop-blur-md border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">
                  Image Colorization
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Transform black & white images
                </CardDescription>
              </CardHeader>
              <CardContent className="h-24 flex items-center justify-center">
                <div className="text-gray-300">
                  Start colorizing your images today
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/services/colorize-images" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Go to Colorizer
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-black/60 backdrop-blur-md border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">
                  Minecraft Transform
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Convert images to Minecraft style
                </CardDescription>
              </CardHeader>
              <CardContent className="h-24 flex items-center justify-center">
                <div className="text-gray-300">
                  Create amazing Minecraft-style art
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/services/minecraft-transform" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Start Transforming
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-purple-400 mb-6">
            Recent Creations
          </h2>
          <div className="text-center p-12 border border-dashed border-purple-900/30 rounded-lg">
            <p className="text-gray-300 mb-4">
              You haven't created any projects yet
            </p>
            <Link href="/services/colorize-images">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Create Your First Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
