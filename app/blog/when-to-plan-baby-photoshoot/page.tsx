import { Metadata } from 'next'
import { Camera, Clock, Baby, Heart, Calendar, Star, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'When to Plan Baby Photoshoot: Newborn Photography Timing Guide | EGSpect',
  description: 'Complete guide to timing your baby photoshoot including newborn sessions, milestone photos, safety considerations, and preparation tips for memorable baby photography.',
  keywords: 'baby photoshoot timing, newborn photography, baby milestone photos, infant photography session, newborn photo session, baby pictures timing, professional baby photos',
}

export default function WhenToPlanBabyPhotoshoot() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                When to Plan Your Baby Photoshoot
              </h1>
            </div>
            <p className="text-pink-100 text-lg">
              Perfect timing guide for capturing precious newborn and baby milestone moments
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-pink-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">5-14 days</div>
              <div className="text-sm text-gray-600">Newborn session</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">3-6 months</div>
              <div className="text-sm text-gray-600">Milestone session</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">1-2 weeks</div>
              <div className="text-sm text-gray-600">Booking in advance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">1-2 hours</div>
              <div className="text-sm text-gray-600">Session duration</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Capturing Your Baby&apos;s Precious Moments</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Baby photography sessions create lasting memories of your little one&apos;s early days. 
                  Timing is crucial for both safety and achieving those dreamy poses you&apos;ve seen in 
                  professional portfolios. Understanding when to schedule different types of sessions 
                  helps ensure beautiful, safe, and stress-free photo experiences.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Newborn Sessions</h3>
                    <p className="text-blue-700 text-sm">Sleepy poses and curled positions (5-14 days)</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Milestone Photos</h3>
                    <p className="text-green-700 text-sm">Capturing development stages throughout first year</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Family Portraits</h3>
                    <p className="text-purple-700 text-sm">Including parents and siblings in memories</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Newborn Photography Timeline */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Optimal Timing for Newborn Photography</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">The Golden Window: 5-14 Days Old</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Why This Age is Perfect:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <strong>Deep sleep:</strong> Easier to pose safely</li>
                        <li>• <strong>Curled positions:</strong> Still flexible from womb</li>
                        <li>• <strong>Minimal acne:</strong> Clear newborn skin</li>
                        <li>• <strong>Sleeps frequently:</strong> 16-20 hours daily</li>
                        <li>• <strong>Less startle reflex:</strong> Calmer during posing</li>
                        <li>• <strong>Smaller size:</strong> Fits props and setups better</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">What You Can Capture:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Classic curled &quot;froggy&quot; poses</li>
                        <li>• Sleeping in baskets or bowls</li>
                        <li>• Tiny details (fingers, toes, lips)</li>
                        <li>• Parent hands holding baby</li>
                        <li>• Sibling interactions</li>
                        <li>• Peaceful sleeping expressions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Days 0-4: Too Early</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Challenges During First Few Days:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Mother&apos;s recovery from delivery</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-pink-600 hover:underline">Post-delivery healing needs</a></li>
                        <li>• Establishing breastfeeding routine</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-pink-600 hover:underline">Baby&apos;s temperature regulation</a></li>
                        <li>• Potential jaundice development</li>
                        <li>• Umbilical cord still fresh</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Better to Wait Because:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Family needs time to adjust</li>
                        <li>• Less stress for everyone</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-pink-600 hover:underline">Baby becomes more settled</a></li>
                        <li>• Mother feels more ready</li>
                        <li>• Feeding schedule more predictable</li>
                        <li>• Initial swelling subsides</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Days 15+: Different Approach Needed</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Changes After 2 Weeks:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• More alert and awake periods</li>
                        <li>• Stronger neck muscles</li>
                        <li>• Less flexible for curled poses</li>
                        <li>• More reactive to environment</li>
                        <li>• Established sleep patterns</li>
                        <li>• May develop baby acne</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Alternative Photo Styles:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Lifestyle and documentary style</li>
                        <li>• Awake and alert portraits</li>
                        <li>• Interactive family moments</li>
                        <li>• Natural positions and poses</li>
                        <li>• Focus on expressions and personality</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-pink-600 hover:underline">Growth milestone documentation</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Milestone Photography Schedule */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Baby Milestone Photography Schedule</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">3-Month Session: Social Smiles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Developmental Milestones:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• First genuine social smiles</li>
                        <li>• Better head control</li>
                        <li>• More alert and interactive</li>
                        <li>• Follows objects with eyes</li>
                        <li>• Responds to sounds and voices</li>
                        <li>• Stronger muscle tone</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Photo Opportunities:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Capturing first smiles</li>
                        <li>• Tummy time positions</li>
                        <li>• Interaction with parents</li>
                        <li>• Bright, alert expressions</li>
                        <li>• Supported sitting poses</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-pink-600 hover:underline">Safe outdoor sessions</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">6-Month Session: Sitting & Personality</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">New Abilities:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Sitting with support</li>
                        <li>• Reaching for objects</li>
                        <li>• Laughing and squealing</li>
                        <li>• Rolling over</li>
                        <li>• Showing distinct personality</li>
                        <li>• Better sleep schedules</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Creative Setups:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Supported sitting sessions</li>
                        <li>• Cake smash preparation</li>
                        <li>• Seasonal themes</li>
                        <li>• Interactive toys and props</li>
                        <li>• Family lifestyle shots</li>
                        <li>• Outdoor nature sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">9-Month Session: Mobility & Exploration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Developmental Stage:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Crawling or scooting</li>
                        <li>• Pulling to stand</li>
                        <li>• Object permanence</li>
                        <li>• Stranger awareness</li>
                        <li>• Pincer grasp development</li>
                        <li>• More predictable routines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Photo Concepts:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Action shots of crawling</li>
                        <li>• Exploration and curiosity</li>
                        <li>• Standing with support</li>
                        <li>• Playing with favorite toys</li>
                        <li>• Pre-first birthday themes</li>
                        <li>• <a href="/blog/how-to-burp-a-baby" className="text-pink-600 hover:underline">Feeding milestone documentation</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gold-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">12-Month Session: First Birthday Celebration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Major Milestones:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Walking or cruising</li>
                        <li>• First words</li>
                        <li>• Independent sitting</li>
                        <li>• Strong personality</li>
                        <li>• Complex play behaviors</li>
                        <li>• Social interaction skills</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Celebration Ideas:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Cake smash sessions</li>
                        <li>• First birthday party coverage</li>
                        <li>• Year-in-review collages</li>
                        <li>• Comparison with newborn photos</li>
                        <li>• Family celebration portraits</li>
                        <li>• Favorite activities and toys</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Booking and Planning Timeline */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Booking and Planning Timeline</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4">Pregnancy Planning Schedule</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">32-36 Weeks Pregnant: Research & Book</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Research photographers in your area</li>
                        <li>• View portfolios and styles</li>
                        <li>• <a href="/blog/pregnancy-due-date-calculator" className="text-pink-600 hover:underline">Check estimated due date</a></li>
                        <li>• Book tentative newborn session</li>
                        <li>• Discuss pricing and packages</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">37-39 Weeks Pregnant: Finalize Details</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Confirm photographer availability</li>
                        <li>• Discuss session logistics</li>
                        <li>• Plan wardrobe and props</li>
                        <li>• <a href="/blog/pregnancy-medical-checkups" className="text-pink-600 hover:underline">Coordinate with medical timeline</a></li>
                        <li>• Prepare location (home or studio)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">After Birth: Contact Photographer</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Call within 24-48 hours of birth</li>
                        <li>• Confirm baby&apos;s health and readiness</li>
                        <li>• Schedule session for 5-14 days old</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-pink-600 hover:underline">Ensure baby care basics are established</a></li>
                        <li>• Adjust timing if complications arise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety Considerations */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Safety Considerations for Baby Photography
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Photography Safety Requirements:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• <strong>Temperature control:</strong> <a href="/blog/ideal-newborn-temperature-guide" className="text-pink-600 hover:underline">Maintain 75-80°F room temperature</a></li>
                        <li>• <strong>Hand hygiene:</strong> Everyone washes hands frequently</li>
                        <li>• <strong>Support safety:</strong> Always support baby&apos;s head and neck</li>
                        <li>• <strong>Pose limits:</strong> Never force unnatural positions</li>
                        <li>• <strong>Break frequency:</strong> Regular feeding and comfort breaks</li>
                        <li>• <strong>Backup safety:</strong> Spotter for all elevated poses</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">When to Postpone Session:</h3>
                      <ul className="space-y-1 text-red-700">
                        <li>• Baby has fever or illness symptoms</li>
                        <li>• <a href="/blog/baby-jaundice-prevention-treatment" className="text-pink-600 hover:underline">Significant jaundice requiring treatment</a></li>
                        <li>• Feeding difficulties or weight loss</li>
                        <li>• Mother&apos;s health complications</li>
                        <li>• Family stress or emergency situations</li>
                        <li>• Photographer or family illness</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Professional tip:</strong> Choose photographers experienced with newborn safety. 
                      Ask about their training, safety protocols, and how they handle composite images 
                      (multiple photos blended for safety).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Preparation Checklist */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Photoshoot Preparation Checklist</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">For Baby:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Day Before Session:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Keep baby on normal schedule</li>
                        <li>• <a href="/blog/baby-massage-after-delivery" className="text-pink-600 hover:underline">Gentle massage for relaxation</a></li>
                        <li>• Normal feeding routine</li>
                        <li>• Good night&apos;s sleep</li>
                        <li>• Avoid overstimulation</li>
                        <li>• Prepare backup outfits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Day of Session:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Feed baby 30-60 minutes before</li>
                        <li>• Arrive with full, content baby</li>
                        <li>• Bring extra diapers and wipes</li>
                        <li>• Pack comfort items</li>
                        <li>• Have feeding supplies ready</li>
                        <li>• Allow flexible timing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">For Parents & Family:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Wardrobe Planning:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Choose neutral, solid colors</li>
                        <li>• Avoid busy patterns or logos</li>
                        <li>• Coordinate but don&apos;t match exactly</li>
                        <li>• Plan for multiple outfit changes</li>
                        <li>• Consider nursing-friendly options</li>
                        <li>• Prepare backup choices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Mental Preparation:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Set realistic expectations</li>
                        <li>• Plan for longer session time</li>
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-pink-600 hover:underline">Ensure mother feels comfortable</a></li>
                        <li>• Prepare for baby&apos;s needs first</li>
                        <li>• Stay flexible with timing</li>
                        <li>• Trust photographer&apos;s expertise</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Home Session Preparation:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Space Setup:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Clear designated area</li>
                        <li>• Ensure good natural lighting</li>
                        <li>• <a href="/blog/ideal-newborn-temperature-guide" className="text-pink-600 hover:underline">Adjust room temperature to 75-80°F</a></li>
                        <li>• Remove clutter and distractions</li>
                        <li>• Have comfortable seating available</li>
                        <li>• Prepare white noise if needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Logistics:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Plan parking for photographer</li>
                        <li>• Secure pets in separate area</li>
                        <li>• Minimize household visitors</li>
                        <li>• Have snacks and water available</li>
                        <li>• Ensure phone is charged</li>
                        <li>• Prepare payment if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Circumstances */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Baby className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Special Circumstances & Considerations</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Premature Babies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Timing Adjustments:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Wait for medical clearance</li>
                        <li>• Use adjusted age for timing</li>
                        <li>• May need to wait longer than 14 days</li>
                        <li>• <a href="/blog/newborn-growth-charts-head-height" className="text-pink-600 hover:underline">Consider size and development</a></li>
                        <li>• Shorter session durations</li>
                        <li>• More frequent breaks needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Special Considerations:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Extra temperature control</li>
                        <li>• Gentler handling requirements</li>
                        <li>• Modified poses for safety</li>
                        <li>• Celebrate progress and milestones</li>
                        <li>• Document NICU graduation</li>
                        <li>• <a href="/blog/vitamin-d-sun-exposure-newborns" className="text-pink-600 hover:underline">Extra protection from environment</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Multiples (Twins, Triplets)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Scheduling Considerations:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Plan for longer sessions</li>
                        <li>• Coordinate feeding schedules</li>
                        <li>• May need multiple dates</li>
                        <li>• Extra help recommended</li>
                        <li>• Individual and group shots</li>
                        <li>• Allow for individual personalities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Creative Opportunities:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Sibling bonding moments</li>
                        <li>• Matching and contrasting setups</li>
                        <li>• Individual personality portraits</li>
                        <li>• Size comparison photos</li>
                        <li>• Family completion celebration</li>
                        <li>• <a href="/blog/complete-newborn-care-guide" className="text-pink-600 hover:underline">Document care routines</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Cesarean Recovery Considerations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Mother&apos;s Comfort:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• <a href="/blog/postpartum-massage-after-cesarean" className="text-pink-600 hover:underline">Allow adequate healing time</a></li>
                        <li>• Comfortable seating options</li>
                        <li>• Avoid lifting or twisting</li>
                        <li>• Plan for assistance with posing</li>
                        <li>• Shorter session if needed</li>
                        <li>• Focus on gentle, natural poses</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Alternative Approaches:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Lifestyle and documentary style</li>
                        <li>• Bed or couch sessions</li>
                        <li>• Focus more on baby portraits</li>
                        <li>• Partner can help with posing</li>
                        <li>• Celebrate strength and recovery</li>
                        <li>• <a href="/blog/what-is-vacuum-delivery" className="text-pink-600 hover:underline">Honor birth story</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost and Package Considerations */}
            <section className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Planning Your Photography Investment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-pink-600">Book Early</div>
                  <div className="text-sm text-gray-600">Best photographers book 1-2 months ahead</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-pink-600">Package Deals</div>
                  <div className="text-sm text-gray-600">Often include multiple milestone sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-pink-600">Flexible Timing</div>
                  <div className="text-sm text-gray-600">Choose photographers who accommodate baby&apos;s needs</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Newborn Care Essentials:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-pink-600 hover:underline">Complete Newborn Care Guide</a></li>
                    <li><a href="/blog/ideal-newborn-temperature-guide" className="text-pink-600 hover:underline">Baby Temperature Guide</a></li>
                    <li><a href="/blog/baby-massage-after-delivery" className="text-pink-600 hover:underline">Baby Massage Timing</a></li>
                    <li><a href="/blog/newborn-growth-charts-head-height" className="text-pink-600 hover:underline">Growth & Development</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Postpartum Recovery:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/postpartum-massage-after-cesarean" className="text-pink-600 hover:underline">Cesarean Recovery</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-pink-600 hover:underline">Safe Sun Exposure</a></li>
                    <li><a href="/baby" className="text-pink-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-pink-600 hover:underline">Due Date Calculator</a></li>
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