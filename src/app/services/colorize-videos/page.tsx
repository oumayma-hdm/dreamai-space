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

export default function ColorizeVideoPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [colorized, setColorized] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState<{
    id: string;
    name: string;
    email: string;
    plan: string;
  } | null>(null);
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

    // Check if the file is a video
    if (!file.type.startsWith("video/")) {
      toast.error("Please select a video file");
      return;
    }

    setSelectedFile(file);

    // For demo purposes, we'll use an image preview since we can't easily generate video previews
    setPreview("/images/cfa6b5111c6364a2d30dca692a5bd1e1.jpg");

    // Reset colorized result when a new file is selected
    setColorized(null);
    setProgress(0);
  };

  const handleColorize = () => {
    if (!selectedFile) {
      toast.error("Please select a video first");
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    // Simulate processing with progress updates
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 10);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 500);

    // Simulate completion after some time
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setColorized("/images/cfa6b5111c6364a2d30dca692a5bd1e1.jpg");
      setIsProcessing(false);
      toast.success("Video colorized successfully!");
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 space-glow">
              Colorize Black & White Videos
            </h1>
            <p className="text-xl text-gray-300">
              Transform vintage films and monochrome footage with advanced video
              colorization
            </p>
          </div>

          <Card className="bg-black/60 backdrop-blur-md border-purple-900/30 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">
                Upload Video
              </CardTitle>
              <CardDescription className="text-gray-300">
                Select a black and white video to colorize
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="video" className="text-gray-300">
                    Select Video
                  </Label>
                  <input
                    id="video"
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div
                    className="border-2 border-dashed border-purple-500/40 rounded-lg p-6 cursor-pointer hover:border-purple-500/70 transition-colors text-center"
                    onClick={() => document.getElementById("video")?.click()}
                  >
                    {preview ? (
                      <div className="relative h-48 mx-auto overflow-hidden">
                        <Image
                          src={preview}
                          alt="Video preview"
                          fill
                          className="object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white bg-black/70 px-3 py-1 rounded-full text-sm">
                            Preview
                          </span>
                        </div>
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
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300">
                          Click to browse or drag and drop
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Supports MP4, MOV, AVI (up to 100MB)
                        </p>
                      </>
                    )}
                  </div>
                  {selectedFile && (
                    <p className="text-sm text-gray-400">
                      Selected: {selectedFile.name} (
                      {Math.round((selectedFile.size / 1024 / 1024) * 10) / 10}
                      MB)
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleColorize}
                  disabled={!selectedFile || isProcessing}
                  className="bg-purple-600 hover:bg-purple-700 w-full"
                >
                  {isProcessing ? "Processing..." : "Colorize Video"}
                </Button>

                {isProcessing && (
                  <div className="space-y-2">
                    <div className="w-full bg-purple-900/30 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-center text-gray-400">
                      Processing: {progress}% complete
                    </p>
                    <p className="text-xs text-center text-gray-500">
                      {progress < 30
                        ? "Analyzing frames..."
                        : progress < 60
                        ? "Applying colorization..."
                        : progress < 90
                        ? "Enhancing colors..."
                        : "Finalizing video..."}
                    </p>
                  </div>
                )}
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
                  Your video has been colorized
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video w-full border border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={colorized}
                    alt="Colorized video preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button className="bg-purple-600/90 hover:bg-purple-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Play Video
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                  Download Video
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-purple-500 text-purple-400 hover:bg-purple-900/20"
                  onClick={() => {
                    setSelectedFile(null);
                    setPreview(null);
                    setColorized(null);
                    setProgress(0);
                  }}
                >
                  Try Another Video
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
