import { Metadata } from 'next'
import { Heart, Clock, Eye, Brain, Zap, AlertCircle, Users, Stethoscope, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Newborn Third Week Guide: Development, Feeding & Care Tips | EGSpect',
  description: 'Complete guide to your baby&apos;s third week of life. Learn about developmental milestones, feeding patterns, sleep changes, and important care tips for 2-3 week old newborns.',
  keywords: 'newborn third week, 3 week old baby development, newborn feeding patterns, baby sleep week 3, infant care guide, newborn milestones',
}

export default function NewbornThirdWeekGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Newborn Third Week Guide
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Your baby&apos;s third week: Growing alertness, developing personality, and strengthening bonds
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">14-21 days</div>
              <div className="text-sm text-gray-600">Age Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8-12</div>
              <div className="text-sm text-gray-600">Feeds per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">14-17 hrs</div>
              <div className="text-sm text-gray-600">Sleep per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">6-8</div>
              <div className="text-sm text-gray-600">Wet diapers/day</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Development Highlights */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Week 3 Development Highlights</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Visual Development
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Can focus on objects 8-12 inches away</li>
                    <li>• Shows preference for high contrast patterns</li>
                    <li>• May briefly track moving objects</li>
                    <li>• Increased eye contact during feeds</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Motor Skills
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Better head control during tummy time</li>
                    <li>• Stronger grip reflex</li>
                    <li>• More coordinated arm movements</li>
                    <li>• Can lift head briefly when prone</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Feeding Patterns Week 3 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Feeding Patterns - Week 3</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Feeding Type</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Frequency</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Amount/Duration</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Breastfeeding</td>
                      <td className="border border-purple-200 px-4 py-3">8-12 times/day</td>
                      <td className="border border-purple-200 px-4 py-3">15-30 minutes</td>
                      <td className="border border-purple-200 px-4 py-3">More efficient feeding, longer intervals between feeds</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Formula</td>
                      <td className="border border-purple-200 px-4 py-3">8-10 times/day</td>
                      <td className="border border-purple-200 px-4 py-3">2-4 oz per feed</td>
                      <td className="border border-purple-200 px-4 py-3">May go 3-4 hours between feeds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800"><strong>Growth spurt alert:</strong> Around week 3, many babies experience a growth spurt. This means more frequent feeding for 2-3 days is normal.</p>
              </div>
            </section>

            {/* Sleep Patterns */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Sleep Development - Week 3</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-800 mb-4">Sleep Patterns</h3>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• Total sleep: 14-17 hours per day</li>
                    <li>• Longest stretch: 3-5 hours at night</li>
                    <li>• Daytime naps: 3-4 naps of 1-3 hours</li>
                    <li>• Beginning to distinguish day/night</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-teal-800 mb-4">Sleep Improvements</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• Slightly longer sleep cycles</li>
                    <li>• More predictable wake windows</li>
                    <li>• Better self-soothing attempts</li>
                    <li>• May sleep for longer periods after feeds</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Communication & Social Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Communication & Social Development</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-pink-800 mb-3">New Behaviors This Week</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-pink-700">
                      <li>• More sustained eye contact</li>
                      <li>• May smile in response to stimulation</li>
                      <li>• Increased vocalizations and cooing</li>
                      <li>• Shows recognition of familiar voices</li>
                    </ul>
                    <ul className="space-y-2 text-pink-700">
                      <li>• More alert periods during the day</li>
                      <li>• Beginning to show preferences</li>
                      <li>• Responds to gentle talking</li>
                      <li>• May calm when picked up</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Physical Changes */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Physical Changes & Milestones</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Growth</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Weight gain: 150-200g</li>
                    <li>• Length increase: 0.5-1 inch</li>
                    <li>• Head circumference growth</li>
                    <li>• Filling out appearance</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Reflexes</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Stronger grasp reflex</li>
                    <li>• Rooting still present</li>
                    <li>• Moro reflex continuing</li>
                    <li>• Improved muscle tone</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-800 mb-3">Appearance</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Umbilical cord may fall off</li>
                    <li>• Skin less wrinkled</li>
                    <li>• Hair may start changing</li>
                    <li>• More alert facial expressions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Challenges Week 3 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common Challenges & Solutions</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">Growth Spurts</h3>
                  <p className="text-yellow-700 mb-2">Around 2-3 weeks, babies often have a growth spurt with increased feeding demands.</p>
                  <p className="text-yellow-700"><strong>Solution:</strong> Feed on demand, rest when possible, and remember it&apos;s temporary (2-3 days).</p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Overstimulation</h3>
                  <p className="text-blue-700 mb-2">Babies become more aware and can get overwhelmed by too much stimulation.</p>
                  <p className="text-blue-700"><strong>Solution:</strong> Watch for tired cues, create calm environments, and allow quiet time.</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="font-semibold text-green-800 mb-2">Evening Fussiness</h3>
                  <p className="text-green-700 mb-2">Many babies become fussier in the evenings as their nervous system develops.</p>
                  <p className="text-green-700"><strong>Solution:</strong> Try swaddling, gentle movement, white noise, or skin-to-skin contact.</p>
                </div>
              </div>
            </section>

            {/* Care Tips for Week 3 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Essential Care Tips</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Tummy Time</h3>
                    <p className="text-purple-700">Start with 2-3 minutes several times daily while baby is awake and supervised.</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-2">Bonding Activities</h3>
                    <p className="text-indigo-700">Talk, sing, and make eye contact during feeds and diaper changes.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-2">Routine Building</h3>
                    <p className="text-teal-700">Begin gentle routines for bedtime to help establish day/night patterns.</p>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-800 mb-2">Self-Care</h3>
                    <p className="text-pink-700">Accept help, rest when baby sleeps, and don&apos;t hesitate to ask for support.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Warning Signs */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  When to Contact Your Pediatrician
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Urgent Signs:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Fever over 100.4°F (38°C)</li>
                      <li>• Difficulty breathing</li>
                      <li>• Persistent vomiting</li>
                      <li>• No wet diapers for 12+ hours</li>
                      <li>• Extreme lethargy</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Monitor Closely:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Poor feeding for 24+ hours</li>
                      <li>• Unusual crying patterns</li>
                      <li>• Signs of dehydration</li>
                      <li>• Rash or skin changes</li>
                      <li>• Any concerning behavior</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Next Week Preview */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Looking Ahead: Week 4</h2>
              <p className="text-gray-700 mb-4">
                Next week, you can expect even more personality to emerge, with possible first social smiles, 
                improved head control, and longer periods of alertness.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">First Social Smile</div>
                  <div className="text-sm text-gray-600">May appear around 4-6 weeks</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Better Head Control</div>
                  <div className="text-sm text-gray-600">During tummy time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Longer Wake Periods</div>
                  <div className="text-sm text-gray-600">More interaction time</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Helpful Tools:</h3>
                  <ul className="space-y-1">
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/tools/kick-counter" className="text-purple-600 hover:underline">Kick Counter</a></li>
                    <li><a href="/tools/contraction-timer" className="text-purple-600 hover:underline">Contraction Timer</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Related Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-first-week-guide" className="text-purple-600 hover:underline">First Week Guide</a></li>
                    <li><a href="/blog/newborn-second-week-guide" className="text-purple-600 hover:underline">Second Week Guide</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-purple-600 hover:underline">Vaccination Guide</a></li>
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