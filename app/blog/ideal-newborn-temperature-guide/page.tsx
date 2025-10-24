import { Metadata } from 'next'
import { Thermometer, AlertTriangle, CheckCircle, Clock, Shield, Target, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ideal Baby Temperature: Newborn Temperature Guide & Safety Tips | EGSpect',
  description: 'Learn about ideal newborn body temperature, how to check baby\'s temperature, signs of fever, hypothermia prevention, and when to seek medical attention.',
  keywords: 'newborn temperature, baby body temperature, infant fever, baby hypothermia, ideal baby temperature, newborn temperature range, baby temperature monitoring',
}

export default function IdealNewbornTemperatureGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Thermometer className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Ideal Newborn Temperature Guide
              </h1>
            </div>
            <p className="text-orange-100 text-lg">
              Complete guide to monitoring and maintaining your baby&apos;s body temperature safely
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-orange-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">97.7-99.5°F</div>
              <div className="text-sm text-gray-600">Normal range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">100.4°F+</div>
              <div className="text-sm text-gray-600">Fever threshold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">96°F-</div>
              <div className="text-sm text-gray-600">Too low (hypothermia)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Rectal</div>
              <div className="text-sm text-gray-600">Most accurate method</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Normal Temperature Ranges */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Normal Newborn Temperature Ranges</h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Maintaining your newborn&apos;s body temperature is crucial for their health and development. 
                  Babies have immature temperature regulation systems and depend on their environment 
                  and caregivers to stay warm and comfortable.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Normal Range</h3>
                    <p className="text-green-700 text-sm">97.7°F - 99.5°F (36.5°C - 37.5°C)</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">Low-Grade Fever</h3>
                    <p className="text-yellow-700 text-sm">99.5°F - 100.3°F (37.5°C - 37.9°C)</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Fever</h3>
                    <p className="text-red-700 text-sm">100.4°F+ (38°C+)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Temperature by Measurement Method */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Thermometer className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Temperature by Measurement Method</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="text-left p-3 text-blue-800">Method</th>
                        <th className="text-left p-3 text-blue-800">Normal Range</th>
                        <th className="text-left p-3 text-blue-800">Fever</th>
                        <th className="text-left p-3 text-blue-800">Age Recommendation</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-700">
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Rectal</td>
                        <td className="p-3">97.9°F - 100.3°F</td>
                        <td className="p-3">100.4°F or higher</td>
                        <td className="p-3">Birth - 3 years (most accurate)</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Oral</td>
                        <td className="p-3">97.6°F - 99.6°F</td>
                        <td className="p-3">100°F or higher</td>
                        <td className="p-3">4+ years (not for newborns)</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Axillary (Armpit)</td>
                        <td className="p-3">96.6°F - 98.0°F</td>
                        <td className="p-3">99°F or higher</td>
                        <td className="p-3">All ages (least accurate)</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Temporal (Forehead)</td>
                        <td className="p-3">96.4°F - 100.4°F</td>
                        <td className="p-3">100.4°F or higher</td>
                        <td className="p-3">3+ months</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tympanic (Ear)</td>
                        <td className="p-3">96.4°F - 100.4°F</td>
                        <td className="p-3">100.4°F or higher</td>
                        <td className="p-3">6+ months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* How to Take Temperature */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">How to Take Your Baby&apos;s Temperature</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Rectal Temperature (Most Accurate)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Equipment Needed:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Digital rectal thermometer</li>
                        <li>• Petroleum jelly (lubricant)</li>
                        <li>• Soft towel or blanket</li>
                        <li>• Tissues or wipes</li>
                        <li>• Alcohol for cleaning</li>
                        <li>• Watch or timer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Step-by-Step Process:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Wash hands and clean thermometer</li>
                        <li>• Apply small amount of lubricant to tip</li>
                        <li>• Lay baby on back or side</li>
                        <li>• Insert ½ inch (1.3 cm) into rectum</li>
                        <li>• Hold steady for 1-2 minutes until beep</li>
                        <li>• Remove gently and read temperature</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Safety tip:</strong> Never force the thermometer. If you feel resistance, 
                      stop and try again gently. Consider axillary method if rectal is too difficult.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Axillary Temperature (Armpit)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">When to Use:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• When rectal is not possible</li>
                        <li>• For routine temperature checks</li>
                        <li>• Less invasive alternative</li>
                        <li>• If baby is very fussy</li>
                        <li>• Parent comfort preference</li>
                        <li>• Regular monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Technique:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Place tip in center of dry armpit</li>
                        <li>• Fold arm down against body</li>
                        <li>• Hold arm against side firmly</li>
                        <li>• Wait for thermometer beep</li>
                        <li>• Add 1°F to get core temperature</li>
                        <li>• Record time and method used</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Temporal (Forehead) Temperature</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Advantages:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Quick and non-invasive</li>
                        <li>• No waking sleeping baby</li>
                        <li>• Easy to use</li>
                        <li>• Hygienic (no probe covers needed)</li>
                        <li>• Comfortable for baby</li>
                        <li>• Good for frequent checks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Proper Technique:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Ensure forehead is clean and dry</li>
                        <li>• Place probe on center of forehead</li>
                        <li>• Slide across to hairline</li>
                        <li>• Keep probe in contact with skin</li>
                        <li>• Follow manufacturer instructions</li>
                        <li>• Note limitations in accuracy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fever in Newborns */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Fever in Newborns: Emergency Situations
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">ANY Fever in Baby Under 3 Months = Medical Emergency</h3>
                    <p className="text-red-700 text-sm">
                      Rectal temperature of 100.4°F (38°C) or higher in a baby under 3 months old 
                      requires immediate medical attention, even if the baby appears well.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Why Newborn Fever is Serious:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Immature immune system</li>
                        <li>• Risk of serious bacterial infection</li>
                        <li>• Rapid progression possible</li>
                        <li>• Limited ability to fight infection</li>
                        <li>• May indicate meningitis or sepsis</li>
                        <li>• Subtle symptoms in young babies</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Immediate Actions:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Call pediatrician immediately</li>
                        <li>• Go to emergency room if instructed</li>
                        <li>• Do NOT give fever reducers first</li>
                        <li>• Remove excess clothing/blankets</li>
                        <li>• Offer frequent feeding</li>
                        <li>• Monitor for other symptoms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hypothermia Prevention */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Preventing Hypothermia in Newborns</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Signs of Low Body Temperature</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Physical Signs:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Cold hands, feet, and chest</li>
                        <li>• Pale or bluish skin color</li>
                        <li>• Slow, shallow breathing</li>
                        <li>• Lethargy or decreased activity</li>
                        <li>• Poor feeding</li>
                        <li>• Weak cry or no crying</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Behavioral Changes:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Excessive sleepiness</li>
                        <li>• Difficulty waking for feeds</li>
                        <li>• Decreased responsiveness</li>
                        <li>• Poor muscle tone</li>
                        <li>• Reduced interest in surroundings</li>
                        <li>• Changes in normal patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Keeping Baby Warm</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Clothing & Layering:</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Dress in layers</li>
                        <li>• Cover head with hat</li>
                        <li>• Use mittens and socks</li>
                        <li>• Choose breathable fabrics</li>
                        <li>• Ensure proper fit</li>
                        <li>• Layer rule: one more than adult</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Environment:</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Keep room 68-70°F (20-21°C)</li>
                        <li>• Avoid drafts</li>
                        <li>• Use appropriate bedding</li>
                        <li>• Warm bath water properly</li>
                        <li>• Pre-warm changing area</li>
                        <li>• Check room temperature regularly</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Skin-to-Skin Contact:</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Practice kangaroo care</li>
                        <li>• Direct chest contact</li>
                        <li>• Cover both with blanket</li>
                        <li>• Helps regulate temperature</li>
                        <li>• Promotes bonding</li>
                        <li>• Supports breastfeeding</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Overheating Prevention */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Preventing Overheating</h2>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-4">Signs of Overheating:</h3>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Sweating:</strong> Especially on head and neck</li>
                      <li>• <strong>Hot skin:</strong> Warm or hot to touch</li>
                      <li>• <strong>Rapid breathing:</strong> Faster than normal</li>
                      <li>• <strong>Flushed skin:</strong> Red or pink appearance</li>
                      <li>• <strong>Restlessness:</strong> Increased fussiness</li>
                      <li>• <strong>Lethargy:</strong> Unusual sleepiness</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-4">Prevention Strategies:</h3>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Appropriate clothing:</strong> Not too many layers</li>
                      <li>• <strong>Room ventilation:</strong> Good air circulation</li>
                      <li>• <strong>Car safety:</strong> Never leave in hot car</li>
                      <li>• <strong>Sun protection:</strong> Avoid direct sunlight</li>
                      <li>• <strong>Monitor closely:</strong> Check regularly</li>
                      <li>• <strong>Adjust environment:</strong> Reduce room temperature</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    <strong>SIDS Risk:</strong> Overheating is associated with increased SIDS risk. 
                    Keep baby comfortably warm but not hot. Use sleep sacks instead of blankets.
                  </p>
                </div>
              </div>
            </section>

            {/* When to Call Doctor */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-800">When to Contact Your Pediatrician</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4">Call Immediately (Emergency):</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-1 text-red-700">
                        <li>• Rectal temperature 100.4°F+ (under 3 months)</li>
                        <li>• Temperature below 96°F rectally</li>
                        <li>• Difficulty breathing</li>
                        <li>• Extreme lethargy</li>
                        <li>• Won&apos;t wake for feeding</li>
                        <li>• Signs of dehydration</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1 text-red-700">
                        <li>• Persistent vomiting</li>
                        <li>• Unusual irritability</li>
                        <li>• Skin color changes (blue, gray, pale)</li>
                        <li>• Seizures or convulsions</li>
                        <li>• Weak or high-pitched crying</li>
                        <li>• Any concerning changes</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Call During Office Hours:</h3>
                  <ul className="space-y-1 text-yellow-700 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>• Questions about temperature readings</li>
                    <li>• Concerns about room temperature</li>
                    <li>• Thermometer technique questions</li>
                    <li>• General temperature management</li>
                    <li>• Clothing and sleep environment</li>
                    <li>• Routine health maintenance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Temperature Monitoring Schedule */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Temperature Monitoring Guidelines</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-800 mb-4">First Week Home:</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Frequency:</strong> Twice daily</li>
                      <li>• <strong>Times:</strong> Morning and evening</li>
                      <li>• <strong>Method:</strong> Rectal preferred</li>
                      <li>• <strong>Record:</strong> Keep temperature log</li>
                      <li>• <strong>Learn:</strong> Your baby&apos;s normal range</li>
                      <li>• <strong>Practice:</strong> Temperature-taking technique</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-4">Routine Monitoring:</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>When well:</strong> Weekly or as needed</li>
                      <li>• <strong>Before vaccines:</strong> Baseline temperature</li>
                      <li>• <strong>If fussy:</strong> Check for fever</li>
                      <li>• <strong>Seasonal changes:</strong> More frequent checks</li>
                      <li>• <strong>Travel:</strong> Monitor in new environments</li>
                      <li>• <strong>Family illness:</strong> Increased vigilance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-4">When Sick:</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Frequency:</strong> Every 4-6 hours</li>
                      <li>• <strong>Record:</strong> Time, method, reading</li>
                      <li>• <strong>Trend:</strong> Watch for patterns</li>
                      <li>• <strong>Medication:</strong> Before and after doses</li>
                      <li>• <strong>Night checks:</strong> If advised by doctor</li>
                      <li>• <strong>Doctor visits:</strong> Bring temperature log</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Temperature Management Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">Know Normal Range</div>
                  <div className="text-sm text-gray-600">97.7°F - 99.5°F for newborns</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">Use Rectal Method</div>
                  <div className="text-sm text-gray-600">Most accurate for babies under 3 months</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">Seek Help Early</div>
                  <div className="text-sm text-gray-600">Any fever in newborn needs immediate attention</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Newborn Health:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-orange-600 hover:underline">Complete Newborn Care</a></li>
                    <li><a href="/blog/newborn-first-week-guide" className="text-orange-600 hover:underline">First Week Guide</a></li>
                    <li><a href="/blog/newborn-growth-charts-head-height" className="text-orange-600 hover:underline">Growth Charts</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-orange-600 hover:underline">Vitamin D & Sun Safety</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Safety & Care:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/baby-massage-after-delivery" className="text-orange-600 hover:underline">Baby Massage Guide</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-orange-600 hover:underline">Vaccination Schedule</a></li>
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