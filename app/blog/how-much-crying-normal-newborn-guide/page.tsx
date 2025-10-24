import { Metadata } from 'next'
import { Baby, Clock, Heart, AlertTriangle, Volume2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Crying is Normal for Newborns? Complete Guide to Baby Crying | Pregnancy Tracker',
  description: 'Comprehensive guide to understanding newborn crying patterns. Learn why babies cry, how much is normal, when to worry, and effective soothing techniques for new parents.',
  keywords: 'newborn crying, baby crying normal, why babies cry, excessive crying, colic, soothing crying baby, infant crying patterns, baby fussiness, newborn communication',
  openGraph: {
    title: 'How Much Crying is Normal for Newborns? Understanding Baby Crying Patterns',
    description: 'Learn about normal newborn crying patterns, why babies cry so much, and when excessive crying might indicate a problem.',
    type: 'article',
  },
}

export default function HowMuchCryingNormalNewbornGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Volume2 className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">How Much Crying is Normal for Newborns?</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding baby crying patterns, why babies cry so much, and when to be concerned
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-800">2-3 Hours</div>
                  <div className="text-blue-600">Average daily crying</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <Baby className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-800">6 Weeks</div>
                  <div className="text-purple-600">Peak crying period</div>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-pink-800">Normal</div>
                  <div className="text-pink-600">Crying is healthy communication</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Is Crying Good for Babies?</h3>
                      <p className="text-green-700">
                        Yes! Crying is not only normal but actually beneficial for babies. It&apos;s their primary way to communicate needs, helps develop their lungs, and strengthens the bond with caregivers through responsive care.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Do Babies Cry So Much?</h2>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Crying is Baby&apos;s Language</h3>
                  <p className="text-blue-700 mb-4">
                    Newborns cry because it&apos;s their only way to communicate. Unlike other baby mammals who can move around independently, human babies are completely dependent and must signal their needs through crying.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Biological Reasons:</h4>
                      <ul className="list-disc list-inside text-blue-600 space-y-2">
                        <li>Immature nervous system</li>
                        <li>Developing circadian rhythms</li>
                        <li>Sensitive to environmental changes</li>
                        <li>Processing overwhelming stimuli</li>
                        <li>Natural survival mechanism</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Developmental Benefits:</h4>
                      <ul className="list-disc list-inside text-blue-600 space-y-2">
                        <li>Strengthens lung muscles</li>
                        <li>Develops vocal cords</li>
                        <li>Promotes parent-child bonding</li>
                        <li>Releases stress hormones safely</li>
                        <li>Improves oxygen circulation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Normal Crying Patterns by Age</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">Newborn (0-2 weeks)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Typical Patterns:</h4>
                        <ul className="list-disc list-inside text-yellow-600 space-y-1">
                          <li>1-2 hours of crying per day</li>
                          <li>Short bursts throughout day</li>
                          <li>Often related to basic needs</li>
                          <li>May cry more in evening</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">What&apos;s Normal:</h4>
                        <ul className="list-disc list-inside text-yellow-600 space-y-1">
                          <li>Easily soothed when needs met</li>
                          <li>Clear hunger and comfort cues</li>
                          <li>Sleeps between crying episodes</li>
                          <li>Responds to swaddling and holding</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">2-6 Weeks (Peak Crying Period)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Typical Patterns:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>2-3 hours of crying per day</li>
                          <li>Peak around 6 weeks of age</li>
                          <li>Evening fussiness common</li>
                          <li>May seem inconsolable at times</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">What&apos;s Normal:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Witching hour (5-8 PM fussiness)</li>
                          <li>Cluster feeding periods</li>
                          <li>Growth spurt related crying</li>
                          <li>Still responds to soothing eventually</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">6 Weeks - 3 Months</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Typical Patterns:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Crying gradually decreases</li>
                          <li>1-2 hours per day average</li>
                          <li>More predictable patterns emerge</li>
                          <li>Better self-soothing abilities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">What&apos;s Normal:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Clearer hunger and sleep cues</li>
                          <li>Responds better to routines</li>
                          <li>May still have fussy periods</li>
                          <li>More alert and interactive</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">3+ Months</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Typical Patterns:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Significant decrease in crying</li>
                          <li>1 hour or less per day</li>
                          <li>Crying for specific reasons</li>
                          <li>Better sleep patterns</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">What&apos;s Normal:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Develops other communication methods</li>
                          <li>Shows clear preferences</li>
                          <li>Easier to soothe and distract</li>
                          <li>More predictable daily rhythm</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Different Types of Cries</h2>

                <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4">Decoding Your Baby&apos;s Cries</h3>
                  
                  <div className="space-y-4">
                    <div className="border border-indigo-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-700 mb-2">🍼 Hunger Cry</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-indigo-600">
                        <div>
                          <strong>Sounds like:</strong> Short, rhythmic, low-pitched
                        </div>
                        <div>
                          <strong>Body language:</strong> Rooting, sucking motions, fists to mouth
                        </div>
                      </div>
                    </div>

                    <div className="border border-indigo-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-700 mb-2">😴 Tired Cry</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-indigo-600">
                        <div>
                          <strong>Sounds like:</strong> Whiny, continuous, escalating
                        </div>
                        <div>
                          <strong>Body language:</strong> Rubbing eyes, yawning, arching back
                        </div>
                      </div>
                    </div>

                    <div className="border border-indigo-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-700 mb-2">😣 Discomfort Cry</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-indigo-600">
                        <div>
                          <strong>Sounds like:</strong> Urgent, high-pitched, intense
                        </div>
                        <div>
                          <strong>Body language:</strong> Pulling legs up, grimacing, squirming
                        </div>
                      </div>
                    </div>

                    <div className="border border-indigo-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-700 mb-2">🤗 Attention Cry</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-indigo-600">
                        <div>
                          <strong>Sounds like:</strong> Intermittent, stops when picked up
                        </div>
                        <div>
                          <strong>Body language:</strong> Looking around, calms with interaction
                        </div>
                      </div>
                    </div>

                    <div className="border border-indigo-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-700 mb-2">😰 Overstimulation Cry</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-indigo-600">
                        <div>
                          <strong>Sounds like:</strong> Frantic, high-pitched, difficult to soothe
                        </div>
                        <div>
                          <strong>Body language:</strong> Turning away, clenched fists, trembling
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Effective Soothing Techniques</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-rose-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-rose-800 mb-4">The 5 S&apos;s Method</h3>
                    <ul className="list-disc list-inside text-rose-700 space-y-2">
                      <li><strong>Swaddling:</strong> Wrap baby snugly in blanket</li>
                      <li><strong>Side/Stomach:</strong> Hold baby on side or stomach (not for sleep)</li>
                      <li><strong>Shushing:</strong> Make loud &quot;shh&quot; sounds near ear</li>
                      <li><strong>Swinging:</strong> Gentle, rhythmic motion</li>
                      <li><strong>Sucking:</strong> Pacifier, clean finger, or nursing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-teal-800 mb-4">Additional Calming Methods</h3>
                    <ul className="list-disc list-inside text-teal-700 space-y-2">
                      <li>Skin-to-skin contact</li>
                      <li>White noise or soft music</li>
                      <li>Warm bath or massage</li>
                      <li>Change of environment</li>
                      <li>Car ride or stroller walk</li>
                      <li>Different caregiver&apos;s arms</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">When to Be Concerned: Excessive Crying</h2>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Signs That May Indicate a Problem</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Crying Patterns:</h4>
                          <ul className="list-disc list-inside text-red-600 space-y-1">
                            <li>More than 3 hours per day for 3+ weeks</li>
                            <li>Sudden change in crying pattern</li>
                            <li>High-pitched, piercing screams</li>
                            <li>Inconsolable for hours</li>
                            <li>Crying that sounds painful</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Accompanying Symptoms:</h4>
                          <ul className="list-disc list-inside text-red-600 space-y-1">
                            <li>Fever or changes in temperature</li>
                            <li>Poor feeding or weight loss</li>
                            <li>Vomiting or diarrhea</li>
                            <li>Lethargy when not crying</li>
                            <li>Difficulty breathing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Colic</h2>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">What is Colic?</h3>
                  <p className="text-yellow-700 mb-4">
                    Colic is defined as crying for more than 3 hours a day, for more than 3 days a week, for more than 3 weeks in an otherwise healthy baby.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-3">Colic Characteristics:</h4>
                      <ul className="list-disc list-inside text-yellow-600 space-y-2">
                        <li>Intense, inconsolable crying</li>
                        <li>Usually occurs same time daily</li>
                        <li>Often in late afternoon/evening</li>
                        <li>Baby appears to be in pain</li>
                        <li>Pulls legs up to stomach</li>
                        <li>Clenched fists, arched back</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-3">Colic Facts:</h4>
                      <ul className="list-disc list-inside text-yellow-600 space-y-2">
                        <li>Affects 10-25% of babies</li>
                        <li>Usually starts around 2-3 weeks</li>
                        <li>Peaks at 6 weeks of age</li>
                        <li>Typically resolves by 3-4 months</li>
                        <li>Cause is still unknown</li>
                        <li>Baby is otherwise healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Coping Strategies for Parents</h2>

                <div className="bg-purple-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Taking Care of Yourself</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Immediate Relief:</h4>
                      <ul className="list-disc list-inside text-purple-600 space-y-2">
                        <li>Put baby down safely and take a break</li>
                        <li>Call a friend or family member for support</li>
                        <li>Use earplugs to reduce stress</li>
                        <li>Remember: crying won&apos;t hurt the baby</li>
                        <li>Tag-team with partner when possible</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Long-term Support:</h4>
                      <ul className="list-disc list-inside text-purple-600 space-y-2">
                        <li>Join parent support groups</li>
                        <li>Accept help from friends and family</li>
                        <li>Maintain realistic expectations</li>
                        <li>Practice self-compassion</li>
                        <li>Seek professional help if feeling overwhelmed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">When to Contact Your Healthcare Provider</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-800 mb-2">🚨 Call Immediately If:</h3>
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      <li>Baby has fever (over 100.4°F/38°C)</li>
                      <li>Crying sounds like screaming or is very high-pitched</li>
                      <li>Baby is lethargic or difficult to wake</li>
                      <li>Signs of illness (vomiting, diarrhea, rash)</li>
                      <li>You&apos;re worried about baby&apos;s safety or your own</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-800 mb-2">📞 Schedule Appointment If:</h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-1">
                      <li>Crying patterns suddenly change</li>
                      <li>Excessive crying continues beyond 3-4 months</li>
                      <li>Baby isn&apos;t gaining weight appropriately</li>
                      <li>You suspect colic or other conditions</li>
                      <li>You need guidance on soothing techniques</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Remember: This Too Shall Pass</h3>
                  <p className="text-green-700">
                    The intense crying phase is temporary. Most babies show significant improvement by 3-4 months as their nervous systems mature and they develop better self-regulation skills. You&apos;re doing a great job, even when it doesn&apos;t feel like it!
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li><a href="/blog/complete-newborn-care-guide" className="text-blue-600 underline hover:text-blue-800">Complete newborn care guide</a></li>
                      <li><a href="/blog/first-month-newborn-guide" className="text-blue-600 underline hover:text-blue-800">First month newborn guide</a></li>
                      <li><a href="/tools/newborn-sleep-tracker" className="text-blue-600 underline hover:text-blue-800">Sleep schedule tracker</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li><a href="/tools/feeding-log-tracker" className="text-blue-600 underline hover:text-blue-800">Feeding log tracker</a></li>
                      <li><a href="/blog/newborn-medical-terms-report-readings" className="text-blue-600 underline hover:text-blue-800">Medical terms guide</a></li>
                      <li><a href="/tools/baby-milestone-tracker" className="text-blue-600 underline hover:text-blue-800">Milestone tracker</a></li>
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