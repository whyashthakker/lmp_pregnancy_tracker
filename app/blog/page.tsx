import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, Heart, Baby, Sparkles, Stethoscope, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pregnancy Blog - Tips, Guides & Insights',
  description: 'Expert pregnancy advice, weekly development guides, nutrition tips, and helpful resources for expecting mothers.',
  keywords: 'pregnancy blog, pregnancy tips, baby development, prenatal care, pregnancy nutrition, expecting mothers',
};

const blogPosts = [
  {
    slug: 'complete-newborn-care-guide',
    title: 'Complete Newborn Care Guide: Essential Tips for New Parents',
    excerpt: 'Comprehensive newborn care guide covering feeding, sleeping, bathing, diaper changing, safety tips, and essential care practices for the first weeks of your baby&apos;s life.',
    date: '2025-10-22',
    readTime: '40 min read',
    category: 'Baby Care',
    icon: Baby
  },
  {
    slug: 'baby-jaundice-prevention-treatment',
    title: 'Baby Jaundice: Prevention, Peak Times & Treatment Guide',
    excerpt: 'Complete guide to baby jaundice including prevention strategies, when it peaks, warning signs, and effective treatment options. Learn how to manage newborn jaundice safely.',
    date: '2025-10-22',
    readTime: '30 min read',
    category: 'Baby Health',
    icon: Shield
  },
  {
    slug: 'first-year-baby-development-guide',
    title: 'First Year Baby Development Guide: Complete 0-12 Month Milestones',
    excerpt: 'Comprehensive guide to your baby&apos;s first year development. Month-by-month milestones, growth patterns, feeding changes, and key developmental achievements from 0-12 months.',
    date: '2025-10-22',
    readTime: '35 min read',
    category: 'Baby Development',
    icon: Baby
  },
  {
    slug: 'third-month-baby-development',
    title: 'Third Month Baby Development Guide: 8-12 Weeks Growth & Milestones',
    excerpt: 'Complete guide to your 3-month-old baby&apos;s development. Learn about hand discovery, improved sleep, rolling preparation, and key milestones for 8-12 week old babies.',
    date: '2025-10-22',
    readTime: '25 min read',
    category: 'Baby Development',
    icon: Baby
  },
  {
    slug: 'second-month-baby-development',
    title: 'Second Month Baby Development Guide: 4-8 Weeks Growth & Milestones',
    excerpt: 'Complete guide to your 2-month-old baby&apos;s development. Learn about social smiles, head control, feeding patterns, sleep improvements, and key milestones for 4-8 week old babies.',
    date: '2025-10-22',
    readTime: '23 min read',
    category: 'Baby Development',
    icon: Baby
  },
  {
    slug: 'first-month-newborn-guide',
    title: 'First Month Newborn Guide: Complete Development & Care Tips',
    excerpt: 'Comprehensive guide to your baby&apos;s first month of life. Learn about major milestones, feeding patterns, sleep development, and essential care tips for 0-4 week old newborns.',
    date: '2025-10-22',
    readTime: '28 min read',
    category: 'Baby Development',
    icon: Baby
  },
  {
    slug: 'newborn-fourth-week-guide',
    title: 'Newborn Fourth Week Guide: First Social Smiles & Development',
    excerpt: 'Complete guide to your baby&apos;s fourth week of life. Learn about first social smiles, improved head control, feeding patterns, and important developmental milestones for 3-4 week old newborns.',
    date: '2025-10-22',
    readTime: '20 min read',
    category: 'Baby Development',
    icon: Baby
  },
  {
    slug: 'newborn-third-week-guide',
    title: 'Newborn Third Week Guide: Development, Feeding & Care Tips',
    excerpt: 'Complete guide to your baby&apos;s third week of life. Learn about developmental milestones, feeding patterns, sleep changes, and important care tips for 2-3 week old newborns.',
    date: '2025-10-22',
    readTime: '18 min read',
    category: 'Baby Development',
    icon: Baby
  },
  {
    slug: 'newborn-second-week-guide',
    title: 'Newborn Second Week Guide: Development, Growth & Milestones',
    excerpt: 'Complete guide to your baby&apos;s second week of life. Learn about important developmental milestones, feeding patterns, sleep changes, and care tips for 1-2 week old newborns.',
    date: '2025-10-22',
    readTime: '17 min read',
    category: 'Baby Development',
    icon: Baby
  },
  {
    slug: 'newborn-first-week-guide',
    title: 'Newborn First Week Guide: Feeding, Sleep & Development',
    excerpt: 'Complete guide to your baby&apos;s first week of life. Learn about feeding patterns, diaper output, sleep schedules, and important developmental milestones for newborn care.',
    date: '2025-10-22',
    readTime: '25 min read',
    category: 'Baby Development',
    icon: Baby
  },
  {
    slug: 'newborn-vaccinations-guide',
    title: 'Newborn Vaccinations Guide: Essential Immunizations & Schedule',
    excerpt: 'Complete guide to newborn and infant vaccinations including recommended schedule, vaccine types, side effects, and importance of immunizations for baby health.',
    date: '2025-10-22',
    readTime: '22 min read',
    category: 'Baby Health',
    icon: Shield
  },
  {
    slug: 'labor-induction-guide',
    title: 'Labor Induction Guide: Methods, Reasons & What to Expect',
    excerpt: 'Complete guide to labor induction including medical reasons, induction methods, success rates, risks, and what to expect during the process. Make informed decisions about induced labor.',
    date: '2025-10-22',
    readTime: '20 min read',
    category: 'Birth & Delivery',
    icon: Stethoscope
  },
  {
    slug: 'stages-of-pre-labor',
    title: 'Stages of Pre-Labor: Early Signs, Symptoms & What to Expect',
    excerpt: 'Complete guide to pre-labor stages including early labor signs, prodromal labor, and how to distinguish true labor from false labor. Know when to head to the hospital.',
    date: '2025-10-22',
    readTime: '17 min read',
    category: 'Birth & Delivery',
    icon: Clock
  },
  {
    slug: 'delivery-methods-comparison',
    title: 'Cesarean vs Normal vs Vacuum Delivery: Complete Comparison Guide',
    excerpt: 'Comprehensive comparison of cesarean section, normal vaginal delivery, and vacuum-assisted delivery. Learn about indications, benefits, risks, recovery times, and what to expect.',
    date: '2025-10-22',
    readTime: '18 min read',
    category: 'Birth & Delivery',
    icon: Baby
  },
  {
    slug: 'umbilical-cord-around-neck',
    title: 'Umbilical Cord Around Baby\'s Neck: Causes, Risks & What to Expect',
    excerpt: 'Complete guide to umbilical cord complications including nuchal cord. Learn about causes, risks, detection methods, and delivery options when cord is around baby\'s neck.',
    date: '2025-10-22',
    readTime: '16 min read',
    category: 'Complications',
    icon: Heart
  },
  {
    slug: 'pregnancy-terms-guide',
    title: 'Essential Pregnancy Terms Guide: Full-Term, Early, Late & More',
    excerpt: 'Complete guide to essential pregnancy terminology including full-term, early term, late term, post-term, preterm, and viability. Understand when your baby is considered ready for birth.',
    date: '2025-10-03',
    readTime: '15 min read',
    category: 'Education',
    icon: Sparkles
  },
  {
    slug: 'pregnancy-symptoms-week-by-week',
    title: 'Pregnancy Symptoms Week by Week: Complete Guide',
    excerpt: 'Comprehensive guide to pregnancy symptoms week by week. Track normal symptoms, warning signs, and what to expect during each trimester.',
    date: '2025-09-19',
    readTime: '12 min read',
    category: 'Symptoms',
    icon: Heart
  },
  {
    slug: 'pregnancy-medical-checkups',
    title: 'Pregnancy Medical Checkups and Prenatal Care Schedule',
    excerpt: 'Complete guide to pregnancy medical checkups, prenatal appointments, tests, and what to expect at each visit throughout your pregnancy.',
    date: '2025-09-18',
    readTime: '10 min read',
    category: 'Medical Care',
    icon: Calendar
  },
  {
    slug: 'pregnancy-warning-signs',
    title: 'Pregnancy Warning Signs: When to Call Your Doctor',
    excerpt: 'Learn the important pregnancy warning signs that require immediate medical attention. Know when to contact your healthcare provider during pregnancy.',
    date: '2025-09-17',
    readTime: '8 min read',
    category: 'Health & Safety',
    icon: Heart
  },
  {
    slug: 'pregnancy-weight-gain-calculator',
    title: 'Pregnancy Weight Gain Calculator: Track Your Healthy Progress',
    excerpt: 'Track your pregnancy weight gain and ensure you&apos;re maintaining a healthy range based on your pre-pregnancy BMI and current week of pregnancy.',
    date: '2025-09-16',
    readTime: '6 min read',
    category: 'Health & Fitness',
    icon: Sparkles
  },
  {
    slug: 'pregnancy-exercise-guide',
    title: 'Pregnancy Exercise Guide: Safe Workouts for Every Trimester',
    excerpt: 'Safe and effective exercise routines for pregnant women. Learn which exercises are best for each trimester and how to stay active safely.',
    date: '2025-09-15',
    readTime: '9 min read',
    category: 'Health & Fitness',
    icon: Heart
  },
  {
    slug: 'pregnancy-sleep-tips',
    title: 'Pregnancy Sleep Tips and Safe Positions',
    excerpt: 'Get better sleep during pregnancy with our comprehensive guide on safe sleeping positions, common sleep problems, and practical solutions.',
    date: '2025-09-14',
    readTime: '7 min read',
    category: 'Health & Wellness',
    icon: Baby
  },
  {
    slug: 'pregnancy-myths-vs-facts',
    title: 'Pregnancy Myths vs Facts: What to Really Believe',
    excerpt: 'Separate pregnancy myths from facts with evidence-based information. Get the truth about common pregnancy beliefs and old wives tales.',
    date: '2025-09-13',
    readTime: '8 min read',
    category: 'Education',
    icon: Sparkles
  },
  {
    slug: 'pregnancy-guide-for-fathers',
    title: 'Complete Pregnancy Guide for Fathers & Partners',
    excerpt: 'Essential guide for expectant fathers and partners. Learn how to support your pregnant partner, prepare for fatherhood, and understand pregnancy from a partner perspective.',
    date: '2025-09-12',
    readTime: '11 min read',
    category: 'For Partners',
    icon: Heart
  },
  {
    slug: 'how-partners-can-help-during-labor',
    title: 'How Partners Can Help During Labor and Delivery',
    excerpt: 'Practical ways for partners to provide support during labor and delivery. Learn about comfort measures, advocacy, and emotional support techniques.',
    date: '2025-09-11',
    readTime: '9 min read',
    category: 'For Partners',
    icon: Baby
  },
  {
    slug: 'pregnancy-due-date-calculator',
    title: 'Pregnancy Due Date Calculator: Accurate Delivery Date Prediction',
    excerpt: 'Calculate your pregnancy due date with our accurate due date calculator. Learn about LMP method, ultrasound dating, and factors affecting delivery timing.',
    date: '2025-09-10',
    readTime: '10 min read',
    category: 'Calculator',
    icon: Calendar
  },
  {
    slug: 'gestational-diabetes-guide',
    title: 'Gestational Diabetes Guide: Prevention, Management & Treatment',
    excerpt: 'Comprehensive guide to gestational diabetes including risk factors, prevention strategies, management during pregnancy, and long-term health considerations.',
    date: '2025-09-09',
    readTime: '12 min read',
    category: 'Health Conditions',
    icon: Heart
  },
  {
    slug: 'common-pregnancy-questions-answered',
    title: 'Common Pregnancy Questions Answered by Experts',
    excerpt: 'Get answers to the most frequently asked pregnancy questions from healthcare professionals. Clear, evidence-based information for expecting mothers.',
    date: '2025-09-08',
    readTime: '10 min read',
    category: 'Q&A',
    icon: Sparkles
  },
  {
    slug: 'third-trimester-symptoms',
    title: 'Third Trimester Symptoms: Complete Guide to Weeks 28-40',
    excerpt: 'Comprehensive guide to third trimester pregnancy symptoms including sleep issues, breathing problems, and signs of labor.',
    date: '2025-09-07',
    readTime: '14 min read',
    category: 'Late Pregnancy',
    icon: Baby
  },
  {
    slug: 'first-trimester-guide',
    title: 'Your First Trimester: What to Expect',
    excerpt: 'A comprehensive guide to navigating the first 12 weeks of pregnancy, from early symptoms to important milestones.',
    date: '2025-09-06',
    readTime: '8 min read',
    category: 'Guides',
    icon: Baby
  },
  {
    slug: 'pregnancy-nutrition-essentials',
    title: 'Pregnancy Nutrition: Essential Foods for Every Trimester',
    excerpt: 'Discover the key nutrients you and your baby need during each stage of pregnancy, plus meal planning tips.',
    date: '2025-09-05',
    readTime: '6 min read',
    category: 'Nutrition',
    icon: Heart
  },
  {
    slug: 'ivf-vs-iui-vs-natural-conception',
    title: 'IVF vs IUI vs Natural Conception: Understanding Your Options',
    excerpt: 'Compare different conception methods including IVF, IUI, and natural conception. Learn about success rates, costs, and what to expect from each approach.',
    date: '2025-09-04',
    readTime: '11 min read',
    category: 'Fertility',
    icon: Sparkles
  },
  {
    slug: 'fathers-pregnancy-timeline-tests',
    title: 'Father&apos;s Pregnancy Timeline: Tests, Milestones & Support Guide',
    excerpt: 'A comprehensive timeline for expectant fathers covering important tests, milestones, and ways to support your partner throughout the pregnancy journey.',
    date: '2025-09-03',
    readTime: '13 min read',
    category: 'For Partners',
    icon: Heart
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
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