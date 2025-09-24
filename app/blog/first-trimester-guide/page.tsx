import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Baby, Heart, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Your First Trimester: What to Expect - Pregnancy Tracker Blog',
  description: 'A comprehensive guide to navigating the first 12 weeks of pregnancy, from early symptoms to important milestones and what to expect.',
  keywords: 'first trimester, early pregnancy, pregnancy symptoms, 12 weeks pregnant, pregnancy guide',
};

export default function FirstTrimesterGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/blog" className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-2 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                  <Baby className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-gray-600">Pregnancy Guide</span>
              </div>
            </div>
            <nav className="hidden sm:flex items-center gap-4">
              <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium">
                Tracker
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Baby className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-medium text-pink-600 uppercase tracking-wide">
              Pregnancy Guide
            </span>
          </div>
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            Your First Trimester: What to Expect
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              January 15, 2025
            </div>
            <span>8 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-2xl p-6 lg:p-8 mb-8 border border-pink-100/50">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-pink-100">
                <AlertCircle className="w-5 h-5 text-pink-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Important Note</h3>
                <p className="text-gray-600 mb-0 text-sm leading-relaxed">
                  Every pregnancy is unique. This guide provides general information, but always consult with your healthcare provider for personalized advice.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-4 flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-400" />
            Welcome to Your First Trimester
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            The first trimester spans from conception through week 12 of pregnancy. This period is crucial for your baby&apos;s development and often brings significant changes to your body. Understanding what to expect can help you navigate this exciting yet sometimes challenging time.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 1-4: The Beginning</h3>
          <ul className="space-y-2 mb-6 text-gray-600">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2.5 flex-shrink-0" />
              <span><strong>Conception occurs:</strong> Usually around week 2 of your menstrual cycle</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2.5 flex-shrink-0" />
              <span><strong>Implantation:</strong> The fertilized egg attaches to the uterine wall</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2.5 flex-shrink-0" />
              <span><strong>Early symptoms:</strong> Missed period, mild cramping, breast tenderness</span>
            </li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 5-8: Rapid Development</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is when most women discover they&apos;re pregnant. Your baby is developing rapidly:
          </p>
          <ul className="space-y-2 mb-6 text-gray-600">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2.5 flex-shrink-0" />
              <span><strong>Week 5:</strong> Heart begins to beat, neural tube forms</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2.5 flex-shrink-0" />
              <span><strong>Week 6:</strong> Brain and nervous system develop rapidly</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2.5 flex-shrink-0" />
              <span><strong>Week 7:</strong> Arm and leg buds appear</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2.5 flex-shrink-0" />
              <span><strong>Week 8:</strong> Major organs begin forming</span>
            </li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 9-12: End of First Trimester</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            By the end of the first trimester, your baby has developed most major organs and is officially called a fetus. Morning sickness often begins to subside, and the risk of miscarriage significantly decreases.
          </p>

          <h2 className="text-2xl font-medium text-gray-800 mb-4">Common First Trimester Symptoms</h2>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 mb-6">
            <h4 className="font-medium text-gray-800 mb-3">Physical Symptoms</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <ul className="space-y-2">
                <li>• Morning sickness and nausea</li>
                <li>• Breast tenderness and swelling</li>
                <li>• Frequent urination</li>
                <li>• Fatigue and exhaustion</li>
              </ul>
              <ul className="space-y-2">
                <li>• Food aversions and cravings</li>
                <li>• Heightened sense of smell</li>
                <li>• Mild cramping</li>
                <li>• Constipation</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 mb-6">
            <h4 className="font-medium text-gray-800 mb-3">Emotional Changes</h4>
            <p className="text-gray-600 mb-0">
              Hormonal changes can cause mood swings, anxiety, excitement, and emotional sensitivity. These feelings are completely normal and usually stabilize as you progress through pregnancy.
            </p>
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-4">Important First Trimester Tasks</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Schedule Your First Prenatal Appointment</h4>
                <p className="text-gray-600 text-sm">Usually scheduled around weeks 8-10, this visit establishes your care plan.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Start Taking Prenatal Vitamins</h4>
                <p className="text-gray-600 text-sm">Folic acid is crucial for preventing neural tube defects.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Make Healthy Lifestyle Changes</h4>
                <p className="text-gray-600 text-sm">Quit smoking, avoid alcohol, limit caffeine, and eat a balanced diet.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Remember</h3>
            <p className="text-gray-600 mb-0">
              The first trimester is a time of incredible change and development. Be patient with yourself, rest when you need to, and don&apos;t hesitate to reach out to your healthcare provider with any concerns or questions.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}