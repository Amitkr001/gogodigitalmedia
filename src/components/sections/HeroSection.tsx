import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 3 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(211, 47, 47, 0.6)';
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(211, 47, 47, ${0.2 * (1 - distance / 200)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#D32F2F]/20 via-transparent to-transparent z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="text-center space-y-8">
          {/* Label */}
          <div className="inline-block">
            <span className="text-label text-[#D32F2F] text-sm px-4 py-2 glass rounded-full">
              Global Music Distribution Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display text-6xl md:text-7xl lg:text-8xl text-white leading-tight max-w-5xl mx-auto">
            Distribute Your Music{' '}
            <span className="text-[#D32F2F]">Worldwide</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Reach millions of listeners across Spotify, Apple Music, Amazon, and 150+ platforms.
            Keep 100% of your rights, track your earnings in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-6 text-lg rounded-lg animate-pulse-glow transition-all duration-200 hover:scale-105 group">
              Start Distributing
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              variant="outline"
              className="glass border-[#D32F2F]/30 text-white px-8 py-6 text-lg rounded-lg hover:border-[#D32F2F] transition-all duration-200 group"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-xl">
              <div className="text-mono text-4xl font-bold text-[#D32F2F] mb-2">20K+</div>
              <div className="text-sm text-[#A0A0A0]">Tracks Distributed</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-mono text-4xl font-bold text-[#D32F2F] mb-2">120+</div>
              <div className="text-sm text-[#A0A0A0]">Active Artists</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-mono text-4xl font-bold text-[#D32F2F] mb-2">150+</div>
              <div className="text-sm text-[#A0A0A0]">Platforms</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-mono text-4xl font-bold text-[#D32F2F] mb-2">180+</div>
              <div className="text-sm text-[#A0A0A0]">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  );
}
