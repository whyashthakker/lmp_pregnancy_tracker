import { Metadata } from 'next';
import Link from 'next/link';
import { TestTube, TrendingDown, Calendar, Heart, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What is Chemical Pregnancy? Early Pregnancy Loss Explained',
  description: 'Understanding chemical pregnancy - very early miscarriage after positive pregnancy test. Learn about causes, symptoms, and what it means for future pregnancies.',
  keywords: 'chemical pregnancy, very early miscarriage, biochemical pregnancy, early pregnancy loss, positive pregnancy test then negative, implantation failure',
};

const keyFacts = [
  {
    title: "Very Early Loss",
    description: "Occurs within 5 weeks of last menstrual period",
    icon: Calendar
  },
  {
    title: "Positive Test First",
    description: "HCG levels rise enough to trigger positive pregnancy test",
    icon: TestTube
  },
  {
    title: "Common Occurrence",
    description: "Affects 10-25% of pregnancies, often unnoticed",
    icon: TrendingDown
  },
  {
    title: "Usually Not Preventable",
    description: "Most often due to chromosomal abnormalities",
    icon: Info
  }
];

const timeline = [
  {
    week: "Week 1-2",
    event: "Ovulation & Fertilization",
    description: "Egg is fertilized and begins cell division",
    hcg: "0 mIU/mL"
  },
  {
    week: "Week 3",
    event: "Implantation Begins", 
    description: "Embryo attempts to attach to uterine lining",
    hcg: "5-25 mIU/mL"
  },
  {
    week: "Week 4",
    event: "Positive Test Possible",
    description: "HCG rises enough for positive home pregnancy test",
    hcg: "25-156 mIU/mL"
  },
  {
    week: "Week 5",
    event: "Chemical Pregnancy Loss",
    description: "Embryo stops developing, HCG levels drop",
    hcg: "Declining"
  }
];

const symptomsVsRegularPeriod = [
  {
    symptom: "Timing",
    chemicalPregnancy: "Period may be 1-2 weeks late",
    regularPeriod: "Arrives on schedule (give or take a few days)"
  },
  {
    symptom: "Flow",
    chemicalPregnancy: "May be heavier than normal",
    regularPeriod: "Normal flow pattern"
  },
  {
    symptom: "Duration",
    chemicalPregnancy: "May last longer than usual",
    regularPeriod: "Normal duration (3-7 days)"
  },
  {
    symptom: "Cramping",
    chemicalPregnancy: "May be more intense",
    regularPeriod: "Normal menstrual cramps"
  },
  {
    symptom: "Pregnancy Test",
    chemicalPregnancy: "Positive then negative",
    regularPeriod: "Consistently negative"
  }
];

const causes = [
  {
    cause: "Chromosomal Abnormalities",
    percentage: "50-70%",
    description: "Random errors in genetic material prevent normal development",
    details: [
      "Most common cause of chemical pregnancy",
      "Usually not inherited from parents",
      "Increases with maternal age",
      "Nature's way of preventing abnormal development"
    ]
  },
  {
    cause: "Implantation Issues",
    percentage: "15-25%",
    description: "Problems with embryo attaching to uterine lining",
    details: [
      "Thin uterine lining (endometrium)",
      "Hormonal imbalances affecting implantation",
      "Uterine abnormalities",
      "Immune system factors"
    ]
  },
  {
    cause: "Hormonal Imbalances",
    percentage: "10-15%",
    description: "Insufficient hormone production to maintain early pregnancy",
    details: [
      "Low progesterone levels",
      "Thyroid disorders",
      "Insulin resistance/diabetes",
      "Luteal phase defects"
    ]
  },
  {
    cause: "Lifestyle Factors",
    percentage: "5-10%",
    description: "Environmental and lifestyle factors that may contribute",
    details: [
      "Heavy smoking or alcohol use",
      "Extreme stress",
      "Poor nutrition or severe weight issues",
      "Exposure to toxins"
    ]
  }
];

const diagnosisSteps = [
  {
    step: "Initial Positive Test",
    description: "Home pregnancy test shows positive result",
    timing: "Around missed period",
    details: "HCG levels have risen enough to trigger positive test"
  },
  {
    step: "Period Arrives Late",
    description: "Menstrual bleeding begins despite positive test",
    timing: "1-2 weeks after missed period",
    details: "May be heavier or different than normal period"
  },
  {
    step: "Test Turns Negative",
    description: "Repeat pregnancy test shows negative result",
    timing: "During or after bleeding",
    details: "HCG levels have dropped back to undetectable"
  },
  {
    step: "Medical Confirmation",
    description: "Blood tests confirm dropping HCG levels",
    timing: "If seeking medical care",
    details: "Quantitative HCG shows declining levels"
  }
];

const emotionalImpact = [
  {
    feeling: "Confusion",
    description: "Unsure if you were really pregnant",
    support: "Trust the positive test - you were pregnant, even briefly"
  },
  {
    feeling: "Minimized Grief",
    description: "Feeling like loss 'doesn&apos;t count' because it was early",
    support: "Your grief is valid regardless of how early the loss occurred"
  },
  {
    feeling: "Relief Mixed with Guilt",
    description: "Feeling relieved but guilty about that relief",
    support: "Complex feelings are normal - don&apos;t judge yourself"
  },
  {
    feeling: "Anxiety About Future",
    description: "Worrying about ability to carry a pregnancy",
    support: "Most chemical pregnancies are one-time events"
  },
  {
    feeling: "Isolation",
    description: "Feeling alone because few people knew about pregnancy",
    support: "Consider sharing with trusted friends or support groups"
  }
];

const commonMyths = [
  {
    myth: "Chemical pregnancies aren&apos;t 'real' pregnancies",
    reality: "Fertilization and implantation occurred - it was a real pregnancy",
    icon: CheckCircle
  },
  {
    myth: "You did something to cause it",
    reality: "Chemical pregnancies are usually due to random genetic errors",
    icon: CheckCircle
  },
  {
    myth: "Having one means you&apos;ll have more",
    reality: "Most women go on to have normal pregnancies after one chemical pregnancy",
    icon: CheckCircle
  },
  {
    myth: "You should wait months before trying again",
    reality: "Medically, you can try again after your next normal cycle",
    icon: CheckCircle
  },
  {
    myth: "Chemical pregnancies indicate fertility problems",
    reality: "They often indicate that conception can occur normally",
    icon: CheckCircle
  }
];

const riskFactors = [
  {
    factor: "Advanced maternal age (35+)",
    explanation: "Egg quality declines with age, increasing chromosome abnormalities"
  },
  {
    factor: "Previous pregnancy losses",
    explanation: "May indicate underlying issues, though often not related"
  },
  {
    factor: "Thyroid disorders",
    explanation: "Can affect hormone levels needed for early pregnancy"
  },
  {
    factor: "PCOS",
    explanation: "May affect egg quality and hormonal balance"
  },
  {
    factor: "Diabetes",
    explanation: "Poor glucose control can affect early pregnancy development"
  },
  {
    factor: "Autoimmune conditions",
    explanation: "May interfere with implantation and early development"
  }
];

const movingForward = [
  {
    aspect: "Physical Recovery",
    timeframe: "1-2 cycles",
    tips: [
      "Allow one normal cycle before trying again",
      "Take prenatal vitamins if planning to conceive",
      "Monitor for complete return of normal periods",
      "No special medical treatment needed"
    ]
  },
  {
    aspect: "Emotional Processing",
    timeframe: "Variable",
    tips: [
      "Allow yourself to grieve the loss",
      "Talk to trusted friends or counselor",
      "Join online support communities",
      "Be patient with your healing process"
    ]
  },
  {
    aspect: "Future Planning",
    timeframe: "When ready",
    tips: [
      "Most couples can try again immediately after next period",
      "Consider tracking ovulation for optimal timing",
      "Maintain healthy lifestyle habits",
      "Discuss any concerns with healthcare provider"
    ]
  }
];

const whenToSeeDoctor = [
  "Multiple chemical pregnancies (3 or more)",
  "Concerning symptoms during bleeding",
  "Heavy bleeding that soaks more than 2 pads per hour",
  "Severe pain or cramping",
  "Fever or signs of infection",
  "Emotional distress that interferes with daily life",
  "Questions about future pregnancy plans"
];

const positiveOutlook = [
  {
    stat: "70-80%",
    description: "Success rate for next pregnancy after one chemical pregnancy"
  },
  {
    stat: "90%+", 
    description: "Women who conceive again within 6 months have successful pregnancies"
  },
  {
    stat: "Normal",
    description: "Fertility is typically normal after chemical pregnancy"
  }
];

export default function WhatIsChemicalPregnancy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
            <TestTube className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            What is Chemical Pregnancy?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Understanding chemical pregnancy - a very early miscarriage that occurs shortly after implantation. 
            Learn about causes, symptoms, and what it means for your future fertility.
          </p>
        </div>

        {/* Definition */}
        <div className="bg-gradient-to-r from-green-50/60 to-blue-50/60 rounded-2xl p-8 mb-12 border border-green-100/40">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Understanding Chemical Pregnancy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A chemical pregnancy, also called a biochemical pregnancy, is a very early miscarriage that occurs 
            shortly after implantation. The pregnancy is called &ldquo;chemical&rdquo; because it can only be detected 
            through chemical tests (pregnancy tests that measure HCG hormone), not through ultrasound.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In a chemical pregnancy, an egg is fertilized and begins to implant in the uterus, producing 
            enough HCG hormone to cause a positive pregnancy test. However, the pregnancy stops developing 
            very early, usually before the 5th week, and ends in miscarriage before anything can be seen on ultrasound.
          </p>
          
          <div className="bg-blue-50/60 rounded-xl p-6 mt-6">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Important to Know</h3>
                <p className="text-blue-700">
                  Chemical pregnancies are incredibly common and often go unnoticed. Many women experience them 
                  without realizing it, simply thinking their period was a few days late.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Key Facts About Chemical Pregnancy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFacts.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{fact.title}</h3>
                      <p className="text-gray-600">{fact.description}</p>
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
            Chemical Pregnancy Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((stage, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {stage.week.split(' ')[1]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{stage.event}</h3>
                      <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                        {stage.week}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{stage.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-green-800">HCG Level:</span>
                      <span className="text-sm text-green-700">{stage.hcg}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Symptoms Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Chemical Pregnancy vs Regular Period
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Chemical pregnancies can be difficult to distinguish from a late period. Here&apos;s how they might differ:
          </p>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Aspect</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Chemical Pregnancy</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Regular Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {symptomsVsRegularPeriod.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-800">{item.symptom}</td>
                      <td className="px-6 py-4 text-gray-600">{item.chemicalPregnancy}</td>
                      <td className="px-6 py-4 text-gray-600">{item.regularPeriod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Causes */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            What Causes Chemical Pregnancy?
          </h2>
          <div className="space-y-8">
            {causes.map((cause, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold flex-shrink-0">
                    {cause.percentage}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{cause.cause}</h3>
                    <p className="text-gray-600 mb-4">{cause.description}</p>
                    <ul className="space-y-2">
                      {cause.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnosis */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            How Chemical Pregnancy is Recognized
          </h2>
          <div className="space-y-4">
            {diagnosisSteps.map((step, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{step.step}</h3>
                      <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                        {step.timing}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-500">{step.details}</p>
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
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Remember</h3>
                <p className="text-yellow-700">
                  Having risk factors doesn&apos;t mean you will have a chemical pregnancy. Many women with 
                  risk factors have normal pregnancies, and chemical pregnancies often occur without any risk factors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {riskFactors.map((factor, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-3"></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{factor.factor}</h3>
                    <p className="text-gray-600">{factor.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Emotional Impact and Coping
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Chemical pregnancies can bring unique emotional challenges because the loss is so early 
            and may feel ambiguous. Your feelings are valid, regardless of how early the loss occurred.
          </p>
          <div className="space-y-4">
            {emotionalImpact.map((impact, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{impact.feeling}</h3>
                    <p className="text-gray-600 mb-2">{impact.description}</p>
                    <p className="text-pink-700 font-medium text-sm">💜 {impact.support}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Myths */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Common Myths About Chemical Pregnancy
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

        {/* Moving Forward */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Moving Forward After Chemical Pregnancy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {movingForward.map((aspect, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{aspect.aspect}</h3>
                <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                  {aspect.timeframe}
                </div>
                <ul className="space-y-3">
                  {aspect.tips.map((tip, tipIndex) => (
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

        {/* Positive Outlook */}
        <div className="bg-green-50/60 rounded-2xl border border-green-100/60 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Hope for Future Pregnancies
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The good news is that chemical pregnancies usually don&apos;t indicate ongoing fertility problems. 
            They show that conception can occur, and most women go on to have successful pregnancies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {positiveOutlook.map((stat, index) => (
              <div key={index} className="text-center bg-white/60 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.stat}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* When to See Doctor */}
        <div className="bg-orange-50/60 rounded-2xl border border-orange-100/60 p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-orange-800 mb-2">
                When to Contact Your Healthcare Provider
              </h2>
              <p className="text-orange-700">
                While one chemical pregnancy usually doesn&apos;t require medical intervention, contact your doctor if:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whenToSeeDoctor.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-orange-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support and Resources */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Finding Support and Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Online pregnancy loss communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Counseling or therapy services</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Support from family and friends</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>Healthcare provider guidance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Remember</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Your grief is valid, no matter how early the loss</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Chemical pregnancies are usually one-time events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Most women go on to have healthy pregnancies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>It&apos;s not your fault - it&apos;s usually random</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
          <TestTube className="w-12 h-12 mx-auto mb-4 text-green-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Understanding Brings Peace
          </h2>
          <p className="text-green-100 mb-6 leading-relaxed">
            Chemical pregnancies are common and usually indicate that your body can conceive. 
            With understanding and support, you can move forward with hope for the future.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
          >
            Track Your Pregnancy Journey
          </Link>
        </div>
      </div>
    </div>
  );
}