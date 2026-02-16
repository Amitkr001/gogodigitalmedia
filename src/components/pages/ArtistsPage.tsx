import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import { Star, Quote, Music, TrendingUp, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ArtistsPage() {
  const featuredArtists = [
    {
      name: 'Aarav Singh',
      genre: 'Hip-Hop / Rap',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
      quote: 'GOGO helped me reach listeners in over 50 countries. My streams grew 10x in just 3 months!',
      streams: '2.5M+',
      rating: 5,
      country: 'India',
    },
    {
      name: 'Priya Mehta',
      genre: 'Indie Pop',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80',
      quote: 'The analytics dashboard is incredible. I finally understand where my fans are and how to reach them.',
      streams: '1.8M+',
      rating: 5,
      country: 'India',
    },
    {
      name: 'Rohit Verma',
      genre: 'Electronic / EDM',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
      quote: 'Transparent, fast, and reliable. GOGO is everything I needed as an independent producer.',
      streams: '3.2M+',
      rating: 5,
      country: 'India',
    },
    {
      name: 'Sneha Kapoor',
      genre: 'Classical Fusion',
      image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&q=80',
      quote: 'Being on 150+ platforms means my classical fusion music reaches audiences I never imagined possible.',
      streams: '900K+',
      rating: 5,
      country: 'India',
    },
    {
      name: 'Marcus Chen',
      genre: 'R&B / Soul',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'GOGO\'s playlist pitching service got me featured on 15 curated playlists in my first month.',
      streams: '4.1M+',
      rating: 5,
      country: 'USA',
    },
    {
      name: 'Sofia Rodriguez',
      genre: 'Latin Pop',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'From local gigs to international streams - GOGO made my dream of global music distribution a reality.',
      streams: '5.7M+',
      rating: 5,
      country: 'Mexico',
    },
    {
      name: 'Kenji Tanaka',
      genre: 'Lo-Fi / Ambient',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80',
      quote: 'The revenue splits feature made it seamless to collaborate with other artists and share earnings fairly.',
      streams: '2.8M+',
      rating: 5,
      country: 'Japan',
    },
    {
      name: 'Amara Okafor',
      genre: 'Afrobeats',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
      quote: 'GOGO helped me break into international markets while keeping my African roots front and center.',
      streams: '6.3M+',
      rating: 5,
      country: 'Nigeria',
    },
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Artists' },
    { icon: Music, value: '50,000+', label: 'Tracks Distributed' },
    { icon: Globe, value: '180+', label: 'Countries' },
    { icon: TrendingUp, value: '500M+', label: 'Total Streams' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A]">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-40 pb-24 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center space-y-8">
              <span className="text-label text-[#D32F2F] text-sm px-4 py-2 glass rounded-full inline-block">
                Success Stories
              </span>
              <h1 className="text-display text-6xl md:text-7xl lg:text-8xl text-white leading-tight max-w-5xl mx-auto">
                Artists Who <span className="text-[#D32F2F]">Made It</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
                Real stories from independent artists who transformed their careers with GOGO Digital Media.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="glass p-6 rounded-2xl text-center hover:border-[#D32F2F]/50 transition-all duration-300">
                    <Icon className="text-[#D32F2F] mx-auto mb-3" size={28} />
                    <div className="text-mono text-3xl font-bold text-[#D32F2F] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#A0A0A0]">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-32 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArtists.map((artist, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover:border-[#D32F2F]/50 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-6">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-[#D32F2F]/30 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                        <span className="text-xs text-[#A0A0A0] glass px-2 py-0.5 rounded-full">{artist.country}</span>
                      </div>
                      <p className="text-[#D32F2F] text-sm font-semibold mb-1">{artist.genre}</p>
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: artist.rating }).map((_, i) => (
                          <Star key={i} size={14} className="text-[#D32F2F] fill-[#D32F2F]" />
                        ))}
                      </div>
                      <div className="relative">
                        <Quote size={16} className="text-[#D32F2F]/40 absolute -top-1 -left-1" />
                        <p className="text-[#A0A0A0] leading-relaxed pl-4 italic">
                          {artist.quote}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#1A1A1A]">
                        <span className="text-sm text-[#A0A0A0]">Total Streams: </span>
                        <span className="text-[#D32F2F] font-bold">{artist.streams}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden glow-red-soft text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#D32F2F] rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D32F2F] rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 space-y-6">
                <h2 className="text-display text-4xl md:text-5xl text-white">
                  Be the Next <span className="text-[#D32F2F]">Success Story</span>
                </h2>
                <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
                  Join thousands of artists who've already transformed their music careers with GOGO.
                </p>
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-10 py-6 text-lg rounded-lg animate-pulse-glow transition-all duration-200 hover:scale-105 group">
                  Start Your Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
