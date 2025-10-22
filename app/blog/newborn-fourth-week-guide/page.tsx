import { Metadata } from 'next'
import { Heart, Clock, Eye, Brain, Zap, AlertCircle, Users, Stethoscope, Shield, Smile } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Newborn Fourth Week Guide: First Social Smiles & Development | EGSpect',
  description: 'Complete guide to your baby&apos;s fourth week of life. Learn about first social smiles, improved head control, feeding patterns, and important developmental milestones for 3-4 week old newborns.',
  keywords: 'newborn fourth week, 4 week old baby development, first social smile, baby milestones week 4, newborn care month 1, infant development guide',
}

export default function NewbornFourthWeekGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Smile className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Newborn Fourth Week Guide
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Your baby&apos;s fourth week: First social smiles, improved head control, and emerging personality
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">21-28 days</div>
              <div className="text-sm text-gray-600">Age Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">7-11</div>
              <div className="text-sm text-gray-600">Feeds per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">14-16 hrs</div>
              <div className="text-sm text-gray-600">Sleep per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">4-6 hrs</div>
              <div className="text-sm text-gray-600">Longest sleep stretch</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Major Milestones */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Smile className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Week 4 Major Milestones</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                    <Smile className="w-5 h-5" />
                    First Social Smile
                  </h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Genuine smiles in response to faces</li>
                    <li>• Different from reflexive smiles</li>
                    <li>• Usually appears between 4-6 weeks</li>
                    <li>• Triggered by familiar voices and faces</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Improved Head Control
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Can lift head 45° during tummy time</li>
                    <li>• Holds head steady for brief moments</li>
                    <li>• Better neck muscle strength</li>
                    <li>• Can turn head from side to side</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Feeding Patterns Week 4 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Feeding Patterns - Week 4</h2>
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
                      <td className="border border-purple-200 px-4 py-3">7-10 times/day</td>
                      <td className="border border-purple-200 px-4 py-3">20-40 minutes</td>
                      <td className="border border-purple-200 px-4 py-3">More efficient feeding, may go 3-4 hours between feeds</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Formula</td>
                      <td className="border border-purple-200 px-4 py-3">6-8 times/day</td>
                      <td className="border border-purple-200 px-4 py-3">3-5 oz per feed</td>
                      <td className="border border-purple-200 px-4 py-3">Longer stretches between feeds, especially at night</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800"><strong>Good news:</strong> Many babies start to have slightly longer feeding intervals and may sleep for longer stretches at night.</p>
              </div>
            </section>

            {/* Sleep Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Sleep Development - Week 4</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-800 mb-4">Sleep Patterns</h3>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• Total sleep: 14-16 hours per day</li>
                    <li>• Longest stretch: 4-6 hours at night</li>
                    <li>• Daytime naps: 3-4 naps of 1-3 hours</li>
                    <li>• Wake windows: 1-1.5 hours</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-teal-800 mb-4">Sleep Improvements</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• Beginning to consolidate nighttime sleep</li>
                    <li>• More predictable sleep/wake cycles</li>
                    <li>• Better distinction between day and night</li>
                    <li>• May sleep longer after evening feeds</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Physical Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Physical Development & Motor Skills</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Head & Neck</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Lifts head 45° during tummy time</li>
                    <li>• Better head control when held upright</li>
                    <li>• Can turn head to follow objects briefly</li>
                    <li>• Less head lag when pulled to sitting</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Arms & Hands</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Stronger grip reflex</li>
                    <li>• May swipe at objects</li>
                    <li>• Hands starting to open more</li>
                    <li>• Brings hands toward face</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-800 mb-3">Legs & Body</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Stronger kicking movements</li>
                    <li>• Better muscle tone overall</li>
                    <li>• Can push feet against surfaces</li>
                    <li>• More coordinated movements</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sensory Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Sensory Development</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-purple-800 mb-3">Vision</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• Can focus on objects 8-15 inches away</li>
                    <li>• Tracks moving objects with eyes</li>
                    <li>• Prefers high contrast patterns</li>
                    <li>• Shows interest in faces and bright colors</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-pink-800 mb-3">Hearing & Communication</h3>
                  <ul className="space-y-2 text-pink-700">
                    <li>• Recognizes familiar voices</li>
                    <li>• May turn toward sounds</li>
                    <li>• Makes more varied vocalizations</li>
                    <li>• Beginning to &apos;coo&apos; sounds</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Social & Emotional Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Social & Emotional Development</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                <h3 className="font-semibold text-yellow-800 mb-4">Emerging Social Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Social Interaction:</h4>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• First genuine social smiles</li>
                      <li>• More sustained eye contact</li>
                      <li>• Shows preference for faces</li>
                      <li>• May quiet when spoken to</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Communication:</h4>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• Different cries for different needs</li>
                      <li>• Beginning cooing sounds</li>
                      <li>• Responds to familiar voices</li>
                      <li>• Shows contentment after feeding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Growth Expectations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Growth Expectations</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Typical Growth by Week 4</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Weight: Back to birth weight + 450-900g more</li>
                    <li>• Length: 1-2 inches longer than birth</li>
                    <li>• Head circumference: 1-1.5 inches larger</li>
                    <li>• More filled-out appearance</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Physical Changes</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Umbilical cord stump usually fallen off</li>
                    <li>• Skin less wrinkled and blotchy</li>
                    <li>• Hair texture may be changing</li>
                    <li>• More alert and responsive expressions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Care Tips for Week 4 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Essential Care Tips</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Encourage Social Interaction</h3>
                    <p className="text-purple-700">Talk, sing, and make faces to encourage those first smiles. Respond to baby&apos;s attempts at communication.</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-2">Tummy Time</h3>
                    <p className="text-indigo-700">Increase tummy time to 3-5 minutes several times daily to strengthen neck and shoulder muscles.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-2">Sleep Routine</h3>
                    <p className="text-teal-700">Start establishing gentle bedtime routines with dimmed lights and calm activities.</p>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-800 mb-2">Stimulation Balance</h3>
                    <p className="text-pink-700">Provide gentle stimulation but watch for overstimulation cues and allow quiet time.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Concerns Week 4 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common Concerns & Solutions</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">6-Week Growth Spurt Approaching</h3>
                  <p className="text-yellow-700 mb-2">Around 6 weeks, another growth spurt is common. Some babies may show early signs around 4-5 weeks.</p>
                  <p className="text-yellow-700"><strong>Prepare for:</strong> Increased feeding frequency, more fussiness, and temporary sleep disruption.</p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Not Smiling Yet?</h3>
                  <p className="text-blue-700 mb-2">Social smiles typically appear between 4-8 weeks. Some babies are just developing at their own pace.</p>
                  <p className="text-blue-700"><strong>Keep trying:</strong> Continue talking, singing, and making eye contact. The smiles will come!</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="font-semibold text-green-800 mb-2">Sleep Regression</h3>
                  <p className="text-green-700 mb-2">Some babies experience temporary sleep disruption around 4 weeks due to developmental changes.</p>
                  <p className="text-green-700"><strong>Stay consistent:</strong> Maintain routines and be patient as baby&apos;s nervous system develops.</p>
                </div>
              </div>
            </section>

            {/* One Month Milestone Preview */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Approaching One Month: What to Expect</h2>
              <p className="text-gray-700 mb-4">
                As you approach the one-month mark, your baby will become increasingly interactive and alert. 
                The first month is a huge milestone for both baby and parents!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">More Awake Time</div>
                  <div className="text-sm text-gray-600">Longer periods of alertness</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Better Feeding</div>
                  <div className="text-sm text-gray-600">More efficient and predictable</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Stronger Interaction</div>
                  <div className="text-sm text-gray-600">Social smiles and eye contact</div>
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
                      <li>• Difficulty breathing or blue lips</li>
                      <li>• Persistent vomiting or inability to keep feeds down</li>
                      <li>• No wet diapers for 12+ hours</li>
                      <li>• Extreme lethargy or difficulty waking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Developmental Concerns:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• No visual tracking by 6 weeks</li>
                      <li>• Not responding to loud sounds</li>
                      <li>• Poor muscle tone or excessive floppy movements</li>
                      <li>• Significant feeding difficulties persisting</li>
                      <li>• Any behavior that concerns you</li>
                    </ul>
                  </div>
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
                    <li><a href="/blog/newborn-third-week-guide" className="text-purple-600 hover:underline">Third Week Guide</a></li>
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