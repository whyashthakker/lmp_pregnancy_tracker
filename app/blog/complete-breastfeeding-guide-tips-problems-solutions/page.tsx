import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Heart, Clock, AlertTriangle, Check, Baby, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Complete Breastfeeding Guide: Tips, Common Problems & Solutions | Nursing Success',
  description: 'Comprehensive breastfeeding guide covering latch techniques, common problems, milk supply tips, pumping advice, and solutions for successful nursing.',
  keywords: 'breastfeeding guide, nursing tips, breastfeeding problems, milk supply, breastfeeding latch, pumping guide, breastfeeding support, how to breastfeed',
  openGraph: {
    title: 'Complete Breastfeeding Guide: Tips, Common Problems & Solutions',
    description: 'Essential breastfeeding guide with expert tips, problem-solving strategies, and support for successful nursing.',
    type: 'article',
  },
};

export default function CompleteBreastfeedingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-blue-100">
                <Baby className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Breastfeeding Support Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Breastfeeding Guide: Tips, Common Problems & Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about successful breastfeeding, from getting started to troubleshooting common challenges. Expert tips for new and experienced nursing mothers.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>Updated October 26, 2025</span>
              <span>•</span>
              <span>30 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Breastfeeding Quick Start Guide
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">First Hour Goals:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Skin-to-skin contact immediately</li>
                      <li>• First feeding within 1 hour</li>
                      <li>• Proper latch assistance</li>
                      <li>• Room-in with baby</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Early Success Factors:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Feed every 2-3 hours (8-12x daily)</li>
                      <li>• Watch for hunger cues</li>
                      <li>• Ensure proper positioning</li>
                      <li>• Get professional support early</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Baby className="w-6 h-6 text-green-600" />
              Getting Started: First Steps to Success
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Proper Positioning and Latch</h3>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Essential Breastfeeding Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">1. Cradle Hold:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Baby's head in crook of your arm</li>
                      <li>Baby's body facing yours, tummy to tummy</li>
                      <li>Support baby's bottom with your forearm</li>
                      <li>Use opposite hand to support breast</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">2. Cross-Cradle Hold:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Hold baby with arm opposite to nursing breast</li>
                      <li>Support baby's head with your hand</li>
                      <li>Gives more control for positioning</li>
                      <li>Good for newborns and small babies</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">3. Football Hold:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Tuck baby under your arm like a football</li>
                      <li>Support baby's head with your hand</li>
                      <li>Baby's feet point toward your back</li>
                      <li>Excellent for C-section recovery</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">4. Side-Lying Position:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Both you and baby lie on your sides</li>
                      <li>Baby faces your breast</li>
                      <li>Great for nighttime feeding</li>
                      <li>Allows rest while nursing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-green-800 mb-3">Signs of a Good Latch:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">What You'll See:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Baby's mouth wide open</li>
                      <li>• More areola visible above baby's lip</li>
                      <li>• Baby's lips flanged outward</li>
                      <li>• Baby's chin touching breast</li>
                      <li>• No dimpling of cheeks</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">What You'll Feel:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Tugging sensation, not pinching</li>
                      <li>• No pain after initial few seconds</li>
                      <li>• Rhythmic sucking and swallowing</li>
                      <li>• Breast feels softer after feeding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Baby's Hunger Cues</h3>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Early Cues (Best Time to Feed):</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Lip smacking</li>
                      <li>• Rooting behavior</li>
                      <li>• Sucking motions</li>
                      <li>• Hand to mouth movements</li>
                      <li>• Increased alertness</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">Active Cues:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Stretching</li>
                      <li>• Increased movement</li>
                      <li>• Hand to mouth</li>
                      <li>• Fussing</li>
                      <li>• Breathing changes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Late Cues (Calm First):</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Crying</li>
                      <li>• Agitated movements</li>
                      <li>• Red face</li>
                      <li>• Clenched fists</li>
                      <li>• Turning head frantically</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-purple-600" />
              Feeding Schedule and Frequency
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Newborn Feeding Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">First Few Days:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>8-12 feedings per 24 hours</li>
                      <li>Every 1.5-3 hours</li>
                      <li>Sessions may last 10-45 minutes</li>
                      <li>Cluster feeding is normal (especially evenings)</li>
                      <li>Wake baby if sleeping longer than 4 hours</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">First Month:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>8-12 feedings continue</li>
                      <li>Growth spurts at 2-3 weeks</li>
                      <li>May want to nurse more frequently</li>
                      <li>Sessions become more efficient</li>
                      <li>Longer sleep stretches possible</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">Beyond First Month:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>6-8 feedings per day</li>
                      <li>More predictable schedule emerges</li>
                      <li>Growth spurts at 6 weeks, 3 months, 6 months</li>
                      <li>Supply adjusts to baby's needs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              Common Breastfeeding Problems & Solutions
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Sore or Cracked Nipples</h3>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Causes:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Poor latch</li>
                      <li>• Improper positioning</li>
                      <li>• Tongue or lip tie</li>
                      <li>• Thrush infection</li>
                      <li>• Oversupply causing forceful letdown</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Solutions:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Improve latch with lactation consultant</li>
                      <li>• Apply breast milk or lanolin after feeding</li>
                      <li>• Air dry nipples</li>
                      <li>• Use nipple shields if recommended</li>
                      <li>• Start feeding on less sore side</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Engorgement</h3>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Symptoms:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Breasts feel very full, hard, and painful</li>
                      <li>• Skin appears shiny and tight</li>
                      <li>• Nipples may flatten</li>
                      <li>• Low-grade fever possible</li>
                      <li>• Difficulty latching due to firmness</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Relief Strategies:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Feed frequently (every 1-2 hours)</li>
                      <li>• Express milk before feeding to soften</li>
                      <li>• Apply cold compresses between feeds</li>
                      <li>• Use warm compresses before feeding</li>
                      <li>• Take anti-inflammatory medication if needed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Low Milk Supply Concerns</h3>
            
            <Card className="mb-6 border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-orange-800 mb-3">Signs of Adequate Milk Supply:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Baby's Signs:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Gaining weight appropriately</li>
                      <li>• 6+ wet diapers per day</li>
                      <li>• Regular bowel movements</li>
                      <li>• Alert and active when awake</li>
                      <li>• Content between feedings</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Your Signs:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Breasts feel softer after feeding</li>
                      <li>• You hear swallowing sounds</li>
                      <li>• You feel "let-down" sensation</li>
                      <li>• Milk leaks from other breast</li>
                      <li>• You feel relaxed during feeding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Increasing Milk Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Feed More Frequently:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Nurse on demand, at least every 2-3 hours</li>
                      <li>Offer both breasts at each feeding</li>
                      <li>Add extra pumping sessions</li>
                      <li>Do breast compressions during feeding</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">Optimize Your Health:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Stay well-hydrated (8-10 glasses water daily)</li>
                      <li>Eat nutritious, frequent meals</li>
                      <li>Rest when possible</li>
                      <li>Manage stress</li>
                      <li>Consider galactagogues (oatmeal, fenugreek)</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">When to Seek Help:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Baby not gaining weight</li>
                      <li>Fewer than 6 wet diapers per day</li>
                      <li>Signs of dehydration in baby</li>
                      <li>Persistent concern about supply</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Mastitis</h3>
            
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Mastitis Warning Signs:
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Symptoms:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Breast pain, warmth, swelling</li>
                      <li>• Red streaking on breast</li>
                      <li>• Fever and chills</li>
                      <li>• Flu-like symptoms</li>
                      <li>• Tender lump in breast</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Immediate Actions:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Continue breastfeeding</li>
                      <li>• Apply heat before feeding</li>
                      <li>• Massage from plugged area toward nipple</li>
                      <li>• Contact healthcare provider</li>
                      <li>• Get plenty of rest</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-600" />
              Pumping and Milk Storage
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Pumping Success Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">When to Start Pumping:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Wait 3-4 weeks to establish supply</li>
                      <li>Start 2 weeks before returning to work</li>
                      <li>Begin slowly with one session daily</li>
                      <li>Best time is usually morning</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">Pumping Technique:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Use correct flange size</li>
                      <li>Start on low suction, increase gradually</li>
                      <li>Pump for 15-20 minutes</li>
                      <li>Use hands-on pumping technique</li>
                      <li>Look at baby's photo while pumping</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">Increasing Pumping Output:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Pump after morning feeding</li>
                      <li>Power pump (pump 20 min, rest 10 min, repeat 3x)</li>
                      <li>Replace pump parts regularly</li>
                      <li>Stay relaxed and hydrated</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Breast Milk Storage Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Room Temperature:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Fresh milk:</strong> 4 hours</li>
                      <li>• <strong>Previously frozen:</strong> 1-2 hours</li>
                      <li>• Keep covered</li>
                      <li>• Use oldest milk first</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Refrigerator:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Fresh milk:</strong> 4 days</li>
                      <li>• <strong>Previously frozen:</strong> 24 hours</li>
                      <li>• Store in back of fridge</li>
                      <li>• Don't store in door</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-600 mb-2">Freezer:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Standard freezer:</strong> 6 months</li>
                      <li>• <strong>Deep freezer:</strong> 12 months</li>
                      <li>• Store in small amounts (2-4 oz)</li>
                      <li>• Label with date</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrition for Breastfeeding Mothers</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Essential Nutrients for Nursing Mothers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Extra Daily Needs:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Calories:</strong> +330-400 per day</li>
                      <li>• <strong>Protein:</strong> 71g (vs 46g pre-pregnancy)</li>
                      <li>• <strong>Calcium:</strong> 1,000mg</li>
                      <li>• <strong>Iron:</strong> 9mg</li>
                      <li>• <strong>Fluids:</strong> 8-10 glasses water daily</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Best Food Sources:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Lean meats, fish, eggs, beans</li>
                      <li>• Dairy products, leafy greens</li>
                      <li>• Whole grains, quinoa</li>
                      <li>• Nuts, seeds, avocado</li>
                      <li>• Colorful fruits and vegetables</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Seek Professional Help</h2>
            
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-red-800 mb-4">Contact a Lactation Consultant or Healthcare Provider If:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Baby-Related Concerns:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Not gaining weight appropriately</li>
                      <li>• Fewer than 6 wet diapers per day</li>
                      <li>• Seems constantly hungry</li>
                      <li>• Has difficulty latching</li>
                      <li>• Falls asleep at breast frequently</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Mother-Related Concerns:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Persistent severe nipple pain</li>
                      <li>• Signs of mastitis or infection</li>
                      <li>• Concerns about milk supply</li>
                      <li>• Difficulty with latch or positioning</li>
                      <li>• Emotional challenges with breastfeeding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Breastfeeding Resources and Support</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Where to Find Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Professional Support:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• International Board Certified Lactation Consultants (IBCLC)</li>
                      <li>• Your pediatrician or OB/GYN</li>
                      <li>• Hospital lactation services</li>
                      <li>• WIC breastfeeding support</li>
                      <li>• La Leche League meetings</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Online Resources:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Kellymom.com</li>
                      <li>• La Leche League International</li>
                      <li>• Academy of Breastfeeding Medicine</li>
                      <li>• CDC Breastfeeding Guidelines</li>
                      <li>• Local mom groups and forums</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Key Breastfeeding Success Reminders
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Every breastfeeding journey is unique - be patient with yourself</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Proper latch is key to comfortable, effective breastfeeding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Feed on demand to establish and maintain milk supply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Professional help is available and recommended when needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Take care of your own nutrition and wellbeing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Trust your instincts and your baby's cues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </article>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Support Your Breastfeeding Journey</h3>
          <p className="text-lg mb-6 opacity-90">
            Track feeding sessions, monitor baby's growth, and access helpful resources for successful breastfeeding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/feeding-log-tracker"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Track Feeding Log
            </Link>
            <Link 
              href="/tools/baby-weight-calculator"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Monitor Growth
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}