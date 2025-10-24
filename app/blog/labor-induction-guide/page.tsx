import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Stethoscope, 
  Clock, 
  AlertTriangle, 
  Heart, 
  Baby, 
  Activity, 
  Target, 
  Calendar, 
  CheckCircle,
  TrendingUp,
  Timer,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Labor Induction Guide: Methods, Reasons & What to Expect',
  description: 'Complete guide to labor induction including medical reasons, induction methods, success rates, risks, and what to expect during the process. Make informed decisions about induced labor.',
  keywords: 'labor induction, induced labor, induction methods, pitocin induction, membrane sweep, cervical ripening, medical induction',
  openGraph: {
    title: 'Labor Induction: Complete Guide to Methods & Process',
    description: 'Understanding labor induction, when it\'s needed, methods used, and what to expect.',
    type: 'article',
  },
};

const inductionReasons = [
  {
    category: "Medical Indications",
    urgency: "Usually Necessary",
    reasons: [
      {
        condition: "Post-term Pregnancy",
        description: "Pregnancy continues beyond 41-42 weeks",
        details: "Risk of placental aging and decreased amniotic fluid",
        timing: "41-42 weeks gestation"
      },
      {
        condition: "Preeclampsia",
        description: "High blood pressure with protein in urine",
        details: "Can be dangerous for both mother and baby",
        timing: "When diagnosed after 34 weeks"
      },
      {
        condition: "Gestational Diabetes",
        description: "Poorly controlled blood sugar levels",
        details: "Risk of large baby and birth complications",
        timing: "39-40 weeks typically"
      },
      {
        condition: "Intrauterine Growth Restriction (IUGR)",
        description: "Baby not growing properly in the womb",
        details: "Better growth potential outside the womb",
        timing: "When benefits outweigh risks"
      },
      {
        condition: "Oligohydramnios",
        description: "Low levels of amniotic fluid",
        details: "Risk of cord compression and fetal distress",
        timing: "When fluid levels become concerning"
      }
    ],
    icon: AlertTriangle,
    color: "red"
  },
  {
    category: "Maternal Health Factors",
    urgency: "Often Recommended",
    reasons: [
      {
        condition: "Previous Stillbirth",
        description: "History of baby loss in previous pregnancy",
        details: "Preventive measure to avoid repeat occurrence",
        timing: "Usually before due date"
      },
      {
        condition: "Chronic Hypertension",
        description: "High blood pressure before pregnancy",
        details: "Risk increases as pregnancy progresses",
        timing: "39-40 weeks typically"
      },
      {
        condition: "Kidney Disease",
        description: "Chronic kidney problems",
        details: "Pregnancy stress on kidneys increases over time",
        timing: "Based on kidney function"
      },
      {
        condition: "Maternal Age Over 40",
        description: "Advanced maternal age",
        details: "Increased risk of complications near term",
        timing: "39-40 weeks often discussed"
      }
    ],
    icon: Heart,
    color: "orange"
  },
  {
    category: "Fetal Concerns",
    urgency: "Variable Timing",
    reasons: [
      {
        condition: "Suspected Macrosomia",
        description: "Baby estimated to be very large (>4500g)",
        details: "Risk of birth trauma and delivery complications",
        timing: "39-40 weeks to prevent further growth"
      },
      {
        condition: "Decreased Fetal Movement",
        description: "Significant reduction in baby&apos;s movements",
        details: "May indicate fetal compromise",
        timing: "When monitoring shows concerns"
      },
      {
        condition: "Abnormal Fetal Testing",
        description: "Non-stress test or biophysical profile concerns",
        details: "Signs of fetal distress or compromise",
        timing: "Based on test results"
      }
    ],
    icon: Baby,
    color: "blue"
  },
  {
    category: "Practical Considerations",
    urgency: "Elective/Convenience",
    reasons: [
      {
        condition: "Geographic Distance",
        description: "Living far from hospital",
        details: "Prevent emergency delivery en route",
        timing: "39+ weeks when cervix favorable"
      },
      {
        condition: "Previous Rapid Labor",
        description: "History of very fast labor progression",
        details: "Controlled timing to ensure hospital delivery",
        timing: "39+ weeks with favorable cervix"
      },
      {
        condition: "Physician Availability",
        description: "Ensuring preferred doctor is available",
        details: "Less common reason, controversial",
        timing: "39+ weeks only"
      }
    ],
    icon: Calendar,
    color: "green"
  }
];

const inductionMethods = [
  {
    method: "Membrane Sweeping/Stripping",
    type: "Natural/Mechanical",
    description: "Healthcare provider separates amniotic sac from cervix",
    successRate: "24% within 48 hours",
    timeframe: "Can be done in office, may work within days",
    process: [
      "Digital cervical exam performed",
      "Provider inserts finger through cervix",
      "Amniotic membrane separated from cervical opening",
      "Releases natural prostaglandins"
    ],
    pros: [
      "Can be done in doctor&apos;s office",
      "Natural hormone release",
      "Lower intervention method",
      "Can be repeated if needed"
    ],
    cons: [
      "Uncomfortable procedure",
      "May cause cramping and spotting",
      "Not always effective",
      "Requires cervix to be partially open"
    ],
    icon: Activity
  },
  {
    method: "Prostaglandin Gel/Insert",
    type: "Medication",
    description: "Synthetic hormones applied to cervix to ripen and stimulate contractions",
    successRate: "60-70% effectiveness",
    timeframe: "6-12 hours for effect, may need repeat doses",
    process: [
      "Gel or insert placed near cervix",
      "Continuous fetal monitoring required",
      "Patient remains in hospital",
      "May progress to other methods"
    ],
    pros: [
      "Helps ripen unfavorable cervix",
      "Can start labor naturally",
      "Lower pitocin requirements",
      "Good for closed cervix"
    ],
    cons: [
      "Risk of overstimulation",
      "Continuous monitoring needed",
      "Cannot be reversed easily",
      "May cause strong contractions"
    ],
    icon: Target
  },
  {
    method: "Pitocin (Oxytocin) IV",
    type: "Medication",
    description: "Synthetic version of natural labor hormone given intravenously",
    successRate: "75-85% successful vaginal delivery",
    timeframe: "Started low and gradually increased until effective contractions",
    process: [
      "IV line established",
      "Pitocin started at low dose",
      "Dose increased every 30-60 minutes",
      "Continuous fetal and contraction monitoring"
    ],
    pros: [
      "Can be precisely controlled",
      "Can be stopped if problems arise",
      "Very effective for labor progression",
      "Works with favorable cervix"
    ],
    cons: [
      "Stronger, more painful contractions",
      "Requires continuous monitoring",
      "Limited mobility",
      "Higher epidural rates"
    ],
    icon: Stethoscope
  },
  {
    method: "Artificial Rupture of Membranes (AROM)",
    type: "Mechanical",
    description: "Healthcare provider breaks the amniotic sac using a sterile tool",
    successRate: "Effective when combined with other methods",
    timeframe: "Immediate, but may need other methods to start contractions",
    process: [
      "Sterile plastic hook used",
      "Small tear made in amniotic sac",
      "Amniotic fluid drains out",
      "Labor often progresses within hours"
    ],
    pros: [
      "Quick procedure",
      "Can accelerate existing labor",
      "Allows better fetal monitoring",
      "Often effective with other methods"
    ],
    cons: [
      "Increases infection risk",
      "Commits to delivery within 24 hours",
      "May cause cord prolapse (rare)",
      "Cannot be undone"
    ],
    icon: Zap
  },
  {
    method: "Foley Bulb/Balloon Catheter",
    type: "Mechanical",
    description: "Balloon catheter placed in cervix and inflated to encourage dilation",
    successRate: "50-60% achieve favorable cervix",
    timeframe: "Left in place 12-24 hours",
    process: [
      "Catheter inserted through cervix",
      "Balloon inflated with sterile water",
      "Provides constant gentle pressure",
      "Falls out when cervix dilates to 3-4cm"
    ],
    pros: [
      "Mechanical cervical ripening",
      "Can go home in some cases",
      "Lower medication exposure",
      "Reversible method"
    ],
    cons: [
      "Uncomfortable insertion",
      "May cause cramping",
      "Risk of infection",
      "May not start contractions"
    ],
    icon: Timer
  }
];

const inductionProcess = [
  {
    stage: "Pre-Induction Assessment",
    duration: "1-2 hours",
    description: "Evaluation before starting induction",
    activities: [
      "Bishop score assessment (cervical readiness)",
      "Fetal heart rate monitoring (non-stress test)",
      "Medical history review",
      "Consent process and questions",
      "IV line placement",
      "Baseline vital signs"
    ],
    whatToExpect: "Initial evaluation to determine best induction method"
  },
  {
    stage: "Cervical Ripening (if needed)",
    duration: "6-24 hours",
    description: "Preparing the cervix if not ready for labor",
    activities: [
      "Prostaglandin gel or insert placement",
      "Foley bulb insertion (if appropriate)",
      "Continuous monitoring",
      "Rest and comfort measures",
      "Reassessment of cervical changes",
      "Progress evaluation"
    ],
    whatToExpected: "May involve waiting period for cervix to soften and open"
  },
  {
    stage: "Active Induction",
    duration: "Variable (6-24+ hours)",
    description: "Active measures to start and maintain labor",
    activities: [
      "Pitocin infusion started",
      "Artificial rupture of membranes (if appropriate)",
      "Continuous fetal monitoring",
      "Pain management options discussed",
      "Regular cervical checks",
      "Labor progress assessment"
    ],
    whatToExpect: "Active labor typically begins, contractions become regular and stronger"
  },
  {
    stage: "Labor Management",
    duration: "Until delivery",
    description: "Managing active labor until birth",
    activities: [
      "Monitoring contraction strength and frequency",
      "Fetal heart rate surveillance",
      "Pain management as needed",
      "Position changes and movement",
      "Regular progress checks",
      "Preparation for delivery"
    ],
    whatToExpect: "Similar to natural labor but with closer monitoring"
  }
];

const risksBenefits = {
  benefits: [
    {
      benefit: "Medical Safety",
      description: "Addresses specific medical conditions that threaten mother or baby",
      examples: ["Treats preeclampsia", "Prevents post-term complications", "Manages gestational diabetes risks"]
    },
    {
      benefit: "Planned Delivery",
      description: "Allows for scheduled, controlled delivery timing",
      examples: ["Ensures hospital delivery", "Allows for physician availability", "Prevents emergency situations"]
    },
    {
      benefit: "Monitoring Capability",
      description: "Continuous monitoring ensures early detection of problems",
      examples: ["Real-time fetal monitoring", "Immediate intervention if needed", "Professional support throughout"]
    }
  ],
  risks: [
    {
      risk: "Failed Induction",
      description: "Induction may not work, requiring cesarean delivery",
      frequency: "15-25% of first-time mothers",
      details: "Higher risk with unfavorable cervix or early gestational age"
    },
    {
      risk: "Uterine Overstimulation",
      description: "Contractions become too strong or frequent",
      frequency: "5-10% of inductions",
      details: "Can cause fetal distress, may require stopping medications"
    },
    {
      risk: "Infection Risk",
      description: "Increased risk of infection to mother and baby",
      frequency: "Slightly higher than spontaneous labor",
      details: "Risk increases with duration of labor and interventions"
    },
    {
      risk: "Fetal Distress",
      description: "Baby may not tolerate induced contractions well",
      frequency: "Variable based on method",
      details: "May require emergency delivery or other interventions"
    }
  ]
};

const bishopScore = [
  {
    factor: "Cervical Dilation",
    score0: "Closed (0 cm)",
    score1: "1-2 cm",
    score2: "3-4 cm",
    score3: "5+ cm"
  },
  {
    factor: "Cervical Effacement",
    score0: "0-30%",
    score1: "40-50%",
    score2: "60-70%",
    score3: "80%+"
  },
  {
    factor: "Cervical Consistency",
    score0: "Firm",
    score1: "Medium",
    score2: "Soft",
    score3: "Very soft"
  },
  {
    factor: "Cervical Position",
    score0: "Posterior",
    score1: "Mid-position",
    score2: "Anterior",
    score3: "Central"
  },
  {
    factor: "Fetal Station",
    score0: "-3 or higher",
    score1: "-2",
    score2: "-1, 0",
    score3: "+1, +2"
  }
];

const preparationTips = [
  {
    category: "Physical Preparation",
    tips: [
      "Get a good night's sleep before induction",
      "Eat a nutritious meal (if allowed)",
      "Stay hydrated leading up to induction",
      "Practice relaxation and breathing techniques",
      "Bring comfortable clothes and personal items",
      "Arrange for comfortable positioning aids"
    ],
    icon: Activity
  },
  {
    category: "Mental Preparation",
    tips: [
      "Understand the induction process and timeline",
      "Discuss pain management options with your team",
      "Prepare for a potentially longer labor",
      "Have realistic expectations about timing",
      "Plan for different scenarios (including C-section)",
      "Communicate preferences with your healthcare team"
    ],
    icon: Heart
  },
  {
    category: "Practical Preparation",
    tips: [
      "Pack hospital bag in advance",
      "Arrange childcare for other children",
      "Notify employer about extended time off",
      "Ensure transportation and parking plans",
      "Bring entertainment for waiting periods",
      "Have support person contact information ready"
    ],
    icon: CheckCircle
  }
];

const questionsToAsk = [
  "Why is induction being recommended in my specific case?",
  "What is my Bishop score and what does it mean?",
  "What induction method do you recommend and why?",
  "How long might the induction process take?",
  "What are the risks and benefits for my situation?",
  "What pain management options will be available?",
  "What happens if the induction doesn&apos;t work?",
  "How will my baby be monitored during the process?",
  "Can I eat or drink during the induction?",
  "What should I expect for recovery after an induced labor?"
];

export default function LaborInductionGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Labor Induction Guide: Methods, Reasons & What to Expect
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive guide to labor induction including medical reasons, available methods, success rates, 
            and what to expect during the process. Make informed decisions about your birth plan.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* What is Labor Induction */}
          <div className="bg-gradient-to-r from-blue-50/60 to-teal-50/60 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              What is Labor Induction?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Definition</h3>
                <p className="text-gray-700 leading-relaxed">
                  Labor induction is the process of artificially starting labor contractions before they begin naturally. 
                  It involves medical or mechanical methods to stimulate the uterus and cervix to begin the birthing process.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Statistics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    About 25% of pregnancies involve induction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    75-85% result in successful vaginal delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    Average duration: 12-24 hours for first babies
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reasons for Induction */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Medical Reasons for Labor Induction
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              Labor induction is recommended when the benefits of delivery outweigh the risks of continuing the pregnancy.
            </p>

            <div className="space-y-8">
              {inductionReasons.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className={`rounded-2xl border-2 p-8 ${
                    category.color === 'red' ? 'bg-red-50/60 border-red-200' :
                    category.color === 'orange' ? 'bg-orange-50/60 border-orange-200' :
                    category.color === 'blue' ? 'bg-blue-50/60 border-blue-200' :
                    'bg-green-50/60 border-green-200'
                  }`}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-full flex-shrink-0 ${
                        category.color === 'red' ? 'bg-red-100' :
                        category.color === 'orange' ? 'bg-orange-100' :
                        category.color === 'blue' ? 'bg-blue-100' :
                        'bg-green-100'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          category.color === 'red' ? 'text-red-600' :
                          category.color === 'orange' ? 'text-orange-600' :
                          category.color === 'blue' ? 'text-blue-600' :
                          'text-green-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${
                          category.color === 'red' ? 'text-red-800' :
                          category.color === 'orange' ? 'text-orange-800' :
                          category.color === 'blue' ? 'text-blue-800' :
                          'text-green-800'
                        }`}>
                          {category.category}
                        </h3>
                        <p className={`font-semibold ${
                          category.color === 'red' ? 'text-red-700' :
                          category.color === 'orange' ? 'text-orange-700' :
                          category.color === 'blue' ? 'text-blue-700' :
                          'text-green-700'
                        }`}>
                          {category.urgency}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {category.reasons.map((reason, reasonIndex) => (
                        <div key={reasonIndex} className="bg-white/60 rounded-xl p-6">
                          <h4 className="font-semibold text-gray-800 mb-2">{reason.condition}</h4>
                          <p className="text-gray-700 text-sm mb-2">{reason.description}</p>
                          <p className="text-gray-600 text-xs mb-2">{reason.details}</p>
                          <p className={`text-xs font-semibold ${
                            category.color === 'red' ? 'text-red-600' :
                            category.color === 'orange' ? 'text-orange-600' :
                            category.color === 'blue' ? 'text-blue-600' :
                            'text-green-600'
                          }`}>
                            Timing: {reason.timing}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bishop Score */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Bishop Score: Assessing Cervical Readiness
            </h2>
            <p className="text-gray-600 mb-8 text-center leading-relaxed">
              The Bishop score helps determine how ready your cervix is for labor. A score of 8 or higher 
              indicates a favorable cervix and higher chance of successful induction.
            </p>

            <div className="bg-white/60 rounded-xl border border-gray-100/60 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-100/60">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Factor</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">0 Points</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">1 Point</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">2 Points</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">3 Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bishopScore.map((factor, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-blue-50/30' : 'bg-white/30'}>
                        <td className="px-6 py-4 font-medium text-gray-800">{factor.factor}</td>
                        <td className="px-6 py-4 text-center text-gray-700 text-sm">{factor.score0}</td>
                        <td className="px-6 py-4 text-center text-gray-700 text-sm">{factor.score1}</td>
                        <td className="px-6 py-4 text-center text-gray-700 text-sm">{factor.score2}</td>
                        <td className="px-6 py-4 text-center text-gray-700 text-sm">{factor.score3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-blue-50/40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-semibold text-red-700">Score 0-5</p>
                    <p className="text-sm text-gray-600">Unfavorable cervix</p>
                    <p className="text-xs text-gray-500">May need cervical ripening</p>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-700">Score 6-7</p>
                    <p className="text-sm text-gray-600">Moderately favorable</p>
                    <p className="text-xs text-gray-500">Induction may be successful</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Score 8+</p>
                    <p className="text-sm text-gray-600">Favorable cervix</p>
                    <p className="text-xs text-gray-500">High success rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Induction Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Labor Induction Methods
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              Different methods are used based on your cervical readiness, medical situation, and healthcare provider preference.
            </p>

            <div className="space-y-8">
              {inductionMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-teal-50/60 to-blue-50/60 rounded-2xl border border-teal-100/40 p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 rounded-full bg-teal-100 flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-800">{method.method}</h3>
                          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-teal-100 text-teal-700">
                            {method.type}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{method.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <p><strong>Success Rate:</strong> {method.successRate}</p>
                          <p><strong>Timeframe:</strong> {method.timeframe}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Process Steps
                        </h4>
                        <ol className="space-y-2">
                          {method.process.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                                {stepIndex + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Advantages
                          </h4>
                          <ul className="space-y-1">
                            {method.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0 mt-2"></div>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" />
                            Considerations
                          </h4>
                          <ul className="space-y-1">
                            {method.cons.map((con, conIndex) => (
                              <li key={conIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Induction Process Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              The Induction Process: What to Expect
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              Understanding the typical timeline helps you prepare mentally and physically for the induction process.
            </p>

            <div className="space-y-6">
              {inductionProcess.map((stage, index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{stage.stage}</h3>
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                          {stage.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{stage.description}</p>
                      <p className="text-sm text-blue-600 font-medium mb-4">{stage.whatToExpect}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-14">
                    {stage.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risks and Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Benefits and Risks of Labor Induction
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-green-50/60 rounded-xl border border-green-100/60 p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Benefits of Induction
                </h3>
                <div className="space-y-4">
                  {risksBenefits.benefits.map((benefit, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 mb-2">{benefit.benefit}</h4>
                      <p className="text-gray-700 text-sm mb-2">{benefit.description}</p>
                      <ul className="space-y-1">
                        {benefit.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-xs text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0 mt-1.5"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50/60 rounded-xl border border-red-100/60 p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Potential Risks
                </h3>
                <div className="space-y-4">
                  {risksBenefits.risks.map((risk, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 mb-2">{risk.risk}</h4>
                      <p className="text-gray-700 text-sm mb-1">{risk.description}</p>
                      <p className="text-red-600 text-xs font-semibold mb-1">Frequency: {risk.frequency}</p>
                      <p className="text-gray-600 text-xs">{risk.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Preparing for Labor Induction
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {preparationTips.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-purple-50/60 to-blue-50/60 rounded-xl border border-purple-100/40 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-purple-100">
                        <IconComponent className="w-6 h-6 text-purple-600" />
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

          {/* Questions to Ask */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Important Questions to Ask Your Healthcare Provider
            </h2>
            <div className="bg-yellow-50/60 rounded-xl border border-yellow-100/60 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questionsToAsk.map((question, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Remember Section */}
          <div className="bg-gradient-to-r from-blue-50/60 to-teal-50/60 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Remember: Every Induction is Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Success Factors:</h4>
                <p className="text-sm mb-4">
                  Success depends on cervical readiness, gestational age, baby&apos;s position, 
                  and individual response to medications.
                </p>
                <h4 className="font-semibold mb-2">Timeline Variation:</h4>
                <p className="text-sm">
                  Some inductions work quickly, others take time. First-time mothers typically 
                  have longer inductions than those who have given birth before.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Flexibility is Key:</h4>
                <p className="text-sm mb-4">
                  Plans may change based on how you and your baby respond. Trust your healthcare 
                  team&apos;s expertise and communicate your concerns.
                </p>
                <h4 className="font-semibold mb-2">Support Matters:</h4>
                <p className="text-sm">
                  Having a supportive birth team and understanding the process helps you feel 
                  more confident and prepared for your induction experience.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Understanding Your Options
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Learn more about birth options and prepare for different scenarios to feel confident 
              about your delivery experience, whether natural or induced.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog/stages-of-pre-labor"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Pre-Labor Stages
              </Link>
              <Link 
                href="/blog/delivery-methods-comparison"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Delivery Options
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}