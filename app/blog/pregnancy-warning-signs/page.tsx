import { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pregnancy Warning Signs: When to Call Your Doctor | Your Journey',
  description: 'Learn the important pregnancy warning signs that require immediate medical attention. Know when to contact your healthcare provider during pregnancy.',
  keywords: 'pregnancy warning signs, pregnancy emergency signs, when to call doctor pregnancy, pregnancy complications signs',
  openGraph: {
    title: 'Pregnancy Warning Signs: When to Call Your Doctor | Your Journey',
    description: 'Essential guide to pregnancy warning signs that require immediate medical attention.',
    type: 'article',
  },
};

export default function PregnancyWarningSigns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Pregnancy Warning Signs: When to Call Your Doctor
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            While most pregnancies progress smoothly, it&apos;s important to recognize warning signs that may indicate 
            complications requiring immediate medical attention. Trust your instincts and don&apos;t hesitate to seek help.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-2xl p-8 mb-12 border border-pink-100/40">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Health is Our Priority
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Being aware of potential warning signs during pregnancy helps ensure both your safety and your baby&apos;s well-being. 
              This guide will help you understand when to contact your healthcare provider and what situations require immediate 
              medical attention.
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-red-800 mb-4">🚨 Call 911 or Go to Emergency Room Immediately</h2>
              <ul className="space-y-2 text-red-700">
                <li>• Heavy bleeding (soaking more than one pad per hour)</li>
                <li>• Severe chest pain or shortness of breath</li>
                <li>• Severe headache that won&apos;t go away</li>
                <li>• Vision changes (blurred vision, seeing spots, light sensitivity)</li>
                <li>• Signs of stroke (facial drooping, arm weakness, speech difficulty)</li>
                <li>• Severe abdominal pain</li>
                <li>• Signs of severe preeclampsia</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">First Trimester Warning Signs (Weeks 1-12)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Bleeding and Cramping</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Call Immediately:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Heavy bleeding (like a period or heavier)</li>
                      <li>Bleeding with severe cramping</li>
                      <li>Passing tissue or clots</li>
                      <li>Bright red bleeding that doesn&apos;t stop</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Call During Office Hours:</h4>
                    <ul className="list-disc list-inside space-y-1 text-yellow-600 text-sm">
                      <li>Light spotting</li>
                      <li>Brown discharge</li>
                      <li>Mild cramping without bleeding</li>
                      <li>Any bleeding that concerns you</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Other First Trimester Concerns</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Severe Morning Sickness</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Can&apos;t keep fluids down for 24 hours</li>
                      <li>Vomiting blood</li>
                      <li>Signs of dehydration</li>
                      <li>Rapid weight loss</li>
                      <li>Dizziness or fainting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Pain and Fever</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Fever over 100.4°F (38°C)</li>
                      <li>Severe pelvic or abdominal pain</li>
                      <li>One-sided sharp pain (ectopic pregnancy)</li>
                      <li>Persistent severe headaches</li>
                      <li>Burning or pain with urination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Second Trimester Warning Signs (Weeks 13-27)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Preterm Labor Signs</h3>
                <p className="text-gray-700 text-sm mb-3">
                  These symptoms before 37 weeks could indicate preterm labor:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Regular contractions (more than 4 in an hour)</li>
                  <li>Lower back pain that comes and goes</li>
                  <li>Pelvic pressure</li>
                  <li>Fluid leaking from vagina</li>
                  <li>Change in vaginal discharge</li>
                  <li>Cramping like menstrual cramps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Bleeding and Placental Issues</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Placental Abruption Signs:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Severe abdominal pain</li>
                      <li>Heavy bleeding</li>
                      <li>Uterine tenderness</li>
                      <li>Back pain</li>
                      <li>Frequent contractions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Placenta Previa Signs:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Painless bright red bleeding</li>
                      <li>Bleeding after sex or exam</li>
                      <li>Bleeding that stops and starts</li>
                      <li>Light to heavy bleeding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third Trimester Warning Signs (Weeks 28-40)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Preeclampsia Warning Signs</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Preeclampsia is a serious condition that requires immediate treatment:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Severe Symptoms:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Severe headache</li>
                      <li>Vision changes or seeing spots</li>
                      <li>Upper abdominal pain</li>
                      <li>Sudden weight gain</li>
                      <li>Severe swelling of face and hands</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Additional Signs:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Nausea and vomiting (sudden onset)</li>
                      <li>Decreased urination</li>
                      <li>Shortness of breath</li>
                      <li>High blood pressure</li>
                      <li>Protein in urine</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Decreased Fetal Movement</h3>
                <p className="text-gray-700 text-sm mb-3">
                  After 28 weeks, monitor your baby&apos;s movements daily:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Normal Movement Patterns:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>10 movements in 2 hours</li>
                      <li>Regular patterns you recognize</li>
                      <li>Response to food, sounds, or touch</li>
                      <li>Active periods and rest periods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">When to Call:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Fewer than 10 movements in 2 hours</li>
                      <li>Significant decrease from normal pattern</li>
                      <li>No movement for several hours</li>
                      <li>Baby doesn&apos;t respond to stimulation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Labor Signs</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Know when labor is starting and when to go to the hospital:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Early Labor Signs:</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                      <li>Regular contractions</li>
                      <li>Bloody show</li>
                      <li>Water breaking</li>
                      <li>Lower back pain</li>
                      <li>Pelvic pressure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Go to Hospital When:</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                      <li>Contractions 5 min apart for 1 hour</li>
                      <li>Water breaks (call immediately)</li>
                      <li>Heavy bleeding</li>
                      <li>Baby&apos;s movements decrease significantly</li>
                      <li>You feel something is wrong</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">When in Doubt, Always Call</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Trust Your Instincts</h3>
              <p className="text-gray-700 mb-4">
                You know your body better than anyone. If something feels wrong or different, 
                don&apos;t hesitate to contact your healthcare provider.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">It&apos;s Better to Call If You Have:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Any symptom that worries you</li>
                    <li>Something that doesn&apos;t feel normal</li>
                    <li>Persistent symptoms</li>
                    <li>Questions about your health</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Healthcare Providers Want You to Call About:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Any concerns, big or small</li>
                    <li>Changes in your condition</li>
                    <li>Questions about symptoms</li>
                    <li>Anything that feels &quot;off&quot;</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-medium text-blue-800 mb-2">After Hours</h3>
                <p className="text-blue-700 text-sm mb-2">
                  Most practices have an on-call system for urgent concerns outside office hours.
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-600 text-sm">
                  <li>Call your provider&apos;s after-hours line</li>
                  <li>Be prepared to describe symptoms clearly</li>
                  <li>Have your due date and medical info ready</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-medium text-yellow-800 mb-2">Emergency Situations</h3>
                <p className="text-yellow-700 text-sm mb-2">
                  Don&apos;t wait to call your provider if you have emergency symptoms.
                </p>
                <ul className="list-disc list-inside space-y-1 text-yellow-600 text-sm">
                  <li>Call 911 for life-threatening symptoms</li>
                  <li>Go directly to emergency room</li>
                  <li>Have someone drive you if possible</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="font-medium text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Healthcare providers would rather see you for a false alarm than miss something important. 
                Your safety and your baby&apos;s safety are the top priority. Never feel embarrassed about 
                seeking medical attention when you&apos;re concerned.
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