import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Phone, Clock, Heart, Baby, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bleeding During Pregnancy: When to Worry and When to Seek Help',
  description: 'Complete guide to pregnancy bleeding by trimester. Learn about spotting vs bleeding, emergency signs, and when to contact your doctor immediately.',
  keywords: 'bleeding during pregnancy, pregnancy spotting, first trimester bleeding, implantation bleeding, miscarriage signs, pregnancy emergency, vaginal bleeding pregnancy',
};

const firstTrimesterBleeding = [
  {
    type: "Implantation Bleeding",
    timing: "6-12 days after conception",
    description: "Light spotting when embryo attaches to uterine lining",
    characteristics: ["Very light, pink or brown", "Lasts 1-3 days", "No clots", "Lighter than period"],
    urgency: "low",
    action: "Monitor, mention at next appointment",
    icon: CheckCircle
  },
  {
    type: "Spotting After Sex or Exam",
    timing: "After intercourse or pelvic exam",
    description: "Light bleeding due to increased blood flow to cervix",
    characteristics: ["Light pink or brown", "Stops within hours", "No cramping", "Small amount"],
    urgency: "low",
    action: "Normal, no immediate action needed",
    icon: CheckCircle
  },
  {
    type: "Threatened Miscarriage",
    timing: "Before 20 weeks",
    description: "Bleeding with closed cervix, pregnancy may continue",
    characteristics: ["Light to moderate bleeding", "Mild cramping", "Cervix remains closed", "HCG levels may be normal"],
    urgency: "medium",
    action: "Contact doctor within 24 hours",
    icon: AlertTriangle
  },
  {
    type: "Inevitable Miscarriage",
    timing: "Before 20 weeks",
    description: "Heavy bleeding with open cervix, miscarriage will occur",
    characteristics: ["Heavy bleeding with clots", "Severe cramping", "Open cervix", "Tissue may pass"],
    urgency: "high",
    action: "Seek immediate medical attention",
    icon: XCircle
  },
  {
    type: "Ectopic Pregnancy",
    timing: "6-10 weeks",
    description: "Embryo implants outside uterus, medical emergency",
    characteristics: ["Light to heavy bleeding", "Severe one-sided pain", "Shoulder pain", "Dizziness or fainting"],
    urgency: "emergency",
    action: "Call emergency services immediately",
    icon: Phone
  }
];

const secondTrimesterBleeding = [
  {
    type: "Cervical Changes",
    timing: "13-27 weeks",
    description: "Spotting from sensitive cervical tissue",
    characteristics: ["Light spotting", "After sex or exercise", "Pink or brown color", "No pain"],
    urgency: "low",
    action: "Mention at next appointment",
    icon: CheckCircle
  },
  {
    type: "Placental Issues",
    timing: "After 20 weeks",
    description: "Problems with placenta position or attachment",
    characteristics: ["Painless bright red bleeding", "May be heavy", "No contractions", "Baby movement normal"],
    urgency: "high",
    action: "Go to hospital immediately",
    icon: XCircle
  },
  {
    type: "Incompetent Cervix",
    timing: "14-24 weeks",
    description: "Cervix opens too early without contractions",
    characteristics: ["Pink or brown discharge", "Feeling of pressure", "Back pain", "No contractions initially"],
    urgency: "high",
    action: "Contact doctor immediately",
    icon: AlertTriangle
  },
  {
    type: "Late Miscarriage",
    timing: "12-20 weeks",
    description: "Pregnancy loss in second trimester",
    characteristics: ["Heavy bleeding with clots", "Strong cramping", "Contractions", "Tissue passage"],
    urgency: "emergency",
    action: "Seek immediate medical care",
    icon: Phone
  }
];

const thirdTrimesterBleeding = [
  {
    type: "Bloody Show",
    timing: "Near term (37+ weeks)",
    description: "Normal sign of approaching labor",
    characteristics: ["Mucus with blood streaks", "Pink or brown", "Small amount", "May occur with mucus plug loss"],
    urgency: "low",
    action: "Normal, labor may start soon",
    icon: CheckCircle
  },
  {
    type: "Placenta Previa",
    timing: "After 28 weeks",
    description: "Placenta covers cervix partially or completely",
    characteristics: ["Painless bright red bleeding", "Can be heavy", "No contractions", "May stop and restart"],
    urgency: "high",
    action: "Go to hospital immediately",
    icon: XCircle
  },
  {
    type: "Placental Abruption",
    timing: "After 20 weeks",
    description: "Placenta separates from uterine wall early",
    characteristics: ["Heavy bleeding (may be hidden)", "Severe abdominal pain", "Rigid, tender uterus", "Contractions"],
    urgency: "emergency",
    action: "Call emergency services now",
    icon: Phone
  },
  {
    type: "Vasa Previa",
    timing: "Near delivery",
    description: "Fetal blood vessels cross cervix",
    characteristics: ["Bleeding when water breaks", "May be associated with rupture of membranes", "Fetal heart rate changes"],
    urgency: "emergency",
    action: "Emergency cesarean needed",
    icon: Phone
  }
];

const warningSignsEmergency = [
  "Heavy bleeding (soaking a pad in an hour)",
  "Severe abdominal or pelvic pain",
  "Severe shoulder pain",
  "Dizziness, fainting, or weakness",
  "Fever with bleeding",
  "Gush of fluid with bleeding",
  "Contractions with bleeding before 37 weeks",
  "No fetal movement for several hours (after 20 weeks)",
  "Signs of shock (pale, rapid pulse, sweating)"
];

const whenToCallDoctor = [
  "Any bleeding in first trimester",
  "Bleeding heavier than spotting at any time",
  "Bleeding with cramping or pain",
  "Bleeding after 20 weeks",
  "Bleeding with tissue passage",
  "Bleeding with decreased fetal movement",
  "Any bleeding that concerns you"
];

const preventionTips = [
  {
    tip: "Avoid Heavy Lifting",
    description: "Don't lift objects over 20-25 pounds",
    icon: AlertTriangle
  },
  {
    tip: "Stay Hydrated",
    description: "Drink plenty of water to prevent dehydration",
    icon: Heart
  },
  {
    tip: "Take Prenatal Vitamins",
    description: "Ensure adequate nutrition for healthy pregnancy",
    icon: CheckCircle
  },
  {
    tip: "Avoid Smoking and Alcohol",
    description: "These increase risk of placental problems",
    icon: XCircle
  },
  {
    tip: "Manage Chronic Conditions",
    description: "Control diabetes, hypertension, and other conditions",
    icon: Heart
  },
  {
    tip: "Gentle Exercise Only",
    description: "Avoid high-impact activities and contact sports",
    icon: CheckCircle
  }
];

const urgencyLevels = {
  low: {
    color: "green",
    title: "Monitor & Mention",
    description: "Likely normal, discuss at next appointment"
  },
  medium: {
    color: "yellow", 
    title: "Contact Doctor",
    description: "Call within 24 hours or sooner"
  },
  high: {
    color: "orange",
    title: "Seek Care Today",
    description: "Go to hospital or urgent care immediately"
  },
  emergency: {
    color: "red",
    title: "Emergency",
    description: "Call 911 or emergency services now"
  }
};

function UrgencyBadge({ level }: { level: keyof typeof urgencyLevels }) {
  const config = urgencyLevels[level];
  const colorClasses = {
    green: "bg-green-100 text-green-800 border-green-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200", 
    orange: "bg-orange-100 text-orange-800 border-orange-200",
    red: "bg-red-100 text-red-800 border-red-200"
  };
  
  return (
    <div className={`px-3 py-1 rounded-full text-sm font-semibold border ${colorClasses[config.color]}`}>
      {config.title}
    </div>
  );
}

function BleedingCard({ bleeding, trimester }: { bleeding: any, trimester: string }) {
  const IconComponent = bleeding.icon;
  
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-full flex-shrink-0 ${
          bleeding.urgency === 'emergency' || bleeding.urgency === 'high' 
            ? 'bg-red-100' 
            : bleeding.urgency === 'medium'
            ? 'bg-yellow-100'
            : 'bg-green-100'
        }`}>
          <IconComponent className={`w-6 h-6 ${
            bleeding.urgency === 'emergency' || bleeding.urgency === 'high' 
              ? 'text-red-600' 
              : bleeding.urgency === 'medium'
              ? 'text-yellow-600'
              : 'text-green-600'
          }`} />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{bleeding.type}</h3>
            <UrgencyBadge level={bleeding.urgency as keyof typeof urgencyLevels} />
          </div>
          <p className="text-sm text-gray-600 mb-3">{bleeding.timing}</p>
          <p className="text-gray-700 mb-4">{bleeding.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            {bleeding.characteristics.map((char: string, index: number) => (
              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                {char}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">What to do:</h4>
          <p className={`text-sm font-medium ${
            bleeding.urgency === 'emergency' || bleeding.urgency === 'high' 
              ? 'text-red-700' 
              : bleeding.urgency === 'medium'
              ? 'text-yellow-700'
              : 'text-green-700'
          }`}>
            {bleeding.action}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BleedingDuringPregnancy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Bleeding During Pregnancy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Understanding pregnancy bleeding, from normal spotting to emergency situations. 
            Learn when to worry, when to call your doctor, and how to recognize urgent warning signs.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50/80 border-2 border-red-200 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Phone className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-4">
                Emergency Warning Signs
              </h2>
              <p className="text-red-700 mb-4">
                <strong>Call 911 or go to the emergency room immediately if you experience:</strong>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSignsEmergency.map((sign, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-red-800 font-medium">{sign}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-red-100/60 rounded-lg">
            <p className="text-red-800 text-center">
              <strong>Remember:</strong> It's always better to be safe than sorry. 
              When in doubt, contact your healthcare provider immediately.
            </p>
          </div>
        </div>

        {/* Urgency Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Understanding Urgency Levels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(urgencyLevels).map(([level, config]) => (
              <div key={level} className="text-center p-6 bg-white/70 rounded-xl border border-gray-100/80">
                <UrgencyBadge level={level as keyof typeof urgencyLevels} />
                <h3 className="font-semibold text-gray-800 mt-3 mb-2">{config.title}</h3>
                <p className="text-sm text-gray-600">{config.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* First Trimester */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            First Trimester Bleeding (Weeks 1-12)
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Bleeding in early pregnancy is relatively common, affecting up to 25% of pregnant women. 
            While it can be concerning, many causes are benign. However, any bleeding should be evaluated.
          </p>
          <div className="space-y-6">
            {firstTrimesterBleeding.map((bleeding, index) => (
              <BleedingCard key={index} bleeding={bleeding} trimester="first" />
            ))}
          </div>
        </div>

        {/* Second Trimester */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Second Trimester Bleeding (Weeks 13-27)
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Bleeding in the second trimester is less common but requires immediate medical attention. 
            Most causes are serious and need prompt evaluation and treatment.
          </p>
          <div className="space-y-6">
            {secondTrimesterBleeding.map((bleeding, index) => (
              <BleedingCard key={index} bleeding={bleeding} trimester="second" />
            ))}
          </div>
        </div>

        {/* Third Trimester */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Third Trimester Bleeding (Weeks 28-40+)
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Late pregnancy bleeding can range from normal pre-labor signs to serious emergencies. 
            Understanding the difference is crucial for both mother and baby's safety.
          </p>
          <div className="space-y-6">
            {thirdTrimesterBleeding.map((bleeding, index) => (
              <BleedingCard key={index} bleeding={bleeding} trimester="third" />
            ))}
          </div>
        </div>

        {/* When to Call Doctor */}
        <div className="bg-blue-50/60 rounded-2xl border border-blue-100/60 p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                When to Contact Your Healthcare Provider
              </h2>
              <p className="text-blue-700">
                Don't wait if you experience any of the following:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whenToCallDoctor.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Reducing Risk of Pregnancy Bleeding
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            While not all causes of pregnancy bleeding can be prevented, these steps may help reduce risk:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preventionTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-green-100 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
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

        {/* What to Expect at Medical Visits */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What to Expect When You Seek Medical Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Information to Prepare</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>When bleeding started and how long it's lasted</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Amount and color of bleeding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Any accompanying symptoms (pain, cramping)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Last menstrual period date</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Previous pregnancy complications</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tests You Might Have</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Pelvic examination</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Ultrasound to check baby and placenta</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Blood tests (HCG levels, blood count)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Blood pressure and vital signs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Fetal heart rate monitoring (if appropriate)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
          <Baby className="w-12 h-12 mx-auto mb-4 text-red-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Stay Informed About Your Pregnancy
          </h2>
          <p className="text-red-100 mb-6 leading-relaxed">
            Knowledge is power when it comes to pregnancy health. Track your symptoms 
            and stay connected with your healthcare provider for the safest pregnancy possible.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
          >
            Start Pregnancy Tracking
          </Link>
        </div>
      </div>
    </div>
  );
}