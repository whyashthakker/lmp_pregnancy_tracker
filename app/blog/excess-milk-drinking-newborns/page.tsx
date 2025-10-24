import { Metadata } from 'next'
import { Baby, Droplets, Scale, AlertTriangle, Heart, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Excess Milk Drinking in Newborns: Overfeeding Signs, Causes & Solutions | Pregnancy Tracker',
  description: 'Complete guide to newborn overfeeding - recognizing signs of excess milk intake, causes, health implications, and practical solutions for healthy feeding patterns.',
  keywords: 'newborn overfeeding, excess milk drinking baby, baby drinking too much milk, overfeeding signs newborn, infant feeding issues, newborn stomach capacity, baby milk intake, feeding problems newborn, bottle feeding issues',
  openGraph: {
    title: 'Excess Milk Drinking in Newborns: Signs, Causes & Healthy Feeding Solutions',
    description: 'Learn to identify and manage newborn overfeeding. Understand feeding cues, stomach capacity, and healthy feeding patterns for your baby.',
    type: 'article',
  },
}

export default function ExcessMilkDrinkingNewborns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Droplets className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Excess Milk Drinking in Newborns</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding overfeeding signs, causes, and strategies for healthy feeding patterns in newborns
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Baby className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-800">5-20ml</div>
                  <div className="text-blue-600">Day 1 stomach capacity</div>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg text-center">
                  <Scale className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-indigo-800">150ml</div>
                  <div className="text-indigo-600">1-month stomach size</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-800">8-12 Times</div>
                  <div className="text-purple-600">Daily feedings</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Important Note</h3>
                      <p className="text-green-700">
                        While overfeeding is less common in breastfed babies, it can occur with bottle feeding. Understanding your baby&apos;s feeding cues and stomach capacity is key to healthy feeding patterns.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Newborn Stomach Capacity</h2>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Stomach Size by Age</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-300 px-4 py-3 text-left font-semibold">Age</th>
                          <th className="border border-blue-300 px-4 py-3 text-left font-semibold">Stomach Capacity</th>
                          <th className="border border-blue-300 px-4 py-3 text-left font-semibold">Visual Comparison</th>
                          <th className="border border-blue-300 px-4 py-3 text-left font-semibold">Feeding Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-300 px-4 py-3 font-semibold">Day 1</td>
                          <td className="border border-blue-300 px-4 py-3">5-7ml</td>
                          <td className="border border-blue-300 px-4 py-3">Size of a marble</td>
                          <td className="border border-blue-300 px-4 py-3">1-2 teaspoons</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 px-4 py-3 font-semibold">Day 3</td>
                          <td className="border border-blue-300 px-4 py-3">22-30ml</td>
                          <td className="border border-blue-300 px-4 py-3">Size of a large marble</td>
                          <td className="border border-blue-300 px-4 py-3">0.75-1 ounce</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 px-4 py-3 font-semibold">1 Week</td>
                          <td className="border border-blue-300 px-4 py-3">45-60ml</td>
                          <td className="border border-blue-300 px-4 py-3">Size of a ping pong ball</td>
                          <td className="border border-blue-300 px-4 py-3">1.5-2 ounces</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 px-4 py-3 font-semibold">1 Month</td>
                          <td className="border border-blue-300 px-4 py-3">80-150ml</td>
                          <td className="border border-blue-300 px-4 py-3">Size of a large egg</td>
                          <td className="border border-blue-300 px-4 py-3">2.5-5 ounces</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 px-4 py-3 font-semibold">3 Months</td>
                          <td className="border border-blue-300 px-4 py-3">150-200ml</td>
                          <td className="border border-blue-300 px-4 py-3">Size of a large egg</td>
                          <td className="border border-blue-300 px-4 py-3">5-6 ounces</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Signs of Overfeeding</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3">Immediate Signs</h3>
                    <ul className="list-disc list-inside text-red-700 space-y-2">
                      <li><strong>Frequent spitting up:</strong> More than usual after feeds</li>
                      <li><strong>Vomiting:</strong> Forceful expulsion of milk</li>
                      <li><strong>Excessive <a href="/blog/how-to-burp-a-baby" className="text-red-600 underline hover:text-red-800">burping needs</a>:</strong> Gas and discomfort</li>
                      <li><strong>Fussiness after eating:</strong> Crying despite being fed</li>
                      <li><strong>Arching back:</strong> Sign of stomach discomfort</li>
                      <li><strong>Pulling legs to chest:</strong> Abdominal pain</li>
                      <li><strong>Refusing the bottle/breast:</strong> Pushing away when full</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-3">Longer-Term Signs</h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-2">
                      <li><strong>Rapid weight gain:</strong> Above expected growth curves</li>
                      <li><strong>Frequent diaper changes:</strong> More than 8-10 per day</li>
                      <li><strong>Sleep disruption:</strong> Discomfort affecting rest</li>
                      <li><strong>Constipation or loose stools:</strong> Digestive upset</li>
                      <li><strong>Increased gassiness:</strong> Frequent uncomfortable gas</li>
                      <li><strong>Difficulty self-soothing:</strong> Always wanting to eat for comfort</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Causes of Overfeeding</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">Bottle Feeding Issues</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Flow Problems:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Nipple flow too fast</li>
                          <li>Wrong nipple stage for age</li>
                          <li>Gravity feeding (baby lying down)</li>
                          <li>Large bottle holes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Feeding Technique:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Encouraging baby to finish bottle</li>
                          <li>Not recognizing satiety cues</li>
                          <li>Feeding on schedule vs. demand</li>
                          <li>Using feeding for all comfort</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Breastfeeding-Related Overfeeding</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Supply Issues:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Oversupply of milk</li>
                          <li>Fast let-down reflex</li>
                          <li>High lipase milk</li>
                          <li>Frequent nursing for comfort</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Feeding Patterns:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Nursing too frequently</li>
                          <li>Long nursing sessions</li>
                          <li>Not allowing natural breaks</li>
                          <li>Confusion with growth spurts</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-yellow-800 mb-3">Behavioral and Environmental Factors</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li><strong>Comfort feeding:</strong> Using food to soothe all distress</li>
                      <li><strong>Schedule confusion:</strong> Feeding at set times vs. hunger cues</li>
                      <li><strong>Multiple caregivers:</strong> Inconsistent feeding approaches</li>
                      <li><strong>Misreading cues:</strong> Interpreting all <a href="/blog/baby-crying-sound-guidebook" className="text-yellow-600 underline hover:text-yellow-800">crying as hunger</a></li>
                      <li><strong>Growth spurt confusion:</strong> Overcompensating during normal periods</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Healthy Feeding Guidelines</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Recognizing Hunger vs. Satiety Cues</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Hunger Cues:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Rooting and searching motions</li>
                          <li>Sucking on hands or fingers</li>
                          <li>Lip smacking or tongue movements</li>
                          <li>Increased alertness and activity</li>
                          <li>Mild fussiness that escalates</li>
                          <li>Bringing hands to mouth</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Satiety Cues:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Pushing bottle/breast away</li>
                          <li>Turning head away from food</li>
                          <li>Relaxed hands and body</li>
                          <li>Slower sucking or stopping</li>
                          <li>Falling asleep during feeding</li>
                          <li>Content and calm demeanor</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Bottle Feeding Best Practices</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Proper Technique:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Use slow-flow nipples (stage 1)</li>
                          <li>Hold baby upright or semi-upright</li>
                          <li>Allow baby to control feeding pace</li>
                          <li>Take breaks for burping</li>
                          <li>Stop when baby shows satiety signs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Amount Guidelines:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Start with smaller amounts</li>
                          <li>Weight (lbs) x 2.5 = daily ounces</li>
                          <li>Divide by number of feedings</li>
                          <li>Adjust based on baby&apos;s cues</li>
                          <li>Expect variations day to day</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">Paced Bottle Feeding Technique</h3>
                    <ol className="list-decimal list-inside text-purple-700 space-y-2">
                      <li><strong>Position baby upright:</strong> 45-90 degree angle</li>
                      <li><strong>Touch nipple to lips:</strong> Let baby open mouth wide</li>
                      <li><strong>Insert nipple horizontally:</strong> Don&apos;t push deeply</li>
                      <li><strong>Hold bottle horizontally:</strong> Gravity doesn&apos;t force flow</li>
                      <li><strong>Watch for swallowing:</strong> Allow baby to set pace</li>
                      <li><strong>Take breaks:</strong> Remove bottle periodically</li>
                      <li><strong>Switch sides:</strong> Mimic breastfeeding experience</li>
                      <li><strong>Stop when satisfied:</strong> Don&apos;t force finishing</li>
                    </ol>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Solutions for Overfeeding</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">Immediate Adjustments</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Feeding Changes:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Reduce bottle amounts by 0.5-1 oz</li>
                          <li>Use slower-flow nipples</li>
                          <li>Increase feeding frequency</li>
                          <li>Implement paced feeding</li>
                          <li>Respect satiety cues</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Comfort Alternatives:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Pacifier for non-nutritive sucking</li>
                          <li><a href="/blog/types-of-swaddling-styles" className="text-orange-500 underline hover:text-orange-700">Swaddling for comfort</a></li>
                          <li>Gentle rocking or movement</li>
                          <li>Skin-to-skin contact</li>
                          <li>White noise or soft music</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-indigo-800 mb-3">Managing Oversupply (Breastfeeding)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">Supply Management:</h4>
                        <ul className="list-disc list-inside text-indigo-600 space-y-1">
                          <li>Block feeding (one breast per session)</li>
                          <li>Express small amount before feeding</li>
                          <li>Laid-back breastfeeding position</li>
                          <li>Avoid unnecessary pumping</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">Feeding Technique:</h4>
                        <ul className="list-disc list-inside text-indigo-600 space-y-1">
                          <li>Let baby control flow with positioning</li>
                          <li>Take breaks during feeding</li>
                          <li>Burp more frequently</li>
                          <li>Watch for satiety signals</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-pink-800 mb-3">Long-Term Strategies</h3>
                    <ul className="list-disc list-inside text-pink-700 space-y-2">
                      <li><strong>Learn your baby&apos;s unique cues:</strong> Each baby communicates differently</li>
                      <li><strong>Keep a feeding log:</strong> Track amounts, timing, and baby&apos;s responses</li>
                      <li><strong>Educate all caregivers:</strong> Ensure consistent approach</li>
                      <li><strong>Focus on responsive feeding:</strong> Follow baby&apos;s lead, not the clock</li>
                      <li><strong>Monitor weight gain:</strong> Ensure appropriate growth without excess</li>
                      <li><strong>Consult healthcare provider:</strong> Regular check-ins and guidance</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Health Implications of Overfeeding</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-yellow-800 mb-3">Short-Term Effects</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li><strong>Digestive discomfort:</strong> Gas, bloating, cramping</li>
                      <li><strong>Frequent spit-up:</strong> Stomach overflow</li>
                      <li><strong>Sleep disruption:</strong> Discomfort affecting rest</li>
                      <li><strong>Fussiness:</strong> General discomfort and <a href="/blog/baby-crying-sound-guidebook" className="text-yellow-600 underline hover:text-yellow-800">increased crying</a></li>
                      <li><strong>Feeding aversion:</strong> Negative associations with eating</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-red-800 mb-3">Potential Long-Term Concerns</h3>
                    <ul className="list-disc list-inside text-red-700 space-y-2">
                      <li><strong>Rapid weight gain:</strong> Above normal growth curves</li>
                      <li><strong>Poor self-regulation:</strong> Difficulty recognizing hunger/fullness</li>
                      <li><strong>Feeding difficulties:</strong> Dependence on external feeding cues</li>
                      <li><strong>Digestive issues:</strong> Ongoing stomach problems</li>
                      <li><strong>Sleep pattern disruption:</strong> Long-term sleep difficulties</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Special Situations</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Premature Babies</h3>
                    <ul className="list-disc list-inside text-blue-700 space-y-2">
                      <li><strong>Smaller stomach capacity:</strong> Need even smaller, more frequent feeds</li>
                      <li><strong>Immature digestive system:</strong> More prone to overfeeding symptoms</li>
                      <li><strong>Different growth patterns:</strong> Follow adjusted age guidelines</li>
                      <li><strong>Medical monitoring:</strong> NICU or pediatrician guidance essential</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Growth Spurts</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Normal Increases:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Around 2-3 weeks old</li>
                          <li>6 weeks old</li>
                          <li>3 months old</li>
                          <li>6 months old</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Management:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Follow baby&apos;s increased cues</li>
                          <li>Temporary increased feeding</li>
                          <li>Usually lasts 2-3 days</li>
                          <li>Return to normal patterns after</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">Multiple Caregivers</h3>
                    <ul className="list-disc list-inside text-purple-700 space-y-2">
                      <li><strong>Consistent training:</strong> Educate all caregivers on feeding cues</li>
                      <li><strong>Written guidelines:</strong> Clear feeding amounts and schedules</li>
                      <li><strong>Communication log:</strong> Track feeding times and amounts</li>
                      <li><strong>Regular check-ins:</strong> Ensure everyone follows same approach</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">When to Consult Your Pediatrician</h3>
                      <ul className="list-disc list-inside text-red-700 space-y-1">
                        <li>Frequent forceful vomiting (projectile vomiting)</li>
                        <li>Poor weight gain despite apparent overfeeding</li>
                        <li>Signs of dehydration from excessive spitting up</li>
                        <li>Baby seems constantly uncomfortable after feeds</li>
                        <li>Rapid weight gain well above growth curve</li>
                        <li>Feeding refusal or aversion developing</li>
                        <li>Persistent digestive issues beyond normal adjustment</li>
                        <li>Concerns about baby&apos;s growth patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Building Healthy Feeding Relationships</h2>

                <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-indigo-800 mb-3">Long-Term Goals</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">For Baby:</h4>
                      <ul className="list-disc list-inside text-indigo-600 space-y-1">
                        <li>Self-regulation of intake</li>
                        <li>Positive feeding associations</li>
                        <li>Healthy growth patterns</li>
                        <li>Good digestive health</li>
                        <li>Strong feeding skills</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">For Parents:</h4>
                      <ul className="list-disc list-inside text-indigo-600 space-y-1">
                        <li>Confidence in reading cues</li>
                        <li>Stress-free feeding times</li>
                        <li>Understanding of baby&apos;s needs</li>
                        <li>Flexible, responsive approach</li>
                        <li>Trust in baby&apos;s instincts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-teal-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-teal-700 space-y-1">
                      <li><a href="/blog/how-to-burp-a-baby" className="text-teal-600 underline hover:text-teal-800">Proper burping techniques</a></li>
                      <li><a href="/blog/baby-crying-sound-guidebook" className="text-teal-600 underline hover:text-teal-800">Understanding baby&apos;s communication</a></li>
                      <li><a href="/blog/newborn-hiccups-guide" className="text-teal-600 underline hover:text-teal-800">Managing feeding-related hiccups</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-teal-700 space-y-1">
                      <li><a href="/blog/types-of-swaddling-styles" className="text-teal-600 underline hover:text-teal-800">Comfort techniques for babies</a></li>
                      <li><a href="/blog/newborn-growth-charts-head-height" className="text-teal-600 underline hover:text-teal-800">Tracking healthy growth</a></li>
                      <li><a href="/blog/ideal-newborn-temperature-guide" className="text-teal-600 underline hover:text-teal-800">Overall newborn health monitoring</a></li>
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