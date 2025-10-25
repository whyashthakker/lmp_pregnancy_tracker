import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Thermometer, 
  Stethoscope, 
  AlertTriangle, 
  Clock, 
  Heart,
  Baby,
  Shield,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Baby Bronchitis: Symptoms, Treatment & When to Worry | Complete Parent Guide',
  description: 'Comprehensive guide to baby bronchitis including early symptoms, treatment options, when to seek medical help, and prevention tips. Expert advice for worried parents.',
  keywords: 'baby bronchitis, infant bronchitis symptoms, baby respiratory infection, bronchitis treatment babies, when to worry baby cough, infant breathing problems',
  openGraph: {
    title: 'Baby Bronchitis: Essential Parent Guide to Symptoms & Treatment',
    description: 'Complete guide to recognizing, treating, and preventing bronchitis in babies. Know when to seek immediate medical attention.',
    type: 'article',
  },
};

export default function BabyBronchitisGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
              <Stethoscope className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Baby Bronchitis: Complete Parent Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding bronchitis in babies, recognizing symptoms, knowing when to seek help, and effective treatment approaches for your little one&apos;s respiratory health.
          </p>
        </div>

        {/* Emergency Warning */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-red-800 mb-2">
                🚨 Seek Immediate Medical Attention If:
              </h2>
              <ul className="text-red-700 space-y-2">
                <li>• Difficulty breathing or rapid breathing (over 60 breaths per minute)</li>
                <li>• Blue lips, face, or fingernails</li>
                <li>• High fever (100.4°F/38°C in babies under 3 months)</li>
                <li>• Refusing to eat or drink for several hours</li>
                <li>• Extreme lethargy or difficulty staying awake</li>
                <li>• Wheezing or severe coughing fits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What is Bronchitis */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Baby className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">What is Baby Bronchitis?</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Bronchitis in babies is an inflammation of the bronchi (airways that carry air to the lungs). It&apos;s commonly caused by viral infections and can make breathing difficult for your little one.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Acute Bronchitis</h3>
                  <p className="text-blue-700 text-sm">
                    Usually viral, lasts 1-3 weeks, often follows a cold or respiratory infection.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Chronic Bronchitis</h3>
                  <p className="text-green-700 text-sm">
                    Rare in babies, persistent cough lasting months, may indicate underlying condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Thermometer className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Recognizing Bronchitis Symptoms</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Early Warning Signs</h3>
                <ul className="space-y-3">
                  {[
                    'Persistent cough (dry or productive)',
                    'Runny or stuffy nose',
                    'Low-grade fever',
                    'Fatigue and irritability',
                    'Difficulty sleeping',
                    'Reduced appetite'
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Severe Symptoms</h3>
                <ul className="space-y-3">
                  {[
                    'Wheezing or whistling sounds',
                    'Rapid or labored breathing',
                    'Chest tightness or pain',
                    'Thick, discolored mucus',
                    'Vomiting after coughing',
                    'Dehydration signs'
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-800">
                <strong>Important:</strong> Babies under 6 months are at higher risk for complications. Monitor symptoms closely and maintain regular communication with your pediatrician.
              </p>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Treatment & Care</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Home Care Measures</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-800">Hydration</h4>
                    <p className="text-gray-700 text-sm">Offer frequent breast milk, formula, or small sips of water (if over 6 months)</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-800">Humidity</h4>
                    <p className="text-gray-700 text-sm">Use a cool-mist humidifier or sit in a steamy bathroom for 10-15 minutes</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-800">Rest</h4>
                    <p className="text-gray-700 text-sm">Ensure plenty of sleep and minimize stimulating activities</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-800">Positioning</h4>
                    <p className="text-gray-700 text-sm">Keep baby upright during feeding and use a slightly elevated sleep position</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Medical Treatment</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Doctor May Prescribe:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Bronchodilators for wheezing</li>
                      <li>• Fever reducers (acetaminophen/ibuprofen)</li>
                      <li>• Antibiotics (only if bacterial infection)</li>
                      <li>• Steroids for severe inflammation</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Avoid These:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Cough suppressants under 2 years</li>
                      <li>• Over-the-counter cold medicines</li>
                      <li>• Aspirin (risk of Reye&apos;s syndrome)</li>
                      <li>• Essential oils or mentholated products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Call Doctor */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">When to Contact Your Pediatrician</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-3">⚠️ Call Within 24 Hours</h3>
                <ul className="text-yellow-700 text-sm space-y-2">
                  <li>• Cough lasting more than 1 week</li>
                  <li>• Fever over 102°F (38.9°C)</li>
                  <li>• Poor eating or drinking</li>
                  <li>• Thick, colored mucus</li>
                  <li>• Increasing irritability</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">🚨 Call Immediately</h3>
                <ul className="text-orange-700 text-sm space-y-2">
                  <li>• Difficulty breathing</li>
                  <li>• Wheezing or grunting</li>
                  <li>• Blue lips or face</li>
                  <li>• Severe lethargy</li>
                  <li>• Dehydration signs</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">🆘 Emergency Room</h3>
                <ul className="text-red-700 text-sm space-y-2">
                  <li>• Severe breathing distress</li>
                  <li>• Unable to feed/drink</li>
                  <li>• High fever in newborns</li>
                  <li>• Unresponsiveness</li>
                  <li>• Persistent blue coloring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Prevention Strategies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Prevention</h3>
                <ul className="space-y-3">
                  {[
                    'Frequent handwashing for caregivers',
                    'Avoid exposure to smoke and pollutants',
                    'Maintain proper humidity (30-50%)',
                    'Keep baby away from sick individuals',
                    'Regular cleaning of toys and surfaces',
                    'Ensure adequate nutrition and rest'
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Immune System Support</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Breastfeeding Benefits</h4>
                    <p className="text-blue-700 text-sm">
                      Provides antibodies and immune factors that help protect against respiratory infections.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Vaccination Schedule</h4>
                    <p className="text-green-700 text-sm">
                      Stay up-to-date with recommended vaccines including flu shots and RSV prevention.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Environmental Control</h4>
                    <p className="text-purple-700 text-sm">
                      Maintain clean air, avoid crowded places during peak illness seasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Recovery Timeline</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Typical Recovery Progress</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">1</div>
                    <h4 className="font-semibold text-gray-800">Days 1-3</h4>
                    <p className="text-sm text-gray-600">Symptoms appear, peak severity</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">2</div>
                    <h4 className="font-semibold text-gray-800">Days 4-7</h4>
                    <p className="text-sm text-gray-600">Gradual improvement begins</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">3</div>
                    <h4 className="font-semibold text-gray-800">Week 2</h4>
                    <p className="text-sm text-gray-600">Cough may persist, other symptoms resolve</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">4</div>
                    <h4 className="font-semibold text-gray-800">Week 3</h4>
                    <p className="text-sm text-gray-600">Complete recovery expected</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-amber-800">
                  <strong>Note:</strong> Recovery time varies by baby&apos;s age, overall health, and severity of infection. Premature babies or those with underlying conditions may need longer recovery periods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Takeaways for Parents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">✅ Remember</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Most bronchitis in babies is viral and self-limiting</li>
                <li>• Home care with hydration and rest is often sufficient</li>
                <li>• Trust your instincts - you know your baby best</li>
                <li>• Prevention through hygiene is highly effective</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">🚨 Act Fast If</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Breathing becomes labored or rapid</li>
                <li>• Baby shows signs of dehydration</li>
                <li>• High fever persists or worsens</li>
                <li>• Baby becomes unusually lethargic</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Related Health Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:text-blue-700 font-medium">
              Newborn Care Guide
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/newborn-vision-development-when-baby-sees-clearly" className="text-blue-600 hover:text-blue-700 font-medium">
              Baby Vision Development
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/baby" className="text-purple-600 hover:text-purple-700 font-medium">
              Baby Health Tracker
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/baby/milestones" className="text-purple-600 hover:text-purple-700 font-medium">
              Milestone Tracker
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/tools" className="text-blue-600 hover:text-blue-700 font-medium">
              Baby Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}