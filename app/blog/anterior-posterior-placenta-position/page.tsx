import { Metadata } from 'next'
import { Heart, Baby, AlertTriangle, Activity, Target, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anterior vs Posterior Placenta: Position, Effects & What It Means for Pregnancy | Pregnancy Tracker',
  description: 'Complete guide to anterior and posterior placenta positions - what they mean, how they affect pregnancy, delivery implications, and when to be concerned.',
  keywords: 'anterior placenta, posterior placenta, placenta position, placental location, pregnancy complications, fetal movement, placenta previa, placental abruption, pregnancy ultrasound, delivery effects',
  openGraph: {
    title: 'Anterior vs Posterior Placenta: Understanding Placental Position in Pregnancy',
    description: 'Learn about anterior and posterior placenta positions, their effects on pregnancy, fetal movement, and delivery outcomes.',
    type: 'article',
  },
}

export default function AnteriorPosteriorPlacentaPosition() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Heart className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Anterior vs Posterior Placenta Position</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding placental positioning, its effects on pregnancy, and implications for delivery
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <Target className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-pink-800">50-60%</div>
                  <div className="text-pink-600">Posterior placement</div>
                </div>
                <div className="bg-rose-50 p-6 rounded-lg text-center">
                  <Activity className="h-8 w-8 text-rose-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-rose-800">40-50%</div>
                  <div className="text-rose-600">Anterior placement</div>
                </div>
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <Shield className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-red-800">Both Normal</div>
                  <div className="text-red-600">Safe positions</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                  <div className="flex items-start">
                    <Baby className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">What Is Placental Position?</h3>
                      <p className="text-blue-700">
                        Placental position refers to where the placenta attaches to the uterine wall. The two main positions are anterior (front) and posterior (back), both of which are completely normal and safe for pregnancy.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Placenta Anatomy</h2>

                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-green-800 mb-4">What the Placenta Does</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">Primary Functions:</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-2">
                        <li><strong>Nutrient transfer:</strong> Delivers oxygen and nutrients to baby</li>
                        <li><strong>Waste removal:</strong> Filters out carbon dioxide and waste</li>
                        <li><strong>Hormone production:</strong> Produces pregnancy hormones</li>
                        <li><strong>Immune protection:</strong> Provides antibodies to baby</li>
                        <li><strong>Barrier function:</strong> Protects baby from harmful substances</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">Development Timeline:</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-2">
                        <li><strong>Week 1-2:</strong> Implantation begins</li>
                        <li><strong>Week 3-4:</strong> Basic placental structure forms</li>
                        <li><strong>Week 12:</strong> Fully functional</li>
                        <li><strong>Week 18-20:</strong> Position clearly visible on ultrasound</li>
                        <li><strong>Throughout pregnancy:</strong> Continues growing with baby</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Anterior Placenta Position</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Definition and Location</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">What It Means:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Placenta attaches to front wall of uterus</li>
                          <li>Between baby and mother&apos;s abdomen</li>
                          <li>Acts as a &quot;cushion&quot; layer</li>
                          <li>Occurs in 40-50% of pregnancies</li>
                          <li>Completely normal positioning</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">How It&apos;s Detected:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Routine ultrasound examination</li>
                          <li>Usually identified by 18-20 weeks</li>
                          <li>May be noted earlier in some cases</li>
                          <li>Position can be confirmed throughout pregnancy</li>
                          <li>No special testing required</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Effects on Pregnancy Experience</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Fetal Movement:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>May feel movements later (20-24 weeks)</li>
                          <li>Movements might feel muffled initially</li>
                          <li>Kicks may be less intense to mother</li>
                          <li>Still should feel regular movement patterns</li>
                          <li>Normal movement counts still apply</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Ultrasound Imaging:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>May require deeper ultrasound probe pressure</li>
                          <li>Some images might be slightly less clear</li>
                          <li>3D/4D imaging may be affected</li>
                          <li>All necessary measurements still obtainable</li>
                          <li>Does not affect medical care quality</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Delivery Considerations</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-2">
                      <li><strong>Labor progression:</strong> Usually no effect on labor timing or length</li>
                      <li><strong>Delivery method:</strong> Can deliver vaginally or by cesarean as needed</li>
                      <li><strong>Monitoring:</strong> Standard fetal monitoring works normally</li>
                      <li><strong>Complications:</strong> No increased risk of delivery complications</li>
                      <li><strong>Recovery:</strong> Normal postpartum recovery expected</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Posterior Placenta Position</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-rose-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-rose-800 mb-4">Definition and Location</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-rose-700 mb-2">What It Means:</h4>
                        <ul className="list-disc list-inside text-rose-600 space-y-1">
                          <li>Placenta attaches to back wall of uterus</li>
                          <li>Behind baby, toward mother&apos;s spine</li>
                          <li>Less &quot;cushioning&quot; between baby and front</li>
                          <li>Occurs in 50-60% of pregnancies</li>
                          <li>Also completely normal positioning</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-rose-700 mb-2">How It&apos;s Detected:</h4>
                        <ul className="list-disc list-inside text-rose-600 space-y-1">
                          <li>Routine ultrasound examination</li>
                          <li>Usually clear by 18-20 weeks</li>
                          <li>May be evident earlier</li>
                          <li>Position remains stable throughout pregnancy</li>
                          <li>Standard prenatal care protocol</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Effects on Pregnancy Experience</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Fetal Movement:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Usually feel movements earlier (16-20 weeks)</li>
                          <li>Movements often feel stronger and clearer</li>
                          <li>Kicks may be more noticeable to mother</li>
                          <li>Partner may feel movements sooner</li>
                          <li>Visible belly movements more apparent</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Ultrasound Imaging:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Usually clearer images of baby&apos;s face</li>
                          <li>Better 3D/4D ultrasound results</li>
                          <li>Easier to see baby&apos;s features</li>
                          <li>Less placental interference with imaging</li>
                          <li>Measurements often easier to obtain</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">Delivery Considerations</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li><strong>Labor progression:</strong> May experience back labor more commonly</li>
                      <li><strong>Pain patterns:</strong> Contractions might be felt more in the back</li>
                      <li><strong>Positioning:</strong> Certain labor positions may be more comfortable</li>
                      <li><strong>Monitoring:</strong> Standard monitoring protocols apply</li>
                      <li><strong>Delivery outcomes:</strong> No difference in safety or success rates</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Comparison: Anterior vs Posterior</h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Aspect</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Anterior Placenta</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Posterior Placenta</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Location</td>
                        <td className="border border-gray-300 px-4 py-3">Front wall of uterus</td>
                        <td className="border border-gray-300 px-4 py-3">Back wall of uterus</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Frequency</td>
                        <td className="border border-gray-300 px-4 py-3">40-50% of pregnancies</td>
                        <td className="border border-gray-300 px-4 py-3">50-60% of pregnancies</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">First movements felt</td>
                        <td className="border border-gray-300 px-4 py-3">20-24 weeks (may be later)</td>
                        <td className="border border-gray-300 px-4 py-3">16-20 weeks (often earlier)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Movement intensity</td>
                        <td className="border border-gray-300 px-4 py-3">May feel muffled initially</td>
                        <td className="border border-gray-300 px-4 py-3">Often feel stronger</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Ultrasound quality</td>
                        <td className="border border-gray-300 px-4 py-3">May need deeper pressure</td>
                        <td className="border border-gray-300 px-4 py-3">Usually clearer images</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Labor experience</td>
                        <td className="border border-gray-300 px-4 py-3">Standard labor patterns</td>
                        <td className="border border-gray-300 px-4 py-3">May experience back labor</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Safety</td>
                        <td className="border border-gray-300 px-4 py-3">Completely safe</td>
                        <td className="border border-gray-300 px-4 py-3">Completely safe</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Delivery method</td>
                        <td className="border border-gray-300 px-4 py-3">All options available</td>
                        <td className="border border-gray-300 px-4 py-3">All options available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Other Placental Positions</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-indigo-800 mb-4">Lateral (Side) Placenta</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">Characteristics:</h4>
                        <ul className="list-disc list-inside text-indigo-600 space-y-1">
                          <li>Attaches to left or right side of uterus</li>
                          <li>Less common than anterior/posterior</li>
                          <li>Usually combines with front or back placement</li>
                          <li>Also normal and safe</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">Effects:</h4>
                        <ul className="list-disc list-inside text-indigo-600 space-y-1">
                          <li>Movement patterns may vary by side</li>
                          <li>Asymmetrical belly shape possible</li>
                          <li>No impact on pregnancy safety</li>
                          <li>Standard care protocols apply</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-cyan-800 mb-4">Fundal Placenta</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-cyan-700 mb-2">Characteristics:</h4>
                        <ul className="list-disc list-inside text-cyan-600 space-y-1">
                          <li>Attaches to top of uterus (fundus)</li>
                          <li>Often combined with anterior/posterior</li>
                          <li>Good position for placental function</li>
                          <li>No special concerns</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-700 mb-2">Advantages:</h4>
                        <ul className="list-disc list-inside text-cyan-600 space-y-1">
                          <li>Away from cervix (lower complication risk)</li>
                          <li>Good blood supply area</li>
                          <li>Optimal for placental growth</li>
                          <li>Excellent pregnancy outcomes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">When Position Matters: Concerning Conditions</h2>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Placenta Previa</h3>
                      <p className="text-red-700 mb-3">
                        This is when the placenta covers part or all of the cervix, which IS a concern regardless of anterior/posterior position.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Types:</h4>
                          <ul className="list-disc list-inside text-red-600 space-y-1">
                            <li>Complete previa (covers entire cervix)</li>
                            <li>Partial previa (covers part of cervix)</li>
                            <li>Marginal previa (edge touches cervix)</li>
                            <li>Low-lying placenta (close to cervix)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Management:</h4>
                          <ul className="list-disc list-inside text-red-600 space-y-1">
                            <li>Regular monitoring with ultrasound</li>
                            <li>Pelvic rest may be recommended</li>
                            <li>Cesarean delivery often required</li>
                            <li>May resolve as uterus grows</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">Placental Abruption</h3>
                      <p className="text-orange-700 mb-3">
                        This is when the placenta separates from the uterine wall before delivery, which can occur with any placental position.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-orange-700 mb-2">Warning Signs:</h4>
                          <ul className="list-disc list-inside text-orange-600 space-y-1">
                            <li>Sudden, severe abdominal pain</li>
                            <li>Vaginal bleeding</li>
                            <li>Uterine tenderness</li>
                            <li>Decreased fetal movement</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 mb-2">Risk Factors:</h4>
                          <ul className="list-disc list-inside text-orange-600 space-y-1">
                            <li>High blood pressure</li>
                            <li>Previous abruption</li>
                            <li>Trauma to abdomen</li>
                            <li>Smoking or drug use</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Managing Your Pregnancy by Position</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">For Anterior Placenta</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Movement Monitoring:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Don&apos;t worry if movements feel later</li>
                          <li>Quality matters more than intensity</li>
                          <li>Use kick counting once movements established</li>
                          <li>Report concerning changes to provider</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Tips for Better Connection:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Try different positions to feel movements</li>
                          <li>Use a flashlight on belly for response</li>
                          <li>Drink cold water to stimulate activity</li>
                          <li>Be patient with bonding process</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">For Posterior Placenta</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Labor Preparation:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Learn about back labor management</li>
                          <li>Practice positioning for relief</li>
                          <li>Consider prenatal yoga or massage</li>
                          <li>Discuss pain management options</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Movement Awareness:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Enjoy earlier movement sensations</li>
                          <li>Monitor patterns for any changes</li>
                          <li>Strong movements are normal</li>
                          <li>Share the experience with partner</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Can placental position change during pregnancy?</h3>
                    <p className="text-gray-700">Usually no. Once established by 18-20 weeks, the placental position typically remains stable. However, as the uterus grows, the relative position might appear to shift slightly on ultrasound.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Does placental position affect my chances of having a cesarean section?</h3>
                    <p className="text-gray-700">Anterior and posterior placental positions do not increase cesarean risk. However, placenta previa (covering the cervix) would require a cesarean regardless of whether it&apos;s anterior or posterior.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Will my baby be smaller with an anterior placenta?</h3>
                    <p className="text-gray-700">No, placental position (anterior vs posterior) does not affect baby&apos;s growth or size. The placenta functions equally well in both positions for nutrient and oxygen delivery.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Should I be concerned about placental position?</h3>
                    <p className="text-gray-700">Both anterior and posterior positions are completely normal. The main concerns are conditions like placenta previa or abruption, which can occur regardless of position and will be monitored by your healthcare provider.</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li><a href="/blog/pregnancy-symptoms-week-by-week" className="text-green-600 underline hover:text-green-800">Weekly pregnancy symptoms</a></li>
                      <li><a href="/blog/fetal-heartbeat-development" className="text-green-600 underline hover:text-green-800">Fetal development milestones</a></li>
                      <li><a href="/blog/pregnancy-medical-checkups" className="text-green-600 underline hover:text-green-800">Prenatal care schedule</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li><a href="/blog/stages-of-pre-labor" className="text-green-600 underline hover:text-green-800">Understanding labor stages</a></li>
                      <li><a href="/blog/pregnancy-warning-signs" className="text-green-600 underline hover:text-green-800">When to call your doctor</a></li>
                      <li><a href="/blog/third-trimester-symptoms" className="text-green-600 underline hover:text-green-800">Third trimester changes</a></li>
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