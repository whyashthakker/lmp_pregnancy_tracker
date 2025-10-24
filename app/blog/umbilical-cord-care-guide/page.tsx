import { Metadata } from 'next'
import { Heart, Shield, AlertTriangle, CheckCircle, Clock, Target, Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Umbilical Cord Care: When Does It Fall Off & How to Care | EGSpect',
  description: 'Complete guide to umbilical cord care including when it falls off, daily cleaning routine, signs of infection, and what to expect during healing.',
  keywords: 'umbilical cord care, newborn umbilical stump, when umbilical cord falls off, belly button care, umbilical cord infection signs, newborn navel care',
}

export default function UmbilicalCordCareGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Umbilical Cord Care Guide
              </h1>
            </div>
            <p className="text-teal-100 text-lg">
              Everything you need to know about caring for your baby&apos;s umbilical cord stump
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-teal-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">7-21 days</div>
              <div className="text-sm text-gray-600">Falls off naturally</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">Keep dry</div>
              <div className="text-sm text-gray-600">Most important rule</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">Fold diaper</div>
              <div className="text-sm text-gray-600">Below cord stump</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">No alcohol</div>
              <div className="text-sm text-gray-600">Modern care approach</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Understanding the Umbilical Cord */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding Your Baby&apos;s Umbilical Cord</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The umbilical cord was your baby&apos;s lifeline during pregnancy, providing oxygen and nutrients. 
                  After birth, the cord is clamped and cut, leaving a small stump that will naturally dry up 
                  and fall off. Understanding normal healing helps you provide <a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">proper newborn care</a> 
                  while watching for any concerning signs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Natural Process</h3>
                    <p className="text-blue-700 text-sm">Stump dries and falls off without intervention</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Simple Care</h3>
                    <p className="text-green-700 text-sm">Keep clean and dry for best healing</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Individual Timing</h3>
                    <p className="text-purple-700 text-sm">Each baby&apos;s cord heals at different pace</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline and What to Expect */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800">Umbilical Cord Healing Timeline</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">First 24-48 Hours After Birth</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">What You&apos;ll See:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Moist, soft cord stump</li>
                        <li>• White or yellowish appearance</li>
                        <li>• Plastic clamp still attached</li>
                        <li>• About 1-2 inches long</li>
                        <li>• May have slight bleeding at base</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-teal-600 hover:underline">Feels warm like rest of baby&apos;s body</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Care During This Period:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Keep area clean and dry</li>
                        <li>• Fold diaper below cord stump</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">Gentle sponge baths only</a></li>
                        <li>• Let air circulate around cord</li>
                        <li>• Avoid tight clothing over area</li>
                        <li>• No need to clean unless soiled</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Days 3-7: Drying Process Begins</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Changes You&apos;ll Notice:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Cord starts to dry and shrink</li>
                        <li>• Color changes to brown or black</li>
                        <li>• Becomes harder and more brittle</li>
                        <li>• Clamp may be removed by healthcare provider</li>
                        <li>• Begins to separate from belly button</li>
                        <li>• May have slight odor (normal)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Continued Care:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Continue keeping area dry</li>
                        <li>• Clean only if visibly dirty</li>
                        <li>• Use plain water if cleaning needed</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-teal-600 hover:underline">Avoid massaging near cord area</a></li>
                        <li>• Allow maximum air exposure</li>
                        <li>• Don&apos;t pull or try to loosen stump</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Days 7-21: Final Separation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">The Falling Off Process:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Cord becomes very dry and dark</li>
                        <li>• Starts to wiggle or move freely</li>
                        <li>• May hang by small thread of tissue</li>
                        <li>• Falls off naturally during care or diaper change</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-teal-600 hover:underline">Timing varies by individual baby</a></li>
                        <li>• May leave small wound that heals quickly</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">After It Falls Off:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Small crater-like belly button remains</li>
                        <li>• May have slight bleeding or discharge</li>
                        <li>• Continue gentle cleaning as needed</li>
                        <li>• Takes 1-2 weeks for complete healing</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-teal-600 hover:underline">Can begin regular baths once healed</a></li>
                        <li>• Monitor for signs of infection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Daily Care Routine */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800">Daily Umbilical Cord Care Routine</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Modern &quot;Dry Care&quot; Approach</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">What This Means:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Keep the cord stump clean and dry</li>
                        <li>• No routine cleaning with alcohol</li>
                        <li>• Allow natural air drying</li>
                        <li>• Clean only when visibly soiled</li>
                        <li>• Let the body&apos;s natural healing process work</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">Simpler, gentler approach</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Why This Works Better:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Promotes faster healing</li>
                        <li>• Reduces risk of irritation</li>
                        <li>• Allows beneficial bacteria</li>
                        <li>• Less interference with natural process</li>
                        <li>• Research-supported approach</li>
                        <li>• Recommended by pediatric organizations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Step-by-Step Care Instructions</h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium text-teal-700 mb-1">During Diaper Changes</h4>
                        <ul className="text-teal-600 text-sm space-y-1">
                          <li>• Fold diaper waistband down below cord stump</li>
                          <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-teal-600 hover:underline">Ensure cord gets air circulation</a></li>
                          <li>• Check that diaper doesn&apos;t rub against stump</li>
                          <li>• Look for any changes in appearance</li>
                          <li>• Keep area dry if accidentally wet</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium text-teal-700 mb-1">If Cleaning is Needed</h4>
                        <ul className="text-teal-600 text-sm space-y-1">
                          <li>• Use plain water only</li>
                          <li>• Gentle dabbing with clean cotton swab</li>
                          <li>• Clean around base if drainage present</li>
                          <li>• Pat dry thoroughly with clean cloth</li>
                          <li>• Allow air drying for several minutes</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium text-teal-700 mb-1">Daily Observation</h4>
                        <ul className="text-teal-600 text-sm space-y-1">
                          <li>• Check cord appearance at each diaper change</li>
                          <li>• Note any changes in color, smell, or discharge</li>
                          <li>• <a href="/blog/baby-massage-after-delivery" className="text-teal-600 hover:underline">Monitor surrounding skin for redness</a></li>
                          <li>• Look for signs of loosening or separation</li>
                          <li>• Document any concerns for pediatrician</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Bathing Guidelines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Before Cord Falls Off:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">Sponge baths only</a></li>
                        <li>• Avoid submerging cord in water</li>
                        <li>• Clean around cord area carefully</li>
                        <li>• Dry cord area thoroughly after bath</li>
                        <li>• Use minimal water near cord stump</li>
                        <li>• Focus on other body parts during bathing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">After Cord Falls Off:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Wait for complete healing (1-2 weeks)</li>
                        <li>• Can begin regular tub baths</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-teal-600 hover:underline">Use appropriate water temperature</a></li>
                        <li>• Gently clean belly button area</li>
                        <li>• Dry thoroughly after bathing</li>
                        <li>• Monitor for any irritation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Signs of Normal Healing vs Problems */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Normal Healing vs. Warning Signs
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">✅ Normal Signs</h3>
                      <ul className="space-y-1 text-green-700">
                        <li>• Gradual drying and darkening of cord</li>
                        <li>• Small amount of clear or slightly bloody discharge</li>
                        <li>• Mild, sweet smell</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-teal-600 hover:underline">Slight redness at base (normal healing)</a></li>
                        <li>• Small amount of bleeding when cord falls off</li>
                        <li>• Gradual shrinking and loosening</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-800 mb-3">⚠️ Warning Signs</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Bright red, swollen skin around cord base</li>
                        <li>• Foul-smelling discharge</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-teal-600 hover:underline">Fever in baby</a></li>
                        <li>• Pus or yellow/green discharge</li>
                        <li>• Red streaking from cord area</li>
                        <li>• Excessive bleeding</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Call Pediatrician Same Day:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Persistent oozing after cord falls off</li>
                        <li>• Increasing redness around belly button</li>
                        <li>• Any signs of infection</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">Baby seems unwell or fussy</a></li>
                        <li>• Cord hasn&apos;t fallen off after 3 weeks</li>
                        <li>• Any concerns about healing</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Seek Immediate Care:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Baby has fever with cord problems</li>
                        <li>• Severe bleeding that won&apos;t stop</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-teal-600 hover:underline">Baby refuses to eat</a></li>
                        <li>• Signs of serious infection</li>
                        <li>• Baby is lethargic or unresponsive</li>
                        <li>• Any emergency symptoms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Concerns and Myths */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common Concerns & Myths</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Q: Should I clean the cord with alcohol?</h4>
                      <p className="text-blue-600 text-sm">
                        <strong>A:</strong> No, modern recommendations avoid alcohol. It can delay healing and isn&apos;t necessary 
                        for preventing infection. <a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">Dry care works better</a>.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Q: What if the cord seems stuck and won&apos;t fall off?</h4>
                      <p className="text-blue-600 text-sm">
                        <strong>A:</strong> Never pull or try to remove the cord stump. Some babies take up to 3-4 weeks. 
                        <a href="/blog/newborn-growth-charts-head-height" className="text-teal-600 hover:underline">Each baby heals at their own pace</a>.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Q: Is some bleeding normal when the cord falls off?</h4>
                      <p className="text-blue-600 text-sm">
                        <strong>A:</strong> Yes, a small amount of bleeding is normal, similar to when a scab falls off. 
                        Excessive or persistent bleeding requires medical attention.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Q: Will my baby have an &quot;innie&quot; or &quot;outie&quot; belly button?</h4>
                      <p className="text-blue-600 text-sm">
                        <strong>A:</strong> This is determined by how the abdominal muscles form, not by cord care. 
                        <a href="/blog/baby-massage-after-delivery" className="text-teal-600 hover:underline">Gentle care doesn&apos;t affect the final shape</a>.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Debunking Common Myths</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-1">❌ MYTH:</h4>
                        <p className="text-red-600 text-sm">The cord must be cleaned with antiseptics daily</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-1">✅ FACT:</h4>
                        <p className="text-green-600 text-sm">Dry care with plain water cleaning only when needed</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-1">❌ MYTH:</h4>
                        <p className="text-red-600 text-sm">You can speed up the process by helping it fall off</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-1">✅ FACT:</h4>
                        <p className="text-green-600 text-sm">Natural timing is safest - never pull or manipulate the cord</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-1">❌ MYTH:</h4>
                        <p className="text-red-600 text-sm">Binding the belly will create a better belly button</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-1">✅ FACT:</h4>
                        <p className="text-green-600 text-sm">Belly button shape is genetic; <a href="/blog/ideal-newborn-temperature-guide" className="text-teal-600 hover:underline">binding can interfere with healing</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Situations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800">Special Situations & Considerations</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Umbilical Granuloma</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">What It Is:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Small, red, moist growth in belly button</li>
                        <li>• Occurs in 1 in 500 babies</li>
                        <li>• Usually appears after cord falls off</li>
                        <li>• May have continuous drainage</li>
                        <li>• Benign but needs treatment</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">More common in some babies</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Treatment:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Requires pediatric evaluation</li>
                        <li>• May need silver nitrate treatment</li>
                        <li>• Usually resolves quickly</li>
                        <li>• Continue gentle cord care</li>
                        <li>• Monitor for improvement</li>
                        <li>• Follow-up as recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Delayed Separation (3+ weeks)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Possible Causes:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-teal-600 hover:underline">Individual variation in healing</a></li>
                        <li>• Thicker cord stump</li>
                        <li>• Immune system differences</li>
                        <li>• Environmental factors</li>
                        <li>• Rare underlying conditions</li>
                        <li>• Sometimes no clear reason</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">When to Seek Evaluation:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Cord still attached after 3 weeks</li>
                        <li>• Any signs of infection</li>
                        <li>• Increasing size or changes</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-teal-600 hover:underline">Parent concerns about healing</a></li>
                        <li>• Pediatrician recommendation</li>
                        <li>• Discussion of next steps</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Multiple Births Considerations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Twin/Multiple Care:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Each baby heals at individual pace</li>
                        <li>• <a href="/blog/when-to-plan-baby-photoshoot" className="text-teal-600 hover:underline">Cords may fall off days apart</a></li>
                        <li>• Same care principles apply</li>
                        <li>• Track each baby separately</li>
                        <li>• Don&apos;t compare healing times</li>
                        <li>• Individual monitoring needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Organization Tips:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Use different colored supplies</li>
                        <li>• Keep separate care logs</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-teal-600 hover:underline">Coordinate care routines</a></li>
                        <li>• Note each baby&apos;s progress</li>
                        <li>• Ask for help when needed</li>
                        <li>• Focus on one baby at a time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Supplies and Preparation */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Cord Care Supplies & Preparation</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-800 mb-4">Essential Supplies:</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Clean cotton swabs</strong> - for gentle cleaning if needed</li>
                      <li>• <strong>Plain water</strong> - <a href="/blog/ideal-newborn-temperature-guide" className="text-teal-600 hover:underline">room temperature for cleaning</a></li>
                      <li>• <strong>Clean washcloths</strong> - soft, gentle fabric</li>
                      <li>• <strong>Newborn diapers</strong> - with fold-down waistband</li>
                      <li>• <strong>Loose clothing</strong> - allows air circulation</li>
                      <li>• <strong>Clean hands</strong> - most important tool</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-4">What You DON&apos;T Need:</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Rubbing alcohol</strong> - delays healing</li>
                      <li>• <strong>Hydrogen peroxide</strong> - too harsh for baby</li>
                      <li>• <strong>Antibiotic ointments</strong> - unless prescribed</li>
                      <li>• <strong>Powder or lotions</strong> - can trap moisture</li>
                      <li>• <strong>Belly bands</strong> - interfere with healing</li>
                      <li>• <strong>Special solutions</strong> - <a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">simple is better</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Long-term Outcomes */}
            <section className="bg-gradient-to-r from-teal-100 to-blue-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What to Expect Long-Term</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-teal-600">Complete Healing</div>
                  <div className="text-sm text-gray-600">Full recovery within 2-4 weeks after cord falls off</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-teal-600">Normal Belly Button</div>
                  <div className="text-sm text-gray-600">Shape determined by genetics, not care methods</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-teal-600">No Special Care</div>
                  <div className="text-sm text-gray-600">Once healed, normal bathing and care resume</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Newborn Care Essentials:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-teal-600 hover:underline">Complete Newborn Care Guide</a></li>
                    <li><a href="/blog/ideal-newborn-temperature-guide" className="text-teal-600 hover:underline">Baby Temperature Guide</a></li>
                    <li><a href="/blog/baby-massage-after-delivery" className="text-teal-600 hover:underline">Baby Massage Safety</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-teal-600 hover:underline">Safe Sun Exposure</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Health & Development:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-growth-charts-head-height" className="text-teal-600 hover:underline">Growth & Development</a></li>
                    <li><a href="/blog/how-to-burp-a-baby" className="text-teal-600 hover:underline">Feeding & Burping</a></li>
                    <li><a href="/blog/newborn-hiccups-guide" className="text-teal-600 hover:underline">Understanding Baby Hiccups</a></li>
                    <li><a href="/baby" className="text-teal-600 hover:underline">Baby Health Tracker</a></li>
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