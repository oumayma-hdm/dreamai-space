import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with purple nebula */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/f7178f3b3a7d7b199031fb9d848d51a3.jpg"
          alt="Purple space nebula"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 space-glow">
            Ready to Transform Your{" "}
            <span className="text-purple-400">Visual Universe</span>?
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of creators, historians, and gamers who are bringing
            new dimensions to their projects with DreamAI's powerful tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30">
              <div className="text-4xl mb-2 text-purple-400">10K+</div>
              <div className="text-gray-400">Images Colorized Daily</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30">
              <div className="text-4xl mb-2 text-purple-400">98%</div>
              <div className="text-gray-400">Customer Satisfaction</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30">
              <div className="text-4xl mb-2 text-purple-400">24/7</div>
              <div className="text-gray-400">Cloud Processing</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-in">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link href="/sign-in?plan=pro">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-900/20 px-8 py-6 text-lg"
              >
                See Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-violet-700" />
    </section>
  );
}
