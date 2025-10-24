import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, AlertTriangle, Clock, TrendingDown, Baby, CheckCircle, Info, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What is Miscarriage? Understanding Early Pregnancy Loss',
  description: 'Complete guide to miscarriage including causes, symptoms, types, and recovery. Learn about early pregnancy loss, risk factors, and when to seek medical help.',
  keywords: 'miscarriage, early pregnancy loss, spontaneous abortion, miscarriage causes, miscarriage symptoms, pregnancy loss support, recurrent miscarriage',
};

const miscarriageTypes = [
  {
    type: "Threatened Miscarriage",
    description: "Bleeding occurs but cervix remains closed, pregnancy may continue",
    symptoms: ["Light to moderate vaginal bleeding", "Mild cramping", "Closed cervix on exam", "Fetal heartbeat present"],
    outcome: "50% chance pregnancy continues normally",
    action: "Bed rest, monitoring, avoid strenuous activity",
    icon: AlertTriangle
  },
  {
    type: "Inevitable Miscarriage", 
    description: "Cervix is open and miscarriage will occur",
    symptoms: ["Heavy bleeding with clots", "Severe cramping", "Open cervix", "Tissue may be passing"],
    outcome: "Pregnancy cannot continue",
    action: "Medical management or D&C procedure",
    icon: TrendingDown
  },
  {
    type: "Incomplete Miscarriage",
    description: "Some pregnancy tissue remains in the uterus",
    symptoms: ["Heavy bleeding continues", "Severe cramping", "Open cervix", "Tissue partially passed"],
    outcome: "Requires medical intervention",
    action: "D&C procedure to remove remaining tissue",
    icon: Clock
  },
  {
    type: "Complete Miscarriage",
    description: "All pregnancy tissue has passed naturally",
    symptoms: ["Bleeding decreases significantly", "Cramping subsides", "Cervix begins to close", "All tissue passed"],
    outcome: "No further medical intervention needed",
    action: "Follow-up monitoring, emotional support",
    icon: CheckCircle
  },
  {
    type: "Missed Miscarriage",
    description: "Embryo stops developing but body doesn&apos;t recognize the loss",
    symptoms: ["Pregnancy symptoms may disappear", "No bleeding initially", "No fetal heartbeat", "Uterus stops growing"],
    outcome: "Requires medical or surgical management",
    action: "Medication or D&C to empty uterus",
    icon: Heart
  },
  {
    type: "Recurrent Miscarriage",
    description: "Three or more consecutive pregnancy losses",
    symptoms: ["Pattern of early pregnancy losses", "May have different symptoms each time", "Need investigation"],
    outcome: "Requires specialized evaluation",
    action: "Comprehensive testing for underlying causes",
    icon: Info
  }
];

const commonCauses = [
  {
    category: "Chromosomal Abnormalities",
    percentage: "50-70%",
    description: "Random genetic errors during cell division",
    details: ["Most common cause of first-trimester loss", "Usually not inherited", "Risk increases with maternal age", "Often prevents severe birth defects"],
    icon: Baby
  },
  {
    category: "Hormonal Problems", 
    percentage: "10-15%",
    description: "Insufficient hormone production to maintain pregnancy",
    details: ["Low progesterone levels", "Thyroid disorders", "Diabetes complications", "PCOS-related issues"],
    icon: TrendingDown
  },
  {
    category: "Anatomical Issues",
    percentage: "10-15%", 
    description: "Structural problems with uterus or cervix",
    details: ["Uterine septum or fibroids", "Cervical insufficiency", "Asherman's syndrome", "Congenital uterine abnormalities"],
    icon: Heart
  },
  {
    category: "Maternal Health Conditions",
    percentage: "5-10%",
    description: "Underlying medical conditions affecting pregnancy",
    details: ["Autoimmune disorders", "Blood clotting disorders", "Severe chronic diseases", "Severe infections"],
    icon: AlertTriangle
  },
  {
    category: "Environmental Factors", 
    percentage: "5-10%",
    description: "External factors that may contribute to loss",
    details: ["Heavy smoking or alcohol use", "Drug use", "Environmental toxins", "Extreme stress or trauma"],
    icon: Clock
  }
];

const riskFactors = [
  {
    factor: "Maternal Age",
    details: "Risk increases significantly after age 35",
    stats: "12% at age 25, 25% at age 40, 50% at age 45"
  },
  {
    factor: "Previous Miscarriages", 
    details: "History of pregnancy loss increases future risk",
    stats: "15% after one loss, 25% after two losses, 35% after three"
  },
  {
    factor: "Chronic Conditions",
    details: "Diabetes, thyroid disease, autoimmune disorders",
    stats: "2-3 times higher risk with uncontrolled conditions"
  },
  {
    factor: "Lifestyle Factors",
    details: "Smoking, heavy drinking, drug use",
    stats: "Up to 2 times higher risk with multiple factors"
  },
  {
    factor: "Weight Extremes",
    details: "Being significantly underweight or obese",
    stats: "1.5-2 times higher risk at BMI extremes"
  }
];

const warningSymptoms = [
  "Vaginal bleeding (light spotting to heavy bleeding)",
  "Severe abdominal or pelvic cramping",
  "Lower back pain",
  "Fluid or tissue passing from vagina",
  "Sudden decrease in pregnancy symptoms",
  "No fetal heartbeat on ultrasound",
  "Severe nausea and vomiting with bleeding"
];

const emotionalStages = [
  {
    stage: "Shock and Denial",
    description: "Initial disbelief and numbness",
    duration: "Days to weeks",
    support: "Allow yourself to feel numb, seek immediate medical care"
  },
  {
    stage: "Anger and Guilt",
    description: "Questioning 'why me' and self-blame", 
    duration: "Weeks to months",
    support: "Remember it&apos;s not your fault, consider counseling"
  },
  {
    stage: "Bargaining",
    description: "Wishing things could be different",
    duration: "Variable",
    support: "Focus on what you can control going forward"
  },
  {
    stage: "Depression and Sadness",
    description: "Deep grief over the loss",
    duration: "Months",
    support: "Allow yourself to grieve, seek professional help if needed"
  },
  {
    stage: "Acceptance",
    description: "Finding peace and moving forward",
    duration: "Individual timeline",
    support: "Take time to heal, consider trying again when ready"
  }
];

const recoveryTips = [
  {
    aspect: "Physical Recovery",
    timeframe: "2-6 weeks",
    tips: [
      "Allow body to heal completely",
      "Follow doctor&apos;s instructions about activity",
      "Watch for signs of infection",
      "Take recommended supplements"
    ]
  },
  {
    aspect: "Emotional Recovery", 
    timeframe: "Variable, often months",
    tips: [
      "Allow yourself to grieve",
      "Seek counseling if needed",
      "Connect with support groups",
      "Be patient with healing process"
    ]
  },
  {
    aspect: "Trying Again",
    timeframe: "After 1-3 normal cycles",
    tips: [
      "Wait for doctor&apos;s clearance",
      "Ensure emotional readiness",
      "Take prenatal vitamins",
      "Address any risk factors"
    ]
  }
];

const whenToSeekHelp = [
  "Heavy bleeding (soaking a pad every hour)",
  "Severe cramping or abdominal pain",
  "Fever or chills",
  "Foul-smelling discharge",
  "Signs of infection",
  "Extreme emotional distress",
  "Thoughts of self-harm"
];

export default function WhatIsMiscarriage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Understanding Miscarriage
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A comprehensive guide to early pregnancy loss, including causes, symptoms, types, 
            and recovery. You&apos;re not alone in this journey - support and understanding are available.
          </p>
        </div>

        {/* Definition and Statistics */}
        <div className="bg-gradient-to-r from-purple-50/60 to-pink-50/60 rounded-2xl p-8 mb-12 border border-purple-100/40">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What is Miscarriage?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Miscarriage, also called spontaneous abortion, is the natural loss of a pregnancy before 20 weeks gestation. 
            It&apos;s the most common complication of early pregnancy, affecting 10-25% of clinically recognized pregnancies. 
            Most miscarriages occur in the first trimester (before 12 weeks).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white/60 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">10-25%</div>
              <div className="text-sm text-gray-600">Of known pregnancies end in miscarriage</div>
            </div>
            <div className="text-center bg-white/60 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-sm text-gray-600">Occur in the first trimester</div>
            </div>
            <div className="text-center bg-white/60 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">50-70%</div>
              <div className="text-sm text-gray-600">Due to chromosomal abnormalities</div>
            </div>
          </div>
        </div>

        {/* Types of Miscarriage */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Types of Miscarriage
          </h2>
          <div className="space-y-6">
            {miscarriageTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{type.type}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Symptoms:</h4>
                      <ul className="space-y-2">
                        {type.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Outcome:</h4>
                      <p className="text-gray-700">{type.outcome}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Treatment:</h4>
                      <p className="text-gray-700">{type.action}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Common Causes */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Common Causes of Miscarriage
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Understanding that most miscarriages are due to factors beyond your control can help with 
            the healing process. Here are the most common causes:
          </p>
          <div className="space-y-6">
            {commonCauses.map((cause, index) => {
              const IconComponent = cause.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{cause.category}</h3>
                        <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                          {cause.percentage}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{cause.description}</p>
                      <ul className="space-y-1">
                        {cause.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-700 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {detail}
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

        {/* Risk Factors */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Risk Factors
          </h2>
          <div className="bg-yellow-50/60 rounded-xl border border-yellow-100/60 p-6 mb-8">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important to Remember</h3>
                <p className="text-yellow-700">
                  Having risk factors doesn&apos;t mean you will have a miscarriage. Many women with risk factors 
                  have healthy pregnancies, and many miscarriages occur without any identifiable risk factors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {riskFactors.map((factor, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{factor.factor}</h3>
                    <p className="text-gray-600 mb-2">{factor.details}</p>
                    <p className="text-sm text-blue-700 font-medium">{factor.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-red-50/60 rounded-2xl border border-red-100/60 p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-2">
                Warning Signs to Watch For
              </h2>
              <p className="text-red-700">
                Contact your healthcare provider immediately if you experience any of these symptoms:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSymptoms.map((symptom, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-red-800 font-medium">{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Emotional Journey and Healing
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Miscarriage is not just a physical loss but an emotional one. Grief is natural and necessary. 
            Everyone processes loss differently, and there&apos;s no &ldquo;right&rdquo; timeline for healing.
          </p>
          <div className="space-y-4">
            {emotionalStages.map((stage, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{stage.stage}</h3>
                    <p className="text-gray-600 mb-2">{stage.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-purple-800">Duration: </span>
                        <span className="text-sm text-purple-700">{stage.duration}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-purple-800">Support: </span>
                        <span className="text-sm text-purple-700">{stage.support}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery and Moving Forward */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Recovery and Moving Forward
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recoveryTips.map((recovery, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{recovery.aspect}</h3>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                  {recovery.timeframe}
                </div>
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

        {/* When to Seek Help */}
        <div className="bg-blue-50/60 rounded-2xl border border-blue-100/60 p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Phone className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                When to Seek Immediate Medical Help
              </h2>
              <p className="text-blue-700">
                Contact your healthcare provider or emergency services if you experience:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whenToSeekHelp.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support and Hope */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Finding Support and Hope
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Pregnancy loss support groups</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Professional counseling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Online communities and forums</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Family and friends</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Hope for the Future</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Most women go on to have healthy pregnancies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Each pregnancy is unique and independent</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Medical advances continue to improve outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Healing and hope are possible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <Heart className="w-12 h-12 mx-auto mb-4 text-purple-100" />
          <h2 className="text-2xl font-semibold mb-4">
            You Are Not Alone
          </h2>
          <p className="text-purple-100 mb-6 leading-relaxed">
            If you&apos;re experiencing pregnancy loss, remember that it&apos;s not your fault. 
            Seek support, take time to heal, and know that hope remains for the future.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            Find Support Resources
          </Link>
        </div>
      </div>
    </div>
  );
}