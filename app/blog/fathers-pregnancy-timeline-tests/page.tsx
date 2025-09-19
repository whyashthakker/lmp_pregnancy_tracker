import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Complete Father\'s Pregnancy Timeline: Tests, Appointments & Milestones | Your Journey',
  description: 'Comprehensive timeline for expectant fathers from LMP to delivery. Know what tests, appointments, and milestones to expect throughout your partner\'s pregnancy.',
  keywords: 'father pregnancy timeline, pregnancy tests schedule, prenatal appointments for fathers, pregnancy milestones for dads',
  openGraph: {
    title: 'Complete Father\'s Pregnancy Timeline: Tests, Appointments & Milestones | Your Journey',
    description: 'Complete timeline guide for expectant fathers throughout pregnancy journey.',
    type: 'article',
  },
};

export default function FathersPregnancyTimeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-pink-600 hover:text-pink-700 font-medium mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Complete Father&apos;s Pregnancy Timeline: Tests, Appointments & Milestones
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your comprehensive guide as an expectant father, from the last menstrual period (LMP) to delivery day. 
              Know what to expect, how to prepare, and how to be the best support partner throughout the journey.
            </p>
          </header>

          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Understanding Pregnancy Dating</h2>
              <p className="text-gray-700 text-sm mb-3">
                Pregnancy is calculated from the Last Menstrual Period (LMP), not conception. This means your partner is considered 
                "pregnant" for about 2 weeks before conception actually occurs.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Full-term pregnancy: 37-42 weeks from LMP</li>
                <li>Due date: 40 weeks from LMP</li>
                <li>Conception occurs around week 2</li>
                <li>Implantation occurs around week 3-4</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">First Trimester: Weeks 1-12</h2>
            
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 1-4: Pre-Conception to Implantation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">What's Happening</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Week 1-2: Last menstrual period</li>
                      <li>Week 2: Ovulation and conception</li>
                      <li>Week 3: Fertilized egg travels to uterus</li>
                      <li>Week 4: Implantation occurs</li>
                      <li>Pregnancy hormones begin</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">How You Can Help</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Support healthy lifestyle choices</li>
                      <li>Take folic acid supplements together</li>
                      <li>Quit smoking/drinking if applicable</li>
                      <li>Start tracking cycles if trying to conceive</li>
                      <li>Be patient and supportive</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 5-8: Confirmation and First Appointment</h3>
                <div class="bg-purple-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-purple-800 mb-2">🏥 First Prenatal Appointment (Week 6-8)</h4>
                  <p className="text-purple-700 text-sm mb-2">This is a big moment for both of you!</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Tests and Procedures</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Pregnancy confirmation</li>
                      <li>Complete medical history</li>
                      <li>Physical exam and pelvic exam</li>
                      <li>Blood work (CBC, blood type, STI screening)</li>
                      <li>Urine test</li>
                      <li>Pap smear if due</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Your Role</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Attend the appointment if invited</li>
                      <li>Provide your medical history</li>
                      <li>Ask questions about the pregnancy</li>
                      <li>Discuss your concerns and excitement</li>
                      <li>Start taking prenatal vitamins together</li>
                      <li>Begin learning about pregnancy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 9-12: Managing Early Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Common Symptoms She May Experience</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Morning sickness and nausea</li>
                      <li>Extreme fatigue</li>
                      <li>Breast tenderness</li>
                      <li>Frequent urination</li>
                      <li>Food aversions and cravings</li>
                      <li>Mood swings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">How to Support Her</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Take over cooking if smells bother her</li>
                      <li>Handle household chores</li>
                      <li>Let her rest when needed</li>
                      <li>Be patient with mood changes</li>
                      <li>Keep healthy snacks available</li>
                      <li>Research pregnancy together</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Second Trimester: Weeks 13-27</h2>
            
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 13-16: The "Golden Period" Begins</h3>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-green-800 mb-2">🏥 Regular Prenatal Visits (Every 4 weeks)</h4>
                  <p className="text-green-700 text-sm">Routine monitoring begins</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">What Happens at Visits</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Weight and blood pressure check</li>
                      <li>Urine test for protein and glucose</li>
                      <li>Fetal heartbeat monitoring</li>
                      <li>Fundal height measurement</li>
                      <li>Discussion of symptoms</li>
                      <li>Answer questions and concerns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Your Involvement</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Attend appointments when possible</li>
                      <li>Listen to baby's heartbeat</li>
                      <li>Start discussing birth preferences</li>
                      <li>Begin planning nursery</li>
                      <li>Consider announcing pregnancy</li>
                      <li>Start thinking about childbirth classes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-teal-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 15-20: Optional Genetic Screening</h3>
                <div className="bg-teal-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-teal-800 mb-2">🧬 Genetic Testing Options</h4>
                  <p className="text-teal-700 text-sm">These are optional tests to screen for genetic conditions</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Available Tests</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Quad screen blood test (15-20 weeks)</li>
                      <li>Cell-free DNA testing (10+ weeks)</li>
                      <li>Amniocentesis (15-20 weeks)</li>
                      <li>Carrier screening for genetic conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Decision Making Together</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Discuss testing preferences</li>
                      <li>Consider your family histories</li>
                      <li>Understand what tests can and cannot detect</li>
                      <li>Talk about how you'd handle results</li>
                      <li>Support her decision either way</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 18-22: The Big Ultrasound</h3>
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-orange-800 mb-2">📱 Anatomy Scan - Don't Miss This!</h4>
                  <p className="text-orange-700 text-sm">This is when you'll see your baby in detail and possibly learn the gender</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">What the Scan Shows</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Baby's anatomy and development</li>
                      <li>Growth measurements</li>
                      <li>Placenta location</li>
                      <li>Amniotic fluid levels</li>
                      <li>Gender (if you want to know)</li>
                      <li>Multiple babies confirmation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Make it Special</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Take time off work to attend</li>
                      <li>Bring a camera for photos</li>
                      <li>Ask for extra ultrasound pictures</li>
                      <li>Decide together about learning gender</li>
                      <li>Plan a celebration afterward</li>
                      <li>Share the news with family</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 24-27: Feeling Movement and Preparing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Exciting Developments</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>You might feel baby's kicks</li>
                      <li>Baby responds to sounds</li>
                      <li>Viability milestone reached (24 weeks)</li>
                      <li>Her energy levels are good</li>
                      <li>Belly is clearly showing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Activities and Preparations</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Start talking/singing to baby</li>
                      <li>Begin shopping for baby items</li>
                      <li>Research childbirth classes</li>
                      <li>Start planning maternity leave</li>
                      <li>Take maternity photos</li>
                      <li>Consider a babymoon trip</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Third Trimester: Weeks 28-40</h2>
            
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-red-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 28-32: Increased Monitoring</h3>
                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-red-800 mb-2">🏥 Visits Every 2 Weeks + Important Tests</h4>
                  <p className="text-red-700 text-sm">More frequent monitoring begins</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Key Tests Around 28 Weeks</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Glucose screening test (gestational diabetes)</li>
                      <li>Complete blood count</li>
                      <li>RhoGAM shot if Rh-negative</li>
                      <li>Antibody screening</li>
                      <li>Blood pressure monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Supporting Her Comfort</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Help with household tasks</li>
                      <li>Attend glucose test with her</li>
                      <li>Support dietary changes if needed</li>
                      <li>Massage her back and feet</li>
                      <li>Help her find comfortable positions</li>
                      <li>Start childbirth classes together</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 32-36: Final Preparations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Medical Monitoring</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Baby's position assessment</li>
                      <li>Growth monitoring</li>
                      <li>Blood pressure checks</li>
                      <li>Protein in urine testing</li>
                      <li>Fetal movement counting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Practical Preparations</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Install car seat</li>
                      <li>Pack hospital bags</li>
                      <li>Finish nursery setup</li>
                      <li>Stock up on essentials</li>
                      <li>Plan route to hospital</li>
                      <li>Discuss birth plan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 35-37: Group B Strep and Final Checks</h3>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-green-800 mb-2">🧪 Group B Strep Test (35-37 weeks)</h4>
                  <p className="text-green-700 text-sm">Important test to protect baby during delivery</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">What to Expect</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Simple swab test</li>
                      <li>Checks for GBS bacteria</li>
                      <li>Results determine labor treatment</li>
                      <li>Positive results need antibiotics in labor</li>
                      <li>Very routine and common</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Getting Ready for Labor</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Practice breathing techniques</li>
                      <li>Review labor signs</li>
                      <li>Know when to call doctor</li>
                      <li>Have emergency contacts ready</li>
                      <li>Prepare for different scenarios</li>
                      <li>Take care of last-minute tasks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Weeks 37-40: Weekly Visits and Labor Watch</h3>
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-purple-800 mb-2">🏥 Weekly Appointments + Cervical Checks</h4>
                  <p className="text-purple-700 text-sm">Baby is now considered full-term!</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">What Doctors Monitor</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Cervical dilation and effacement</li>
                      <li>Baby's position and station</li>
                      <li>Blood pressure and weight</li>
                      <li>Signs of preeclampsia</li>
                      <li>Fetal heart rate</li>
                      <li>Signs of labor beginning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Your Final Preparations</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Be on call 24/7</li>
                      <li>Keep hospital bag in car</li>
                      <li>Have phone charged</li>
                      <li>Know labor signs</li>
                      <li>Arrange pet/child care</li>
                      <li>Stay close to home</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial and Practical Timeline</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">First Trimester (Weeks 1-12)</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Review health insurance coverage</li>
                    <li>• Start emergency fund</li>
                    <li>• Research maternity/paternity leave</li>
                    <li>• Consider life insurance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Second Trimester (Weeks 13-27)</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Submit insurance pre-authorization</li>
                    <li>• Research childcare options</li>
                    <li>• Budget for baby expenses</li>
                    <li>• Consider changing health plans</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Third Trimester (Weeks 28-40)</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Finalize maternity leave paperwork</li>
                    <li>• Add baby to insurance</li>
                    <li>• Prepare FMLA documentation</li>
                    <li>• Stock up on necessities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">After Delivery</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Submit birth certificate</li>
                    <li>• Apply for Social Security number</li>
                    <li>• Update insurance coverage</li>
                    <li>• File FMLA if applicable</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="font-medium text-blue-800 mb-2">Your Journey as an Expectant Father</h3>
              <p className="text-blue-700">
                This timeline helps you stay informed and involved throughout your partner's pregnancy. Remember, 
                every pregnancy is unique, so some timelines may vary. The most important thing is to be present, 
                supportive, and engaged in this incredible journey to parenthood. Your involvement and support 
                make a real difference in your partner's experience and your baby's health.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}