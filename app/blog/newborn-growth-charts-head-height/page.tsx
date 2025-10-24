import { Metadata } from 'next'
import { Ruler, TrendingUp, Target, AlertCircle, CheckCircle, BarChart3, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Newborn Growth Charts: Head, Height & Weight (0-12 Months) | EGSpect',
  description: 'Complete growth charts and tracking guide for newborn head circumference, height, and weight from birth to 12 months. Understand normal growth patterns and milestones.',
  keywords: 'newborn growth chart, baby head circumference chart, infant height weight chart, baby growth milestones, newborn development tracking, pediatric growth percentiles, baby growth calculator',
}

export default function NewbornGrowthCharts() {
  const growthData = {
    boys: {
      birth: { weight: '3.3kg (7.3lbs)', length: '49.9cm (19.6in)', head: '34.5cm (13.6in)' },
      '1month': { weight: '4.5kg (9.9lbs)', length: '54.7cm (21.5in)', head: '37.3cm (14.7in)' },
      '2months': { weight: '5.6kg (12.3lbs)', length: '58.4cm (23.0in)', head: '39.1cm (15.4in)' },
      '3months': { weight: '6.4kg (14.1lbs)', length: '61.4cm (24.2in)', head: '40.5cm (15.9in)' },
      '6months': { weight: '7.9kg (17.4lbs)', length: '67.6cm (26.6in)', head: '43.3cm (17.0in)' },
      '9months': { weight: '9.2kg (20.3lbs)', length: '72.0cm (28.3in)', head: '45.2cm (17.8in)' },
      '12months': { weight: '10.2kg (22.5lbs)', length: '76.1cm (30.0in)', head: '46.6cm (18.3in)' }
    },
    girls: {
      birth: { weight: '3.2kg (7.1lbs)', length: '49.1cm (19.3in)', head: '33.9cm (13.3in)' },
      '1month': { weight: '4.2kg (9.3lbs)', length: '53.7cm (21.1in)', head: '36.5cm (14.4in)' },
      '2months': { weight: '5.1kg (11.2lbs)', length: '57.1cm (22.5in)', head: '38.3cm (15.1in)' },
      '3months': { weight: '5.8kg (12.8lbs)', length: '59.8cm (23.5in)', head: '39.5cm (15.6in)' },
      '6months': { weight: '7.3kg (16.1lbs)', length: '65.7cm (25.9in)', head: '42.2cm (16.6in)' },
      '9months': { weight: '8.5kg (18.7lbs)', length: '70.1cm (27.6in)', head: '44.0cm (17.3in)' },
      '12months': { weight: '9.5kg (20.9lbs)', length: '74.0cm (29.1in)', head: '45.4cm (17.9in)' }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Newborn Growth Charts: Head, Height & Weight
              </h1>
            </div>
            <p className="text-blue-100 text-lg">
              Complete growth tracking guide from birth to 12 months with WHO standard percentiles
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-blue-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">5-95%</div>
              <div className="text-sm text-gray-600">Normal percentile range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Weekly</div>
              <div className="text-sm text-gray-600">First month tracking</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Monthly</div>
              <div className="text-sm text-gray-600">After first month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3 Key</div>
              <div className="text-sm text-gray-600">Measurements to track</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding Baby Growth Charts</h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Growth charts are essential tools for tracking your baby&apos;s physical development. They help identify 
                  normal growth patterns and potential concerns early. The World Health Organization (WHO) provides 
                  standard growth charts used by pediatricians worldwide.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Weight Tracking</h3>
                    <p className="text-blue-700 text-sm">Most rapid changes in first few months</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Length/Height</h3>
                    <p className="text-green-700 text-sm">Steady growth throughout first year</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Head Circumference</h3>
                    <p className="text-purple-700 text-sm">Reflects brain growth and development</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Growth Chart for Boys */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Ruler className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Growth Chart: Boys (Birth - 12 Months)</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-4">Average Measurements (50th Percentile)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="text-left p-3 text-blue-800">Age</th>
                        <th className="text-left p-3 text-blue-800">Weight</th>
                        <th className="text-left p-3 text-blue-800">Length/Height</th>
                        <th className="text-left p-3 text-blue-800">Head Circumference</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-700">
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Birth</td>
                        <td className="p-3">{growthData.boys.birth.weight}</td>
                        <td className="p-3">{growthData.boys.birth.length}</td>
                        <td className="p-3">{growthData.boys.birth.head}</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">1 Month</td>
                        <td className="p-3">{growthData.boys['1month'].weight}</td>
                        <td className="p-3">{growthData.boys['1month'].length}</td>
                        <td className="p-3">{growthData.boys['1month'].head}</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">2 Months</td>
                        <td className="p-3">{growthData.boys['2months'].weight}</td>
                        <td className="p-3">{growthData.boys['2months'].length}</td>
                        <td className="p-3">{growthData.boys['2months'].head}</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">3 Months</td>
                        <td className="p-3">{growthData.boys['3months'].weight}</td>
                        <td className="p-3">{growthData.boys['3months'].length}</td>
                        <td className="p-3">{growthData.boys['3months'].head}</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">6 Months</td>
                        <td className="p-3">{growthData.boys['6months'].weight}</td>
                        <td className="p-3">{growthData.boys['6months'].length}</td>
                        <td className="p-3">{growthData.boys['6months'].head}</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">9 Months</td>
                        <td className="p-3">{growthData.boys['9months'].weight}</td>
                        <td className="p-3">{growthData.boys['9months'].length}</td>
                        <td className="p-3">{growthData.boys['9months'].head}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">12 Months</td>
                        <td className="p-3">{growthData.boys['12months'].weight}</td>
                        <td className="p-3">{growthData.boys['12months'].length}</td>
                        <td className="p-3">{growthData.boys['12months'].head}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Growth Chart for Girls */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Ruler className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Growth Chart: Girls (Birth - 12 Months)</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4">Average Measurements (50th Percentile)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="text-left p-3 text-green-800">Age</th>
                        <th className="text-left p-3 text-green-800">Weight</th>
                        <th className="text-left p-3 text-green-800">Length/Height</th>
                        <th className="text-left p-3 text-green-800">Head Circumference</th>
                      </tr>
                    </thead>
                    <tbody className="text-green-700">
                      <tr className="border-b border-green-200">
                        <td className="p-3 font-medium">Birth</td>
                        <td className="p-3">{growthData.girls.birth.weight}</td>
                        <td className="p-3">{growthData.girls.birth.length}</td>
                        <td className="p-3">{growthData.girls.birth.head}</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="p-3 font-medium">1 Month</td>
                        <td className="p-3">{growthData.girls['1month'].weight}</td>
                        <td className="p-3">{growthData.girls['1month'].length}</td>
                        <td className="p-3">{growthData.girls['1month'].head}</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="p-3 font-medium">2 Months</td>
                        <td className="p-3">{growthData.girls['2months'].weight}</td>
                        <td className="p-3">{growthData.girls['2months'].length}</td>
                        <td className="p-3">{growthData.girls['2months'].head}</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="p-3 font-medium">3 Months</td>
                        <td className="p-3">{growthData.girls['3months'].weight}</td>
                        <td className="p-3">{growthData.girls['3months'].length}</td>
                        <td className="p-3">{growthData.girls['3months'].head}</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="p-3 font-medium">6 Months</td>
                        <td className="p-3">{growthData.girls['6months'].weight}</td>
                        <td className="p-3">{growthData.girls['6months'].length}</td>
                        <td className="p-3">{growthData.girls['6months'].head}</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="p-3 font-medium">9 Months</td>
                        <td className="p-3">{growthData.girls['9months'].weight}</td>
                        <td className="p-3">{growthData.girls['9months'].length}</td>
                        <td className="p-3">{growthData.girls['9months'].head}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">12 Months</td>
                        <td className="p-3">{growthData.girls['12months'].weight}</td>
                        <td className="p-3">{growthData.girls['12months'].length}</td>
                        <td className="p-3">{growthData.girls['12months'].head}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Understanding Percentiles */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding Growth Percentiles</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">What Percentiles Mean</h3>
                  <p className="text-purple-700 mb-4">
                    Percentiles compare your baby&apos;s measurements to other babies of the same age and sex. 
                    If your baby is in the 50th percentile for weight, it means 50% of babies weigh less 
                    and 50% weigh more.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-purple-700 mb-2">5th - 10th Percentile</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Smaller than average</li>
                        <li>• May indicate need for monitoring</li>
                        <li>• Often normal for family genetics</li>
                        <li>• Track growth velocity</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-purple-700 mb-2">25th - 75th Percentile</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Typical growth range</li>
                        <li>• Most babies fall here</li>
                        <li>• Generally considered normal</li>
                        <li>• Focus on growth pattern</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-purple-700 mb-2">85th - 95th Percentile</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Larger than average</li>
                        <li>• May indicate rapid growth</li>
                        <li>• Often normal for family genetics</li>
                        <li>• Monitor for consistent curve</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Growth Velocity is Key</h3>
                  <p className="text-yellow-700 mb-4">
                    More important than the exact percentile is whether your baby follows their own growth curve. 
                    A baby consistently in the 25th percentile who suddenly drops to the 5th percentile needs evaluation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Normal Growth Patterns:</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Follows established percentile curve</li>
                        <li>• Steady upward trend</li>
                        <li>• Temporary plateaus are normal</li>
                        <li>• Small fluctuations expected</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Concerning Patterns:</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Crossing multiple percentile lines</li>
                        <li>• Flattening growth curve</li>
                        <li>• Sudden rapid changes</li>
                        <li>• Below 3rd or above 97th percentile</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Monthly Growth Expectations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Monthly Growth Expectations</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4">0-3 Months (Rapid Growth)</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Weight gain:</strong> 150-200g per week</li>
                    <li>• <strong>Length gain:</strong> 2.5-3.5cm per month</li>
                    <li>• <strong>Head growth:</strong> 2cm per month</li>
                    <li>• <strong>Birth weight recovery:</strong> By 2 weeks</li>
                    <li>• <strong>Double birth weight:</strong> By 4-6 months</li>
                    <li>• <strong>Growth spurts:</strong> Common at 2-3 weeks, 6 weeks</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-4">3-12 Months (Steady Growth)</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Weight gain:</strong> 85-140g per week</li>
                    <li>• <strong>Length gain:</strong> 1.5-2.5cm per month</li>
                    <li>• <strong>Head growth:</strong> 0.5cm per month</li>
                    <li>• <strong>Triple birth weight:</strong> By 12 months</li>
                    <li>• <strong>Length increase:</strong> 50% by 12 months</li>
                    <li>• <strong>Growth spurts:</strong> Less frequent, more gradual</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Measuring Techniques */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Ruler className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">How to Measure Your Baby</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Weight Measurement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Best Practices:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Use same scale consistently</li>
                        <li>• Weigh at same time of day</li>
                        <li>• Baby should be naked or in clean diaper only</li>
                        <li>• Ensure scale is on flat, hard surface</li>
                        <li>• Calibrate scale regularly</li>
                        <li>• Take multiple readings for accuracy</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">When to Weigh:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Daily for first week</li>
                        <li>• Weekly for first month</li>
                        <li>• Every 2 weeks until 6 months</li>
                        <li>• Monthly after 6 months</li>
                        <li>• Before feeding for consistency</li>
                        <li>• At pediatric appointments</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Length/Height Measurement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Equipment Needed:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Baby measuring board (ideal)</li>
                        <li>• Flat ruler or measuring tape</li>
                        <li>• Two people for accuracy</li>
                        <li>• Firm, flat surface</li>
                        <li>• Proper lighting</li>
                        <li>• Calm, cooperative baby</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Technique:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Baby lying flat on back</li>
                        <li>• Head against fixed headboard</li>
                        <li>• Legs straight, feet together</li>
                        <li>• Footboard against soles of feet</li>
                        <li>• Record to nearest 0.5cm</li>
                        <li>• Take 2-3 measurements</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Head Circumference Measurement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Equipment & Technique:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Flexible measuring tape</li>
                        <li>• Place tape above eyebrows</li>
                        <li>• Around widest part of head</li>
                        <li>• Above ears, across back of head</li>
                        <li>• Tape should be snug but not tight</li>
                        <li>• Record to nearest 0.1cm</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Why It Matters:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Reflects brain growth</li>
                        <li>• Indicates neurological development</li>
                        <li>• Screens for hydrocephalus</li>
                        <li>• Monitors cranial conditions</li>
                        <li>• Important for premature babies</li>
                        <li>• Baseline for future comparisons</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Flags & When to Worry */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  When to Consult Your Pediatrician
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Immediate Concerns:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Weight loss of 10% or more from birth weight</li>
                      <li>• No weight gain after first week</li>
                      <li>• Crossing multiple percentile lines downward</li>
                      <li>• Head circumference growing too fast or slow</li>
                      <li>• Below 3rd percentile or above 97th percentile</li>
                      <li>• Poor feeding associated with poor growth</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Additional Warning Signs:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Lethargy or poor responsiveness</li>
                      <li>• Persistent vomiting affecting weight gain</li>
                      <li>• Signs of dehydration</li>
                      <li>• Developmental delays</li>
                      <li>• Family history of growth disorders</li>
                      <li>• Concerns about feeding difficulties</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Remember:</strong> Every baby grows at their own pace. Consistent growth along 
                    their own curve is more important than being in a specific percentile. Trust your 
                    instincts and don&apos;t hesitate to discuss concerns with your pediatrician.
                  </p>
                </div>
              </div>
            </section>

            {/* Growth Tracking Tools */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Growth Tracking Tools & Tips</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-4">Digital Tracking</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Baby apps:</strong> Photo documentation with measurements</li>
                    <li>• <strong>Growth charts:</strong> Online calculators and plotters</li>
                    <li>• <strong>Pediatric records:</strong> Keep digital copies</li>
                    <li>• <strong>Photo timeline:</strong> Monthly growth photos</li>
                    <li>• <strong>Milestone tracking:</strong> Combine with development</li>
                    <li>• <strong>Feeding correlation:</strong> Track feeding with growth</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4">Manual Tracking</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Growth charts:</strong> Print WHO standard charts</li>
                    <li>• <strong>Baby book:</strong> Traditional record keeping</li>
                    <li>• <strong>Calendar notes:</strong> Mark measurement dates</li>
                    <li>• <strong>Photo albums:</strong> Monthly comparison shots</li>
                    <li>• <strong>Measurement log:</strong> Simple spreadsheet</li>
                    <li>• <strong>Clothing sizes:</strong> Track as growth indicator</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Factors Affecting Growth */}
            <section className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Factors That Influence Growth</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Genetics</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Family height and build</li>
                    <li>• Growth patterns of parents</li>
                    <li>• Ethnic background</li>
                    <li>• Constitutional growth delay</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Nutrition</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Adequate caloric intake</li>
                    <li>• Quality of breast milk/formula</li>
                    <li>• Introduction of solids</li>
                    <li>• Feeding difficulties</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800 mb-2">Health Factors</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Prematurity</li>
                    <li>• Chronic conditions</li>
                    <li>• Sleep patterns</li>
                    <li>• Illness recovery</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Development Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Complete Newborn Care Guide</a></li>
                    <li><a href="/blog/first-month-newborn-guide" className="text-blue-600 hover:underline">First Month Development</a></li>
                    <li><a href="/blog/first-year-baby-development-guide" className="text-blue-600 hover:underline">First Year Development</a></li>
                    <li><a href="/blog/formula-vs-breastfeeding-guide" className="text-blue-600 hover:underline">Feeding & Growth</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Health Tools:</h3>
                  <ul className="space-y-1">
                    <li><a href="/baby" className="text-blue-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-blue-600 hover:underline">Vitamin D for Newborns</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-blue-600 hover:underline">Vaccination Schedule</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-blue-600 hover:underline">Due Date Calculator</a></li>
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