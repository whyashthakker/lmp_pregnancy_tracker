import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Calendar, 
  ArrowRight, 
  Heart, 
  Baby, 
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Essential Pregnancy Terms Guide: Full-Term, Early, Late & More | LMP Tracker',
  description: 'Complete guide to essential pregnancy terminology including full-term, early term, late term, post-term, preterm, and viability. Understand when your baby is considered ready for birth.',
  keywords: 'pregnancy terms, full term pregnancy, early term, late term, post term, preterm birth, fetal viability, pregnancy terminology, gestational age',
  openGraph: {
    title: 'Essential Pregnancy Terms Guide: Full-Term, Early, Late & More',
    description: 'Learn the important pregnancy terms every expecting parent should know, from preterm to post-term delivery.',
    type: 'article',
  },
};

export default function PregnancyTermsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-pink-600 hover:text-pink-700 font-medium mb-4 inline-flex items-center gap-2"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
              <Baby className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Essential Pregnancy Terms Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding key pregnancy terminology from preterm to post-term delivery. 
            Learn when your baby is considered ready for birth and what each term means.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>October 3, 2025</span>
            </div>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-500" />
              <span>Pregnancy Education</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-12 border border-pink-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Info className="h-6 w-6 text-pink-500" />
              Why Understanding Pregnancy Terms Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As you progress through your pregnancy journey, you&apos;ll encounter various medical terms that 
              describe different stages and timing of delivery. Understanding these terms helps you:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Better communicate with your healthcare provider</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Understand your baby&apos;s development and readiness for birth</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Know what to expect at different stages of pregnancy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Make informed decisions about your pregnancy care</span>
              </li>
            </ul>
          </div>

          {/* Gestational Age Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Gestational Age</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Before diving into specific terms, it&apos;s important to understand how pregnancy is measured. 
              <strong>Gestational age</strong> is calculated from the first day of your last menstrual period (LMP), 
              not from conception. A full-term pregnancy is considered 40 weeks of gestational age.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-blue-800 mb-2">Key Point</h3>
              <p className="text-blue-700">
                Gestational age = Current date - First day of last menstrual period (LMP)
              </p>
            </div>
          </section>

          {/* Main Terms Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Pregnancy Terms</h2>

            {/* Preterm */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Preterm (Premature)</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-semibold text-red-600 mb-3">Born before 37 weeks</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Preterm birth occurs when a baby is born before completing 37 weeks of pregnancy. 
                    Preterm babies may need special medical care as their organs may not be fully developed.
                  </p>
                  <h4 className="font-semibold text-gray-800 mb-2">Subcategories:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Extremely preterm:</strong> Less than 28 weeks</li>
                    <li><strong>Very preterm:</strong> 28-32 weeks</li>
                    <li><strong>Moderate to late preterm:</strong> 32-37 weeks</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-red-800 mb-3">What This Means:</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• May require NICU care</li>
                    <li>• Higher risk of complications</li>
                    <li>• Lungs may not be fully mature</li>
                    <li>• Special monitoring needed</li>
                    <li>• Often excellent long-term outcomes with care</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Early Term */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Early Term</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-semibold text-yellow-600 mb-3">37 weeks 0 days - 38 weeks 6 days</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Babies born during this period are considered &quot;term&quot; but on the earlier side. 
                    While generally healthy, they may have slightly higher risks compared to full-term babies.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Many healthcare providers now prefer to wait until at least 39 weeks for elective 
                    deliveries (like scheduled C-sections) unless there&apos;s a medical reason for earlier delivery.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-yellow-800 mb-3">What This Means:</h4>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>• Generally healthy babies</li>
                    <li>• Slightly higher risk of breathing issues</li>
                    <li>• May have feeding challenges initially</li>
                    <li>• Usually no special care needed</li>
                    <li>• Close monitoring in first days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Full Term */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Full Term</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-semibold text-green-600 mb-3">39 weeks 0 days - 40 weeks 6 days</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This is considered the optimal time for birth. Babies born during this period have 
                    the lowest risk of complications and the best outcomes. Their organs, especially 
                    the lungs and brain, are fully mature.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The traditional &quot;due date&quot; of 40 weeks falls within this range. Most spontaneous 
                    labors occur during this period.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-3">What This Means:</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Optimal timing for birth</li>
                    <li>• Fully developed organs</li>
                    <li>• Lowest risk of complications</li>
                    <li>• Best feeding outcomes</li>
                    <li>• Excellent long-term development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Late Term */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Late Term</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-semibold text-blue-600 mb-3">41 weeks 0 days - 41 weeks 6 days</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Babies born during this period are still considered healthy, though they&apos;re past 
                    the traditional 40-week due date. Many healthcare providers begin increased 
                    monitoring during this time.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    About 5-10% of pregnancies naturally extend into this period. While generally safe, 
                    some providers may discuss induction options.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-3">What This Means:</h4>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Still considered normal timing</li>
                    <li>• Increased monitoring recommended</li>
                    <li>• May discuss induction options</li>
                    <li>• Generally excellent outcomes</li>
                    <li>• Baby may be larger</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Post Term */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Post-Term (Overdue)</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-semibold text-purple-600 mb-3">42 weeks or more</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Post-term pregnancies occur in about 3-5% of pregnancies. While many babies 
                    are born healthy, there are increased risks that require careful monitoring 
                    and often medical intervention.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Most healthcare providers will recommend induction by 42 weeks to reduce 
                    risks to both mother and baby.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-800 mb-3">What This Means:</h4>
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• Requires close medical monitoring</li>
                    <li>• May need induction of labor</li>
                    <li>• Increased risk of complications</li>
                    <li>• Baby may be larger (macrosomia)</li>
                    <li>• Higher chance of C-section</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Viability Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Star className="h-8 w-8 text-indigo-500" />
                Understanding Fetal Viability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Fetal viability</strong> refers to the ability of a fetus to survive outside 
                the womb with medical support. This is an important concept in pregnancy care.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Milestones:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>22-24 weeks:</strong> Threshold of viability with intensive medical care
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>28 weeks:</strong> Significantly improved survival rates
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>32 weeks:</strong> Excellent survival rates with good outcomes
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>37+ weeks:</strong> Considered term with minimal intervention needed
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-indigo-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Factors:</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Lung development (surfactant production)</li>
                    <li>• Brain development and maturation</li>
                    <li>• Immune system development</li>
                    <li>• Temperature regulation ability</li>
                    <li>• Feeding and digestive capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Summary Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pregnancy Timeline Summary</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <div>
                    <strong className="text-red-800">Less than 37 weeks:</strong>
                    <span className="text-red-700 ml-2">Preterm (Premature)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <Clock className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <strong className="text-yellow-800">37-38 weeks 6 days:</strong>
                    <span className="text-yellow-700 ml-2">Early Term</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">39-40 weeks 6 days:</strong>
                    <span className="text-green-700 ml-2">Full Term (Optimal)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <Calendar className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-800">41-41 weeks 6 days:</strong>
                    <span className="text-blue-700 ml-2">Late Term</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <AlertTriangle className="h-6 w-6 text-purple-500 flex-shrink-0" />
                  <div>
                    <strong className="text-purple-800">42+ weeks:</strong>
                    <span className="text-purple-700 ml-2">Post-Term (Overdue)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-pink-500" />
                Key Takeaways for Expecting Parents
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Remember:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Every pregnancy is unique - these are guidelines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>39-40 weeks is the optimal time for birth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Your healthcare provider will monitor you closely</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Most babies are born healthy regardless of exact timing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">When to Contact Your Provider:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Signs of preterm labor before 37 weeks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Decreased baby movement at any stage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Any concerning symptoms or changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Questions about your pregnancy timeline</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* Related Articles */}
        <section className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/pregnancy-symptoms-week-by-week"
              className="group block bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wide">
                    Symptoms
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  Pregnancy Symptoms Week by Week
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Track normal symptoms, warning signs, and what to expect during each trimester.
                </p>
                <div className="flex items-center gap-2 text-pink-600 font-medium text-sm">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              href="/blog/third-trimester-symptoms"
              className="group block bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100">
                    <Baby className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                    Late Pregnancy
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  Third Trimester Guide
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Complete guide to third trimester symptoms and preparing for labor.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-medium text-sm">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              href="/blog/pregnancy-warning-signs"
              className="group block bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                    Health & Safety
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  Pregnancy Warning Signs
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Learn important warning signs that require immediate medical attention.
                </p>
                <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-3xl p-8 lg:p-12 text-center border border-pink-100/40">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
              Stay Informed Throughout Your Pregnancy
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get weekly pregnancy updates, essential health tips, and important milestone reminders 
              delivered to your inbox. Join thousands of expecting parents on their journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-pink-200/60 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300/60 focus:border-pink-400/60 text-gray-700 placeholder-gray-500"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all font-semibold shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}