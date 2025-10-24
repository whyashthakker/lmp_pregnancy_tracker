import { Metadata } from 'next'
import { Scale, Baby, Heart, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Baby Weight Classes: Full-Term, Early-Term & LBW Classifications Guide | Pregnancy Tracker',
  description: 'Complete guide to baby weight classifications including full-term, early-term, late-term, low birth weight, and very low birth weight categories with health implications.',
  keywords: 'baby weight classes, full term weight, early term weight, low birth weight, very low birth weight, birth weight classification, newborn weight categories, baby weight percentiles, birth weight ranges',
  openGraph: {
    title: 'Baby Weight Classes: Understanding Birth Weight Classifications & Health Implications',
    description: 'Learn about different baby weight classifications, what they mean for your newborn\'s health, and when to be concerned about birth weight.',
    type: 'article',
  },
}

export default function BabyWeightClassesClassification() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Scale className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Baby Weight Classes & Classifications</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding birth weight categories, gestational age classifications, and their health implications
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Baby className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-800">2.5-4.5kg</div>
                  <div className="text-blue-600">Normal birth weight range</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-800">37-42 Weeks</div>
                  <div className="text-purple-600">Full-term delivery</div>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <Activity className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-pink-800">5 Categories</div>
                  <div className="text-pink-600">Weight classifications</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Understanding Classifications</h3>
                      <p className="text-green-700">
                        Birth weight and gestational age classifications help healthcare providers assess newborn health risks and provide appropriate care. These categories are based on extensive medical research and population data.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Birth Weight Classifications</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">1. Very Low Birth Weight (VLBW)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Definition:</h4>
                        <ul className="list-disc list-inside text-red-600 space-y-1">
                          <li>Less than 1,500g (3.3 lbs)</li>
                          <li>Occurs in about 1.3% of births</li>
                          <li>Usually associated with premature birth</li>
                          <li>Requires intensive medical care</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Health Implications:</h4>
                        <ul className="list-disc list-inside text-red-600 space-y-1">
                          <li>Higher risk of complications</li>
                          <li>Extended NICU stay required</li>
                          <li>Respiratory support often needed</li>
                          <li>Long-term developmental monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">2. Low Birth Weight (LBW)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Definition:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>1,500g - 2,499g (3.3 - 5.5 lbs)</li>
                          <li>Occurs in about 8% of births globally</li>
                          <li>Can occur in term or preterm babies</li>
                          <li>May need specialized care</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Health Implications:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Increased infection risk</li>
                          <li>Temperature regulation issues</li>
                          <li>Feeding challenges initially</li>
                          <li>Close monitoring in first weeks</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">3. Normal Birth Weight</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Definition:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>2,500g - 4,000g (5.5 - 8.8 lbs)</li>
                          <li>About 80-85% of all births</li>
                          <li>Optimal range for most babies</li>
                          <li>Associated with best outcomes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Health Implications:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Lower risk of complications</li>
                          <li>Better temperature regulation</li>
                          <li>Stronger sucking reflex</li>
                          <li>Standard newborn care protocols</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">4. High Birth Weight</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Definition:</h4>
                        <ul className="list-disc list-inside text-yellow-600 space-y-1">
                          <li>4,000g - 4,500g (8.8 - 9.9 lbs)</li>
                          <li>About 8-10% of births</li>
                          <li>Often associated with maternal diabetes</li>
                          <li>May require closer monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Health Implications:</h4>
                        <ul className="list-disc list-inside text-yellow-600 space-y-1">
                          <li>Higher risk of birth injuries</li>
                          <li>Possible <a href="/blog/what-is-vacuum-delivery" className="text-yellow-500 underline hover:text-yellow-700">delivery complications</a></li>
                          <li>Blood sugar monitoring needed</li>
                          <li>Increased cesarean section risk</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">5. Macrosomia (Very High Birth Weight)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Definition:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Greater than 4,500g (9.9 lbs)</li>
                          <li>Occurs in 1-3% of births</li>
                          <li>Strong link to maternal diabetes</li>
                          <li>Requires specialized delivery planning</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Health Implications:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Shoulder dystocia risk</li>
                          <li>Birth trauma potential</li>
                          <li>Hypoglycemia risk</li>
                          <li>Long-term obesity risk</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-indigo-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-indigo-700 space-y-1">
                      <li><a href="/blog/newborn-growth-charts-head-height" className="text-indigo-600 underline hover:text-indigo-800">Newborn growth charts</a></li>
                      <li><a href="/blog/pregnancy-terms-guide" className="text-indigo-600 underline hover:text-indigo-800">Pregnancy terms guide</a></li>
                      <li><a href="/blog/what-is-vacuum-delivery" className="text-indigo-600 underline hover:text-indigo-800">Delivery complications</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-indigo-700 space-y-1">
                      <li><a href="/blog/complete-newborn-care-guide" className="text-indigo-600 underline hover:text-indigo-800">Newborn care guide</a></li>
                      <li><a href="/blog/first-month-newborn-guide" className="text-indigo-600 underline hover:text-indigo-800">First month development</a></li>
                      <li><a href="/tools/baby-weight-calculator" className="text-indigo-600 underline hover:text-indigo-800">Weight tracking tool</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}