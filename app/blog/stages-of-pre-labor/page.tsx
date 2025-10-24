import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Clock, 
  Activity, 
  Heart, 
  Baby, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Calendar, 
  Timer,
  Target,
  ArrowRight,
  Phone,
  Stethoscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stages of Pre-Labor: Early Signs, Symptoms & What to Expect',
  description: 'Complete guide to pre-labor stages including early labor signs, prodromal labor, and how to distinguish true labor from false labor. Know when to head to the hospital.',
  keywords: 'pre-labor stages, early labor signs, prodromal labor, false labor vs true labor, labor progression, when to go to hospital',
  openGraph: {
    title: 'Stages of Pre-Labor: Early Signs & What to Expect',
    description: 'Understanding pre-labor stages, early signs, and when labor is really starting.',
    type: 'article',
  },
};

const preLaborStages = [
  {
    stage: "Early Pre-Labor (Weeks Before Labor)",
    timing: "2-4 weeks before labor",
    description: "Body begins preparing for eventual labor",
    icon: Calendar,
    duration: "Varies widely",
    keyChanges: [
      "Baby drops lower in pelvis (lightening)",
      "Cervix begins to soften and thin",
      "Braxton Hicks contractions increase",
      "Increased pelvic pressure",
      "Changes in energy levels",
      "Nesting instinct may begin"
    ],
    symptoms: [
      "Easier breathing as baby moves down",
      "Increased urination frequency",
      "Lower back discomfort",
      "Hip and pelvic pressure",
      "Irregular, painless contractions",
      "Possible weight loss (1-3 lbs)"
    ],
    whatToDo: [
      "Continue normal activities",
      "Practice breathing techniques",
      "Prepare hospital bag",
      "Rest when possible",
      "Stay hydrated",
      "Monitor for pattern changes"
    ]
  },
  {
    stage: "Prodromal Labor (False Labor)",
    timing: "Days to weeks before active labor",
    description: "Irregular contractions that don&apos;t progress to active labor",
    icon: Timer,
    duration: "Hours to days, may stop and start",
    keyChanges: [
      "Irregular contractions that may be painful",
      "Contractions don&apos;t increase in intensity",
      "Cervical changes minimal or slow",
      "May stop with rest or position change",
      "Can be exhausting and frustrating"
    ],
    symptoms: [
      "Contractions every 5-20 minutes",
      "Contractions may last 30-60 seconds",
      "Pain may be in front or back",
      "Intensity stays the same",
      "May stop with activity change",
      "Sleep may relieve contractions"
    ],
    whatToDo: [
      "Try to rest and sleep",
      "Change positions frequently",
      "Take a warm bath",
      "Stay hydrated",
      "Practice relaxation techniques",
      "Don't rush to hospital yet"
    ]
  },
  {
    stage: "Late Pre-Labor (Labor Eve)",
    timing: "24-48 hours before active labor",
    description: "More distinct changes as body prepares for imminent labor",
    icon: Target,
    duration: "1-2 days",
    keyChanges: [
      "Bloody show may appear",
      "Mucus plug may be lost",
      "Increased Braxton Hicks frequency",
      "Cervix begins to dilate",
      "More consistent discomfort",
      "Strong nesting urge"
    ],
    symptoms: [
      "Pink or brownish vaginal discharge",
      "Thick mucus discharge",
      "More frequent contractions",
      "Lower back pain increases",
      "Diarrhea or nausea",
      "Feeling restless or anxious"
    ],
    whatToDo: [
      "Monitor contraction timing",
      "Contact healthcare provider if bloody show",
      "Finalize birth plan details",
      "Ensure transportation ready",
      "Get adequate rest",
      "Eat light, nutritious meals"
    ]
  },
  {
    stage: "Early Labor Transition",
    timing: "Hours before active labor",
    description: "Clear progression toward active labor begins",
    icon: TrendingUp,
    duration: "2-6 hours typically",
    keyChanges: [
      "Contractions become more regular",
      "Intensity gradually increases",
      "Cervix dilates to 3-4 cm",
      "Water may break",
      "Contractions closer together",
      "Clear labor pattern emerges"
    ],
    symptoms: [
      "Contractions every 5-10 minutes",
      "Each contraction lasts 45-60 seconds",
      "Pain requires concentration",
      "Difficulty talking through contractions",
      "Possible water breaking",
      "Increased emotional intensity"
    ],
    whatToDo: [
      "Start timing contractions seriously",
      "Use labor comfort techniques",
      "Consider when to go to hospital",
      "Stay mobile if comfortable",
      "Maintain hydration",
      "Alert support team"
    ]
  }
];

const trueVsFalseLabor = [
  {
    aspect: "Contraction Timing",
    trueLaborSigns: [
      "Regular intervals (every 3-5 minutes)",
      "Intervals get shorter over time",
      "Pattern is consistent and predictable",
      "Timing doesn&apos;t vary with position"
    ],
    falseLaborSigns: [
      "Irregular intervals (5-20 minutes)",
      "Intervals may get longer or stay same",
      "No consistent pattern",
      "May stop with rest or movement"
    ]
  },
  {
    aspect: "Contraction Intensity",
    trueLaborSigns: [
      "Gets stronger and more painful over time",
      "Pain requires focused breathing",
      "Can't talk through peak of contraction",
      "Intensity increases with walking"
    ],
    falseLaborSigns: [
      "Stays about the same intensity",
      "May be uncomfortable but manageable",
      "Can often talk through contractions",
      "May decrease with activity change"
    ]
  },
  {
    aspect: "Contraction Location",
    trueLaborSigns: [
      "Starts in back, moves to front",
      "Wraps around entire abdomen",
      "May radiate to thighs",
      "Consistent location pattern"
    ],
    falseLaborSigns: [
      "Often felt in front of abdomen",
      "May stay in one area",
      "Location may vary",
      "Less wrap-around sensation"
    ]
  },
  {
    aspect: "Response to Activity",
    trueLaborSigns: [
      "Continues regardless of position",
      "May get stronger with walking",
      "Rest doesn&apos;t stop contractions",
      "Warm bath may help pain but doesn&apos;t stop labor"
    ],
    falseLaborSigns: [
      "May stop with position change",
      "Often decreases with rest",
      "Warm bath may stop contractions",
      "Distraction may make them disappear"
    ]
  }
];

const warningSignsToCallDoctor = [
  {
    urgency: "Call Immediately",
    signs: [
      "Water breaks with green or brown fluid",
      "Heavy bright red bleeding",
      "Severe constant abdominal pain",
      "Baby's movements decrease significantly",
      "Fever over 100.4°F (38°C)",
      "Severe headache with vision changes"
    ],
    icon: Phone,
    color: "red"
  },
  {
    urgency: "Call Within Hours",
    signs: [
      "Regular contractions 5 minutes apart for 1 hour",
      "Water breaks (even if contractions haven&apos;t started)",
      "Bloody show with heavy bleeding",
      "Contractions so painful you can&apos;t walk or talk",
      "Persistent vomiting",
      "Strong urge to push"
    ],
    icon: Clock,
    color: "orange"
  },
  {
    urgency: "Contact During Office Hours",
    signs: [
      "Loss of mucus plug",
      "Light bloody show",
      "Consistent increase in contraction frequency",
      "Diarrhea with other labor signs",
      "Persistent lower back pain",
      "Any concerns about symptoms"
    ],
    icon: Stethoscope,
    color: "yellow"
  }
];

const comfortMeasures = [
  {
    technique: "Movement and Positioning",
    description: "Change positions to help labor progress and manage discomfort",
    methods: [
      "Walking or gentle movement",
      "Rocking in a chair",
      "Sitting on birth ball",
      "Hands and knees position",
      "Side-lying with pillow support",
      "Squatting or lunging"
    ],
    icon: Activity
  },
  {
    technique: "Breathing and Relaxation",
    description: "Use focused breathing to manage contractions",
    methods: [
      "Deep, slow breathing",
      "Patterned breathing techniques",
      "Visualization and meditation",
      "Progressive muscle relaxation",
      "Positive affirmations",
      "Mindfulness practices"
    ],
    icon: Heart
  },
  {
    technique: "Heat and Massage",
    description: "Physical comfort measures to ease pain",
    methods: [
      "Warm bath or shower",
      "Heating pad on lower back",
      "Counter-pressure massage",
      "Gentle back rubs",
      "Hot compress on perineum",
      "Essential oils (with approval)"
    ],
    icon: Target
  },
  {
    technique: "Distraction and Environment",
    description: "Create a calming environment and mental distractions",
    methods: [
      "Calming music or sounds",
      "Dim lighting",
      "Favorite comfort items",
      "Light activities between contractions",
      "Conversation with support person",
      "Watching movies or TV"
    ],
    icon: CheckCircle
  }
];

const whenToGoToHospital = [
  {
    scenario: "First Baby",
    rule: "4-1-1 or 5-1-1 Rule",
    description: "Contractions every 4-5 minutes, lasting 1 minute, for 1 hour",
    details: [
      "Contractions are regular and strong",
      "Can't talk through contractions",
      "Pattern has been consistent for at least 1 hour",
      "Pain requires focused breathing"
    ]
  },
  {
    scenario: "Previous Babies",
    rule: "Earlier Departure",
    description: "Head to hospital sooner as labor may progress faster",
    details: [
      "Contractions every 6-8 minutes",
      "Any significant change in pattern",
      "Water breaks",
      "Strong urge to push"
    ]
  },
  {
    scenario: "Special Circumstances",
    rule: "Modified Guidelines",
    description: "Different timing based on individual factors",
    details: [
      "Live far from hospital (leave earlier)",
      "Previous rapid labors",
      "Group B Strep positive",
      "High-risk pregnancy factors"
    ]
  }
];

const preparationChecklist = [
  {
    category: "Physical Preparation",
    items: [
      "Pack hospital bag for mom and baby",
      "Prepare birth plan and copies",
      "Install car seat properly",
      "Arrange pet and sibling care",
      "Stock home with postpartum supplies",
      "Prepare easy meals for after birth"
    ]
  },
  {
    category: "Mental and Emotional",
    items: [
      "Practice relaxation techniques",
      "Review labor positions and breathing",
      "Discuss pain management preferences",
      "Prepare mentally for labor variations",
      "Arrange support team communication",
      "Plan for different scenarios"
    ]
  },
  {
    category: "Practical Arrangements",
    items: [
      "Know hospital route and parking",
      "Have backup transportation plan",
      "Charge all electronic devices",
      "Notify employer about leave plans",
      "Arrange sibling care backup plan",
      "Prepare contact list for announcements"
    ]
  }
];

export default function StagesOfPreLabor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Stages of Pre-Labor: Early Signs & What to Expect
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Understanding the stages of pre-labor helps you recognize early signs, distinguish true labor 
            from false labor, and know when it&apos;s time to head to the hospital. Prepare for your birth with confidence.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Pre-Labor Stages */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              The Four Stages of Pre-Labor
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              Pre-labor can last anywhere from hours to weeks. Understanding each stage helps you prepare 
              and respond appropriately to your body&apos;s signals.
            </p>
            
            <div className="space-y-8">
              {preLaborStages.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-2xl border border-pink-100/40 p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 rounded-full bg-pink-100 flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-800">{stage.stage}</h3>
                          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-pink-100 text-pink-700">
                            {stage.timing}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{stage.description}</p>
                        <p className="text-purple-600 font-medium">Duration: {stage.duration}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                          Key Changes
                        </h4>
                        <ul className="space-y-2">
                          {stage.keyChanges.map((change, changeIndex) => (
                            <li key={changeIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Activity className="w-5 h-5 text-green-600" />
                          Common Symptoms
                        </h4>
                        <ul className="space-y-2">
                          {stage.symptoms.map((symptom, symptomIndex) => (
                            <li key={symptomIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0 mt-2"></div>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-600" />
                          What to Do
                        </h4>
                        <ul className="space-y-2">
                          {stage.whatToDo.map((action, actionIndex) => (
                            <li key={actionIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                              {action}
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

          {/* True vs False Labor */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              True Labor vs False Labor (Prodromal Labor)
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              Learning to distinguish between true labor and false labor can save you unnecessary trips 
              to the hospital and help you prepare appropriately.
            </p>

            <div className="space-y-8">
              {trueVsFalseLabor.map((comparison, index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{comparison.aspect}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50/60 rounded-lg p-6">
                      <h4 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        True Labor Signs
                      </h4>
                      <ul className="space-y-2">
                        {comparison.trueLaborSigns.map((sign, signIndex) => (
                          <li key={signIndex} className="text-sm text-gray-700 flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-yellow-50/60 rounded-lg p-6">
                      <h4 className="font-semibold text-yellow-700 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        False Labor Signs
                      </h4>
                      <ul className="space-y-2">
                        {comparison.falseLaborSigns.map((sign, signIndex) => (
                          <li key={signIndex} className="text-sm text-gray-700 flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* When to Call Doctor */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              When to Contact Your Healthcare Provider
            </h2>
            <div className="space-y-6">
              {warningSignsToCallDoctor.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className={`rounded-xl border-2 p-6 ${
                    category.color === 'red' ? 'bg-red-50/60 border-red-200' :
                    category.color === 'orange' ? 'bg-orange-50/60 border-orange-200' :
                    'bg-yellow-50/60 border-yellow-200'
                  }`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-full flex-shrink-0 ${
                        category.color === 'red' ? 'bg-red-100' :
                        category.color === 'orange' ? 'bg-orange-100' :
                        'bg-yellow-100'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          category.color === 'red' ? 'text-red-600' :
                          category.color === 'orange' ? 'text-orange-600' :
                          'text-yellow-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold mb-4 ${
                          category.color === 'red' ? 'text-red-800' :
                          category.color === 'orange' ? 'text-orange-800' :
                          'text-yellow-800'
                        }`}>
                          {category.urgency}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.signs.map((sign, signIndex) => (
                        <div key={signIndex} className="flex items-start gap-3">
                          <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            category.color === 'red' ? 'text-red-600' :
                            category.color === 'orange' ? 'text-orange-600' :
                            'text-yellow-600'
                          }`} />
                          <span className={`font-medium ${
                            category.color === 'red' ? 'text-red-800' :
                            category.color === 'orange' ? 'text-orange-800' :
                            'text-yellow-800'
                          }`}>
                            {sign}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comfort Measures */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Comfort Measures During Pre-Labor
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              These techniques can help you manage discomfort and stay calm during the pre-labor period.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {comfortMeasures.map((measure, index) => {
                const IconComponent = measure.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-blue-50/60 to-teal-50/60 rounded-xl border border-blue-100/40 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-blue-100">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{measure.technique}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{measure.description}</p>
                    <ul className="space-y-2">
                      {measure.methods.map((method, methodIndex) => (
                        <li key={methodIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* When to Go to Hospital */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              When to Go to the Hospital
            </h2>
            <div className="space-y-6">
              {whenToGoToHospital.map((guideline, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50/60 to-pink-50/60 rounded-xl border border-purple-100/40 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-purple-100 flex-shrink-0">
                      <Baby className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{guideline.scenario}</h3>
                      <p className="text-purple-600 font-semibold mb-2">{guideline.rule}</p>
                      <p className="text-gray-700 mb-4">{guideline.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {guideline.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Checklist */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Pre-Labor Preparation Checklist
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              Use these checklists to ensure you&apos;re prepared when labor begins.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {preparationChecklist.map((category, index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <input 
                          type="checkbox" 
                          className="mt-1 w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                          id={`${index}-${itemIndex}`}
                        />
                        <label 
                          htmlFor={`${index}-${itemIndex}`}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Remember Section */}
          <div className="bg-gradient-to-r from-green-50/60 to-blue-50/60 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Remember: Every Labor is Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">First-Time Mothers:</h4>
                <p className="text-sm">
                  Pre-labor and early labor often last longer. Don&apos;t rush to the hospital too early. 
                  Rest when you can and trust your body&apos;s process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Experienced Mothers:</h4>
                <p className="text-sm">
                  Labor may progress more quickly. Pay attention to early signs and be prepared 
                  to leave for the hospital sooner than with your first baby.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Trust Your Instincts:</h4>
                <p className="text-sm">
                  You know your body best. If something feels different or concerning, 
                  don&apos;t hesitate to contact your healthcare provider.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Stay Flexible:</h4>
                <p className="text-sm">
                  Birth doesn&apos;t always follow textbook patterns. Be prepared to adapt your 
                  plans while keeping safety as the top priority.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Prepare for Your Labor Journey
            </h2>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Understanding pre-labor stages helps you feel confident and prepared. Learn more about 
              labor, delivery options, and what to expect during your birth experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog/delivery-methods-comparison"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                Delivery Options Guide
              </Link>
              <Link 
                href="/tools/contraction-timer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors"
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