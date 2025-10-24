import { Metadata } from 'next'
import { FileText, Heart, Thermometer, Scale, Stethoscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Newborn Medical Terms & Report Readings Guide | Understanding Baby Health Reports',
  description: 'Complete guide to understanding newborn medical terminology, test results, and health report readings. Learn what APGAR scores, vital signs, and medical abbreviations mean.',
  keywords: 'newborn medical terms, APGAR score, baby health reports, newborn test results, medical terminology babies, vital signs newborn, baby medical abbreviations, neonatal care terms',
  openGraph: {
    title: 'Newborn Medical Terms & Report Readings: Complete Parent Guide',
    description: 'Understand your baby&apos;s medical reports and health terminology with this comprehensive guide for new parents.',
    type: 'article',
  },
}

export default function NewbornMedicalTermsReportReadings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <FileText className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Newborn Medical Terms & Report Readings</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding your baby&apos;s medical reports, test results, and health terminology
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-800">APGAR Score</div>
                  <div className="text-blue-600">Immediate health assessment</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <Thermometer className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-green-800">Vital Signs</div>
                  <div className="text-green-600">Temperature, pulse, breathing</div>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg text-center">
                  <Scale className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-teal-800">Measurements</div>
                  <div className="text-teal-600">Weight, length, head circumference</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                  <div className="flex items-start">
                    <Stethoscope className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Understanding Medical Reports</h3>
                      <p className="text-green-700">
                        Newborn medical reports contain vital information about your baby&apos;s health. This guide helps you understand common terms, normal ranges, and when to ask questions.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">APGAR Score Assessment</h2>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">What is APGAR Score?</h3>
                  <p className="text-blue-700 mb-4">
                    The APGAR score is a quick assessment of your newborn&apos;s health performed at 1 and 5 minutes after birth. It evaluates five key areas to determine if immediate medical care is needed.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Five Assessment Areas:</h4>
                      <ul className="list-disc list-inside text-blue-600 space-y-2">
                        <li><strong>A</strong>ppearance (skin color)</li>
                        <li><strong>P</strong>ulse (heart rate)</li>
                        <li><strong>G</strong>rimace (reflex response)</li>
                        <li><strong>A</strong>ctivity (muscle tone)</li>
                        <li><strong>R</strong>espiration (breathing effort)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Scoring System:</h4>
                      <ul className="list-disc list-inside text-blue-600 space-y-2">
                        <li><strong>7-10:</strong> Normal (most babies)</li>
                        <li><strong>4-6:</strong> Needs assistance</li>
                        <li><strong>0-3:</strong> Requires immediate care</li>
                        <li>Each area scored 0, 1, or 2 points</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Vital Signs & Normal Ranges</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Temperature</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Normal Ranges:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Rectal: 97.9°F - 100.4°F (36.6°C - 38°C)</li>
                          <li>Axillary (armpit): 97.7°F - 99.5°F (36.5°C - 37.5°C)</li>
                          <li>Temporal: 99.5°F - 99.9°F (37.5°C - 37.7°C)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Important Notes:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Newborns have immature temperature control</li>
                          <li>Room temperature affects baby&apos;s temperature</li>
                          <li>Fever in newborns requires immediate attention</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">Heart Rate & Pulse</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Normal Ranges:</h4>
                        <ul className="list-disc list-inside text-red-600 space-y-1">
                          <li>Newborn: 120-160 beats per minute</li>
                          <li>Sleeping: 100-160 bpm</li>
                          <li>Awake/Active: 120-160 bpm</li>
                          <li>Crying: Up to 180 bpm (temporary)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Assessment Methods:</h4>
                        <ul className="list-disc list-inside text-red-600 space-y-1">
                          <li>Stethoscope on chest</li>
                          <li>Pulse oximeter on foot</li>
                          <li>Heart monitor during hospital stay</li>
                          <li>Check for rhythm irregularities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Respiratory Rate</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Normal Patterns:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>30-60 breaths per minute</li>
                          <li>Irregular breathing is normal</li>
                          <li>Periodic breathing (brief pauses)</li>
                          <li>Faster when crying or active</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Warning Signs:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Pauses longer than 20 seconds</li>
                          <li>Blue color around lips/face</li>
                          <li>Grunting sounds</li>
                          <li>Chest retractions (pulling in)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Physical Measurements</h2>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">Standard Measurements at Birth</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2">Weight:</h4>
                      <ul className="list-disc list-inside text-yellow-600 space-y-1">
                        <li>Average: 2.5-4.0 kg (5.5-8.8 lbs)</li>
                        <li>Measured in grams or pounds</li>
                        <li>Recorded daily during hospital stay</li>
                        <li>Initial weight loss is normal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2">Length:</h4>
                      <ul className="list-disc list-inside text-yellow-600 space-y-1">
                        <li>Average: 46-56 cm (18-22 inches)</li>
                        <li>Crown to heel measurement</li>
                        <li>Can vary with positioning</li>
                        <li>Growth tracked on percentile charts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2">Head Circumference:</h4>
                      <ul className="list-disc list-inside text-yellow-600 space-y-1">
                        <li>Average: 32-37 cm (12.6-14.6 inches)</li>
                        <li>Measured around largest part</li>
                        <li>Important for brain development</li>
                        <li>Monitors growth rate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Medical Abbreviations</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Vital Signs Abbreviations</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>HR:</strong> Heart Rate</li>
                      <li><strong>RR:</strong> Respiratory Rate</li>
                      <li><strong>BP:</strong> Blood Pressure</li>
                      <li><strong>Temp:</strong> Temperature</li>
                      <li><strong>O2 Sat:</strong> Oxygen Saturation</li>
                      <li><strong>SpO2:</strong> Pulse Oximetry Reading</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Assessment Terms</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>WNL:</strong> Within Normal Limits</li>
                      <li><strong>NAD:</strong> No Acute Distress</li>
                      <li><strong>A&O:</strong> Alert and Oriented</li>
                      <li><strong>NKDA:</strong> No Known Drug Allergies</li>
                      <li><strong>FTT:</strong> Failure to Thrive</li>
                      <li><strong>LGA/SGA:</strong> Large/Small for Gestational Age</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Newborn Tests</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-indigo-800 mb-4">Blood Tests</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">Newborn Screening Panel:</h4>
                        <ul className="list-disc list-inside text-indigo-600 space-y-1">
                          <li>Phenylketonuria (PKU)</li>
                          <li>Hypothyroidism</li>
                          <li>Sickle cell disease</li>
                          <li>Cystic fibrosis</li>
                          <li>Galactosemia</li>
                          <li>Various metabolic disorders</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">When Performed:</h4>
                        <ul className="list-disc list-inside text-indigo-600 space-y-1">
                          <li>24-48 hours after birth</li>
                          <li>Heel stick blood sample</li>
                          <li>Results typically in 1-2 weeks</li>
                          <li>Follow-up if abnormal results</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-pink-800 mb-4">Hearing Test</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-2">Test Types:</h4>
                        <ul className="list-disc list-inside text-pink-600 space-y-1">
                          <li>OAE (Otoacoustic Emissions)</li>
                          <li>ABR (Auditory Brainstem Response)</li>
                          <li>Non-invasive screening</li>
                          <li>Performed while baby sleeps</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-2">Results:</h4>
                        <ul className="list-disc list-inside text-pink-600 space-y-1">
                          <li>Pass: Normal hearing likely</li>
                          <li>Refer: Needs follow-up testing</li>
                          <li>Does not mean hearing loss</li>
                          <li>Further testing may be needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Heart Screening</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Pulse Oximetry Screening:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>Measures oxygen in blood</li>
                          <li>Detects heart defects</li>
                          <li>Sensors on hand and foot</li>
                          <li>Quick, painless test</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Normal Results:</h4>
                        <ul className="list-disc list-inside text-orange-600 space-y-1">
                          <li>95% or higher oxygen saturation</li>
                          <li>Less than 3% difference between hand and foot</li>
                          <li>Abnormal results need further evaluation</li>
                          <li>May include echocardiogram</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Test Results</h2>

                <div className="bg-teal-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-teal-800 mb-4">How to Read Reports</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">Key Information to Look For:</h4>
                      <ul className="list-disc list-inside text-teal-600 space-y-2">
                        <li>Normal ranges for each measurement</li>
                        <li>Your baby&apos;s specific values</li>
                        <li>Percentile rankings</li>
                        <li>Trending over time</li>
                        <li>Doctor&apos;s comments or notes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">Questions to Ask Your Healthcare Provider:</h4>
                      <ul className="list-disc list-inside text-teal-600 space-y-2">
                        <li>What do these numbers mean?</li>
                        <li>Are the results within normal range?</li>
                        <li>Do we need follow-up testing?</li>
                        <li>How often will these be checked?</li>
                        <li>What should I watch for at home?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <h3 className="text-lg font-bold text-red-800 mb-2">When to Contact Your Healthcare Provider</h3>
                  <ul className="list-disc list-inside text-red-700 space-y-1">
                    <li>Any abnormal test results that concern you</li>
                    <li>Changes in your baby&apos;s condition</li>
                    <li>Questions about medication or treatment</li>
                    <li>Difficulty understanding medical terms</li>
                    <li>Need for clarification on follow-up care</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li><a href="/blog/complete-newborn-care-guide" className="text-blue-600 underline hover:text-blue-800">Complete newborn care guide</a></li>
                      <li><a href="/blog/newborn-first-week-guide" className="text-blue-600 underline hover:text-blue-800">First week newborn guide</a></li>
                      <li><a href="/blog/newborn-vaccinations-guide" className="text-blue-600 underline hover:text-blue-800">Vaccination schedule</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li><a href="/tools/baby-weight-calculator" className="text-blue-600 underline hover:text-blue-800">Baby weight tracker</a></li>
                      <li><a href="/blog/baby-weight-classes-classification" className="text-blue-600 underline hover:text-blue-800">Weight classifications</a></li>
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