import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import AnimatedBackground from './layout/AnimatedBackground';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import PlatformCarousel from './sections/PlatformCarousel';
import StatsSection from './sections/StatsSection';
import PricingSection from './sections/PricingSection';
import ArtistsSection from './sections/ArtistsSection';
import BlogSection from './sections/BlogSection';
import AboutSection from './sections/AboutSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';

function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A]">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PlatformCarousel />
        <StatsSection />
        <PricingSection />
        <ArtistsSection />
        <BlogSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
