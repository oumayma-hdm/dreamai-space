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
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ColorizeImagePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [colorized, setColorized] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (for a real app)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Reset colorized result when a new file is selected
    setColorized(null);
  };

  const handleColorize = () => {
    if (!selectedFile) {
      toast.error("Please select an image first");
      return;
    }

    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      // In a real app, this would be an API call to your backend
      // For the demo, we'll just pretend to colorize the image
      // In reality, we're just using the same image
      setColorized(preview);
      setIsProcessing(false);
      toast.success("Image colorized successfully!");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 space-glow">
              Colorize Black & White Images
            </h1>
            <p className="text-xl text-gray-300">
              Upload your black and white images and watch them transform with
              AI-powered colorization
            </p>
          </div>

          <Card className="bg-black/60 backdrop-blur-md border-purple-900/30 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">
                Upload Image
              </CardTitle>
              <CardDescription className="text-gray-300">
                Select a black and white image to colorize
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="image" className="text-gray-300">
                    Select Image
                  </Label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div
                    className="border-2 border-dashed border-purple-500/40 rounded-lg p-6 cursor-pointer hover:border-purple-500/70 transition-colors text-center"
                    onClick={() => document.getElementById("image")?.click()}
                  >
                    {preview ? (
                      <div className="relative h-48 mx-auto overflow-hidden">
                        <Image
                          src={preview}
                          alt="Selected preview"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="text-purple-400 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300">
                          Click to browse or drag and drop
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Supports JPG, PNG, WebP
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <Button
                  onClick={handleColorize}
                  disabled={!selectedFile || isProcessing}
                  className="bg-purple-600 hover:bg-purple-700 w-full"
                >
                  {isProcessing ? "Processing..." : "Colorize Image"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {colorized && (
            <Card className="bg-black/60 backdrop-blur-md border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">
                  Colorized Result
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Here's your colorized image
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg text-purple-400 mb-2">Original</h3>
                    <div className="relative h-64 w-full border border-gray-800 rounded-lg overflow-hidden">
                      {preview && (
                        <Image
                          src={preview}
                          alt="Original image"
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-purple-400 mb-2">Colorized</h3>
                    <div className="relative h-64 w-full border border-gray-800 rounded-lg overflow-hidden">
                      {colorized && (
                        <Image
                          src={colorized}
                          alt="Colorized result"
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                  Download
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-purple-500 text-purple-400 hover:bg-purple-900/20"
                  onClick={() => {
                    setSelectedFile(null);
                    setPreview(null);
                    setColorized(null);
                  }}
                >
                  Try Another Image
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
