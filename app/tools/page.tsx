import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Baby, 
  Sparkles, 
  Scale, 
  Heart, 
  Apple, 
  Timer, 
  Activity, 
  Flower,
  Target,
  Search,
  Briefcase,
  PiggyBank
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Pregnancy Tools - Essential Calculators & Trackers | Your Journey',
  description: 'Access 14 free pregnancy tools including due date calculator, baby cost calculator, symptom checker, hospital bag checklist, safe foods checker, and more. Essential tools for expecting parents.',
  keywords: 'free pregnancy tools, pregnancy calculator, due date calculator, baby name generator, pregnancy tracker, pregnancy planning tools',
  openGraph: {
    title: 'Free Pregnancy Tools - Essential Calculators & Trackers',
    description: 'Complete collection of free pregnancy tools to support your journey from conception to birth.',
    type: 'website',
  },
};

const tools = [
  {
    title: 'Due Date Calculator',
    description: 'Calculate your estimated delivery date based on your last menstrual period or conception date.',
    href: '/tools/due-date-calculator',
    icon: Calendar,
    color: 'from-pink-500 to-purple-500',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    popular: true
  },
  {
    title: 'Pregnancy Week Calculator',
    description: 'Find out exactly how many weeks pregnant you are with detailed trimester information.',
    href: '/tools/pregnancy-week-calculator',
    icon: Timer,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    popular: true
  },
  {
    title: 'Baby Name Generator',
    description: 'Discover beautiful baby names filtered by style, origin, and gender preferences.',
    href: '/tools/baby-name-generator',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    title: 'Weight Gain Calculator',
    description: 'Track healthy pregnancy weight gain based on your pre-pregnancy BMI.',
    href: '/tools/pregnancy-weight-gain-calculator',
    icon: Scale,
    color: 'from-green-500 to-blue-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    title: 'Ovulation Calculator',
    description: 'Calculate your fertile window and ovulation date to optimize conception chances.',
    href: '/tools/ovulation-calculator',
    icon: Flower,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    popular: true
  },
  {
    title: 'Baby Cost Calculator',
    description: 'Calculate the cost of having a baby in your country with detailed budget breakdown.',
    href: '/tools/baby-cost-calculator',
    icon: PiggyBank,
    color: 'from-green-500 to-blue-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    popular: true
  },
  {
    title: 'Baby Gender Predictor',
    description: 'Fun gender prediction using traditional methods like Chinese calendar and symptoms.',
    href: '/tools/baby-gender-predictor',
    icon: Heart,
    color: 'from-pink-500 to-purple-500',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    title: 'Baby Size Comparison',
    description: 'Track your baby&apos;s growth week by week with fruit and vegetable size comparisons.',
    href: '/tools/baby-size-comparison',
    icon: Apple,
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    title: 'Contraction Timer',
    description: 'Time your labor contractions and know when to head to the hospital.',
    href: '/tools/contraction-timer',
    icon: Timer,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    title: 'Kick Counter',
    description: 'Monitor your baby&apos;s movements to ensure healthy fetal activity.',
    href: '/tools/kick-counter',
    icon: Activity,
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    title: 'Nutrition Tracker',
    description: 'Track essential nutrients during pregnancy for optimal baby development.',
    href: '/tools/pregnancy-nutrition-tracker',
    icon: Target,
    color: 'from-green-500 to-yellow-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    title: 'Symptom Checker',
    description: 'Quick guidance on pregnancy symptoms - find out if what you\'re experiencing is normal.',
    href: '/tools/pregnancy-symptom-checker',
    icon: Search,
    color: 'from-blue-500 to-green-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    popular: true
  },
  {
    title: 'Hospital Bag Checklist',
    description: 'Interactive packing checklist for labor and delivery - never forget essential items.',
    href: '/tools/hospital-bag-checklist',
    icon: Briefcase,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    title: 'Safe Foods Checker',
    description: 'Quickly check if foods are safe to eat during pregnancy with instant answers.',
    href: '/tools/pregnancy-safe-foods',
    icon: Apple,
    color: 'from-green-500 to-blue-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  }
];

const categories = {
  planning: {
    title: 'Planning & Early Pregnancy',
    tools: ['ovulation-calculator', 'due-date-calculator', 'pregnancy-week-calculator', 'baby-cost-calculator']
  },
  health: {
    title: 'Health & Safety',
    tools: ['pregnancy-symptom-checker', 'pregnancy-safe-foods', 'hospital-bag-checklist']
  },
  tracking: {
    title: 'Pregnancy Tracking',
    tools: ['pregnancy-weight-gain-calculator', 'baby-size-comparison', 'pregnancy-nutrition-tracker']
  },
  fun: {
    title: 'Fun & Predictions',
    tools: ['baby-name-generator', 'baby-gender-predictor']
  },
  monitoring: {
    title: 'Baby Monitoring',
    tools: ['kick-counter', 'contraction-timer']
  }
};

export default function FreePregancyTools() {
  const popularTools = tools.filter(tool => tool.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Baby className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Free Pregnancy Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Essential calculators, trackers, and tools to support your pregnancy journey. 
            From conception planning to delivery preparation - all completely free.
          </p>
        </div>

        {/* Popular Tools */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-800">Most Popular Tools</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Link key={tool.href} href={tool.href} className="block group">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2 border-yellow-200 bg-gradient-to-br from-white to-yellow-50">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 ${tool.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-8 w-8 ${tool.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                        {tool.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* All Tools by Category */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">All Pregnancy Tools</h2>
          
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((toolHref) => {
                  const tool = tools.find(t => t.href.includes(toolHref));
                  if (!tool) return null;
                  
                  const IconComponent = tool.icon;
                  return (
                    <Link key={tool.href} href={tool.href} className="block group">
                      <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-102">
                        <CardHeader className="text-center pb-4">
                          <div className={`w-14 h-14 ${tool.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                            <IconComponent className={`h-7 w-7 ${tool.iconColor}`} />
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                            {tool.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {tool.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our Tools?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🆓</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Completely Free</h3>
              <p className="text-sm text-gray-600">All tools are free to use with no hidden charges or subscriptions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Medically Accurate</h3>
              <p className="text-sm text-gray-600">Based on established medical guidelines and research.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Mobile Friendly</h3>
              <p className="text-sm text-gray-600">Works perfectly on all devices - phone, tablet, or computer.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Privacy Focused</h3>
              <p className="text-sm text-gray-600">Your personal information stays private and secure.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Pregnancy Journey</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of expecting parents using our free tools for a healthier pregnancy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/due-date-calculator"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate Due Date
            </Link>
            <Link 
              href="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Read Pregnancy Blog
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
              Pregnancy Blog
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/about" className="text-purple-600 hover:text-purple-700 font-medium">
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/pregnancy-nutrition-essentials" className="text-purple-600 hover:text-purple-700 font-medium">
              Nutrition Guide
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/pregnancy-exercise-guide" className="text-purple-600 hover:text-purple-700 font-medium">
              Exercise Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}