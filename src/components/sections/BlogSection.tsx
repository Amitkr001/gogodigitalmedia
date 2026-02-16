import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const posts = [
    {
      title: 'How to Get Your Music on Spotify Playlists in 2024',
      excerpt:
        'A step-by-step guide to pitching your tracks to Spotify editorial playlists and growing your streams organically.',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&q=80',
      date: 'Jan 15, 2024',
      category: 'Distribution Tips',
    },
    {
      title: 'Understanding Music Royalties: A Complete Guide',
      excerpt:
        'Learn about mechanical royalties, performance royalties, sync fees, and how to maximize your earnings as an artist.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80',
      date: 'Jan 8, 2024',
      category: 'Industry Knowledge',
    },
    {
      title: 'TikTok Music Marketing: Go Viral with Your Sound',
      excerpt:
        'Proven strategies for getting your music trending on TikTok and converting viral moments into lasting fans.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80',
      date: 'Dec 28, 2023',
      category: 'Marketing',
    },
  ];

  return (
    <section id="blog" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-label text-[#D32F2F] text-sm mb-4 block">Latest Insights</span>
          <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
            From Our <span className="text-[#D32F2F]">Blog</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Tips, guides, and industry insights to help you grow your music career.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="glass rounded-2xl overflow-hidden hover:border-[#D32F2F]/50 transition-all duration-300 group hover:scale-[1.02] cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D32F2F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-[#A0A0A0]">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D32F2F] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[#D32F2F] text-sm font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
