import { Metadata } from 'next'
import { Heart, Activity, Stethoscope, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Baby ECG Tests: What They Are & When They&apos;re Needed | Complete Parent Guide',
  description: 'Comprehensive guide to ECG tests for babies and newborns. Learn what an ECG is, when it&apos;s recommended, what to expect, and how to interpret results.',
  keywords: 'baby ECG test, newborn electrocardiogram, infant heart test, pediatric ECG, baby heart screening, when baby needs ECG, ECG for children, heart rhythm test babies',
  openGraph: {
    title: 'Baby ECG Tests: Complete Guide for Parents on Heart Screening',
    description: 'Understanding when and why your baby might need an ECG test, what to expect, and how to interpret the results.',
    type: 'article',
  },
}

export default function BabyECGTestsGuideWhenNeeded() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Heart className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Baby ECG Tests: What Parents Need to Know</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding electrocardiograms for babies: when they&apos;re needed, what to expect, and how to interpret results
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-red-800">1 in 100</div>
                  <div className="text-red-600">Babies born with heart defects</div>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <Activity className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-pink-800">Safe & Quick</div>
                  <div className="text-pink-600">Non-invasive 5-10 minute test</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-800">Early Detection</div>
                  <div className="text-purple-600">Identifies heart issues early</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                  <div className="flex items-start">
                    <Stethoscope className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">What is an ECG?</h3>
                      <p className="text-blue-700">
                        An electrocardiogram (ECG or EKG) is a simple, painless test that records the electrical activity of your baby&apos;s heart. It helps doctors detect heart rhythm problems, structural defects, and other cardiac conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">When Do Babies Need ECG Tests?</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">🏥 Routine Screening Situations</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Hospital Birth Screening:</h4>
                        <ul className="list-disc list-inside text-yellow-600 space-y-1">
                          <li>Abnormal heart murmur detected</li>
                          <li>Irregular heartbeat noticed</li>
                          <li>Family history of heart disease</li>
                          <li>Prenatal heart abnormalities seen on ultrasound</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Follow-up Screening:</h4>
                        <ul className="list-disc list-inside text-yellow-600 space-y-1">
                          <li>Failed newborn pulse oximetry screening</li>
                          <li>Cyanosis (blue coloring) episodes</li>
                          <li>Difficulty feeding or breathing</li>
                          <li>Poor weight gain</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">⚠️ Symptoms That May Require ECG</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Physical Symptoms:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Rapid or slow heart rate</li>
                          <li>Irregular heartbeat</li>
                          <li>Chest pain (in older infants)</li>
                          <li>Shortness of breath</li>
                          <li>Excessive sweating during feeding</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Behavioral Signs:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Extreme fatigue during activities</li>
                          <li>Fainting or near-fainting episodes</li>
                          <li>Poor feeding or eating</li>
                          <li>Unusual fussiness during exertion</li>
                          <li>Developmental delays</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">🚨 High-Risk Factors</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Medical History:</h4>
                        <ul className="list-disc list-inside text-red-600 space-y-1">
                          <li>Premature birth</li>
                          <li>Low birth weight</li>
                          <li>Maternal diabetes during pregnancy</li>
                          <li>Certain maternal medications</li>
                          <li>Maternal infections during pregnancy</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Genetic Factors:</h4>
                        <ul className="list-disc list-inside text-red-600 space-y-1">
                          <li>Family history of congenital heart disease</li>
                          <li>Genetic syndromes (Down syndrome, etc.)</li>
                          <li>Sudden cardiac death in family</li>
                          <li>Inherited heart rhythm disorders</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">What to Expect During a Baby ECG</h2>

                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-green-800 mb-4">The ECG Process Step-by-Step</h3>
                  
                  <div className="space-y-4">
                    <div className="border border-green-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">1. Preparation (2-3 minutes)</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        <li>Baby is undressed from the waist up</li>
                        <li>Skin is cleaned with alcohol wipes if needed</li>
                        <li>Parent can hold and comfort baby throughout</li>
                        <li>No fasting or special preparation required</li>
                      </ul>
                    </div>

                    <div className="border border-green-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">2. Electrode Placement (2-3 minutes)</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        <li>Small, sticky electrodes placed on chest, arms, and legs</li>
                        <li>Usually 10-12 electrodes for infants</li>
                        <li>Electrodes may feel cold but don&apos;t hurt</li>
                        <li>Baby may fuss from the sensation</li>
                      </ul>
                    </div>

                    <div className="border border-green-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">3. Recording (1-2 minutes)</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        <li>Baby needs to be still for accurate reading</li>
                        <li>Feeding or pacifier can help keep baby calm</li>
                        <li>Machine records heart&apos;s electrical activity</li>
                        <li>Multiple short recordings may be taken</li>
                      </ul>
                    </div>

                    <div className="border border-green-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">4. Completion (1 minute)</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        <li>Electrodes are gently removed</li>
                        <li>Any adhesive residue cleaned off</li>
                        <li>Baby can be dressed and comforted</li>
                        <li>Results usually available immediately</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding ECG Results</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Normal ECG Findings in Babies</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Heart Rate:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Newborn: 120-160 beats per minute</li>
                          <li>1-12 months: 100-150 beats per minute</li>
                          <li>Rate varies with activity and sleep</li>
                          <li>Faster than adult heart rates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Rhythm Characteristics:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Regular rhythm pattern</li>
                          <li>Normal electrical conduction</li>
                          <li>Appropriate wave shapes</li>
                          <li>Age-appropriate intervals</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">What Abnormal Results Might Indicate</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Rhythm Disorders:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Arrhythmias (irregular heartbeat)</li>
                          <li>Heart block (conduction problems)</li>
                          <li>Tachycardia (too fast)</li>
                          <li>Bradycardia (too slow)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Structural Issues:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Enlarged heart chambers</li>
                          <li>Congenital heart defects</li>
                          <li>Heart muscle problems</li>
                          <li>Electrical pathway abnormalities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Should You Do an ECG for Your Baby?</h2>

                <div className="bg-teal-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-teal-800 mb-4">Decision Factors</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-3">✅ Recommended When:</h4>
                      <ul className="list-disc list-inside text-teal-600 space-y-2">
                        <li>Doctor detects heart murmur or irregular rhythm</li>
                        <li>Family history of heart disease</li>
                        <li>Baby shows symptoms of heart problems</li>
                        <li>Failed newborn screening tests</li>
                        <li>Before certain medical procedures</li>
                        <li>Part of evaluation for genetic syndromes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-3">❌ Usually Not Needed For:</h4>
                      <ul className="list-disc list-inside text-teal-600 space-y-2">
                        <li>Routine checkups in healthy babies</li>
                        <li>Minor illnesses (colds, fever)</li>
                        <li>Normal growth and development</li>
                        <li>Parental anxiety without medical indication</li>
                        <li>Insurance or school requirements (unless specified)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits and Limitations</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-4">Benefits of Baby ECG</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-2">
                      <li><strong>Non-invasive:</strong> No pain or discomfort</li>
                      <li><strong>Quick:</strong> Results available immediately</li>
                      <li><strong>Safe:</strong> No radiation or side effects</li>
                      <li><strong>Detailed:</strong> Provides precise heart rhythm information</li>
                      <li><strong>Diagnostic:</strong> Can detect many heart conditions</li>
                      <li><strong>Baseline:</strong> Establishes normal pattern for future comparison</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-4">Limitations to Consider</h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-2">
                      <li><strong>Snapshot:</strong> Only shows heart activity at moment of test</li>
                      <li><strong>Movement:</strong> Baby movement can affect accuracy</li>
                      <li><strong>Not comprehensive:</strong> Doesn&apos;t show all heart problems</li>
                      <li><strong>Interpretation:</strong> Requires pediatric cardiology expertise</li>
                      <li><strong>False positives:</strong> Normal variations may appear abnormal</li>
                      <li><strong>Limited structural info:</strong> May need additional tests</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Preparing Your Baby for an ECG</h2>

                <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4">Tips for a Successful ECG</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">Before the Test:</h4>
                      <ul className="list-disc list-inside text-indigo-600 space-y-1">
                        <li>Schedule during baby&apos;s calm periods (after feeding, before nap)</li>
                        <li>Bring favorite comfort items (pacifier, small toy)</li>
                        <li>Dress baby in easily removable clothing</li>
                        <li>Plan extra time in case baby needs settling</li>
                        <li>Ask about bringing formula or breast milk</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">During the Test:</h4>
                      <ul className="list-disc list-inside text-indigo-600 space-y-1">
                        <li>Stay calm and speak soothingly to baby</li>
                        <li>Help hold baby still during recording</li>
                        <li>Use feeding or pacifier to keep baby content</li>
                        <li>Ask technician to explain what they&apos;re doing</li>
                        <li>Be patient if multiple attempts are needed</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">After the Test:</h4>
                      <ul className="list-disc list-inside text-indigo-600 space-y-1">
                        <li>Comfort baby if they were upset</li>
                        <li>Check for any skin irritation from electrodes</li>
                        <li>Ask when results will be available</li>
                        <li>Schedule follow-up appointment if needed</li>
                        <li>Note any concerns to discuss with doctor</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow-up and Next Steps</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">If Results Are Normal</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Continue regular pediatric checkups</li>
                      <li>No restrictions on normal baby activities</li>
                      <li>Report any new symptoms to pediatrician</li>
                      <li>Future ECGs only if medically indicated</li>
                      <li>Keep copy of results for medical records</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-yellow-800 mb-4">If Results Show Abnormalities</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li>Referral to pediatric cardiologist may be needed</li>
                      <li>Additional tests might be recommended (echocardiogram, Holter monitor)</li>
                      <li>Many abnormalities in babies are benign and resolve over time</li>
                      <li>Treatment options depend on specific findings</li>
                      <li>Regular monitoring and follow-up appointments</li>
                      <li>Detailed discussion with specialist about implications</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">When to Seek Immediate Care</h3>
                      <p className="text-red-700 mb-2">Contact your pediatrician immediately if your baby shows:</p>
                      <ul className="list-disc list-inside text-red-600 space-y-1">
                        <li>Blue coloring around lips or face</li>
                        <li>Difficulty breathing or rapid breathing</li>
                        <li>Poor feeding or refusing to eat</li>
                        <li>Extreme fatigue or lethargy</li>
                        <li>Fainting or loss of consciousness</li>
                        <li>Chest pain (in older infants who can communicate)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li><a href="/blog/newborn-medical-terms-report-readings" className="text-blue-600 underline hover:text-blue-800">Understanding medical reports</a></li>
                      <li><a href="/blog/complete-newborn-care-guide" className="text-blue-600 underline hover:text-blue-800">Complete newborn care guide</a></li>
                      <li><a href="/tools/newborn-vaccination-schedule" className="text-blue-600 underline hover:text-blue-800">Vaccination schedule tracker</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li><a href="/blog/newborn-first-week-guide" className="text-blue-600 underline hover:text-blue-800">First week newborn guide</a></li>
                      <li><a href="/tools/baby-milestone-tracker" className="text-blue-600 underline hover:text-blue-800">Development milestone tracker</a></li>
                      <li><a href="/blog/first-month-newborn-guide" className="text-blue-600 underline hover:text-blue-800">First month development</a></li>
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