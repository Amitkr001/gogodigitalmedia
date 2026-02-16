import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'How long does it take to distribute my music?',
      answer:
        'Your music typically goes live within 24-48 hours on most platforms. Some stores like Spotify and Apple Music can take up to 7 days for first-time releases, but subsequent releases are much faster. We recommend uploading at least 2 weeks before your release date to ensure everything is ready on time.',
    },
    {
      question: 'Do I keep 100% of my rights?',
      answer:
        'Yes, absolutely! You retain 100% ownership of your music and master recordings. GOGO Digital Media only acts as a distribution service - we never claim any rights to your music. You can remove your music from our platform at any time, and we have no long-term contracts that lock you in.',
    },
    {
      question: 'Which platforms do you distribute to?',
      answer:
        'We distribute to 150+ platforms globally including all major services: Spotify, Apple Music, Amazon Music, YouTube Music, Tidal, Deezer, Pandora, and many more. We also reach regional platforms like Gaana, JioSaavn (India), Anghami (Middle East), Boomplay (Africa), and NetEase Cloud Music (China).',
    },
    {
      question: 'How do royalty payments work?',
      answer:
        'Royalties are collected from streaming platforms monthly and paid out to you within 60 days of collection. We provide a detailed dashboard showing your earnings by platform, track, and territory. There are no hidden fees - you receive 100% of your earnings minus our transparent distribution fee.',
    },
    {
      question: 'Can I upload cover songs?',
      answer:
        'Yes! We handle mechanical licensing for cover songs through our partnerships with licensing agencies. You can upload covers and we\'ll ensure all proper licenses are obtained and royalties are paid to the original songwriters. Additional licensing fees may apply depending on the territory.',
    },
    {
      question: 'What file formats do you accept?',
      answer:
        'We accept WAV and FLAC files for audio (16-bit/44.1kHz minimum, 24-bit/96kHz recommended for best quality). For artwork, we require JPG or PNG files at minimum 3000x3000 pixels. For video content, we accept MP4, MOV, and AVI in HD or 4K resolution.',
    },
    {
      question: 'Do you offer marketing support?',
      answer:
        'Yes! All plans include access to our marketing toolkit with playlist pitching, social media integration, pre-save campaign tools, and promotional landing pages. Premium plans include dedicated marketing support, priority playlist consideration, and assistance with press releases.',
    },
    {
      question: 'Can I distribute to TikTok and Instagram?',
      answer:
        'Absolutely! We automatically submit your music to TikTok, Instagram, Facebook, and other social media platforms so creators can use your tracks in their content. This is one of the best ways to grow your fanbase organically through viral content.',
    },
  ];

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-label text-[#D32F2F] text-sm mb-4 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
            Got <span className="text-[#D32F2F]">Questions?</span>
          </h2>
          <p className="text-xl text-[#A0A0A0]">
            Everything you need to know about distributing your music with GOGO Digital Media.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass rounded-xl px-8 border-[#D32F2F]/20 hover:border-[#D32F2F]/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg text-white hover:text-[#D32F2F] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#A0A0A0] leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
