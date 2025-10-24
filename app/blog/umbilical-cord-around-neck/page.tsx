import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Baby, Heart, Activity, CheckCircle, XCircle, Phone, Clock, Stethoscope, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Umbilical Cord Around Baby\'s Neck: Causes, Risks & What to Expect',
  description: 'Complete guide to umbilical cord complications including nuchal cord. Learn about causes, risks, detection methods, and delivery options when cord is around baby\'s neck.',
  keywords: 'umbilical cord around neck, nuchal cord, cord complications pregnancy, baby cord wrapped around neck, delivery complications cord',
  openGraph: {
    title: 'Umbilical Cord Around Baby\'s Neck: Complete Guide',
    description: 'Understanding nuchal cord complications, risks, and management during pregnancy and delivery.',
    type: 'article',
  },
};

const cordComplicationTypes = [
  {
    type: "Simple Nuchal Cord",
    description: "Single loop of cord around baby&apos;s neck",
    frequency: "15-25% of all deliveries",
    riskLevel: "Low",
    icon: CheckCircle,
    characteristics: [
      "One loop around neck",
      "Usually loose and flexible",
      "Often resolves during delivery",
      "Minimal impact on baby"
    ],
    management: "Usually no intervention needed"
  },
  {
    type: "Multiple Nuchal Cord",
    description: "Two or more loops of cord around neck",
    frequency: "2-5% of all deliveries",
    riskLevel: "Moderate",
    icon: AlertTriangle,
    characteristics: [
      "Two or more loops",
      "May be tighter than single loop",
      "Higher risk of complications",
      "Requires closer monitoring"
    ],
    management: "Enhanced fetal monitoring, possible intervention"
  },
  {
    type: "Tight Nuchal Cord",
    description: "Cord wrapped tightly around neck",
    frequency: "1-2% of deliveries with nuchal cord",
    riskLevel: "High",
    icon: XCircle,
    characteristics: [
      "Cord cannot be easily unwrapped",
      "May restrict blood flow",
      "Risk of fetal distress",
      "May require immediate intervention"
    ],
    management: "May require cesarean delivery or immediate cord cutting"
  },
  {
    type: "Cord Around Body",
    description: "Cord wrapped around baby&apos;s body or limbs",
    frequency: "5-10% of deliveries",
    riskLevel: "Variable",
    icon: Activity,
    characteristics: [
      "Cord around torso, arms, or legs",
      "Usually less concerning than neck",
      "May cause minor complications",
      "Often resolves naturally"
    ],
    management: "Monitor during delivery, usually manageable"
  }
];

const causesAndRiskFactors = [
  {
    category: "Baby Movement",
    factors: [
      "Active fetal movement in womb",
      "Normal fetal activity and positioning",
      "Baby turning and somersaulting",
      "More common in very active babies"
    ],
    icon: Baby
  },
  {
    category: "Cord Factors",
    factors: [
      "Longer than average umbilical cord",
      "Excessive amniotic fluid (polyhydramnios)",
      "Cord insertion abnormalities",
      "Genetic cord structure variations"
    ],
    icon: Activity
  },
  {
    category: "Pregnancy Factors",
    factors: [
      "Multiple pregnancies (twins, triplets)",
      "Previous history of cord complications",
      "Maternal age over 35",
      "Certain maternal medical conditions"
    ],
    icon: Heart
  }
];

const detectionMethods = [
  {
    method: "Ultrasound Detection",
    timing: "20+ weeks gestation",
    accuracy: "60-80% detection rate",
    description: "Routine ultrasounds may show cord around neck",
    limitations: [
      "Not always visible on ultrasound",
      "Can develop after last ultrasound",
      "False positives possible",
      "Cord position changes frequently"
    ]
  },
  {
    method: "Fetal Movement Monitoring",
    timing: "28+ weeks gestation",
    accuracy: "Subjective assessment",
    description: "Decreased or changed fetal movement patterns",
    limitations: [
      "Movement patterns vary by baby",
      "Many factors affect movement",
      "Not specific to cord issues",
      "Requires baseline knowledge"
    ]
  },
  {
    method: "Fetal Heart Rate Monitoring",
    timing: "During labor",
    accuracy: "High for detecting distress",
    description: "Continuous monitoring during labor",
    limitations: [
      "Only detects during labor",
      "May show late changes",
      "Requires immediate intervention",
      "Not preventive measure"
    ]
  }
];

const deliveryManagement = [
  {
    scenario: "Loose Single Loop",
    approach: "Routine Vaginal Delivery",
    description: "Standard delivery with careful monitoring",
    steps: [
      "Continuous fetal heart monitoring",
      "Normal delivery progression",
      "Cord slipped over head after delivery",
      "Usually no complications"
    ],
    successRate: "95-98%"
  },
  {
    scenario: "Multiple Loops or Tight Cord",
    approach: "Enhanced Monitoring",
    description: "Vaginal delivery with immediate intervention readiness",
    steps: [
      "Continuous electronic fetal monitoring",
      "Immediate cord cutting if needed",
      "Quick resolution after delivery",
      "Pediatric team on standby"
    ],
    successRate: "85-95%"
  },
  {
    scenario: "Fetal Distress Present",
    approach: "Emergency Cesarean",
    description: "Surgical delivery for baby&apos;s safety",
    steps: [
      "Signs of fetal compromise",
      "Emergency cesarean section",
      "Immediate cord management",
      "NICU team available if needed"
    ],
    successRate: "98-99%"
  }
];

const preventionAndManagement = [
  {
    tip: "Regular Prenatal Care",
    description: "Attend all scheduled prenatal appointments for monitoring",
    icon: Calendar
  },
  {
    tip: "Fetal Movement Tracking",
    description: "Monitor baby&apos;s movement patterns, especially after 28 weeks",
    icon: Activity
  },
  {
    tip: "Stress Management",
    description: "Reduce stress which may affect fetal well-being",
    icon: Heart
  },
  {
    tip: "Healthy Lifestyle",
    description: "Maintain good nutrition and avoid smoking/alcohol",
    icon: CheckCircle
  },
  {
    tip: "Follow Medical Advice",
    description: "Follow healthcare provider recommendations for your specific case",
    icon: Stethoscope
  },
  {
    tip: "Birth Plan Flexibility",
    description: "Be prepared for changes in delivery plan if needed",
    icon: AlertTriangle
  }
];

const outcomesAndStats = [
  {
    statistic: "90-95%",
    description: "Babies with nuchal cord are born healthy with no complications",
    type: "success"
  },
  {
    statistic: "20%",
    description: "Overall incidence of nuchal cord in all pregnancies",
    type: "info"
  },
  {
    statistic: "<5%",
    description: "Cases requiring emergency intervention due to cord complications",
    type: "warning"
  },
  {
    statistic: "1-2%",
    description: "Risk of tight nuchal cord that may cause complications",
    type: "alert"
  }
];

export default function UmbilicalCordAroundNeck() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Umbilical Cord Around Baby&apos;s Neck
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Understanding nuchal cord complications, their causes, detection methods, and what to expect 
            during delivery when the umbilical cord is wrapped around your baby&apos;s neck.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Reassurance Box */}
          <div className="bg-green-50/80 border-2 border-green-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-green-800 mb-4">
                  Important Reassurance
                </h2>
                <p className="text-green-700 mb-4">
                  <strong>Most babies with umbilical cord around their neck are born healthy and normal.</strong> 
                  Nuchal cord is very common, occurring in about 20% of all deliveries, and the vast majority 
                  result in uncomplicated births.
                </p>
                <p className="text-green-700">
                  Modern monitoring and delivery techniques ensure that even when complications occur, 
                  they can be managed effectively to ensure the safety of both mother and baby.
                </p>
              </div>
            </div>
          </div>

          {/* Types of Cord Complications */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Types of Umbilical Cord Complications
            </h2>
            <div className="space-y-6">
              {cordComplicationTypes.map((cord, index) => {
                const IconComponent = cord.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-xl border border-blue-100/40 p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-full flex-shrink-0 ${
                        cord.riskLevel === 'Low' ? 'bg-green-100' :
                        cord.riskLevel === 'Moderate' ? 'bg-yellow-100' :
                        'bg-red-100'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          cord.riskLevel === 'Low' ? 'text-green-600' :
                          cord.riskLevel === 'Moderate' ? 'text-yellow-600' :
                          'text-red-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">{cord.type}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            cord.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                            cord.riskLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {cord.riskLevel} Risk
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{cord.description}</p>
                        <p className="text-sm text-blue-600 font-medium">Frequency: {cord.frequency}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Characteristics:</h4>
                        <ul className="space-y-2">
                          {cord.characteristics.map((char, charIndex) => (
                            <li key={charIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Management Approach:</h4>
                        <p className="text-sm text-gray-700 bg-white/60 p-3 rounded-lg">
                          {cord.management}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Causes and Risk Factors */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Causes and Risk Factors
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Umbilical cord around the neck is usually a result of normal fetal movement and is not typically 
              caused by anything the mother did or didn&apos;t do. Here are the main contributing factors:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {causesAndRiskFactors.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-purple-100">
                        <IconComponent className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.factors.map((factor, factorIndex) => (
                        <li key={factorIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detection Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Detection and Monitoring
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              While nuchal cord can sometimes be detected before delivery, it&apos;s important to understand 
              the limitations of current detection methods:
            </p>
            <div className="space-y-6">
              {detectionMethods.map((method, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50/60 to-blue-50/60 rounded-xl border border-teal-100/40 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{method.method}</h3>
                      <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                      <div className="space-y-1 text-xs">
                        <p><strong>Timing:</strong> {method.timing}</p>
                        <p><strong>Accuracy:</strong> {method.accuracy}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Limitations:</h4>
                      <ul className="space-y-1">
                        {method.limitations.map((limitation, limIndex) => (
                          <li key={limIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Management */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Delivery Management Approaches
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The management approach during delivery depends on several factors including the type of 
              nuchal cord, fetal well-being, and labor progression:
            </p>
            <div className="space-y-6">
              {deliveryManagement.map((management, index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-blue-100 flex-shrink-0">
                      <Stethoscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{management.scenario}</h3>
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                          {management.approach}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{management.description}</p>
                      <p className="text-sm text-green-600 font-medium">Success Rate: {management.successRate}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Management Steps:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {management.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-2">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention and Management */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Prevention and Management Tips
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              While nuchal cord cannot be completely prevented, these strategies can help ensure optimal 
              pregnancy health and prepare for delivery:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preventionAndManagement.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-green-50/60 to-blue-50/60 rounded-xl border border-green-100/40 p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-green-100 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.tip}</h3>
                        <p className="text-gray-600 text-sm">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Outcomes and Statistics */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Outcomes and Statistics
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Here are important statistics that highlight the generally positive outcomes for babies 
              with nuchal cord complications:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomesAndStats.map((stat, index) => (
                <div key={index} className={`rounded-xl border p-6 ${
                  stat.type === 'success' ? 'bg-green-50/60 border-green-100/60' :
                  stat.type === 'info' ? 'bg-blue-50/60 border-blue-100/60' :
                  stat.type === 'warning' ? 'bg-yellow-50/60 border-yellow-100/60' :
                  'bg-red-50/60 border-red-100/60'
                }`}>
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-3 ${
                      stat.type === 'success' ? 'text-green-600' :
                      stat.type === 'info' ? 'text-blue-600' :
                      stat.type === 'warning' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {stat.statistic}
                    </div>
                    <p className="text-gray-700 font-medium">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* When to Contact Doctor */}
          <div className="bg-yellow-50/60 border-2 border-yellow-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Phone className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
                  When to Contact Your Healthcare Provider
                </h2>
                <p className="text-yellow-700 mb-4">
                  Contact your healthcare provider immediately if you experience:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Significant decrease in fetal movement',
                'Complete absence of fetal movement for several hours',
                'Unusual or concerning changes in movement patterns',
                'Strong, persistent abdominal pain',
                'Heavy bleeding or unusual discharge',
                'Signs of preterm labor before 37 weeks',
                'Any symptoms that cause you concern'
              ].map((sign, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-yellow-800 font-medium">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Remember: Most Outcomes Are Positive
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If your healthcare provider has detected or suspects a nuchal cord, try not to worry excessively. 
              The vast majority of babies with umbilical cord around their neck are delivered safely with no 
              long-term effects. Modern obstetric care includes excellent monitoring and management strategies 
              to ensure the best possible outcome for both you and your baby.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Stay Informed About Your Pregnancy
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Learn more about pregnancy complications, delivery options, and what to expect 
              during your pregnancy journey with our comprehensive guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog/pregnancy-warning-signs"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Warning Signs Guide
              </Link>
              <Link 
                href="/blog/pregnancy-medical-checkups"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Medical Checkups
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}