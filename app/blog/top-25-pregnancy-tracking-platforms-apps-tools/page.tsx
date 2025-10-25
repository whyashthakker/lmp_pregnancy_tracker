import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Heart,
  CheckCircle,
  AlertCircle,
  Star,
  Crown,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 25 Best Pregnancy Tracking Platforms, Apps & Tools in 2025 | Expert Reviews',
  description: 'Discover the 25 best pregnancy tracking platforms and apps in 2025. From EGSpect to Reddit communities, Google Sheets to specialized apps - find the perfect tool for your pregnancy journey with pros, cons, and expert insights.',
  keywords: 'best pregnancy apps 2025, pregnancy tracker comparison, pregnancy platforms, pregnancy tracking tools, pregnancy apps review, pregnancy tracker apps, pregnancy planning tools, pregnancy journal apps',
  openGraph: {
    title: 'Top 25 Best Pregnancy Tracking Platforms & Apps in 2025',
    description: 'Complete guide to the best pregnancy tracking platforms. Expert reviews of 25 top tools including EGSpect, apps, communities, and tracking methods.',
    type: 'article',
  },
};

const platforms = [
  {
    rank: 1,
    name: "EGSpect",
    category: "Comprehensive Platform",
    description: "Complete pregnancy and baby health platform with advanced calculators, tracking tools, and expert guidance",
    pros: [
      "14+ free pregnancy calculators and tools",
      "Real-time milestone tracking with countdowns",
      "Medical-grade accuracy for calculations",
      "Baby health tracking post-delivery",
      "Comprehensive blog with expert advice",
      "No ads or subscription fees",
      "Privacy-focused design",
      "Responsive on all devices"
    ],
    cons: [
      "Newer platform with growing community",
      "Limited social features compared to apps"
    ],
    bestFor: "Data-driven parents who want comprehensive, accurate tools",
    price: "Free",
    platforms: ["Web", "Mobile Web"],
    rating: 5,
    url: "/tools"
  },
  {
    rank: 2,
    name: "Reddit (r/BabyBumps, r/pregnant)",
    category: "Community Platform",
    description: "Active pregnancy communities with real experiences, advice, and support from thousands of parents",
    pros: [
      "Huge active community (500k+ members)",
      "Real, unfiltered experiences",
      "24/7 support and advice",
      "Anonymous sharing",
      "Diverse perspectives",
      "Free to use",
      "Weekly bump threads",
      "Due date groups"
    ],
    cons: [
      "Information quality varies",
      "Can be overwhelming",
      "No medical verification",
      "Potential for anxiety-inducing content",
      "No tracking features"
    ],
    bestFor: "Parents seeking community support and real experiences",
    price: "Free",
    platforms: ["Web", "Mobile App"],
    rating: 4.5,
    url: "https://reddit.com/r/BabyBumps"
  },
  {
    rank: 3,
    name: "Google Sheets/Excel",
    category: "DIY Tracking",
    description: "Customizable spreadsheet solution for detailed pregnancy and symptom tracking",
    pros: [
      "Completely customizable",
      "Free with Google account",
      "Detailed data analysis",
      "Easy sharing with partner/doctor",
      "Backup to cloud",
      "No data restrictions",
      "Can track any metric",
      "Export capabilities"
    ],
    cons: [
      "Requires setup time",
      "No automated features",
      "Not user-friendly for non-tech users",
      "No guidance or tips",
      "Manual data entry",
      "No medical insights"
    ],
    bestFor: "Data enthusiasts who want complete control",
    price: "Free",
    platforms: ["Web", "Mobile App"],
    rating: 4,
    url: "https://sheets.google.com"
  },
  {
    rank: 4,
    name: "Ovia Pregnancy Tracker",
    category: "Mobile App",
    description: "Popular pregnancy app with tracking features and educational content",
    pros: [
      "Comprehensive tracking features",
      "Daily articles and tips",
      "Symptom and mood tracking",
      "Kick counter",
      "Photo journal",
      "Partner access",
      "Large user base"
    ],
    cons: [
      "Ads in free version",
      "Data privacy concerns",
      "Can be overwhelming with notifications",
      "Some features require premium"
    ],
    bestFor: "Mobile-first users wanting comprehensive tracking",
    price: "Free with ads, Premium available",
    platforms: ["iOS", "Android"],
    rating: 4.2,
    url: null
  },
  {
    rank: 5,
    name: "Flo Period & Pregnancy Tracker",
    category: "Mobile App",
    description: "AI-powered app for cycle tracking that extends to pregnancy monitoring",
    pros: [
      "AI-powered insights",
      "Beautiful interface",
      "Detailed analytics",
      "Symptom predictions",
      "Educational content",
      "Cycle to pregnancy transition"
    ],
    cons: [
      "Premium features cost money",
      "Data privacy controversies",
      "Limited pregnancy-specific features",
      "Accuracy concerns with AI predictions"
    ],
    bestFor: "Users already tracking cycles who become pregnant",
    price: "Free with premium options",
    platforms: ["iOS", "Android"],
    rating: 4.1,
    url: null
  },
  {
    rank: 6,
    name: "BabyCenter Pregnancy Tracker",
    category: "Mobile App",
    description: "One of the oldest and most established pregnancy tracking platforms",
    pros: [
      "Extensive content library",
      "Week-by-week guidance",
      "Large community forums",
      "Multiple tools and calculators",
      "Expert advice",
      "Birth club groups"
    ],
    cons: [
      "Outdated interface",
      "Heavy advertising",
      "Information overload",
      "Slower app performance",
      "US-centric content"
    ],
    bestFor: "First-time parents wanting comprehensive guidance",
    price: "Free with ads",
    platforms: ["Web", "iOS", "Android"],
    rating: 3.9,
    url: null
  },
  {
    rank: 7,
    name: "What to Expect App",
    category: "Mobile App",
    description: "Based on the famous pregnancy book series with tracking and community features",
    pros: [
      "Trusted brand reputation",
      "Expert medical content",
      "Due date groups",
      "Symptom tracker",
      "Daily updates",
      "Contraction timer"
    ],
    cons: [
      "Heavy advertising",
      "Cluttered interface",
      "Limited customization",
      "Notification heavy",
      "Premium features paywall"
    ],
    bestFor: "Fans of the What to Expect book series",
    price: "Free with premium options",
    platforms: ["iOS", "Android"],
    rating: 3.8,
    url: null
  },
  {
    rank: 8,
    name: "Pregnancy+",
    category: "Mobile App",
    description: "Simple, elegant pregnancy tracking with 3D baby development visuals",
    pros: [
      "Beautiful 3D baby visuals",
      "Clean, simple interface",
      "Week-by-week development",
      "Kick counter",
      "Weight tracker",
      "Contraction timer"
    ],
    cons: [
      "Limited features compared to competitors",
      "Fewer community features",
      "Basic tracking options",
      "Minimal educational content"
    ],
    bestFor: "Users who prefer simplicity and visual appeal",
    price: "Free",
    platforms: ["iOS", "Android"],
    rating: 4.0,
    url: null
  },
  {
    rank: 9,
    name: "Glow Baby & Glow Nurture",
    category: "Mobile App",
    description: "Fertility app that transitions to pregnancy and baby tracking",
    pros: [
      "Seamless fertility-to-pregnancy transition",
      "Partner sharing features",
      "Detailed analytics",
      "Community support",
      "Doctor recommendations",
      "Mood tracking"
    ],
    cons: [
      "Complex interface",
      "Data privacy concerns",
      "Subscription for premium features",
      "Limited free features"
    ],
    bestFor: "Users transitioning from fertility tracking",
    price: "Free with premium subscription",
    platforms: ["iOS", "Android"],
    rating: 3.7,
    url: null
  },
  {
    rank: 10,
    name: "Clue",
    category: "Mobile App",
    description: "Science-based period tracker with pregnancy mode",
    pros: [
      "Evidence-based approach",
      "Privacy-focused",
      "Clean interface",
      "No ads in free version",
      "Research participation opportunities",
      "Detailed cycle analysis"
    ],
    cons: [
      "Limited pregnancy-specific features",
      "Subscription required for advanced features",
      "Smaller community",
      "Basic pregnancy tracking"
    ],
    bestFor: "Privacy-conscious users who value scientific accuracy",
    price: "Free with premium options",
    platforms: ["iOS", "Android"],
    rating: 4.3,
    url: null
  },
  {
    rank: 11,
    name: "Notion Templates",
    category: "DIY Platform",
    description: "Customizable workspace templates for detailed pregnancy planning and tracking",
    pros: [
      "Highly customizable",
      "Templates available",
      "Collaboration features",
      "Multi-media support",
      "Project management style",
      "Free for personal use"
    ],
    cons: [
      "Steep learning curve",
      "Requires setup time",
      "Can be complex for simple tracking",
      "No automated calculations",
      "Desktop-focused"
    ],
    bestFor: "Organized users who want a comprehensive planning system",
    price: "Free for personal use",
    platforms: ["Web", "Mobile App"],
    rating: 4.2,
    url: null
  },
  {
    rank: 12,
    name: "Mayo Clinic Pregnancy App",
    category: "Medical App",
    description: "Medical-grade pregnancy information and tracking from Mayo Clinic",
    pros: [
      "Medical authority and accuracy",
      "Evidence-based information",
      "No ads or commercialization",
      "Expert recommendations",
      "High-quality content",
      "Symptom guidance"
    ],
    cons: [
      "Limited tracking features",
      "Basic interface",
      "Minimal community features",
      "US healthcare focus",
      "Less frequent updates"
    ],
    bestFor: "Users prioritizing medical accuracy over features",
    price: "Free",
    platforms: ["iOS", "Android"],
    rating: 4.4,
    url: null
  },
  {
    rank: 13,
    name: "Sprout Pregnancy",
    category: "Mobile App",
    description: "Visual pregnancy tracker with 3D development models",
    pros: [
      "Excellent 3D visualizations",
      "Week-by-week development",
      "Beautiful interface",
      "Informative content",
      "Photo sharing",
      "Size comparisons"
    ],
    cons: [
      "Limited tracking features",
      "One-time purchase model",
      "Fewer updates",
      "No community features",
      "Basic symptom tracking"
    ],
    bestFor: "Visual learners interested in baby development",
    price: "Paid app ($3.99)",
    platforms: ["iOS", "Android"],
    rating: 4.1,
    url: null
  },
  {
    rank: 14,
    name: "Discord Pregnancy Servers",
    category: "Community Platform",
    description: "Real-time chat communities for pregnancy support and discussion",
    pros: [
      "Real-time chat support",
      "Due date specific groups",
      "Voice chat capabilities",
      "Anonymous participation",
      "24/7 community",
      "International users"
    ],
    cons: [
      "No tracking features",
      "Requires Discord knowledge",
      "Quality varies by server",
      "Can be overwhelming",
      "Temporary conversations"
    ],
    bestFor: "Users wanting real-time chat support",
    price: "Free",
    platforms: ["Web", "Mobile App", "Desktop"],
    rating: 3.9,
    url: null
  },
  {
    rank: 15,
    name: "Airtable Templates",
    category: "DIY Platform",
    description: "Database-style pregnancy tracking with powerful organization features",
    pros: [
      "Database functionality",
      "Powerful filtering and sorting",
      "Collaboration features",
      "Template marketplace",
      "API access",
      "Visual views"
    ],
    cons: [
      "Complex for beginners",
      "Requires setup",
      "Learning curve",
      "Limited mobile experience",
      "Can be overkill for simple tracking"
    ],
    bestFor: "Data-oriented users who want database capabilities",
    price: "Free tier available",
    platforms: ["Web", "Mobile App"],
    rating: 4.0,
    url: null
  },
  {
    rank: 16,
    name: "Traditional Paper Journal",
    category: "Analog Method",
    description: "Classic pen-and-paper pregnancy journaling and tracking",
    pros: [
      "Complete privacy",
      "No technology dependence",
      "Personal and intimate",
      "Keepsake value",
      "No battery required",
      "Completely customizable"
    ],
    cons: [
      "No calculations or automation",
      "Risk of loss",
      "No backup",
      "No sharing capabilities",
      "Time-consuming",
      "No reminders"
    ],
    bestFor: "Traditional users who value handwritten records",
    price: "Cost of journal/notebook",
    platforms: ["Physical"],
    rating: 3.5,
    url: null
  },
  {
    rank: 17,
    name: "Nurture Pregnancy",
    category: "Mobile App",
    description: "Simple pregnancy tracking with focus on mindfulness and wellness",
    pros: [
      "Mindfulness focus",
      "Simple interface",
      "Wellness tracking",
      "Meditation guides",
      "Exercise suggestions",
      "Mental health support"
    ],
    cons: [
      "Limited tracking features",
      "Smaller user base",
      "Subscription required",
      "Basic calculations",
      "Fewer educational resources"
    ],
    bestFor: "Users focusing on wellness and mindfulness",
    price: "Subscription-based",
    platforms: ["iOS", "Android"],
    rating: 3.8,
    url: null
  },
  {
    rank: 18,
    name: "Facebook Pregnancy Groups",
    category: "Social Platform",
    description: "Facebook groups for pregnancy support, advice, and community",
    pros: [
      "Large, active communities",
      "Local groups available",
      "Photo sharing",
      "Event organization",
      "Easy to find groups",
      "Free access"
    ],
    cons: [
      "Privacy concerns",
      "No tracking features",
      "Information quality varies",
      "Can be drama-prone",
      "Requires Facebook account",
      "Algorithm-driven content"
    ],
    bestFor: "Social media users wanting community support",
    price: "Free",
    platforms: ["Web", "Mobile App"],
    rating: 3.6,
    url: null
  },
  {
    rank: 19,
    name: "Apple Health (iOS)",
    category: "Health Platform",
    description: "Built-in iPhone health tracking with pregnancy features",
    pros: [
      "Integrated with iPhone",
      "Privacy-focused",
      "Works with other health apps",
      "Menstrual cycle tracking",
      "Easy data sharing",
      "Free with iPhone"
    ],
    cons: [
      "iPhone only",
      "Limited pregnancy-specific features",
      "Basic interface",
      "No community or content",
      "Requires manual entry"
    ],
    bestFor: "iPhone users wanting simple, integrated tracking",
    price: "Free with iPhone",
    platforms: ["iOS"],
    rating: 3.7,
    url: null
  },
  {
    rank: 20,
    name: "Samsung Health",
    category: "Health Platform",
    description: "Samsung&apos;s health platform with basic pregnancy tracking",
    pros: [
      "Integrated with Samsung devices",
      "Free with Samsung phones",
      "Basic tracking features",
      "Works with wearables",
      "Privacy-focused",
      "Simple interface"
    ],
    cons: [
      "Samsung devices only",
      "Very limited pregnancy features",
      "Basic functionality",
      "No community or content",
      "Minimal guidance"
    ],
    bestFor: "Samsung users wanting basic tracking integration",
    price: "Free with Samsung devices",
    platforms: ["Android (Samsung)"],
    rating: 3.4,
    url: null
  },
  {
    rank: 21,
    name: "Fitbit Premium",
    category: "Wearable Platform",
    description: "Fitbit&apos;s premium service with pregnancy tracking features",
    pros: [
      "Automatic health monitoring",
      "Sleep and activity tracking",
      "Heart rate monitoring",
      "Guided workouts",
      "Stress management",
      "Data-driven insights"
    ],
    cons: [
      "Requires Fitbit device",
      "Subscription cost",
      "Limited pregnancy-specific features",
      "Generic advice",
      "No community features"
    ],
    bestFor: "Fitbit users wanting automated health tracking",
    price: "Subscription + device cost",
    platforms: ["Mobile App", "Wearable"],
    rating: 3.9,
    url: null
  },
  {
    rank: 22,
    name: "Trello Boards",
    category: "Organization Tool",
    description: "Project management tool adapted for pregnancy planning and tracking",
    pros: [
      "Visual organization",
      "Collaboration features",
      "Free tier available",
      "Flexible structure",
      "Timeline view",
      "Mobile apps"
    ],
    cons: [
      "Requires setup and customization",
      "No automated features",
      "Learning curve",
      "Limited to organization",
      "No calculations or medical insights"
    ],
    bestFor: "Project-oriented users who like visual organization",
    price: "Free tier available",
    platforms: ["Web", "Mobile App"],
    rating: 3.6,
    url: null
  },
  {
    rank: 23,
    name: "MyPregnancy & Baby Today",
    category: "Mobile App",
    description: "Pregnancy and baby tracking with development information",
    pros: [
      "Pregnancy to baby transition",
      "Development information",
      "Simple interface",
      "Free to use",
      "Basic tracking features",
      "Photo storage"
    ],
    cons: [
      "Limited features",
      "Outdated interface",
      "Minimal community",
      "Basic functionality",
      "Few updates"
    ],
    bestFor: "Users wanting simple, basic tracking",
    price: "Free",
    platforms: ["iOS", "Android"],
    rating: 3.3,
    url: null
  },
  {
    rank: 24,
    name: "Kindara Fertility Tracker",
    category: "Fertility App",
    description: "Fertility awareness app with basic pregnancy features",
    pros: [
      "Evidence-based fertility tracking",
      "Chart sharing with healthcare providers",
      "Community support",
      "Educational content",
      "Detailed cycle analysis"
    ],
    cons: [
      "Primarily fertility-focused",
      "Limited pregnancy tracking",
      "Subscription for advanced features",
      "Complex for beginners",
      "Small pregnancy feature set"
    ],
    bestFor: "Fertility awareness users transitioning to pregnancy",
    price: "Free with premium options",
    platforms: ["iOS", "Android"],
    rating: 3.8,
    url: null
  },
  {
    rank: 25,
    name: "Doctor&apos;s Office Paper Forms",
    category: "Medical Records",
    description: "Traditional medical forms and charts provided by healthcare providers",
    pros: [
      "Medical supervision",
      "Professional guidance",
      "Insurance integration",
      "Accurate medical records",
      "Healthcare provider access",
      "Legal medical documentation"
    ],
    cons: [
      "Limited tracking between visits",
      "Paper-based inconvenience",
      "No daily insights",
      "Appointment-dependent",
      "No automation or calculations",
      "Risk of loss"
    ],
    bestFor: "Users preferring traditional medical supervision",
    price: "Included with healthcare",
    platforms: ["Physical"],
    rating: 3.2,
    url: null
  }
];

const categoryColors = {
  "Comprehensive Platform": "bg-gradient-to-r from-purple-600 to-pink-600",
  "Community Platform": "bg-gradient-to-r from-blue-600 to-cyan-600",
  "DIY Tracking": "bg-gradient-to-r from-green-600 to-teal-600",
  "Mobile App": "bg-gradient-to-r from-orange-600 to-red-600",
  "DIY Platform": "bg-gradient-to-r from-indigo-600 to-purple-600",
  "Medical App": "bg-gradient-to-r from-teal-600 to-green-600",
  "Analog Method": "bg-gradient-to-r from-gray-600 to-gray-800",
  "Social Platform": "bg-gradient-to-r from-pink-600 to-rose-600",
  "Health Platform": "bg-gradient-to-r from-emerald-600 to-teal-600",
  "Wearable Platform": "bg-gradient-to-r from-violet-600 to-purple-600",
  "Organization Tool": "bg-gradient-to-r from-amber-600 to-orange-600",
  "Fertility App": "bg-gradient-to-r from-rose-600 to-pink-600",
  "Medical Records": "bg-gradient-to-r from-slate-600 to-gray-600"
};

const getRatingStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="ml-1 text-sm text-gray-600">({rating})</span>
    </div>
  );
};

export default function Top25PregnancyPlatformsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Crown className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Top 25 Best Pregnancy Tracking Platforms in 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Complete expert review of the best pregnancy tracking platforms, apps, and tools. From comprehensive platforms like EGSpect to community support on Reddit, find the perfect solution for your pregnancy journey.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12 bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.keys(categoryColors).map((category) => (
              <div key={category} className="text-center">
                <div className={`${categoryColors[category as keyof typeof categoryColors]} text-white px-3 py-2 rounded-lg text-sm font-medium`}>
                  {category}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {platforms.filter(p => p.category === category).length} tools
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 3 Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🏆 Top 3 Recommended Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.slice(0, 3).map((platform) => (
              <div key={platform.rank} className="relative">
                <div className="absolute -top-4 -right-4 z-10">
                  {platform.rank === 1 && <Crown className="w-8 h-8 text-yellow-500" />}
                  {platform.rank === 2 && <Award className="w-8 h-8 text-gray-400" />}
                  {platform.rank === 3 && <Award className="w-8 h-8 text-amber-600" />}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-yellow-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${categoryColors[platform.category as keyof typeof categoryColors]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      #{platform.rank}
                    </div>
                    {getRatingStars(platform.rating)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{platform.name}</h3>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{platform.bestFor}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-800">Price: {platform.price}</span>
                    </div>
                  </div>
                  {platform.url && (
                    <Link 
                      href={platform.url}
                      className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
                    >
                      Try {platform.name}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Rankings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Complete Rankings & Reviews</h2>
          
          <div className="space-y-8">
            {platforms.map((platform) => (
              <div key={platform.rank} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${categoryColors[platform.category as keyof typeof categoryColors]} text-white px-4 py-2 rounded-full text-lg font-bold`}>
                        #{platform.rank}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{platform.name}</h3>
                        <p className="text-purple-600 font-medium">{platform.category}</p>
                      </div>
                    </div>
                    
                    {getRatingStars(platform.rating)}
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-700">Price: </span>
                        <span className="text-sm text-gray-600 ml-1">{platform.price}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-700">Platforms: </span>
                        <span className="text-sm text-gray-600 ml-1">{platform.platforms.join(', ')}</span>
                      </div>
                    </div>

                    {platform.url && (
                      <Link 
                        href={platform.url}
                        className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
                      >
                        Visit {platform.name}
                      </Link>
                    )}
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:w-2/3">
                    <p className="text-gray-700 mb-6">{platform.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Pros */}
                      <div>
                        <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Pros
                        </h4>
                        <ul className="space-y-2">
                          {platform.pros.map((pro, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cons */}
                      <div>
                        <h4 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          Cons
                        </h4>
                        <ul className="space-y-2">
                          {platform.cons.map((con, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">Best For:</h5>
                      <p className="text-blue-700 text-sm">{platform.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Quick Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Rank</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Platform</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Rating</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Best For</th>
                </tr>
              </thead>
              <tbody>
                {platforms.slice(0, 10).map((platform) => (
                  <tr key={platform.rank} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className={`${categoryColors[platform.category as keyof typeof categoryColors]} text-white px-2 py-1 rounded text-sm font-bold text-center w-8`}>
                        {platform.rank}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-800">{platform.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{platform.category}</td>
                    <td className="py-3 px-4">{getRatingStars(platform.rating)}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{platform.price}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{platform.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-4 text-gray-600">Showing top 10 platforms. See full rankings above.</p>
        </div>

        {/* How We Ranked */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Ranked These Platforms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Evaluation Criteria</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">Feature Completeness</span>
                    <p className="text-sm text-gray-600">Range and quality of tracking tools</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">Accuracy & Reliability</span>
                    <p className="text-sm text-gray-600">Medical accuracy and data reliability</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">User Experience</span>
                    <p className="text-sm text-gray-600">Interface design and ease of use</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">Value for Money</span>
                    <p className="text-sm text-gray-600">Features vs. cost comparison</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Factors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">Privacy & Security</span>
                    <p className="text-sm text-gray-600">Data protection and privacy policies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">Community Support</span>
                    <p className="text-sm text-gray-600">User community and support quality</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">Platform Availability</span>
                    <p className="text-sm text-gray-600">Device and platform compatibility</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">Update Frequency</span>
                    <p className="text-sm text-gray-600">Development activity and improvements</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mb-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">🎯 Key Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">✅ Best Overall Choice</h3>
              <p className="text-purple-100 mb-4">
                <strong>EGSpect</strong> leads our rankings with comprehensive, free tools and medical-grade accuracy. Perfect for data-driven parents who want everything in one place.
              </p>
              <h3 className="text-xl font-semibold mb-4">👥 Best for Community</h3>
              <p className="text-purple-100">
                <strong>Reddit (r/BabyBumps)</strong> offers unmatched community support with real experiences from hundreds of thousands of parents.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">📱 Best Mobile App</h3>
              <p className="text-purple-100 mb-4">
                <strong>Ovia Pregnancy Tracker</strong> provides the most comprehensive mobile experience with extensive tracking features.
              </p>
              <h3 className="text-xl font-semibold mb-4">🎨 Best for Customization</h3>
              <p className="text-purple-100">
                <strong>Google Sheets</strong> offers unlimited customization for users who want complete control over their tracking system.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Which pregnancy tracking platform is most accurate?</h3>
              <p className="text-gray-700">
                EGSpect ranks #1 for accuracy with medical-grade calculations, followed by Mayo Clinic&apos;s app for evidence-based information. For calculations like due dates and weight gain, platforms with transparent methodologies are most reliable.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are free pregnancy tracking tools as good as paid ones?</h3>
              <p className="text-gray-700">
                Yes! Our top-ranked platform (EGSpect) is completely free, and Reddit communities offer excellent support at no cost. Many paid apps rely on advertising revenue rather than subscription quality.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Should I use multiple pregnancy tracking platforms?</h3>
              <p className="text-gray-700">
                Many parents use 2-3 platforms: a comprehensive tool like EGSpect for calculations, Reddit for community support, and a mobile app for daily tracking. Avoid too many platforms to prevent information overload.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How important is data privacy in pregnancy apps?</h3>
              <p className="text-gray-700">
                Very important. Pregnancy data is highly sensitive. Choose platforms with clear privacy policies like EGSpect (privacy-focused) or Clue (no data selling). Avoid apps with unclear data practices.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Can pregnancy tracking platforms replace doctor visits?</h3>
              <p className="text-gray-700">
                No. These platforms are tools to supplement medical care, not replace it. Always consult healthcare providers for medical decisions. Use tracking data to facilitate better conversations with your doctor.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <Heart className="w-12 h-12 mx-auto mb-4 text-purple-100" />
          <h2 className="text-3xl font-bold mb-4">Start Your Pregnancy Tracking Journey</h2>
          <p className="text-xl mb-6 text-purple-100">
            Ready to begin? Start with our #1 recommended platform for comprehensive, free pregnancy tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/due-date-calculator"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start with EGSpect Tools
            </Link>
            <Link 
              href="/baby"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Track Baby Health
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Related Pregnancy Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools" className="text-purple-600 hover:text-purple-700 font-medium">
              All Pregnancy Tools
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/pregnancy-nutrition-essentials" className="text-blue-600 hover:text-blue-700 font-medium">
              Nutrition Guide
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/pregnancy-exercise-guide" className="text-blue-600 hover:text-blue-700 font-medium">
              Exercise During Pregnancy
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/baby/milestones" className="text-purple-600 hover:text-purple-700 font-medium">
              Baby Milestone Tracker
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/first-trimester-guide" className="text-blue-600 hover:text-blue-700 font-medium">
              First Trimester Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}