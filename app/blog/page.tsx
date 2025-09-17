import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, Heart, Baby, Sparkles } from 'lucide-react';
import { Navigation } from '@/components/ui/navigation';

export const metadata: Metadata = {
  title: 'Pregnancy Blog - Tips, Guides & Insights',
  description: 'Expert pregnancy advice, weekly development guides, nutrition tips, and helpful resources for expecting mothers.',
  keywords: 'pregnancy blog, pregnancy tips, baby development, prenatal care, pregnancy nutrition, expecting mothers',
};

const blogPosts = [
  {
    slug: 'first-trimester-guide',
    title: 'Your First Trimester: What to Expect',
    excerpt: 'A comprehensive guide to navigating the first 12 weeks of pregnancy, from early symptoms to important milestones.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Guides',
    icon: Baby
  },
  {
    slug: 'pregnancy-nutrition-essentials',
    title: 'Pregnancy Nutrition: Essential Foods for Every Trimester',
    excerpt: 'Discover the key nutrients you and your baby need during each stage of pregnancy, plus meal planning tips.',
    date: '2024-01-12',
    readTime: '6 min read',
    category: 'Nutrition',
    icon: Heart
  },
  {
    slug: 'partner-support-guide',
    title: 'How Partners Can Support During Pregnancy',
    excerpt: 'Practical tips for partners to provide emotional and physical support throughout the pregnancy journey.',
    date: '2024-01-10',
    readTime: '5 min read',
    category: 'Relationships',
    icon: Sparkles
  },
  {
    slug: 'managing-pregnancy-symptoms',
    title: 'Managing Common Pregnancy Symptoms Naturally',
    excerpt: 'Safe, natural ways to cope with morning sickness, fatigue, and other common pregnancy discomforts.',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Health',
    icon: Heart
  },
  {
    slug: 'second-trimester-changes',
    title: 'Second Trimester: The Golden Period of Pregnancy',
    excerpt: 'Why weeks 13-27 are often considered the best time of pregnancy and what changes to expect.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Guides',
    icon: Baby
  },
  {
    slug: 'preparing-for-birth',
    title: 'Third Trimester: Preparing for Birth',
    excerpt: 'Essential preparations for the final stretch of pregnancy and welcoming your baby.',
    date: '2024-01-01',
    readTime: '9 min read',
    category: 'Birth Prep',
    icon: Sparkles
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            Pregnancy Insights & Guides
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Expert advice, helpful tips, and comprehensive guides to support 
            you through every stage of your pregnancy journey.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (() => {
          const FeaturedIcon = blogPosts[0].icon;
          return (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Featured Article</h2>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="group block"
              >
                <article className="bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-100/80 hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                  <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100">
                            <FeaturedIcon className="w-6 h-6 text-pink-600" />
                          </div>
                          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">
                            {blogPosts[0].category} • Featured
                          </span>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                          {blogPosts[0].title}
                        </h2>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                          {blogPosts[0].excerpt}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-pink-600 font-semibold">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      <div className="lg:col-span-4 flex justify-center">
                        <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center">
                          <FeaturedIcon className="w-16 h-16 lg:w-24 lg:h-24 text-pink-500 opacity-80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          );
        })()}

        {/* More Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => {
              const IconComponent = post.icon;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="h-full bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100/80 hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100">
                          <IconComponent className="w-5 h-5 text-pink-600" />
                        </div>
                        <span className="text-xs font-semibold text-pink-600 uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-pink-600 font-medium text-sm">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-3xl p-8 lg:p-12 text-center border border-pink-100/40">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get weekly pregnancy tips, development updates, and helpful resources 
              delivered straight to your inbox. Join our community of expecting families!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-pink-200/60 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300/60 focus:border-pink-400/60 text-gray-700 placeholder-gray-500"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all font-semibold shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}