import { Metadata } from 'next'
import { Sun, Baby, Shield, CheckCircle, AlertTriangle, Clock, Thermometer, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vitamin D and Sun Exposure for Newborns: Safe Guidelines & Benefits | EGSpect',
  description: 'Learn about vitamin D requirements for newborns, safe sun exposure practices, supplementation guidelines, and how to protect your baby while ensuring healthy development.',
  keywords: 'vitamin d newborns, newborn sun exposure, baby vitamin d deficiency, infant vitamin d supplements, safe sun exposure babies, newborn vitamin d drops, baby sunlight exposure, vitamin d breastfeeding',
}

export default function VitaminDSunExposureNewborns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Vitamin D & Sun Exposure for Newborns
              </h1>
            </div>
            <p className="text-yellow-100 text-lg">
              Essential guidelines for safe sun exposure and vitamin D for your baby&apos;s healthy development
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-yellow-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">400 IU</div>
              <div className="text-sm text-gray-600">Daily vitamin D need</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">NO</div>
              <div className="text-sm text-gray-600">Direct sun under 6 months</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Day 1</div>
              <div className="text-sm text-gray-600">Start supplements</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">10-15 min</div>
              <div className="text-sm text-gray-600">Indirect sun (6+ months)</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Baby className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Why Vitamin D Matters for Newborns</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Vitamin D is crucial for your newborn&apos;s bone development, immune system function, and overall growth. 
                  Unlike adults, babies cannot safely get vitamin D from direct sun exposure, making supplementation 
                  and careful planning essential for their health.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Bone Development</h3>
                    <p className="text-blue-700 text-sm">Essential for calcium absorption and strong bone formation</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Immune Function</h3>
                    <p className="text-green-700 text-sm">Supports immune system development and infection resistance</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Growth Support</h3>
                    <p className="text-orange-700 text-sm">Promotes healthy cell division and muscle development</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vitamin D Requirements */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Vitamin D Requirements by Age</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-4">0-12 Months</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Daily requirement:</strong> 400 IU (10 mcg)</li>
                    <li>• <strong>Start date:</strong> Within first few days of life</li>
                    <li>• <strong>Duration:</strong> Continue throughout first year</li>
                    <li>• <strong>Form:</strong> Liquid drops (easiest for babies)</li>
                    <li>• <strong>Timing:</strong> Can be given with or without food</li>
                    <li>• <strong>Storage:</strong> Follow manufacturer&apos;s instructions</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-4">Special Considerations</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Breastfed babies:</strong> Always need supplements</li>
                    <li>• <strong>Formula-fed babies:</strong> May still need supplements</li>
                    <li>• <strong>Premature babies:</strong> May need higher doses</li>
                    <li>• <strong>Dark skin:</strong> Higher supplementation needs</li>
                    <li>• <strong>Limited sunlight areas:</strong> Extra important</li>
                    <li>• <strong>Winter months:</strong> Increased supplementation needs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sun Exposure Guidelines */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Safe Sun Exposure Guidelines</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Under 6 Months: NO Direct Sun Exposure
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Why No Direct Sun:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Extremely sensitive skin</li>
                        <li>• Cannot regulate body temperature well</li>
                        <li>• Risk of severe sunburn in minutes</li>
                        <li>• Immature melanin production</li>
                        <li>• Dehydration risk</li>
                        <li>• Heat stroke susceptibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Safe Alternatives:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Vitamin D supplements</li>
                        <li>• Indirect sunlight exposure</li>
                        <li>• Shaded outdoor time</li>
                        <li>• Well-ventilated indoor spaces</li>
                        <li>• Covered stroller outings</li>
                        <li>• Window-filtered light</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">6+ Months: Gradual Sun Introduction</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Best Times
                      </h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Before 10 AM</li>
                        <li>• After 4 PM</li>
                        <li>• Avoid peak hours (10 AM - 4 PM)</li>
                        <li>• Start with 5-10 minutes</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-green-700 mb-2">Duration Guidelines</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Week 1: 5 minutes</li>
                        <li>• Week 2: 7-10 minutes</li>
                        <li>• Week 3+: 10-15 minutes</li>
                        <li>• Always monitor baby&apos;s response</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-green-700 mb-2">Protection Measures</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Wide-brimmed hat</li>
                        <li>• Long-sleeved clothing</li>
                        <li>• Sunglasses (if tolerated)</li>
                        <li>• Seek shade frequently</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Vitamin D Deficiency Signs */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Signs of Vitamin D Deficiency</h2>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-4">Early Warning Signs:</h3>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Delayed growth:</strong> Slower than expected height/weight gain</li>
                      <li>• <strong>Dental issues:</strong> Delayed tooth eruption or poor enamel</li>
                      <li>• <strong>Bone softness:</strong> Soft skull bones (craniotabes)</li>
                      <li>• <strong>Muscle weakness:</strong> Delayed motor development</li>
                      <li>• <strong>Frequent infections:</strong> Poor immune function</li>
                      <li>• <strong>Irritability:</strong> Increased fussiness or restlessness</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-4">Severe Deficiency (Rickets):</h3>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Bone deformities:</strong> Bowing of legs, enlarged wrists</li>
                      <li>• <strong>Dental problems:</strong> Cavities, delayed emergence</li>
                      <li>• <strong>Growth delays:</strong> Short stature, delayed walking</li>
                      <li>• <strong>Bone pain:</strong> Discomfort when touched</li>
                      <li>• <strong>Seizures:</strong> Due to low calcium levels</li>
                      <li>• <strong>Breathing issues:</strong> Soft rib cage affecting lungs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    <strong>Important:</strong> If you notice any of these signs, consult your pediatrician immediately. 
                    Early detection and treatment can prevent long-term complications.
                  </p>
                </div>
              </div>
            </section>

            {/* Supplementation Guidelines */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Vitamin D Supplementation Guide</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-purple-800 mb-4">Choosing the Right Supplement</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Form:</strong> Liquid drops (easiest for babies)</li>
                    <li>• <strong>Type:</strong> Vitamin D3 (cholecalciferol) preferred</li>
                    <li>• <strong>Concentration:</strong> Check dosage per drop carefully</li>
                    <li>• <strong>Ingredients:</strong> Avoid unnecessary additives</li>
                    <li>• <strong>Brand:</strong> Choose reputable, pediatrician-recommended brands</li>
                    <li>• <strong>Certification:</strong> Look for third-party testing</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-teal-800 mb-4">Administration Tips</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• <strong>Timing:</strong> Same time daily for routine</li>
                    <li>• <strong>Method:</strong> Direct on tongue or in milk/formula</li>
                    <li>• <strong>Dosage:</strong> Follow pediatrician&apos;s exact instructions</li>
                    <li>• <strong>Storage:</strong> Cool, dry place away from light</li>
                    <li>• <strong>Tracking:</strong> Mark on calendar to ensure consistency</li>
                    <li>• <strong>Travel:</strong> Portable bottles for outings</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Dosage Guidelines by Feeding Method:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Breastfed Babies:</h5>
                    <ul className="text-blue-600 text-sm space-y-1">
                      <li>• Always need 400 IU daily supplement</li>
                      <li>• Breast milk contains minimal vitamin D</li>
                      <li>• Start within first few days of life</li>
                      <li>• Continue even with some formula feeds</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Formula-Fed Babies:</h5>
                    <ul className="text-blue-600 text-sm space-y-1">
                      <li>• Most formulas contain vitamin D</li>
                      <li>• May still need supplements if not drinking 32+ oz daily</li>
                      <li>• Check formula label for vitamin D content</li>
                      <li>• Consult pediatrician for individual needs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Seasonal Considerations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Thermometer className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Seasonal & Geographic Considerations</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Winter Months (October - March)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Challenges:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Limited daylight hours</li>
                        <li>• Weak sun intensity</li>
                        <li>• More time indoors</li>
                        <li>• Cloud cover blocks UV rays</li>
                        <li>• Clothing covers most skin</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Solutions:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Consistent vitamin D supplementation</li>
                        <li>• Indoor bright light exposure</li>
                        <li>• Vitamin D-rich foods (when age appropriate)</li>
                        <li>• Consider higher supplementation doses</li>
                        <li>• Regular pediatric checkups</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Summer Months (April - September)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Opportunities:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Longer daylight hours</li>
                        <li>• Stronger sun intensity</li>
                        <li>• More outdoor time possible</li>
                        <li>• Better vitamin D synthesis potential</li>
                        <li>• Improved mood and sleep patterns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Precautions:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Still NO direct sun for under 6 months</li>
                        <li>• Continue vitamin D supplements</li>
                        <li>• Monitor for overheating</li>
                        <li>• Seek shade during peak hours</li>
                        <li>• Ensure adequate hydration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety Precautions */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Safety Precautions & Best Practices</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-800 mb-4">Never Do This:</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• <strong>Direct sun exposure:</strong> Under 6 months old</li>
                    <li>• <strong>Sunscreen:</strong> On babies under 6 months</li>
                    <li>• <strong>Glass magnification:</strong> Sun through windows/glass</li>
                    <li>• <strong>Peak hour exposure:</strong> 10 AM - 4 PM</li>
                    <li>• <strong>Unprotected exposure:</strong> Without proper clothing/shade</li>
                    <li>• <strong>Overdose supplements:</strong> More than recommended dose</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-4">Always Do This:</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Supplement daily:</strong> 400 IU vitamin D</li>
                    <li>• <strong>Protect from sun:</strong> Shade, clothing, hats</li>
                    <li>• <strong>Monitor temperature:</strong> Watch for overheating</li>
                    <li>• <strong>Consult pediatrician:</strong> Before making changes</li>
                    <li>• <strong>Read labels:</strong> Check supplement dosages</li>
                    <li>• <strong>Track intake:</strong> Monitor daily supplementation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* When to Consult Doctor */}
            <section>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  When to Consult Your Pediatrician
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-purple-700 mb-2">Immediate Consultation:</h3>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Signs of vitamin D deficiency</li>
                      <li>• Delayed growth or development</li>
                      <li>• Bone deformities or soft bones</li>
                      <li>• Frequent infections or illness</li>
                      <li>• Sunburn or heat-related symptoms</li>
                      <li>• Questions about supplement dosage</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-purple-700 mb-2">Regular Checkups Include:</h3>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Vitamin D level testing (if needed)</li>
                      <li>• Growth and development assessment</li>
                      <li>• Supplementation review</li>
                      <li>• Seasonal advice adjustments</li>
                      <li>• Risk factor evaluation</li>
                      <li>• Family history considerations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Takeaways</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">Start Early</div>
                  <div className="text-sm text-gray-600">Begin vitamin D drops within first few days</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">Protect from Sun</div>
                  <div className="text-sm text-gray-600">No direct sun exposure under 6 months</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">Monitor Growth</div>
                  <div className="text-sm text-gray-600">Watch for deficiency signs and healthy development</div>
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
                    <li><a href="/blog/complete-newborn-care-guide" className="text-orange-600 hover:underline">Complete Newborn Care Guide</a></li>
                    <li><a href="/blog/newborn-first-week-guide" className="text-orange-600 hover:underline">First Week Newborn Guide</a></li>
                    <li><a href="/blog/first-month-newborn-guide" className="text-orange-600 hover:underline">First Month Development</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-orange-600 hover:underline">Vaccination Schedule</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Health & Development:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/baby-jaundice-prevention-treatment" className="text-orange-600 hover:underline">Baby Jaundice Guide</a></li>
                    <li><a href="/blog/pregnancy-nutrition-essentials" className="text-orange-600 hover:underline">Pregnancy Nutrition</a></li>
                    <li><a href="/baby" className="text-orange-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-orange-600 hover:underline">Due Date Calculator</a></li>
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