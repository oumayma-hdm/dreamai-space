"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get plan from URL query parameters
    const planParam = searchParams.get("plan");
    if (planParam) {
      setSelectedPlan(planParam);
      setIsSignUp(true); // If a plan is specified, show the sign-up form
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    try {
      if (isSignUp) {
        // Handle sign up
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            name,
            plan: selectedPlan,
          }),
        });

        if (!response.ok) {
          throw new Error("Sign up failed");
        }

        const data = await response.json();
        toast.success("Account created successfully!");
        setIsSignUp(false);
      } else {
        // Handle sign in
        const response = await fetch("/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error("Sign in failed");
        }

        const data = await response.json();

        // Store user data in localStorage for demo purposes
        // In a real app, you would store the token and fetch user data when needed
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        toast.success("Signed in successfully!");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      features: [
        "5 image colorizations per month",
        "Basic video colorization",
        "Standard Minecraft transformations",
        "Community support",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$9.99",
      period: "month",
      features: [
        "Unlimited image colorizations",
        "Advanced video colorization",
        "Premium Minecraft transformations",
        "Priority support",
        "Batch processing",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$29.99",
      period: "month",
      features: [
        "Everything in Pro",
        "API access",
        "Custom block palettes",
        "Dedicated support",
        "Team collaboration",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 space-glow">
              {isSignUp ? "Create Your Account" : "Welcome Back"}
            </h1>
            <p className="text-xl text-gray-300">
              {isSignUp
                ? "Join DreamAI and transform your visual media"
                : "Sign in to continue your creative journey"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Auth Form */}
            <Card className="bg-black/60 backdrop-blur-md border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {isSignUp
                    ? "Create your account to get started"
                    : "Enter your credentials to continue"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {isSignUp && (
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="bg-black/40 border-purple-900/30 text-white"
                        required
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="bg-black/40 border-purple-900/30 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-black/40 border-purple-900/30 text-white"
                      required
                    />
                  </div>
                  {isSignUp && (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        className="border-purple-900/30"
                        required
                      />
                      <Label htmlFor="terms" className="text-gray-300 text-sm">
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-purple-400 hover:underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-purple-400 hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  )}
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "Loading..."
                      : isSignUp
                      ? "Create Account"
                      : "Sign In"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="link"
                  className="text-purple-400"
                  onClick={() => setIsSignUp(!isSignUp)}
                  type="button"
                >
                  {isSignUp
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign up"}
                </Button>
              </CardFooter>
            </Card>

            {/* Pricing Plans */}
            {isSignUp && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-purple-400">
                  Choose Your Plan
                </h2>
                <div className="grid gap-4">
                  {plans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`bg-black/60 backdrop-blur-md border-purple-900/30 cursor-pointer transition-all ${
                        selectedPlan === plan.id ? "border-purple-500" : ""
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <CardHeader>
                        <CardTitle className="text-xl text-purple-400">
                          {plan.name}
                        </CardTitle>
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold text-white">
                            {plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-gray-400 ml-1">
                              /{plan.period}
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 text-purple-500">✦</span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-900/20"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
