import { Metadata } from 'next'
import { Stethoscope, AlertTriangle, CheckCircle, Clock, Shield, Target, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is Vacuum Delivery: Procedure, Risks & Recovery Guide | EGSpect',
  description: 'Complete guide to vacuum-assisted delivery including when it\'s used, procedure steps, risks, benefits, and recovery. Learn about vacuum extraction during childbirth.',
  keywords: 'vacuum delivery, vacuum extraction, assisted delivery, vacuum birth, forceps vs vacuum, instrumental delivery, vacuum assisted birth, childbirth complications',
}

export default function WhatIsVacuumDelivery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                What is Vacuum Delivery?
              </h1>
            </div>
            <p className="text-blue-100 text-lg">
              Complete guide to vacuum-assisted delivery: procedure, indications, and recovery
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-blue-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3-5%</div>
              <div className="text-sm text-gray-600">Of all deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">15-30 min</div>
              <div className="text-sm text-gray-600">Procedure duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">85-95%</div>
              <div className="text-sm text-gray-600">Success rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2nd stage</div>
              <div className="text-sm text-gray-600">Of labor</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding Vacuum Delivery</h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Vacuum delivery, also called vacuum extraction or vacuum-assisted delivery, is a medical 
                  procedure used to help deliver a baby during the second stage of labor. It involves using 
                  a vacuum device attached to the baby&apos;s head to gently guide them through the birth canal 
                  when complications arise.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Medical Assistance</h3>
                    <p className="text-blue-700 text-sm">Used when natural delivery needs support</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Alternative to C-Section</h3>
                    <p className="text-green-700 text-sm">Can avoid surgical delivery in many cases</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Controlled Procedure</h3>
                    <p className="text-purple-700 text-sm">Performed by trained medical professionals</p>
                  </div>
                </div>
              </div>
            </section>

            {/* When is Vacuum Delivery Used */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">When is Vacuum Delivery Used?</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Maternal Indications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Exhaustion & Inability to Push:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Prolonged second stage of labor</li>
                        <li>• Maternal exhaustion from long labor</li>
                        <li>• Inability to push effectively</li>
                        <li>• Medical conditions preventing pushing</li>
                        <li>• Effects of epidural limiting sensation</li>
                        <li>• Previous injury affecting pushing ability</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Medical Complications:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• High blood pressure (preeclampsia)</li>
                        <li>• Heart conditions</li>
                        <li>• Severe asthma or breathing problems</li>
                        <li>• Previous retinal detachment</li>
                        <li>• Spinal cord injuries</li>
                        <li>• Doctor&apos;s advice to avoid prolonged pushing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4">Fetal Indications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Fetal Distress:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Abnormal heart rate patterns</li>
                        <li>• Signs of decreased oxygen</li>
                        <li>• Meconium-stained amniotic fluid</li>
                        <li>• Cord compression</li>
                        <li>• Need for immediate delivery</li>
                        <li>• Concerning fetal monitoring results</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Position & Progress Issues:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Baby&apos;s head not descending</li>
                        <li>• Abnormal positioning (malposition)</li>
                        <li>• Lack of rotation during descent</li>
                        <li>• Baby stuck in birth canal</li>
                        <li>• Prolonged crowning without delivery</li>
                        <li>• Failure to progress in second stage</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Labor Progress Issues</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Time Limits:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Second stage longer than 3 hours (first baby)</li>
                        <li>• Second stage longer than 2 hours (subsequent babies)</li>
                        <li>• With epidural: add 1 hour to limits</li>
                        <li>• Lack of progress for 1+ hours</li>
                        <li>• Ineffective pushing for extended period</li>
                        <li>• Medical need to expedite delivery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Emergency Situations:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Sudden maternal deterioration</li>
                        <li>• Placental abruption</li>
                        <li>• Cord prolapse</li>
                        <li>• Severe preeclampsia/eclampsia</li>
                        <li>• Maternal infection</li>
                        <li>• Other obstetric emergencies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Procedure Steps */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Vacuum Delivery Procedure</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4">Step-by-Step Process</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Assessment & Consent</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Doctor evaluates need for vacuum assistance</li>
                        <li>• Explains procedure and obtains consent</li>
                        <li>• Checks baby&apos;s position and station</li>
                        <li>• Ensures cervix is fully dilated</li>
                        <li>• Confirms membranes have ruptured</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Preparation</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Administer local anesthesia if needed</li>
                        <li>• Prepare vacuum device and check equipment</li>
                        <li>• Position mother appropriately</li>
                        <li>• Ensure surgical instruments are available</li>
                        <li>• Have pediatric team ready if needed</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Cup Placement</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Place vacuum cup on baby&apos;s head</li>
                        <li>• Position over the &quot;flexion point&quot;</li>
                        <li>• Check for proper placement</li>
                        <li>• Ensure no maternal tissue is caught</li>
                        <li>• Verify symmetric placement</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Creating Vacuum</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Gradually increase suction pressure</li>
                        <li>• Reach appropriate vacuum level</li>
                        <li>• Check cup placement again</li>
                        <li>• Ensure secure attachment</li>
                        <li>• Monitor pressure gauge</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Delivery Assistance</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Apply gentle traction during contractions</li>
                        <li>• Guide baby&apos;s head through birth canal</li>
                        <li>• Mother continues to push when able</li>
                        <li>• Monitor for cup displacement</li>
                        <li>• Adjust direction as baby rotates</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Completion</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Release vacuum once head is delivered</li>
                        <li>• Complete delivery of shoulders and body</li>
                        <li>• Assess baby immediately</li>
                        <li>• Check for any complications</li>
                        <li>• Provide immediate newborn care</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Vacuum Devices */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Types of Vacuum Devices</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-4">Soft Cup (Silicone)</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Material:</strong> Soft silicone or rubber</li>
                    <li>• <strong>Advantages:</strong> Less trauma to baby&apos;s scalp</li>
                    <li>• <strong>Best for:</strong> Routine assisted deliveries</li>
                    <li>• <strong>Comfort:</strong> More comfortable for baby</li>
                    <li>• <strong>Usage:</strong> Most commonly used type</li>
                    <li>• <strong>Flexibility:</strong> Conforms to baby&apos;s head shape</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-800 mb-4">Hard Cup (Metal)</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Material:</strong> Rigid metal or hard plastic</li>
                    <li>• <strong>Advantages:</strong> Stronger grip, less likely to detach</li>
                    <li>• <strong>Best for:</strong> Difficult extractions</li>
                    <li>• <strong>Effectiveness:</strong> Better traction force</li>
                    <li>• <strong>Usage:</strong> When soft cup fails</li>
                    <li>• <strong>Considerations:</strong> Higher risk of scalp injury</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risks and Complications */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Risks and Complications
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">For Baby:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• <strong>Scalp injury:</strong> Bruising, swelling (caput succedaneum)</li>
                        <li>• <strong>Cephalohematoma:</strong> Blood collection under scalp</li>
                        <li>• <strong>Lacerations:</strong> Minor cuts on scalp</li>
                        <li>• <strong>Jaundice:</strong> From bruising and blood breakdown</li>
                        <li>• <strong>Retinal hemorrhage:</strong> Usually resolves on its own</li>
                        <li>• <strong>Rare:</strong> Skull fracture, nerve injury</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">For Mother:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• <strong>Vaginal tears:</strong> Increased risk of episiotomy</li>
                        <li>• <strong>Cervical lacerations:</strong> Tears in cervix</li>
                        <li>• <strong>Bladder injury:</strong> Rare but possible</li>
                        <li>• <strong>Increased bleeding:</strong> From tissue trauma</li>
                        <li>• <strong>Infection risk:</strong> From prolonged procedure</li>
                        <li>• <strong>Pain:</strong> During and after delivery</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Important:</strong> Most complications are minor and resolve within a few days 
                      to weeks. Serious complications are rare when the procedure is performed by experienced 
                      professionals following proper protocols.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Rates & Outcomes */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Success Rates & Outcomes</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">85-95%</div>
                    <div className="text-green-700 font-medium mb-1">Success Rate</div>
                    <div className="text-green-600 text-sm">Successful vaginal delivery with vacuum assistance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5-15%</div>
                    <div className="text-blue-700 font-medium mb-1">Conversion to C-Section</div>
                    <div className="text-blue-600 text-sm">When vacuum delivery is unsuccessful</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">&lt;5%</div>
                    <div className="text-purple-700 font-medium mb-1">Serious Complications</div>
                    <div className="text-purple-600 text-sm">Rate of major complications for mother or baby</div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Factors for Success:</h3>
                    <ul className="space-y-1 text-green-600 text-sm">
                      <li>• Proper patient selection</li>
                      <li>• Experienced operator</li>
                      <li>• Appropriate timing</li>
                      <li>• Correct technique</li>
                      <li>• Good maternal cooperation</li>
                      <li>• Favorable fetal position</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Long-term Outcomes:</h3>
                    <ul className="space-y-1 text-green-600 text-sm">
                      <li>• No increased risk of developmental delays</li>
                      <li>• Normal neurological development</li>
                      <li>• Temporary scalp changes resolve</li>
                      <li>• No impact on future pregnancies</li>
                      <li>• Similar outcomes to normal delivery</li>
                      <li>• Successful breastfeeding initiation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Vacuum vs Forceps */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Vacuum vs. Forceps Delivery</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="text-left p-3 text-blue-800">Aspect</th>
                        <th className="text-left p-3 text-blue-800">Vacuum Extraction</th>
                        <th className="text-left p-3 text-blue-800">Forceps Delivery</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-700">
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Procedure</td>
                        <td className="p-3">Suction cup attached to baby&apos;s head</td>
                        <td className="p-3">Metal instruments around baby&apos;s head</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Anesthesia</td>
                        <td className="p-3">Local or none needed</td>
                        <td className="p-3">Regional anesthesia usually required</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Space Required</td>
                        <td className="p-3">Less space needed</td>
                        <td className="p-3">More room required for instrument placement</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Maternal Trauma</td>
                        <td className="p-3">Lower risk of severe tears</td>
                        <td className="p-3">Higher risk of significant lacerations</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="p-3 font-medium">Fetal Injury</td>
                        <td className="p-3">Scalp bruising, cephalohematoma</td>
                        <td className="p-3">Facial marks, potential nerve injury</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Success Rate</td>
                        <td className="p-3">85-95%</td>
                        <td className="p-3">95-98%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Recovery After Vacuum Delivery */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Recovery After Vacuum Delivery</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                  <h3 className="font-semibold text-pink-800 mb-4">Baby&apos;s Recovery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-pink-700 mb-2">First 24-48 Hours:</h4>
                      <ul className="space-y-1 text-pink-600 text-sm">
                        <li>• Scalp swelling (caput) peaks and begins to resolve</li>
                        <li>• Monitor for signs of cephalohematoma</li>
                        <li>• Watch for increased jaundice</li>
                        <li>• Assess feeding and alertness</li>
                        <li>• Check for any skin changes</li>
                        <li>• Normal newborn assessments</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-pink-700 mb-2">First Few Weeks:</h4>
                      <ul className="space-y-1 text-pink-600 text-sm">
                        <li>• Scalp marks and bruising fade</li>
                        <li>• Cephalohematoma gradually resolves</li>
                        <li>• Jaundice levels monitored if present</li>
                        <li>• Normal feeding and growth patterns</li>
                        <li>• No special care requirements</li>
                        <li>• Follow regular pediatric appointments</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Mother&apos;s Recovery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Physical Recovery:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Similar to normal vaginal delivery</li>
                        <li>• May have additional perineal discomfort</li>
                        <li>• Episiotomy or tear care if applicable</li>
                        <li>• Normal postpartum bleeding (lochia)</li>
                        <li>• Pain management as needed</li>
                        <li>• Gradual return to normal activities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Emotional Support:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Processing the birth experience</li>
                        <li>• Understanding procedure was necessary</li>
                        <li>• Bonding with baby not affected</li>
                        <li>• Breastfeeding success rates normal</li>
                        <li>• Support from healthcare team</li>
                        <li>• No impact on future pregnancies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention and Alternatives */}
            <section className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Prevention & Alternative Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Positioning Options</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Different pushing positions</li>
                    <li>• Birthing balls or stools</li>
                    <li>• Squatting or side-lying</li>
                    <li>• Hands and knees position</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-800 mb-2">Labor Support</h3>
                  <ul className="text-teal-700 text-sm space-y-1">
                    <li>• Continuous labor support</li>
                    <li>• Effective pain management</li>
                    <li>• Adequate rest and nutrition</li>
                    <li>• Optimal timing of pushing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">When Vacuum Fails</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Trial of forceps delivery</li>
                    <li>• Emergency cesarean section</li>
                    <li>• Time permitting, position changes</li>
                    <li>• Decision based on circumstances</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Delivery Information:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/delivery-methods-comparison" className="text-blue-600 hover:underline">Delivery Methods Comparison</a></li>
                    <li><a href="/blog/stages-of-pre-labor" className="text-blue-600 hover:underline">Stages of Labor</a></li>
                    <li><a href="/blog/how-partners-can-help-during-labor" className="text-blue-600 hover:underline">Partner Support During Labor</a></li>
                    <li><a href="/blog/labor-induction-guide" className="text-blue-600 hover:underline">Labor Induction Guide</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Postpartum Care:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:underline">Newborn Care Guide</a></li>
                    <li><a href="/blog/postpartum-massage-after-cesarean" className="text-blue-600 hover:underline">Postpartum Recovery</a></li>
                    <li><a href="/blog/baby-massage-after-delivery" className="text-blue-600 hover:underline">Baby Massage Guide</a></li>
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