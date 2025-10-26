import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Heart, AlertTriangle, Check, Calendar, Thermometer, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Early Pregnancy Symptoms: Complete Signs & Timeline Guide | When Do Pregnancy Symptoms Start?',
  description: 'Comprehensive guide to early pregnancy symptoms and signs. Learn when pregnancy symptoms start, what to expect in the first weeks, and how to distinguish early pregnancy signs from PMS.',
  keywords: 'early pregnancy symptoms, first signs of pregnancy, pregnancy symptoms timeline, when do pregnancy symptoms start, early pregnancy signs, am I pregnant symptoms',
  openGraph: {
    title: 'Early Pregnancy Symptoms: Complete Signs & Timeline Guide',
    description: 'Learn about early pregnancy symptoms, when they start, and how to recognize the first signs of pregnancy.',
    type: 'article',
  },
};

export default function EarlyPregnancySymptomsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-pink-100">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">
                Early Pregnancy Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Early Pregnancy Symptoms: Complete Signs & Timeline Guide
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn to recognize the earliest signs of pregnancy, understand when symptoms typically start, and distinguish pregnancy symptoms from other conditions.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Updated October 26, 2025
              </div>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Thermometer className="w-6 h-6 text-pink-600" />
              When Do Early Pregnancy Symptoms Start?
            </h2>
            
            <Card className="mb-6 border-pink-200 bg-pink-50">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Key Timeline:</strong> Early pregnancy symptoms can start as early as 1-2 weeks after conception (around the time of your missed period), but most women notice symptoms between 4-6 weeks of pregnancy. Some may not experience symptoms until 8 weeks or later.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">First Signs Timeline:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>1-2 weeks after conception:</strong> Implantation bleeding, light cramping</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>3-4 weeks:</strong> Missed period, breast tenderness, fatigue</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>4-6 weeks:</strong> Nausea, increased urination, mood changes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>6-8 weeks:</strong> Morning sickness peaks, food aversions</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Most Common Early Pregnancy Symptoms</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Missed Period</h3>
            <p className="mb-4">
              A missed period is often the first sign that prompts women to take a pregnancy test. However, some women may experience light bleeding or spotting around the time their period is due, which could be implantation bleeding.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Breast Changes</h3>
            <p className="mb-4">
              Hormonal changes can cause breasts to become tender, swollen, or sore. You may also notice:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Darkening of the areolas</li>
              <li>Increased sensitivity</li>
              <li>Feeling fuller or heavier</li>
              <li>Tingling sensations</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Fatigue and Exhaustion</h3>
            <p className="mb-4">
              Extreme tiredness is one of the earliest pregnancy symptoms. Rising progesterone levels can make you feel sleepy and sluggish, even in the first few weeks of pregnancy.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Nausea and Morning Sickness</h3>
            <p className="mb-4">
              Despite the name "morning sickness," nausea can occur at any time of day. It typically starts around 6 weeks of pregnancy and may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Queasiness with or without vomiting</li>
              <li>Food aversions</li>
              <li>Sensitivity to smells</li>
              <li>Feeling sick when hungry or full</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Frequent Urination</h3>
            <p className="mb-4">
              You may notice the need to urinate more frequently, especially at night. This occurs due to hormonal changes and increased blood flow to the kidneys.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">6. Food Aversions and Cravings</h3>
            <div className="flex items-start gap-3 mb-4">
              <Coffee className="w-5 h-5 text-brown-600 mt-1" />
              <div>
                <p className="mb-2">
                  Many women develop strong aversions to foods they previously enjoyed, particularly:
                </p>
                <ul className="list-disc pl-6">
                  <li>Coffee and caffeinated beverages</li>
                  <li>Spicy or strongly flavored foods</li>
                  <li>Meat and certain proteins</li>
                  <li>Foods with strong odors</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">7. Mood Changes</h3>
            <p className="mb-4">
              Hormonal fluctuations can cause emotional changes including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Mood swings</li>
              <li>Increased emotional sensitivity</li>
              <li>Irritability</li>
              <li>Feeling weepy or overwhelmed</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">8. Implantation Bleeding</h3>
            <p className="mb-4">
              Light spotting that occurs 10-14 days after conception when the fertilized egg attaches to the uterine wall. This bleeding is typically:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Lighter than a normal period</li>
              <li>Pink or brown in color</li>
              <li>Lasts 1-3 days</li>
              <li>Doesn't require a pad or tampon</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Less Common Early Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Physical Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Mild cramping</li>
                    <li>• Bloating</li>
                    <li>• Constipation</li>
                    <li>• Metallic taste in mouth</li>
                    <li>• Dizziness or lightheadedness</li>
                    <li>• Headaches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Increased basal body temperature</li>
                    <li>• Vivid dreams</li>
                    <li>• Acne or skin changes</li>
                    <li>• Increased saliva production</li>
                    <li>• Nasal congestion</li>
                    <li>• Heightened sense of smell</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Early Pregnancy vs. PMS Symptoms</h2>
            
            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-3">How to Tell the Difference:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Pregnancy Signs:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Missed period</li>
                      <li>• Breast changes more pronounced</li>
                      <li>• Nausea (uncommon with PMS)</li>
                      <li>• Fatigue more severe</li>
                      <li>• Food aversions stronger</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">PMS Signs:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Period arrives on schedule</li>
                      <li>• Breast tenderness subsides</li>
                      <li>• Mood changes temporary</li>
                      <li>• Fatigue manageable</li>
                      <li>• Symptoms resolve with period</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              When to Take a Pregnancy Test
            </h2>

            <Card className="mb-6 border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-3">Best Testing Times:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span><strong>After missed period:</strong> Most accurate results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span><strong>First morning urine:</strong> Highest hormone concentration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span><strong>Early detection tests:</strong> Can test 6 days before missed period</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Contact Your Healthcare Provider</h2>
            
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Seek Medical Attention If:
                </h4>
                <ul className="space-y-2">
                  <li>• Heavy bleeding or severe cramping</li>
                  <li>• Severe nausea and vomiting preventing food/fluid intake</li>
                  <li>• Persistent fever above 100.4°F (38°C)</li>
                  <li>• Severe abdominal or pelvic pain</li>
                  <li>• Dizziness or fainting</li>
                  <li>• Any concerning symptoms</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps After Confirming Pregnancy</h2>
            
            <ol className="list-decimal pl-6 space-y-3 mb-6">
              <li><strong>Schedule prenatal appointment:</strong> Contact your healthcare provider for your first prenatal visit</li>
              <li><strong>Start prenatal vitamins:</strong> Begin taking folic acid if you haven't already</li>
              <li><strong>Make lifestyle changes:</strong> Stop smoking, drinking alcohol, and limit caffeine</li>
              <li><strong>Track symptoms:</strong> Keep a log of symptoms and concerns to discuss with your doctor</li>
              <li><strong>Calculate due date:</strong> Use our <Link href="/tools/due-date-calculator" className="text-pink-600 hover:text-pink-700">due date calculator</Link></li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            
            <Card className="mb-6 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Early pregnancy symptoms can start 1-2 weeks after conception</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Every woman experiences pregnancy differently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>A missed period is the most reliable early sign</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Pregnancy tests are most accurate after a missed period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Contact your healthcare provider with any concerning symptoms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </article>

        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Track Your Pregnancy?</h3>
          <p className="text-lg mb-6 opacity-90">
            Use our free pregnancy tools to monitor your journey and stay informed about your baby's development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/due-date-calculator"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate Due Date
            </Link>
            <Link 
              href="/tools/pregnancy-week-calculator"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Track Pregnancy Week
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}