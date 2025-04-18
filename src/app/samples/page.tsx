"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SamplesPage() {
  const samples = [
    {
      id: "colorize-images",
      title: "Image Colorization Examples",
      description:
        "See how our AI brings black and white photos to life with vibrant colors",
      examples: [
        {
          before: "/images/black white.jpg",
          after: "/images/colorized.jpg",
          title: "Historic Photo Restoration",
        },
        {
          before: "/images/old-photo.jpg",
          after: "/images/colorized-old.jpg",
          title: "Family Photo Enhancement",
        },
      ],
    },
    {
      id: "colorize-videos",
      title: "Video Colorization Examples",
      description:
        "Watch vintage footage transformed with our advanced colorization technology",
      examples: [
        {
          before: "/images/video-before.jpg",
          after: "/images/video-after.jpg",
          title: "Classic Film Restoration",
        },
        {
          before: "/images/documentary-before.jpg",
          after: "/images/documentary-after.jpg",
          title: "Documentary Enhancement",
        },
      ],
    },
    {
      id: "minecraft-transform",
      title: "Minecraft Transformation Examples",
      description:
        "Explore how any image can be converted into Minecraft-style art",
      examples: [
        {
          before: "/images/real-world.jpg",
          after: "/images/minecraft-world.jpg",
          title: "Real World to Minecraft",
        },
        {
          before: "/images/artwork.jpg",
          after: "/images/minecraft-art.jpg",
          title: "Artwork Transformation",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 space-glow">
            Sample Transformations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our gallery of transformations and see the magic of AI in
            action
          </p>
        </div>

        {samples.map((category) => (
          <section key={category.id} className="mb-24">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">
              {category.title}
            </h2>
            <p className="text-gray-300 mb-8">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.examples.map((example, index) => (
                <div
                  key={index}
                  className="bg-black/60 backdrop-blur-md p-6 rounded-lg border border-purple-900/30"
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    {example.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 mb-2">Before</p>
                      <div className="relative h-48 w-full">
                        <Image
                          src={example.before}
                          alt={`Before ${example.title}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">After</p>
                      <div className="relative h-48 w-full">
                        <Image
                          src={example.after}
                          alt={`After ${example.title}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-16">
          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
