import { Metadata } from 'next'
import { Heart, Clock, Eye, AlertCircle, Stethoscope, Shield, Sun, Target, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Baby Jaundice: Prevention, Peak Times & Treatment Guide | EGSpect',
  description: 'Complete guide to baby jaundice including prevention strategies, when it peaks, warning signs, and effective treatment options. Learn how to manage newborn jaundice safely.',
  keywords: 'baby jaundice, newborn jaundice, jaundice prevention, jaundice treatment, bilirubin levels, phototherapy, breastfeeding jaundice',
}

export default function BabyJaundiceGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Baby Jaundice: Prevention & Treatment Guide
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Complete guide to understanding, preventing, and treating newborn jaundice effectively
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">60%</div>
              <div className="text-sm text-gray-600">Of newborns affected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">3-5 days</div>
              <div className="text-sm text-gray-600">Peak time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1-2 weeks</div>
              <div className="text-sm text-gray-600">Resolution time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-600">Resolve naturally</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* What is Jaundice */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding Baby Jaundice</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Jaundice is a common condition in newborns that causes yellowing of the skin and eyes due to 
                  elevated bilirubin levels in the blood. While often harmless and temporary, understanding when 
                  to be concerned and how to manage it is crucial for new parents.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">What Causes Jaundice:</h3>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Immature liver function in newborns</li>
                      <li>• High red blood cell breakdown</li>
                      <li>• Slow bilirubin processing</li>
                      <li>• Feeding difficulties affecting elimination</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-800 mb-2">Why It&apos;s Common:</h3>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Baby&apos;s liver is still developing</li>
                      <li>• Transition from fetal to adult hemoglobin</li>
                      <li>• Reduced feeding in first few days</li>
                      <li>• Normal physiological process</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Jaundice */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Types of Newborn Jaundice</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-3">Physiological Jaundice</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Most common type</strong> (affects 60% of newborns)</li>
                    <li>• <strong>Appears:</strong> Day 2-3 of life</li>
                    <li>• <strong>Peaks:</strong> Day 3-5</li>
                    <li>• <strong>Resolves:</strong> By 1-2 weeks</li>
                    <li>• <strong>Cause:</strong> Normal liver immaturity</li>
                    <li>• <strong>Treatment:</strong> Usually none needed</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-3">Breastfeeding Jaundice</h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• <strong>Occurs:</strong> First week of life</li>
                    <li>• <strong>Cause:</strong> Inadequate milk intake</li>
                    <li>• <strong>Signs:</strong> Poor feeding, weight loss</li>
                    <li>• <strong>Treatment:</strong> Increase feeding frequency</li>
                    <li>• <strong>Prevention:</strong> Early, frequent breastfeeding</li>
                    <li>• <strong>Resolution:</strong> With improved feeding</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-3">Breast Milk Jaundice</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Appears:</strong> After first week</li>
                    <li>• <strong>Duration:</strong> Can last 6-12 weeks</li>
                    <li>• <strong>Cause:</strong> Substances in breast milk</li>
                    <li>• <strong>Baby condition:</strong> Otherwise healthy</li>
                    <li>• <strong>Feeding:</strong> Normal weight gain</li>
                    <li>• <strong>Management:</strong> Continue breastfeeding</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-800 mb-3">Pathological Jaundice</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• <strong>Appears:</strong> First 24 hours</li>
                    <li>• <strong>Severity:</strong> High bilirubin levels</li>
                    <li>• <strong>Causes:</strong> Blood incompatibility, infection</li>
                    <li>• <strong>Urgency:</strong> Requires immediate treatment</li>
                    <li>• <strong>Complications:</strong> Can cause brain damage</li>
                    <li>• <strong>Treatment:</strong> Phototherapy, exchange transfusion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline & Peak */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Jaundice Timeline: When It Peaks</h2>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-800 mb-4">Typical Jaundice Progression</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">Day 1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">First 24 Hours</h4>
                      <p className="text-gray-600 text-sm">Jaundice appearing now is concerning and requires immediate medical attention</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold">Day 2-3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Normal Onset</h4>
                      <p className="text-gray-600 text-sm">Physiological jaundice typically becomes visible, starting with face and eyes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-orange-100 rounded-lg">
                    <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-700 font-bold">Day 3-5</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Peak Period</h4>
                      <p className="text-gray-600 text-sm">Bilirubin levels reach their highest point; closest monitoring needed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">Week 1-2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Gradual Resolution</h4>
                      <p className="text-gray-600 text-sm">Most cases resolve naturally as liver function matures</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention Strategies */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Prevention Strategies</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Feeding Prevention
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Early initiation:</strong> Start breastfeeding within first hour</li>
                    <li>• <strong>Frequent feeding:</strong> 8-12 times in 24 hours</li>
                    <li>• <strong>Adequate intake:</strong> Ensure baby is getting enough milk</li>
                    <li>• <strong>Proper latch:</strong> Get help with breastfeeding technique</li>
                    <li>• <strong>Monitor output:</strong> Check for adequate wet diapers</li>
                    <li>• <strong>Supplement if needed:</strong> If medically advised</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5" />
                    Medical Prevention
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Prenatal care:</strong> Regular checkups during pregnancy</li>
                    <li>• <strong>Blood type testing:</strong> Know maternal and paternal blood types</li>
                    <li>• <strong>RhoGAM if needed:</strong> For Rh-negative mothers</li>
                    <li>• <strong>Monitor glucose:</strong> Prevent gestational diabetes</li>
                    <li>• <strong>Avoid early delivery:</strong> Unless medically necessary</li>
                    <li>• <strong>Hospital monitoring:</strong> Don&apos;t discharge too early</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Signs to Watch For */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Signs & Symptoms to Monitor</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-3">Visual Signs of Jaundice</h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• <strong>Face and eyes:</strong> First area to show yellowing</li>
                    <li>• <strong>Chest and abdomen:</strong> Yellowing spreads downward</li>
                    <li>• <strong>Arms and legs:</strong> Later areas to be affected</li>
                    <li>• <strong>Palms and soles:</strong> Last to show yellowing</li>
                    <li>• <strong>White of eyes:</strong> Often most noticeable</li>
                    <li>• <strong>Under fingernails:</strong> Check in good lighting</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-800 mb-3">How to Check at Home</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Good lighting:</strong> Check in natural daylight</li>
                    <li>• <strong>Press test:</strong> Press skin lightly, look for yellow tint</li>
                    <li>• <strong>Daily monitoring:</strong> Check same time each day</li>
                    <li>• <strong>Photo documentation:</strong> Take pictures to track progression</li>
                    <li>• <strong>Note feeding:</strong> Monitor alongside jaundice levels</li>
                    <li>• <strong>Trust instincts:</strong> Contact doctor if concerned</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Treatment Options */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Treatment Options</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Sun className="w-5 h-5" />
                    Phototherapy (Light Therapy)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">How It Works:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Special blue/white lights break down bilirubin</li>
                        <li>• Converts bilirubin to water-soluble form</li>
                        <li>• Allows easier elimination through urine/stool</li>
                        <li>• Safe and effective treatment method</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Treatment Process:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Baby placed under special lights</li>
                        <li>• Eyes protected with patches</li>
                        <li>• Continuous or intermittent exposure</li>
                        <li>• Regular monitoring of bilirubin levels</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Enhanced Feeding Protocol</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Breastfeeding Support:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Increase feeding frequency to 10-12 times/day</li>
                        <li>• Ensure effective latch and milk transfer</li>
                        <li>• Monitor baby&apos;s weight gain closely</li>
                        <li>• Lactation consultant support if needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Supplementation Options:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Formula supplementation if medically advised</li>
                        <li>• Expressed breast milk if available</li>
                        <li>• Careful monitoring of intake and output</li>
                        <li>• Temporary measure until breastfeeding improves</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4">Intensive Treatments (Severe Cases)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Exchange Transfusion:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Reserved for very high bilirubin levels</li>
                        <li>• Replaces baby&apos;s blood with donor blood</li>
                        <li>• Removes excess bilirubin quickly</li>
                        <li>• Performed in specialized units</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Intravenous Immunoglobulin:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• For immune-mediated jaundice</li>
                        <li>• Reduces red blood cell breakdown</li>
                        <li>• May prevent need for exchange transfusion</li>
                        <li>• Hospital-based treatment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Home Care Tips */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Home Care & Management</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-purple-800 mb-4">Effective Home Strategies</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Frequent feeding:</strong> Every 2-3 hours, including at night</li>
                    <li>• <strong>Monitor output:</strong> Track wet diapers (6+ per day)</li>
                    <li>• <strong>Good lighting:</strong> Spend time near windows during day</li>
                    <li>• <strong>Skin-to-skin:</strong> Promotes bonding and feeding</li>
                    <li>• <strong>Rest when possible:</strong> Take care of yourself too</li>
                    <li>• <strong>Stay hydrated:</strong> Important for breastfeeding mothers</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-pink-800 mb-4">What NOT to Do</h3>
                  <ul className="space-y-2 text-pink-700">
                    <li>• <strong>Don&apos;t use home remedies:</strong> No special foods or herbs</li>
                    <li>• <strong>Don&apos;t put baby in direct sunlight:</strong> Can cause burns</li>
                    <li>• <strong>Don&apos;t stop breastfeeding:</strong> Unless medically advised</li>
                    <li>• <strong>Don&apos;t delay medical care:</strong> If jaundice worsens</li>
                    <li>• <strong>Don&apos;t give water:</strong> Can interfere with feeding</li>
                    <li>• <strong>Don&apos;t panic:</strong> Most cases resolve naturally</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* When to Seek Help */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  When to Contact Your Pediatrician Immediately
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Emergency Signs:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Jaundice appearing in first 24 hours</li>
                      <li>• Rapid spread of yellowing down the body</li>
                      <li>• Baby extremely sleepy or hard to wake</li>
                      <li>• Poor feeding or refusing to eat</li>
                      <li>• High-pitched or continuous crying</li>
                      <li>• Fever or signs of illness</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Concerning Changes:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Jaundice worsening after day 3</li>
                      <li>• Yellowing of palms and soles</li>
                      <li>• Dark orange or brown urine</li>
                      <li>• Pale or white stools</li>
                      <li>• Excessive weight loss (&gt;10%)</li>
                      <li>• Your instinct that something is wrong</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Trust your instincts:</strong> If you&apos;re concerned about your baby&apos;s condition, 
                    don&apos;t hesitate to contact your healthcare provider. Early intervention can prevent complications.
                  </p>
                </div>
              </div>
            </section>

            {/* Long-term Outlook */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Long-term Outlook & Prognosis</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4">Excellent Prognosis for Most Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Recovery Statistics:</h4>
                    <ul className="space-y-1 text-green-600 text-sm">
                      <li>• 95% of cases resolve without treatment</li>
                      <li>• Most babies show improvement within 1-2 weeks</li>
                      <li>• No long-term effects in mild to moderate cases</li>
                      <li>• Normal development and growth expected</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Follow-up Care:</h4>
                    <ul className="space-y-1 text-green-600 text-sm">
                      <li>• Regular pediatric checkups as scheduled</li>
                      <li>• Monitoring of bilirubin levels if needed</li>
                      <li>• Support for feeding and weight gain</li>
                      <li>• Reassurance and education for parents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention Summary */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Prevention & Management Points</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Early & Frequent Feeding</div>
                  <div className="text-sm text-gray-600">Best prevention strategy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Monitor Closely</div>
                  <div className="text-sm text-gray-600">Especially days 3-5</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Seek Help Early</div>
                  <div className="text-sm text-gray-600">When in doubt, contact doctor</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Newborn Care Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-first-week-guide" className="text-purple-600 hover:underline">First Week Newborn Care</a></li>
                    <li><a href="/blog/first-month-newborn-guide" className="text-purple-600 hover:underline">First Month Development</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-purple-600 hover:underline">Vaccination Schedule</a></li>
                    <li><a href="/blog/pregnancy-warning-signs" className="text-purple-600 hover:underline">Pregnancy Warning Signs</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Helpful Tools:</h3>
                  <ul className="space-y-1">
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-purple-600 hover:underline">Due Date Calculator</a></li>
                    <li><a href="/tools/contraction-timer" className="text-purple-600 hover:underline">Contraction Timer</a></li>
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