import { Metadata } from 'next';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pregnancy Medical Checkups and Prenatal Care Schedule | Your Journey',
  description: 'Complete guide to pregnancy medical checkups, prenatal appointments, tests, and what to expect at each visit throughout your pregnancy.',
  keywords: 'pregnancy checkups, prenatal care, pregnancy appointments, prenatal tests, pregnancy medical care, OB visits',
  openGraph: {
    title: 'Pregnancy Medical Checkups and Prenatal Care Schedule | Your Journey',
    description: 'Complete guide to pregnancy medical checkups and prenatal care throughout your pregnancy.',
    type: 'article',
  },
};

export default function PregnancyMedicalCheckups() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Pregnancy Medical Checkups & Prenatal Care
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Regular prenatal care is essential for monitoring the health of both mother and baby throughout pregnancy. 
            Learn about the recommended schedule, tests, and what to expect at each appointment.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-2xl p-8 mb-12 border border-pink-100/40">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Understanding Prenatal Care
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Regular prenatal checkups are crucial for ensuring a healthy pregnancy. Your healthcare provider will monitor your health 
              and your baby&apos;s development through a series of scheduled appointments. The frequency of these visits increases as your 
              pregnancy progresses.
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prenatal Care Schedule</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Standard Appointment Timeline</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Weeks 4-28</h4>
                  <p className="text-gray-600 text-sm">Every 4 weeks</p>
                </div>
                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Weeks 28-36</h4>
                  <p className="text-gray-600 text-sm">Every 2 weeks</p>
                </div>
                <div>
                  <h4 className="font-medium text-pink-700 mb-2">Weeks 36-40</h4>
                  <p className="text-gray-600 text-sm">Every week</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">First Trimester Checkups (Weeks 1-12)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Initial Visit (Weeks 6-8)</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Medical History Review</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Previous pregnancies and outcomes</li>
                      <li>Current medications and supplements</li>
                      <li>Family medical history</li>
                      <li>Lifestyle factors (diet, exercise, smoking)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Initial Tests</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Pregnancy confirmation (urine/blood)</li>
                      <li>Blood type and Rh factor</li>
                      <li>Complete blood count (CBC)</li>
                      <li>STI screening</li>
                      <li>Rubella immunity</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Follow-up Visits (Weeks 10-12)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Routine Monitoring</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Weight and blood pressure check</li>
                      <li>Fetal heartbeat detection</li>
                      <li>Urine testing</li>
                      <li>Discussion of symptoms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Optional Screening</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>First trimester screening (11-14 weeks)</li>
                      <li>Nuchal translucency ultrasound</li>
                      <li>Cell-free DNA testing</li>
                      <li>Chorionic villus sampling (CVS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Second Trimester Checkups (Weeks 13-27)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Anatomy Scan (Weeks 18-22)</h3>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-blue-800 mb-2">Detailed Ultrasound Assessment</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                      <li>Fetal anatomy and development</li>
                      <li>Growth measurements</li>
                      <li>Placenta position</li>
                      <li>Amniotic fluid levels</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                      <li>Gender identification (if desired)</li>
                      <li>Detection of abnormalities</li>
                      <li>Multiple pregnancy confirmation</li>
                      <li>Cervix length measurement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Routine Second Trimester Tests</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Standard Screening</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Alpha-fetoprotein (AFP) screening</li>
                      <li>Glucose screening (24-28 weeks)</li>
                      <li>Blood pressure monitoring</li>
                      <li>Fundal height measurement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Optional Testing</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Amniocentesis (15-20 weeks)</li>
                      <li>Additional genetic screening</li>
                      <li>Fetal echocardiogram</li>
                      <li>Cervical length ultrasound</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third Trimester Checkups (Weeks 28-40)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Key Third Trimester Tests</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Around 28 Weeks</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Glucose tolerance test (if needed)</li>
                      <li>RhoGAM shot (if Rh-negative)</li>
                      <li>Complete blood count</li>
                      <li>Antibody screening</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">35-37 Weeks</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Group B Strep (GBS) test</li>
                      <li>Fetal position assessment</li>
                      <li>Birth plan discussion</li>
                      <li>Labor and delivery preparation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Final Weeks Monitoring</h3>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-2">Weekly Assessments (36+ weeks)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                      <li>Cervical dilation and effacement</li>
                      <li>Baby&apos;s position and station</li>
                      <li>Blood pressure monitoring</li>
                      <li>Weight and swelling check</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                      <li>Fetal heart rate monitoring</li>
                      <li>Non-stress tests (if indicated)</li>
                      <li>Signs of labor discussion</li>
                      <li>Postpartum care planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Expect at Each Visit</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Routine Measurements</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Weight tracking</li>
                  <li>• Blood pressure check</li>
                  <li>• Urine dipstick test</li>
                  <li>• Fundal height measurement</li>
                  <li>• Fetal heart rate</li>
                  <li>• Discussion of symptoms</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Questions to Ask</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Nutrition and exercise guidance</li>
                  <li>• Symptom management</li>
                  <li>• Warning signs to watch for</li>
                  <li>• Birth plan preferences</li>
                  <li>• Medication safety</li>
                  <li>• Postpartum preparation</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <h3 className="font-medium text-yellow-800 mb-2">High-Risk Pregnancies</h3>
              <p className="text-yellow-700 text-sm mb-2">
                Some pregnancies may require more frequent monitoring due to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                <li>Maternal age (under 17 or over 35)</li>
                <li>Chronic health conditions (diabetes, hypertension)</li>
                <li>Previous pregnancy complications</li>
                <li>Multiple pregnancies (twins, triplets)</li>
                <li>Pregnancy complications (preeclampsia, gestational diabetes)</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800">
                <strong>Remember:</strong> This schedule may vary based on your individual circumstances, 
                health conditions, and healthcare provider preferences. Always follow your doctor&apos;s specific 
                recommendations for your pregnancy care.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white mt-12">
            <h2 className="text-2xl font-semibold mb-4">
              Track Your Pregnancy Journey
            </h2>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Use our pregnancy tracker to monitor your symptoms, track baby&apos;s development, 
              and stay informed about what to expect each week.
            </p>
            <Link 
              href="/"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Start Tracking Now
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}