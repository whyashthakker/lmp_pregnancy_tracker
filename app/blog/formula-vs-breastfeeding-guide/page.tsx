import { Metadata } from 'next'
import { Heart, Clock, Brain, Stethoscope, Shield, Baby, Target, Users, CheckCircle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formula vs Breastfeeding: Complete Comparison Guide for New Parents | EGSpect',
  description: 'Comprehensive comparison of formula feeding vs breastfeeding including benefits, challenges, costs, and practical considerations to help you make the best choice for your family.',
  keywords: 'formula vs breastfeeding, baby feeding options, breastfeeding benefits, formula feeding benefits, infant nutrition, feeding comparison, new parent feeding guide',
}

export default function FormulaVsBreastfeedingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Formula vs Breastfeeding Guide
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Complete comparison to help you make the best feeding choice for your family
            </p>
          </div>

          {/* Quick Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Both</div>
              <div className="text-sm text-gray-600">Provide nutrition</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Personal</div>
              <div className="text-sm text-gray-600">Choice matters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">No guilt</div>
              <div className="text-sm text-gray-600">Fed is best</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Support</div>
              <div className="text-sm text-gray-600">Available for both</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Baby className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Making the Right Choice for Your Family</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Choosing how to feed your baby is one of the first major decisions you&apos;ll make as a parent. 
                  Both breastfeeding and formula feeding have benefits and challenges. The most important thing 
                  is that your baby is well-fed, healthy, and that your choice works for your family&apos;s unique situation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">No Perfect Choice</h3>
                    <p className="text-blue-700 text-sm">Every family&apos;s situation is different</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Both Are Nutritious</h3>
                    <p className="text-green-700 text-sm">Modern formulas are highly developed</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Combination is Possible</h3>
                    <p className="text-purple-700 text-sm">Many families use both successfully</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Side-by-Side Comparison */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Detailed Comparison</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Breastfeeding */}
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Breastfeeding
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Perfect nutrition designed for your baby</li>
                        <li>• Antibodies and immune protection</li>
                        <li>• Always available and right temperature</li>
                        <li>• Promotes bonding and skin-to-skin contact</li>
                        <li>• No preparation or sterilization needed</li>
                        <li>• Free and environmentally friendly</li>
                        <li>• Reduces risk of infections and allergies</li>
                        <li>• Health benefits for mother too</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Challenges:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Time-intensive, especially initially</li>
                        <li>• Mother bears full feeding responsibility</li>
                        <li>• Can be physically demanding</li>
                        <li>• May cause sore nipples or discomfort</li>
                        <li>• Difficult to measure intake amounts</li>
                        <li>• May interfere with sleep and work</li>
                        <li>• Some medications incompatible</li>
                        <li>• Not possible for all mothers</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Formula Feeding */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Baby className="w-5 h-5" />
                    Formula Feeding
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Anyone can feed the baby</li>
                        <li>• Easy to measure intake amounts</li>
                        <li>• More predictable feeding schedule</li>
                        <li>• Mother can return to work easily</li>
                        <li>• Allows for shared nighttime duties</li>
                        <li>• No dietary restrictions for mother</li>
                        <li>• Can take medications as needed</li>
                        <li>• Less physically demanding on mother</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Challenges:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Expensive ongoing cost</li>
                        <li>• Requires preparation and sterilization</li>
                        <li>• Less immune protection than breast milk</li>
                        <li>• Higher risk of infections</li>
                        <li>• Environmental impact from packaging</li>
                        <li>• Need to pack supplies when going out</li>
                        <li>• May increase risk of allergies</li>
                        <li>• Doesn&apos;t adapt to baby&apos;s changing needs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Nutritional Comparison */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Nutritional Comparison</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Aspect</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Breast Milk</th>
                      <th className="border border-purple-200 px-4 py-3 text-left font-semibold text-purple-800">Formula</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Antibodies</td>
                      <td className="border border-purple-200 px-4 py-3">Rich in antibodies and immune factors</td>
                      <td className="border border-purple-200 px-4 py-3">Limited immune protection</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Digestibility</td>
                      <td className="border border-purple-200 px-4 py-3">Easily digested, rarely causes constipation</td>
                      <td className="border border-purple-200 px-4 py-3">May cause constipation in some babies</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Composition</td>
                      <td className="border border-purple-200 px-4 py-3">Changes to meet baby&apos;s growing needs</td>
                      <td className="border border-purple-200 px-4 py-3">Consistent composition</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Proteins</td>
                      <td className="border border-purple-200 px-4 py-3">Perfect amino acid profile</td>
                      <td className="border border-purple-200 px-4 py-3">Good protein content, cow or soy-based</td>
                    </tr>
                    <tr className="hover:bg-purple-25">
                      <td className="border border-purple-200 px-4 py-3 font-medium">Iron Absorption</td>
                      <td className="border border-purple-200 px-4 py-3">High absorption rate (50%)</td>
                      <td className="border border-purple-200 px-4 py-3">Lower absorption rate (10%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cost Analysis */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Cost Comparison</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-4">Breastfeeding Costs</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Initial Setup:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Nursing bras: $30-60</li>
                        <li>• Breast pump: $50-300</li>
                        <li>• Nursing pads: $10-20</li>
                        <li>• Lanolin cream: $10-15</li>
                        <li>• Storage bags/bottles: $20-40</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Ongoing Costs:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Additional calories for mother: $200-300/month</li>
                        <li>• Replacement pump parts: $20-30/month</li>
                        <li>• Storage supplies: $10-20/month</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <p className="text-green-800 font-semibold">First Year Total: ~$500-800</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4">Formula Feeding Costs</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Initial Setup:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Bottles: $20-50</li>
                        <li>• Bottle warmer: $20-40</li>
                        <li>• Sterilizer: $30-80</li>
                        <li>• Formula dispenser: $10-20</li>
                        <li>• Bottle brush: $5-10</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Ongoing Costs:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Formula: $100-150/month</li>
                        <li>• Replacement nipples: $10-15/month</li>
                        <li>• Sterilizing supplies: $5-10/month</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                      <p className="text-blue-800 font-semibold">First Year Total: ~$1,500-2,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Practical Considerations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Practical Considerations</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-4">Time & Convenience</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Breastfeeding:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Always ready, no preparation time</li>
                        <li>• 20-45 minutes per feeding session</li>
                        <li>• Mother must be available for all feeds</li>
                        <li>• Pumping adds extra time</li>
                        <li>• Night feeds easier (no preparation)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Formula Feeding:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• 5-10 minutes preparation time</li>
                        <li>• 15-30 minutes per feeding session</li>
                        <li>• Anyone can feed the baby</li>
                        <li>• Sterilization and cleaning time</li>
                        <li>• Night feeds require preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-800 mb-4">Work & Lifestyle</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Returning to Work:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Breastfeeding: Requires pumping schedule</li>
                        <li>• Formula: Easier transition to childcare</li>
                        <li>• Legal right to pump at work</li>
                        <li>• Need proper storage facilities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Travel & Outings:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Breastfeeding: Nothing to pack or forget</li>
                        <li>• Formula: Need supplies and clean water</li>
                        <li>• Public feeding considerations</li>
                        <li>• Emergency backup plans</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Combination Feeding */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Combination Feeding</h2>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="font-semibold text-orange-800 mb-4">The Best of Both Worlds</h3>
                <p className="text-orange-700 mb-4">
                  Many families successfully combine breastfeeding and formula feeding. This approach can offer 
                  flexibility while still providing some benefits of breast milk.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-700 mb-2">When Combination Feeding Works:</h4>
                    <ul className="space-y-1 text-orange-600 text-sm">
                      <li>• Low milk supply supplementation</li>
                      <li>• Returning to work transition</li>
                      <li>• Allowing partner to help with feeding</li>
                      <li>• Night time relief for mother</li>
                      <li>• Medical reasons requiring supplements</li>
                      <li>• Mother&apos;s comfort and flexibility</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-2">Tips for Success:</h4>
                    <ul className="space-y-1 text-orange-600 text-sm">
                      <li>• Establish breastfeeding first (3-4 weeks)</li>
                      <li>• Introduce bottles gradually</li>
                      <li>• Maintain regular pumping schedule</li>
                      <li>• Use paced bottle feeding technique</li>
                      <li>• Monitor baby&apos;s acceptance of both</li>
                      <li>• Adjust ratio based on your needs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Making Your Decision */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Making Your Decision</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-4">Questions to Consider</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Personal Factors:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• What feels right for your family?</li>
                      <li>• What are your work/life commitments?</li>
                      <li>• Do you have medical considerations?</li>
                      <li>• What support system do you have?</li>
                      <li>• How important is cost to your decision?</li>
                      <li>• What are your partner&apos;s preferences?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Baby Factors:</h4>
                    <ul className="space-y-1 text-blue-600 text-sm">
                      <li>• Does baby have any special needs?</li>
                      <li>• Are there allergies to consider?</li>
                      <li>• How is baby&apos;s weight gain?</li>
                      <li>• Does baby latch well?</li>
                      <li>• Are there any feeding difficulties?</li>
                      <li>• What works best for baby&apos;s schedule?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Support Resources */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Support & Resources</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-4">Breastfeeding Support</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Lactation consultants:</strong> Professional help with technique</li>
                    <li>• <strong>La Leche League:</strong> Peer support groups</li>
                    <li>• <strong>Hospital classes:</strong> Prenatal breastfeeding education</li>
                    <li>• <strong>Pediatrician guidance:</strong> Medical support and advice</li>
                    <li>• <strong>Online communities:</strong> 24/7 peer support</li>
                    <li>• <strong>Partner support:</strong> Crucial for success</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4">Formula Feeding Support</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Pediatrician guidance:</strong> Formula type recommendations</li>
                    <li>• <strong>Formula company resources:</strong> Preparation guides</li>
                    <li>• <strong>Hospital education:</strong> Safe preparation techniques</li>
                    <li>• <strong>Parent support groups:</strong> Sharing experiences</li>
                    <li>• <strong>Childcare coordination:</strong> Consistent feeding approach</li>
                    <li>• <strong>Family involvement:</strong> Everyone can participate</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Reminders */}
            <section>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Important Reminders
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-purple-700 mb-2">No Judgment Zone:</h3>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Every family&apos;s situation is unique</li>
                      <li>• You can change your mind and adapt</li>
                      <li>• Fed is best - healthy baby is the goal</li>
                      <li>• Your mental health matters too</li>
                      <li>• Support other parents&apos; choices</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-purple-700 mb-2">Flexibility is Key:</h3>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Plans can change and that&apos;s okay</li>
                      <li>• Combination feeding is a valid option</li>
                      <li>• Listen to your body and baby&apos;s needs</li>
                      <li>• Seek help when you need it</li>
                      <li>• What works for others may not work for you</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Remember:</strong> The best feeding method is the one that works for you and your baby. 
                    Don&apos;t let others&apos; opinions influence your decision. Trust yourself and seek professional 
                    guidance when needed.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Feeding Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-purple-600 hover:underline">Complete Newborn Care Guide</a></li>
                    <li><a href="/blog/newborn-first-week-guide" className="text-purple-600 hover:underline">First Week Feeding Patterns</a></li>
                    <li><a href="/blog/first-month-newborn-guide" className="text-purple-600 hover:underline">First Month Development</a></li>
                    <li><a href="/blog/baby-jaundice-prevention-treatment" className="text-purple-600 hover:underline">Feeding & Jaundice Prevention</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Helpful Tools:</h3>
                  <ul className="space-y-1">
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-purple-600 hover:underline">Due Date Calculator</a></li>
                    <li><a href="/tools/pregnancy-nutrition-tracker" className="text-purple-600 hover:underline">Nutrition Tracker</a></li>
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