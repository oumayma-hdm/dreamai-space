import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  // Generate star elements with random positions
  const stars = Array.from({ length: 50 }).map((_, i) => {
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const delay = `${Math.random() * 4}s`;
    const uniqueId = `star-${top.replace("%", "")}-${left.replace(
      "%",
      ""
    )}-${i}`;

    return (
      <div
        key={uniqueId}
        className="star"
        style={{
          top,
          left,
          animationDelay: delay,
          width: Math.random() > 0.9 ? "3px" : "2px",
          height: Math.random() > 0.9 ? "3px" : "2px",
        }}
      />
    );
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/f48fcac23828211f4c3b59400e0df3b4.jpg"
          alt="Space background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Stars animation */}
      {stars}

      {/* Hero content */}
      <div className="relative container mx-auto px-4 pt-40 pb-20 flex flex-col items-center text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold space-glow mb-4 leading-tight tracking-tighter">
          Transform Your Visual Media with
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
            {" "}
            AI Magic
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Breathe new life into black and white media with state-of-the-art AI
          colorization and transform your images into Minecraft-style art.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="/sign-in">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            >
              Try It Free
            </Button>
          </Link>
          <Link href="#services">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-900/20 px-8 py-6 text-lg"
            >
              View Examples
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-colors">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Colorize Images
            </h3>
            <p className="text-gray-400">
              Bring old photos to life with vibrant colors powered by AI.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-colors">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Colorize Videos
            </h3>
            <p className="text-gray-400">
              Transform black and white videos with stable color across frames.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-colors">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Minecraft Transformation
            </h3>
            <p className="text-gray-400">
              Turn any image into Minecraft-style pixel art with blocky
              aesthetics.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-purple-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
