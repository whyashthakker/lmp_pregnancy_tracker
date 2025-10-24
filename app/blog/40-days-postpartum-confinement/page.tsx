import { Metadata } from 'next'
import { Home, Heart, Users, Clock, Shield, Target, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: '40 Days Postpartum Confinement: Benefits, Traditions & Modern Practice | EGSpect',
  description: 'Explore the 40-day postpartum confinement tradition, its benefits for recovery, cultural practices worldwide, and how to adapt it for modern life.',
  keywords: '40 days postpartum, postpartum confinement, sitting the month, lying-in period, postpartum recovery, cultural postpartum practices, new mother rest',
}

export default function FortyDaysPostpartumConfinement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                40 Days Postpartum Confinement
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Understanding the ancient wisdom and modern benefits of postpartum rest traditions
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">40 days</div>
              <div className="text-sm text-gray-600">Traditional period</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">6-8 weeks</div>
              <div className="text-sm text-gray-600">Medical recovery time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Family support</div>
              <div className="text-sm text-gray-600">Essential component</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Rest & bond</div>
              <div className="text-sm text-gray-600">Primary focus</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding the 40-Day Tradition</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The 40-day postpartum confinement period, known by various names worldwide (sitting the month, 
                  lying-in, quarantine), is an ancient practice recognizing that <a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">new mothers need extended recovery time</a>. 
                  This tradition emphasizes rest, nutrition, family support, and bonding during the critical 
                  postpartum healing period.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Physical Recovery</h3>
                    <p className="text-blue-700 text-sm">Time for body to heal from pregnancy and delivery</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Mental Adjustment</h3>
                    <p className="text-green-700 text-sm">Space to process the transition to motherhood</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Bonding Time</h3>
                    <p className="text-purple-700 text-sm">Uninterrupted time to connect with baby</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cultural Traditions Worldwide */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Cultural Traditions Around the World</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4">Chinese &quot;Zuoyuezi&quot; (坐月子) - Sitting the Month</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Traditional Practices:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• 30-day confinement period minimum</li>
                        <li>• Stay indoors, avoid cold and wind</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-purple-600 hover:underline">Keep body warm at all times</a></li>
                        <li>• Special warming foods and herbal soups</li>
                        <li>• Mother-in-law or family provides care</li>
                        <li>• Limited visitors and activity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Modern Adaptations:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Professional confinement centers</li>
                        <li>• Hired confinement nannies</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">Modified activity restrictions</a></li>
                        <li>• Blend of traditional and modern medicine</li>
                        <li>• Emphasis on nutritious meals</li>
                        <li>• Family support systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Indian &quot;Sutika Kaal&quot; - Sacred Postpartum Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Ayurvedic Principles:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• 40-42 day recovery period</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-purple-600 hover:underline">Daily oil massage for mother and baby</a></li>
                        <li>• Specific diet based on constitution</li>
                        <li>• Herbal medicines and tonics</li>
                        <li>• Limited physical activity</li>
                        <li>• Spiritual practices and blessings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Family Support Structure:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Mother returns to her family home</li>
                        <li>• Grandmother or elder women provide guidance</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-purple-600 hover:underline">Community support for newborn care</a></li>
                        <li>• Special ceremonies and rituals</li>
                        <li>• Focus on emotional well-being</li>
                        <li>• Gradual reintegration to normal life</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Korean &quot;Sanhujori&quot; (산후조리) - Postpartum Care</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Traditional Elements:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• 100-day recovery period (traditional)</li>
                        <li>• Seaweed soup (miyeokguk) daily</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-purple-600 hover:underline">Avoid cold foods and environments</a></li>
                        <li>• Mother-in-law provides primary care</li>
                        <li>• Limited visitors and outings</li>
                        <li>• Focus on building strength</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Modern Practices:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Postpartum care centers (sanhujoriwon)</li>
                        <li>• Professional postpartum doulas</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-purple-600 hover:underline">Modern infant care education</a></li>
                        <li>• Nutritional meal delivery services</li>
                        <li>• Blend of traditional and medical care</li>
                        <li>• Flexible time periods (2-4 weeks)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Latin American &quot;Cuarentena&quot; - The Quarantine</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Traditional Practices:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• 40-day rest period</li>
                        <li>• Family elder (often grandmother) leads care</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-purple-600 hover:underline">Limited sun exposure and fresh air</a></li>
                        <li>• Herbal teas and traditional remedies</li>
                        <li>• Special postpartum foods</li>
                        <li>• Community meal preparation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Contemporary Adaptations:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Modified activity restrictions</li>
                        <li>• Integration with medical care</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">Professional postpartum support</a></li>
                        <li>• Flexible family arrangements</li>
                        <li>• Cultural food traditions maintained</li>
                        <li>• Emphasis on mental health support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Scientific Benefits */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Scientific Benefits of Extended Postpartum Rest</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Physical Recovery Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Maternal Healing:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">Faster uterine involution and healing</a></li>
                        <li>• Better tissue repair and wound healing</li>
                        <li>• Reduced risk of postpartum complications</li>
                        <li>• Improved cardiovascular recovery</li>
                        <li>• Better hormonal regulation</li>
                        <li>• Enhanced immune system recovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Long-term Health:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Reduced chronic pain and joint issues</li>
                        <li>• Better pelvic floor recovery</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-purple-600 hover:underline">Improved temperature regulation</a></li>
                        <li>• Enhanced energy levels</li>
                        <li>• Better sleep pattern establishment</li>
                        <li>• Reduced risk of future complications</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Mental Health Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Psychological Well-being:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Reduced risk of postpartum depression</li>
                        <li>• Lower anxiety and stress levels</li>
                        <li>• Better emotional regulation</li>
                        <li>• Enhanced sense of support</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-purple-600 hover:underline">Improved bonding with baby</a></li>
                        <li>• Greater confidence in mothering</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Social Support:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Stronger family connections</li>
                        <li>• Reduced social pressure and expectations</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-purple-600 hover:underline">Time to learn baby care skills</a></li>
                        <li>• Cultural identity reinforcement</li>
                        <li>• Community support networks</li>
                        <li>• Intergenerational knowledge transfer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Breastfeeding Success</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Lactation Benefits:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Better milk supply establishment</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-purple-600 hover:underline">More time for feeding practice</a></li>
                        <li>• Reduced breastfeeding complications</li>
                        <li>• Lower stress affecting milk production</li>
                        <li>• More frequent nursing opportunities</li>
                        <li>• Professional support availability</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Baby Benefits:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Better weight gain and growth</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-purple-600 hover:underline">Improved developmental outcomes</a></li>
                        <li>• Enhanced immune system development</li>
                        <li>• Better sleep patterns</li>
                        <li>• Stronger mother-baby attachment</li>
                        <li>• Reduced crying and colic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Modern Adaptations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Adapting Traditions for Modern Life</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Flexible Duration Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">2-Week Minimum:</h4>
                      <ul className="text-teal-600 text-sm space-y-1">
                        <li>• Focus on basic recovery</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">Essential healing time</a></li>
                        <li>• Establish feeding routine</li>
                        <li>• Basic bonding period</li>
                        <li>• Medical follow-ups</li>
                        <li>• Sleep when possible</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">4-6 Week Standard:</h4>
                      <ul className="text-teal-600 text-sm space-y-1">
                        <li>• Medical clearance period</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-purple-600 hover:underline">Better physical recovery</a></li>
                        <li>• Establish routines</li>
                        <li>• More confidence building</li>
                        <li>• Extended family support</li>
                        <li>• Gradual activity increase</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">8-12 Week Extended:</h4>
                      <ul className="text-teal-600 text-sm space-y-1">
                        <li>• Comprehensive recovery</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-purple-600 hover:underline">Strong bonding establishment</a></li>
                        <li>• Mental health stabilization</li>
                        <li>• Career transition planning</li>
                        <li>• Full traditional benefits</li>
                        <li>• Optimal outcomes</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Creating Your Support System</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Family Support:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Partner involvement in planning</li>
                        <li>• Grandparent participation</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-purple-600 hover:underline">Sibling care arrangements</a></li>
                        <li>• Household management delegation</li>
                        <li>• Meal preparation support</li>
                        <li>• Visitor management protocols</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Professional Support:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Postpartum doula services</li>
                        <li>• Lactation consultant visits</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">Massage therapy sessions</a></li>
                        <li>• House cleaning services</li>
                        <li>• Meal delivery arrangements</li>
                        <li>• Healthcare provider coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Workplace and Social Adaptations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Career Planning:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Extended maternity leave negotiations</li>
                        <li>• Work-from-home arrangements</li>
                        <li>• Gradual return-to-work schedule</li>
                        <li>• <a href="/blog/when-to-plan-baby-photoshoot" className="text-purple-600 hover:underline">Professional milestone documentation</a></li>
                        <li>• Childcare planning and preparation</li>
                        <li>• Career goal reassessment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Social Boundaries:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Visitor scheduling and limits</li>
                        <li>• Social media boundary setting</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-purple-600 hover:underline">Outing planning and safety</a></li>
                        <li>• Community expectation management</li>
                        <li>• Self-advocacy skill development</li>
                        <li>• Cultural adaptation strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Practical Implementation */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Practical Implementation Guide</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Pre-Birth Planning</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">3rd Trimester Preparation:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Discuss plans with partner and family</li>
                        <li>• Research cultural practices and preferences</li>
                        <li>• <a href="/blog/pregnancy-due-date-calculator" className="text-purple-600 hover:underline">Plan around estimated due date</a></li>
                        <li>• Arrange support system logistics</li>
                        <li>• Prepare home environment</li>
                        <li>• Stock essential supplies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Financial Planning:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Budget for extended time off</li>
                        <li>• Investigate leave benefits and policies</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-purple-600 hover:underline">Plan for baby care expenses</a></li>
                        <li>• Consider support service costs</li>
                        <li>• Emergency fund preparation</li>
                        <li>• Insurance coverage review</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Daily Structure During Confinement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Core Activities:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-purple-600 hover:underline">Baby feeding and care</a></li>
                        <li>• Rest and sleep when possible</li>
                        <li>• Nutritious meal consumption</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-purple-600 hover:underline">Gentle bonding activities</a></li>
                        <li>• Light movement and stretching</li>
                        <li>• Personal hygiene and self-care</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Support Person Responsibilities:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Household management and cleaning</li>
                        <li>• Meal preparation and delivery</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-purple-600 hover:underline">Baby care assistance</a></li>
                        <li>• Visitor management</li>
                        <li>• Emotional support provision</li>
                        <li>• Medical appointment coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Nutrition and Wellness Focus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Traditional Wisdom:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Warming foods and beverages</li>
                        <li>• Nutrient-dense, easy-to-digest meals</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-purple-600 hover:underline">Herbal teas and natural remedies</a></li>
                        <li>• Avoid cold or raw foods</li>
                        <li>• Focus on iron and protein rich foods</li>
                        <li>• Adequate hydration for breastfeeding</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Modern Nutrition:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Balanced macronutrients</li>
                        <li>• Prenatal vitamin continuation</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">Anti-inflammatory foods</a></li>
                        <li>• Omega-3 fatty acids</li>
                        <li>• Fiber for digestive health</li>
                        <li>• Professional nutritional guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenges and Solutions */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Common Challenges & Solutions</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Modern Life Constraints</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Common Obstacles:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Limited family support availability</li>
                        <li>• Financial pressures to return to work</li>
                        <li>• Social expectations and pressure</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-purple-600 hover:underline">Childcare for older children</a></li>
                        <li>• Partner work demands</li>
                        <li>• Cultural misunderstanding</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Creative Solutions:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Community support networks</li>
                        <li>• Postpartum planning groups</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-purple-600 hover:underline">Professional doula services</a></li>
                        <li>• Meal train organization</li>
                        <li>• Flexible work arrangements</li>
                        <li>• Cultural education for family</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4">Balancing Tradition with Medical Care</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Integration Challenges:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Conflicting advice from family vs. doctors</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">Activity restrictions vs. medical recommendations</a></li>
                        <li>• Traditional remedies vs. modern medicine</li>
                        <li>• Cultural food restrictions vs. nutrition needs</li>
                        <li>• Visitor restrictions vs. medical visits</li>
                        <li>• Mental health support accessibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Best Practice Approaches:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Open communication with healthcare providers</li>
                        <li>• Cultural competent medical care</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-purple-600 hover:underline">Evidence-based tradition modifications</a></li>
                        <li>• Family education on medical needs</li>
                        <li>• Gradual activity progression</li>
                        <li>• Professional cultural liaisons</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Summary */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Consider the 40-Day Tradition</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Proven Benefits</div>
                  <div className="text-sm text-gray-600">Thousands of years of cultural wisdom supported by modern research</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Adaptable Practice</div>
                  <div className="text-sm text-gray-600">Can be modified to fit modern lifestyles and constraints</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Family Bonding</div>
                  <div className="text-sm text-gray-600">Strengthens family connections and support systems</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Postpartum Recovery:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/postpartum-massage-after-cesarean" className="text-purple-600 hover:underline">Cesarean Recovery Guide</a></li>
                    <li><a href="/blog/baby-massage-after-delivery" className="text-purple-600 hover:underline">Baby Massage Timing</a></li>
                    <li><a href="/blog/ideal-newborn-temperature-guide" className="text-purple-600 hover:underline">Newborn Temperature Care</a></li>
                    <li><a href="/blog/complete-newborn-care-guide" className="text-purple-600 hover:underline">Complete Newborn Care</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Baby Care & Development:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/how-to-burp-a-baby" className="text-purple-600 hover:underline">Baby Burping Guide</a></li>
                    <li><a href="/blog/newborn-growth-charts-head-height" className="text-purple-600 hover:underline">Growth Charts</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-purple-600 hover:underline">Vitamin D for Babies</a></li>
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
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