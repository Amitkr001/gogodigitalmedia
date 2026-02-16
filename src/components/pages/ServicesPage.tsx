import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import { Music, Shield, TrendingUp, BarChart3, Lock, Megaphone, Headphones, Video, Radio, Globe, Mic2, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Music,
      title: 'Audio & Video Chain Management',
      description:
        'Complete control over your audio and video distribution pipeline with automated workflows and quality checks.',
      details: ['Automated quality control', 'Format conversion', 'Metadata management', 'Multi-format delivery'],
    },
    {
      icon: TrendingUp,
      title: 'Global Music Distribution',
      description:
        'Reach every major streaming platform worldwide including Spotify, Apple Music, Amazon Music, and 150+ more.',
      details: ['150+ platforms', '24-48hr delivery', 'Worldwide reach', 'Automatic updates'],
    },
    {
      icon: Shield,
      title: 'Advanced Rights Management',
      description:
        'Keep 100% of your rights with sophisticated copyright protection and transparent licensing agreements.',
      details: ['Full rights retention', 'Licensing tools', 'Contract management', 'Rights tracking'],
    },
    {
      icon: BarChart3,
      title: 'Royalty Tracking & Analytics',
      description:
        'Real-time earnings dashboard with detailed analytics showing exactly where your audience comes from.',
      details: ['Real-time dashboard', 'Revenue breakdown', 'Audience insights', 'Monthly reports'],
    },
    {
      icon: Lock,
      title: 'Copyright Protection',
      description:
        'Automated content ID registration and monitoring to protect your music across all platforms.',
      details: ['Content ID registration', '24/7 monitoring', 'Takedown assistance', 'Infringement alerts'],
    },
    {
      icon: Megaphone,
      title: 'Marketing & Promotion Tools',
      description:
        'Built-in promotional tools including playlist pitching, social media integration, and fan engagement features.',
      details: ['Playlist pitching', 'Social media tools', 'Pre-save campaigns', 'Fan analytics'],
    },
    {
      icon: Headphones,
      title: 'Mastering & Audio Enhancement',
      description:
        'Professional AI-powered mastering tools to ensure your tracks sound perfect on every platform and device.',
      details: ['AI mastering', 'Loudness optimization', 'Multi-format export', 'A/B comparison'],
    },
    {
      icon: Video,
      title: 'Music Video Distribution',
      description:
        'Distribute your music videos across YouTube, Vevo, Apple Music, and other video platforms seamlessly.',
      details: ['YouTube optimization', 'Vevo delivery', 'Multi-platform sync', 'Video analytics'],
    },
    {
      icon: Radio,
      title: 'Radio & Podcast Submission',
      description:
        'Get your music played on radio stations worldwide and featured on popular music podcasts.',
      details: ['Radio submission', 'Podcast pitching', 'Airplay tracking', 'DJ network access'],
    },
    {
      icon: Globe,
      title: 'International Licensing',
      description:
        'Navigate international music licensing with our expert team handling sync deals and territory-specific requirements.',
      details: ['Sync licensing', 'Territory management', 'Film & TV placement', 'Brand partnerships'],
    },
    {
      icon: Mic2,
      title: 'Artist Development',
      description:
        'Comprehensive artist development programs including branding, social strategy, and career guidance.',
      details: ['Brand building', 'Social strategy', 'Career coaching', 'Network access'],
    },
    {
      icon: Settings,
      title: 'API & Integration',
      description:
        'Full API access for labels and power users who need to integrate our distribution services into their workflows.',
      details: ['REST API access', 'Webhook support', 'Batch uploads', 'Custom integrations'],
    },
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
                Our Services
              </span>
              <h1 className="text-display text-6xl md:text-7xl lg:text-8xl text-white leading-tight max-w-5xl mx-auto">
                Everything You Need to <span className="text-[#D32F2F]">Succeed</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
                Professional-grade tools and services designed for independent artists who want complete control over their music career.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="glass p-8 rounded-2xl hover:border-[#D32F2F]/50 transition-all duration-300 group hover:scale-105 hover:glow-red-soft"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D32F2F]/20 to-[#D32F2F]/5 flex items-center justify-center mb-6 group-hover:glow-red transition-all duration-300">
                      <Icon className="text-[#D32F2F]" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-[#A0A0A0] leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                          <span className="text-[#A0A0A0]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
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
                  Need a Custom <span className="text-[#D32F2F]">Solution?</span>
                </h2>
                <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
                  Contact us for enterprise solutions and custom service packages tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-10 py-6 text-lg rounded-lg animate-pulse-glow transition-all duration-200 hover:scale-105 group">
                    Get Started Free
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button variant="outline" className="glass border-[#D32F2F]/30 text-white px-10 py-6 text-lg rounded-lg hover:border-[#D32F2F] transition-all duration-200">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
