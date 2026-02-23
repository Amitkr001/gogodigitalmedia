import { useState } from 'react';

export default function PlatformCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  const platforms = [
    'Spotify',
    'Apple Music',
    'YouTube Music',
    'Amazon Music',
    'Deezer',
    'Tidal',
    'SoundCloud',
    'Pandora',
    'Gaana',
    'JioSaavn',
    'Wynk Music',
    'Hungama',
    'Anghami',
    'Boomplay',
    'iHeartRadio',
    'TikTok',
    'Instagram',
    'Facebook',
    'Twitter',
    'Snapchat',
    'YouTube',
  ];

  // Duplicate for seamless loop
  const duplicatedPlatforms = [...platforms, ...platforms];

  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-[#0A0A0A] to-transparent">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-label text-[#D32F2F] text-sm mb-4 block">Distribution Partners</span>
          <h2 className="text-display text-4xl md:text-5xl text-white mb-4">
            Your Music on <span className="text-[#D32F2F]">Every Platform</span>
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Automatically distribute to 150+ streaming services, digital stores, and social media
            platforms worldwide.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className={`flex space-x-12 ${!isPaused ? 'animate-scroll' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ width: 'fit-content' }}
          >
            {duplicatedPlatforms.map((platform, index) => (
              <div
                key={`${platform}-${index}`}
                className="flex-shrink-0 w-48 h-24 glass rounded-xl flex items-center justify-center p-6 hover:border-[#D32F2F]/50 transition-all duration-300 hover:scale-110"
              >
                <span className="text-white font-semibold text-center">{platform}</span>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
