import { Metadata } from 'next';
import Link from 'next/link';
import { Baby, Heart, Calendar, Stethoscope, Moon, Zap, CheckCircle, AlertTriangle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Baby Gender Predictor Methods: Scientific vs Traditional Ways to Predict Gender',
  description: 'Comprehensive guide to baby gender prediction methods including medical tests, old wives tales, and fun prediction techniques. Learn accuracy rates and when to find out.',
  keywords: 'baby gender predictor, gender prediction methods, baby boy or girl, ultrasound gender, Chinese gender calendar, gender reveal, pregnancy gender test',
};

const medicalMethods = [
  {
    method: "Ultrasound",
    accuracy: "95-99%",
    timing: "18-22 weeks",
    description: "The most common and reliable method used during routine prenatal checkups",
    howItWorks: "Ultrasound technician examines baby's genital development to determine sex",
    pros: ["Highly accurate", "Safe and non-invasive", "Part of routine care", "Can see baby's development"],
    cons: ["Baby position can obscure view", "Not 100% accurate before 18 weeks", "Requires medical appointment"],
    icon: Stethoscope
  },
  {
    method: "Cell-Free DNA Testing (NIPT)",
    accuracy: "99%+",
    timing: "9-10 weeks",
    description: "Blood test that analyzes fetal DNA circulating in mother's bloodstream",
    howItWorks: "Detects Y chromosome presence to determine if baby is male or female",
    pros: ["Extremely accurate", "Can be done early", "Also screens for genetic conditions", "Simple blood test"],
    cons: ["More expensive", "Not always covered by insurance", "Requires medical prescription"],
    icon: Heart
  },
  {
    method: "Amniocentesis",
    accuracy: "100%",
    timing: "15-20 weeks",
    description: "Invasive diagnostic test usually done for genetic screening",
    howItWorks: "Analyzes fetal cells from amniotic fluid to determine chromosomal makeup",
    pros: ["100% accurate", "Provides comprehensive genetic information", "Can detect genetic disorders"],
    cons: ["Invasive procedure", "Small risk of miscarriage", "Only done for medical reasons", "Not routine"],
    icon: AlertTriangle
  },
  {
    method: "Chorionic Villus Sampling (CVS)",
    accuracy: "100%",
    timing: "10-13 weeks",
    description: "Early diagnostic test that samples placental tissue",
    howItWorks: "Analyzes chromosomes from placental cells to determine baby's sex",
    pros: ["100% accurate", "Earlier than amniocentesis", "Comprehensive genetic screening"],
    cons: ["Invasive procedure", "Small risk of miscarriage", "Only done for medical reasons", "Not for gender alone"],
    icon: AlertTriangle
  }
];

const traditionalMethods = [
  {
    method: "Chinese Gender Calendar",
    accuracy: "50%",
    description: "Ancient chart based on mother's age and conception month",
    howItWorks: "Uses lunar calendar to predict gender based on maternal age and month of conception",
    funFactor: "High - centuries-old tradition",
    icon: Calendar
  },
  {
    method: "Heart Rate Theory",
    accuracy: "50%",
    description: "Claims baby's heart rate indicates gender",
    howItWorks: "Theory: over 140 bpm = girl, under 140 bpm = boy",
    funFactor: "Medium - easy to check during appointments",
    icon: Heart
  },
  {
    method: "Belly Shape",
    accuracy: "50%",
    description: "High and round vs low and wide belly shapes",
    howItWorks: "High/round belly = girl, low/wide belly = boy (according to folklore)",
    funFactor: "High - everyone has an opinion",
    icon: Baby
  },
  {
    method: "Morning Sickness Severity",
    accuracy: "50%",
    description: "Severe morning sickness supposedly indicates a girl",
    howItWorks: "Theory: higher hormone levels with girls cause more nausea",
    funFactor: "Low - not fun when you're nauseous",
    icon: Moon
  },
  {
    method: "Skin and Hair Changes",
    accuracy: "50%",
    description: "Pregnancy glow vs skin problems",
    howItWorks: "Girls 'steal mother's beauty' while boys give a 'glow'",
    funFactor: "Medium - observable changes",
    icon: Star
  },
  {
    method: "Food Cravings",
    accuracy: "50%",
    description: "Sweet vs salty/sour cravings",
    howItWorks: "Sweet cravings = girl, salty/sour cravings = boy",
    funFactor: "High - fun to track cravings",
    icon: Zap
  }
];

const timeline = [
  {
    weeks: "6-8",
    milestone: "Genital Development Begins",
    details: "External genitals start forming but look identical for boys and girls",
    canDetermine: false
  },
  {
    weeks: "9-10",
    milestone: "NIPT Available",
    details: "Cell-free DNA testing can determine gender with 99%+ accuracy",
    canDetermine: true,
    method: "Blood test"
  },
  {
    weeks: "11-13",
    milestone: "Early Ultrasound Clues",
    details: "Experienced technicians may see early signs, but not definitive",
    canDetermine: false
  },
  {
    weeks: "15-16",
    milestone: "Genitals More Defined",
    details: "External genitals become more distinguishable but still developing",
    canDetermine: false
  },
  {
    weeks: "18-22",
    milestone: "Anatomy Scan",
    details: "Standard ultrasound appointment where gender is typically revealed",
    canDetermine: true,
    method: "Ultrasound"
  },
  {
    weeks: "24+",
    milestone: "Clear Identification",
    details: "Gender is clearly visible on ultrasound unless baby is in difficult position",
    canDetermine: true,
    method: "Ultrasound"
  }
];

const mythBusters = [
  {
    myth: "You can tell gender by how you carry",
    reality: "Belly shape is determined by baby's position, your body type, and muscle tone - not gender",
    verdict: "FALSE"
  },
  {
    myth: "Severe morning sickness means it's a girl",
    reality: "Morning sickness severity varies greatly and isn't reliably linked to gender",
    verdict: "FALSE"
  },
  {
    myth: "Heart rate over 140 means girl",
    reality: "Fetal heart rate changes throughout pregnancy and isn't gender-specific",
    verdict: "FALSE"
  },
  {
    myth: "Craving sweets means girl, salty means boy",
    reality: "Cravings are influenced by nutritional needs and personal preferences, not gender",
    verdict: "FALSE"
  },
  {
    myth: "The ring test works",
    reality: "Pendulum movements are caused by tiny hand movements, not baby's gender",
    verdict: "FALSE"
  }
];

export default function BabyGenderPredictorMethods() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Baby Gender Predictor Methods
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover all the ways to predict your baby&apos;s gender, from accurate medical tests 
            to fun traditional methods. Learn what works, what doesn&apos;t, and when you can find out.
          </p>
        </div>

        {/* CTA for Gender Predictor Tool */}
        <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl p-8 text-white mb-12">
          <div className="text-center">
            <Baby className="w-12 h-12 mx-auto mb-4 text-blue-100" />
            <h2 className="text-2xl font-semibold mb-4">
              Try Our Interactive Gender Predictor
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Use multiple prediction methods together and see what they suggest about your baby&apos;s gender. 
              Just for fun - remember, only medical tests are accurate!
            </p>
            <Link 
              href="/gender-predictor"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Try Gender Predictor Tool
            </Link>
          </div>
        </div>

        {/* Medical Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Medical Gender Prediction Methods
          </h2>
          <div className="space-y-8">
            {medicalMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-green-100 to-blue-100 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-gray-800">{method.method}</h3>
                        <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                          {method.accuracy} accurate
                        </div>
                        <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                          {method.timing}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                      <p className="text-gray-700 mb-6"><strong>How it works:</strong> {method.howItWorks}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Pros:</h4>
                      <ul className="space-y-2">
                        {method.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Cons:</h4>
                      <ul className="space-y-2">
                        {method.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Gender Determination Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((stage, index) => (
              <div key={index} className={`rounded-xl border p-6 ${
                stage.canDetermine 
                  ? 'bg-green-50/60 border-green-100/60' 
                  : 'bg-gray-50/60 border-gray-100/60'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${
                    stage.canDetermine ? 'bg-green-500' : 'bg-gray-400'
                  }`}>
                    {stage.weeks}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{stage.milestone}</h3>
                      {stage.canDetermine && (
                        <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                          Can Determine
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{stage.details}</p>
                    {stage.method && (
                      <p className="text-sm text-green-700 font-medium">Method: {stage.method}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Traditional & Fun Prediction Methods
          </h2>
          <div className="bg-yellow-50/60 rounded-xl border border-yellow-100/60 p-6 mb-8">
            <div className="flex items-start gap-4">
              <Star className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Just for Fun!</h3>
                <p className="text-yellow-700">
                  These methods are entertaining but have no scientific basis. They&apos;re essentially 50/50 guesses - 
                  perfect for baby shower games and family fun, but don&apos;t rely on them for accuracy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditionalMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100">
                      <IconComponent className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{method.method}</h3>
                      <div className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium inline-block mt-1">
                        ~{method.accuracy} accurate
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="text-sm text-gray-700 mb-3"><strong>How it works:</strong> {method.howItWorks}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-800">Fun Factor:</span>
                    <span className="text-sm text-yellow-600">{method.funFactor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Myth Busters */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Gender Prediction Myth Busters
          </h2>
          <div className="space-y-4">
            {mythBusters.map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <div className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-bold flex-shrink-0 mt-1">
                    {item.verdict}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">&ldquo;{item.myth}&rdquo;</h3>
                    <p className="text-gray-600">{item.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* When to Find Out */}
        <div className="bg-blue-50/60 rounded-2xl border border-blue-100/60 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            When Can You Find Out Baby&apos;s Gender?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                9-10
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Weeks 9-10</h3>
              <p className="text-sm text-gray-600">NIPT blood test available (99%+ accurate)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                18-22
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Weeks 18-22</h3>
              <p className="text-sm text-gray-600">Standard ultrasound anatomy scan (95-99% accurate)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                24+
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Week 24+</h3>
              <p className="text-sm text-gray-600">Gender clearly visible on ultrasound</p>
            </div>
          </div>
        </div>

        {/* Tips for Gender Reveal */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Planning Your Gender Reveal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">If You Want to Know</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Ask your ultrasound technician during anatomy scan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Consider NIPT if you want to know earlier</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Plan a fun reveal party for family and friends</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Have backup appointment if baby isn&apos;t cooperative</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Team Green (Waiting Until Birth)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Tell your healthcare team you don&apos;t want to know</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Ask them to avoid mentioning pronouns during scans</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Choose gender-neutral nursery themes and clothes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Prepare for the ultimate surprise at delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl p-8 text-white">
          <Baby className="w-12 h-12 mx-auto mb-4 text-blue-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Track Your Pregnancy Journey
          </h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Whether you find out the gender early or wait for the big surprise, 
            track your pregnancy milestones with our comprehensive pregnancy tracker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/gender-predictor"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Try Gender Predictor
            </Link>
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Tracking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}