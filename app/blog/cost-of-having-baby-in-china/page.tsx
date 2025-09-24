import { Metadata } from 'next';
import Link from 'next/link';
import { getCountryBySlug, formatCurrency } from '@/lib/baby-cost-data';
import { 
  ArrowLeft,
  ArrowRight, 
  Calculator, 
  Heart, 
  Hospital, 
  PiggyBank, 
  TrendingUp,
  Calendar,
  MapPin,
  GraduationCap,
  Shield,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide: Cost of Having a Baby in China 🇨🇳 - 2025 Breakdown',
  description: 'Comprehensive guide to baby costs in China from pregnancy to age 5. Detailed breakdown of prenatal care, delivery expenses, and child-rearing costs with healthcare system insights and city variations.',
  keywords: [
    'baby cost China',
    'pregnancy expenses China',
    'delivery cost China',
    'child expenses China',
    'maternity cost China',
    'prenatal care cost China',
    'hospital delivery cost China',
    'baby budget China',
    'child care costs China',
    'pregnancy budget planning China',
    'healthcare China',
    'maternity leave China'
  ],
  openGraph: {
    title: 'Complete Guide: Cost of Having a Baby in China 🇨🇳',
    description: 'Everything you need to know about baby costs in China - from pregnancy to school age with detailed breakdowns and healthcare system planning tips.',
    type: 'article',
  },
};

export default function ChinaGuidePage() {
  const countryData = getCountryBySlug('china');
  
  if (!countryData) {
    return <div>Country data not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/blog" className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-2 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                  <PiggyBank className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-gray-600">Cost Guide</span>
              </div>
            </div>
            <nav className="hidden sm:flex items-center gap-4">
              <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium">
                Tracker
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">{countryData.flag}</span>
            <PiggyBank className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-medium text-pink-600 uppercase tracking-wide">
              Cost Guide
            </span>
          </div>
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            Complete Guide: Cost of Having a Baby in China
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              January 15, 2025
            </div>
            <span>12 min read</span>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-50/60 to-yellow-50/60 rounded-2xl p-6 lg:p-8 mb-8 border border-red-100/50">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Calculator className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-800">Ready to Calculate Your Costs?</h3>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Use our interactive calculator to get personalized cost estimates based on your city, healthcare choices, and preferences.
            </p>
            <Link href="/tools/cost-of-having-a-baby/china">
              <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all duration-200 shadow-lg hover:shadow-xl">
                <Calculator className="h-5 w-5" />
                Try Interactive Calculator
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-red-50/60 to-yellow-50/60 rounded-2xl p-6 lg:p-8 mb-8 border border-red-100/50">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-red-100">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Important Note</h3>
                <p className="text-gray-600 mb-0 text-sm leading-relaxed">
                  These estimates cover pregnancy, delivery, and child expenses from birth to age 5. Costs vary significantly between tier-1 cities (Beijing, Shanghai) and smaller cities.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-red-500" />
            Quick Cost Overview
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            The cost of having a baby in China varies dramatically based on your city tier and healthcare choices. Here&apos;s what you can expect:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {formatCurrency(countryData.totalMinCost, countryData.currency, countryData.locale)}
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Public Healthcare</h4>
                <p className="text-sm text-gray-600">Government hospitals &amp; basic care</p>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {formatCurrency(countryData.totalMaxCost, countryData.currency, countryData.locale)}
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Private Healthcare</h4>
                <p className="text-sm text-gray-600">International hospitals &amp; premium care</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-4 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-purple-500" />
            Cost by Age Range
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Costs change significantly as your child grows. Here&apos;s a breakdown by age range:
          </p>

          <div className="space-y-4 mb-8">
            {countryData.ageBasedCosts.map((ageData) => (
              <div key={ageData.ageRange} className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <h3 className="text-lg font-medium text-gray-800">{ageData.ageRange}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{ageData.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">
                    {formatCurrency(ageData.totalMinCost, countryData.currency, countryData.locale)} - {formatCurrency(ageData.totalMaxCost, countryData.currency, countryData.locale)}
                  </div>
                  <p className="text-sm text-gray-500">Annual estimate</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-4 flex items-center gap-3">
            <Heart className="w-6 h-6 text-pink-500" />
            Detailed Cost Breakdown
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Here&apos;s a detailed look at the major cost categories:
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-4">Prenatal Care Costs</h3>
          <div className="space-y-3 mb-6">
            {countryData.categories.prenatal.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-pink-25 rounded-lg border border-pink-100">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.item}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-pink-600">
                    {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-4">Delivery &amp; Hospital Costs</h3>
          <div className="space-y-3 mb-6">
            {countryData.categories.delivery.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-blue-25 rounded-lg border border-blue-100">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.item}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">
                    {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-4">Baby &amp; Child Essentials</h3>
          <div className="space-y-3 mb-8">
            {countryData.categories.essentials.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-green-25 rounded-lg border border-green-100">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.item}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">
                    {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-500" />
            China-Specific Planning Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Hospital className="h-5 w-5 text-blue-500" />
                Healthcare System
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>Public Hospitals:</strong> More affordable but often crowded</li>
                <li>• <strong>Private Hospitals:</strong> Higher cost but better service and English support</li>
                <li>• <strong>Health Insurance:</strong> Social insurance covers basic costs</li>
                <li>• <strong>International Hospitals:</strong> Premium care for expats and wealthy locals</li>
              </ul>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-purple-500" />
                Childcare &amp; Education
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>Childcare:</strong> ¥2,000-¥8,000+ monthly depending on city and type</li>
                <li>• <strong>International Schools:</strong> ¥100,000-¥300,000+ annually</li>
                <li>• <strong>Public Schools:</strong> Free but competitive admission</li>
                <li>• <strong>Private Tutoring:</strong> Common and expensive</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-4 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-purple-500" />
            City Cost Variations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
              <h4 className="font-medium text-red-800 mb-2">Tier-1 Cities</h4>
              <p className="text-sm text-red-700 mb-2">Beijing, Shanghai, Guangzhou, Shenzhen</p>
              <div className="text-lg font-bold text-red-600">200-300% of average</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-medium text-yellow-800 mb-2">Tier-2 Cities</h4>
              <p className="text-sm text-yellow-700 mb-2">Chengdu, Hangzhou, Nanjing, Wuhan</p>
              <div className="text-lg font-bold text-yellow-600">120-150% of average</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-800 mb-2">Tier-3+ Cities</h4>
              <p className="text-sm text-green-700 mb-2">Smaller cities and towns</p>
              <div className="text-lg font-bold text-green-600">80-100% of average</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Ready to Plan Your Budget?</h3>
            <p className="text-gray-600 mb-6">
              Use our interactive calculator to customize costs based on your city, healthcare choices, and preferences for a personalized estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools/cost-of-having-a-baby/china">
                <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Calculator className="h-5 w-5" />
                  Start Calculating
                </button>
              </Link>
              <Link href="/tools/due-date-calculator">
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200">
                  <Calendar className="h-5 w-5" />
                  Calculate Due Date
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}