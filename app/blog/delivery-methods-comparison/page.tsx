import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Heart, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Activity, 
  Baby, 
  TrendingUp, 
  Stethoscope,
  Timer,
  Users,
  Shield,
  Scale
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cesarean vs Normal vs Vacuum Delivery: Complete Comparison Guide',
  description: 'Comprehensive comparison of cesarean section, normal vaginal delivery, and vacuum-assisted delivery. Learn about indications, benefits, risks, recovery times, and what to expect.',
  keywords: 'cesarean vs normal delivery, vacuum delivery, c-section comparison, vaginal delivery vs cesarean, delivery methods comparison, birth options',
  openGraph: {
    title: 'Delivery Methods: Cesarean vs Normal vs Vacuum - Complete Guide',
    description: 'Understanding different delivery methods, their benefits, risks, and when each is recommended.',
    type: 'article',
  },
};

const deliveryMethods = [
  {
    method: "Normal Vaginal Delivery",
    description: "Natural birth through the birth canal",
    percentage: "65-70% of all deliveries",
    icon: Heart,
    duration: "4-20 hours (first baby), 2-8 hours (subsequent)",
    pros: [
      "Fastest recovery time",
      "Lower infection risk",
      "Immediate skin-to-skin contact",
      "Lower medical costs",
      "Natural process for baby",
      "Shorter hospital stay",
      "Lower risk of breathing problems for baby",
      "Better early breastfeeding success"
    ],
    cons: [
      "Unpredictable timing and duration",
      "Risk of perineal tears",
      "Potential need for episiotomy",
      "Possible pelvic floor damage",
      "Risk of prolonged labor",
      "May not be possible in all cases",
      "Pain during labor and delivery",
      "Risk of emergency complications"
    ],
    recovery: {
      hospitalStay: "1-2 days",
      fullRecovery: "6-8 weeks",
      returnToNormalActivity: "1-2 weeks",
      exerciseRecommendation: "6 weeks"
    },
    idealFor: [
      "Low-risk pregnancies",
      "Baby in head-down position",
      "Normal fetal heart rate",
      "No maternal complications",
      "Previous successful vaginal deliveries"
    ]
  },
  {
    method: "Cesarean Section (C-Section)",
    description: "Surgical delivery through abdominal incision",
    percentage: "25-30% of all deliveries",
    icon: Stethoscope,
    duration: "30-60 minutes surgery",
    pros: [
      "Predictable timing (if planned)",
      "Avoids labor pain",
      "Prevents pelvic floor damage",
      "Lower risk of birth trauma to baby",
      "Suitable for multiple babies",
      "Option when vaginal delivery risky",
      "Preserves vaginal anatomy",
      "Controlled delivery environment"
    ],
    cons: [
      "Major surgical procedure",
      "Longer recovery time",
      "Higher infection risk",
      "Risk of surgical complications",
      "Delayed skin-to-skin contact",
      "Higher medical costs",
      "Increased risk in future pregnancies",
      "Possible breathing issues for baby"
    ],
    recovery: {
      hospitalStay: "3-4 days",
      fullRecovery: "6-8 weeks",
      returnToNormalActivity: "2-6 weeks",
      exerciseRecommendation: "6-8 weeks"
    },
    idealFor: [
      "Breech or transverse baby position",
      "Placenta previa",
      "Multiple babies",
      "Previous cesarean with complications",
      "Maternal health conditions",
      "Fetal distress",
      "Failed labor progression"
    ]
  },
  {
    method: "Vacuum-Assisted Delivery",
    description: "Vaginal delivery with vacuum cup assistance",
    percentage: "3-5% of all deliveries",
    icon: Activity,
    duration: "Similar to normal delivery + assistance",
    pros: [
      "Helps complete vaginal delivery",
      "Faster than emergency C-section",
      "Lower surgical risks than cesarean",
      "Baby benefits from vaginal delivery",
      "Shorter recovery than C-section",
      "Can be used when mother is tired",
      "Effective for certain complications",
      "Preserves future delivery options"
    ],
    cons: [
      "Risk of scalp injury to baby",
      "Possible temporary head swelling",
      "Increased risk of jaundice",
      "May cause maternal tears",
      "Risk of procedure failure",
      "Potential for retinal hemorrhage",
      "Requires skilled practitioner",
      "May need episiotomy"
    ],
    recovery: {
      hospitalStay: "1-3 days",
      fullRecovery: "6-8 weeks",
      returnToNormalActivity: "2-4 weeks",
      exerciseRecommendation: "6 weeks"
    },
    idealFor: [
      "Prolonged second stage of labor",
      "Maternal exhaustion",
      "Mild fetal distress",
      "Need to expedite delivery",
      "Baby's head is low in pelvis"
    ]
  }
];

const comparisonFactors = [
  {
    factor: "Pain Management",
    normal: "Natural methods, epidural, or other pain relief options",
    cesarean: "Spinal or epidural anesthesia, post-op pain medication",
    vacuum: "Similar to normal delivery, may need additional local anesthesia",
    icon: Shield
  },
  {
    factor: "Recovery Time",
    normal: "Fastest recovery, back to normal activities in 1-2 weeks",
    cesarean: "Longest recovery, 6-8 weeks for full healing",
    vacuum: "Moderate recovery, 2-4 weeks depending on complications",
    icon: Timer
  },
  {
    factor: "Hospital Stay",
    normal: "1-2 days typically",
    cesarean: "3-4 days on average",
    vacuum: "1-3 days depending on outcome",
    icon: Clock
  },
  {
    factor: "Future Pregnancies",
    normal: "No restrictions, VBAC possible",
    cesarean: "May affect delivery options for future pregnancies",
    vacuum: "Usually no impact on future deliveries",
    icon: TrendingUp
  },
  {
    factor: "Baby's Health",
    normal: "Benefits from natural labor process",
    cesarean: "Possible breathing issues initially, but generally excellent outcomes",
    vacuum: "Generally good outcomes, possible temporary marks",
    icon: Baby
  }
];

const indicationsForEach = {
  cesarean: [
    {
      category: "Maternal Indications",
      reasons: [
        "Previous cesarean with complications",
        "Placenta previa",
        "Placental abruption",
        "Active genital herpes",
        "HIV with high viral load",
        "Severe preeclampsia",
        "Maternal heart disease",
        "Failed labor progression"
      ]
    },
    {
      category: "Fetal Indications", 
      reasons: [
        "Breech presentation",
        "Transverse lie",
        "Severe fetal distress",
        "Cord prolapse",
        "Multiple gestations",
        "Macrosomia (very large baby)",
        "Certain birth defects"
      ]
    }
  ],
  vacuum: [
    {
      category: "Labor Complications",
      reasons: [
        "Prolonged second stage of labor",
        "Maternal exhaustion",
        "Ineffective pushing",
        "Need to expedite delivery",
        "Mild fetal distress"
      ]
    },
    {
      category: "Prerequisites",
      reasons: [
        "Cervix fully dilated",
        "Baby's head engaged",
        "Vertex presentation",
        "Adequate maternal pelvis",
        "Experienced practitioner available"
      ]
    }
  ]
};

const riskComparison = [
  {
    category: "Maternal Risks",
    normal: ["Perineal tears", "Prolonged labor", "Emergency situations"],
    cesarean: ["Infection", "Bleeding", "Blood clots", "Anesthesia complications", "Future pregnancy risks"],
    vacuum: ["Perineal tears", "Cervical laceration", "Failed procedure requiring C-section"]
  },
  {
    category: "Baby Risks",
    normal: ["Birth trauma (rare)", "Shoulder dystocia", "Cord compression"],
    cesarean: ["Breathing problems", "Accidental cuts", "Delayed bonding initially"],
    vacuum: ["Scalp bruising", "Caput succedaneum", "Cephalohematoma", "Retinal hemorrhage"]
  }
];

const decisionFactors = [
  {
    factor: "Medical Necessity",
    description: "Conditions that require specific delivery method for safety",
    icon: AlertTriangle,
    considerations: [
      "Maternal health conditions",
      "Fetal position and health",
      "Previous delivery complications",
      "Emergency situations during labor"
    ]
  },
  {
    factor: "Personal Preferences",
    description: "Individual choices about birth experience",
    icon: Heart,
    considerations: [
      "Desired birth experience",
      "Pain management preferences",
      "Recovery time priorities",
      "Future pregnancy plans"
    ]
  },
  {
    factor: "Risk Assessment",
    description: "Evaluating potential complications and benefits",
    icon: Scale,
    considerations: [
      "Previous birth experiences",
      "Current pregnancy complications",
      "Age and overall health",
      "Baby's estimated size and position"
    ]
  },
  {
    factor: "Healthcare Provider Recommendation",
    description: "Professional medical advice based on individual case",
    icon: Users,
    considerations: [
      "Evidence-based recommendations",
      "Hospital policies and capabilities",
      "Provider's experience and expertise",
      "Emergency preparedness"
    ]
  }
];

const timelineComparison = {
  normal: [
    { stage: "Early Labor", duration: "6-12 hours", description: "Contractions begin, cervix starts to dilate" },
    { stage: "Active Labor", duration: "4-8 hours", description: "Strong contractions, cervix dilates 4-10cm" },
    { stage: "Pushing/Delivery", duration: "20 minutes - 3 hours", description: "Baby moves through birth canal" },
    { stage: "Placenta Delivery", duration: "5-30 minutes", description: "Delivery of placenta" }
  ],
  cesarean: [
    { stage: "Preparation", duration: "30-60 minutes", description: "Anesthesia, positioning, surgical prep" },
    { stage: "Surgery", duration: "30-60 minutes", description: "Incision, baby delivery, closing" },
    { stage: "Recovery Room", duration: "1-2 hours", description: "Monitoring after surgery" },
    { stage: "Hospital Stay", duration: "3-4 days", description: "Recovery and monitoring" }
  ],
  vacuum: [
    { stage: "Labor Progress", duration: "Variable", description: "Normal labor until assistance needed" },
    { stage: "Vacuum Application", duration: "5-10 minutes", description: "Vacuum cup placement and testing" },
    { stage: "Assisted Delivery", duration: "10-30 minutes", description: "Vacuum assistance with contractions" },
    { stage: "Completion", duration: "Similar to normal", description: "Placenta delivery and recovery" }
  ]
};

export default function DeliveryMethodsComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Delivery Methods Comparison: Cesarean vs Normal vs Vacuum
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive guide to understanding different delivery methods, their indications, benefits, 
            risks, and what to expect. Make informed decisions about your birth plan.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Overview Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Delivery Methods Overview
            </h2>
            <div className="space-y-8">
              {deliveryMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-purple-50/60 to-blue-50/60 rounded-2xl border border-purple-100/60 p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 rounded-full bg-purple-100 flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{method.method}</h3>
                        <p className="text-gray-700 mb-2">{method.description}</p>
                        <p className="text-purple-600 font-semibold">{method.percentage}</p>
                        <p className="text-gray-600 text-sm">Duration: {method.duration}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
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
                        <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
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

                      <div>
                        <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                          <Timer className="w-5 h-5" />
                          Recovery Timeline
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Hospital Stay:</strong> {method.recovery.hospitalStay}</p>
                          <p><strong>Normal Activity:</strong> {method.recovery.returnToNormalActivity}</p>
                          <p><strong>Full Recovery:</strong> {method.recovery.fullRecovery}</p>
                          <p><strong>Exercise:</strong> {method.recovery.exerciseRecommendation}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/60 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">Ideal For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {method.idealFor.map((indication, indIndex) => (
                          <span key={indIndex} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                            {indication}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Side-by-Side Comparison
            </h2>
            <div className="space-y-6">
              {comparisonFactors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-blue-100">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{factor.factor}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-50/60 rounded-lg p-4">
                        <h4 className="font-semibold text-green-700 mb-2">Normal Delivery</h4>
                        <p className="text-sm text-gray-700">{factor.normal}</p>
                      </div>
                      <div className="bg-purple-50/60 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Cesarean Section</h4>
                        <p className="text-sm text-gray-700">{factor.cesarean}</p>
                      </div>
                      <div className="bg-blue-50/60 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-700 mb-2">Vacuum Delivery</h4>
                        <p className="text-sm text-gray-700">{factor.vacuum}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Medical Indications */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              When Each Method Is Recommended
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-purple-50/60 to-pink-50/60 rounded-xl border border-purple-100/40 p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-purple-600" />
                  Cesarean Section Indications
                </h3>
                {indicationsForEach.cesarean.map((category, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="font-semibold text-purple-700 mb-3">{category.category}:</h4>
                    <ul className="space-y-1">
                      {category.reasons.map((reason, reasonIndex) => (
                        <li key={reasonIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50/60 to-teal-50/60 rounded-xl border border-blue-100/40 p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-blue-600" />
                  Vacuum Delivery Indications
                </h3>
                {indicationsForEach.vacuum.map((category, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="font-semibold text-blue-700 mb-3">{category.category}:</h4>
                    <ul className="space-y-1">
                      {category.reasons.map((reason, reasonIndex) => (
                        <li key={reasonIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Risk Comparison
            </h2>
            <div className="space-y-6">
              {riskComparison.map((category, index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50/60 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 mb-3">Normal Delivery</h4>
                      <ul className="space-y-1">
                        {category.normal.map((risk, riskIndex) => (
                          <li key={riskIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-purple-50/60 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-700 mb-3">Cesarean Section</h4>
                      <ul className="space-y-1">
                        {category.cesarean.map((risk, riskIndex) => (
                          <li key={riskIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50/60 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 mb-3">Vacuum Delivery</h4>
                      <ul className="space-y-1">
                        {category.vacuum.map((risk, riskIndex) => (
                          <li key={riskIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decision Factors */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Factors That Influence Delivery Method Choice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {decisionFactors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-teal-50/60 to-green-50/60 rounded-xl border border-teal-100/40 p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full bg-teal-100 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{factor.factor}</h3>
                        <p className="text-gray-600 text-sm mb-3">{factor.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {factor.considerations.map((consideration, consIndex) => (
                        <li key={consIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Delivery Timeline Comparison
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {Object.entries(timelineComparison).map(([method, timeline], index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                    {method === 'normal' ? 'Normal Delivery' : method === 'cesarean' ? 'Cesarean Section' : 'Vacuum Delivery'}
                  </h3>
                  <div className="space-y-4">
                    {timeline.map((stage, stageIndex) => (
                      <div key={stageIndex} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                          {stageIndex + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{stage.stage}</h4>
                          <p className="text-xs text-purple-600 font-medium">{stage.duration}</p>
                          <p className="text-xs text-gray-600">{stage.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Considerations */}
          <div className="bg-yellow-50/80 border-2 border-yellow-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
                  Important Considerations for Your Birth Plan
                </h2>
                <div className="space-y-4 text-yellow-700">
                  <p>
                    <strong>Flexibility is Key:</strong> Even with a birth plan, circumstances may change during labor, 
                    requiring adjustments to ensure the safety of both mother and baby.
                  </p>
                  <p>
                    <strong>Medical Advice Matters:</strong> Your healthcare provider&apos;s recommendations are based on 
                    your specific medical history, current pregnancy conditions, and evidence-based practices.
                  </p>
                  <p>
                    <strong>No Method is &quot;Better&quot;:</strong> Each delivery method has its place and can be the best choice 
                    depending on individual circumstances. The goal is always a safe delivery for both mother and baby.
                  </p>
                  <p>
                    <strong>Recovery Varies:</strong> Individual recovery times and experiences can vary significantly 
                    based on many factors beyond just the delivery method chosen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Plan Your Delivery Journey
            </h2>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Discuss these delivery options with your healthcare provider to create a birth plan 
              that&apos;s right for your specific situation and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog/pregnancy-medical-checkups"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              >
                Medical Checkups Guide
              </Link>
              <Link 
                href="/tools/contraction-timer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Contraction Timer
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}