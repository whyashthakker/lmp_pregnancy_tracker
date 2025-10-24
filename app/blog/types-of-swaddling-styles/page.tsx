import { Metadata } from 'next'
import { Baby, Shield, Moon, AlertTriangle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Types of Swaddling Styles: Complete Guide to Safe Baby Swaddling Techniques | Pregnancy Tracker',
  description: 'Learn different swaddling techniques for newborns including traditional wrap, arms-up, hip-healthy, and transitional swaddles. Safe swaddling guide with step-by-step instructions.',
  keywords: 'baby swaddling techniques, newborn swaddling styles, safe swaddling guide, arms up swaddle, hip healthy swaddling, traditional swaddle, swaddling safety, infant sleep, newborn care, baby sleep tips',
  openGraph: {
    title: 'Types of Swaddling Styles: Safe Techniques for Better Baby Sleep',
    description: 'Master different swaddling techniques with our comprehensive guide. Learn traditional, arms-up, and transitional swaddling for safer sleep.',
    type: 'article',
  },
}

export default function TypesOfSwaddlingStyles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Baby className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Types of Swaddling Styles</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Complete guide to safe swaddling techniques for better sleep and comfort for your newborn
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-800">Safe Sleep</div>
                  <div className="text-blue-600">SIDS risk reduction</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <Moon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-800">Better Sleep</div>
                  <div className="text-purple-600">2-3x longer sleep</div>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-pink-800">0-4 Months</div>
                  <div className="text-pink-600">Recommended age</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">Safe Swaddling Guidelines</h3>
                      <ul className="text-amber-700 space-y-1">
                        <li>• Always place swaddled babies on their backs to sleep</li>
                        <li>• Stop swaddling when baby shows signs of rolling (typically 2-4 months)</li>
                        <li>• Ensure hips and legs can move freely to prevent hip dysplasia</li>
                        <li>• Never swaddle if room temperature is above 70°F (21°C)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Proper Swaddling</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Sleep Benefits</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li>Reduces startle reflex (Moro reflex)</li>
                      <li>Increases sleep duration by 2-3 times</li>
                      <li>Promotes deeper sleep cycles</li>
                      <li>Helps baby feel secure and calm</li>
                      <li>Mimics womb environment</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Safety Benefits</h3>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li>Reduces SIDS risk when done properly</li>
                      <li>Prevents face scratching</li>
                      <li>Maintains back sleeping position</li>
                      <li>Reduces excessive crying</li>
                      <li>Promotes safe sleep practices</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">5 Main Types of Swaddling Styles</h2>

                <div className="space-y-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">1. Traditional Diamond Swaddle</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-3">Best For:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Newborns 0-2 months</li>
                          <li>Babies with strong startle reflex</li>
                          <li>Traditional swaddling preference</li>
                          <li>Full body security needs</li>
                        </ul>
                        
                        <h4 className="font-semibold text-blue-700 mb-3 mt-4">Materials Needed:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Large muslin or cotton blanket (47&quot; x 47&quot;)</li>
                          <li>Lightweight, breathable fabric</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-3">Step-by-Step Instructions:</h4>
                        <ol className="list-decimal list-inside text-blue-600 space-y-2">
                          <li>Lay blanket diamond-shaped, fold top corner down 6 inches</li>
                          <li>Place baby on back, shoulders at fold line</li>
                          <li>Tuck right arm straight, wrap right corner across body</li>
                          <li>Fold bottom corner up over feet (loose for hip movement)</li>
                          <li>Tuck left arm, wrap left corner across and tuck behind</li>
                          <li>Check: snug around arms, loose around hips</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">2. Arms-Up Swaddle (Love to Dream Style)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-3">Best For:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Babies who resist traditional swaddling</li>
                          <li>Self-soothing thumb/finger suckers</li>
                          <li>Transitioning to unswaddled sleep</li>
                          <li>Natural arm-up sleepers</li>
                        </ul>
                        
                        <h4 className="font-semibold text-purple-700 mb-3 mt-4">Materials Needed:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Arms-up swaddle product or</li>
                          <li>Modified blanket technique</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-3">DIY Arms-Up Instructions:</h4>
                        <ol className="list-decimal list-inside text-purple-600 space-y-2">
                          <li>Use smaller blanket or modify traditional fold</li>
                          <li>Place baby with arms bent up near face</li>
                          <li>Wrap blanket around torso only</li>
                          <li>Leave arms free above wrap line</li>
                          <li>Ensure snug fit around chest, loose at hips</li>
                          <li>Baby can access hands for self-soothing</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">3. Hip-Healthy Swaddle</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">Best For:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Preventing hip dysplasia</li>
                          <li>Babies with hip concerns</li>
                          <li>Pediatrician-recommended swaddling</li>
                          <li>Proper leg development</li>
                        </ul>
                        
                        <h4 className="font-semibold text-green-700 mb-3 mt-4">Key Features:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Wide bottom design</li>
                          <li>Frog-leg position allowance</li>
                          <li>Hip flexion and abduction support</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">Hip-Safe Instructions:</h4>
                        <ol className="list-decimal list-inside text-green-600 space-y-2">
                          <li>Follow traditional swaddle for arms</li>
                          <li>Create &quot;pouch&quot; at bottom for legs</li>
                          <li>Allow natural frog-leg position</li>
                          <li>Ensure legs can bend up toward belly</li>
                          <li>Bottom should be loose and roomy</li>
                          <li>Never straighten legs or bind together</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">4. One-Arm-Out Transitional Swaddle</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-3">Best For:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Babies starting to roll (2-4 months)</li>
                          <li>Gradual swaddle weaning</li>
                          <li>Increased self-soothing</li>
                          <li>Preparing for sleep sacks</li>
                        </ul>
                        
                        <h4 className="font-semibold text-orange-700 mb-3 mt-4">Timing:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>When baby consistently breaks one arm free</li>
                          <li>First signs of rolling attempts</li>
                          <li>Around 8-16 weeks old</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-3">Transition Instructions:</h4>
                        <ol className="list-decimal list-inside text-orange-600 space-y-2">
                          <li>Start with dominant arm out (usually right)</li>
                          <li>Swaddle other arm traditionally</li>
                          <li>Use for 3-7 nights</li>
                          <li>Then progress to both arms out</li>
                          <li>Monitor sleep quality during transition</li>
                          <li>Consider sleep sack as next step</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-pink-800 mb-4">5. Quick & Easy Pocket Swaddle</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-3">Best For:</h4>
                        <ul className="list-disc list-inside text-pink-600 space-y-1">
                          <li>Midnight diaper changes</li>
                          <li>Quick re-swaddling</li>
                          <li>New parents learning</li>
                          <li>Fussy babies needing fast comfort</li>
                        </ul>
                        
                        <h4 className="font-semibold text-pink-700 mb-3 mt-4">Materials:</h4>
                        <ul className="list-disc list-inside text-pink-600 space-y-1">
                          <li>Pre-designed swaddle wraps</li>
                          <li>Velcro or snap closures</li>
                          <li>Weighted or transitional options</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-3">Quick Instructions:</h4>
                        <ol className="list-decimal list-inside text-pink-600 space-y-2">
                          <li>Use pre-made swaddle products</li>
                          <li>Place baby in center pocket</li>
                          <li>Secure arms with built-in wraps</li>
                          <li>Fasten with velcro or snaps</li>
                          <li>Check fit: snug arms, loose hips</li>
                          <li>Perfect for quick midnight changes</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Swaddling Safety Checklist</h2>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Critical Safety Points</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      <li>✓ Always place on back for sleep</li>
                      <li>✓ Stop when rolling begins</li>
                      <li>✓ Check <a href="/blog/ideal-newborn-temperature-guide" className="text-red-600 underline hover:text-red-800">baby&apos;s temperature</a> regularly</li>
                      <li>✓ Allow hip and leg movement</li>
                      <li>✓ Use breathable fabrics only</li>
                      <li>✓ Check for overheating signs</li>
                    </ul>
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      <li>✗ Never swaddle face or neck</li>
                      <li>✗ Don&apos;t swaddle too tightly around hips</li>
                      <li>✗ Avoid thick or heavy blankets</li>
                      <li>✗ Don&apos;t continue past rolling stage</li>
                      <li>✗ Never swaddle for tummy time</li>
                      <li>✗ Don&apos;t use if baby is sick/feverish</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">When to Stop Swaddling</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-yellow-800 mb-3">Clear Signs to Stop</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li><strong>Rolling attempts:</strong> Any movement from back to side</li>
                      <li><strong>Breaking free:</strong> Consistently escaping swaddle</li>
                      <li><strong>Fighting the wrap:</strong> Resisting or crying when swaddled</li>
                      <li><strong>Age factor:</strong> 3-4 months old typically</li>
                      <li><strong>Startle reflex fading:</strong> Less jerky movements</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Transition Options</h3>
                    <ul className="list-disc list-inside text-blue-700 space-y-2">
                      <li><strong>Sleep sacks:</strong> Arms-free with secure torso</li>
                      <li><strong>Transitional products:</strong> Removable arm sections</li>
                      <li><strong>Gradual weaning:</strong> One arm out, then both</li>
                      <li><strong>Cold turkey:</strong> Complete stop (if baby adjusts well)</li>
                      <li><strong>Comfort items:</strong> Small loveys for security</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Troubleshooting Common Issues</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Baby Breaks Free Constantly</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Possible Causes:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Swaddle too loose</li>
                          <li>Wrong size blanket</li>
                          <li>Ready to transition</li>
                          <li>Prefers arms-up position</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Solutions:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Try tighter arm wrapping</li>
                          <li>Use larger blanket</li>
                          <li>Switch to arms-up style</li>
                          <li>Consider pre-made swaddles</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Baby Cries When Swaddled</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Check For:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Overheating</li>
                          <li>Too tight around hips</li>
                          <li>Uncomfortable fabric</li>
                          <li>Wrong timing (overtired)</li>
                          <li>Need for <a href="/blog/baby-crying-sound-guidebook" className="text-gray-500 underline hover:text-gray-700">different soothing</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Try:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Looser hip area</li>
                          <li>Different fabric</li>
                          <li>Arms-up position</li>
                          <li>Swaddle before overtiredness</li>
                          <li>Combine with other soothing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Sleep Doesn&apos;t Improve</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Consider:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Different swaddling style</li>
                          <li>Environmental factors</li>
                          <li>Feeding schedule</li>
                          <li>Other sleep issues</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Combine With:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>White noise</li>
                          <li>Room darkening</li>
                          <li>Optimal room temperature</li>
                          <li>Consistent bedtime routine</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Fabric and Material Guide</h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Material</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best For</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Pros</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cons</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Muslin Cotton</td>
                        <td className="border border-gray-300 px-4 py-3">All seasons, beginners</td>
                        <td className="border border-gray-300 px-4 py-3">Breathable, soft, gets softer</td>
                        <td className="border border-gray-300 px-4 py-3">Can be expensive</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Bamboo</td>
                        <td className="border border-gray-300 px-4 py-3">Warm climates, sensitive skin</td>
                        <td className="border border-gray-300 px-4 py-3">Hypoallergenic, moisture-wicking</td>
                        <td className="border border-gray-300 px-4 py-3">More expensive</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Organic Cotton</td>
                        <td className="border border-gray-300 px-4 py-3">Sensitive skin, eco-conscious</td>
                        <td className="border border-gray-300 px-4 py-3">Chemical-free, durable</td>
                        <td className="border border-gray-300 px-4 py-3">Less stretchy</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Cotton Jersey</td>
                        <td className="border border-gray-300 px-4 py-3">Active babies, easy wrapping</td>
                        <td className="border border-gray-300 px-4 py-3">Stretchy, forgiving</td>
                        <td className="border border-gray-300 px-4 py-3">Can be too warm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li><a href="/blog/baby-crying-sound-guidebook" className="text-green-600 underline hover:text-green-800">Understanding baby crying</a></li>
                      <li><a href="/blog/ideal-newborn-temperature-guide" className="text-green-600 underline hover:text-green-800">Baby temperature monitoring</a></li>
                      <li><a href="/blog/newborn-hiccups-guide" className="text-green-600 underline hover:text-green-800">Managing newborn hiccups</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li><a href="/blog/how-to-burp-a-baby" className="text-green-600 underline hover:text-green-800">Baby burping techniques</a></li>
                      <li><a href="/blog/baby-massage-after-delivery" className="text-green-600 underline hover:text-green-800">Baby massage for comfort</a></li>
                      <li><a href="/blog/umbilical-cord-care-guide" className="text-green-600 underline hover:text-green-800">Umbilical cord care</a></li>
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