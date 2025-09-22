import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Calendar, TrendingUp, Baby, BarChart3, Flag, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Most Common Delivery Weeks Worldwide: Global Birth Statistics & India Data',
  description: 'Discover when babies are most commonly born worldwide and in India. Complete analysis of delivery weeks, full-term vs preterm births, and global birth statistics.',
  keywords: 'most common delivery week, when are most babies born, delivery statistics worldwide, India birth statistics, full term delivery, 39 week delivery, global pregnancy statistics',
};

const globalDeliveryStats = [
  {
    week: "37-38 weeks",
    percentage: "15-20%",
    classification: "Early Term",
    description: "Earlier than ideal but still considered full-term",
    trends: "Increasing due to medical interventions"
  },
  {
    week: "39 weeks", 
    percentage: "25-30%",
    classification: "Full Term (Optimal)",
    description: "Most ideal timing for delivery with best outcomes",
    trends: "Target week for planned deliveries"
  },
  {
    week: "40 weeks",
    percentage: "20-25%", 
    classification: "Full Term",
    description: "Traditional due date, still optimal timing",
    trends: "Many pregnancies naturally deliver here"
  },
  {
    week: "41 weeks",
    percentage: "10-15%",
    classification: "Late Term", 
    description: "Still within normal range but monitored closely",
    trends: "Often induced to prevent post-term complications"
  },
  {
    week: "42+ weeks",
    percentage: "3-5%",
    classification: "Post-term",
    description: "Requires medical intervention and monitoring",
    trends: "Actively managed to prevent complications"
  }
];

const countryStats = [
  {
    country: "United States",
    flag: "🇺🇸",
    mostCommonWeek: "39-40 weeks",
    percentage: "48%",
    averageGA: "39.1 weeks",
    preterm: "10.5%",
    notes: "High rate of planned deliveries at 39 weeks",
    healthcare: "Advanced medical system with scheduled deliveries"
  },
  {
    country: "United Kingdom", 
    flag: "🇬🇧",
    mostCommonWeek: "40 weeks",
    percentage: "52%",
    averageGA: "39.8 weeks", 
    preterm: "7.8%",
    notes: "Lower intervention rate, more natural deliveries",
    healthcare: "NHS system favors natural timing"
  },
  {
    country: "Canada",
    flag: "🇨🇦", 
    mostCommonWeek: "39-40 weeks",
    percentage: "50%",
    averageGA: "39.5 weeks",
    preterm: "8.1%",
    notes: "Similar to US with planned 39-week deliveries",
    healthcare: "Universal healthcare with modern practices"
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    mostCommonWeek: "40 weeks", 
    percentage: "45%",
    averageGA: "39.3 weeks",
    preterm: "8.7%",
    notes: "Focus on natural delivery timing",
    healthcare: "Mix of public and private systems"
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    mostCommonWeek: "40-41 weeks",
    percentage: "55%",
    averageGA: "39.9 weeks",
    preterm: "9.2%", 
    notes: "Conservative approach, fewer early interventions",
    healthcare: "Excellent healthcare with patient choice"
  },
  {
    country: "India",
    flag: "🇮🇳",
    mostCommonWeek: "38-40 weeks",
    percentage: "58%",
    averageGA: "38.8 weeks",
    preterm: "13.4%",
    notes: "Higher preterm rate due to various factors",
    healthcare: "Improving healthcare infrastructure"
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    mostCommonWeek: "40 weeks",
    percentage: "60%",
    averageGA: "39.7 weeks", 
    preterm: "5.7%",
    notes: "Very low preterm birth rate",
    healthcare: "Excellent prenatal care and nutrition"
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    mostCommonWeek: "38-39 weeks",
    percentage: "45%",
    averageGA: "38.5 weeks",
    preterm: "11.7%",
    notes: "High C-section rate affects timing",
    healthcare: "Mixed public-private system"
  },
  {
    country: "France",
    flag: "🇫🇷", 
    mostCommonWeek: "40 weeks",
    percentage: "48%",
    averageGA: "39.6 weeks",
    preterm: "7.4%",
    notes: "Excellent maternal care and outcomes",
    healthcare: "Universal healthcare with high standards"
  },
  {
    country: "South Korea",
    flag: "🇰🇷",
    mostCommonWeek: "39-40 weeks", 
    percentage: "53%",
    averageGA: "39.2 weeks",
    preterm: "7.1%",
    notes: "Advanced healthcare, excellent outcomes",
    healthcare: "Modern medical system"
  }
];

const indiaDetailedStats = [
  {
    region: "Urban Areas",
    mostCommonWeek: "39-40 weeks",
    percentage: "45%",
    preterm: "11.2%",
    factors: ["Better healthcare access", "Higher education levels", "Nutritional awareness", "Regular prenatal care"]
  },
  {
    region: "Rural Areas", 
    mostCommonWeek: "37-39 weeks",
    percentage: "38%",
    preterm: "15.8%",
    factors: ["Limited healthcare access", "Nutritional deficiencies", "Later prenatal care", "Traditional practices"]
  },
  {
    region: "Metropolitan Cities",
    mostCommonWeek: "39 weeks",
    percentage: "48%", 
    preterm: "10.1%",
    factors: ["World-class hospitals", "Specialist care", "Planned deliveries", "Health awareness"]
  },
  {
    region: "Tier-2 Cities",
    mostCommonWeek: "38-40 weeks",
    percentage: "42%",
    preterm: "12.5%",
    factors: ["Good healthcare facilities", "Improving infrastructure", "Mixed socioeconomic factors"]
  }
];

const factorsAffectingDeliveryTiming = [
  {
    factor: "Healthcare System Quality",
    impact: "High quality systems show deliveries closer to 40 weeks",
    examples: ["Advanced prenatal care", "Better nutrition counseling", "Timely intervention for complications"],
    countries: "Japan, France, Germany"
  },
  {
    factor: "Medical Intervention Rates",
    impact: "Higher intervention leads to earlier planned deliveries",
    examples: ["Scheduled C-sections", "Labor inductions", "Elective deliveries"],
    countries: "USA, Brazil, UAE"
  },
  {
    factor: "Socioeconomic Factors", 
    impact: "Higher development correlates with later delivery timing",
    examples: ["Better nutrition", "Reduced physical stress", "Access to healthcare"],
    countries: "Nordic countries, Singapore"
  },
  {
    factor: "Cultural Practices",
    impact: "Traditional beliefs can influence delivery timing",
    examples: ["Preference for natural labor", "Traditional birthing practices", "Family involvement"],
    countries: "India, various African countries"
  },
  {
    factor: "Geographic/Climate",
    impact: "Environmental factors may influence delivery timing",
    examples: ["Seasonal variations", "Altitude effects", "Climate stress"],
    countries: "Countries near equator, high altitude regions"
  }
];

const termClassifications = [
  {
    classification: "Very Preterm",
    weeks: "28-31 weeks",
    globalRate: "0.7%",
    indiaRate: "1.2%",
    outcomes: "Requires intensive NICU care, higher risks",
    interventions: "Immediate specialized medical support needed"
  },
  {
    classification: "Moderate Preterm",
    weeks: "32-36 weeks", 
    globalRate: "6.8%",
    indiaRate: "12.2%",
    outcomes: "May need NICU care, good outcomes with care",
    interventions: "Medical support, monitoring for complications"
  },
  {
    classification: "Early Term",
    weeks: "37-38 weeks",
    globalRate: "18%",
    indiaRate: "22%", 
    outcomes: "Generally good, slightly higher risks than full-term",
    interventions: "Standard newborn care, monitoring"
  },
  {
    classification: "Full Term",
    weeks: "39-40 weeks",
    globalRate: "48%",
    indiaRate: "42%",
    outcomes: "Optimal outcomes, lowest risk period",
    interventions: "Standard newborn care"
  },
  {
    classification: "Late Term",
    weeks: "41 weeks",
    globalRate: "22%",
    indiaRate: "18%",
    outcomes: "Good outcomes with monitoring", 
    interventions: "Increased monitoring, possible induction"
  },
  {
    classification: "Post-term",
    weeks: "42+ weeks",
    globalRate: "4%",
    indiaRate: "3%",
    outcomes: "Requires intervention to prevent complications",
    interventions: "Induction of labor, close monitoring"
  }
];

const seasonalTrends = [
  {
    season: "Spring (March-May)",
    birthRate: "24%",
    notes: "Slightly lower birth rate",
    factors: ["Conception during summer", "Pleasant weather for newborns"]
  },
  {
    season: "Summer (June-August)", 
    birthRate: "27%",
    notes: "Peak birth season in many countries",
    factors: ["Conception during fall/winter", "Holiday conception periods"]
  },
  {
    season: "Fall (September-November)",
    birthRate: "26%", 
    notes: "High birth rate, back-to-school season",
    factors: ["Winter holiday conceptions", "Favorable weather"]
  },
  {
    season: "Winter (December-February)",
    birthRate: "23%",
    notes: "Lowest birth rate period",
    factors: ["Spring conceptions", "Holiday disruptions"]
  }
];

const improvingOutcomes = [
  {
    strategy: "Prenatal Care Quality",
    description: "Regular, comprehensive prenatal care starting early",
    impact: "Reduces preterm births by 15-20%",
    implementation: "Universal healthcare coverage, trained providers"
  },
  {
    strategy: "Nutritional Support",
    description: "Adequate nutrition before and during pregnancy", 
    impact: "Improves fetal growth and reduces early delivery",
    implementation: "Supplementation programs, education"
  },
  {
    strategy: "Smoking Cessation",
    description: "Eliminating tobacco use during pregnancy",
    impact: "Significantly reduces preterm birth risk",
    implementation: "Support programs, public health campaigns"
  },
  {
    strategy: "Managing Chronic Conditions",
    description: "Proper management of diabetes, hypertension, etc.",
    impact: "Reduces complications leading to early delivery",
    implementation: "Pre-conception counseling, ongoing monitoring"
  },
  {
    strategy: "Stress Reduction",
    description: "Addressing maternal stress and mental health",
    impact: "Reduces risk of preterm labor",
    implementation: "Mental health support, social services"
  }
];

const dayOfWeekStats = [
  {
    day: "Monday",
    percentage: "16%",
    type: "Planned deliveries surge",
    reason: "Start of medical week"
  },
  {
    day: "Tuesday", 
    percentage: "15%",
    type: "High planned delivery day",
    reason: "Scheduled procedures"
  },
  {
    day: "Wednesday",
    percentage: "14%",
    type: "Moderate delivery day", 
    reason: "Mid-week procedures"
  },
  {
    day: "Thursday",
    percentage: "13%",
    type: "Moderate delivery day",
    reason: "Some scheduled deliveries"
  },
  {
    day: "Friday",
    percentage: "12%",
    type: "Lower than average",
    reason: "Avoid weekend complications"
  },
  {
    day: "Saturday",
    percentage: "15%",
    type: "Natural births peak",
    reason: "Weekend natural labor"
  },
  {
    day: "Sunday", 
    percentage: "15%",
    type: "Natural births peak",
    reason: "Weekend natural labor"
  }
];

export default function MostCommonDeliveryWeeksWorldwide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Most Common Delivery Weeks Worldwide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover when babies are most commonly born around the world, including detailed 
            statistics from India and top countries. Understanding global delivery patterns 
            and what factors influence birth timing.
          </p>
        </div>

        {/* Global Overview */}
        <div className="bg-gradient-to-r from-blue-50/60 to-green-50/60 rounded-2xl p-8 mb-12 border border-blue-100/40">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Global Delivery Timing Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Worldwide, most babies are born between 37-41 weeks, with the peak occurring around 
            39-40 weeks. However, significant variations exist between countries due to healthcare 
            systems, cultural practices, and socioeconomic factors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">39-40</div>
              <div className="text-sm text-gray-600">Most common weeks globally</div>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">45-50%</div>
              <div className="text-sm text-gray-600">Born in optimal window</div>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">8-12%</div>
              <div className="text-sm text-gray-600">Global preterm rate</div>
            </div>
          </div>
        </div>

        {/* Global Delivery Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Global Delivery Week Distribution
          </h2>
          <div className="space-y-4">
            {globalDeliveryStats.map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-blue-600">{stat.week}</div>
                    <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                      {stat.percentage}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      stat.classification === 'Full Term (Optimal)' 
                        ? 'bg-green-100 text-green-800'
                        : stat.classification.includes('Full Term')
                        ? 'bg-green-100 text-green-800'
                        : stat.classification === 'Early Term'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {stat.classification}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{stat.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Current trends:</strong> {stat.trends}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Country Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Delivery Statistics by Country
          </h2>
          <div className="space-y-6">
            {countryStats.map((country, index) => (
              <div key={index} className={`bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 ${
                country.country === 'India' ? 'ring-2 ring-orange-200 bg-orange-50/30' : ''
              }`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-4xl flex-shrink-0">{country.flag}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold text-gray-800">{country.country}</h3>
                      {country.country === 'India' && (
                        <div className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold">
                          Featured Country
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Statistics:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Most common:</strong> {country.mostCommonWeek} ({country.percentage})</li>
                      <li><strong>Average GA:</strong> {country.averageGA}</li>
                      <li><strong>Preterm rate:</strong> {country.preterm}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Healthcare System:</h4>
                    <p className="text-gray-700">{country.healthcare}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Notes:</h4>
                    <p className="text-gray-700">{country.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* India Detailed Analysis */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            India: Detailed Regional Analysis
          </h2>
          <div className="bg-orange-50/60 rounded-xl border border-orange-100/60 p-6 mb-8">
            <div className="flex items-start gap-4">
              <Flag className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-orange-800 mb-2">India Overview</h3>
                <p className="text-orange-700">
                  India shows significant variation in delivery timing between urban and rural areas, 
                  reflecting differences in healthcare access, nutrition, and socioeconomic factors. 
                  The overall preterm birth rate is higher than global averages but improving with better healthcare infrastructure.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {indiaDetailedStats.map((region, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{region.region}</h3>
                <div className="mb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-lg font-bold text-orange-600">{region.mostCommonWeek}</div>
                    <div className="px-2 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
                      {region.percentage}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Preterm rate: {region.preterm}</p>
                </div>
                
                <h4 className="font-semibold text-gray-800 mb-2">Contributing Factors:</h4>
                <ul className="space-y-1">
                  {region.factors.map((factor, factorIndex) => (
                    <li key={factorIndex} className="text-sm text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Term Classifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Birth Timing Classifications & Outcomes
          </h2>
          <div className="space-y-4">
            {termClassifications.map((term, index) => (
              <div key={index} className={`rounded-xl border p-6 ${
                term.classification === 'Full Term' 
                  ? 'bg-green-50/60 border-green-100/60'
                  : term.classification.includes('Preterm')
                  ? 'bg-red-50/60 border-red-100/60'
                  : term.classification === 'Early Term'
                  ? 'bg-yellow-50/60 border-yellow-100/60'
                  : 'bg-orange-50/60 border-orange-100/60'
              }`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    term.classification === 'Full Term'
                      ? 'bg-green-100 text-green-800'
                      : term.classification.includes('Preterm')
                      ? 'bg-red-100 text-red-800'
                      : term.classification === 'Early Term'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {term.weeks}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{term.classification}</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Rates:</h4>
                    <p className="text-sm text-gray-700">Global: {term.globalRate}</p>
                    <p className="text-sm text-gray-700">India: {term.indiaRate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Outcomes:</h4>
                    <p className="text-sm text-gray-700">{term.outcomes}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Interventions:</h4>
                    <p className="text-sm text-gray-700">{term.interventions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factors Affecting Delivery Timing */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Factors Influencing Delivery Timing Globally
          </h2>
          <div className="space-y-6">
            {factorsAffectingDeliveryTiming.map((factor, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{factor.factor}</h3>
                <p className="text-gray-700 mb-4"><strong>Impact:</strong> {factor.impact}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {factor.examples.map((example, exIndex) => (
                        <li key={exIndex} className="text-sm text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Notable Countries:</h4>
                    <p className="text-sm text-gray-700">{factor.countries}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Trends */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Seasonal Birth Patterns
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Birth rates show seasonal variations worldwide, influenced by conception timing, 
            cultural factors, and environmental conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasonalTrends.map((season, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{season.season}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{season.birthRate}</div>
                <p className="text-sm text-gray-600 mb-3">{season.notes}</p>
                <ul className="space-y-1">
                  {season.factors.map((factor, factorIndex) => (
                    <li key={factorIndex} className="text-xs text-gray-700">
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Day of Week Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Day of the Week Birth Patterns
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Birth timing also varies by day of the week, largely influenced by medical scheduling 
            and natural labor patterns.
          </p>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {dayOfWeekStats.map((day, index) => (
                <div key={index} className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">{day.day}</h3>
                  <div className="text-xl font-bold text-blue-600 mb-2">{day.percentage}</div>
                  <div className="text-sm text-gray-600 mb-2">{day.type}</div>
                  <div className="text-xs text-gray-500">{day.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Improving Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Strategies for Improving Birth Outcomes Globally
          </h2>
          <div className="space-y-4">
            {improvingOutcomes.map((strategy, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{strategy.strategy}</h3>
                    <p className="text-gray-700 mb-2">{strategy.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-green-800">Impact: </span>
                        <span className="text-sm text-green-700">{strategy.impact}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-green-800">Implementation: </span>
                        <span className="text-sm text-green-700">{strategy.implementation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Trends */}
        <div className="bg-blue-50/60 rounded-2xl border border-blue-100/60 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Future Trends in Birth Timing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Positive Trends</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Improved prenatal care access globally</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Better understanding of optimal delivery timing</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Reduction in unnecessary early deliveries</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Advanced monitoring technologies</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Challenges to Address</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Healthcare disparities between regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Rising maternal age and associated risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Environmental factors affecting pregnancy</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Need for standardized care protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
          <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Track Your Pregnancy Timeline
          </h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Understanding global delivery patterns helps you prepare for your own birth experience. 
            Track your pregnancy progress and get personalized insights about your delivery timeline.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Tracking Your Pregnancy
          </Link>
        </div>
      </div>
    </div>
  );
}