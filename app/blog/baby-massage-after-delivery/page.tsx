import { Metadata } from 'next'
import { Baby, Heart, Shield, CheckCircle, AlertTriangle, Clock, Hand } from 'lucide-react'

export const metadata: Metadata = {
  title: 'When to Start Baby Massage After Delivery: Complete Guide | EGSpect',
  description: 'Learn when it\'s safe to start massaging your baby after cesarean and vaginal delivery, massage techniques, benefits, and safety guidelines for newborn massage.',
  keywords: 'newborn baby massage, infant massage after delivery, baby massage techniques, when to start baby massage, newborn massage benefits, infant massage safety, baby massage guide',
}

export default function BabyMassageAfterDelivery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Baby className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Baby Massage After Delivery: Complete Guide
              </h1>
            </div>
            <p className="text-pink-100 text-lg">
              Safe timing, techniques, and benefits of infant massage for newborns
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-pink-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">24-48 hrs</div>
              <div className="text-sm text-gray-600">After vaginal delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">1-2 weeks</div>
              <div className="text-sm text-gray-600">After cesarean delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">5-15 min</div>
              <div className="text-sm text-gray-600">Session duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">Daily</div>
              <div className="text-sm text-gray-600">Recommended frequency</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Benefits of Baby Massage</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Baby massage is a wonderful way to bond with your newborn while providing numerous 
                  health and developmental benefits. The timing for starting massage depends on your 
                  delivery method and both your and your baby&apos;s recovery needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Bonding & Development</h3>
                    <p className="text-blue-700 text-sm">Strengthens parent-child connection and supports neurological development</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Physical Benefits</h3>
                    <p className="text-green-700 text-sm">Improves circulation, digestion, and sleep patterns</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Emotional Wellness</h3>
                    <p className="text-purple-700 text-sm">Reduces stress for both baby and parent</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Timing Guidelines */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">When to Start Baby Massage</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">After Vaginal Delivery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Timeline:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <strong>24-48 hours:</strong> Can begin gentle massage</li>
                        <li>• <strong>First week:</strong> Focus on bonding touches</li>
                        <li>• <strong>After 1 week:</strong> Full massage routine</li>
                        <li>• <strong>No restrictions:</strong> Unless complications arise</li>
                        <li>• <strong>Follow baby&apos;s cues:</strong> Start when ready</li>
                        <li>• <strong>Gradual introduction:</strong> Build up slowly</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Considerations:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• Mother&apos;s comfort and energy levels</li>
                        <li>• Baby&apos;s feeding and sleep schedule</li>
                        <li>• Any birth complications or interventions</li>
                        <li>• Baby&apos;s temperament and responsiveness</li>
                        <li>• Presence of visitors or family support</li>
                        <li>• Establishing breastfeeding routine first</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">After Cesarean Delivery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Timeline:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• <strong>1-2 weeks:</strong> Wait for initial healing</li>
                        <li>• <strong>Start gently:</strong> Light touches and strokes</li>
                        <li>• <strong>Avoid strain:</strong> Comfortable positions only</li>
                        <li>• <strong>Short sessions:</strong> 5-10 minutes initially</li>
                        <li>• <strong>Progress slowly:</strong> Increase as you heal</li>
                        <li>• <strong>Listen to body:</strong> Rest when needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Special Considerations:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Mother&apos;s surgical recovery needs</li>
                        <li>• Pain medication effects on alertness</li>
                        <li>• Comfortable positioning challenges</li>
                        <li>• Need for assistance or support</li>
                        <li>• Emotional adjustment period</li>
                        <li>• Doctor&apos;s clearance for activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Massage Techniques by Age */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Hand className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Age-Appropriate Massage Techniques</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Newborn (0-1 month)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Gentle Introduction:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• <strong>Duration:</strong> 5-10 minutes maximum</li>
                        <li>• <strong>Pressure:</strong> Feather-light touch</li>
                        <li>• <strong>Focus areas:</strong> Back, arms, legs</li>
                        <li>• <strong>Avoid:</strong> Stomach until cord heals</li>
                        <li>• <strong>Timing:</strong> Between feeds, when alert</li>
                        <li>• <strong>Environment:</strong> Warm, quiet space</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Basic Strokes:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Gentle stroking from head to toe</li>
                        <li>• Light circular motions on back</li>
                        <li>• Soft brushing with fingertips</li>
                        <li>• Gentle flexing of arms and legs</li>
                        <li>• Light pressure on palms and soles</li>
                        <li>• Soothing face and head touches</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">1-3 Months</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Legs & Feet:</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• &quot;Milking&quot; strokes down legs</li>
                        <li>• Gentle ankle rotations</li>
                        <li>• Toe massage and flexing</li>
                        <li>• Calf and thigh strokes</li>
                        <li>• Foot reflexology points</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Arms & Hands:</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Shoulder to wrist strokes</li>
                        <li>• Gentle arm stretches</li>
                        <li>• Palm and finger massage</li>
                        <li>• Wrist rotations</li>
                        <li>• Hand opening exercises</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Back & Chest:</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Long strokes down spine</li>
                        <li>• Circular back massage</li>
                        <li>• Gentle chest strokes</li>
                        <li>• Shoulder blade massage</li>
                        <li>• Tummy time massage</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">3+ Months</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Advanced Techniques:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• <strong>Duration:</strong> 15-20 minutes</li>
                        <li>• <strong>Pressure:</strong> Slightly firmer touch</li>
                        <li>• <strong>Tummy massage:</strong> For digestion</li>
                        <li>• <strong>Face massage:</strong> Gentle features</li>
                        <li>• <strong>Interactive play:</strong> Combine with games</li>
                        <li>• <strong>Position variety:</strong> Multiple positions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Developmental Focus:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Motor skill development support</li>
                        <li>• Sensory stimulation increase</li>
                        <li>• Social interaction enhancement</li>
                        <li>• Body awareness building</li>
                        <li>• Routine establishment</li>
                        <li>• Communication through touch</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step-by-Step Massage Guide */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Step-by-Step Baby Massage</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4">Complete Massage Routine (10-15 minutes)</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Preparation (2 minutes)</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Warm the room to 75-80°F (24-27°C)</li>
                        <li>• Lay out soft towels or blanket</li>
                        <li>• Wash and warm your hands</li>
                        <li>• Have oil or lotion ready (optional)</li>
                        <li>• Ensure baby is fed but not full</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Legs & Feet (3 minutes)</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Start with gentle strokes from hip to ankle</li>
                        <li>• &quot;Milk&quot; each leg with alternating hands</li>
                        <li>• Massage each toe individually</li>
                        <li>• Circle massage on soles of feet</li>
                        <li>• Gentle ankle and knee flexion</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Arms & Hands (3 minutes)</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Stroke from shoulder to wrist</li>
                        <li>• &quot;Milking&quot; arms with gentle squeezing</li>
                        <li>• Open palms and massage each finger</li>
                        <li>• Gentle arm extensions and flexions</li>
                        <li>• Soft circular motions on shoulders</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Chest & Tummy (3 minutes)</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Gentle strokes across chest from center out</li>
                        <li>• Clockwise circles on tummy (if cord healed)</li>
                        <li>• &quot;I Love U&quot; stroke pattern on abdomen</li>
                        <li>• Light pressure, watch for baby&apos;s response</li>
                        <li>• Skip if baby shows discomfort</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Back & Face (3 minutes)</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Turn baby to tummy, support head</li>
                        <li>• Long strokes from neck to bottom</li>
                        <li>• Small circles on either side of spine</li>
                        <li>• Gentle face strokes from center outward</li>
                        <li>• Soft touches on forehead and cheeks</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Closing (1 minute)</h4>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• End with full-body gentle strokes</li>
                        <li>• Cuddle and maintain eye contact</li>
                        <li>• Speak softly or sing quietly</li>
                        <li>• Dress baby in warm, comfortable clothes</li>
                        <li>• Offer feeding if desired</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety Guidelines */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Safety Guidelines & Precautions
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Never Massage When:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Baby has fever or is unwell</li>
                      <li>• Immediately after feeding</li>
                      <li>• Baby is overly fussy or tired</li>
                      <li>• Skin has rashes, cuts, or irritation</li>
                      <li>• Umbilical cord hasn&apos;t healed</li>
                      <li>• Baby shows signs of distress</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Always Remember:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Follow baby&apos;s cues and comfort level</li>
                      <li>• Use gentle pressure - less is more</li>
                      <li>• Keep room warm and draft-free</li>
                      <li>• Have towels ready for messes</li>
                      <li>• Start slowly and build gradually</li>
                      <li>• Stop if baby becomes upset</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Important:</strong> Trust your instincts as a parent. If something doesn&apos;t feel 
                    right or your baby seems uncomfortable, stop the massage and consult your pediatrician 
                    if you have concerns.
                  </p>
                </div>
              </div>
            </section>

            {/* Warning Signs */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">When to Stop or Seek Advice</h2>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-4">Baby&apos;s Distress Signs:</h3>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Crying:</strong> Persistent or inconsolable crying</li>
                      <li>• <strong>Body language:</strong> Arching back, pulling away</li>
                      <li>• <strong>Skin changes:</strong> Redness, rashes, or irritation</li>
                      <li>• <strong>Breathing:</strong> Rapid or labored breathing</li>
                      <li>• <strong>Temperature:</strong> Feeling hot or cold</li>
                      <li>• <strong>Feeding:</strong> Refusal to eat after massage</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-4">Parent Considerations:</h3>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Your comfort:</strong> Physical pain or limitation</li>
                      <li>• <strong>Emotional state:</strong> Feeling overwhelmed or anxious</li>
                      <li>• <strong>Energy levels:</strong> Too tired to focus properly</li>
                      <li>• <strong>Technique concerns:</strong> Unsure about pressure or method</li>
                      <li>• <strong>Time constraints:</strong> Rushing through massage</li>
                      <li>• <strong>Medical questions:</strong> Any health-related concerns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits of Regular Massage */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Long-term Benefits of Regular Baby Massage</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Physical Development</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Growth & Circulation:</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Improved blood flow</li>
                        <li>• Better oxygen delivery</li>
                        <li>• Enhanced nutrient absorption</li>
                        <li>• Stronger immune system</li>
                        <li>• Healthy weight gain</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Digestion & Sleep:</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Reduced colic and gas</li>
                        <li>• Better bowel movements</li>
                        <li>• Improved sleep patterns</li>
                        <li>• Longer sleep duration</li>
                        <li>• Easier bedtime routine</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Motor Skills:</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Enhanced muscle tone</li>
                        <li>• Better coordination</li>
                        <li>• Improved flexibility</li>
                        <li>• Body awareness development</li>
                        <li>• Motor milestone support</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Emotional & Social Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">For Baby:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Stronger parent-child bond</li>
                        <li>• Increased sense of security</li>
                        <li>• Better emotional regulation</li>
                        <li>• Enhanced social responsiveness</li>
                        <li>• Reduced stress and anxiety</li>
                        <li>• Improved communication skills</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">For Parents:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Increased confidence in baby care</li>
                        <li>• Better understanding of baby&apos;s cues</li>
                        <li>• Reduced parental stress</li>
                        <li>• Enhanced bonding experience</li>
                        <li>• Improved postpartum mood</li>
                        <li>• Special one-on-one time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Creating a Routine */}
            <section className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Creating a Massage Routine</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-pink-600">Best Times</div>
                  <div className="text-sm text-gray-600">Before bath, between feeds, before bedtime</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-pink-600">Consistency</div>
                  <div className="text-sm text-gray-600">Same time daily helps establish routine</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-pink-600">Flexibility</div>
                  <div className="text-sm text-gray-600">Adapt to baby&apos;s changing needs and schedules</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Newborn Care Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/complete-newborn-care-guide" className="text-pink-600 hover:underline">Complete Newborn Care</a></li>
                    <li><a href="/blog/newborn-first-week-guide" className="text-pink-600 hover:underline">First Week Guide</a></li>
                    <li><a href="/blog/postpartum-massage-after-cesarean" className="text-pink-600 hover:underline">Postpartum Self-Massage</a></li>
                    <li><a href="/blog/newborn-sleep-patterns" className="text-pink-600 hover:underline">Baby Sleep Guide</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Development & Health:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-growth-charts-head-height" className="text-pink-600 hover:underline">Growth Charts</a></li>
                    <li><a href="/blog/vitamin-d-sun-exposure-newborns" className="text-pink-600 hover:underline">Vitamin D for Babies</a></li>
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