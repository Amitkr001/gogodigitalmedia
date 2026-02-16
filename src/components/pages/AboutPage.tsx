import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import { Target, Heart, Zap, Users, Award, Clock, Globe, Shield, Lightbulb, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Democratize music distribution so every artist, regardless of background or resources, can reach a global audience.',
    },
    {
      icon: Heart,
      title: 'Artist First',
      description: 'Every decision we make starts with one question: How does this benefit independent artists?',
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'No hidden fees, no confusing contracts. We believe in honest, straightforward business.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving our platform with cutting-edge technology to give artists the best tools.',
    },
    {
      icon: Handshake,
      title: 'Fair Deals',
      description: '100% rights retention for artists. Your music is yours, and we respect that completely.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Built to serve artists from every corner of the world with localized support and platform reach.',
    },
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'GOGO Digital Media was founded by Pawan Kushwaha with a vision to democratize music distribution.' },
    { year: '2021', title: '1,000 Artists', description: 'Reached our first milestone of 1,000 active artists on the platform.' },
    { year: '2022', title: '100+ Platforms', description: 'Expanded distribution to over 100 streaming platforms globally.' },
    { year: '2023', title: '10,000 Artists', description: 'Hit 10,000 active artists and distributed over 50,000 tracks.' },
    { year: '2024', title: '150+ Platforms', description: 'Now distributing to 150+ platforms across 180 countries with continued growth.' },
  ];

  const team = [
    { name: 'Pawan Kushwaha', role: 'Founder & CEO', initials: 'PK' },
    { name: 'Anika Sharma', role: 'Head of Distribution', initials: 'AS' },
    { name: 'Raj Patel', role: 'CTO', initials: 'RP' },
    { name: 'Maya Singh', role: 'Head of Artist Relations', initials: 'MS' },
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
                About Us
              </span>
              <h1 className="text-display text-6xl md:text-7xl lg:text-8xl text-white leading-tight max-w-5xl mx-auto">
                Built by Artists, <span className="text-[#D32F2F]">For Artists</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
                GOGO Digital Media was born from a simple mission: give independent artists the same distribution power as major labels.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-label text-[#D32F2F] text-sm">Our Story</span>
                <h2 className="text-display text-5xl md:text-6xl text-white leading-tight">
                  The Journey of <span className="text-[#D32F2F]">GOGO</span>
                </h2>
                <p className="text-xl text-[#A0A0A0] leading-relaxed">
                  Founded by <span className="text-white font-semibold">Pawan Kushwaha</span>, GOGO
                  Digital Media was born from firsthand experience with the challenges independent artists face
                  in getting their music heard globally.
                </p>
                <p className="text-lg text-[#A0A0A0] leading-relaxed">
                  We believe every artist deserves to be heard globally. That's why we've built a
                  platform that's transparent, affordable, and powerful — helping you reach millions of
                  listeners while keeping complete control of your music and rights.
                </p>
                <p className="text-lg text-[#A0A0A0] leading-relaxed">
                  Today, with over 10,000 artists and 50,000+ distributed tracks across 150+ platforms in 180 countries,
                  we're proud to be one of the most trusted independent music distribution platforms.
                </p>
              </div>

              {/* Founder Card */}
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
                    independent artists to get their music heard. We're here to change that — to give
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
        </section>

        {/* Values */}
        <section className="py-32 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="text-label text-[#D32F2F] text-sm mb-4 block">Our Values</span>
              <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
                What We <span className="text-[#D32F2F]">Stand For</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="glass p-8 rounded-2xl hover:border-[#D32F2F]/50 transition-all duration-300 group hover:scale-105">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D32F2F]/20 to-[#D32F2F]/5 flex items-center justify-center mb-6 group-hover:glow-red transition-all duration-300">
                      <Icon className="text-[#D32F2F]" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-[#A0A0A0] leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* Timeline */}
        <section className="py-32 relative">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="text-label text-[#D32F2F] text-sm mb-4 block">Our Journey</span>
              <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
                Key <span className="text-[#D32F2F]">Milestones</span>
              </h2>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-20">
                    <span className="text-mono text-xl font-bold text-[#D32F2F]">{milestone.year}</span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#D32F2F] border-4 border-[#0A0A0A] group-hover:scale-125 transition-transform" />
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-[#D32F2F]/50 to-transparent" />
                    )}
                  </div>
                  <div className="glass p-6 rounded-xl flex-1 hover:border-[#D32F2F]/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-32 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="text-label text-[#D32F2F] text-sm mb-4 block">Our Team</span>
              <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
                The People Behind <span className="text-[#D32F2F]">GOGO</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass p-8 rounded-2xl text-center hover:border-[#D32F2F]/50 transition-all duration-300 hover:scale-105">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] mx-auto flex items-center justify-center text-3xl font-bold text-white mb-6">
                    {member.initials}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-[#D32F2F] text-sm font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
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
                  Join the GOGO <span className="text-[#D32F2F]">Family</span>
                </h2>
                <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
                  Be part of a community that believes in the power of independent music.
                </p>
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-10 py-6 text-lg rounded-lg animate-pulse-glow transition-all duration-200 hover:scale-105 group">
                  Get Started Today
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
