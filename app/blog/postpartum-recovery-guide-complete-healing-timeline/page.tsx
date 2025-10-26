import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Heart, Calendar, Activity, Shield, Baby } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Postpartum Recovery Guide: Complete 6-Week Healing Timeline | After Birth Recovery',
  description: 'Comprehensive postpartum recovery guide covering physical healing, emotional changes, breastfeeding support, and week-by-week recovery timeline after childbirth.',
  keywords: 'postpartum recovery, after birth recovery, postpartum healing timeline, 6 week recovery, postpartum care, post delivery recovery, new mom recovery',
  openGraph: {
    title: 'Postpartum Recovery Guide: Complete 6-Week Healing Timeline',
    description: 'Essential guide to postpartum recovery with week-by-week healing timeline, care tips, and support resources for new mothers.',
    type: 'article',
  },
};

export default function PostpartumRecoveryGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-purple-100">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                Postpartum Care Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Postpartum Recovery Guide: Complete 6-Week Healing Timeline
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A comprehensive guide to postpartum recovery covering physical healing, emotional wellbeing, breastfeeding support, and what to expect during your 6-week recovery journey.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>Updated October 26, 2025</span>
              <span>•</span>
              <span>25 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Postpartum Recovery Quick Overview
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Physical Recovery:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Vaginal delivery: 6-8 weeks</li>
                      <li>• C-section: 8-12 weeks</li>
                      <li>• Bleeding: 2-6 weeks</li>
                      <li>• Full energy return: 3-6 months</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Rest and sleep when possible</li>
                      <li>• Proper nutrition and hydration</li>
                      <li>• Gentle movement and exercise</li>
                      <li>• Emotional support and bonding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-blue-600" />
              Week-by-Week Recovery Timeline
            </h2>

            <div className="space-y-6 mb-8">
              <Card className="border-pink-200">
                <CardHeader>
                  <CardTitle className="text-lg text-pink-600">Week 1: Immediate Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">What to Expect:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Heavy bleeding (lochia) - bright red</li>
                        <li>• Cramping as uterus contracts</li>
                        <li>• Breast engorgement (if breastfeeding)</li>
                        <li>• Extreme fatigue</li>
                        <li>• Emotional ups and downs</li>
                        <li>• Difficulty with bowel movements</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Care Instructions:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Rest as much as possible</li>
                        <li>• Use pads, not tampons</li>
                        <li>• Peri-bottle for hygiene</li>
                        <li>• Ice packs for swelling</li>
                        <li>• Take prescribed pain medication</li>
                        <li>• Begin gentle walks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">Week 2: Early Healing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">What to Expect:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Bleeding becomes lighter, pinkish</li>
                        <li>• Energy slightly improved</li>
                        <li>• Breastfeeding may be establishing</li>
                        <li>• Some mood swings normal</li>
                        <li>• Possible hair loss beginning</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Care Instructions:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Continue gentle activity</li>
                        <li>• Focus on nutrition</li>
                        <li>• Stay hydrated</li>
                        <li>• Accept help from others</li>
                        <li>• Monitor for infection signs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-600">Weeks 3-4: Gradual Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">What to Expect:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Bleeding significantly reduced</li>
                        <li>• More energy for daily activities</li>
                        <li>• Sleep patterns still disrupted</li>
                        <li>• May feel more like yourself</li>
                        <li>• Stitches dissolving (if applicable)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Care Instructions:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Increase walking duration</li>
                        <li>• Begin pelvic floor exercises</li>
                        <li>• Eat nutrient-rich foods</li>
                        <li>• Practice stress management</li>
                        <li>• Continue monitoring bleeding</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Weeks 5-6: Nearing Normal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">What to Expect:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Bleeding should stop or be minimal</li>
                        <li>• Energy levels improving</li>
                        <li>• Ready for 6-week checkup</li>
                        <li>• May consider returning to work</li>
                        <li>• Possible return of menstruation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Care Instructions:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Prepare for doctor visit</li>
                        <li>• Discuss contraception options</li>
                        <li>• Consider exercise clearance</li>
                        <li>• Address any concerns</li>
                        <li>• Plan childcare if returning to work</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-red-600" />
              Warning Signs: When to Call Your Doctor
            </h2>

            <Card className="mb-8 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-red-800 mb-4">Contact Healthcare Provider Immediately If:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Physical Symptoms:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Heavy bleeding (soaking pad in 1 hour)</li>
                      <li>• Large blood clots (bigger than golf ball)</li>
                      <li>• Fever over 100.4°F (38°C)</li>
                      <li>• Severe abdominal pain</li>
                      <li>• Foul-smelling discharge</li>
                      <li>• Signs of infection at incision site</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Emotional/Mental Symptoms:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Persistent sadness or crying</li>
                      <li>• Anxiety or panic attacks</li>
                      <li>• Thoughts of harming yourself or baby</li>
                      <li>• Inability to care for yourself or baby</li>
                      <li>• Feeling disconnected from baby</li>
                      <li>• Extreme mood swings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Baby className="w-6 h-6 text-pink-600" />
              Breastfeeding Support & Recovery
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Common Breastfeeding Challenges & Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Sore or Cracked Nipples:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Check baby's latch with lactation consultant</li>
                      <li>Apply lanolin or breast milk to nipples</li>
                      <li>Air dry nipples after feeding</li>
                      <li>Use nipple shields if recommended</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">Engorgement:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Feed frequently (every 2-3 hours)</li>
                      <li>Apply cold compresses between feeds</li>
                      <li>Use warm compresses before feeding</li>
                      <li>Express milk if needed for comfort</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">Low Milk Supply Concerns:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Feed on demand, at least 8-12 times daily</li>
                      <li>Ensure adequate hydration and nutrition</li>
                      <li>Get adequate rest when possible</li>
                      <li>Consider pumping after feeds</li>
                      <li>Consult lactation specialist</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Emotional Recovery & Mental Health</h2>

            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Understanding Postpartum Emotions</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Baby Blues (Normal):</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Affects 80% of new mothers</li>
                      <li>• Peaks 3-5 days after birth</li>
                      <li>• Resolves within 2 weeks</li>
                      <li>• Includes mood swings, crying, anxiety</li>
                      <li>• Caused by hormone changes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Postpartum Depression (Seek Help):</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Affects 10-20% of new mothers</li>
                      <li>• Lasts longer than 2 weeks</li>
                      <li>• Severe mood changes</li>
                      <li>• Difficulty bonding with baby</li>
                      <li>• Professional treatment needed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting Your Mental Health</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Self-Care Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Rest when baby sleeps</li>
                    <li>• Accept help from family/friends</li>
                    <li>• Maintain connections with others</li>
                    <li>• Practice mindfulness or meditation</li>
                    <li>• Journal your feelings</li>
                    <li>• Get fresh air daily</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Building Support Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Join new parent groups</li>
                    <li>• Connect with other new moms</li>
                    <li>• Ask family for specific help</li>
                    <li>• Consider postpartum doula services</li>
                    <li>• Maintain communication with partner</li>
                    <li>• Use online support communities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Physical Recovery & Exercise</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Safe Exercise Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Immediate (Days 1-7):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Deep breathing exercises</li>
                      <li>Gentle walking as tolerated</li>
                      <li>Ankle pumps and calf raises</li>
                      <li>Posture awareness</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">Early Recovery (Weeks 2-6):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Extended walking sessions</li>
                      <li>Gentle pelvic floor exercises</li>
                      <li>Core breathing exercises</li>
                      <li>Light stretching</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">After Medical Clearance (6+ weeks):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Low-impact cardio (walking, swimming)</li>
                      <li>Core strengthening exercises</li>
                      <li>Yoga or Pilates (modified)</li>
                      <li>Gradually increase intensity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrition for Recovery</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Essential Nutrients for Healing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Key Nutrients:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Protein:</strong> Tissue repair (80-100g/day)</li>
                      <li>• <strong>Iron:</strong> Blood loss recovery</li>
                      <li>• <strong>Vitamin C:</strong> Wound healing</li>
                      <li>• <strong>Calcium:</strong> Bone health (if breastfeeding)</li>
                      <li>• <strong>Omega-3s:</strong> Brain health, mood</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Recovery Foods:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Lean meats, fish, eggs</li>
                      <li>• Leafy greens, citrus fruits</li>
                      <li>• Whole grains, quinoa</li>
                      <li>• Nuts, seeds, avocado</li>
                      <li>• Plenty of water</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">C-Section Recovery Considerations</h2>

            <Card className="mb-6 border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Additional C-Section Care:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Incision Care:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Keep incision clean and dry</li>
                      <li>• Check for signs of infection daily</li>
                      <li>• Support incision when coughing/sneezing</li>
                      <li>• Wear supportive garments if recommended</li>
                      <li>• No lifting over 10-15 lbs for 6-8 weeks</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Activity Restrictions:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• No driving until pain-free (2-3 weeks)</li>
                      <li>• Avoid stairs when possible initially</li>
                      <li>• No exercise until cleared (8-12 weeks)</li>
                      <li>• Take stairs one at a time</li>
                      <li>• Use splinting technique for comfort</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your 6-Week Postpartum Checkup</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>What to Expect at Your Checkup</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Physical Examination:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Weight and blood pressure check</li>
                      <li>Pelvic exam to check healing</li>
                      <li>Breast examination</li>
                      <li>Incision check (if C-section)</li>
                      <li>Discussion of contraception options</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">Topics to Discuss:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Exercise clearance</li>
                      <li>Return to work plans</li>
                      <li>Breastfeeding concerns</li>
                      <li>Mood and emotional wellbeing</li>
                      <li>Sleep and fatigue levels</li>
                      <li>Family planning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">Remember: Recovery is Individual</h3>
                <ul className="space-y-2">
                  <li>• Every woman's recovery timeline is different</li>
                  <li>• Don't compare your experience to others</li>
                  <li>• It's normal to have good and difficult days</li>
                  <li>• Ask for help when you need it</li>
                  <li>• Trust your instincts about your body and baby</li>
                  <li>• Professional support is available and encouraged</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </article>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Support Your Recovery Journey</h3>
          <p className="text-lg mb-6 opacity-90">
            Track your postpartum healing and access helpful resources during your recovery period.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/baby"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Track Baby's Health
            </Link>
            <Link 
              href="/blog"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              More Recovery Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}