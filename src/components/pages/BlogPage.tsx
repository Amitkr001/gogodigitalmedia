import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import { Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  const featuredPost = {
    title: 'The Complete Guide to Music Distribution in 2024',
    excerpt:
      'Everything you need to know about getting your music on every platform, from submission to optimization. Learn the strategies top independent artists use to maximize their reach.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    date: 'Jan 20, 2024',
    category: 'Distribution Guide',
    author: 'GOGO Team',
    readTime: '12 min read',
  };

  const posts = [
    {
      title: 'How to Get Your Music on Spotify Playlists in 2024',
      excerpt:
        'A step-by-step guide to pitching your tracks to Spotify editorial playlists and growing your streams organically.',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&q=80',
      date: 'Jan 15, 2024',
      category: 'Distribution Tips',
      readTime: '8 min read',
    },
    {
      title: 'Understanding Music Royalties: A Complete Guide',
      excerpt:
        'Learn about mechanical royalties, performance royalties, sync fees, and how to maximize your earnings as an artist.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80',
      date: 'Jan 8, 2024',
      category: 'Industry Knowledge',
      readTime: '10 min read',
    },
    {
      title: 'TikTok Music Marketing: Go Viral with Your Sound',
      excerpt:
        'Proven strategies for getting your music trending on TikTok and converting viral moments into lasting fans.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80',
      date: 'Dec 28, 2023',
      category: 'Marketing',
      readTime: '6 min read',
    },
    {
      title: 'Building Your Brand as an Independent Artist',
      excerpt:
        'Create a memorable artist brand that resonates with fans and sets you apart in a crowded music landscape.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
      date: 'Dec 20, 2023',
      category: 'Branding',
      readTime: '7 min read',
    },
    {
      title: 'Maximizing Revenue from Music Streaming',
      excerpt:
        'Advanced strategies to increase your per-stream revenue and build multiple income streams from your music.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
      date: 'Dec 15, 2023',
      category: 'Revenue',
      readTime: '9 min read',
    },
    {
      title: 'The Rise of AI in Music Production',
      excerpt:
        'How artificial intelligence is changing the way music is created, mastered, and distributed in the modern era.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
      date: 'Dec 10, 2023',
      category: 'Technology',
      readTime: '11 min read',
    },
    {
      title: 'Social Media Strategies for Musicians',
      excerpt:
        'Master Instagram, TikTok, YouTube, and Twitter to build a loyal fanbase and promote your releases effectively.',
      image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&q=80',
      date: 'Dec 5, 2023',
      category: 'Social Media',
      readTime: '8 min read',
    },
    {
      title: 'How to Prepare Your Music for Distribution',
      excerpt:
        'From mastering to metadata, learn everything you need to prepare before distributing your music to streaming platforms.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
      date: 'Nov 28, 2023',
      category: 'Distribution Tips',
      readTime: '6 min read',
    },
    {
      title: 'Understanding Streaming Analytics',
      excerpt:
        'Learn how to read and interpret your streaming data to make better decisions about your music career.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      date: 'Nov 20, 2023',
      category: 'Analytics',
      readTime: '7 min read',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A]">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-40 pb-16 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center space-y-8">
              <span className="text-label text-[#D32F2F] text-sm px-4 py-2 glass rounded-full inline-block">
                Latest Insights
              </span>
              <h1 className="text-display text-6xl md:text-7xl lg:text-8xl text-white leading-tight max-w-5xl mx-auto">
                GOGO <span className="text-[#D32F2F]">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
                Tips, guides, and industry insights to help you grow your music career.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="glass rounded-3xl overflow-hidden hover:border-[#D32F2F]/50 transition-all duration-300 group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D32F2F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#A0A0A0]">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={14} className="text-[#D32F2F]" />
                    <span className="text-[#D32F2F] text-sm font-semibold">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#D32F2F] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#A0A0A0] leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-[#D32F2F] font-semibold group-hover:gap-2 transition-all">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-32 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-display text-4xl md:text-5xl text-white">
                All <span className="text-[#D32F2F]">Articles</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="flex items-center gap-4 mb-3 text-sm text-[#A0A0A0]">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
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

            {/* Load More */}
            <div className="text-center mt-16">
              <Button variant="outline" className="glass border-[#D32F2F]/30 text-white px-10 py-6 text-lg rounded-lg hover:border-[#D32F2F] transition-all duration-200">
                Load More Articles
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-3xl -z-10" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
