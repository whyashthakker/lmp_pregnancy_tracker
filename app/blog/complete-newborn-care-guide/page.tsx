import { Metadata } from 'next'
import { Heart, Clock, Brain, Stethoscope, Shield, Baby, Droplets, Thermometer, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Newborn Care Guide: Essential Tips for New Parents | EGSpect',
  description: 'Comprehensive newborn care guide covering feeding, sleeping, bathing, diaper changing, safety tips, and essential care practices for the first weeks of your baby&apos;s life.',
  keywords: 'newborn care guide, baby care tips, newborn feeding, newborn bathing, diaper changing, newborn safety, infant care basics, new parent guide',
}

export default function CompleteNewbornCareGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Baby className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Complete Newborn Care Guide
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Essential care tips and practices for your newborn&apos;s first weeks of life
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8-12</div>
              <div className="text-sm text-gray-600">Feeds per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">16-20 hrs</div>
              <div className="text-sm text-gray-600">Sleep per day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">6-8</div>
              <div className="text-sm text-gray-600">Wet diapers/day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">2-3</div>
              <div className="text-sm text-gray-600">Baths per week</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Welcome to Newborn Care</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Caring for a newborn can feel overwhelming, but with the right knowledge and preparation, 
                  you&apos;ll gain confidence quickly. This comprehensive guide covers all the essential aspects 
                  of newborn care to help you provide the best care for your baby during those crucial first weeks.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Basic Needs</h3>
                    <p className="text-blue-700 text-sm">Feeding, sleeping, diaper changes, and comfort</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Health & Safety</h3>
                    <p className="text-green-700 text-sm">Temperature, hygiene, and medical care</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Development</h3>
                    <p className="text-purple-700 text-sm">Bonding, stimulation, and growth monitoring</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Feeding Guide */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Feeding Your Newborn</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-4">Breastfeeding Basics</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Frequency:</strong> 8-12 times per day</li>
                    <li>• <strong>Duration:</strong> 15-30 minutes per session</li>
                    <li>• <strong>Signs of hunger:</strong> Rooting, sucking motions, fussiness</li>
                    <li>• <strong>Good latch:</strong> Wide mouth, lips flanged out</li>
                    <li>• <strong>Positioning:</strong> Cradle, cross-cradle, football hold</li>
                    <li>• <strong>Milk supply:</strong> Established by 2-4 weeks</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Breastfeeding Tips:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Feed on demand, not by schedule initially</li>
                      <li>• Switch breasts during feeding</li>
                      <li>• Stay hydrated and eat well</li>
                      <li>• Seek help from lactation consultant if needed</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-4">Formula Feeding Basics</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Frequency:</strong> 8-10 times per day</li>
                    <li>• <strong>Amount:</strong> 1-3 oz per feeding initially</li>
                    <li>• <strong>Preparation:</strong> Follow instructions exactly</li>
                    <li>• <strong>Temperature:</strong> Room temperature or slightly warm</li>
                    <li>• <strong>Sterilization:</strong> Bottles and nipples until 12 months</li>
                    <li>• <strong>Storage:</strong> Use within 2 hours once prepared</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Formula Safety:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Never microwave formula</li>
                      <li>• Discard leftover formula after feeding</li>
                      <li>• Check expiration dates</li>
                      <li>• Use filtered or boiled water for mixing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Diaper Changing */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Diaper Changing & Hygiene</h2>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-800 mb-4">Step-by-Step Diaper Changing</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Preparation:</h4>
                    <ul className="space-y-1 text-yellow-600 text-sm">
                      <li>• Gather supplies: diapers, wipes, cream</li>
                      <li>• Clean, flat changing surface</li>
                      <li>• Safety strap or keep one hand on baby</li>
                      <li>• Have everything within reach</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Process:</h4>
                    <ul className="space-y-1 text-yellow-600 text-sm">
                      <li>• Remove dirty diaper carefully</li>
                      <li>• Clean from front to back (especially girls)</li>
                      <li>• Let skin air dry briefly</li>
                      <li>• Apply barrier cream if needed</li>
                      <li>• Secure new diaper snugly but not tight</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Normal Output:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• First 24 hours: 1-2 wet diapers</li>
                      <li>• Day 2-3: 2-3 wet diapers</li>
                      <li>• Day 4+: 6-8 wet diapers daily</li>
                      <li>• Meconium: First 2-3 days</li>
                      <li>• Transitional stools: Days 3-5</li>
                      <li>• Regular stools: After day 5</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Diaper Rash Prevention:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Change diapers promptly</li>
                      <li>• Clean gently with water or mild wipes</li>
                      <li>• Allow skin to air dry</li>
                      <li>• Use barrier cream with zinc oxide</li>
                      <li>• Ensure proper diaper fit</li>
                      <li>• Give diaper-free time daily</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Bathing */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Bathing Your Newborn</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4">Sponge Bath (First Few Weeks)</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Frequency:</strong> 2-3 times per week</li>
                    <li>• <strong>Until:</strong> Umbilical cord falls off</li>
                    <li>• <strong>Supplies:</strong> Washcloths, mild soap, towels</li>
                    <li>• <strong>Water temperature:</strong> Lukewarm (98-100°F)</li>
                    <li>• <strong>Order:</strong> Face first, then body</li>
                    <li>• <strong>Areas to clean:</strong> Face, neck folds, diaper area</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-teal-800 mb-4">Tub Bath (After Cord Heals)</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• <strong>Water depth:</strong> 2-3 inches</li>
                    <li>• <strong>Temperature:</strong> 98-100°F (test with elbow)</li>
                    <li>• <strong>Support:</strong> Hold securely under arms</li>
                    <li>• <strong>Duration:</strong> 5-10 minutes</li>
                    <li>• <strong>Soap:</strong> Mild, fragrance-free baby soap</li>
                    <li>• <strong>Shampoo:</strong> Once or twice per week</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Bath Safety Tips:</h4>
                <ul className="text-purple-700 text-sm space-y-1 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                  <li>• Never leave baby alone, even for seconds</li>
                  <li>• Keep water temperature consistent</li>
                  <li>• Have all supplies ready beforehand</li>
                  <li>• Support baby&apos;s head and neck</li>
                  <li>• Dry baby immediately after bath</li>
                  <li>• Clean from cleanest to dirtiest areas</li>
                </ul>
              </div>
            </section>

            {/* Sleep & Safe Sleep */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Sleep & Safe Sleep Practices</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-800 mb-4">Newborn Sleep Patterns</h3>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• <strong>Total sleep:</strong> 16-20 hours per day</li>
                    <li>• <strong>Sleep cycles:</strong> 2-4 hours at a time</li>
                    <li>• <strong>Day/night confusion:</strong> Normal for first 6 weeks</li>
                    <li>• <strong>Active sleep:</strong> Lots of movement and sounds</li>
                    <li>• <strong>Wake windows:</strong> 45-90 minutes initially</li>
                    <li>• <strong>Sleep cues:</strong> Yawning, rubbing eyes, fussiness</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-800 mb-4">Safe Sleep Guidelines</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• <strong>Back sleeping:</strong> Always place on back</li>
                    <li>• <strong>Firm mattress:</strong> No soft bedding or pillows</li>
                    <li>• <strong>Empty crib:</strong> No toys, bumpers, or blankets</li>
                    <li>• <strong>Room sharing:</strong> Baby in your room 6+ months</li>
                    <li>• <strong>No smoking:</strong> Smoke-free environment</li>
                    <li>• <strong>Temperature:</strong> Keep room comfortable, not hot</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Sleep Environment Tips:</h4>
                <ul className="text-green-700 text-sm space-y-1 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                  <li>• Use a fitted sheet only</li>
                  <li>• Consider a sleep sack instead of blankets</li>
                  <li>• Keep room slightly cool (68-70°F)</li>
                  <li>• Use blackout curtains for day naps</li>
                  <li>• White noise can help some babies</li>
                  <li>• Swaddling may help in early weeks</li>
                </ul>
              </div>
            </section>

            {/* Health & Medical Care */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Health Monitoring & Medical Care</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Vital Signs & Normal Ranges</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
                        <Thermometer className="w-4 h-4" />
                        Temperature
                      </h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Normal: 97.7-99.5°F (36.5-37.5°C)</li>
                        <li>• Rectal temperature most accurate</li>
                        <li>• Fever: 100.4°F+ requires immediate care</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-blue-700 mb-2">Heart Rate</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Normal: 120-160 beats per minute</li>
                        <li>• May vary with activity/sleep</li>
                        <li>• Check by feeling chest or pulse</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-blue-700 mb-2">Breathing</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Normal: 30-60 breaths per minute</li>
                        <li>• Irregular patterns are normal</li>
                        <li>• Watch for difficulty breathing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Umbilical Cord Care</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Daily Care:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Keep cord stump clean and dry</li>
                        <li>• Clean with water if soiled</li>
                        <li>• Fold diaper below cord stump</li>
                        <li>• Allow air exposure when possible</li>
                        <li>• No alcohol or antiseptics needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Normal Process:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Falls off in 7-21 days</li>
                        <li>• May have small amount of bleeding</li>
                        <li>• Slight odor is normal</li>
                        <li>• Belly button may look raw initially</li>
                        <li>• Complete healing in 2-3 weeks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bonding & Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Bonding & Early Development</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-pink-800 mb-4">Bonding Activities</h3>
                  <ul className="space-y-2 text-pink-700">
                    <li>• <strong>Skin-to-skin contact:</strong> As much as possible</li>
                    <li>• <strong>Eye contact:</strong> During feeding and play</li>
                    <li>• <strong>Talking and singing:</strong> Baby loves your voice</li>
                    <li>• <strong>Gentle massage:</strong> Promotes relaxation</li>
                    <li>• <strong>Reading:</strong> Never too early to start</li>
                    <li>• <strong>Responsive care:</strong> Attend to baby&apos;s cues</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-purple-800 mb-4">Early Stimulation</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Tummy time:</strong> 2-3 minutes, several times daily</li>
                    <li>• <strong>High contrast patterns:</strong> Black and white images</li>
                    <li>• <strong>Gentle sounds:</strong> Soft music, nature sounds</li>
                    <li>• <strong>Different textures:</strong> Soft fabrics and toys</li>
                    <li>• <strong>Varied positions:</strong> Carry baby in different ways</li>
                    <li>• <strong>Limit overstimulation:</strong> Watch for baby&apos;s cues</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Safety Guidelines */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Safety Guidelines</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-800 mb-4">Never Leave Baby Alone</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• <strong>Changing table:</strong> Always keep one hand on baby</li>
                    <li>• <strong>Bath time:</strong> Not even for a second</li>
                    <li>• <strong>Car:</strong> Never leave unattended in vehicle</li>
                    <li>• <strong>High surfaces:</strong> Beds, couches, chairs</li>
                    <li>• <strong>With pets:</strong> Always supervise interactions</li>
                    <li>• <strong>Near water:</strong> Drowning risk in small amounts</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <h3 className="font-semibold text-orange-800 mb-4">General Safety</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• <strong>Car seat:</strong> Properly installed, rear-facing</li>
                    <li>• <strong>Hand hygiene:</strong> Wash before handling baby</li>
                    <li>• <strong>Visitors:</strong> Ask sick people to stay away</li>
                    <li>• <strong>Sun protection:</strong> Keep out of direct sunlight</li>
                    <li>• <strong>Temperature:</strong> Avoid overheating or cold</li>
                    <li>• <strong>Choking hazards:</strong> Keep small objects away</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Emergency Signs */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  When to Seek Immediate Medical Attention
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Emergency Signs:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Fever 100.4°F+ (rectal) in baby under 3 months</li>
                      <li>• Difficulty breathing or blue lips/face</li>
                      <li>• Persistent vomiting or inability to keep feeds down</li>
                      <li>• No wet diapers for 12+ hours</li>
                      <li>• Extreme lethargy or difficulty waking</li>
                      <li>• Inconsolable crying for hours</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Call Your Pediatrician For:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Poor feeding or refusing to eat</li>
                      <li>• Excessive sleepiness or irritability</li>
                      <li>• Signs of dehydration</li>
                      <li>• Rash with fever</li>
                      <li>• Unusual or concerning behaviors</li>
                      <li>• Any time you&apos;re worried about your baby</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Trust your instincts:</strong> You know your baby best. If something doesn&apos;t feel right, 
                    don&apos;t hesitate to contact your healthcare provider or seek emergency care.
                  </p>
                </div>
              </div>
            </section>

            {/* Support for Parents */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Support for New Parents</h2>
              <p className="text-gray-700 mb-4">
                Remember that caring for a newborn is a learning process. It&apos;s normal to feel overwhelmed, 
                and it&apos;s okay to ask for help. Every baby is different, and you&apos;ll gradually learn 
                what works best for your little one.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Be Patient</div>
                  <div className="text-sm text-gray-600">Learning takes time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Ask for Help</div>
                  <div className="text-sm text-gray-600">Family, friends, professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Trust Yourself</div>
                  <div className="text-sm text-gray-600">You&apos;re doing great</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Development Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-first-week-guide" className="text-purple-600 hover:underline">First Week Newborn Guide</a></li>
                    <li><a href="/blog/first-month-newborn-guide" className="text-purple-600 hover:underline">First Month Development</a></li>
                    <li><a href="/blog/baby-jaundice-prevention-treatment" className="text-purple-600 hover:underline">Baby Jaundice Guide</a></li>
                    <li><a href="/blog/newborn-vaccinations-guide" className="text-purple-600 hover:underline">Vaccination Schedule</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Helpful Tools:</h3>
                  <ul className="space-y-1">
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-purple-600 hover:underline">Due Date Calculator</a></li>
                    <li><a href="/tools/contraction-timer" className="text-purple-600 hover:underline">Contraction Timer</a></li>
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