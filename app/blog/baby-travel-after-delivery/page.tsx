import { Metadata } from 'next'
import { Plane, Car, Shield, Baby, AlertTriangle, CheckCircle, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'When Can Baby Travel After Delivery: Safe Travel Guidelines | EGSpect',
  description: 'Complete guide to traveling with newborns including when it\'s safe to travel, car safety, air travel guidelines, and tips for different types of trips.',
  keywords: 'newborn travel safety, baby travel after birth, infant car travel, newborn air travel, baby travel guidelines, when can baby travel, infant travel safety',
}

export default function BabyTravelAfterDelivery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Plane className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                When Can Baby Travel After Delivery?
              </h1>
            </div>
            <p className="text-blue-100 text-lg">
              Safe travel guidelines and timing for newborns and infants
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-blue-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">48 hours</div>
              <div className="text-sm text-gray-600">Minimum for car travel</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2-6 weeks</div>
              <div className="text-sm text-gray-600">Air travel timeline</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Doctor approval</div>
              <div className="text-sm text-gray-600">Always required first</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Car seat</div>
              <div className="text-sm text-gray-600">Essential for all trips</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Baby className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding Newborn Travel Safety</h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Traveling with a newborn requires careful planning and consideration of your baby&apos;s health, 
                  safety, and developmental needs. While some travel may be necessary or desired, understanding 
                  the optimal timing and safety requirements helps ensure <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">proper newborn care</a> 
                  during any journey.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Safety First</h3>
                    <p className="text-blue-700 text-sm">Proper equipment and timing are essential</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Individual Considerations</h3>
                    <p className="text-green-700 text-sm">Each baby&apos;s readiness varies based on health</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Medical Clearance</h3>
                    <p className="text-purple-700 text-sm">Always consult healthcare provider first</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Car Travel Guidelines */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Car className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Car Travel with Newborns</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">When Car Travel is Safe</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Minimum Timeline:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <strong>48 hours minimum:</strong> For healthy, full-term babies</li>
                        <li>• <strong>First trip home:</strong> From hospital (usually 24-48 hours)</li>
                        <li>• <strong>Short local trips:</strong> <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Once temperature regulation stable</a></li>
                        <li>• <strong>Doctor visits:</strong> As soon as medically necessary</li>
                        <li>• <strong>Emergency travel:</strong> When required with medical approval</li>
                        <li>• <strong>Routine outings:</strong> After first week if baby is healthy</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Special Considerations:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 hover:underline">Premature babies need longer wait</a></li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-blue-600 hover:underline">C-section recovery affects mother&apos;s comfort</a></li>
                        <li>• Medical complications require clearance</li>
                        <li>• Feeding schedule coordination needed</li>
                        <li>• Weather and season considerations</li>
                        <li>• Family health status assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Car Seat Safety Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Essential Equipment:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• <strong>Infant car seat:</strong> Rear-facing, properly installed</li>
                        <li>• <strong>Base installation:</strong> Professional inspection recommended</li>
                        <li>• <strong>Proper positioning:</strong> 45-degree angle for newborns</li>
                        <li>• <strong>Harness fit:</strong> Snug but not too tight</li>
                        <li>• <strong>Chest clip position:</strong> At armpit level</li>
                        <li>• <strong>No aftermarket products:</strong> Only manufacturer accessories</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Safety Guidelines:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• <strong>Never leave baby alone</strong> in car</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Monitor temperature in vehicle</a></li>
                        <li>• <strong>Frequent stops:</strong> Every 2 hours for feeding/checking</li>
                        <li>• <strong>Adult supervision:</strong> Someone in back seat for long trips</li>
                        <li>• <strong>Emergency kit:</strong> Baby supplies and medical info</li>
                        <li>• <strong>Mirror setup:</strong> To monitor baby while driving</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Trip Duration Guidelines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Short Trips (Under 30 min):</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Local errands and appointments</li>
                        <li>• <a href="/blog/when-to-plan-baby-photoshoot" className="text-blue-600 hover:underline">Photography sessions</a></li>
                        <li>• Family visits nearby</li>
                        <li>• Shopping for essentials</li>
                        <li>• Medical appointments</li>
                        <li>• Generally safe after first week</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Medium Trips (30min-2hrs):</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Extended family visits</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Specialist appointments</a></li>
                        <li>• Day trips to nearby cities</li>
                        <li>• Plan stops every hour</li>
                        <li>• Consider after 2-4 weeks</li>
                        <li>• Bring full baby supplies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Long Trips (2+ hours):</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Wait until 4-6 weeks minimum</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Plan around feeding schedule</a></li>
                        <li>• Frequent stops every 1-2 hours</li>
                        <li>• Overnight planning may be needed</li>
                        <li>• Consider destination facilities</li>
                        <li>• Medical emergency planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Air Travel Guidelines */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Plane className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Air Travel with Newborns</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Age Requirements and Recommendations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Airline Policies:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• <strong>Most airlines:</strong> Allow travel after 2-7 days</li>
                        <li>• <strong>International flights:</strong> May require 2+ weeks</li>
                        <li>• <strong>Documentation:</strong> Birth certificate required</li>
                        <li>• <strong>Medical clearance:</strong> May be required for very young babies</li>
                        <li>• <strong>Seat policies:</strong> Under 2 can be lap infants</li>
                        <li>• <strong>Check specific airline rules</strong></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Medical Recommendations:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• <strong>Pediatrician advice:</strong> Wait 4-6 weeks if possible</li>
                        <li>• <strong>Immune system:</strong> <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-blue-600 hover:underline">Still developing in early weeks</a></li>
                        <li>• <strong>Ear pressure:</strong> Babies adapt better after 6-8 weeks</li>
                        <li>• <strong>Feeding coordination:</strong> Easier with established routines</li>
                        <li>• <strong>Emergency considerations:</strong> Medical care availability at destination</li>
                        <li>• <strong>Vaccination status:</strong> Consider destination requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Air Travel Safety Considerations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Health Risks:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• <strong>Exposure to germs:</strong> Crowded, enclosed environment</li>
                        <li>• <strong>Cabin pressure changes:</strong> May affect baby&apos;s ears</li>
                        <li>• <strong>Dry air:</strong> <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Can cause dehydration</a></li>
                        <li>• <strong>Disrupted sleep:</strong> Noise and schedule changes</li>
                        <li>• <strong>Limited medical care:</strong> During flight emergencies</li>
                        <li>• <strong>Stress on parents:</strong> <a href="/blog/postpartum-massage-after-cesarean" className="text-blue-600 hover:underline">Especially during recovery period</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Safety Measures:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• <strong>Hand hygiene:</strong> Frequent washing/sanitizing</li>
                        <li>• <strong>Feeding during takeoff/landing:</strong> <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Helps with ear pressure</a></li>
                        <li>• <strong>Car seat on plane:</strong> Safest option if buying seat</li>
                        <li>• <strong>Medical kit:</strong> Baby supplies and medications</li>
                        <li>• <strong>Pediatrician contact:</strong> Accessible during travel</li>
                        <li>• <strong>Travel insurance:</strong> Consider medical coverage</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Flight Booking Considerations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Timing and Logistics:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• <strong>Flight times:</strong> Consider baby&apos;s natural schedule</li>
                        <li>• <strong>Direct flights:</strong> Minimize travel time and connections</li>
                        <li>• <strong>Seat selection:</strong> Aisle seats for easier movement</li>
                        <li>• <strong>Bulkhead seats:</strong> More space but no under-seat storage</li>
                        <li>• <strong>Early boarding:</strong> Extra time for setup</li>
                        <li>• <strong>Travel documents:</strong> <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Birth certificate and ID</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Equipment and Supplies:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• <strong>Diaper bag:</strong> Extra supplies for delays</li>
                        <li>• <strong>Formula/bottles:</strong> More than needed</li>
                        <li>• <strong>Change of clothes:</strong> For baby and parents</li>
                        <li>• <strong>Comfort items:</strong> Pacifiers, small blanket</li>
                        <li>• <strong>Stroller gate-check:</strong> Free on most airlines</li>
                        <li>• <strong>Carrier/wrap:</strong> <a href="/blog/baby-massage-after-delivery" className="text-blue-600 hover:underline">For hands-free comfort</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Circumstances */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Special Circumstances Requiring Delayed Travel
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Premature Babies:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Wait until original due date or later</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 hover:underline">Ensure adequate weight gain</a></li>
                        <li>• Respiratory system fully developed</li>
                        <li>• Temperature regulation stable</li>
                        <li>• No ongoing medical issues</li>
                        <li>• Pediatrician clearance required</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Medical Complications:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Heart conditions or breathing issues</li>
                        <li>• <a href="/blog/newborn-hiccups-guide" className="text-blue-600 hover:underline">Feeding difficulties or reflux</a></li>
                        <li>• Ongoing medical treatments</li>
                        <li>• Recent hospitalizations</li>
                        <li>• Immune system concerns</li>
                        <li>• Any unresolved health issues</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Maternal Recovery:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-blue-600 hover:underline">C-section recovery complications</a></li>
                        <li>• Postpartum depression or anxiety</li>
                        <li>• Breastfeeding establishment issues</li>
                        <li>• Physical limitations affecting travel</li>
                        <li>• <a href="/blog/40-days-postpartum-confinement" className="text-blue-600 hover:underline">Need for extended recovery period</a></li>
                        <li>• Partner support limitations</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Environmental Factors:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Disease outbreaks at destination</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Extreme weather conditions</a></li>
                        <li>• Limited medical care availability</li>
                        <li>• High altitude destinations</li>
                        <li>• International travel requirements</li>
                        <li>• Family illness or exposure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Travel Preparation Checklist */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Travel Preparation Checklist</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Pre-Travel Planning</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Medical Preparation:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Pediatrician consultation and clearance</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Ensure all newborn screenings complete</a></li>
                        <li>• Vaccination status review</li>
                        <li>• Medical records and emergency contacts</li>
                        <li>• Prescription medications if needed</li>
                        <li>• Travel insurance consideration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Logistical Planning:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Research destination medical facilities</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Climate and weather considerations</a></li>
                        <li>• Accommodation baby-proofing needs</li>
                        <li>• Transportation arrangements</li>
                        <li>• Emergency contact information</li>
                        <li>• Travel timeline flexibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Packing Essentials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Feeding Supplies:</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Extra bottles and formula</a></li>
                        <li>• Breastfeeding supplies</li>
                        <li>• Burp cloths and bibs</li>
                        <li>• Bottle cleaning supplies</li>
                        <li>• Pacifiers</li>
                        <li>• Water for formula mixing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Comfort & Care:</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Extra diapers and wipes</li>
                        <li>• <a href="/blog/umbilical-cord-care-guide" className="text-blue-600 hover:underline">Gentle cleaning supplies</a></li>
                        <li>• Change of clothes (multiple)</li>
                        <li>• Blankets and swaddles</li>
                        <li>• Diaper rash cream</li>
                        <li>• Thermometer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Safety & Documentation:</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Car seat and base</li>
                        <li>• <a href="/blog/when-to-plan-baby-photoshoot" className="text-blue-600 hover:underline">Birth certificate and ID</a></li>
                        <li>• Medical records</li>
                        <li>• Emergency contact list</li>
                        <li>• Insurance information</li>
                        <li>• First aid supplies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* International Travel Considerations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">International Travel with Newborns</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Additional Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Documentation:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Passport (required even for infants)</li>
                        <li>• Visa requirements for destination</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Certified birth certificate</a></li>
                        <li>• Parental consent forms if traveling alone</li>
                        <li>• Medical clearance letters</li>
                        <li>• Travel insurance documentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Health Considerations:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Vaccination requirements for country</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-blue-600 hover:underline">Disease risk assessment</a></li>
                        <li>• Medical care quality at destination</li>
                        <li>• Time zone adjustment planning</li>
                        <li>• Climate adaptation preparation</li>
                        <li>• Emergency evacuation insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Recommended Minimum Ages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Developed Countries:</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• 6-8 weeks minimum</li>
                        <li>• Good medical care available</li>
                        <li>• Similar hygiene standards</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-blue-600 hover:underline">Consider parent recovery time</a></li>
                        <li>• Moderate climate preferred</li>
                        <li>• Direct flight access ideal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Developing Countries:</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• 3-6 months minimum</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 hover:underline">Wait for more mature immune system</a></li>
                        <li>• Consider vaccination schedule</li>
                        <li>• Research medical facilities</li>
                        <li>• Water and food safety concerns</li>
                        <li>• Disease risk evaluation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">High-Risk Areas:</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• 6+ months recommended</li>
                        <li>• Disease outbreaks</li>
                        <li>• Limited medical care</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Extreme climates</a></li>
                        <li>• Political instability</li>
                        <li>• Consider postponing travel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Emergency Preparedness */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-800">Emergency Preparedness</h2>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-red-800 mb-4">Emergency Kit Contents:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• <strong>Medical information:</strong> Allergies, medications, conditions</li>
                      <li>• <strong>Pediatrician contact:</strong> <a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">24/7 phone number</a></li>
                      <li>• <strong>Local emergency numbers:</strong> At destination</li>
                      <li>• <strong>Insurance cards:</strong> Medical and travel coverage</li>
                      <li>• <strong>Medications:</strong> <a href="/blog/newborn-hiccups-guide" className="text-blue-600 hover:underline">Any prescribed treatments</a></li>
                      <li>• <strong>First aid supplies:</strong> Thermometer, basic care items</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-4">Emergency Action Plan:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• <strong>Know location</strong> of nearest hospital</li>
                      <li>• <strong>Have backup transportation</strong> arranged</li>
                      <li>• <strong>Emergency contact chain:</strong> Family notification plan</li>
                      <li>• <strong>Travel insurance claims:</strong> Process understanding</li>
                      <li>• <strong>Embassy contacts:</strong> For international travel</li>
                      <li>• <strong>Return home plans:</strong> <a href="/blog/40-days-postpartum-confinement" className="text-blue-600 hover:underline">If emergency arises</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Guidelines Summary */}
            <section className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Travel Safety Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">Doctor First</div>
                  <div className="text-sm text-gray-600">Always get medical clearance before any travel</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">Safety Equipment</div>
                  <div className="text-sm text-gray-600">Proper car seats and travel gear essential</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">Flexible Planning</div>
                  <div className="text-sm text-gray-600">Baby&apos;s needs come first - adjust plans accordingly</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Newborn Care & Safety:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Complete Newborn Care Guide</a></li>
                    <li><a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 hover:underline">Temperature Safety</a></li>
                    <li><a href="/blog/how-to-burp-a-baby" className="text-blue-600 hover:underline">Feeding & Burping Guide</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-blue-600 hover:underline">Sun Safety for Babies</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Recovery & Development:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/postpartum-massage-after-cesarean" className="text-blue-600 hover:underline">Postpartum Recovery</a></li>
                    <li><a href="/blog/40-days-postpartum-confinement" className="text-blue-600 hover:underline">Extended Recovery Benefits</a></li>
                    <li><a href="/blog/newborn-growth-charts-head-height" className="text-blue-600 hover:underline">Growth & Development</a></li>
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