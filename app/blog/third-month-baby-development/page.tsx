import { Metadata } from 'next'
import { Heart, Clock, Eye, Brain, Zap, AlertCircle, Users, Stethoscope, Shield, Calendar, Target, Hand } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Third Month Baby Development Guide: 8-12 Weeks Growth & Milestones | EGSpect',
  description: 'Complete guide to your 3-month-old baby&apos;s development. Learn about hand discovery, improved sleep, rolling preparation, and key milestones for 8-12 week old babies.',
  keywords: 'third month baby development, 3 month old baby milestones, baby development 8-12 weeks, infant growth third month, baby hand coordination',
}

export default function ThirdMonthBabyDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Hand className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Third Month Baby Development
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Your baby&apos;s third month: Hand discovery, improved sleep patterns, and preparing to roll (8-12 weeks)
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8-12 weeks</div>
              <div className="text-sm text-gray-600">Age Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">5-7</div>
              <div className="text-sm text-gray-600">Feeds per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">11-15 hrs</div>
              <div className="text-sm text-gray-600">Sleep per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">6-8 hrs</div>
              <div className="text-sm text-gray-600">Longest sleep stretch</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Month Overview */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Third Month Overview</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The third month is a period of remarkable progress! Your baby is becoming much more interactive, 
                  developing better sleep patterns, and showing increased physical coordination. This month marks 
                  the discovery of their hands and the beginning preparation for rolling over.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Major Developments This Month:</h3>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Hand discovery and intentional hand movements</li>
                      <li>• Improved head control (90-degree lift)</li>
                      <li>• Longer and more predictable sleep patterns</li>
                      <li>• Beginning of rolling preparation movements</li>
                      <li>• Enhanced visual tracking and focus</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-800 mb-2">What&apos;s New:</h3>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Consistent social smiling and laughing</li>
                      <li>• More complex vocalizations and cooing</li>
                      <li>• Better hand-eye coordination</li>
                      <li>• Increased strength in neck and core</li>
                      <li>• More engaged during playtime</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Major Milestones */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Key Third Month Milestones</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                    <Hand className="w-5 h-5" />
                    Hand & Arm Development
                  </h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• <strong>Hand discovery:</strong> Stares at and plays with hands</li>
                    <li>• <strong>Intentional reaching:</strong> Swipes at objects deliberately</li>
                    <li>• <strong>Grasp improvement:</strong> Holds objects for longer periods</li>
                    <li>• <strong>Bringing hands together:</strong> Midline hand play</li>
                    <li>• <strong>Hand-to-mouth:</strong> More coordinated self-soothing</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Motor Skills
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Head control:</strong> Lifts head 90° during tummy time</li>
                    <li>• <strong>Neck strength:</strong> Steady head when sitting supported</li>
                    <li>• <strong>Core strength:</strong> Beginning to push up on forearms</li>
                    <li>• <strong>Rolling prep:</strong> May roll from tummy to back</li>
                    <li>• <strong>Leg strength:</strong> Bears some weight when held standing</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Visual & Cognitive
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Visual tracking:</strong> Follows objects in full circle</li>
                    <li>• <strong>Depth perception:</strong> Beginning to judge distances</li>
                    <li>• <strong>Color vision:</strong> Can see full spectrum of colors</li>
                    <li>• <strong>Object recognition:</strong> Recognizes familiar faces from distance</li>
                    <li>• <strong>Cause and effect:</strong> Beginning understanding of actions</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Social & Communication
                  </h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Consistent smiling:</strong> Regular social smiles and responses</li>
                    <li>• <strong>Laughter:</strong> May begin to laugh and giggle</li>
                    <li>• <strong>Vocal variety:</strong> More diverse sounds and pitches</li>
                    <li>• <strong>Turn-taking:</strong> &apos;Conversations&apos; with cooing and pausing</li>
                    <li>• <strong>Expression recognition:</strong> Responds to different facial expressions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Feeding Patterns */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Feeding Patterns - Month 3</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-4">Breastfeeding (8-12 weeks)</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Frequency:</strong> 5-7 times per day</li>
                    <li>• <strong>Duration:</strong> 15-30 minutes per session</li>
                    <li>• <strong>Intervals:</strong> 3-5 hours between feeds</li>
                    <li>• <strong>Night feeds:</strong> 1-2 feeds at night</li>
                    <li>• <strong>Efficiency:</strong> Very efficient nursing, established routine</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4">Formula Feeding (8-12 weeks)</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Frequency:</strong> 4-6 times per day</li>
                    <li>• <strong>Amount:</strong> 5-7 oz per feeding</li>
                    <li>• <strong>Intervals:</strong> 4-5 hours between feeds</li>
                    <li>• <strong>Night feeds:</strong> May sleep through or 1 night feed</li>
                    <li>• <strong>Total daily:</strong> 24-32 oz per day</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Feeding Improvements This Month</h4>
                <p className="text-green-700 text-sm">
                  Most babies establish more predictable feeding schedules by month 3. They become more efficient 
                  feeders and can go longer between meals, especially at night. Some babies may start showing 
                  interest in what others are eating, though solid foods won&apos;t start until 4-6 months.
                </p>
              </div>
            </section>

            {/* Sleep Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Sleep Development - Month 3</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-800 mb-4">Sleep Patterns</h3>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• <strong>Total sleep:</strong> 11-15 hours per day</li>
                    <li>• <strong>Night sleep:</strong> 8-10 hours with 0-2 wake-ups</li>
                    <li>• <strong>Longest stretch:</strong> 6-8 hours consecutively</li>
                    <li>• <strong>Daytime naps:</strong> 3-4 naps of 1-3 hours</li>
                    <li>• <strong>Wake windows:</strong> 1.5-2 hours of alertness</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-teal-800 mb-4">Sleep Milestones</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• <strong>Sleep consolidation:</strong> Longer night sleep periods</li>
                    <li>• <strong>Circadian rhythm:</strong> Well-established day/night cycle</li>
                    <li>• <strong>Self-soothing:</strong> May fall asleep independently sometimes</li>
                    <li>• <strong>Predictable schedule:</strong> More regular sleep times</li>
                    <li>• <strong>Better sleep quality:</strong> Deeper, more restful sleep</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Sleep Training Considerations</h4>
                <p className="text-blue-700 text-sm">
                  Month 3 is often when parents consider gentle sleep training methods. Babies this age are 
                  developmentally ready to learn some self-soothing skills, though every baby develops at their own pace.
                </p>
              </div>
            </section>

            {/* Physical Growth */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Physical Growth & Development</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Growth Expectations</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Weight gain: 140-200g per week</li>
                    <li>• Length increase: 2-3 cm per month</li>
                    <li>• Head circumference: 1.25 cm per month</li>
                    <li>• May have doubled birth weight</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Physical Changes</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• More proportioned body shape</li>
                    <li>• Stronger muscle definition</li>
                    <li>• Better posture and body control</li>
                    <li>• More coordinated movements</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-800 mb-3">Strength Development</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Excellent head and neck control</li>
                    <li>• Core strength for supported sitting</li>
                    <li>• Arm and shoulder strength for pushing up</li>
                    <li>• Leg strength for bearing some weight</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Activities & Play */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Activities & Developmental Play</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-purple-800 mb-4">Recommended Activities</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Tummy time:</strong> 15-20 minutes, 3-4 times daily</li>
                    <li>• <strong>Interactive play:</strong> Peek-a-boo, singing, dancing</li>
                    <li>• <strong>Reading:</strong> Simple books with clear pictures</li>
                    <li>• <strong>Sensory exploration:</strong> Different textures and sounds</li>
                    <li>• <strong>Mirror play:</strong> Self-discovery and visual stimulation</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-pink-800 mb-4">Best Toys & Tools</h3>
                  <ul className="space-y-2 text-pink-700">
                    <li>• <strong>Activity gym:</strong> Toys for reaching and batting</li>
                    <li>• <strong>Soft rattles:</strong> Easy-to-grasp, lightweight options</li>
                    <li>• <strong>Textured toys:</strong> Different materials for exploration</li>
                    <li>• <strong>Musical toys:</strong> Simple melodies and sounds</li>
                    <li>• <strong>Baby-safe mirrors:</strong> For self-discovery play</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Healthcare & Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Healthcare During Month 3</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-4">Development Monitoring</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Key Observations:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• Social smiling and responsiveness</li>
                      <li>• Head control during tummy time</li>
                      <li>• Visual tracking and focus</li>
                      <li>• Hand discovery and intentional movements</li>
                      <li>• Vocalizations and communication attempts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Expected by Month End:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• Consistent social smiles</li>
                      <li>• Good head control in all positions</li>
                      <li>• Intentional hand movements</li>
                      <li>• Responds to familiar voices</li>
                      <li>• Shows interest in surroundings</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Next checkup:</strong> The 4-month well-baby visit will include developmental assessments, 
                    growth measurements, and the next round of vaccinations.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Developments */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common Third Month Developments</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">Hand Discovery Phase</h3>
                  <p className="text-yellow-700 mb-2">Babies become fascinated with their hands, staring at them and bringing them together.</p>
                  <p className="text-yellow-700 text-sm"><strong>Encourage:</strong> Provide hand-focused toys, encourage midline play, celebrate their discoveries.</p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Sleep Pattern Establishment</h3>
                  <p className="text-blue-700 mb-2">Many babies develop more consistent sleep schedules and longer night sleep stretches.</p>
                  <p className="text-blue-700 text-sm"><strong>Support:</strong> Maintain consistent bedtime routines, appropriate wake windows, safe sleep environment.</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="font-semibold text-green-800 mb-2">Rolling Preparation</h3>
                  <p className="text-green-700 mb-2">Babies may accidentally roll from tummy to back, showing increased core strength.</p>
                  <p className="text-green-700 text-sm"><strong>Safety note:</strong> Ensure safe sleep environment, never leave baby unattended on elevated surfaces.</p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Increased Social Interaction</h3>
                  <p className="text-purple-700 mb-2">Babies become more engaging, responsive, and may start laughing.</p>
                  <p className="text-purple-700 text-sm"><strong>Enjoy:</strong> Interactive play, reading together, singing, and responding to their social cues.</p>
                </div>
              </div>
            </section>

            {/* Month 4 Preview */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Looking Ahead: Month 4</h2>
              <p className="text-gray-700 mb-4">
                Month 4 brings even more exciting developments! Expect rolling over, reaching and grasping 
                toys, more laughter and vocalizations, and the possible introduction of solid foods discussion with your pediatrician.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Rolling Over</div>
                  <div className="text-sm text-gray-600">Front to back and possibly back to front</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Reaching & Grasping</div>
                  <div className="text-sm text-gray-600">Intentional toy manipulation</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">More Laughter</div>
                  <div className="text-sm text-gray-600">Regular giggles and vocal play</div>
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
                      <li>• Persistent vomiting or signs of dehydration</li>
                      <li>• Extreme lethargy or difficulty waking</li>
                      <li>• Severe or inconsolable crying</li>
                      <li>• Sudden changes in feeding or sleeping patterns</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Developmental Concerns:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• No social smiles by 12 weeks</li>
                      <li>• Poor head control during tummy time</li>
                      <li>• Not tracking objects or faces</li>
                      <li>• No response to sounds or voices</li>
                      <li>• Doesn&apos;t show interest in surroundings</li>
                      <li>• Extremely floppy or stiff muscle tone</li>
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
                  <h3 className="font-semibold text-gray-800 mb-2">Development Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/second-month-baby-development" className="text-purple-600 hover:underline">Second Month Development</a></li>
                    <li><a href="/blog/first-month-newborn-guide" className="text-purple-600 hover:underline">First Month Complete Guide</a></li>
                    <li><a href="/blog/newborn-first-week-guide" className="text-purple-600 hover:underline">Week 1-4 Guides</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-purple-600 hover:underline">Vaccination Schedule</a></li>
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