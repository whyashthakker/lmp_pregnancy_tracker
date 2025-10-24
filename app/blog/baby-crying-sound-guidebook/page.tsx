import { Metadata } from 'next'
import { Volume2, Clock, Heart, AlertTriangle, Baby } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Baby Crying Sound Guidebook: Understanding What Your Newborn is Telling You | Pregnancy Tracker',
  description: 'Complete guide to understanding baby crying sounds and meanings. Learn to identify hunger cries, pain cries, tired cries, and when to call your pediatrician.',
  keywords: ['baby crying sounds', 'newborn crying guide', 'baby cry meanings', 'infant communication', 'baby cues', 'crying patterns', 'newborn care', 'baby crying types', 'parenting tips', 'infant sounds'],
  openGraph: {
    title: 'Baby Crying Sound Guidebook: Understanding Your Newborn\'s Communication',
    description: 'Decode your baby\'s crying sounds with our comprehensive guide. Learn to identify different types of cries and respond appropriately.',
    type: 'article',
  },
}

export default function BabyCryingSoundGuidebook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Volume2 className="h-8 w-8" aria-label="Volume Icon" />
                </div>
                <h1 className="text-4xl font-bold">Baby Crying Sound Guidebook</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding what your newborn is telling you through different crying sounds and patterns
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <Baby className="h-8 w-8 text-purple-600 mx-auto mb-3" aria-label="Baby Icon" />
                  <div className="text-2xl font-bold text-purple-800">5 Main Types</div>
                  <div className="text-purple-600">Basic crying sounds</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" aria-label="Clock Icon" />
                  <div className="text-2xl font-bold text-blue-800">First 3 Months</div>
                  <div className="text-blue-600">Peak crying period</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-green-600 mx-auto mb-3" aria-label="Heart Icon" />
                  <div className="text-2xl font-bold text-green-800">Normal Response</div>
                  <div className="text-green-600">Building connection</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" aria-label="Alert Icon" />
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Note</h3>
                      <p className="text-amber-700">
                        Every baby is unique, and crying patterns can vary. This guide provides general patterns - trust your instincts and consult your pediatrician when in doubt.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">The 5 Main Types of Baby Cries</h2>

                <div className="space-y-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3">1. Hunger Cry (Most Common)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Sound Characteristics:</h4>
                        <ul className="list-disc list-inside text-red-600 space-y-1">
                          <li>Short, low-pitched cries</li>
                          <li>Rhythmic &quot;wah-wah-wah&quot; pattern</li>
                          <li>Starts softly, becomes more urgent</li>
                          <li>May include sucking motions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Additional Signs:</h4>
                        <ul className="list-disc list-inside text-red-600 space-y-1">
                          <li>Rooting reflex (turning head toward touch)</li>
                          <li>Putting hands to mouth</li>
                          <li>Smacking lips</li>
                          <li>Time since last feeding (2-3 hours)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">2. Tired/Sleepy Cry</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Sound Characteristics:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Continuous, whining cry</li>
                          <li>Yawning between cries</li>
                          <li>Becoming increasingly fussy</li>
                          <li>May sound frustrated or annoyed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Additional Signs:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Rubbing eyes</li>
                          <li>Clenched fists</li>
                          <li>Turning head away from stimulation</li>
                          <li>Staring blankly or looking glazed</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-3">3. Discomfort/Pain Cry</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Sound Characteristics:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Sudden, sharp, high-pitched</li>
                          <li>Loud and piercing</li>
                          <li>May come in waves</li>
                          <li>Often starts without warning</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Additional Signs:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Pulling legs toward belly (gas)</li>
                          <li>Arching back</li>
                          <li>Tense, rigid body</li>
                          <li>Red, flushed face</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-3">4. Overstimulated/Overwhelmed Cry</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Sound Characteristics:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Intense, agitated crying</li>
                          <li>Difficult to soothe</li>
                          <li>May escalate quickly</li>
                          <li>Can sound panicked</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Additional Signs:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Turning away from faces/lights</li>
                          <li>Extending arms and legs</li>
                          <li>Hiccupping or spitting up</li>
                          <li>Difficult to make eye contact</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-3">&quot;I Need You&quot; Cry (Attention/Comfort)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Sound Characteristics:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Comes and goes</li>
                          <li>Stops when picked up</li>
                          <li>Sounds almost conversational</li>
                          <li>May sound fake or forced</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Additional Signs:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Looking around for attention</li>
                          <li>Calms when talked to</li>
                          <li>Body appears relaxed</li>
                          <li>May coo between cries</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Understanding Crying Patterns by Age</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-8">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Age Range</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Average Daily Crying</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Peak Times</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Key Characteristics</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">0-2 weeks</td>
                        <td className="border border-gray-300 px-4 py-3">1-2 hours</td>
                        <td className="border border-gray-300 px-4 py-3">Mainly for basic needs</td>
                        <td className="border border-gray-300 px-4 py-3">Simple cries, mostly hunger/discomfort</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">2-6 weeks</td>
                        <td className="border border-gray-300 px-4 py-3">2-3 hours</td>
                        <td className="border border-gray-300 px-4 py-3">Late afternoon/evening</td>
                        <td className="border border-gray-300 px-4 py-3">Crying increases, more complex needs</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">6-12 weeks</td>
                        <td className="border border-gray-300 px-4 py-3">3-4 hours (peak)</td>
                        <td className="border border-gray-300 px-4 py-3">4-8 PM &quot;witching hour&quot;</td>
                        <td className="border border-gray-300 px-4 py-3">Most crying, possible colic period</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">3-4 months</td>
                        <td className="border border-gray-300 px-4 py-3">1-2 hours</td>
                        <td className="border border-gray-300 px-4 py-3">More predictable patterns</td>
                        <td className="border border-gray-300 px-4 py-3">Crying decreases, more communication</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">4+ months</td>
                        <td className="border border-gray-300 px-4 py-3">30-60 minutes</td>
                        <td className="border border-gray-300 px-4 py-3">Specific trigger times</td>
                        <td className="border border-gray-300 px-4 py-3">More specific communication, less crying</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Colic vs Normal Crying</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">Normal Crying</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li>Has identifiable triggers</li>
                      <li>Responds to soothing techniques</li>
                      <li>Occurs at various times</li>
                      <li>Total crying time under 3 hours daily</li>
                      <li>Baby can be consoled</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3">Possible Colic (Rule of 3s)</h3>
                    <ul className="list-disc list-inside text-red-700 space-y-2">
                      <li>Crying for 3+ hours daily</li>
                      <li>3+ days per week</li>
                      <li>For 3+ consecutive weeks</li>
                      <li>Inconsolable crying</li>
                      <li>Usually same time daily (often evening)</li>
                      <li>Peaks at 6 weeks, improves by 3-4 months</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Effective Soothing Techniques by Cry Type</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">For Hunger Cries:</h3>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li>Feed immediately - don&apos;t wait for crying to escalate</li>
                      <li>Watch for early hunger cues (rooting, sucking motions)</li>
                      <li>Ensure proper latch if breastfeeding</li>
                      <li>Learn more about <a href="/blog/how-to-burp-a-baby" className="text-blue-600 underline hover:text-blue-800">proper burping techniques</a></li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">For Tired Cries:</h3>
                    <ul className="list-disc list-inside text-purple-700 space-y-1">
                      <li>Create calm, dark environment</li>
                      <li>Use white noise or soft music</li>
                      <li>Try gentle rocking or swaying</li>
                      <li>Consider swaddling for comfort</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-3">For Pain/Discomfort Cries:</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li>Check diaper and clothing</li>
                      <li>Look for hair wrapped around fingers/toes</li>
                      <li>Try infant massage for gas relief</li>
                      <li>Monitor <a href="/blog/ideal-newborn-temperature-guide" className="text-green-600 underline hover:text-green-800">baby&apos;s temperature</a></li>
                      <li>Bicycle leg movements for gas</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">For Overstimulation:</h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-1">
                      <li>Move to quiet, dimly lit room</li>
                      <li>Minimize handling and talking</li>
                      <li>Use &quot;skin-to-skin&quot; contact</li>
                      <li>Consider swaddling for security</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">The 5 S&#39;s Method for Soothing</h2>

                <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                  <ol className="list-decimal list-inside text-indigo-700 space-y-3">
                    <li><strong>Swaddling:</strong> Wrap baby snugly in a blanket to mimic womb feeling</li>
                    <li><strong>Side/Stomach Position:</strong> Hold baby on side or stomach (never for sleeping)</li>
                    <li><strong>Shushing:</strong> Make &quot;shh&quot; sounds louder than baby&apos;s crying</li>
                    <li><strong>Swinging:</strong> Gentle rhythmic movement (rock, sway, or bounce)</li>
                    <li><strong>Sucking:</strong> Offer pacifier, clean finger, or facilitate nursing</li>
                  </ol>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" aria-label="Alert Icon" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">When to Call Your Pediatrician</h3>
                      <ul className="list-disc list-inside text-red-700 space-y-1">
                        <li>High-pitched, shrill crying that sounds different than usual</li>
                        <li>Crying accompanied by fever (100.4°F/38°C or higher)</li>
                        <li>Sudden change in crying patterns</li>
                        <li>Crying with vomiting, diarrhea, or refusing to eat</li>
                        <li>Weak or no crying in a sick baby</li>
                        <li>Inconsolable crying lasting more than 2 hours</li>
                        <li>Signs of illness: lethargy, rash, difficulty breathing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Additional Baby Communication Signs</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Early Hunger Cues (Before Crying)</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li>Rooting toward your chest</li>
                      <li>Making sucking motions</li>
                      <li>Putting hands to mouth</li>
                      <li>Lip smacking or tongue movements</li>
                      <li>Increased alertness and movement</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Sleep Cues (Before Crying)</h3>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li>Yawning</li>
                      <li>Rubbing eyes or ears</li>
                      <li>Decreased activity</li>
                      <li>Staring blankly</li>
                      <li>Turning away from stimulation</li>
                      <li>Becoming fussy or irritable</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Tips for Parents</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-yellow-800 mb-3">Managing Your Response</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li><strong>Stay calm:</strong> Babies can sense your stress and anxiety</li>
                      <li><strong>Take breaks:</strong> It&apos;s okay to put baby in a safe place and take a few minutes</li>
                      <li><strong>Ask for help:</strong> Don&apos;t hesitate to call family, friends, or your pediatrician</li>
                      <li><strong>Trust your instincts:</strong> You know your baby best</li>
                      <li><strong>Document patterns:</strong> Keep a crying log to identify triggers</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">Building Understanding Over Time</h3>
                    <ul className="list-disc list-inside text-purple-700 space-y-2">
                      <li>Every baby has unique patterns - learn yours</li>
                      <li>Crying decreases significantly after 3-4 months</li>
                      <li>Your response helps build secure attachment</li>
                      <li>Practice makes perfect - you&apos;ll get better at interpretation</li>
                      <li>Remember: all babies cry, and it&apos;s normal</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><a href="/blog/newborn-hiccups-guide" className="text-blue-600 underline hover:text-blue-800">Understanding newborn hiccups</a></li>
                      <li><a href="/blog/how-to-burp-a-baby" className="text-blue-600 underline hover:text-blue-800">Proper burping techniques</a></li>
                      <li><a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 underline hover:text-blue-800">Monitoring baby&apos;s temperature</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><a href="/blog/baby-massage-after-delivery" className="text-blue-600 underline hover:text-blue-800">Baby massage techniques</a></li>
                      <li><a href="/blog/umbilical-cord-care-guide" className="text-blue-600 underline hover:text-blue-800">Umbilical cord care</a></li>
                      <li><a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 underline hover:text-blue-800">Tracking baby&apos;s growth</a></li>
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