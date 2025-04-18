import { Separator } from "@/components/ui/separator";

export function Features() {
  const features = [
    {
      id: 'advanced-ai',
      title: 'Advanced AI Models',
      description: 'Our proprietary neural networks are trained on millions of images to deliver stunning colorization and transformation results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4M18 6a4 4 0 0 1-4 4" />
          <circle cx="12" cy="14" r="4" />
          <path d="M12 22V18M12 14v-4M14 12h4M6 12h2" />
        </svg>
      )
    },
    {
      id: 'real-time-processing',
      title: 'Real-time Processing',
      description: 'Experience lightning-fast transformations with our GPU-accelerated cloud infrastructure, delivering results in seconds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      id: 'custom-settings',
      title: 'Customizable Settings',
      description: 'Fine-tune your transformations with adjustable parameters to achieve exactly the look you want for your projects.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      id: 'batch-processing',
      title: 'Batch Processing',
      description: 'Transform entire collections of media at once with our efficient batch processing tools, saving you time and effort.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'high-quality-outputs',
      title: 'High-Quality Outputs',
      description: 'Export your transformations in high resolution formats suitable for professional printing, social media, or game integration.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
          <path d="M9 8l-2 2 2 2" />
          <path d="M15 8l2 2-2 2" />
          <line x1="12" y1="18" x2="12" y2="6" />
        </svg>
      )
    },
    {
      id: 'api-access',
      title: 'API Access',
      description: 'Integrate our powerful transformation capabilities directly into your applications with our developer-friendly API.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    }
  ];

  // Create stars with unique IDs based on random values
  const starsWithUniqueIds = Array.from({ length: 30 }).map(() => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 4;
    const uniqueId = `star-${top.toFixed(4)}-${left.toFixed(4)}-${delay.toFixed(4)}`;

    return {
      id: uniqueId,
      top: `${top}%`,
      left: `${left}%`,
      delay: `${delay}s`,
      size: Math.random() > 0.9 ? '3px' : '2px'
    };
  });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Stars effect */}
      {starsWithUniqueIds.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            width: star.size,
            height: star.size,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 space-glow">Interstellar Technology</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge AI frameworks that make the impossible possible
          </p>
          <Separator className="mt-8 mb-16 bg-purple-900/50 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-6 rounded-lg cosmic-border bg-black/40 backdrop-blur-sm"
            >
              <div className="p-4 mb-5 rounded-full bg-purple-900/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
