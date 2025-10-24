import { Metadata } from 'next'
import { Baby, Heart, CheckCircle, AlertTriangle, Clock, Target, RefreshCw, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Newborn Hiccups: Causes, Treatment & When to Worry | EGSpect',
  description: 'Complete guide to baby hiccups including causes, safe treatment methods, prevention tips, and when hiccups in newborns require medical attention.',
  keywords: 'newborn hiccups, baby hiccups causes, infant hiccups treatment, how to stop baby hiccups, newborn hiccups normal, baby digestive issues',
}

export default function NewbornHiccupsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Baby className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Newborn Hiccups: Complete Guide
              </h1>
            </div>
            <p className="text-blue-100 text-lg">
              Understanding, treating, and preventing hiccups in your newborn baby
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-blue-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Very Normal</div>
              <div className="text-sm text-gray-600">Common in newborns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">5-25 min</div>
              <div className="text-sm text-gray-600">Typical duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Don&apos;t worry</div>
              <div className="text-sm text-gray-600">Usually harmless</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Stop naturally</div>
              <div className="text-sm text-gray-600">Resolve on their own</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* What Are Hiccups */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding Newborn Hiccups</h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Hiccups are involuntary contractions of the diaphragm muscle that separates the chest 
                  from the abdomen. In newborns, hiccups are extremely common and usually completely normal. 
                  They often start even before birth - many mothers feel rhythmic movements that are 
                  actually their baby hiccupping in the womb.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Normal Process</h3>
                    <p className="text-blue-700 text-sm">Diaphragm muscle spasms causing quick intake of breath</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Very Common</h3>
                    <p className="text-green-700 text-sm">Most newborns experience hiccups daily</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Usually Harmless</h3>
                    <p className="text-purple-700 text-sm">Rarely indicate underlying problems</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Causes of Newborn Hiccups */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common Causes of Baby Hiccups</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Feeding-Related Causes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">During or After Feeding:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Swallowing air while feeding</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Eating too quickly or overeating</a></li>
                        <li>• <a href="/blog/formula-vs-breastfeeding-guide" className="text-blue-600 hover:underline">Formula or breast milk temperature changes</a></li>
                        <li>• Stomach distension from full feeding</li>
                        <li>• Irregular feeding rhythm</li>
                        <li>• Bottle feeding with wrong nipple size</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Digestive Factors:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Immature digestive system</li>
                        <li>• Gastroesophageal reflux</li>
                        <li>• Air bubbles in stomach</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Normal digestive processes</a></li>
                        <li>• Changes in stomach pH</li>
                        <li>• Developing gut bacteria</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Environmental and Physical Causes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Temperature Changes:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Sudden temperature drops</a></li>
                        <li>• Cold air exposure during diaper changes</li>
                        <li>• Moving from warm to cool environments</li>
                        <li>• Cold formula or expressed breast milk</li>
                        <li>• Air conditioning or drafts</li>
                        <li>• Clothing changes in cooler rooms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Other Triggers:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Excitement or overstimulation</li>
                        <li>• Crying episodes</li>
                        <li>• Position changes</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-blue-600 hover:underline">Physical activity or movement</a></li>
                        <li>• Stress or anxiety (in baby)</li>
                        <li>• Immature nervous system responses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Developmental Factors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Immature Systems:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Underdeveloped diaphragm control</li>
                        <li>• Immature nervous system</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 hover:underline">Rapid growth and development</a></li>
                        <li>• Learning to coordinate breathing</li>
                        <li>• Developing swallow reflexes</li>
                        <li>• Maturing digestive processes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Age-Related Patterns:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Most frequent in first 6 months</li>
                        <li>• Gradually decrease with age</li>
                        <li>• Normal part of brain development</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-blue-600 hover:underline">Improve as systems mature</a></li>
                        <li>• May increase during growth spurts</li>
                        <li>• Often resolve by 12 months</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Safe Treatment Methods */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Safe Ways to Help Stop Hiccups</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Gentle Methods That Work</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Feeding Adjustments:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Try burping baby thoroughly</a></li>
                        <li>• Offer small amounts of breast milk or formula</li>
                        <li>• Let baby suck on pacifier</li>
                        <li>• Continue normal feeding if baby wants</li>
                        <li>• Ensure milk/formula is at body temperature</li>
                        <li>• Feed in more upright position</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Comfort Measures:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Keep baby warm and comfortable</a></li>
                        <li>• Hold baby upright against your chest</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-blue-600 hover:underline">Gentle back patting or rubbing</a></li>
                        <li>• Slow, rhythmic rocking motion</li>
                        <li>• Calm, quiet environment</li>
                        <li>• Skin-to-skin contact</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Position Changes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Helpful Positions:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Hold baby upright for 15-20 minutes</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Try different burping positions</a></li>
                        <li>• Gentle bouncing while standing</li>
                        <li>• Walking slowly while holding baby</li>
                        <li>• Side-lying position for comfort</li>
                        <li>• Change position every few minutes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">What Usually Doesn&apos;t Work:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Startling or scaring baby</li>
                        <li>• Holding breath (babies can&apos;t control this)</li>
                        <li>• Drinking water upside down</li>
                        <li>• Pulling on tongue</li>
                        <li>• Adult hiccup remedies</li>
                        <li>• Pressure on pressure points</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">The Best Approach: Wait It Out</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Why Patience Works Best:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Hiccups usually stop on their own</li>
                        <li>• Most last only 5-25 minutes</li>
                        <li>• Baby is typically not bothered by them</li>
                        <li>• Intervention can sometimes prolong them</li>
                        <li>• Natural resolution is safest</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Part of normal development</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">During Hiccups:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Continue normal activities</li>
                        <li>• Baby can still feed if hungry</li>
                        <li>• No need to wake sleeping baby</li>
                        <li>• Stay calm and relaxed</li>
                        <li>• Provide comfort if baby seems fussy</li>
                        <li>• Document patterns if frequent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention Strategies */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Preventing Frequent Hiccups</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Feeding Strategies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Feeding Timing:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Feed before baby becomes very hungry</li>
                        <li>• <a href="/blog/formula-vs-breastfeeding-guide" className="text-blue-600 hover:underline">Smaller, more frequent feeds</a></li>
                        <li>• Allow time between feeds</li>
                        <li>• Avoid overfeeding</li>
                        <li>• Feed in calm, quiet environment</li>
                        <li>• Don&apos;t rush feeding sessions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Feeding Technique:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Burp frequently during feeds</a></li>
                        <li>• Keep baby upright during feeding</li>
                        <li>• Ensure proper latch for breastfeeding</li>
                        <li>• Use appropriate nipple size for bottles</li>
                        <li>• Check bottle angle to reduce air intake</li>
                        <li>• Pause if baby is gulping or choking</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Environmental Controls</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Temperature Management:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Maintain consistent room temperature</a></li>
                        <li>• Warm milk/formula to body temperature</li>
                        <li>• Avoid sudden temperature changes</li>
                        <li>• Keep baby covered during diaper changes</li>
                        <li>• Pre-warm changing area</li>
                        <li>• Dress baby appropriately for weather</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Activity Management:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Avoid overstimulation before feeds</li>
                        <li>• Keep post-feeding activities gentle</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-blue-600 hover:underline">Limit vigorous play after eating</a></li>
                        <li>• Maintain calm atmosphere</li>
                        <li>• Avoid bouncing immediately after feeds</li>
                        <li>• Plan quiet time after meals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* When to Be Concerned */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  When Hiccups May Be Concerning
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Contact Your Pediatrician If:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Hiccups last longer than 2-3 hours consistently</li>
                        <li>• Baby seems distressed or in pain during hiccups</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Hiccups interfere with feeding</a></li>
                        <li>• Baby vomits frequently with hiccups</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 hover:underline">Poor weight gain</a> combined with frequent hiccups</li>
                        <li>• Breathing difficulties during hiccups</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Seek Immediate Care If:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Hiccups are accompanied by <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">fever</a></li>
                        <li>• Baby has difficulty breathing</li>
                        <li>• Excessive crying that won&apos;t stop</li>
                        <li>• Signs of choking or gasping</li>
                        <li>• Baby becomes lethargic or unresponsive</li>
                        <li>• Any other concerning symptoms</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Remember:</strong> Most newborn hiccups are completely normal and harmless. 
                      They are rarely a sign of any medical problem. <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Trust your instincts</a> - 
                      if you&apos;re worried about your baby&apos;s hiccups, it&apos;s always okay to consult your pediatrician.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Age-Related Changes */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">How Hiccups Change with Age</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-4">0-3 Months</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Most frequent period</strong></li>
                      <li>• Can occur multiple times daily</li>
                      <li>• Often after every feeding</li>
                      <li>• <a href="/blog/formula-vs-breastfeeding-guide" className="text-blue-600 hover:underline">Related to feeding patterns</a></li>
                      <li>• Usually last 5-25 minutes</li>
                      <li>• Baby typically unbothered</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-4">3-6 Months</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Gradually decreasing</strong></li>
                      <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 hover:underline">Improved digestive maturity</a></li>
                      <li>• Less frequent after feeds</li>
                      <li>• Shorter duration episodes</li>
                      <li>• Better feeding coordination</li>
                      <li>• May still occur with overeating</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-4">6+ Months</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Much less common</strong></li>
                      <li>• Mature nervous system</li>
                      <li>• Better diaphragm control</li>
                      <li>• Introduction of solid foods</li>
                      <li>• <a href="/blog/baby-massage-after-delivery" className="text-blue-600 hover:underline">More developed motor skills</a></li>
                      <li>• Occasional episodes normal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Myths vs Facts */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common Myths About Baby Hiccups</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4">MYTH vs FACT</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">❌ MYTH:</h4>
                        <p className="text-red-600 text-sm">Hiccups mean baby is cold</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">✅ FACT:</h4>
                        <p className="text-green-600 text-sm">Hiccups have many causes; <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">temperature is just one possibility</a></p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">❌ MYTH:</h4>
                        <p className="text-red-600 text-sm">You should always try to stop baby&apos;s hiccups</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">✅ FACT:</h4>
                        <p className="text-green-600 text-sm">Most hiccups resolve naturally and don&apos;t bother babies</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">❌ MYTH:</h4>
                        <p className="text-red-600 text-sm">Hiccups mean baby has eaten too much</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">✅ FACT:</h4>
                        <p className="text-green-600 text-sm">While overfeeding can cause hiccups, <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">many other factors trigger them</a></p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">❌ MYTH:</h4>
                        <p className="text-red-600 text-sm">Adult hiccup remedies work for babies</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">✅ FACT:</h4>
                        <p className="text-green-600 text-sm">Adult remedies can be dangerous for babies; gentle methods only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Comfort for Parents */}
            <section className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Reassurance for New Parents</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">Normal Development</div>
                  <div className="text-sm text-gray-600">Hiccups are a sign of healthy nervous system development</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">Temporary Phase</div>
                  <div className="text-sm text-gray-600">Most babies outgrow frequent hiccups by 6-12 months</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">Usually Harmless</div>
                  <div className="text-sm text-gray-600">Rarely indicate any serious medical problems</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Feeding & Digestion:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">How to Burp Your Baby</a></li>
                    <li><a href="/blog/formula-vs-breastfeeding-guide" className="text-blue-600 hover:underline">Feeding Guide</a></li>
                    <li><a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Complete Newborn Care</a></li>
                    <li><a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Baby Temperature Guide</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Development & Health:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 hover:underline">Growth & Development</a></li>
                    <li><a href="/blog/baby-massage-after-delivery" className="text-blue-600 hover:underline">Baby Massage Guide</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-blue-600 hover:underline">Vitamin D for Babies</a></li>
                    <li><a href="/baby" className="text-blue-600 hover:underline">Baby Health Tracker</a></li>
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