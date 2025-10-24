import { Metadata } from 'next'
import { Baby, CheckCircle, Clock, AlertTriangle, Heart, Target, RefreshCw, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Burp a Baby: Complete Guide to Newborn Burping Techniques | EGSpect',
  description: 'Learn effective baby burping techniques, positions, timing, and troubleshooting tips. Complete guide to helping your newborn release gas and prevent colic.',
  keywords: 'how to burp baby, newborn burping techniques, baby gas relief, infant burping positions, baby feeding burping, newborn colic prevention, baby digestive care',
}

export default function HowToBurpABaby() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Baby className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                How to Burp a Baby: Complete Guide
              </h1>
            </div>
            <p className="text-green-100 text-lg">
              Master effective burping techniques to keep your baby comfortable and reduce colic
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-green-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Every feed</div>
              <div className="text-sm text-gray-600">Burp frequency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">5-15 min</div>
              <div className="text-sm text-gray-600">Time needed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">3 positions</div>
              <div className="text-sm text-gray-600">Main techniques</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Gentle pats</div>
              <div className="text-sm text-gray-600">Best method</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Why Burping is Important */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Why Burping is Essential for Babies</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Babies swallow air while feeding, which can become trapped in their stomach and cause 
                  discomfort. Burping helps release this air, preventing gas buildup, reducing fussiness, 
                  and promoting better digestion. Proper burping is especially important for <a href="/blog/complete-newborn-care-guide" className="text-green-600 hover:underline">newborn care</a> 
                  and can significantly reduce colic symptoms.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Prevents Gas Pain</h3>
                    <p className="text-blue-700 text-sm">Releases trapped air that causes stomach discomfort</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Reduces Spit-Up</h3>
                    <p className="text-green-700 text-sm">Helps prevent overfeeding and reduces reflux</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Better Sleep</h3>
                    <p className="text-purple-700 text-sm">Comfortable babies sleep more peacefully</p>
                  </div>
                </div>
              </div>
            </section>

            {/* The Three Main Burping Positions */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Three Effective Burping Positions</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Position 1: Over-the-Shoulder</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">How to Do It:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Hold baby upright against your chest</li>
                        <li>• Place baby&apos;s chin on your shoulder</li>
                        <li>• Support baby&apos;s bottom with one hand</li>
                        <li>• Use other hand to gently pat back</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-green-600 hover:underline">Ensure baby stays warm</a></li>
                        <li>• Place burp cloth on shoulder</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Best For:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Newborns with good head control</li>
                        <li>• After <a href="/blog/baby-massage-after-delivery" className="text-green-600 hover:underline">feeding sessions</a></li>
                        <li>• Babies who spit up frequently</li>
                        <li>• When baby seems very gassy</li>
                        <li>• Most comfortable for parents</li>
                        <li>• Allows for gentle swaying motion</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Pro Tips:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Use firm but gentle pressure when patting</li>
                      <li>• Try circular rubbing motions if patting doesn&apos;t work</li>
                      <li>• Walk around slowly while holding this position</li>
                      <li>• Support baby&apos;s head if they don&apos;t have strong neck control</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Position 2: Sitting Up</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">How to Do It:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Sit baby on your lap facing away</li>
                        <li>• Support chest and chin with one hand</li>
                        <li>• Keep fingers away from throat area</li>
                        <li>• Pat or rub back with other hand</li>
                        <li>• Lean baby slightly forward</li>
                        <li>• Use gentle upward strokes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Best For:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Babies with reflux issues</li>
                        <li>• When shoulder position doesn&apos;t work</li>
                        <li>• Older babies (3+ months)</li>
                        <li>• Babies who prefer sitting</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-green-600 hover:underline">Babies with good head control</a></li>
                        <li>• During interactive feeding times</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Safety Notes:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Never press on baby&apos;s throat or windpipe</li>
                      <li>• Support under the arms, not around the neck</li>
                      <li>• Keep a secure grip to prevent slipping</li>
                      <li>• Don&apos;t lean baby too far forward</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Position 3: Face-Down on Lap</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">How to Do It:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Lay baby face-down across your lap</li>
                        <li>• Support head and neck carefully</li>
                        <li>• Baby&apos;s tummy should rest on your thigh</li>
                        <li>• Pat or rub back gently</li>
                        <li>• Keep baby&apos;s head slightly elevated</li>
                        <li>• Ensure airways remain clear</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Best For:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Stubborn gas bubbles</li>
                        <li>• Babies who resist other positions</li>
                        <li>• Colicky babies</li>
                        <li>• When gentle tummy pressure helps</li>
                        <li>• Babies who find this soothing</li>
                        <li>• Alternative when sitting/standing is tiring</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Important Precautions:</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Always keep baby&apos;s head higher than chest</li>
                      <li>• Never leave baby unattended in this position</li>
                      <li>• Stop if baby seems uncomfortable</li>
                      <li>• Use only for burping, not for sleep</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Burping Techniques and Methods */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Effective Burping Techniques</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Patting Technique</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">How to Pat:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Use cupped hand, not flat palm</li>
                        <li>• Gentle, rhythmic motions</li>
                        <li>• Pat middle of back, not lower spine</li>
                        <li>• Start softly, gradually increase pressure</li>
                        <li>• Maintain steady rhythm</li>
                        <li>• 1-2 pats per second pace</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Common Mistakes:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Patting too hard or too soft</li>
                        <li>• Using flat hand instead of cupped</li>
                        <li>• Patting too high (shoulder blades)</li>
                        <li>• Patting too low (lower back)</li>
                        <li>• Inconsistent rhythm</li>
                        <li>• Giving up too quickly</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Rubbing Technique</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">How to Rub:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Use palm of hand</li>
                        <li>• Circular motions on back</li>
                        <li>• Start at bottom, work upward</li>
                        <li>• Gentle, consistent pressure</li>
                        <li>• Cover entire back area</li>
                        <li>• Can combine with patting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">When Rubbing Works Best:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-green-600 hover:underline">Relaxed, sleepy babies</a></li>
                        <li>• When patting is too stimulating</li>
                        <li>• Babies who enjoy massage</li>
                        <li>• As a soothing technique</li>
                        <li>• Before bedtime burping</li>
                        <li>• For gentle encouragement</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Movement and Positioning</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Helpful Movements:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Gentle swaying while burping</li>
                        <li>• Walking slowly around room</li>
                        <li>• Slight bouncing motion</li>
                        <li>• Changing positions periodically</li>
                        <li>• Gentle side-to-side rocking</li>
                        <li>• Standing vs. sitting variations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Position Changes:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Try different angles</li>
                        <li>• Switch between positions</li>
                        <li>• Adjust baby&apos;s height</li>
                        <li>• Vary pressure and location</li>
                        <li>• Give breaks between attempts</li>
                        <li>• Let gravity help with positioning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Timing and Frequency */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">When and How Often to Burp</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Breastfeeding Burping Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">When to Burp:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Between switching breasts</li>
                        <li>• After each feeding session</li>
                        <li>• If baby becomes fussy during feeding</li>
                        <li>• When baby naturally pauses</li>
                        <li>• Every 5-10 minutes during longer feeds</li>
                        <li>• Before putting baby down</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Breastfeeding Considerations:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <a href="/blog/formula-vs-breastfeeding-guide" className="text-green-600 hover:underline">Breastfed babies swallow less air</a></li>
                        <li>• May need less frequent burping</li>
                        <li>• Watch for baby&apos;s cues</li>
                        <li>• Some may not burp every time</li>
                        <li>• Position affects air intake</li>
                        <li>• Fast letdown may increase air swallowing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Bottle Feeding Burping Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Frequent Burping Needed:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Every 1-2 ounces of formula</li>
                        <li>• More air swallowed with bottles</li>
                        <li>• Every 5-10 minutes during feeding</li>
                        <li>• Before and after feeding</li>
                        <li>• When baby pushes bottle away</li>
                        <li>• If baby becomes uncomfortable</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Bottle Feeding Tips:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Use anti-colic bottles if needed</li>
                        <li>• Proper nipple size reduces air intake</li>
                        <li>• Keep bottle tilted correctly</li>
                        <li>• Don&apos;t overfill bottles</li>
                        <li>• Check for proper latch on nipple</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-green-600 hover:underline">Monitor feeding pace</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Age-Based Burping Needs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">0-3 Months:</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Most frequent burping needed</li>
                        <li>• Immature digestive system</li>
                        <li>• More sensitive to gas</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-green-600 hover:underline">Temperature affects comfort</a></li>
                        <li>• May take 5-15 minutes</li>
                        <li>• Try multiple positions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">3-6 Months:</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-green-600 hover:underline">Better head control</a></li>
                        <li>• More efficient feeding</li>
                        <li>• Less air swallowing</li>
                        <li>• May burp more easily</li>
                        <li>• Can try different positions</li>
                        <li>• Some babies need less burping</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">6+ Months:</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Starting solid foods</li>
                        <li>• More mature digestion</li>
                        <li>• Can sit independently</li>
                        <li>• May burp on their own</li>
                        <li>• Less dependent on burping</li>
                        <li>• Focus shifts to solid food digestion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting Common Issues */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Troubleshooting Burping Challenges
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Baby Won&apos;t Burp:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• <strong>Try different positions:</strong> Switch between all three methods</li>
                        <li>• <strong>Change technique:</strong> Alternate patting and rubbing</li>
                        <li>• <strong>Be patient:</strong> Some babies take 10-15 minutes</li>
                        <li>• <strong>Take breaks:</strong> Rest and try again</li>
                        <li>• <strong>Movement helps:</strong> Walk while burping</li>
                        <li>• <strong>Not always necessary:</strong> Some feeds don&apos;t require burping</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Excessive Spit-Up:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• <strong>Slower feeding:</strong> Take more frequent breaks</li>
                        <li>• <strong>Keep upright:</strong> Hold vertically for 15-20 minutes</li>
                        <li>• <strong>Smaller amounts:</strong> Feed less volume more often</li>
                        <li>• <strong>Check latch:</strong> Ensure proper bottle/breast positioning</li>
                        <li>• <strong>Burp more often:</strong> Every 1-2 oz for bottles</li>
                        <li>• <strong>Consult doctor:</strong> If excessive or projectile</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Baby Cries During Burping:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Try gentler pressure and technique</li>
                        <li>• Change positions more frequently</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-green-600 hover:underline">Use soothing voice and movement</a></li>
                        <li>• Take breaks for comfort</li>
                        <li>• Check if baby is too tired or overstimulated</li>
                        <li>• May not need burping at that moment</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Gas Pain Signs:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Pulling knees to chest</li>
                        <li>• Arching back during or after feeds</li>
                        <li>• Crying that peaks in evening (colic)</li>
                        <li>• Hard, distended tummy</li>
                        <li>• Difficulty settling after feeds</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-green-600 hover:underline">Irregular sleep patterns</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Gas Relief Methods */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Additional Gas Relief Methods</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Bicycle Legs Exercise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">How to Do It:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Lay baby on back on firm surface</li>
                        <li>• Hold ankles gently</li>
                        <li>• Move legs in cycling motion</li>
                        <li>• Alternate legs slowly and gently</li>
                        <li>• Continue for 30-60 seconds</li>
                        <li>• Can combine with tummy massage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Helps move gas through intestines</li>
                        <li>• Provides gentle abdominal pressure</li>
                        <li>• Can stimulate bowel movements</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-green-600 hover:underline">Relaxing for many babies</a></li>
                        <li>• Easy to do anywhere</li>
                        <li>• Good for daily routine</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Tummy Massage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Massage Technique:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-green-600 hover:underline">Warm hands before starting</a></li>
                        <li>• Use gentle circular motions</li>
                        <li>• Start at belly button, work outward</li>
                        <li>• Follow clockwise direction</li>
                        <li>• Use light, consistent pressure</li>
                        <li>• 5-10 minutes duration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Best Timing:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Between feedings (not immediately after)</li>
                        <li>• When baby is alert but calm</li>
                        <li>• During diaper changes</li>
                        <li>• Before bedtime routine</li>
                        <li>• When signs of gas discomfort appear</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-green-600 hover:underline">In warm, comfortable environment</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Environmental Factors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Feeding Environment:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Quiet, calm setting</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-green-600 hover:underline">Comfortable temperature</a></li>
                        <li>• Reduce distractions</li>
                        <li>• Proper lighting (not too bright)</li>
                        <li>• Comfortable seating for parent</li>
                        <li>• Have burp cloths ready</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Feeding Pace:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Allow baby to set rhythm</li>
                        <li>• Don&apos;t rush feeding sessions</li>
                        <li>• Take breaks when baby pulls away</li>
                        <li>• <a href="/blog/formula-vs-breastfeeding-guide" className="text-green-600 hover:underline">Monitor for overfeeding signs</a></li>
                        <li>• Respect baby&apos;s appetite cues</li>
                        <li>• Avoid forcing last bit of bottle</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* When to Seek Help */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">When to Consult Your Pediatrician</h2>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-4">Concerning Signs:</h3>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• <strong>Projectile vomiting:</strong> Forceful spit-up across room</li>
                      <li>• <strong>Poor weight gain:</strong> <a href="/blog/newborn-growth-charts-head-height" className="text-green-600 hover:underline">Below growth curve</a></li>
                      <li>• <strong>Excessive crying:</strong> Inconsolable for hours</li>
                      <li>• <strong>Feeding refusal:</strong> Consistently refusing feeds</li>
                      <li>• <strong>Blood in spit-up:</strong> Red or brown coloring</li>
                      <li>• <strong>Severe constipation:</strong> No bowel movements for days</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-4">Get Professional Guidance:</h3>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• <strong>Persistent colic:</strong> Crying patterns affecting family</li>
                      <li>• <strong>Feeding difficulties:</strong> Ongoing latch or intake issues</li>
                      <li>• <strong>Sleep disruption:</strong> <a href="/blog/complete-newborn-care-guide" className="text-green-600 hover:underline">Gas affecting sleep significantly</a></li>
                      <li>• <strong>Parent stress:</strong> When burping becomes overwhelming</li>
                      <li>• <strong>Questions about technique:</strong> Want professional demonstration</li>
                      <li>• <strong>Multiple feeding issues:</strong> Combined problems</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Remember:</strong> Every baby is different. Some need frequent burping, others rarely need it. 
                    Trust your instincts and don&apos;t hesitate to ask for help when you need it. <a href="/blog/complete-newborn-care-guide" className="text-green-600 hover:underline">Newborn care</a> is a learning process for all parents.
                  </p>
                </div>
              </div>
            </section>

            {/* Expert Tips */}
            <section className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Expert Burping Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">Be Patient</div>
                  <div className="text-sm text-gray-600">Some babies take 15+ minutes to burp</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">Stay Calm</div>
                  <div className="text-sm text-gray-600">Your stress can affect baby&apos;s comfort</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">Trust Instincts</div>
                  <div className="text-sm text-gray-600">You&apos;ll learn your baby&apos;s unique needs</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Feeding & Care Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-green-600 hover:underline">Complete Newborn Care</a></li>
                    <li><a href="/blog/formula-vs-breastfeeding-guide" className="text-green-600 hover:underline">Feeding Guide</a></li>
                    <li><a href="/blog/baby-massage-after-delivery" className="text-green-600 hover:underline">Baby Massage Techniques</a></li>
                    <li><a href="/blog/ideal-newborn-temperature-guide" className="text-green-600 hover:underline">Temperature & Comfort</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Development & Health:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-growth-charts-head-height" className="text-green-600 hover:underline">Growth & Development</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-green-600 hover:underline">Vitamin D for Babies</a></li>
                    <li><a href="/blog/when-to-plan-baby-photoshoot" className="text-green-600 hover:underline">Baby Milestone Photos</a></li>
                    <li><a href="/baby" className="text-green-600 hover:underline">Baby Health Tracker</a></li>
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