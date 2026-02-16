import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Zap, Music, Globe, DollarSign, Shield, TrendingUp, Upload } from 'lucide-react';

export default function SellMusicPage() {
  const steps = [
    {
      icon: Upload,
      step: '01',
      title: 'Upload Your Music',
      description: 'Upload your tracks in WAV or FLAC format with album artwork. Our system automatically checks quality and format requirements.',
    },
    {
      icon: Globe,
      step: '02',
      title: 'Choose Your Platforms',
      description: 'Select from 150+ streaming platforms worldwide or distribute to all of them at once. Your choice, your control.',
    },
    {
      icon: DollarSign,
      step: '03',
      title: 'Start Earning',
      description: 'Your music goes live within 24-48 hours. Track your streams, earnings, and audience growth in real-time.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      tagline: 'Free Forever',
      description: 'Perfect for new artists getting started',
      features: [
        'Distribute to 150+ platforms',
        'Unlimited releases',
        'Keep 100% of your rights',
        'Basic analytics dashboard',
        'Email support',
        'Social media distribution',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      tagline: 'Most Features',
      description: 'For serious artists ready to scale',
      features: [
        'Everything in Starter',
        'Priority distribution (24hrs)',
        'Advanced analytics & insights',
        'Pre-save campaign tools',
        'Playlist pitching service',
        'Marketing toolkit access',
        'Priority support',
        'Revenue splits management',
      ],
      popular: true,
    },
    {
      name: 'Label',
      tagline: 'Full Power',
      description: 'For labels and serious professionals',
      features: [
        'Everything in Professional',
        'Unlimited artist accounts',
        'White-label distribution',
        'Dedicated account manager',
        'Custom release scheduling',
        'Advanced rights management',
        'API access',
        '24/7 phone support',
      ],
      popular: false,
    },
  ];

  const benefits = [
    { icon: Music, title: '150+ Platforms', desc: 'Reach every major streaming service globally' },
    { icon: Shield, title: '100% Rights', desc: 'You keep full ownership of your music' },
    { icon: TrendingUp, title: 'Real-Time Analytics', desc: 'Track earnings & streams instantly' },
    { icon: DollarSign, title: 'Fast Payouts', desc: 'Get your royalties within 60 days' },
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
                Start Selling Today
              </span>
              <h1 className="text-display text-6xl md:text-7xl lg:text-8xl text-white leading-tight max-w-5xl mx-auto">
                Sell Your Music <span className="text-[#D32F2F]">Everywhere</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
                Upload once, distribute to 150+ platforms. Keep 100% of your rights and earn from every stream worldwide.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-10 py-6 text-lg rounded-lg animate-pulse-glow transition-all duration-200 hover:scale-105 group">
                  Start Distributing Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="text-label text-[#D32F2F] text-sm mb-4 block">How It Works</span>
              <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
                Three Simple <span className="text-[#D32F2F]">Steps</span>
              </h2>
              <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
                Getting your music to the world has never been easier.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="glass p-10 rounded-2xl hover:border-[#D32F2F]/50 transition-all duration-300 group hover:scale-105 relative">
                    <span className="text-mono text-7xl font-bold text-[#D32F2F]/10 absolute top-4 right-6">{step.step}</span>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D32F2F]/20 to-[#D32F2F]/5 flex items-center justify-center mb-8 group-hover:glow-red transition-all duration-300">
                      <Icon className="text-[#D32F2F]" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-[#A0A0A0] leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="glass p-8 rounded-2xl text-center hover:border-[#D32F2F]/50 transition-all duration-300 hover:scale-105">
                    <div className="w-14 h-14 rounded-xl bg-[#D32F2F]/20 flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-[#D32F2F]" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{b.title}</h4>
                    <p className="text-[#A0A0A0] text-sm">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="text-label text-[#D32F2F] text-sm mb-4 block">Our Plans</span>
              <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
                Choose Your <span className="text-[#D32F2F]">Perfect Plan</span>
              </h2>
              <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
                No hidden fees. No surprises. Plans that grow with you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative glass rounded-3xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? 'border-[#D32F2F] glow-red-soft scale-105 md:scale-110'
                      : 'hover:border-[#D32F2F]/50 hover:scale-105'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-[#D32F2F] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Zap size={14} />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-[#A0A0A0] text-sm mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold text-[#D32F2F]">{plan.tagline}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="text-[#D32F2F] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-[#A0A0A0]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 rounded-lg transition-all duration-200 ${
                      plan.popular
                        ? 'bg-[#D32F2F] hover:bg-[#B71C1C] text-white animate-pulse-glow'
                        : 'glass border-[#D32F2F]/30 text-white hover:border-[#D32F2F] hover:bg-[#D32F2F]/10'
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
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
                  Ready to Sell Your Music <span className="text-[#D32F2F]">Worldwide?</span>
                </h2>
                <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
                  Join 10,000+ independent artists already distributing with GOGO Digital Media.
                </p>
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-10 py-6 text-lg rounded-lg animate-pulse-glow transition-all duration-200 hover:scale-105 group">
                  Create Free Account
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
