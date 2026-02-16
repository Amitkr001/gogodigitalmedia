import { Star, Quote } from 'lucide-react';

export default function ArtistsSection() {
  const artists = [
    {
      name: 'Aarav Singh',
      genre: 'Hip-Hop / Rap',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
      quote: 'GOGO helped me reach listeners in over 50 countries. My streams grew 10x in just 3 months!',
      streams: '2.5M+',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      genre: 'Indie Pop',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80',
      quote: 'The analytics dashboard is incredible. I finally understand where my fans are and how to reach them.',
      streams: '1.8M+',
      rating: 5,
    },
    {
      name: 'Rohit Verma',
      genre: 'Electronic / EDM',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
      quote: 'Transparent, fast, and reliable. GOGO is everything I needed as an independent producer.',
      streams: '3.2M+',
      rating: 5,
    },
    {
      name: 'Sneha Kapoor',
      genre: 'Classical Fusion',
      image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&q=80',
      quote: 'Being on 150+ platforms means my classical fusion music reaches audiences I never imagined possible.',
      streams: '900K+',
      rating: 5,
    },
  ];

  return (
    <section id="artists" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-label text-[#D32F2F] text-sm mb-4 block">Success Stories</span>
          <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
            Artists Who <span className="text-[#D32F2F]">Made It</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Real stories from independent artists who transformed their careers with GOGO Digital Media.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artists.map((artist, index) => (
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

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
