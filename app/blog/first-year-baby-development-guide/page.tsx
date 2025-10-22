import { Metadata } from 'next'
import { Heart, Clock, Eye, Brain, Zap, AlertCircle, Users, Stethoscope, Shield, Calendar, Trophy, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'First Year Baby Development Guide: Complete 0-12 Month Milestones | EGSpect',
  description: 'Comprehensive guide to your baby&apos;s first year development. Month-by-month milestones, growth patterns, feeding changes, and key developmental achievements from 0-12 months.',
  keywords: 'first year baby development, baby milestones 0-12 months, infant development guide, baby growth first year, monthly baby development',
}

export default function FirstYearBabyDevelopmentGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                First Year Baby Development Guide
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Your baby&apos;s complete first year: Month-by-month milestones, growth, and development from 0-12 months
            </p>
          </div>

          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">0-12 months</div>
              <div className="text-sm text-gray-600">Complete Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">12 major</div>
              <div className="text-sm text-gray-600">Milestone periods</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">3x birth weight</div>
              <div className="text-sm text-gray-600">Typical growth</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Walking ready</div>
              <div className="text-sm text-gray-600">By year end</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">The Amazing First Year</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Your baby&apos;s first year is an incredible journey of growth, development, and discovery. 
                  From a newborn who sleeps most of the day to a curious toddler taking their first steps, 
                  this year is filled with amazing milestones and transformations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Physical Growth</h3>
                    <p className="text-blue-700 text-sm">Triple birth weight, double length, incredible strength development</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Cognitive Leaps</h3>
                    <p className="text-green-700 text-sm">From reflexes to intentional actions, problem-solving emergence</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Social Development</h3>
                    <p className="text-purple-700 text-sm">From social smiles to complex emotional expressions</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Month-by-Month Timeline */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Month-by-Month Development Timeline</h2>
              </div>
              
              <div className="space-y-6">
                
                {/* Months 0-3 */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Months 0-3: The Newborn Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Week 1</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Adjustment to outside world</li>
                        <li>• Frequent feeding and sleeping</li>
                        <li>• Basic reflexes active</li>
                      </ul>
                      <div className="mt-2">
                        <a href="/blog/newborn-first-week-guide" className="text-purple-600 text-xs hover:underline">→ Detailed guide</a>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Month 1</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• First social smiles</li>
                        <li>• Better head control</li>
                        <li>• Regular feeding patterns</li>
                      </ul>
                      <div className="mt-2">
                        <a href="/blog/first-month-newborn-guide" className="text-purple-600 text-xs hover:underline">→ Detailed guide</a>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Month 2</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consistent social smiles</li>
                        <li>• Cooing sounds</li>
                        <li>• Longer sleep stretches</li>
                      </ul>
                      <div className="mt-2">
                        <a href="/blog/second-month-baby-development" className="text-purple-600 text-xs hover:underline">→ Detailed guide</a>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Month 3</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Hand discovery</li>
                        <li>• Improved head control</li>
                        <li>• May start laughing</li>
                      </ul>
                      <div className="mt-2">
                        <a href="/blog/third-month-baby-development" className="text-purple-600 text-xs hover:underline">→ Detailed guide</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Months 4-6 */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Months 4-6: The Social Baby</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Month 4</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Rolling from front to back</li>
                        <li>• Laughing and giggling</li>
                        <li>• Reaching for objects</li>
                        <li>• Babbling begins</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Month 5</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Rolling both directions</li>
                        <li>• Sits with support</li>
                        <li>• Explores objects with mouth</li>
                        <li>• Recognizes name</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Month 6</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Sits without support briefly</li>
                        <li>• Transfers objects hand to hand</li>
                        <li>• First solid foods introduced</li>
                        <li>• Responds to emotions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Months 7-9 */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Months 7-9: The Mobile Baby</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Month 7</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Sits independently</li>
                        <li>• Beginning to crawl or scoot</li>
                        <li>• Pincer grasp development</li>
                        <li>• Fear of strangers may begin</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Month 8</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Crawling well</li>
                        <li>• Pulls to standing</li>
                        <li>• Says &apos;mama&apos; and &apos;dada&apos;</li>
                        <li>• Separation anxiety</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Month 9</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cruises along furniture</li>
                        <li>• Understands &apos;no&apos;</li>
                        <li>• Plays peek-a-boo</li>
                        <li>• Three-finger pincer grasp</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Months 10-12 */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Months 10-12: The Almost Toddler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Month 10</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Stands alone briefly</li>
                        <li>• Fine motor skills improve</li>
                        <li>• Follows simple commands</li>
                        <li>• Imitates gestures</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Month 11</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Takes first independent steps</li>
                        <li>• Says first meaningful words</li>
                        <li>• Drinks from cup with help</li>
                        <li>• Shows preferences clearly</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Month 12</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Walking independently</li>
                        <li>• Vocabulary of 2-6 words</li>
                        <li>• Follows 2-step instructions</li>
                        <li>• Shows affection openly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Major Developmental Areas */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Key Developmental Areas Throughout the Year</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Motor Development Timeline
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-blue-700">0-3 months:</p>
                      <p className="text-sm text-blue-600">Head control, tummy time strength</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-700">4-6 months:</p>
                      <p className="text-sm text-blue-600">Rolling, sitting with support, reaching</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-700">7-9 months:</p>
                      <p className="text-sm text-blue-600">Sitting independently, crawling, standing</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-700">10-12 months:</p>
                      <p className="text-sm text-blue-600">Standing alone, first steps, walking</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Social-Emotional Development
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-green-700">0-3 months:</p>
                      <p className="text-sm text-green-600">Social smiles, early bonding</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">4-6 months:</p>
                      <p className="text-sm text-green-600">Laughter, emotional expressions</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">7-9 months:</p>
                      <p className="text-sm text-green-600">Stranger anxiety, attachment behaviors</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">10-12 months:</p>
                      <p className="text-sm text-green-600">Emotional regulation, empathy emergence</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Cognitive Development
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-purple-700">0-3 months:</p>
                      <p className="text-sm text-purple-600">Visual tracking, pattern recognition</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">4-6 months:</p>
                      <p className="text-sm text-purple-600">Object exploration, cause and effect</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">7-9 months:</p>
                      <p className="text-sm text-purple-600">Object permanence, problem solving</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">10-12 months:</p>
                      <p className="text-sm text-purple-600">Imitation, understanding instructions</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Language Development
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-orange-700">0-3 months:</p>
                      <p className="text-sm text-orange-600">Crying, cooing, vocal play</p>
                    </div>
                    <div>
                      <p className="font-medium text-orange-700">4-6 months:</p>
                      <p className="text-sm text-orange-600">Babbling, sound experimentation</p>
                    </div>
                    <div>
                      <p className="font-medium text-orange-700">7-9 months:</p>
                      <p className="text-sm text-orange-600">First words, understanding names</p>
                    </div>
                    <div>
                      <p className="font-medium text-orange-700">10-12 months:</p>
                      <p className="text-sm text-orange-600">Vocabulary growth, simple commands</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Feeding Journey */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Feeding Journey Through the First Year</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-pink-800 mb-3">0-6 Months</h3>
                  <h4 className="text-sm font-medium text-pink-700 mb-2">Milk Only</h4>
                  <ul className="space-y-1 text-pink-600 text-sm">
                    <li>• Breast milk or formula</li>
                    <li>• 8-12 feeds per day initially</li>
                    <li>• Gradual increase in volume</li>
                    <li>• 5-7 feeds by 6 months</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">6-8 Months</h3>
                  <h4 className="text-sm font-medium text-green-700 mb-2">First Solids</h4>
                  <ul className="space-y-1 text-green-600 text-sm">
                    <li>• Single ingredient purees</li>
                    <li>• Iron-rich foods first</li>
                    <li>• Milk still primary nutrition</li>
                    <li>• Introduction of cup</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">8-10 Months</h3>
                  <h4 className="text-sm font-medium text-blue-700 mb-2">Texture Progression</h4>
                  <ul className="space-y-1 text-blue-600 text-sm">
                    <li>• Thicker purees and mashes</li>
                    <li>• Finger foods introduction</li>
                    <li>• 3 meals + snacks</li>
                    <li>• Self-feeding attempts</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-800 mb-3">10-12 Months</h3>
                  <h4 className="text-sm font-medium text-orange-700 mb-2">Family Foods</h4>
                  <ul className="space-y-1 text-orange-600 text-sm">
                    <li>• Table foods (modified)</li>
                    <li>• Independent eating</li>
                    <li>• Reduced milk intake</li>
                    <li>• Transition to whole milk</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sleep Evolution */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Sleep Pattern Evolution</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Age</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Total Sleep</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Night Sleep</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Naps</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Night Feedings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">0-3 months</td>
                      <td className="border border-purple-200 px-4 py-3">14-17 hours</td>
                      <td className="border border-purple-200 px-4 py-3">2-4 hour stretches</td>
                      <td className="border border-purple-200 px-4 py-3">Many short naps</td>
                      <td className="border border-purple-200 px-4 py-3">2-3 times</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">3-6 months</td>
                      <td className="border border-purple-200 px-4 py-3">12-16 hours</td>
                      <td className="border border-purple-200 px-4 py-3">6-8 hours</td>
                      <td className="border border-purple-200 px-4 py-3">3-4 naps</td>
                      <td className="border border-purple-200 px-4 py-3">1-2 times</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">6-9 months</td>
                      <td className="border border-purple-200 px-4 py-3">11-14 hours</td>
                      <td className="border border-purple-200 px-4 py-3">10-12 hours</td>
                      <td className="border border-purple-200 px-4 py-3">2-3 naps</td>
                      <td className="border border-purple-200 px-4 py-3">0-1 times</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">9-12 months</td>
                      <td className="border border-purple-200 px-4 py-3">11-14 hours</td>
                      <td className="border border-purple-200 px-4 py-3">11-12 hours</td>
                      <td className="border border-purple-200 px-4 py-3">2 naps</td>
                      <td className="border border-purple-200 px-4 py-3">Usually none</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Growth Patterns */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Growth Patterns & Expectations</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Weight Development</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Birth-2 weeks:</strong> Regain birth weight</li>
                    <li>• <strong>3-6 months:</strong> Double birth weight</li>
                    <li>• <strong>12 months:</strong> Triple birth weight</li>
                    <li>• <strong>Average gain:</strong> 140-200g per week (first 6 months)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Length Development</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>First 6 months:</strong> 2.5 cm per month</li>
                    <li>• <strong>6-12 months:</strong> 1.25 cm per month</li>
                    <li>• <strong>12 months:</strong> 1.5x birth length</li>
                    <li>• <strong>Growth spurts:</strong> 2-3 weeks, 6 weeks, 3 months, 6 months</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-800 mb-3">Head Circumference</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• <strong>First 6 months:</strong> 1.25 cm per month</li>
                    <li>• <strong>6-12 months:</strong> 0.5 cm per month</li>
                    <li>• <strong>Brain growth:</strong> 260% by 12 months</li>
                    <li>• <strong>Fontanelle:</strong> Closes between 12-18 months</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Healthcare Schedule */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Healthcare & Vaccination Schedule</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-4">Well-Baby Visit Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Visit Timeline:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• 3-5 days old</li>
                      <li>• 2 weeks</li>
                      <li>• 2 months (first vaccines)</li>
                      <li>• 4 months (second vaccines)</li>
                      <li>• 6 months (third vaccines)</li>
                      <li>• 9 months</li>
                      <li>• 12 months (MMR, chickenpox)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Key Assessments:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• Growth measurements</li>
                      <li>• Developmental milestones</li>
                      <li>• Physical examination</li>
                      <li>• Feeding and sleep assessment</li>
                      <li>• Safety guidance</li>
                      <li>• Parental support and education</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Important:</strong> This schedule may vary based on your pediatrician&apos;s recommendations 
                    and your baby&apos;s individual needs. Always follow your healthcare provider&apos;s guidance.
                  </p>
                </div>
              </div>
            </section>

            {/* Safety Milestones */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Safety Considerations by Development Stage</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">0-6 Months: Stationary Baby</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Safe sleep practices (back sleeping, firm mattress)</li>
                    <li>• Car seat safety (rear-facing until at least age 2)</li>
                    <li>• Never leave unattended on elevated surfaces</li>
                    <li>• Water safety (never leave alone in bath)</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                  <h3 className="font-semibold text-orange-800 mb-2">6-12 Months: Mobile Baby</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Baby-proofing: outlets, cabinets, stairs</li>
                    <li>• Small object hazards (choking prevention)</li>
                    <li>• Furniture safety (secure tall furniture to walls)</li>
                    <li>• Kitchen safety (cabinet locks, oven locks)</li>
                    <li>• Poison prevention (lock cabinets, keep chemicals high)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Red Flags */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Developmental Red Flags - When to Contact Your Pediatrician
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Early Months (0-6):</h3>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• No social smiles by 3 months</li>
                      <li>• Poor head control by 4 months</li>
                      <li>• Not tracking objects visually</li>
                      <li>• No response to loud sounds</li>
                      <li>• Not reaching for objects by 6 months</li>
                      <li>• Extreme muscle stiffness or floppiness</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Later Months (6-12):</h3>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• Not sitting without support by 9 months</li>
                      <li>• No babbling by 8 months</li>
                      <li>• Not crawling or moving by 12 months</li>
                      <li>• No meaningful words by 15 months</li>
                      <li>• Loss of previously acquired skills</li>
                      <li>• Extreme separation anxiety beyond typical</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Remember:</strong> Every baby develops at their own pace. These are guidelines, not strict rules. 
                    Always consult your pediatrician if you have concerns about your baby&apos;s development.
                  </p>
                </div>
              </div>
            </section>

            {/* Celebration Section */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-purple-600" />
                Celebrating the First Year Milestone
              </h2>
              <p className="text-gray-700 mb-4">
                Congratulations! Your baby&apos;s first year represents an incredible journey of growth, development, 
                and bonding. From a helpless newborn to a curious, mobile little person ready to explore the world, 
                this year has been filled with amazing transformations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Amazing Growth</div>
                  <div className="text-sm text-gray-600">Triple weight, 1.5x length</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Incredible Learning</div>
                  <div className="text-sm text-gray-600">From reflexes to walking</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Beautiful Bonding</div>
                  <div className="text-sm text-gray-600">Deep emotional connections</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Monthly Development Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/first-month-newborn-guide" className="text-purple-600 hover:underline">First Month Complete Guide</a></li>
                    <li><a href="/blog/second-month-baby-development" className="text-purple-600 hover:underline">Second Month Development</a></li>
                    <li><a href="/blog/third-month-baby-development" className="text-purple-600 hover:underline">Third Month Development</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-purple-600 hover:underline">Vaccination Schedule Guide</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Helpful Tools:</h3>
                  <ul className="space-y-1">
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-purple-600 hover:underline">Due Date Calculator</a></li>
                    <li><a href="/tools/pregnancy-week-calculator" className="text-purple-600 hover:underline">Pregnancy Week Calculator</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}