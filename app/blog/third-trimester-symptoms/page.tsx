import { Metadata } from 'next';
import Link from 'next/link';
import { Baby, Moon, Zap, Heart, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Third Trimester Symptoms: Complete Guide to Weeks 28-40',
  description: 'Comprehensive guide to third trimester pregnancy symptoms including sleep issues, breathing problems, and signs of labor. Learn what to expect weeks 28-40.',
  keywords: 'third trimester symptoms, late pregnancy symptoms, pregnancy week 28-40, signs of labor, third trimester discomfort, pregnancy sleeping problems, pre-labor symptoms',
};

const weeklySymptoms = [
  {
    weeks: "28-32",
    title: "Early Third Trimester",
    keyChanges: [
      "Shortness of breath increases",
      "Heartburn intensifies", 
      "Braxton Hicks contractions begin",
      "Trouble sleeping starts",
      "Frequent urination returns"
    ],
    whatsHappening: "Your growing baby is putting pressure on your diaphragm and other organs. This is when many women start feeling the physical challenges of late pregnancy.",
    tips: [
      "Sleep with extra pillows for support",
      "Eat smaller, more frequent meals",
      "Practice breathing exercises",
      "Stay hydrated but limit fluids before bed"
    ]
  },
  {
    weeks: "33-36", 
    title: "Mid Third Trimester",
    keyChanges: [
      "Increased pelvic pressure",
      "More difficulty finding comfortable positions",
      "Possible leaking of colostrum",
      "Nesting instinct may begin",
      "Joint achiness and back pain"
    ],
    whatsHappening: "Baby is gaining weight rapidly and running out of room. You may feel every movement more intensely and experience new discomforts.",
    tips: [
      "Try prenatal massage for aches",
      "Prepare nursery and baby items",
      "Practice relaxation techniques", 
      "Consider a pregnancy support belt"
    ]
  },
  {
    weeks: "37-40+",
    title: "Full Term & Beyond", 
    keyChanges: [
      "Lightning (baby dropping)",
      "Mucus plug may be lost",
      "More intense Braxton Hicks",
      "Burst of energy or extreme fatigue",
      "Possible water breaking"
    ],
    whatsHappening: "Your body is preparing for labor. Baby is considered full-term and could arrive any day. Watch for signs of true labor versus false labor.",
    tips: [
      "Have hospital bag ready",
      "Know signs of real labor",
      "Try natural methods to encourage labor if overdue",
      "Rest when possible to conserve energy"
    ]
  }
];

const commonSymptoms = [
  {
    symptom: "Shortness of Breath",
    cause: "Baby pressing against diaphragm",
    relief: ["Sleep propped up", "Practice deep breathing", "Avoid overexertion", "Fresh air walks"],
    icon: Zap
  },
  {
    symptom: "Trouble Sleeping",
    cause: "Physical discomfort and frequent urination", 
    relief: ["Pregnancy pillow", "Warm bath before bed", "Relaxation techniques", "Limit screen time"],
    icon: Moon
  },
  {
    symptom: "Heartburn",
    cause: "Stomach compressed by growing uterus",
    relief: ["Small frequent meals", "Avoid spicy/acidic foods", "Don't lie down after eating", "Antacids (doctor approved)"],
    icon: Heart
  },
  {
    symptom: "Swelling (Edema)",
    cause: "Increased blood volume and pressure",
    relief: ["Elevate feet", "Wear compression socks", "Stay hydrated", "Reduce sodium intake"],
    icon: CheckCircle
  },
  {
    symptom: "Back Pain",
    cause: "Weight gain and posture changes",
    relief: ["Prenatal yoga", "Warm compress", "Proper posture", "Supportive shoes"],
    icon: AlertTriangle
  },
  {
    symptom: "Braxton Hicks Contractions",
    cause: "Uterus practicing for labor",
    relief: ["Change positions", "Stay hydrated", "Take warm bath", "Practice breathing"],
    icon: Clock
  }
];

const laborSigns = [
  {
    sign: "Regular Contractions",
    description: "Contractions that get stronger, longer, and closer together over time",
    timing: "Every 5 minutes for 1 hour",
    action: "Time contractions and head to hospital when 5-1-1 (5 min apart, 1 min long, for 1 hour)"
  },
  {
    sign: "Water Breaking",
    description: "Rupture of amniotic sac causing fluid to leak or gush",
    timing: "Can happen gradually or suddenly",
    action: "Contact healthcare provider immediately, even without contractions"
  },
  {
    sign: "Bloody Show",
    description: "Mucus plug mixed with blood as cervix begins to dilate",
    timing: "Can occur days to weeks before labor",
    action: "Normal sign but contact provider if bleeding is heavy"
  },
  {
    sign: "Consistent Lower Back Pain",
    description: "Persistent back pain that doesn&apos;t improve with position changes",
    timing: "May come in waves with contractions",
    action: "Monitor for other labor signs and contact provider"
  }
];

const whenToCallDoctor = [
  "Severe headaches or vision changes",
  "Sudden decrease in baby&apos;s movement",
  "Heavy vaginal bleeding",
  "Severe abdominal pain",
  "Signs of preeclampsia (severe swelling, high blood pressure)",
  "Persistent fever over 100.4°F",
  "Painful urination or signs of infection",
  "Severe shortness of breath or chest pain",
  "Regular contractions before 37 weeks",
  "Sudden gush of fluid (possible water breaking)"
];

export default function ThirdTrimesterSymptoms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Third Trimester Symptoms Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The final stretch of pregnancy brings unique challenges and excitement. 
            Understanding third trimester symptoms helps you prepare for labor and know what to expect.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-r from-purple-50/60 to-pink-50/60 rounded-2xl p-8 mb-12 border border-purple-100/40">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Third Trimester Overview (Weeks 28-40+)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The third trimester is marked by rapid fetal growth and preparation for birth. 
            As your baby gains weight and space becomes limited, you&apos;ll experience new physical 
            challenges alongside the excitement of meeting your baby soon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">28-32</div>
              <div className="text-sm text-gray-600">Early Third Trimester</div>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">33-36</div>
              <div className="text-sm text-gray-600">Pre-Term Preparation</div>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">37-40+</div>
              <div className="text-sm text-gray-600">Full Term & Beyond</div>
            </div>
          </div>
        </div>

        {/* Weekly Symptoms Breakdown */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Symptoms by Pregnancy Stage
          </h2>
          <div className="space-y-8">
            {weeklySymptoms.map((period, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                    Weeks {period.weeks}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{period.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {period.whatsHappening}
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Changes:</h4>
                    <ul className="space-y-2">
                      {period.keyChanges.map((change, changeIndex) => (
                        <li key={changeIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Helpful Tips:</h4>
                    <ul className="space-y-2">
                      {period.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Symptoms & Relief */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Managing Common Third Trimester Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonSymptoms.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.symptom}</h3>
                      <p className="text-sm text-gray-600">{item.cause}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Relief Strategies:</h4>
                    <ul className="space-y-1">
                      {item.relief.map((relief, reliefIndex) => (
                        <li key={reliefIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                          {relief}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Signs of Labor */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Recognizing Signs of Labor
          </h2>
          <div className="space-y-6">
            {laborSigns.map((sign, index) => (
              <div key={index} className="bg-blue-50/60 rounded-xl border border-blue-100/60 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{sign.sign}</h3>
                    <p className="text-gray-600 mb-2">{sign.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-blue-800">Timing: </span>
                        <span className="text-sm text-blue-700">{sign.timing}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-blue-800">What to do: </span>
                        <span className="text-sm text-blue-700">{sign.action}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* When to Call Doctor */}
        <div className="bg-red-50/60 rounded-2xl border border-red-100/60 p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-2">
                When to Contact Your Healthcare Provider
              </h2>
              <p className="text-red-700">
                Call immediately if you experience any of these symptoms:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whenToCallDoctor.map((symptom, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-red-800 font-medium">{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Tips */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Preparing for Baby&apos;s Arrival
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Physical Preparation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Pack hospital bag by 36 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Install and check car seat</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Prepare nursery essentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Practice breathing and relaxation techniques</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Practical Preparation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Finalize birth plan and preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Plan route to hospital/birth center</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Arrange childcare for other children</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Prepare meals for after birth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <Baby className="w-12 h-12 mx-auto mb-4 text-purple-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Track Your Third Trimester Journey
          </h2>
          <p className="text-purple-100 mb-6 leading-relaxed">
            Monitor your symptoms, track baby&apos;s movements, and stay prepared for labor 
            with our comprehensive pregnancy tracker.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            Start Tracking Today
          </Link>
        </div>
      </div>
    </div>
  );
}