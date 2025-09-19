import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Baby, Clock, Target, Calculator, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pregnancy Due Date Calculator: Accurate Delivery Date Prediction 2025',
  description: 'Calculate your pregnancy due date with our accurate due date calculator. Learn about LMP method, ultrasound dating, and factors affecting delivery timing.',
  keywords: 'pregnancy due date calculator, calculate due date, when is my baby due, pregnancy calendar, estimated delivery date, LMP calculator, conception date calculator',
};

const calculationMethods = [
  {
    title: "Last Menstrual Period (LMP)",
    description: "Most common method used by healthcare providers",
    accuracy: "85% accuracy",
    formula: "LMP + 280 days (40 weeks)",
    icon: Calendar,
    details: [
      "Based on 28-day cycle average",
      "Assumes ovulation on day 14",
      "Standard medical practice",
      "May need adjustment for irregular cycles"
    ]
  },
  {
    title: "Ultrasound Dating",
    description: "Medical imaging provides precise measurements",
    accuracy: "95% accuracy in first trimester",
    formula: "Based on fetal measurements",
    icon: Target,
    details: [
      "Most accurate in early pregnancy",
      "Measures crown-rump length",
      "Accounts for individual development",
      "Preferred when LMP is uncertain"
    ]
  },
  {
    title: "Conception Date",
    description: "If you know when conception occurred",
    accuracy: "90% accuracy",
    formula: "Conception date + 266 days (38 weeks)",
    icon: Baby,
    details: [
      "Useful for IVF pregnancies",
      "Known ovulation timing",
      "Fertility tracking data",
      "Shorter than LMP method by 14 days"
    ]
  }
];

const milestones = [
  { week: 12, milestone: "End of first trimester", description: "Lower miscarriage risk" },
  { week: 20, milestone: "Anatomy scan", description: "Detailed ultrasound examination" },
  { week: 24, milestone: "Viability milestone", description: "Baby could survive with intensive care" },
  { week: 28, milestone: "Third trimester begins", description: "Rapid brain development" },
  { week: 37, milestone: "Early term", description: "Baby considered full-term" },
  { week: 40, milestone: "Due date", description: "Expected delivery date" },
  { week: 42, milestone: "Post-term", description: "Medical intervention may be needed" }
];

const factors = [
  {
    title: "First-Time Mothers",
    description: "Tend to deliver closer to or after their due date",
    impact: "Average: 40 weeks + 5 days"
  },
  {
    title: "Experienced Mothers", 
    description: "Often deliver a few days before their due date",
    impact: "Average: 40 weeks - 2 days"
  },
  {
    title: "Multiple Pregnancies",
    description: "Twins and multiples typically arrive earlier",
    impact: "Average: 35-37 weeks"
  },
  {
    title: "Cycle Length",
    description: "Longer cycles may mean later ovulation",
    impact: "Adjust due date accordingly"
  }
];

export default function PregnancyDueDateCalculator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Pregnancy Due Date Calculator
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Calculate your estimated delivery date using proven medical methods. 
            Understanding your due date helps you prepare for your baby&apos;s arrival and track important milestones.
          </p>
        </div>

        {/* Interactive Calculator Section */}
        <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-2xl p-8 mb-12 border border-pink-100/40">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Calculate Your Due Date
          </h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              For an interactive due date calculator with personalized results, use our main pregnancy tracker:
            </p>
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
            >
              Use Interactive Calculator
            </Link>
          </div>
        </div>

        {/* Calculation Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Due Date Calculation Methods
          </h2>
          <div className="space-y-8">
            {calculationMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{method.title}</h3>
                        <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                          {method.accuracy}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <p className="font-mono text-sm text-gray-700">
                          <strong>Formula:</strong> {method.formula}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {method.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pregnancy Milestones Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Key Pregnancy Milestones
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {milestone.week}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Week {milestone.week}: {milestone.milestone}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factors Affecting Due Date */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Factors That Affect Your Due Date
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {factors.map((factor, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/80 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{factor.title}</h3>
                <p className="text-gray-600 mb-3">{factor.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-800">{factor.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50/60 rounded-2xl border border-amber-100/60 p-8 mb-12">
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-semibold text-amber-800">
              Important Reminders
            </h2>
          </div>
          <div className="space-y-4 text-amber-800">
            <p>
              <strong>Only 5% of babies are born on their exact due date.</strong> Most babies arrive within 
              2 weeks before or after the estimated due date.
            </p>
            <p>
              <strong>Due dates are estimates.</strong> Your baby will arrive when they&apos;re ready, 
              typically between 37-42 weeks of pregnancy.
            </p>
            <p>
              <strong>Consult your healthcare provider</strong> for the most accurate due date determination, 
              especially if you have irregular periods or uncertainty about your LMP.
            </p>
          </div>
        </div>

        {/* Delivery Statistics */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            When Do Babies Actually Arrive?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
              <p className="text-green-800 font-medium">Before 39 weeks</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
              <p className="text-blue-800 font-medium">Between 39-41 weeks</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
              <p className="text-purple-800 font-medium">After 41 weeks</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <Clock className="w-12 h-12 mx-auto mb-4 text-pink-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Start Tracking Your Pregnancy
          </h2>
          <p className="text-pink-100 mb-6 leading-relaxed">
            Get personalized week-by-week updates, track symptoms, and countdown to your due date 
            with our comprehensive pregnancy tracker.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Calculate Your Due Date Now
          </Link>
        </div>
      </div>
    </div>
  );
}