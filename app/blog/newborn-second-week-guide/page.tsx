import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Eye, 
  Heart, 
  Activity, 
  TrendingUp, 
  Utensils,
  Moon,
  AlertTriangle,
  CheckCircle,
  Target,
  Stethoscope,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newborn Second Week Guide: Development & Growing Awareness',
  description: 'Complete guide to your baby&apos;s second week including increased alertness, developing senses, feeding improvements, and key developmental milestones.',
  keywords: 'newborn second week, baby 2 weeks old, newborn development week 2, baby alertness, feeding patterns week 2',
  openGraph: {
    title: 'Newborn Second Week: Development & Growing Awareness',
    description: 'Your baby&apos;s second week brings increased alertness and developing senses.',
    type: 'article',
  },
};

const weekTwoChanges = [
  {
    area: "Increased Alertness",
    description: "Baby shows longer periods of quiet alertness",
    developments: [
      "Alert periods last 5-10 minutes",
      "More responsive to voices and sounds", 
      "Beginning to show interest in surroundings",
      "Less sleepy than first week"
    ],
    icon: Eye
  },
  {
    area: "Sensory Development",
    description: "Senses becoming more refined and responsive",
    developments: [
      "Better focus on faces 8-12 inches away",
      "Stronger response to familiar voices",
      "Beginning to track moving objects briefly",
      "More sensitive to light and sound"
    ],
    icon: Target
  },
  {
    area: "Physical Growth", 
    description: "Recovering birth weight and growing stronger",
    developments: [
      "Should regain birth weight by day 10-14",
      "Stronger neck muscles",
      "More coordinated movements",
      "Better muscle tone"
    ],
    icon: TrendingUp
  },
  {
    area: "Feeding Improvements",
    description: "Becoming more efficient at feeding",
    developments: [
      "Stronger sucking reflex",
      "Better latch (if breastfeeding)",
      "More efficient milk transfer",
      "Clearer hunger and fullness cues"
    ],
    icon: Utensils
  }
];

const feedingUpdates = [
  {
    aspect: "Frequency",
    weekOne: "Every 1-3 hours",
    weekTwo: "Every 2-3 hours",
    improvement: "Slightly longer between feeds as efficiency improves"
  },
  {
    aspect: "Duration",
    weekOne: "20-45 minutes",
    weekTwo: "15-30 minutes", 
    improvement: "More efficient feeding, less time needed"
  },
  {
    aspect: "Amount",
    weekOne: "1-3 ounces",
    weekTwo: "2-4 ounces",
    improvement: "Larger stomach capacity, more milk per feed"
  },
  {
    aspect: "Patterns",
    weekOne: "Irregular timing",
    weekTwo: "Slight patterns emerging",
    improvement: "Beginning to show preferred feeding times"
  }
];

const sleepDevelopment = [
  {
    period: "Night Sleep",
    duration: "3-4 hour stretches",
    characteristics: ["Longer periods between night feeds", "Beginning to distinguish day/night", "More consolidated sleep periods"],
    tips: ["Keep night feeds quiet and dim", "Avoid stimulation during night wakings", "Swaddling helps with longer stretches"]
  },
  {
    period: "Day Sleep", 
    duration: "1-3 hour naps",
    characteristics: ["Shorter, more frequent naps", "More alert periods between sleeps", "Beginning to show tired cues"],
    tips: ["Watch for sleepy signals", "Create calm environment for naps", "Don&apos;t expect long day sleeps yet"]
  },
  {
    period: "Total Sleep",
    duration: "14-17 hours per day",
    characteristics: ["Slightly less sleep than week 1", "More predictable sleep-wake cycles", "Better self-soothing attempts"],
    tips: ["Follow baby&apos;s natural rhythms", "Begin gentle bedtime routine", "Room sharing recommended"]
  }
];

const communicationSigns = [
  {
    signal: "Hunger Cues",
    early: ["Rooting motions", "Sucking on hands", "Lip smacking"],
    late: ["Fussing", "Crying", "Agitated movements"],
    response: "Feed at early cues to prevent crying"
  },
  {
    signal: "Tired Cues",
    early: ["Yawning", "Red eyebrows", "Less focused gaze"],
    late: ["Rubbing eyes", "Fussiness", "Overexcited behavior"],
    response: "Begin wind-down routine at early signs"
  },
  {
    signal: "Alert/Social Cues",
    early: ["Bright eyes", "Calm body", "Looking around"],
    late: ["Smiling reflexes", "Following voices", "Studying faces"],
    response: "Perfect time for interaction and bonding"
  },
  {
    signal: "Overstimulation",
    early: ["Looking away", "Arching back", "Frowning"],
    late: ["Crying", "Rigid body", "Hard to console"],
    response: "Reduce stimulation, provide calm environment"
  }
];

const developmentalMilestones = [
  {
    category: "Physical Development",
    milestones: [
      "Lifts head briefly during tummy time",
      "Stronger grasp reflex",
      "More coordinated arm and leg movements",
      "Better head control when held upright"
    ],
    whenToWorry: "No head lifting during tummy time, very floppy muscle tone"
  },
  {
    category: "Sensory Development",
    milestones: [
      "Focuses on faces for longer periods", 
      "Responds to loud sounds with startle",
      "Beginning to track slowly moving objects",
      "Shows preference for familiar voices"
    ],
    whenToWorry: "No response to sounds, doesn&apos;t focus on anything"
  },
  {
    category: "Social Development",
    milestones: [
      "More alert during interactions",
      "Beginning social smiles (late week 2)",
      "Calms when spoken to gently",
      "Shows recognition of primary caregivers"
    ],
    whenToWorry: "No response to familiar voices, avoids eye contact"
  }
];

const commonChallenges = [
  {
    challenge: "Growth Spurt",
    timing: "Often occurs around day 10-14",
    signs: ["Increased hunger", "More frequent feeding", "Fussiness", "Changed sleep patterns"],
    duration: "24-48 hours typically",
    management: ["Feed on demand", "Extra comfort and patience", "Rest when possible", "Know it&apos;s temporary"]
  },
  {
    challenge: "Increased Crying",
    timing: "Peak crying often starts week 2",
    signs: ["More frequent crying periods", "Harder to console", "Evening fussiness"],
    duration: "Peaks around 6 weeks, then improves",
    management: ["Check all basic needs", "Try soothing techniques", "Take breaks when needed", "Ask for help"]
  },
  {
    challenge: "Sleep Regression", 
    timing: "Days 10-14 common",
    signs: ["Shorter sleep periods", "More night wakings", "Fighting sleep"],
    duration: "Few days to a week",
    management: ["Maintain consistent routine", "Extra soothing", "Be patient", "Ensure adequate nutrition"]
  },
  {
    challenge: "Feeding Issues",
    timing: "As baby becomes more alert",
    signs: ["Distracted during feeds", "Shorter feeding sessions", "Fussiness at breast/bottle"],
    duration: "Ongoing as alertness increases",
    management: ["Feed in quiet environment", "Watch for hunger cues", "Be patient", "Consult lactation consultant if needed"]
  }
];

const careTips = [
  {
    category: "Bonding & Interaction",
    tips: [
      "Talk and sing to baby during alert periods",
      "Make eye contact during feeding and diaper changes", 
      "Read simple books with high contrast pictures",
      "Practice skin-to-skin contact daily",
      "Respond to baby&apos;s cues and attempts at communication"
    ],
    icon: Heart
  },
  {
    category: "Physical Development",
    tips: [
      "Continue daily tummy time (2-3 minutes several times)",
      "Gently move baby&apos;s arms and legs during diaper changes",
      "Support baby&apos;s head and neck during all handling",
      "Allow some time without swaddle for free movement",
      "Encourage reaching toward interesting objects"
    ],
    icon: Activity
  },
  {
    category: "Routine Building",
    tips: [
      "Begin simple bedtime routine (bath, feed, swaddle)",
      "Try to feed at similar intervals when possible",
      "Create distinction between day and night environments",
      "Keep daytime interactions bright and engaging",
      "Make nighttime feeds calm and minimal"
    ],
    icon: Clock
  },
  {
    category: "Health Monitoring",
    tips: [
      "Continue tracking weight gain (should be steady)",
      "Monitor diaper output (6+ wet, 3+ dirty daily)",
      "Watch for signs of illness or concerning changes",
      "Keep umbilical cord area clean and dry",
      "Schedule 2-week pediatric checkup"
    ],
    icon: Stethoscope
  }
];

const warningSignsWeekTwo = [
  {
    category: "Feeding Concerns",
    signs: [
      "Refusing feeds for more than 4-6 hours",
      "Significant decrease in wet diapers",
      "Lethargy during feeding attempts",
      "Poor weight gain or continued weight loss"
    ],
    action: "Contact pediatrician within 24 hours"
  },
  {
    category: "Behavioral Changes",
    signs: [
      "Excessive sleepiness or difficulty waking",
      "Inconsolable crying for hours",
      "Significant changes in crying patterns",
      "Loss of previously gained skills"
    ],
    action: "Discuss with healthcare provider"
  },
  {
    category: "Physical Symptoms",
    signs: [
      "Fever over 100.4°F (38°C)",
      "Breathing difficulties",
      "Skin color changes (blue, gray, very pale)",
      "Vomiting (not just spitting up)"
    ],
    action: "Seek immediate medical attention"
  }
];

export default function NewbornSecondWeekGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Newborn Second Week: Development & Growing Awareness
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Your baby&apos;s second week brings exciting changes including increased alertness, 
            developing senses, and the beginning of true interaction and communication.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Week Two Changes */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Key Changes in Week Two
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weekTwoChanges.map((change, index) => {
                const IconComponent = change.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-xl border border-blue-100/40 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-blue-100">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{change.area}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{change.description}</p>
                    <ul className="space-y-2">
                      {change.developments.map((development, devIndex) => (
                        <li key={devIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {development}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Feeding Updates */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Feeding Improvements in Week Two
            </h2>
            <div className="bg-white/60 rounded-xl border border-gray-100/60 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-100/60">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Aspect</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">Week One</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">Week Two</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedingUpdates.map((update, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-green-50/30' : 'bg-white/30'}>
                        <td className="px-6 py-4 font-medium text-gray-800">{update.aspect}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{update.weekOne}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-semibold">{update.weekTwo}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{update.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sleep Development */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Sleep Pattern Development
            </h2>
            <div className="space-y-6">
              {sleepDevelopment.map((sleep, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50/60 to-pink-50/60 rounded-xl border border-purple-100/40 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Moon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{sleep.period}</h3>
                      <p className="text-purple-600 font-medium mb-4">{sleep.duration}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Characteristics:</h4>
                      <ul className="space-y-1">
                        {sleep.characteristics.map((char, charIndex) => (
                          <li key={charIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Helpful Tips:</h4>
                      <ul className="space-y-1">
                        {sleep.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Signals */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Understanding Your Baby&apos;s Communication
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Week two brings clearer communication signals. Learning to read these cues helps meet baby&apos;s needs more effectively.
            </p>
            <div className="space-y-6">
              {communicationSigns.map((signal, index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{signal.signal}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50/60 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 mb-2">Early Signs:</h4>
                      <ul className="space-y-1">
                        {signal.early.map((sign, signIndex) => (
                          <li key={signIndex} className="text-sm text-gray-600">• {sign}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-yellow-50/60 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-700 mb-2">Late Signs:</h4>
                      <ul className="space-y-1">
                        {signal.late.map((sign, signIndex) => (
                          <li key={signIndex} className="text-sm text-gray-600">• {sign}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50/60 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 mb-2">Best Response:</h4>
                      <p className="text-sm text-gray-700">{signal.response}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developmental Milestones */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Week Two Developmental Milestones
            </h2>
            <div className="space-y-6">
              {developmentalMilestones.map((category, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50/60 to-green-50/60 rounded-xl border border-teal-100/40 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-green-700 mb-3">Expected Milestones:</h4>
                      <ul className="space-y-2">
                        {category.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">When to Discuss with Doctor:</h4>
                      <p className="text-sm text-red-600 bg-red-50/60 p-3 rounded-lg">{category.whenToWorry}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Common Week Two Challenges
            </h2>
            <div className="space-y-6">
              {commonChallenges.map((challenge, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50/60 to-yellow-50/60 rounded-xl border border-orange-100/40 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{challenge.challenge}</h3>
                      <p className="text-orange-600 font-medium mb-2">{challenge.timing}</p>
                      <p className="text-gray-600 text-sm mb-4">Duration: {challenge.duration}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Signs to Watch For:</h4>
                      <ul className="space-y-1">
                        {challenge.signs.map((sign, signIndex) => (
                          <li key={signIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Management Strategies:</h4>
                      <ul className="space-y-1">
                        {challenge.management.map((strategy, strategyIndex) => (
                          <li key={strategyIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Care Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Week Two Care Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careTips.map((category, index) => {
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

          {/* Warning Signs */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Warning Signs in Week Two
            </h2>
            <div className="space-y-6">
              {warningSignsWeekTwo.map((category, index) => (
                <div key={index} className="bg-red-50/60 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <ul className="space-y-2">
                        {category.signs.map((sign, signIndex) => (
                          <li key={signIndex} className="text-sm text-red-700 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-100/60 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Action Needed:</h4>
                      <p className="text-sm text-red-700">{category.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Reminders */}
          <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                  Week Two: Building Connections
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-700">
                  <div>
                    <h4 className="font-semibold mb-2">Enjoy the Moments:</h4>
                    <p className="text-sm mb-4">
                      Week two often brings the first real interactions. These early exchanges are the foundation of your lifelong bond.
                    </p>
                    <h4 className="font-semibold mb-2">Trust the Process:</h4>
                    <p className="text-sm">
                      Every baby develops at their own pace. Small daily changes add up to significant growth over time.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Stay Flexible:</h4>
                    <p className="text-sm mb-4">
                      Growth spurts and developmental leaps can temporarily disrupt established patterns. This is normal and temporary.
                    </p>
                    <h4 className="font-semibold mb-2">Seek Support:</h4>
                    <p className="text-sm">
                      Don&apos;t hesitate to ask questions or seek help from healthcare providers, family, or friends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Continue Your Baby&apos;s Journey
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Track your baby&apos;s development and learn what to expect in the coming weeks. 
              Each week brings new milestones and exciting changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/baby"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Track Development
              </Link>
              <Link 
                href="/blog/newborn-first-week-guide"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Previous Week
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}