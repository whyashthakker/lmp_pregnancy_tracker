import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, AlertTriangle, Clock, Eye, CheckCircle, XCircle, Stethoscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What is Missed Miscarriage? Silent Pregnancy Loss Explained',
  description: 'Understanding missed miscarriage (silent miscarriage) - when the embryo stops developing but shows no symptoms. Learn about diagnosis, treatment, and recovery.',
  keywords: 'missed miscarriage, silent miscarriage, missed abortion, embryonic demise, pregnancy loss without symptoms, first trimester loss',
};

const keyFacts = [
  {
    fact: "No Immediate Symptoms",
    description: "Body doesn&apos;t recognize the pregnancy loss initially",
    icon: Eye
  },
  {
    fact: "Usually First Trimester",
    description: "Most commonly occurs between 8-13 weeks",
    icon: Clock
  },
  {
    fact: "Found During Routine Scans",
    description: "Often discovered at routine ultrasound appointments",
    icon: Stethoscope
  },
  {
    fact: "Different from Other Types",
    description: "No bleeding or cramping unlike other miscarriages",
    icon: AlertTriangle
  }
];

const symptomsComparison = [
  {
    symptom: "Vaginal Bleeding",
    missedMiscarriage: "Usually none initially",
    regularMiscarriage: "Light to heavy bleeding",
    status: "different"
  },
  {
    symptom: "Cramping/Pain",
    missedMiscarriage: "Usually none",
    regularMiscarriage: "Moderate to severe cramping",
    status: "different"
  },
  {
    symptom: "Pregnancy Symptoms",
    missedMiscarriage: "May suddenly disappear",
    regularMiscarriage: "Usually disappear gradually",
    status: "similar"
  },
  {
    symptom: "Fetal Heartbeat",
    missedMiscarriage: "Absent on ultrasound",
    regularMiscarriage: "May be absent or irregular",
    status: "similar"
  },
  {
    symptom: "Tissue Passage",
    missedMiscarriage: "None (body retains tissue)",
    regularMiscarriage: "May pass tissue naturally",
    status: "different"
  }
];

const diagnosisSteps = [
  {
    step: 1,
    title: "Routine Ultrasound",
    description: "No fetal heartbeat detected during routine scan",
    details: "Most missed miscarriages are discovered during routine prenatal appointments when expected fetal heartbeat is not found",
    timing: "Usually 8-12 weeks"
  },
  {
    step: 2,
    title: "Confirm Diagnosis",
    description: "Second ultrasound to confirm findings",
    details: "Doctor may wait 1-2 weeks and repeat ultrasound to ensure accurate diagnosis, as dating can sometimes be incorrect",
    timing: "1-2 weeks later"
  },
  {
    step: 3,
    title: "Blood Tests",
    description: "HCG levels measured to confirm pregnancy loss",
    details: "Beta-HCG levels should be rising in healthy pregnancy. Plateauing or declining levels confirm pregnancy loss",
    timing: "Within days of scan"
  },
  {
    step: 4,
    title: "Treatment Discussion",
    description: "Options presented for managing the miscarriage",
    details: "Three main options: expectant management (wait naturally), medication, or surgical procedure (D&C)",
    timing: "After confirmed diagnosis"
  }
];

const treatmentOptions = [
  {
    type: "Expectant Management",
    description: "Wait for body to naturally expel pregnancy tissue",
    duration: "2-6 weeks",
    advantages: [
      "No medical intervention",
      "Body handles process naturally", 
      "No anesthesia or surgery risks",
      "Lower cost"
    ],
    disadvantages: [
      "May take weeks to complete",
      "Emotional difficulty of waiting",
      "Risk of heavy bleeding",
      "May still need D&C if incomplete"
    ],
    success: "65-75%",
    icon: Clock
  },
  {
    type: "Medication (Misoprostol)",
    description: "Medicine to help uterus expel pregnancy tissue",
    duration: "24-48 hours",
    advantages: [
      "Faster than waiting naturally",
      "Avoid surgery",
      "Can be done at home",
      "Less invasive"
    ],
    disadvantages: [
      "Cramping and bleeding",
      "May need repeat dose",
      "Risk of incomplete expulsion",
      "Nausea and side effects"
    ],
    success: "80-85%",
    icon: Heart
  },
  {
    type: "Surgical (D&C)",
    description: "Dilation and curettage procedure to remove tissue",
    duration: "15-30 minutes",
    advantages: [
      "Complete removal assured",
      "Fastest option",
      "Minimal bleeding afterward",
      "Can provide tissue for testing"
    ],
    disadvantages: [
      "Requires anesthesia",
      "Small surgical risks",
      "More expensive",
      "Recovery time needed"
    ],
    success: "99%",
    icon: Stethoscope
  }
];

const emotionalImpact = [
  {
    aspect: "Shock and Disbelief",
    description: "Learning about loss when feeling fine can be devastating",
    support: "Allow yourself to feel shocked - this is a normal reaction"
  },
  {
    aspect: "Guilt and Self-Blame", 
    description: "Wondering if you missed warning signs",
    support: "Remember: missed miscarriages often have no warning signs"
  },
  {
    aspect: "Feeling Betrayed by Body",
    description: "Body didn't signal the pregnancy loss",
    support: "Your body was trying to protect you - this isn&apos;t a failure"
  },
  {
    aspect: "Decision Overwhelm",
    description: "Having to choose treatment while grieving",
    support: "Take time to understand options, ask questions, seek support"
  },
  {
    aspect: "Loss of Pregnancy Symptoms",
    description: "May feel relief then guilt about not feeling pregnant",
    support: "Complex feelings are normal - seek counseling if needed"
  }
];

const riskFactors = [
  "Advanced maternal age (over 35)",
  "Previous miscarriages",
  "Chromosomal abnormalities",
  "Chronic medical conditions",
  "Hormonal imbalances",
  "Uterine abnormalities",
  "Lifestyle factors (smoking, alcohol)",
  "Certain infections"
];

const preventionMyths = [
  {
    myth: "Bed rest prevents missed miscarriage",
    reality: "No evidence that activity level affects risk",
    icon: XCircle
  },
  {
    myth: "Stress causes missed miscarriage",
    reality: "Normal daily stress does not cause pregnancy loss",
    icon: XCircle
  },
  {
    myth: "Missing prenatal vitamins causes it",
    reality: "While vitamins are important, missing them rarely causes loss",
    icon: XCircle
  },
  {
    myth: "Previous birth control use increases risk",
    reality: "No connection between past contraceptive use and miscarriage",
    icon: XCircle
  },
  {
    myth: "Working or exercise causes missed miscarriage",
    reality: "Normal activities and work don&apos;t increase risk",
    icon: XCircle
  }
];

const recoveryTips = [
  {
    category: "Physical Recovery",
    tips: [
      "Follow post-treatment care instructions",
      "Monitor bleeding and watch for signs of infection",
      "Avoid tampons and intercourse as directed",
      "Take pain medication as prescribed"
    ]
  },
  {
    category: "Emotional Recovery",
    tips: [
      "Allow yourself to grieve the loss",
      "Seek support from family, friends, or counselors",
      "Join support groups for pregnancy loss",
      "Be patient with your healing process"
    ]
  },
  {
    category: "Future Planning",
    tips: [
      "Wait for complete physical recovery before trying again",
      "Discuss timing with your healthcare provider",
      "Address any underlying health issues",
      "Consider pre-conception counseling"
    ]
  }
];

const whenToCallDoctor = [
  "Heavy bleeding (soaking more than 2 pads per hour)",
  "Bleeding for more than 2 weeks",
  "Fever over 100.4°F (38°C)",
  "Chills or flu-like symptoms",
  "Severe abdominal pain",
  "Foul-smelling vaginal discharge",
  "Signs of depression or anxiety",
  "Difficulty coping emotionally"
];

export default function WhatIsMissedMiscarriage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            What is Missed Miscarriage?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Understanding missed miscarriage (also called silent miscarriage) - when pregnancy loss occurs 
            without obvious symptoms. A comprehensive guide to diagnosis, treatment options, and recovery.
          </p>
        </div>

        {/* Definition */}
        <div className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-2xl p-8 mb-12 border border-blue-100/40">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Understanding Missed Miscarriage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A missed miscarriage, also known as a silent miscarriage or missed abortion, occurs when an embryo 
            or fetus dies but the body doesn&apos;t immediately recognize the loss. Unlike other types of miscarriage, 
            there may be no bleeding, cramping, or other obvious symptoms. The pregnancy hormone levels may remain 
            elevated, and pregnancy symptoms may continue for a while.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This type of pregnancy loss is typically discovered during routine ultrasound appointments when 
            no fetal heartbeat is detected, even though the pregnancy appeared to be progressing normally.
          </p>
        </div>

        {/* Key Facts */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Key Facts About Missed Miscarriage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFacts.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{fact.fact}</h3>
                      <p className="text-gray-600">{fact.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Symptoms Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            How Missed Miscarriage Differs from Regular Miscarriage
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Symptom</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Missed Miscarriage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Regular Miscarriage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {symptomsComparison.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-800">{item.symptom}</td>
                      <td className="px-6 py-4 text-gray-600">{item.missedMiscarriage}</td>
                      <td className="px-6 py-4 text-gray-600">{item.regularMiscarriage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Diagnosis Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            How Missed Miscarriage is Diagnosed
          </h2>
          <div className="space-y-6">
            {diagnosisSteps.map((step) => (
              <div key={step.step} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                      <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                        {step.timing}
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">{step.description}</p>
                    <p className="text-gray-600">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Treatment Options
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Once missed miscarriage is confirmed, you have three main treatment options. Your doctor will help 
            you choose based on your medical situation, personal preferences, and emotional needs.
          </p>
          <div className="space-y-8">
            {treatmentOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-green-100 to-blue-100 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-semibold text-gray-800">{option.type}</h3>
                        <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                          {option.success} success
                        </div>
                        <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                          {option.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{option.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 text-green-700">Advantages:</h4>
                      <ul className="space-y-2">
                        {option.advantages.map((advantage, advIndex) => (
                          <li key={advIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 text-orange-700">Disadvantages:</h4>
                      <ul className="space-y-2">
                        {option.disadvantages.map((disadvantage, disIndex) => (
                          <li key={disIndex} className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{disadvantage}</span>
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

        {/* Emotional Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Emotional Impact and Coping
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Missed miscarriage can be particularly emotionally challenging because the loss often comes as a 
            complete surprise. You may have felt perfectly fine and had no reason to suspect anything was wrong.
          </p>
          <div className="space-y-4">
            {emotionalImpact.map((impact, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{impact.aspect}</h3>
                    <p className="text-gray-600 mb-2">{impact.description}</p>
                    <p className="text-purple-700 font-medium text-sm">{impact.support}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Factors */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Risk Factors
          </h2>
          <div className="bg-yellow-50/60 rounded-xl border border-yellow-100/60 p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-yellow-700">
                  Most missed miscarriages occur due to random chromosomal abnormalities and are not caused 
                  by anything you did or didn&apos;t do. Having risk factors doesn&apos;t guarantee pregnancy loss.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {riskFactors.map((factor, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100/80 p-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-gray-700">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Myths */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Common Myths About Prevention
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            It&apos;s important to understand that missed miscarriages usually cannot be prevented. 
            Here are common myths that may add unnecessary guilt:
          </p>
          <div className="space-y-4">
            {preventionMyths.map((myth, index) => {
              const IconComponent = myth.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4">
                    <IconComponent className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
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

        {/* Recovery and Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Recovery and Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recoveryTips.map((recovery, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{recovery.category}</h3>
                <ul className="space-y-3">
                  {recovery.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* When to Call Doctor */}
        <div className="bg-red-50/60 rounded-2xl border border-red-100/60 p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-2">
                When to Contact Your Healthcare Provider
              </h2>
              <p className="text-red-700">
                Call your doctor immediately if you experience any of these symptoms after treatment:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whenToCallDoctor.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-red-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Future Pregnancies */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Future Pregnancies After Missed Miscarriage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Encouraging Statistics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>85% of women have successful pregnancies after one miscarriage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Most missed miscarriages are one-time events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Having one missed miscarriage doesn&apos;t increase future risk significantly</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Before Trying Again</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Wait for physical recovery (1-3 cycles)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Ensure emotional readiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Discuss timing with your doctor</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Address any underlying health issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
          <Heart className="w-12 h-12 mx-auto mb-4 text-blue-100" />
          <h2 className="text-2xl font-semibold mb-4">
            You Are Not Alone
          </h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Missed miscarriage is a difficult experience, but with proper medical care and emotional support, 
            healing is possible. Most women go on to have healthy pregnancies.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Find Support and Resources
          </Link>
        </div>
      </div>
    </div>
  );
}