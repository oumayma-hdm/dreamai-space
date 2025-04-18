"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface ImageService {
  id: string;
  title: string;
  description: string;
  image: string;
  type: "image";
  features: string[];
}

interface VideoService {
  id: string;
  title: string;
  description: string;
  videoId: string;
  type: "video";
  image: string; // Thumbnail image for non-hover state
  features: string[];
}

type Service = ImageService | VideoService;

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: "colorize-images",
      title: "Colorize Black & White Images",
      description:
        "Bring historic photos and classic art to life with AI-powered colorization that respects the original composition while adding vibrant, realistic colors.",
      image: "/images/black white.jpg",
      type: "image",
      features: [
        "Preserve original details and texture",
        "Adjust color intensity and palette",
        "Batch process multiple images",
        "Export in high resolution",
      ],
    },
    {
      id: "colorize-videos",
      title: "Colorize Black & White Videos",
      description:
        "Transform vintage films and monochrome footage with our advanced video colorization that maintains temporal consistency frame by frame.",
      image: "/images/cfa6b5111c6364a2d30dca692a5bd1e1.jpg",
      type: "image",
      features: [
        "Stable colors across frames",
        "Process videos of any length",
        "Supports multiple formats",
        "Preserve original audio",
      ],
    },
    {
      id: "minecraft-transform",
      title: "Minecraft-Style Transformation",
      description:
        "Convert any image into distinctive Minecraft-style pixel art with customizable block textures and resolution for perfect in-game recreation.",
      videoId: "E2uVQdGW1qo",
      image: "/images/f0ffd4a71fd6fc787c7c58df00c78a57.jpg", // Default thumbnail
      type: "video",
      features: [
        "Adjustable block size and detail",
        "Custom block palette options",
        "Generate building instructions",
        "One-click export to game formats",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 space-gradient opacity-30 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 space-glow">
            Our Cosmic Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of AI to transform your visual media with these
            stellar services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="service-card bg-black/60 backdrop-blur-md border-purple-900/30 hover:border-purple-500/50 transition-colors overflow-hidden"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                {service.type === "video" && hoveredCard === service.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1&mute=1&playlist=${service.videoId}&loop=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                ) : (
                  <>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={`${service.id}-feature-${i}`}
                      className="flex items-start"
                    >
                      <span className="mr-2 text-purple-500">✦</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href={`/services/${service.id}`} className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Try {service.title.split(" ")[0]}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
