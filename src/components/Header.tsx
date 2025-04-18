import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white space-glow mr-8"
          >
            Dream<span className="text-purple-500">AI</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#services"
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#features"
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-900/20"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Try Free
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
