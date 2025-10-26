import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Phone, Clock, Heart, Thermometer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Pregnancy Emergency Warning Signs: When to Call Your Doctor Immediately | Urgent Pregnancy Symptoms',
  description: 'Critical guide to pregnancy emergency warning signs and symptoms that require immediate medical attention. Know when to call your doctor or go to the hospital.',
  keywords: 'pregnancy emergency signs, when to call doctor pregnancy, pregnancy warning symptoms, urgent pregnancy symptoms, pregnancy complications, dangerous pregnancy signs',
  openGraph: {
    title: 'Pregnancy Emergency Warning Signs: When to Call Your Doctor Immediately',
    description: 'Essential guide to recognizing serious pregnancy symptoms that require immediate medical attention.',
    type: 'article',
  },
};

export default function PregnancyEmergencyWarningGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-red-100">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                Emergency Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pregnancy Emergency Warning Signs: When to Call Your Doctor Immediately
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Essential guide to recognizing serious pregnancy symptoms that require immediate medical attention. Know the warning signs that could indicate complications.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>Updated October 26, 2025</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 911 or Go to Emergency Room IMMEDIATELY If:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Life-Threatening Signs:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Severe bleeding (soaking pad in 1 hour)</li>
                      <li>• Severe chest pain or trouble breathing</li>
                      <li>• Seizures or convulsions</li>
                      <li>• Loss of consciousness</li>
                      <li>• Severe headache with vision changes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Urgent Symptoms:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• No fetal movement for 12+ hours</li>
                      <li>• Gushing fluid from vagina</li>
                      <li>• Severe abdominal pain</li>
                      <li>• Signs of preeclampsia</li>
                      <li>• High fever (101°F+)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              First Trimester Emergency Signs (0-12 weeks)
            </h2>

            <Card className="mb-6 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-600">Miscarriage Warning Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Call Doctor Immediately:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Heavy bleeding:</strong> Soaking through a pad every hour for 2+ hours</li>
                      <li><strong>Severe cramping:</strong> More intense than menstrual cramps</li>
                      <li><strong>Tissue passage:</strong> Passing clots or tissue larger than a quarter</li>
                      <li><strong>Back pain:</strong> Severe lower back pain with cramping</li>
                      <li><strong>Fluid gush:</strong> Sudden gush of fluid from vagina</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-yellow-600 mb-2">Monitor Closely (Call if worsens):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Light spotting (common in early pregnancy)</li>
                      <li>Mild cramping without bleeding</li>
                      <li>Sudden loss of pregnancy symptoms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-600">Ectopic Pregnancy Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>Risk increases with:</strong> Previous ectopic pregnancy, fallopian tube damage, IVF, pelvic inflammatory disease
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Emergency Signs (Call 911):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Sharp pelvic pain:</strong> Sudden, severe one-sided pain</li>
                      <li><strong>Shoulder pain:</strong> Pain at tip of shoulder (internal bleeding sign)</li>
                      <li><strong>Heavy bleeding:</strong> With severe cramping</li>
                      <li><strong>Dizziness/fainting:</strong> Signs of blood loss</li>
                      <li><strong>Rectal pressure:</strong> Feeling of needing to have bowel movement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">Hyperemesis Gravidarum (Severe Morning Sickness)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Call Doctor If:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Unable to keep fluids down:</strong> For 24+ hours</li>
                      <li><strong>Vomiting blood:</strong> Any amount of blood in vomit</li>
                      <li><strong>Signs of dehydration:</strong> Dizziness, dry mouth, dark urine</li>
                      <li><strong>Weight loss:</strong> Losing more than 5% of pre-pregnancy weight</li>
                      <li><strong>Decreased urination:</strong> Not urinating for 8+ hours</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-600" />
              Second Trimester Emergency Signs (13-26 weeks)
            </h2>

            <Card className="mb-6 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">Preterm Labor Warning Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Call Doctor Immediately:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Regular contractions:</strong> Every 10 minutes or less for 1+ hours</li>
                      <li><strong>Pelvic pressure:</strong> Feeling like baby is pushing down</li>
                      <li><strong>Low backache:</strong> Constant, dull pain that comes and goes</li>
                      <li><strong>Vaginal bleeding:</strong> Any bleeding in second trimester</li>
                      <li><strong>Fluid leakage:</strong> Sudden gush or steady trickle</li>
                      <li><strong>Cramping:</strong> Like menstrual cramps, may have diarrhea</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-600">Cervical Incompetence Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Warning Signs:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Painless pressure:</strong> Feeling of fullness in pelvis</li>
                      <li><strong>Backache:</strong> New or worsening lower back pain</li>
                      <li><strong>Vaginal discharge:</strong> Increase in mucus or spotting</li>
                      <li><strong>Mild cramping:</strong> Abdominal cramps without pain</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Risk factors:</strong> Previous cervical surgery, DES exposure, multiple pregnancies
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Thermometer className="w-6 h-6 text-orange-600" />
              Third Trimester Emergency Signs (27+ weeks)
            </h2>

            <Card className="mb-6 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-600">Preeclampsia Warning Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>High-risk factors:</strong> First pregnancy, history of high blood pressure, diabetes, obesity, multiple pregnancies
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Call Doctor Immediately:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Severe headache:</strong> Won't go away with rest/medication</li>
                      <li><strong>Vision changes:</strong> Blurry vision, seeing spots, light sensitivity</li>
                      <li><strong>Upper abdominal pain:</strong> Right side pain under ribs</li>
                      <li><strong>Sudden weight gain:</strong> 2+ pounds in 1 week</li>
                      <li><strong>Severe swelling:</strong> Face, hands, feet (especially sudden)</li>
                      <li><strong>Shortness of breath:</strong> Difficulty breathing or chest pain</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-2">HELLP Syndrome (Medical Emergency):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Right upper abdominal pain</li>
                      <li>Nausea and vomiting (later in pregnancy)</li>
                      <li>Headache and malaise</li>
                      <li>Call 911 immediately</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-600">Placental Abruption Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Emergency Signs (Call 911):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Severe abdominal pain:</strong> Sudden, constant, knife-like pain</li>
                      <li><strong>Heavy bleeding:</strong> Bright red or dark blood</li>
                      <li><strong>Uterine tenderness:</strong> Hard, board-like abdomen</li>
                      <li><strong>Back pain:</strong> Severe lower back pain</li>
                      <li><strong>Contractions:</strong> Frequent, painful contractions</li>
                      <li><strong>Decreased fetal movement:</strong> Baby moving less than usual</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Risk Factors:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Previous placental abruption</li>
                      <li>High blood pressure</li>
                      <li>Smoking or cocaine use</li>
                      <li>Abdominal trauma</li>
                      <li>Multiple pregnancies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">Placenta Previa Bleeding</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Typical Presentation:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Painless bleeding:</strong> Bright red blood, often sudden</li>
                      <li><strong>No abdominal pain:</strong> Unlike abruption, usually painless</li>
                      <li><strong>May stop and start:</strong> Bleeding may be intermittent</li>
                      <li><strong>Usually after 20 weeks:</strong> Second or third trimester</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm bg-yellow-100 p-3 rounded">
                    <strong>Important:</strong> Any bleeding in third trimester requires immediate medical evaluation
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-green-600" />
              Decreased Fetal Movement
            </h2>

            <Card className="mb-6 border-green-200">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">When to Monitor and When to Worry:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Normal Patterns:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Feel movement by 16-25 weeks</li>
                      <li>• 10+ movements in 2 hours (after 28 weeks)</li>
                      <li>• Baby has active and quiet periods</li>
                      <li>• Movement strongest in evening</li>
                      <li>• Position changes affect sensation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Call Doctor If:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• No movement for 12+ hours</li>
                      <li>• Significant decrease from normal pattern</li>
                      <li>• Fewer than 10 movements in 2 hours</li>
                      <li>• No response to stimulation (cold drink, position change)</li>
                      <li>• Concerning change after 28 weeks</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">How to Check Fetal Movement:</h5>
                  <ol className="list-decimal pl-6 text-sm space-y-1">
                    <li>Choose time when baby is usually active</li>
                    <li>Lie on your left side</li>
                    <li>Have a cold drink or snack</li>
                    <li>Count movements for 2 hours</li>
                    <li>Contact doctor if fewer than 10 movements</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Infection Warning Signs</h2>

            <Card className="mb-6 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-600">Signs of Serious Infection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Call Doctor Immediately:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>High fever:</strong> 101°F (38.3°C) or higher</li>
                      <li><strong>Chills:</strong> Shaking chills with fever</li>
                      <li><strong>Persistent vomiting:</strong> Unable to keep fluids down</li>
                      <li><strong>Severe diarrhea:</strong> Watery stools with cramping</li>
                      <li><strong>Urinary symptoms:</strong> Burning, frequent urination, back pain</li>
                      <li><strong>Rash:</strong> Especially with fever</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">Group B Strep Symptoms (Late Pregnancy):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Burning during urination</li>
                      <li>Frequent, urgent urination</li>
                      <li>Fever during labor</li>
                      <li>Abnormal vaginal discharge</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Do in an Emergency</h2>

            <Card className="mb-6 border-gray-200 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Emergency Action Steps:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">For Life-Threatening Symptoms:</h5>
                    <ol className="list-decimal pl-6 text-sm space-y-1">
                      <li><strong>Call 911 immediately</strong> - Don't drive yourself</li>
                      <li><strong>Stay calm</strong> and speak clearly to dispatcher</li>
                      <li><strong>Describe symptoms</strong> and mention you're pregnant</li>
                      <li><strong>Follow instructions</strong> from emergency personnel</li>
                      <li><strong>Bring prenatal records</strong> if time permits</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">For Urgent But Not Life-Threatening:</h5>
                    <ol className="list-decimal pl-6 text-sm space-y-1">
                      <li><strong>Call your doctor's office</strong> - use after-hours line if needed</li>
                      <li><strong>Describe symptoms clearly</strong> - when started, severity</li>
                      <li><strong>Ask if you should</strong> go to emergency room or wait</li>
                      <li><strong>Follow up</strong> as instructed</li>
                      <li><strong>Don't wait</strong> if symptoms worsen</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Contact Information</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Keep These Numbers Handy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Primary Contacts:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>OB/GYN Office:</strong> ________________</li>
                      <li>• <strong>After-hours line:</strong> ________________</li>
                      <li>• <strong>Hospital L&D:</strong> ________________</li>
                      <li>• <strong>Pharmacy:</strong> ________________</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Emergency Contacts:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>911:</strong> Life-threatening emergencies</li>
                      <li>• <strong>Poison Control:</strong> 1-800-222-1222</li>
                      <li>• <strong>Partner:</strong> ________________</li>
                      <li>• <strong>Emergency Contact:</strong> ________________</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preparing for Emergency Situations</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Emergency Preparedness Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Keep Ready at All Times:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Hospital bag packed (after 28 weeks)</li>
                      <li>Insurance cards and ID</li>
                      <li>Copy of prenatal records</li>
                      <li>List of current medications</li>
                      <li>Emergency contact information</li>
                      <li>Transportation plan to hospital</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Discuss with Partner/Family:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Warning signs to watch for</li>
                      <li>When to call 911 vs. doctor</li>
                      <li>Fastest route to hospital</li>
                      <li>Backup transportation options</li>
                      <li>Childcare plans for other children</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">Remember: Trust Your Instincts</h3>
                <ul className="space-y-2">
                  <li>• You know your body better than anyone</li>
                  <li>• When in doubt, always call your healthcare provider</li>
                  <li>• It's better to be cautious than to wait too long</li>
                  <li>• Don't worry about "bothering" your doctor</li>
                  <li>• Early intervention often leads to better outcomes</li>
                  <li>• Keep this guide handy throughout your pregnancy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </article>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Informed & Prepared</h3>
          <p className="text-lg mb-6 opacity-90">
            Use our pregnancy symptom checker and tracking tools to monitor your health throughout pregnancy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/pregnancy-symptom-checker"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Check Symptoms
            </Link>
            <Link 
              href="/tools/labor-signs-checker"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Labor Signs Checker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}