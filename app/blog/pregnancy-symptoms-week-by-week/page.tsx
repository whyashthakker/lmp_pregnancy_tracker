import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, AlertCircle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pregnancy Symptoms Week by Week: Complete Guide 2025',
  description: 'Comprehensive guide to pregnancy symptoms week by week. Track normal symptoms, warning signs, and what to expect during each trimester of pregnancy.',
  keywords: 'pregnancy symptoms week by week, pregnancy symptoms by trimester, early pregnancy symptoms, third trimester symptoms, pregnancy warning signs, normal pregnancy symptoms',
};

const symptomsByWeek = [
  {
    weeks: "1-4",
    trimester: "First",
    commonSymptoms: [
      "Missed period",
      "Implantation bleeding", 
      "Mild cramping",
      "Breast tenderness",
      "Fatigue"
    ],
    description: "Early pregnancy symptoms often mimic PMS. Many women don't realize they're pregnant yet."
  },
  {
    weeks: "5-8", 
    trimester: "First",
    commonSymptoms: [
      "Morning sickness",
      "Frequent urination",
      "Food aversions/cravings",
      "Mood swings",
      "Heightened sense of smell"
    ],
    description: "Morning sickness peaks during this period. HCG levels are rising rapidly."
  },
  {
    weeks: "9-12",
    trimester: "First", 
    commonSymptoms: [
      "Continued nausea",
      "Visible body changes",
      "Heartburn beginning",
      "Constipation",
      "Increased vaginal discharge"
    ],
    description: "The end of first trimester approaches. Many women start feeling relief from nausea."
  },
  {
    weeks: "13-16",
    trimester: "Second",
    commonSymptoms: [
      "Increased energy",
      "Decreased nausea", 
      "Visible baby bump",
      "Round ligament pain",
      "Glowing skin"
    ],
    description: "The 'golden period' of pregnancy begins. Most women feel their best during this time."
  },
  {
    weeks: "17-20",
    trimester: "Second",
    commonSymptoms: [
      "First baby movements",
      "Backaches",
      "Stretch marks appearing",
      "Increased appetite",
      "Nasal congestion"
    ],
    description: "Quickening (first movements) typically occurs. Your body is visibly changing."
  },
  {
    weeks: "21-24",
    trimester: "Second",
    commonSymptoms: [
      "Stronger baby movements",
      "Braxton Hicks contractions",
      "Swelling in feet/ankles",
      "Heartburn increase",
      "Leg cramps"
    ],
    description: "Baby movements become more pronounced. Prepare for regular prenatal checkups."
  },
  {
    weeks: "25-28",
    trimester: "Third",
    commonSymptoms: [
      "Shortness of breath",
      "Trouble sleeping",
      "Increased urination",
      "Restless leg syndrome",
      "Hemorrhoids"
    ],
    description: "Third trimester begins. Your growing baby puts pressure on internal organs."
  },
  {
    weeks: "29-32",
    trimester: "Third",
    commonSymptoms: [
      "Difficulty finding comfortable positions",
      "Increased swelling",
      "Colostrum leaking",
      "Practice contractions",
      "Pelvic pressure"
    ],
    description: "Baby's movements may feel different as space becomes limited in the womb."
  },
  {
    weeks: "33-36",
    trimester: "Third",
    commonSymptoms: [
      "Increased pelvic pressure",
      "More frequent Braxton Hicks",
      "Difficulty sleeping",
      "Nesting instinct",
      "Joint achiness"
    ],
    description: "Pre-term labor signs become important to monitor. Baby is almost ready."
  },
  {
    weeks: "37-40+",
    trimester: "Third",
    commonSymptoms: [
      "Lightning (baby dropping)",
      "Mucus plug loss",
      "Water breaking",
      "Regular contractions",
      "Extreme fatigue or energy bursts"
    ],
    description: "Full term! Labor could begin any time. Watch for signs of true labor."
  }
];

const warningSymptoms = [
  "Severe headaches that don't go away",
  "Persistent vomiting (hyperemesis gravidarum)",
  "Severe abdominal pain",
  "Heavy bleeding",
  "Signs of preeclampsia (high blood pressure, protein in urine)",
  "Decreased fetal movement after 28 weeks",
  "Severe swelling in face and hands",
  "Painful urination or signs of UTI",
  "Severe dizziness or fainting",
  "Persistent fever over 100.4°F"
];

export default function PregnancySymptomsWeekByWeek() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Pregnancy Symptoms Week by Week
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Understanding what to expect during each week of pregnancy helps you feel prepared and confident. 
            Track normal symptoms and know when to contact your healthcare provider.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-2xl p-8 mb-12 border border-pink-100/40">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Every Pregnancy is Unique
          </h2>
          <p className="text-gray-600 leading-relaxed">
            While this guide covers common symptoms experienced during pregnancy, remember that every woman&apos;s 
            experience is different. Some may have mild symptoms, others more pronounced ones. Always consult 
            with your healthcare provider about any concerns or unusual symptoms.
          </p>
        </div>

        {/* Symptoms by Week */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Symptoms by Pregnancy Stage</h2>
          <div className="space-y-8">
            {symptomsByWeek.map((period, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    period.trimester === 'First' ? 'bg-green-100 text-green-700' :
                    period.trimester === 'Second' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {period.trimester} Trimester
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-lg font-semibold text-gray-800">Weeks {period.weeks}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {period.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Common Symptoms:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {period.commonSymptoms.map((symptom, symptomIndex) => (
                      <div key={symptomIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-red-50/60 rounded-2xl border border-red-100/60 p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-2">
                When to Contact Your Doctor Immediately
              </h2>
              <p className="text-red-700">
                These symptoms require immediate medical attention and should never be ignored:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSymptoms.map((symptom, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-red-800 font-medium">{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Managing Pregnancy Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Natural Relief Methods</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Gentle exercise like walking or prenatal yoga</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Small, frequent meals to combat nausea</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Staying hydrated throughout the day</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Getting adequate rest and sleep</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">When to Seek Help</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Symptoms interfere with daily activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Persistent vomiting leads to dehydration</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Unusual or concerning changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Any symptoms causing significant worry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Track Your Pregnancy Journey
          </h2>
          <p className="text-pink-100 mb-6 leading-relaxed">
            Use our pregnancy tracker to monitor your symptoms, track baby&apos;s development, 
            and stay informed about what to expect each week.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Start Tracking Now
          </Link>
        </div>
      </div>
    </div>
  );
}