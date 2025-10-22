import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Baby, 
  Droplets, 
  Utensils, 
  Heart, 
  AlertTriangle, 
  CheckCircle, 
  Activity,
  Moon,
  Target
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newborn First Week Guide: Feeding, Diapers & What to Expect',
  description: 'Complete guide to your baby&apos;s first week including feeding patterns, diaper output, sleep schedules, and important milestones. Essential information for new parents.',
  keywords: 'newborn first week, baby feeding first week, newborn diapers, first week baby care, newborn sleep patterns',
  openGraph: {
    title: 'Newborn First Week: Complete Guide for New Parents',
    description: 'Essential guide to feeding, diapers, and care during your baby&apos;s crucial first week.',
    type: 'article',
  },
};

const feedingPatterns = [
  {
    day: "Day 1-2",
    description: "Colostrum feeding period",
    frequency: "8-12 times per day",
    amount: "1-2 teaspoons per feeding",
    notes: "Stomach size of a marble",
    concerns: ["Very small amounts are normal", "Frequent feeding helps establish milk supply", "Baby may be sleepy"]
  },
  {
    day: "Day 3-4", 
    description: "Transitional milk begins",
    frequency: "8-12 times per day",
    amount: "1-2 tablespoons per feeding",
    notes: "Stomach size of a ping pong ball",
    concerns: ["Milk supply increasing", "Baby more alert", "Growth spurts may occur"]
  },
  {
    day: "Day 5-7",
    description: "Mature milk established",
    frequency: "8-12 times per day", 
    amount: "2-3 ounces per feeding",
    notes: "Stomach size of an egg",
    concerns: ["Feeding becomes more efficient", "Longer stretches between feeds", "Weight gain should begin"]
  }
];

const diaperPatterns = [
  {
    day: "Day 1",
    wetDiapers: "1-2",
    dirtyDiapers: "1-2", 
    stoolType: "Meconium (black, tarry)",
    notes: "First bowel movements are meconium",
    normalSigns: ["Sticky, black stools", "Small amounts of urine"]
  },
  {
    day: "Day 2-3",
    wetDiapers: "2-3",
    dirtyDiapers: "2-3",
    stoolType: "Transitional (greenish-brown)",
    notes: "Stools begin to change color",
    normalSigns: ["Color changing from black to brown/green", "Increasing urine output"]
  },
  {
    day: "Day 4-5", 
    wetDiapers: "4-5",
    dirtyDiapers: "3-4",
    stoolType: "Yellow, seedy (breastfed) or tan (formula)",
    notes: "Normal newborn stool pattern established",
    normalSigns: ["Yellow, seedy stools if breastfeeding", "Tan, firmer stools if formula feeding"]
  },
  {
    day: "Day 6-7",
    wetDiapers: "6+",
    dirtyDiapers: "3-4+", 
    stoolType: "Consistent with feeding type",
    notes: "Regular pattern established",
    normalSigns: ["At least 6 wet diapers daily", "Regular stool pattern", "Good hydration signs"]
  }
];

const sleepPatterns = [
  {
    period: "Days 1-2",
    totalSleep: "16-20 hours",
    feedingInterval: "1-3 hours",
    longestStretch: "2-4 hours",
    characteristics: ["Very sleepy", "May need to wake for feeds", "Short alert periods"]
  },
  {
    period: "Days 3-4",
    totalSleep: "15-18 hours", 
    feedingInterval: "2-3 hours",
    longestStretch: "2-4 hours",
    characteristics: ["More alert periods", "Cluster feeding may begin", "Day/night confusion normal"]
  },
  {
    period: "Days 5-7",
    totalSleep: "14-17 hours",
    feedingInterval: "2-4 hours", 
    longestStretch: "3-5 hours",
    characteristics: ["Longer wake periods", "Beginning to show preferences", "Sleep cycles developing"]
  }
];

const developmentalMilestones = [
  {
    category: "Physical Development",
    milestones: [
      "Reflexes present (rooting, sucking, grasping)",
      "Umbilical cord healing",
      "Weight loss of 5-10% normal",
      "Regaining birth weight by day 10-14"
    ],
    icon: Activity
  },
  {
    category: "Sensory Development", 
    milestones: [
      "Can see 8-12 inches clearly",
      "Recognizes mother&apos;s voice",
      "Responds to familiar sounds", 
      "Prefers high contrast patterns"
    ],
    icon: Target
  },
  {
    category: "Behavioral Signs",
    milestones: [
      "Shows hunger and satiety cues",
      "Different cries for different needs",
      "Brief periods of alertness",
      "Beginning social awareness"
    ],
    icon: Heart
  }
];

const warningSignsToWatch = [
  {
    category: "Feeding Concerns",
    urgency: "Call Doctor Soon",
    signs: [
      "Refusing to feed for more than 4-6 hours",
      "Excessive spitting up or vomiting",
      "Signs of dehydration",
      "Poor latch or inability to suck"
    ],
    color: "yellow"
  },
  {
    category: "Diaper Output Concerns", 
    urgency: "Monitor Closely",
    signs: [
      "No wet diaper for 12+ hours after day 3",
      "No stool for 24+ hours after day 3", 
      "Blood in stool",
      "White or clay-colored stools"
    ],
    color: "orange"
  },
  {
    category: "Emergency Signs",
    urgency: "Call 911",
    signs: [
      "Difficulty breathing or rapid breathing",
      "Blue lips, tongue, or skin",
      "Lethargy or unresponsiveness",
      "Fever over 100.4°F (38°C)",
      "Persistent vomiting",
      "Signs of severe dehydration"
    ],
    color: "red"
  }
];

const practicalTips = [
  {
    category: "Feeding Success",
    tips: [
      "Feed on demand, watch for hunger cues",
      "Burp baby during and after feeds",
      "Keep feeding log to track patterns",
      "Skin-to-skin contact helps bonding",
      "Don&apos;t worry about schedules yet",
      "Get help with latching if breastfeeding"
    ],
    icon: Utensils
  },
  {
    category: "Diaper Management",
    tips: [
      "Change diapers frequently to prevent rash",
      "Clean gently with warm water",
      "Pat dry, don&apos;t rub sensitive skin",
      "Apply barrier cream if needed",
      "Track wet and dirty diapers",
      "Check diaper fit to prevent leaks"
    ],
    icon: Droplets
  },
  {
    category: "Sleep Support",
    tips: [
      "Follow safe sleep guidelines (back sleeping)",
      "Room-share but not bed-share",
      "Swaddle for comfort and security",
      "White noise may help soothe",
      "Accept that night waking is normal",
      "Sleep when baby sleeps"
    ],
    icon: Moon
  },
  {
    category: "General Care",
    tips: [
      "Wash hands before handling baby",
      "Support head and neck when holding",
      "Keep umbilical cord clean and dry",
      "Monitor temperature (98-100°F normal)",
      "Limit visitors to reduce infection risk",
      "Trust your instincts about baby&apos;s needs"
    ],
    icon: Heart
  }
];

const dailyScheduleExample = [
  { time: "12:00 AM", activity: "Night feeding", duration: "30-45 min", notes: "Keep lights dim, minimal interaction" },
  { time: "3:00 AM", activity: "Night feeding", duration: "30-45 min", notes: "Quick diaper change if needed" },
  { time: "6:00 AM", activity: "Morning feeding", duration: "30-45 min", notes: "Diaper change, brief interaction" },
  { time: "9:00 AM", activity: "Feeding + tummy time", duration: "45-60 min", notes: "Short alert period, gentle play" },
  { time: "12:00 PM", activity: "Midday feeding", duration: "30-45 min", notes: "Skin-to-skin time" },
  { time: "3:00 PM", activity: "Feeding + bath", duration: "60 min", notes: "Every 2-3 days for baths" },
  { time: "6:00 PM", activity: "Evening feeding", duration: "30-45 min", notes: "Cluster feeding may begin" },
  { time: "9:00 PM", activity: "Night routine", duration: "45-60 min", notes: "Swaddle, dim lights, prepare for night" }
];

const commonConcerns = [
  {
    concern: "Baby seems to eat constantly",
    explanation: "Cluster feeding is normal, especially in evenings",
    solution: "This helps establish milk supply and is temporary",
    timeframe: "Usually improves by 6-8 weeks"
  },
  {
    concern: "Baby cries a lot",
    explanation: "Crying is baby&apos;s only way to communicate needs", 
    solution: "Check feeding, diaper, temperature, need for comfort",
    timeframe: "Peak crying typically occurs around 6 weeks"
  },
  {
    concern: "Not enough wet diapers",
    explanation: "Kidney function is maturing in first few days",
    solution: "Should increase daily; call doctor if concerned",
    timeframe: "Should have 6+ wet diapers by day 6"
  },
  {
    concern: "Baby sleeps too much/too little",
    explanation: "Sleep patterns vary widely in newborns",
    solution: "Follow baby&apos;s cues, ensure feeding needs are met",
    timeframe: "Patterns become more predictable after 6-8 weeks"
  }
];

export default function NewbornFirstWeekGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Newborn First Week Guide: Feeding, Diapers & Care
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Complete guide to your baby&apos;s crucial first week including feeding patterns, diaper output, 
            sleep schedules, and essential care tips for new parents.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Overview */}
          <div className="bg-gradient-to-r from-pink-50/60 to-blue-50/60 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              What to Expect in Your Baby&apos;s First Week
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Utensils className="w-12 h-12 mx-auto mb-4 text-pink-600" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Feeding Focus</h3>
                <p className="text-gray-600 text-sm">
                  Frequent feeding every 1-3 hours as baby&apos;s stomach is tiny and milk supply establishes.
                </p>
              </div>
              <div className="text-center">
                <Droplets className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Diaper Patterns</h3>
                <p className="text-gray-600 text-sm">
                  Gradual increase in wet and dirty diapers as feeding increases and systems mature.
                </p>
              </div>
              <div className="text-center">
                <Moon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sleep Cycles</h3>
                <p className="text-gray-600 text-sm">
                  Lots of sleep (14-20 hours) with short wake periods, primarily for feeding.
                </p>
              </div>
            </div>
          </div>

          {/* Feeding Patterns */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Feeding Patterns by Day
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              Understanding how feeding patterns evolve during the first week helps set realistic expectations.
            </p>

            <div className="space-y-6">
              {feedingPatterns.map((pattern, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50/60 to-blue-50/60 rounded-xl border border-green-100/40 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{pattern.day}</h3>
                      <p className="text-gray-700 mb-2">{pattern.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <p><strong>Frequency:</strong> {pattern.frequency}</p>
                        <p><strong>Amount:</strong> {pattern.amount}</p>
                        <p><strong>Stomach Size:</strong> {pattern.notes}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pl-16">
                    {pattern.concerns.map((concern, concernIndex) => (
                      <div key={concernIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{concern}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diaper Patterns */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Diaper Output Expectations
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              Monitoring diaper output is crucial for ensuring proper hydration and nutrition.
            </p>

            <div className="space-y-6">
              {diaperPatterns.map((pattern, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-xl border border-blue-100/40 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{pattern.day}</h3>
                      <p className="text-gray-700 mb-4">{pattern.notes}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/60 rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-blue-600">{pattern.wetDiapers}</p>
                          <p className="text-xs text-gray-600">Wet Diapers</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-purple-600">{pattern.dirtyDiapers}</p>
                          <p className="text-xs text-gray-600">Dirty Diapers</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-3 text-center">
                          <p className="text-sm font-semibold text-gray-700">{pattern.stoolType}</p>
                          <p className="text-xs text-gray-600">Stool Type</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-16">
                    {pattern.normalSigns.map((sign, signIndex) => (
                      <div key={signIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sleep Patterns */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Sleep Patterns During Week One
            </h2>
            <div className="space-y-6">
              {sleepPatterns.map((pattern, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50/60 to-pink-50/60 rounded-xl border border-purple-100/40 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Moon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{pattern.period}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-lg font-bold text-purple-600">{pattern.totalSleep}</p>
                          <p className="text-xs text-gray-600">Total Sleep</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-blue-600">{pattern.feedingInterval}</p>
                          <p className="text-xs text-gray-600">Feed Interval</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-green-600">{pattern.longestStretch}</p>
                          <p className="text-xs text-gray-600">Longest Stretch</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pl-16">
                    {pattern.characteristics.map((char, charIndex) => (
                      <div key={charIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developmental Milestones */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              First Week Developmental Milestones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {developmentalMilestones.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-green-50/60 to-teal-50/60 rounded-xl border border-green-100/40 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-green-100">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.milestones.map((milestone, milestoneIndex) => (
                        <li key={milestoneIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Warning Signs */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Warning Signs to Watch For
            </h2>
            <div className="space-y-6">
              {warningSignsToWatch.map((category, index) => (
                <div key={index} className={`rounded-xl border-2 p-6 ${
                  category.color === 'red' ? 'bg-red-50/60 border-red-200' :
                  category.color === 'orange' ? 'bg-orange-50/60 border-orange-200' :
                  'bg-yellow-50/60 border-yellow-200'
                }`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-full flex-shrink-0 ${
                      category.color === 'red' ? 'bg-red-100' :
                      category.color === 'orange' ? 'bg-orange-100' :
                      'bg-yellow-100'
                    }`}>
                      <AlertTriangle className={`w-6 h-6 ${
                        category.color === 'red' ? 'text-red-600' :
                        category.color === 'orange' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        category.color === 'red' ? 'text-red-800' :
                        category.color === 'orange' ? 'text-orange-800' :
                        'text-yellow-800'
                      }`}>
                        {category.category}
                      </h3>
                      <p className={`font-medium ${
                        category.color === 'red' ? 'text-red-700' :
                        category.color === 'orange' ? 'text-orange-700' :
                        'text-yellow-700'
                      }`}>
                        {category.urgency}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-16">
                    {category.signs.map((sign, signIndex) => (
                      <div key={signIndex} className="flex items-start gap-2">
                        <AlertTriangle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          category.color === 'red' ? 'text-red-600' :
                          category.color === 'orange' ? 'text-orange-600' :
                          'text-yellow-600'
                        }`} />
                        <span className={`text-sm font-medium ${
                          category.color === 'red' ? 'text-red-800' :
                          category.color === 'orange' ? 'text-orange-800' :
                          'text-yellow-800'
                        }`}>
                          {sign}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Practical Care Tips for Week One
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalTips.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-blue-50/60 to-green-50/60 rounded-xl border border-blue-100/40 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-blue-100">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sample Daily Schedule */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Sample Daily Schedule (Flexible Guide)
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Remember: This is just an example. Follow your baby&apos;s cues rather than strict schedules.
            </p>
            <div className="bg-white/60 rounded-xl border border-gray-100/60 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-100/60">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Time</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Activity</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Duration</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dailyScheduleExample.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-blue-50/30' : 'bg-white/30'}>
                        <td className="px-6 py-4 font-medium text-gray-800">{item.time}</td>
                        <td className="px-6 py-4 text-gray-700">{item.activity}</td>
                        <td className="px-6 py-4 text-gray-700">{item.duration}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Common Concerns */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Common First Week Concerns
            </h2>
            <div className="space-y-6">
              {commonConcerns.map((item, index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.concern}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Why This Happens:</h4>
                      <p className="text-sm text-gray-600">{item.explanation}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">What You Can Do:</h4>
                      <p className="text-sm text-gray-600">{item.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Timeline:</h4>
                      <p className="text-sm text-gray-600">{item.timeframe}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Reminders */}
          <div className="bg-green-50/80 border-2 border-green-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-green-800 mb-4">
                  Remember: You&apos;re Doing Great!
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-green-700">
                  <div>
                    <h4 className="font-semibold mb-2">Trust Your Instincts:</h4>
                    <p className="text-sm mb-4">
                      You know your baby best. If something feels wrong, don&apos;t hesitate to contact your healthcare provider.
                    </p>
                    <h4 className="font-semibold mb-2">Every Baby is Different:</h4>
                    <p className="text-sm">
                      These are general guidelines. Your baby may have slightly different patterns, and that&apos;s perfectly normal.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ask for Help:</h4>
                    <p className="text-sm mb-4">
                      Don&apos;t hesitate to reach out to family, friends, or professionals for support during this transition.
                    </p>
                    <h4 className="font-semibold mb-2">Take Care of Yourself:</h4>
                    <p className="text-sm">
                      Rest when you can, eat well, and remember that recovery takes time for both you and baby.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Track Your Baby&apos;s Progress
            </h2>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Use our baby tracking tools to monitor feeding, diapers, and development. 
              Continue learning with our week-by-week development guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/baby"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                Baby Tracking Tools
              </Link>
              <Link 
                href="/blog/newborn-vaccinations-guide"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Vaccination Guide
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}