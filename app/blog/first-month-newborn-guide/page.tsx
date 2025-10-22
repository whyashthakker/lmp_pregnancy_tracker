import { Metadata } from 'next'
import { Heart, Clock, Eye, Zap, AlertCircle, Users, Stethoscope, Shield, Calendar, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'First Month Newborn Guide: Complete Development & Care Tips | EGSpect',
  description: 'Comprehensive guide to your baby&apos;s first month of life. Learn about major milestones, feeding patterns, sleep development, and essential care tips for 0-4 week old newborns.',
  keywords: 'first month newborn, 1 month old baby development, newborn first month milestones, baby care first month, infant development 0-4 weeks',
}

export default function FirstMonthNewbornGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                First Month Newborn Guide
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Your baby&apos;s first month: A complete journey through weeks 1-4 of development and care
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">0-4 weeks</div>
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
              <div className="text-2xl font-bold text-purple-600">450-900g</div>
              <div className="text-sm text-gray-600">Weight gain</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Month Overview */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">First Month Overview</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The first month of your baby&apos;s life is a period of incredible adaptation and rapid development. 
                  Your newborn is adjusting to life outside the womb while you&apos;re learning to care for them. 
                  This month marks the foundation of feeding patterns, sleep cycles, and early social connections.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Key Achievements This Month:</h3>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Return to birth weight and steady weight gain</li>
                      <li>• First social smiles (around week 4-6)</li>
                      <li>• Improved head control and muscle tone</li>
                      <li>• Establishing feeding and sleep patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-800 mb-2">What to Expect:</h3>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Frequent feeding and diaper changes</li>
                      <li>• Growth spurts around 2-3 weeks</li>
                      <li>• Increased alertness and awareness</li>
                      <li>• Beginning of day/night recognition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Week-by-Week Breakdown */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Week-by-Week Development</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">Week 1: Adjustment Period</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Focus on feeding and bonding</li>
                    <li>• Sleeps 16-20 hours per day</li>
                    <li>• Weight loss normal (up to 10%)</li>
                    <li>• Establishing breastfeeding</li>
                    <li>• Umbilical cord care</li>
                  </ul>
                  <div className="mt-3 text-xs text-green-600">
                    <a href="/blog/newborn-first-week-guide" className="underline hover:text-green-800">→ Read detailed Week 1 guide</a>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">Week 2: Gaining Strength</h3>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Should regain birth weight</li>
                    <li>• More alert periods during day</li>
                    <li>• Better feeding efficiency</li>
                    <li>• Beginning to track objects</li>
                    <li>• More purposeful movements</li>
                  </ul>
                  <div className="mt-3 text-xs text-blue-600">
                    <a href="/blog/newborn-second-week-guide" className="underline hover:text-blue-800">→ Read detailed Week 2 guide</a>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">Week 3: Growing Awareness</h3>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• Growth spurt common</li>
                    <li>• Increased visual focus</li>
                    <li>• Better head control</li>
                    <li>• More varied vocalizations</li>
                    <li>• Longer periods of alertness</li>
                  </ul>
                  <div className="mt-3 text-xs text-orange-600">
                    <a href="/blog/newborn-third-week-guide" className="underline hover:text-orange-800">→ Read detailed Week 3 guide</a>
                  </div>
                </div>
                
                <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-pink-800 mb-4">Week 4: Social Development</h3>
                  <ul className="space-y-2 text-pink-700 text-sm">
                    <li>• First social smiles may appear</li>
                    <li>• Better sleep consolidation</li>
                    <li>• Improved head control</li>
                    <li>• Recognition of familiar faces</li>
                    <li>• More predictable patterns</li>
                  </ul>
                  <div className="mt-3 text-xs text-pink-600">
                    <a href="/blog/newborn-fourth-week-guide" className="underline hover:text-pink-800">→ Read detailed Week 4 guide</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Major Milestones */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Major First Month Milestones</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Visual Development
                  </h3>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>• Focuses on faces 8-12 inches away</li>
                    <li>• Tracks moving objects briefly</li>
                    <li>• Prefers high contrast patterns</li>
                    <li>• Increased eye contact during feeds</li>
                    <li>• May follow faces side to side</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Motor Skills
                  </h3>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Lifts head briefly during tummy time</li>
                    <li>• Stronger grasp reflex</li>
                    <li>• Better muscle tone overall</li>
                    <li>• Can turn head from side to side</li>
                    <li>• More coordinated arm movements</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Social & Communication
                  </h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• First social smiles (week 4-6)</li>
                    <li>• Different cries for different needs</li>
                    <li>• Beginning cooing sounds</li>
                    <li>• Recognition of familiar voices</li>
                    <li>• Calms when picked up or spoken to</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Feeding Overview */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Feeding Throughout the First Month</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Week</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Breastfeeding</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Formula Feeding</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Week 1</td>
                      <td className="border border-purple-200 px-4 py-3">8-12 times/day, 10-30 min</td>
                      <td className="border border-purple-200 px-4 py-3">8-12 times/day, 1-3 oz</td>
                      <td className="border border-purple-200 px-4 py-3">Establishing supply, frequent feeds</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Week 2</td>
                      <td className="border border-purple-200 px-4 py-3">8-12 times/day, 15-40 min</td>
                      <td className="border border-purple-200 px-4 py-3">8-10 times/day, 2-3 oz</td>
                      <td className="border border-purple-200 px-4 py-3">More efficient feeding</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Week 3</td>
                      <td className="border border-purple-200 px-4 py-3">8-12 times/day, 15-30 min</td>
                      <td className="border border-purple-200 px-4 py-3">8-10 times/day, 2-4 oz</td>
                      <td className="border border-purple-200 px-4 py-3">Growth spurt may increase frequency</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Week 4</td>
                      <td className="border border-purple-200 px-4 py-3">7-10 times/day, 20-40 min</td>
                      <td className="border border-purple-200 px-4 py-3">6-8 times/day, 3-5 oz</td>
                      <td className="border border-purple-200 px-4 py-3">Longer intervals between feeds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Sleep Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Sleep Development Through First Month</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-800 mb-4">Sleep Patterns Evolution</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-indigo-700">Week 1-2:</p>
                      <p className="text-sm text-indigo-600">16-20 hours/day, 1-3 hour stretches</p>
                    </div>
                    <div>
                      <p className="font-medium text-indigo-700">Week 3-4:</p>
                      <p className="text-sm text-indigo-600">14-17 hours/day, 3-5 hour stretches</p>
                    </div>
                    <div>
                      <p className="font-medium text-indigo-700">By Month End:</p>
                      <p className="text-sm text-indigo-600">Beginning day/night distinction</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-teal-800 mb-4">Sleep Tips for First Month</h3>
                  <ul className="space-y-2 text-teal-700 text-sm">
                    <li>• Keep room dim during night feeds</li>
                    <li>• Expose baby to natural light during day</li>
                    <li>• Safe sleep: back sleeping, firm mattress</li>
                    <li>• Consider swaddling for comfort</li>
                    <li>• Room sharing recommended</li>
                    <li>• Expect irregular patterns initially</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Growth Tracking */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Growth & Physical Development</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Expected Growth by Month End</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Weight: Back to birth weight + 450-900g</li>
                    <li>• Length: 1-2 inches longer than birth</li>
                    <li>• Head circumference: 1-1.5 inches larger</li>
                    <li>• Weekly weight gain: 150-200g</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Physical Changes</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Umbilical cord stump falls off</li>
                    <li>• Skin becomes less wrinkled</li>
                    <li>• Hair texture may change</li>
                    <li>• More alert facial expressions</li>
                    <li>• Better muscle tone</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Healthcare & Checkups */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Healthcare During First Month</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-4">Scheduled Checkups & Care</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Healthcare Visits:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• Hospital discharge exam (2-3 days)</li>
                      <li>• First pediatric visit (3-5 days)</li>
                      <li>• Two-week checkup</li>
                      <li>• One-month well-baby visit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Key Health Monitoring:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• Weight gain tracking</li>
                      <li>• Feeding assessment</li>
                      <li>• Developmental screening</li>
                      <li>• Vaccination planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Challenges */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common First Month Challenges</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">Feeding Difficulties</h3>
                  <p className="text-yellow-700 mb-2">Breastfeeding challenges, growth spurts, cluster feeding periods.</p>
                  <p className="text-yellow-700 text-sm"><strong>Solution:</strong> Seek lactation support, feed on demand, maintain patience during growth spurts.</p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Sleep Challenges</h3>
                  <p className="text-blue-700 mb-2">Day/night confusion, frequent waking, short sleep stretches.</p>
                  <p className="text-blue-700 text-sm"><strong>Solution:</strong> Maintain consistent day/night routines, room sharing, safe sleep practices.</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="font-semibold text-green-800 mb-2">Fussiness & Crying</h3>
                  <p className="text-green-700 mb-2">Evening fussiness, colic symptoms, difficulty settling.</p>
                  <p className="text-green-700 text-sm"><strong>Solution:</strong> Try swaddling, white noise, gentle movement, skin-to-skin contact.</p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Parental Adjustment</h3>
                  <p className="text-purple-700 mb-2">Sleep deprivation, emotional changes, learning curves.</p>
                  <p className="text-purple-700 text-sm"><strong>Solution:</strong> Accept help, rest when baby sleeps, communicate with partner, seek support.</p>
                </div>
              </div>
            </section>

            {/* Month 2 Preview */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Looking Ahead: Month 2</h2>
              <p className="text-gray-700 mb-4">
                As you complete the first month milestone, prepare for more interactive and engaging times ahead. 
                Month 2 brings more social smiles, better sleep patterns, and increased alertness.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">More Social Interaction</div>
                  <div className="text-sm text-gray-600">Regular smiles and cooing</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Better Head Control</div>
                  <div className="text-sm text-gray-600">45-degree lift during tummy time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Longer Sleep Stretches</div>
                  <div className="text-sm text-gray-600">4-6 hours at night</div>
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
                      <li>• Persistent vomiting</li>
                      <li>• No wet diapers for 12+ hours</li>
                      <li>• Extreme lethargy</li>
                      <li>• Not regaining birth weight by 2 weeks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Monitor Closely:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Poor feeding for 24+ hours</li>
                      <li>• No social responses by 6 weeks</li>
                      <li>• Not tracking objects by 6 weeks</li>
                      <li>• Excessive crying or irritability</li>
                      <li>• Signs of dehydration</li>
                      <li>• Any concerning changes in behavior</li>
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
                  <h3 className="font-semibold text-gray-800 mb-2">Weekly Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-first-week-guide" className="text-purple-600 hover:underline">Week 1: First Week Guide</a></li>
                    <li><a href="/blog/newborn-second-week-guide" className="text-purple-600 hover:underline">Week 2: Second Week Guide</a></li>
                    <li><a href="/blog/newborn-third-week-guide" className="text-purple-600 hover:underline">Week 3: Third Week Guide</a></li>
                    <li><a href="/blog/newborn-fourth-week-guide" className="text-purple-600 hover:underline">Week 4: Fourth Week Guide</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Helpful Tools:</h3>
                  <ul className="space-y-1">
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-purple-600 hover:underline">Vaccination Guide</a></li>
                    <li><a href="/tools/contraction-timer" className="text-purple-600 hover:underline">Contraction Timer</a></li>
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