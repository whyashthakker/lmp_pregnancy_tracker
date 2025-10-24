import { Metadata } from 'next'
import { Heart, Droplets, Shield, AlertTriangle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Loose Stool After Delivery: Postpartum Bowel Changes, Causes & Recovery Tips | Pregnancy Tracker',
  description: 'Complete guide to loose stools after childbirth - causes, duration, management tips, and when to seek help. Normal postpartum digestive changes explained.',
  keywords: 'loose stool after delivery, postpartum bowel movements, diarrhea after childbirth, postpartum digestive issues, bowel changes after birth, postpartum recovery, loose stools breastfeeding, digestive health postpartum',
  openGraph: {
    title: 'Loose Stool After Delivery: Understanding Postpartum Digestive Changes',
    description: 'Learn about normal bowel changes after delivery, causes of loose stools, and effective management strategies for postpartum digestive health.',
    type: 'article',
  },
}

export default function LooseStoolAfterDelivery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Droplets className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Loose Stool After Delivery</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding postpartum bowel changes, causes, and effective management strategies for digestive recovery
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-green-800">1-6 Weeks</div>
                  <div className="text-green-600">Typical duration</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-800">Very Common</div>
                  <div className="text-blue-600">60% of new mothers</div>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg text-center">
                  <Shield className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-teal-800">Usually Normal</div>
                  <div className="text-teal-600">Part of recovery</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">Reassuring Fact</h3>
                      <p className="text-blue-700">
                        Loose stools after delivery are extremely common and affect up to 60% of new mothers. This is usually a normal part of postpartum recovery and typically resolves within a few weeks.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Do Loose Stools Occur After Delivery?</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Hormonal Changes</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">During Pregnancy:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>High progesterone levels slow digestion</li>
                          <li>Constipation is common</li>
                          <li>Digestive system works more slowly</li>
                          <li>Intestinal muscles are relaxed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">After Delivery:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Sudden drop in progesterone</li>
                          <li>Digestive system &quot;rebounds&quot;</li>
                          <li>Increased intestinal motility</li>
                          <li>Temporary digestive instability</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Physical Factors</h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-2">
                      <li><strong>Abdominal muscle changes:</strong> Weakened core affects bowel support</li>
                      <li><strong>Pelvic floor recovery:</strong> Muscles need time to regain normal function</li>
                      <li><strong>Surgical effects:</strong> C-section can temporarily affect digestion</li>
                      <li><strong>Medication side effects:</strong> Antibiotics, pain medications, stool softeners</li>
                      <li><strong>Dehydration:</strong> From blood loss, breastfeeding, or inadequate fluid intake</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Breastfeeding-Related Causes</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Hormonal Effects:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Oxytocin stimulates intestinal contractions</li>
                          <li>Prolactin affects digestive hormones</li>
                          <li>Increased fluid needs</li>
                          <li>Metabolic changes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Dietary Changes:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Increased fluid intake</li>
                          <li>Dietary modifications for milk production</li>
                          <li>Different eating patterns</li>
                          <li>Nutritional supplements</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">Stress and Lifestyle Factors</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li><strong>Sleep deprivation:</strong> Affects digestive function and stress hormones</li>
                      <li><strong>Emotional stress:</strong> Adjusting to motherhood can impact gut health</li>
                      <li><strong>Irregular eating:</strong> Inconsistent meal timing affects digestion</li>
                      <li><strong>Limited mobility:</strong> Reduced activity can affect bowel function</li>
                      <li><strong>Anxiety:</strong> Can accelerate gut motility</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Normal vs Concerning Symptoms</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-3">Normal Postpartum Loose Stools ✓</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-2">
                      <li><strong>Timing:</strong> Starts within days of delivery</li>
                      <li><strong>Duration:</strong> 1-6 weeks typically</li>
                      <li><strong>Frequency:</strong> 3-5 loose stools per day</li>
                      <li><strong>Appearance:</strong> Soft, loose, but formed</li>
                      <li><strong>Associated symptoms:</strong> Mild cramping only</li>
                      <li><strong>General health:</strong> Otherwise feeling well</li>
                      <li><strong>Gradual improvement:</strong> Gets better over time</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3">Warning Signs ⚠️</h3>
                    <ul className="list-disc list-inside text-red-700 space-y-2">
                      <li><strong>Severe diarrhea:</strong> &gt;6 watery stools daily</li>
                      <li><strong>Blood or mucus:</strong> In stool</li>
                      <li><strong>Fever:</strong> &gt;100.4°F (38°C)</li>
                      <li><strong>Severe cramps:</strong> Intense abdominal pain</li>
                      <li><strong>Dehydration signs:</strong> Dizziness, dry mouth, dark urine</li>
                      <li><strong>Persistent symptoms:</strong> No improvement after 2 weeks</li>
                      <li><strong>Other symptoms:</strong> Nausea, vomiting, weakness</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Management and Recovery Strategies</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Hydration and Electrolyte Balance</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Fluid Intake:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>8-10 glasses of water daily</li>
                          <li>Extra 2-3 glasses if breastfeeding</li>
                          <li>Clear broths and soups</li>
                          <li>Herbal teas (ginger, chamomile)</li>
                          <li>Coconut water for electrolytes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Avoid:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Excessive caffeine</li>
                          <li>Alcohol</li>
                          <li>Sugary drinks</li>
                          <li>Very cold beverages</li>
                          <li>Artificial sweeteners</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">Dietary Modifications</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Helpful Foods:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>BRAT diet: Bananas, Rice, Applesauce, Toast</li>
                          <li>Plain yogurt with probiotics</li>
                          <li>Oatmeal and other soluble fiber</li>
                          <li>Cooked vegetables (carrots, squash)</li>
                          <li>Lean proteins (chicken, fish)</li>
                          <li>Ginger for nausea relief</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Foods to Limit:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>High-fat or greasy foods</li>
                          <li>Spicy foods</li>
                          <li>Raw fruits and vegetables</li>
                          <li>Dairy products (if lactose sensitive)</li>
                          <li>Caffeine and alcohol</li>
                          <li>Artificial sweeteners</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Probiotics and Gut Health</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Natural Sources:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Plain yogurt with live cultures</li>
                          <li>Kefir (if tolerated)</li>
                          <li>Fermented foods (sauerkraut, kimchi)</li>
                          <li>Kombucha (low sugar varieties)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Supplements:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Lactobacillus acidophilus</li>
                          <li>Bifidobacterium species</li>
                          <li>Multi-strain probiotics</li>
                          <li>Consult healthcare provider first</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">Lifestyle Adjustments</h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-2">
                      <li><strong>Rest when possible:</strong> Sleep helps regulate digestive hormones</li>
                      <li><strong>Gentle movement:</strong> Short walks can aid digestion</li>
                      <li><strong>Stress management:</strong> Relaxation techniques, deep breathing</li>
                      <li><strong>Regular meal times:</strong> Even if portions are small</li>
                      <li><strong>Gradual activity increase:</strong> As approved by healthcare provider</li>
                      <li><strong>Support system:</strong> Accept help with household tasks</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Special Considerations</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-pink-800 mb-3">Breastfeeding Mothers</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-2">Additional Considerations:</h4>
                        <ul className="list-disc list-inside text-pink-600 space-y-1">
                          <li>Higher fluid needs</li>
                          <li>Oxytocin effects on digestion</li>
                          <li>Maternal diet affects baby</li>
                          <li>Medication restrictions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-2">Safe Approaches:</h4>
                        <ul className="list-disc list-inside text-pink-600 space-y-1">
                          <li>Focus on nutrition and hydration</li>
                          <li>Avoid restrictive diets</li>
                          <li>Consult before taking medications</li>
                          <li>Monitor baby for any changes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-yellow-800 mb-3">C-Section Recovery</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li><strong>Anesthesia effects:</strong> Can slow digestive recovery</li>
                      <li><strong>Pain medications:</strong> May contribute to loose stools</li>
                      <li><strong>Antibiotics:</strong> Can disrupt gut flora</li>
                      <li><strong>Limited mobility:</strong> Affects normal digestive function</li>
                      <li><strong>Gradual improvement:</strong> May take longer than vaginal delivery</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-indigo-800 mb-3">Formula Feeding Mothers</h3>
                    <ul className="list-disc list-inside text-indigo-700 space-y-2">
                      <li><strong>Different hormonal pattern:</strong> Less oxytocin stimulation</li>
                      <li><strong>More medication options:</strong> If treatment needed</li>
                      <li><strong>Faster hormone stabilization:</strong> May resolve sooner</li>
                      <li><strong>Regular eating schedule:</strong> Easier to maintain</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Timeline of Recovery</h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Time Period</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What to Expect</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Management Focus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Days 1-3 postpartum</td>
                        <td className="border border-gray-300 px-4 py-3">Initial bowel movement may be delayed, then loose stools begin</td>
                        <td className="border border-gray-300 px-4 py-3">Hydration, gentle foods, rest</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Week 1</td>
                        <td className="border border-gray-300 px-4 py-3">Most frequent loose stools, adjusting to hormonal changes</td>
                        <td className="border border-gray-300 px-4 py-3">BRAT diet, probiotics, electrolyte balance</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Weeks 2-3</td>
                        <td className="border border-gray-300 px-4 py-3">Gradual improvement, less frequent episodes</td>
                        <td className="border border-gray-300 px-4 py-3">Expand diet gradually, continue hydration</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Weeks 4-6</td>
                        <td className="border border-gray-300 px-4 py-3">Return to normal or near-normal bowel patterns</td>
                        <td className="border border-gray-300 px-4 py-3">Resume normal diet, maintain healthy habits</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">6+ weeks</td>
                        <td className="border border-gray-300 px-4 py-3">Should be resolved; if not, medical evaluation needed</td>
                        <td className="border border-gray-300 px-4 py-3">Follow-up with healthcare provider</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">When to Seek Immediate Medical Attention</h3>
                      <ul className="list-disc list-inside text-red-700 space-y-1">
                        <li>Severe dehydration: dizziness, dry mouth, little/no urine</li>
                        <li>Fever over 100.4°F (38°C)</li>
                        <li>Blood in stools or black, tarry stools</li>
                        <li>Severe abdominal cramping or pain</li>
                        <li>Signs of infection: chills, body aches</li>
                        <li>More than 6 watery stools per day</li>
                        <li>Unable to keep fluids down due to nausea/vomiting</li>
                        <li>Symptoms worsen instead of gradually improving</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Prevention and Long-Term Digestive Health</h2>

                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Building Healthy Habits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">During Recovery:</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        <li>Maintain consistent meal timing</li>
                        <li>Stay well-hydrated</li>
                        <li>Include probiotic foods</li>
                        <li>Manage stress levels</li>
                        <li>Get adequate rest</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Long-Term:</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        <li>Balanced, varied diet</li>
                        <li>Regular physical activity</li>
                        <li>Stress management techniques</li>
                        <li>Adequate fiber intake</li>
                        <li>Listen to your body&apos;s signals</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Connection to Other Postpartum Changes</h2>

                <div className="bg-purple-50 p-6 rounded-lg mb-8">
                  <p className="text-purple-700 mb-4">
                    Loose stools are often part of a broader pattern of postpartum digestive adjustments. Understanding these connections can help you manage your overall recovery better.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Related Changes:</h4>
                      <ul className="list-disc list-inside text-purple-600 space-y-1">
                        <li>Changes in appetite and eating patterns</li>
                        <li>Digestive sensitivity to certain foods</li>
                        <li>Altered sense of thirst and hydration needs</li>
                        <li>Connection between stress and digestive symptoms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Recovery Timeline:</h4>
                      <ul className="list-disc list-inside text-purple-600 space-y-1">
                        <li>Usually resolves with other <a href="/blog/40-days-postpartum-confinement" className="text-purple-500 underline hover:text-purple-700">early postpartum changes</a></li>
                        <li>May improve with better sleep patterns</li>
                        <li>Often coincides with hormonal stabilization</li>
                        <li>Can improve with stress reduction</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li><a href="/blog/40-days-postpartum-confinement" className="text-blue-600 underline hover:text-blue-800">Understanding postpartum recovery periods</a></li>
                      <li><a href="/blog/postpartum-massage-after-cesarean" className="text-blue-600 underline hover:text-blue-800">C-section recovery and massage</a></li>
                      <li><a href="/blog/baby-travel-after-delivery" className="text-blue-600 underline hover:text-blue-800">Travel considerations during recovery</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li><a href="/blog/how-to-burp-a-baby" className="text-blue-600 underline hover:text-blue-800">Baby care basics</a></li>
                      <li><a href="/blog/baby-crying-sound-guidebook" className="text-blue-600 underline hover:text-blue-800">Understanding baby&apos;s needs</a></li>
                      <li><a href="/blog/newborn-hiccups-guide" className="text-blue-600 underline hover:text-blue-800">Other common newborn concerns</a></li>
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