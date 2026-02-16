import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
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

  return (
    <section id="sell-music" className="py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-label text-[#D32F2F] text-sm mb-4 block">Our Plans</span>
          <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
            Choose Your <span className="text-[#D32F2F]">Perfect Plan</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            No hidden fees. No surprises. Plans that grow with you.
          </p>
        </div>

        {/* Pricing Cards */}
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

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-[#A0A0A0] mb-4">
            All plans include unlimited releases and 100% rights ownership
          </p>
          <p className="text-sm text-[#A0A0A0]">
            Need a custom plan for your organization?{' '}
            <a href="#" className="text-[#D32F2F] hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
