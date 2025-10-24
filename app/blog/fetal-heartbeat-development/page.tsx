import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Activity, Stethoscope, TrendingUp, Baby, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fetal Heartbeat Development: Heart Rate Changes Throughout Pregnancy',
  description: 'Complete guide to fetal heart rate development from 6 weeks to birth. Learn normal ranges, when heartbeat starts, and what changes mean.',
  keywords: 'fetal heartbeat, baby heart rate, when does heartbeat start, normal fetal heart rate, heartbeat development pregnancy, fetal heart rate by week',
};

const heartbeatMilestones = [
  {
    week: "5-6",
    milestone: "Heart Formation Begins",
    heartRate: "No detectable beat",
    description: "Heart tube forms and begins to fold into four chambers",
    detection: "Not detectable",
    significance: "Foundation of heart development",
    icon: Heart
  },
  {
    week: "6-7", 
    milestone: "First Heartbeat",
    heartRate: "100-120 bpm",
    description: "Heart starts beating, often detected via transvaginal ultrasound",
    detection: "Transvaginal ultrasound",
    significance: "Major milestone - confirms viable pregnancy",
    icon: Activity
  },
  {
    week: "8-10",
    milestone: "Rapid Heart Development",
    heartRate: "150-170 bpm",
    description: "Heart rate increases rapidly as heart structures mature",
    detection: "Transvaginal & abdominal ultrasound",
    significance: "Heart reaches peak rate for pregnancy",
    icon: TrendingUp
  },
  {
    week: "11-14",
    milestone: "Heart Rate Stabilizes",
    heartRate: "140-170 bpm", 
    description: "Heart rate begins to stabilize at high levels",
    detection: "Doppler may detect, ultrasound clear",
    significance: "Entering second trimester with stable rhythm",
    icon: Stethoscope
  },
  {
    week: "15-20",
    milestone: "Doppler Detection",
    heartRate: "120-160 bpm",
    description: "Heart rate audible with handheld Doppler devices",
    detection: "Handheld Doppler, ultrasound",
    significance: "Can hear baby&apos;s heartbeat at home",
    icon: CheckCircle
  },
  {
    week: "21-30",
    milestone: "Gradual Decrease Begins",
    heartRate: "110-160 bpm",
    description: "Heart rate gradually decreases as nervous system matures",
    detection: "Stethoscope, Doppler, ultrasound",
    significance: "Shows maturing nervous system",
    icon: Activity
  },
  {
    week: "31-40",
    milestone: "Preparing for Birth",
    heartRate: "110-150 bpm",
    description: "Heart rate continues gradual decrease toward birth levels",
    detection: "All methods work well",
    significance: "Heart preparing for life outside womb",
    icon: Baby
  }
];

const detectionMethods = [
  {
    method: "Transvaginal Ultrasound",
    earliest: "6 weeks",
    description: "Most sensitive method for early detection",
    accuracy: "Very high",
    details: [
      "Probe placed in vagina for closer view",
      "Can detect heartbeat earlier than abdominal",
      "Used in early pregnancy and fertility treatments",
      "Most accurate method before 12 weeks"
    ]
  },
  {
    method: "Abdominal Ultrasound", 
    earliest: "8 weeks",
    description: "Standard ultrasound over the belly",
    accuracy: "High",
    details: [
      "Non-invasive external probe",
      "Standard method for routine prenatal care",
      "May require full bladder in early pregnancy",
      "Becomes more reliable after 12 weeks"
    ]
  },
  {
    method: "Handheld Doppler",
    earliest: "10-12 weeks",
    description: "Portable device using sound waves",
    accuracy: "Good",
    details: [
      "Used by healthcare providers and at home",
      "May pick up maternal pulse instead",
      "Requires practice to use effectively",
      "Not always reliable before 12 weeks"
    ]
  },
  {
    method: "Fetoscope/Stethoscope",
    earliest: "18-20 weeks",
    description: "Traditional listening device",
    accuracy: "Moderate",
    details: [
      "Manual listening method",
      "Requires quiet environment",
      "Baby's position affects ability to hear",
      "More reliable after 20 weeks"
    ]
  }
];

const normalRangesByTrimester = [
  {
    trimester: "First Trimester",
    weeks: "6-12 weeks",
    range: "120-170 bpm",
    average: "150 bpm",
    characteristics: [
      "Rapid increase from initial beat",
      "Peaks around 9-10 weeks",
      "Higher than later in pregnancy",
      "Shows vigorous development"
    ]
  },
  {
    trimester: "Second Trimester",
    weeks: "13-27 weeks", 
    range: "110-160 bpm",
    average: "140 bpm",
    characteristics: [
      "Gradual decrease from first trimester peak",
      "More consistent and regular",
      "Easier to detect with various methods",
      "Shows maturing nervous system"
    ]
  },
  {
    trimester: "Third Trimester",
    weeks: "28-40 weeks",
    range: "110-150 bpm",
    average: "135 bpm", 
    characteristics: [
      "Continues gradual decrease",
      "Shows increasing nervous system control",
      "May vary with baby&apos;s activity level",
      "Preparing for newborn heart rate"
    ]
  }
];

const factorsAffectingHeartRate = [
  {
    factor: "Gestational Age",
    effect: "Heart rate decreases as pregnancy progresses",
    explanation: "Nervous system maturation leads to slower, more controlled heart rate"
  },
  {
    factor: "Fetal Activity",
    effect: "Heart rate increases during movement",
    explanation: "Active babies have higher heart rates, sleeping babies have lower rates"
  },
  {
    factor: "Maternal Activity",
    effect: "Can temporarily affect fetal heart rate",
    explanation: "Maternal exercise or stress may cause temporary changes"
  },
  {
    factor: "Time of Day",
    effect: "May vary throughout the day",
    explanation: "Babies have activity cycles that affect heart rate patterns"
  },
  {
    factor: "Maternal Position",
    effect: "Position can affect blood flow and heart rate",
    explanation: "Lying on back may reduce blood flow and affect baby&apos;s heart rate"
  },
  {
    factor: "External Stimuli",
    effect: "Sounds or movement may increase heart rate",
    explanation: "Babies respond to external stimulation with increased activity"
  }
];

const concerningSigns = [
  {
    sign: "No Heartbeat at 7+ Weeks",
    description: "No detectable heartbeat after 7 weeks gestation",
    urgency: "high",
    action: "Contact healthcare provider immediately for follow-up ultrasound"
  },
  {
    sign: "Heart Rate Below 100 bpm",
    description: "Consistently slow heart rate (bradycardia)",
    urgency: "high", 
    action: "Requires immediate medical evaluation"
  },
  {
    sign: "Heart Rate Above 180 bpm",
    description: "Consistently fast heart rate (tachycardia)",
    urgency: "medium",
    action: "Monitor closely, may require medical assessment"
  },
  {
    sign: "Irregular Rhythm",
    description: "Heart rate that skips beats or has irregular pattern",
    urgency: "medium",
    action: "Discuss with healthcare provider at next visit"
  },
  {
    sign: "Sudden Heart Rate Changes",
    description: "Dramatic changes in heart rate patterns",
    urgency: "medium",
    action: "Monitor and report to healthcare provider"
  }
];

const commonMyths = [
  {
    myth: "Heart rate can predict baby&apos;s gender",
    reality: "No scientific evidence supports heart rate gender prediction",
    icon: CheckCircle
  },
  {
    myth: "Faster heart rate means a healthier baby",
    reality: "Heart rate varies normally and doesn&apos;t indicate baby&apos;s health alone",
    icon: CheckCircle
  },
  {
    myth: "You should hear heartbeat at 8 weeks with Doppler",
    reality: "Doppler detection usually isn&apos;t reliable until 10-12 weeks",
    icon: CheckCircle
  },
  {
    myth: "Missing a heartbeat one day means problems",
    reality: "Baby's position or equipment issues can affect detection",
    icon: CheckCircle
  },
  {
    myth: "Heart rate should be exactly 140 bpm",
    reality: "Normal range is wide (110-160 bpm) and varies by individual",
    icon: CheckCircle
  }
];

const homeMonitoringTips = [
  {
    tip: "Best Time to Listen",
    description: "Try when baby is active, usually after meals or in evening",
    icon: Activity
  },
  {
    tip: "Proper Positioning",
    description: "Lie down comfortably, apply gel, and move Doppler slowly",
    icon: Stethoscope
  },
  {
    tip: "Distinguish from Your Heartbeat", 
    description: "Baby's heart rate is much faster than yours (usually 120+ bpm)",
    icon: Activity
  },
  {
    tip: "Don't Panic if Not Found",
    description: "Baby's position, placenta location, or equipment can affect detection",
    icon: Heart
  },
  {
    tip: "Limit Session Length",
    description: "Keep Doppler sessions short (5-10 minutes) to avoid overheating",
    icon: AlertTriangle
  },
  {
    tip: "When to Call Doctor",
    description: "If unable to find heartbeat when usually can, or if concerned",
    icon: CheckCircle
  }
];

const developmentalSignificance = [
  {
    stage: "Early Development (6-10 weeks)",
    significance: [
      "Confirms pregnancy viability",
      "Indicates proper neural tube development", 
      "Shows heart chamber formation",
      "Rapid rate shows vigorous growth"
    ]
  },
  {
    stage: "Mid-Development (11-20 weeks)",
    significance: [
      "Heart structures nearly complete",
      "Blood circulation well-established",
      "Nervous system beginning to regulate",
      "Can detect some heart defects"
    ]
  },
  {
    stage: "Late Development (21-40 weeks)",
    significance: [
      "Fine-tuning of heart function",
      "Preparation for breathing at birth",
      "Nervous system fully regulating heart",
      "Heart ready for extrauterine life"
    ]
  }
];

export default function FetalHeartbeatDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Fetal Heartbeat Development
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A comprehensive guide to your baby&apos;s heart development from the first beat at 6 weeks 
            through birth. Understanding normal heart rates, detection methods, and what changes mean.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-r from-pink-50/60 to-red-50/60 rounded-2xl p-8 mb-12 border border-pink-100/40">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            The Journey of Baby&apos;s First Heartbeat
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your baby&apos;s heart is one of the first organs to develop and function. The heartbeat is often 
            the first sign of life that parents experience, creating a profound emotional connection. 
            Understanding how the heart develops and what heart rate patterns mean can help you appreciate 
            this incredible journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pink-600">6 weeks</div>
              <div className="text-sm text-gray-600">First heartbeat</div>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pink-600">150 bpm</div>
              <div className="text-sm text-gray-600">Average early rate</div>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pink-600">135 bpm</div>
              <div className="text-sm text-gray-600">Average at birth</div>
            </div>
          </div>
        </div>

        {/* Heartbeat Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Heartbeat Development Timeline
          </h2>
          <div className="space-y-8">
            {heartbeatMilestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-pink-100 to-red-100 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-gray-800">{milestone.milestone}</h3>
                        <div className="px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-sm font-semibold">
                          Week {milestone.week}
                        </div>
                        <div className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-semibold">
                          {milestone.heartRate}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Detection Method:</h4>
                      <p className="text-gray-700">{milestone.detection}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Significance:</h4>
                      <p className="text-gray-700">{milestone.significance}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Normal Ranges by Trimester */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Normal Heart Rate Ranges by Trimester
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {normalRangesByTrimester.map((trimester, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{trimester.trimester}</h3>
                <div className="text-center mb-4">
                  <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-2">
                    {trimester.weeks}
                  </div>
                  <div className="text-2xl font-bold text-pink-600 mb-1">{trimester.range}</div>
                  <div className="text-sm text-gray-600">Average: {trimester.average}</div>
                </div>
                <ul className="space-y-2">
                  {trimester.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Detection Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Methods for Detecting Fetal Heartbeat
          </h2>
          <div className="space-y-6">
            {detectionMethods.map((method, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold flex-shrink-0">
                    From {method.earliest}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.method}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium inline-block">
                      {method.accuracy} accuracy
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Details:</h4>
                  <ul className="space-y-2">
                    {method.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factors Affecting Heart Rate */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Factors That Affect Fetal Heart Rate
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Many normal factors can cause variations in your baby&apos;s heart rate. Understanding these 
            can help you interpret what you hear and when to be concerned.
          </p>
          <div className="space-y-4">
            {factorsAffectingHeartRate.map((factor, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{factor.factor}</h3>
                    <p className="text-gray-600 mb-2"><strong>Effect:</strong> {factor.effect}</p>
                    <p className="text-gray-700 text-sm">{factor.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developmental Significance */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            What Heartbeat Development Tells Us
          </h2>
          <div className="space-y-6">
            {developmentalSignificance.map((stage, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{stage.stage}</h3>
                <ul className="space-y-3">
                  {stage.significance.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            When to Be Concerned
          </h2>
          <div className="bg-yellow-50/60 rounded-xl border border-yellow-100/60 p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-yellow-700">
                  These signs warrant medical attention, but remember that heart rate naturally varies. 
                  When in doubt, always contact your healthcare provider.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {concerningSigns.map((sign, index) => (
              <div key={index} className={`rounded-xl border p-6 ${
                sign.urgency === 'high' 
                  ? 'bg-red-50/60 border-red-100/60' 
                  : 'bg-orange-50/60 border-orange-100/60'
              }`}>
                <div className="flex items-start gap-4">
                  <AlertTriangle className={`w-6 h-6 flex-shrink-0 mt-1 ${
                    sign.urgency === 'high' ? 'text-red-600' : 'text-orange-600'
                  }`} />
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      sign.urgency === 'high' ? 'text-red-800' : 'text-orange-800'
                    }`}>
                      {sign.sign}
                    </h3>
                    <p className={`mb-2 ${
                      sign.urgency === 'high' ? 'text-red-700' : 'text-orange-700'
                    }`}>
                      {sign.description}
                    </p>
                    <p className={`text-sm font-medium ${
                      sign.urgency === 'high' ? 'text-red-800' : 'text-orange-800'
                    }`}>
                      Action: {sign.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Myths */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Common Myths About Fetal Heart Rate
          </h2>
          <div className="space-y-4">
            {commonMyths.map((myth, index) => {
              const IconComponent = myth.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4">
                    <IconComponent className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Myth: &ldquo;{myth.myth}&rdquo;</h3>
                      <p className="text-gray-600"><strong>Reality:</strong> {myth.reality}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Home Monitoring Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Home Heart Rate Monitoring Tips
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            If you have a home Doppler device, these tips can help you use it safely and effectively:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeMonitoringTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.tip}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety Note */}
        <div className="bg-blue-50/60 rounded-2xl border border-blue-100/60 p-8 mb-12">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Professional Monitoring is Key
              </h2>
              <p className="text-blue-700 mb-4">
                While home monitoring can be enjoyable, it should never replace professional prenatal care. 
                Your healthcare provider uses specialized equipment and has the expertise to properly 
                interpret heart rate patterns and identify any concerns.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Attend all scheduled prenatal appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Report any concerns to your healthcare provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Use home monitoring as a bonding tool, not a diagnostic tool</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-8 text-white">
          <Heart className="w-12 h-12 mx-auto mb-4 text-pink-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Track Your Baby&apos;s Development
          </h2>
          <p className="text-pink-100 mb-6 leading-relaxed">
            Monitor your pregnancy milestones and track your baby&apos;s heart development journey 
            with our comprehensive pregnancy tracker. Record heartbeat detections and share 
            the joy with family.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Start Tracking Your Pregnancy
          </Link>
        </div>
      </div>
    </div>
  );
}