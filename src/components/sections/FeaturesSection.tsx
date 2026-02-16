import { Music, Shield, TrendingUp, BarChart3, Lock, Megaphone } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Music,
      title: 'Audio & Video Chain Management',
      description:
        'Complete control over your audio and video distribution pipeline with automated workflows and quality checks.',
    },
    {
      icon: TrendingUp,
      title: 'Global Music Distribution',
      description:
        'Reach every major streaming platform worldwide including Spotify, Apple Music, Amazon Music, and 150+ more.',
    },
    {
      icon: Shield,
      title: 'Advanced Rights Management',
      description:
        'Keep 100% of your rights with sophisticated copyright protection and transparent licensing agreements.',
    },
    {
      icon: BarChart3,
      title: 'Royalty Tracking & Analytics',
      description:
        'Real-time earnings dashboard with detailed analytics showing exactly where your audience comes from.',
    },
    {
      icon: Lock,
      title: 'Copyright Protection',
      description:
        'Automated content ID registration and monitoring to protect your music across all platforms.',
    },
    {
      icon: Megaphone,
      title: 'Marketing & Promotion Tools',
      description:
        'Built-in promotional tools including playlist pitching, social media integration, and fan engagement features.',
    },
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-label text-[#D32F2F] text-sm mb-4 block">All-in-One Platform</span>
          <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
            Everything You Need to{' '}
            <span className="text-[#D32F2F]">Succeed</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Professional-grade tools designed for independent artists who want complete control
            over their music career.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover:border-[#D32F2F]/50 transition-all duration-300 group hover:scale-105 hover:glow-red-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D32F2F]/20 to-[#D32F2F]/5 flex items-center justify-center mb-6 group-hover:glow-red transition-all duration-300">
                  <Icon className="text-[#D32F2F]" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#A0A0A0] leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
