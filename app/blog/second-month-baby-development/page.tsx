import { Metadata } from 'next'
import { Heart, Clock, Eye, Brain, Zap, AlertCircle, Users, Stethoscope, Shield, Calendar, Smile, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Second Month Baby Development Guide: 4-8 Weeks Growth & Milestones | EGSpect',
  description: 'Complete guide to your 2-month-old baby&apos;s development. Learn about social smiles, head control, feeding patterns, sleep improvements, and key milestones for 4-8 week old babies.',
  keywords: 'second month baby development, 2 month old baby milestones, baby development 4-8 weeks, infant growth second month, baby social development',
}

export default function SecondMonthBabyDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Smile className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Second Month Baby Development
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Your baby&apos;s second month: Social smiles, better head control, and emerging personality (4-8 weeks)
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">4-8 weeks</div>
              <div className="text-sm text-gray-600">Age Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">6-8</div>
              <div className="text-sm text-gray-600">Feeds per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">12-16 hrs</div>
              <div className="text-sm text-gray-600">Sleep per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">600-1200g</div>
              <div className="text-sm text-gray-600">Weight gain</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Month Overview */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Second Month Overview</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The second month marks a significant transformation in your baby&apos;s development. This is when you&apos;ll 
                  see the first genuine social smiles, improved head control, and longer periods of alertness. Your baby 
                  is becoming more interactive and beginning to develop their unique personality.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Major Developments This Month:</h3>
                    <ul className="space-y-1 text-blue-700">
                      <li>• First genuine social smiles</li>
                      <li>• Better head control and neck strength</li>
                      <li>• Increased visual tracking abilities</li>
                      <li>• Beginning of cooing and vocal play</li>
                      <li>• More predictable sleep patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-800 mb-2">What&apos;s New:</h3>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Longer periods of alertness (1-2 hours)</li>
                      <li>• Recognition of familiar faces and voices</li>
                      <li>• Beginning of hand-eye coordination</li>
                      <li>• More efficient feeding patterns</li>
                      <li>• Stronger and more purposeful movements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Major Milestones */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Key Second Month Milestones</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                    <Smile className="w-5 h-5" />
                    Social & Emotional
                  </h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• <strong>Social smiles:</strong> Responds to faces with genuine smiles</li>
                    <li>• <strong>Eye contact:</strong> Maintains eye contact during interactions</li>
                    <li>• <strong>Recognition:</strong> Shows preference for familiar people</li>
                    <li>• <strong>Calming:</strong> Responds to soothing voices and touch</li>
                    <li>• <strong>Expression:</strong> Beginning to show different emotions</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Motor Development
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Head control:</strong> Lifts head 45° during tummy time</li>
                    <li>• <strong>Neck strength:</strong> Holds head steady when upright</li>
                    <li>• <strong>Arm movements:</strong> More coordinated arm swinging</li>
                    <li>• <strong>Grasp reflex:</strong> Strong grip, may hold objects briefly</li>
                    <li>• <strong>Leg strength:</strong> Stronger kicking movements</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Visual & Cognitive
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Visual tracking:</strong> Follows objects 180 degrees</li>
                    <li>• <strong>Focus distance:</strong> Clear vision 8-18 inches</li>
                    <li>• <strong>Pattern preference:</strong> Attracted to faces and bold patterns</li>
                    <li>• <strong>Color vision:</strong> Beginning to see some colors</li>
                    <li>• <strong>Recognition:</strong> Recognizes familiar objects</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Communication
                  </h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Cooing:</strong> Makes &apos;ah&apos;, &apos;eh&apos;, &apos;oh&apos; sounds</li>
                    <li>• <strong>Vocal play:</strong> Experiments with different sounds</li>
                    <li>• <strong>Response:</strong> Vocalizes back during conversations</li>
                    <li>• <strong>Crying patterns:</strong> Different cries for different needs</li>
                    <li>• <strong>Turn-taking:</strong> Beginning of conversational patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Feeding Patterns */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Feeding Patterns - Month 2</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-4">Breastfeeding (6-8 weeks)</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Frequency:</strong> 6-8 times per day</li>
                    <li>• <strong>Duration:</strong> 20-45 minutes per session</li>
                    <li>• <strong>Intervals:</strong> 3-4 hours between feeds</li>
                    <li>• <strong>Growth spurt:</strong> Around 6 weeks, may increase frequency</li>
                    <li>• <strong>Efficiency:</strong> More effective nursing, faster letdown</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4">Formula Feeding (6-8 weeks)</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Frequency:</strong> 5-7 times per day</li>
                    <li>• <strong>Amount:</strong> 4-6 oz per feeding</li>
                    <li>• <strong>Intervals:</strong> 3-4 hours between feeds</li>
                    <li>• <strong>Night feeds:</strong> May go 4-6 hours at night</li>
                    <li>• <strong>Total daily:</strong> 20-32 oz per day</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">6-Week Growth Spurt</h4>
                <p className="text-yellow-700 text-sm">
                  Around 6 weeks, many babies experience a significant growth spurt. This may result in increased 
                  appetite, more frequent feeding, and temporary changes in sleep patterns for 2-3 days.
                </p>
              </div>
            </section>

            {/* Sleep Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Sleep Development - Month 2</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-800 mb-4">Sleep Patterns</h3>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• <strong>Total sleep:</strong> 12-16 hours per day</li>
                    <li>• <strong>Night sleep:</strong> 6-8 hours with 1-2 wake-ups</li>
                    <li>• <strong>Longest stretch:</strong> 4-6 hours consecutively</li>
                    <li>• <strong>Daytime naps:</strong> 3-4 naps of 1-3 hours</li>
                    <li>• <strong>Wake windows:</strong> 1-2 hours of alertness</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-teal-800 mb-4">Sleep Improvements</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• <strong>Day/night distinction:</strong> Better circadian rhythm</li>
                    <li>• <strong>Self-soothing:</strong> May settle without help occasionally</li>
                    <li>• <strong>Predictable patterns:</strong> More regular sleep times</li>
                    <li>• <strong>Less night feeding:</strong> Longer stretches between feeds</li>
                    <li>• <strong>Alert periods:</strong> More wakeful time during day</li>
                  </ul>
                </div>
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
                    <li>• Weight gain: 150-200g per week</li>
                    <li>• Length increase: 2.5-4 cm per month</li>
                    <li>• Head circumference: 1.5-2 cm per month</li>
                    <li>• Doubled birth weight by 4-6 months</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Physical Changes</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• More filled-out appearance</li>
                    <li>• Better muscle tone and strength</li>
                    <li>• Smoother, less wrinkled skin</li>
                    <li>• Hair growth and texture changes</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-800 mb-3">Motor Skills</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Stronger neck and shoulder muscles</li>
                    <li>• More controlled arm and leg movements</li>
                    <li>• Beginning of voluntary hand movements</li>
                    <li>• Improved head stability when carried</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Activities & Stimulation */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Activities & Developmental Play</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-purple-800 mb-4">Recommended Activities</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Tummy time:</strong> 10-15 minutes, 2-3 times daily</li>
                    <li>• <strong>Face-to-face interaction:</strong> Talk, smile, make faces</li>
                    <li>• <strong>Visual stimulation:</strong> High-contrast books and toys</li>
                    <li>• <strong>Music and singing:</strong> Soft lullabies and gentle songs</li>
                    <li>• <strong>Gentle massage:</strong> Arms, legs, and back during calm times</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-pink-800 mb-4">Best Toys & Tools</h3>
                  <ul className="space-y-2 text-pink-700">
                    <li>• <strong>Mobiles:</strong> High-contrast, slow-moving designs</li>
                    <li>• <strong>Mirrors:</strong> Baby-safe mirrors for visual stimulation</li>
                    <li>• <strong>Rattles:</strong> Lightweight, easy-to-grasp handles</li>
                    <li>• <strong>Soft books:</strong> Black and white or bold patterns</li>
                    <li>• <strong>Play gym:</strong> Overhead toys for reaching practice</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Healthcare & Checkups */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Healthcare During Month 2</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-4">Two-Month Well-Baby Visit</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">What to Expect:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• Physical examination and measurements</li>
                      <li>• Developmental milestone assessment</li>
                      <li>• First round of vaccinations</li>
                      <li>• Feeding and sleep pattern discussion</li>
                      <li>• Safety guidance and recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Common Vaccinations:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• DTaP (Diphtheria, Tetanus, Pertussis)</li>
                      <li>• Hib (Haemophilus influenzae type b)</li>
                      <li>• IPV (Inactivated Poliovirus)</li>
                      <li>• PCV13 (Pneumococcal Conjugate)</li>
                      <li>• RV (Rotavirus)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Vaccination tips:</strong> Schedule vaccines in the morning, bring comfort items, 
                    and plan for possible fussiness or slight fever afterward.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Concerns */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common Second Month Concerns</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">6-Week Growth Spurt</h3>
                  <p className="text-yellow-700 mb-2">Increased feeding frequency, fussiness, and sleep disruption around 6 weeks.</p>
                  <p className="text-yellow-700 text-sm"><strong>Normal response:</strong> Feed on demand, expect 2-3 days of increased needs, extra patience required.</p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">&apos;Wonder Weeks&apos; Development</h3>
                  <p className="text-blue-700 mb-2">Mental development leaps can cause temporary fussiness and sleep regression.</p>
                  <p className="text-blue-700 text-sm"><strong>Support strategies:</strong> Extra comfort, maintain routines, additional stimulation during alert periods.</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="font-semibold text-green-800 mb-2">Sleep Pattern Changes</h3>
                  <p className="text-green-700 mb-2">As baby becomes more alert, sleep patterns may temporarily become less predictable.</p>
                  <p className="text-green-700 text-sm"><strong>Helpful approach:</strong> Gentle sleep routines, appropriate wake windows, consistent bedtime environment.</p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Overstimulation</h3>
                  <p className="text-purple-700 mb-2">Increased alertness can lead to overstimulation and fussiness if not managed properly.</p>
                  <p className="text-purple-700 text-sm"><strong>Prevention:</strong> Watch for tired cues, provide quiet time, create calm environments for rest.</p>
                </div>
              </div>
            </section>

            {/* Month 3 Preview */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Looking Ahead: Month 3</h2>
              <p className="text-gray-700 mb-4">
                Month 3 brings even more exciting developments! Expect more consistent sleep patterns, 
                improved head control, beginning of rolling preparation, and more interactive play.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Better Sleep Patterns</div>
                  <div className="text-sm text-gray-600">Longer night stretches</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Improved Head Control</div>
                  <div className="text-sm text-gray-600">90-degree lift during tummy time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Hand Discovery</div>
                  <div className="text-sm text-gray-600">Intentional hand movements</div>
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
                      <li>• No response to loud sounds</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Developmental Concerns:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• No social smiles by 8 weeks</li>
                      <li>• Not tracking objects or faces</li>
                      <li>• No attempt to lift head during tummy time</li>
                      <li>• Not responding to voices or sounds</li>
                      <li>• Poor muscle tone or excessive floppy movements</li>
                      <li>• Significant feeding difficulties</li>
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
                    <li><a href="/blog/first-month-newborn-guide" className="text-purple-600 hover:underline">First Month Complete Guide</a></li>
                    <li><a href="/blog/newborn-first-week-guide" className="text-purple-600 hover:underline">Week 1 Development</a></li>
                    <li><a href="/blog/newborn-second-week-guide" className="text-purple-600 hover:underline">Week 2 Development</a></li>
                    <li><a href="/blog/newborn-third-week-guide" className="text-purple-600 hover:underline">Week 3 Development</a></li>
                    <li><a href="/blog/newborn-fourth-week-guide" className="text-purple-600 hover:underline">Week 4 Development</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Helpful Tools:</h3>
                  <ul className="space-y-1">
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-purple-600 hover:underline">Vaccination Guide</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-purple-600 hover:underline">Due Date Calculator</a></li>
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