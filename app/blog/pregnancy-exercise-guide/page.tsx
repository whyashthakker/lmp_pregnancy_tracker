import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, AlertCircle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Safe Pregnancy Exercise Guide | Your Journey',
  description: 'Discover safe exercises during pregnancy, workout routines by trimester, and important precautions for expectant mothers.',
  keywords: 'pregnancy exercise, safe pregnancy workouts, prenatal fitness, exercise during pregnancy, pregnancy yoga',
  openGraph: {
    title: 'Safe Pregnancy Exercise Guide | Your Journey',
    description: 'Discover safe exercises during pregnancy and workout routines by trimester.',
    type: 'article',
  },
};

export default function PregnancyExerciseGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Safe Pregnancy Exercise Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Regular exercise during pregnancy can help you feel better, prepare your body for labor, 
            and promote a healthy pregnancy. Learn about safe exercises and precautions to take.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-2xl p-8 mb-12 border border-pink-100/40">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stay Active, Stay Healthy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Maintaining an active lifestyle during pregnancy offers numerous benefits for both you and your baby. 
              This guide will help you understand safe exercise options for each trimester and important precautions 
              to ensure a healthy pregnancy journey.
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Exercise During Pregnancy</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Physical Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Improved cardiovascular health</li>
                  <li>• Better posture and back support</li>
                  <li>• Reduced pregnancy discomfort</li>
                  <li>• Enhanced stamina for labor</li>
                  <li>• Faster postpartum recovery</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Mental Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reduced stress and anxiety</li>
                  <li>• Improved mood and energy</li>
                  <li>• Better sleep quality</li>
                  <li>• Increased self-confidence</li>
                  <li>• Enhanced body image</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safe Exercises by Trimester</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">First Trimester (Weeks 1-12)</h3>
                <p className="text-gray-600 mb-3">Most exercises are safe, but listen to your body and avoid overheating.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Walking (30 minutes daily)</li>
                  <li>Swimming and water aerobics</li>
                  <li>Prenatal yoga</li>
                  <li>Low-impact aerobics</li>
                  <li>Stationary cycling</li>
                  <li>Light strength training</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Second Trimester (Weeks 13-26)</h3>
                <p className="text-gray-600 mb-3">Energy levels often improve, but avoid exercises lying on your back.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Modified strength training</li>
                  <li>Prenatal Pilates</li>
                  <li>Swimming (excellent option)</li>
                  <li>Walking and hiking</li>
                  <li>Pregnancy-safe yoga poses</li>
                  <li>Elliptical training</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Third Trimester (Weeks 27-40)</h3>
                <p className="text-gray-600 mb-3">Focus on gentle, low-impact exercises and pelvic floor strengthening.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Gentle walking</li>
                  <li>Swimming and floating</li>
                  <li>Prenatal yoga</li>
                  <li>Pelvic floor exercises</li>
                  <li>Stretching routines</li>
                  <li>Birth ball exercises</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <h3 className="font-medium text-red-800 mb-2">Exercises to Avoid</h3>
              <ul className="list-disc list-inside space-y-1 text-red-700">
                <li>Contact sports (soccer, basketball, hockey)</li>
                <li>Activities with fall risk (skiing, horseback riding)</li>
                <li>Exercises lying flat on your back after first trimester</li>
                <li>Hot yoga or Bikram yoga</li>
                <li>Scuba diving</li>
                <li>High-altitude activities above 6,000 feet</li>
                <li>Heavy weightlifting or straining</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exercise Guidelines and Precautions</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">General Guidelines</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Aim for 150 minutes of moderate exercise weekly</li>
                  <li>Start slowly if you're new to exercise</li>
                  <li>Stay hydrated before, during, and after</li>
                  <li>Wear comfortable, supportive clothing</li>
                  <li>Exercise in well-ventilated areas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Warning Signs to Stop</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Chest pain or shortness of breath</li>
                  <li>Dizziness or fainting</li>
                  <li>Vaginal bleeding</li>
                  <li>Fluid leaking from vagina</li>
                  <li>Calf pain or swelling</li>
                  <li>Regular painful contractions</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800">
                <strong>Always consult your healthcare provider</strong> before starting any exercise program during pregnancy. 
                They can provide personalized recommendations based on your health status and pregnancy complications.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white mt-12">
            <h2 className="text-2xl font-semibold mb-4">
              Track Your Pregnancy Journey
            </h2>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Use our pregnancy tracker to monitor your symptoms, track baby&apos;s development, 
              and stay informed about what to expect each week.
            </p>
            <Link 
              href="/"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Start Tracking Now
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}