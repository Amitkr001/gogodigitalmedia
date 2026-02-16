import { Target, Heart, Zap, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <span className="text-label text-[#D32F2F] text-sm">About GOGO Digital Media</span>
            <h2 className="text-display text-5xl md:text-6xl text-white leading-tight">
              Built by Artists,
              <br />
              <span className="text-[#D32F2F]">For Artists</span>
            </h2>
            <p className="text-xl text-[#A0A0A0] leading-relaxed">
              Founded by <span className="text-white font-semibold">Pawan Kushwaha</span>, GOGO
              Digital Media was born from a simple mission: give independent artists the same
              distribution power as major labels, without the complexity or hidden fees.
            </p>
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              We believe every artist deserves to be heard globally. That's why we've built a
              platform that's transparent, affordable, and powerful - helping you reach millions of
              listeners while keeping complete control of your music and rights.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#D32F2F]/20 flex items-center justify-center flex-shrink-0">
                  <Target className="text-[#D32F2F]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Mission</h4>
                  <p className="text-sm text-[#A0A0A0]">
                    Democratize music distribution for all artists
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#D32F2F]/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="text-[#D32F2F]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Values</h4>
                  <p className="text-sm text-[#A0A0A0]">
                    Transparency, artist empowerment, innovation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#D32F2F]/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-[#D32F2F]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Approach</h4>
                  <p className="text-sm text-[#A0A0A0]">Fast, reliable, and artist-first service</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#D32F2F]/20 flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#D32F2F]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Community</h4>
                  <p className="text-sm text-[#A0A0A0]">
                    10,000+ artists growing together
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder Card */}
          <div className="glass p-10 rounded-3xl glow-red-soft">
            <div className="space-y-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] mx-auto flex items-center justify-center text-5xl font-bold text-white">
                PK
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold text-white">Pawan Kushwaha</h3>
                <p className="text-[#D32F2F] text-lg font-semibold">Founder & CEO</p>
              </div>

              <blockquote className="text-[#A0A0A0] italic text-center leading-relaxed border-l-4 border-[#D32F2F] pl-6 py-4">
                "I started GOGO because I experienced firsthand how difficult it was for
                independent artists to get their music heard. We're here to change that - to give
                every artist a fair shot at reaching their audience, no matter where they are in the
                world."
              </blockquote>

              <div className="pt-6 space-y-3 border-t border-[#1A1A1A]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A0A0A0]">Industry Experience</span>
                  <span className="text-white font-semibold">10+ Years</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A0A0A0]">Artists Helped</span>
                  <span className="text-white font-semibold">10,000+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A0A0A0]">Platform Launch</span>
                  <span className="text-white font-semibold">2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
