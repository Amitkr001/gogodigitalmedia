import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="glass rounded-3xl p-12 md:p-16 lg:p-20 relative overflow-hidden glow-red-soft">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#D32F2F] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D32F2F] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center space-y-8">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Sparkles className="text-[#D32F2F]" size={16} />
              <span className="text-label text-[#D32F2F] text-sm">Limited Time Offer</span>
            </div>

            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Start Your Global Music
              <br />
              <span className="text-[#D32F2F]">Journey Today</span>
            </h2>

            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
              Join thousands of independent artists who trust GOGO Digital Media to distribute
              their music worldwide. Get started in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-10 py-6 text-lg rounded-lg animate-pulse-glow transition-all duration-200 hover:scale-105 group">
                Create Free Account
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                variant="outline"
                className="glass border-[#D32F2F]/30 text-white px-10 py-6 text-lg rounded-lg hover:border-[#D32F2F] transition-all duration-200"
              >
                View Plans
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
              <div>
                <div className="text-mono text-3xl font-bold text-white mb-2">No Setup Hassle</div>
                <div className="text-sm text-[#A0A0A0]">Start distributing immediately</div>
              </div>
              <div>
                <div className="text-mono text-3xl font-bold text-white mb-2">100% Rights</div>
                <div className="text-sm text-[#A0A0A0]">You own your music forever</div>
              </div>
              <div>
                <div className="text-mono text-3xl font-bold text-white mb-2">24/7 Support</div>
                <div className="text-sm text-[#A0A0A0]">Always here to help you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
