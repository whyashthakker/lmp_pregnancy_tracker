import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Heart, Apple, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pregnancy Nutrition: Essential Foods for Every Trimester',
  description: 'Discover the key nutrients you and your baby need during each stage of pregnancy, plus meal planning tips and healthy food choices.',
  keywords: 'pregnancy nutrition, prenatal diet, pregnancy foods, healthy pregnancy eating, folic acid, iron, calcium',
};

export default function PregnancyNutritionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white/60 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/blog" className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Apple className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-medium text-pink-600 uppercase tracking-wide">
              Nutrition Guide
            </span>
          </div>
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            Pregnancy Nutrition: Essential Foods for Every Trimester
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              January 12, 2025
            </div>
            <span>6 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Proper nutrition during pregnancy is one of the most important things you can do for your baby&apos;s development and your own health. Your nutritional needs change throughout pregnancy, and understanding what to eat when can help ensure both you and your baby thrive.
          </p>

          <h2 className="text-2xl font-medium text-gray-800 mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-400" />
            Key Nutrients for Pregnancy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Folic Acid
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Prevents neural tube defects and supports brain development.
              </p>
              <p className="text-xs text-gray-500 mb-2"><strong>Daily need:</strong> 600-800 mcg</p>
              <p className="text-xs text-gray-500"><strong>Sources:</strong> Leafy greens, citrus fruits, fortified cereals, beans</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Iron
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Prevents anemia and supports increased blood volume.
              </p>
              <p className="text-xs text-gray-500 mb-2"><strong>Daily need:</strong> 27 mg</p>
              <p className="text-xs text-gray-500"><strong>Sources:</strong> Lean meat, poultry, fish, dried beans, fortified cereals</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <h3 className="font-medium text-gray-800 mb-3">Calcium</h3>
              <p className="text-gray-600 text-sm mb-3">
                Essential for baby&apos;s bone and tooth development.
              </p>
              <p className="text-xs text-gray-500 mb-2"><strong>Daily need:</strong> 1,000 mg</p>
              <p className="text-xs text-gray-500"><strong>Sources:</strong> Dairy products, fortified plant milks, leafy greens</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <h3 className="font-medium text-gray-800 mb-3">Protein</h3>
              <p className="text-gray-600 text-sm mb-3">
                Supports rapid tissue growth and development.
              </p>
              <p className="text-xs text-gray-500 mb-2"><strong>Daily need:</strong> 71g</p>
              <p className="text-xs text-gray-500"><strong>Sources:</strong> Lean meats, eggs, dairy, beans, nuts, tofu</p>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-6">Nutrition by Trimester</h2>

          <div className="space-y-8 mb-8">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
              <h3 className="text-xl font-medium text-gray-800 mb-4">First Trimester (Weeks 1-12)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Focus Areas:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Folic acid supplementation</li>
                    <li>• Managing morning sickness</li>
                    <li>• Staying hydrated</li>
                    <li>• Avoiding harmful substances</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Best Foods:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Ginger for nausea</li>
                    <li>• Small, frequent meals</li>
                    <li>• Crackers and dry toast</li>
                    <li>• Fortified cereals</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Second Trimester (Weeks 13-27)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Focus Areas:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Increased calorie needs</li>
                    <li>• Iron-rich foods</li>
                    <li>• Calcium for bone development</li>
                    <li>• Omega-3 fatty acids</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Best Foods:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Salmon and sardines</li>
                    <li>• Greek yogurt</li>
                    <li>• Spinach and kale</li>
                    <li>• Lean beef and poultry</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Third Trimester (Weeks 28-40)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Focus Areas:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Brain development support</li>
                    <li>• Managing heartburn</li>
                    <li>• Preparing for breastfeeding</li>
                    <li>• Energy for labor</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Best Foods:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• DHA-rich fish</li>
                    <li>• Smaller, frequent meals</li>
                    <li>• High-fiber foods</li>
                    <li>• Plenty of water</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-4">Foods to Avoid During Pregnancy</h2>
          
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-medium mb-2">Completely Avoid:</h4>
                <ul className="space-y-1">
                  <li>• Raw or undercooked meats</li>
                  <li>• Raw eggs and unpasteurized dairy</li>
                  <li>• High-mercury fish (shark, swordfish)</li>
                  <li>• Alcohol and smoking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Limit Intake:</h4>
                <ul className="space-y-1">
                  <li>• Caffeine (less than 200mg/day)</li>
                  <li>• Processed and high-sodium foods</li>
                  <li>• Added sugars and sweets</li>
                  <li>• Large fish (limit tuna)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Quick Meal Planning Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Breakfast</h4>
                <p>Fortified cereal with berries and milk, or whole grain toast with avocado</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Lunch</h4>
                <p>Quinoa salad with grilled chicken, or lentil soup with whole grain bread</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Dinner</h4>
                <p>Baked salmon with roasted vegetables, or lean beef stir-fry with brown rice</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}