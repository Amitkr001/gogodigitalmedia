import { useEffect, useRef, useState } from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function AnimatedStat({ end, label, suffix = '', prefix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={statRef} className="text-center">
      <div className="text-mono text-5xl md:text-6xl font-bold text-[#D32F2F] mb-3">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg text-[#A0A0A0]">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-label text-[#D32F2F] text-sm mb-4 block">By The Numbers</span>
          <h2 className="text-display text-4xl md:text-5xl text-white mb-4">
            Trusted by <span className="text-[#D32F2F]">Artists Worldwide</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatedStat end={50000} label="Tracks Distributed" suffix="+" />
          <AnimatedStat end={10000} label="Active Artists" suffix="+" />
          <AnimatedStat end={150} label="Distribution Platforms" suffix="+" />
          <AnimatedStat end={180} label="Countries Reached" suffix="+" />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl text-center hover:border-[#D32F2F]/50 transition-all duration-300">
            <div className="text-mono text-4xl font-bold text-white mb-3">2B+</div>
            <div className="text-[#A0A0A0]">Total Streams Generated</div>
          </div>
          <div className="glass p-8 rounded-2xl text-center hover:border-[#D32F2F]/50 transition-all duration-300">
            <div className="text-mono text-4xl font-bold text-white mb-3">99.8%</div>
            <div className="text-[#A0A0A0]">Customer Satisfaction</div>
          </div>
          <div className="glass p-8 rounded-2xl text-center hover:border-[#D32F2F]/50 transition-all duration-300">
            <div className="text-mono text-4xl font-bold text-white mb-3">24hrs</div>
            <div className="text-[#A0A0A0]">Average Distribution Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
