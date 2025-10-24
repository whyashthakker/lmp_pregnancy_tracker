import { Metadata } from 'next'
import { Hand, Shield, Heart, AlertTriangle, CheckCircle, Calendar, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'When to Start Massaging Yourself After Cesarean: Recovery Guide | EGSpect',
  description: 'Learn when it\'s safe to start self-massage after cesarean delivery, proper techniques for scar healing, abdominal massage benefits, and postpartum recovery guidelines.',
  keywords: 'cesarean massage, c-section recovery massage, postpartum self massage, cesarean scar massage, abdominal massage after c-section, post cesarean healing, c-section recovery timeline',
}

export default function PostpartumMassageAfterCesarean() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Hand className="w-8 h-8 text-white" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Massage After Cesarean: Recovery Guide
              </h1>
            </div>
            <p className="text-purple-100 text-lg">
              Safe timeline and techniques for self-massage during cesarean recovery
            </p>
          </div>

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-purple-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">6-8 weeks</div>
              <div className="text-sm text-gray-600">Doctor clearance needed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8-12 weeks</div>
              <div className="text-sm text-gray-600">Direct scar massage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">2-3 weeks</div>
              <div className="text-sm text-gray-600">Gentle lymphatic massage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Daily</div>
              <div className="text-sm text-gray-600">Once started</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Understanding Cesarean Recovery</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Recovery from a cesarean delivery involves healing both internal and external incisions. 
                  Massage can be a valuable tool in this recovery process, but timing and technique are 
                  crucial for safe healing. Understanding when and how to begin self-massage can 
                  significantly improve your recovery experience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Circulation Benefits</h3>
                    <p className="text-blue-700 text-sm">Improves blood flow and reduces swelling</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Scar Healing</h3>
                    <p className="text-green-700 text-sm">Promotes healthy tissue formation and flexibility</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Pain Relief</h3>
                    <p className="text-purple-700 text-sm">Reduces tension and promotes relaxation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recovery Timeline */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Cesarean Recovery Timeline for Massage</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4">Week 1-2: Immediate Recovery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">What&apos;s Happening:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• Initial wound healing</li>
                        <li>• High pain and sensitivity</li>
                        <li>• Risk of infection highest</li>
                        <li>• Body adjusting to major surgery</li>
                        <li>• Staples or sutures still in place</li>
                        <li>• Significant swelling and bruising</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Massage Guidelines:</h4>
                      <ul className="space-y-1 text-red-600 text-sm">
                        <li>• <strong>NO direct incision massage</strong></li>
                        <li>• Avoid entire abdominal area</li>
                        <li>• Focus on safe areas only (legs, arms, neck)</li>
                        <li>• Light, gentle touch only</li>
                        <li>• Professional medical supervision required</li>
                        <li>• Prioritize rest and medical care</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Week 2-6: Early Healing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">What&apos;s Happening:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Staples/sutures removed</li>
                        <li>• Initial wound closure complete</li>
                        <li>• Some pain reduction</li>
                        <li>• Gradual increase in mobility</li>
                        <li>• Scar tissue beginning to form</li>
                        <li>• Still significant healing needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Massage Guidelines:</h4>
                      <ul className="space-y-1 text-yellow-600 text-sm">
                        <li>• Light lymphatic drainage around abdomen</li>
                        <li>• Avoid direct scar contact</li>
                        <li>• Gentle circular motions above and below incision</li>
                        <li>• Focus on reducing swelling</li>
                        <li>• 5-10 minutes maximum</li>
                        <li>• Stop if any pain or discomfort</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4">Week 6-8: Medical Clearance Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">What&apos;s Happening:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• 6-week postpartum checkup</li>
                        <li>• Medical clearance for activity</li>
                        <li>• Internal healing assessment</li>
                        <li>• Reduced infection risk</li>
                        <li>• Scar tissue maturing</li>
                        <li>• Improved pain tolerance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Massage Guidelines:</h4>
                      <ul className="space-y-1 text-green-600 text-sm">
                        <li>• <strong>Get doctor&apos;s approval first</strong></li>
                        <li>• Begin gentle abdominal massage</li>
                        <li>• Light pressure around scar area</li>
                        <li>• Gradual introduction of techniques</li>
                        <li>• Monitor body&apos;s response carefully</li>
                        <li>• Increase duration slowly</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Week 8-12: Active Scar Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">What&apos;s Happening:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Scar tissue remodeling phase</li>
                        <li>• Improved tissue strength</li>
                        <li>• Reduced sensitivity</li>
                        <li>• Better mobility and flexibility</li>
                        <li>• Risk of adhesions forming</li>
                        <li>• Optimal time for scar work</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Massage Guidelines:</h4>
                      <ul className="space-y-1 text-blue-600 text-sm">
                        <li>• Direct scar massage approved</li>
                        <li>• Moderate pressure allowed</li>
                        <li>• Multiple techniques can be used</li>
                        <li>• Daily practice recommended</li>
                        <li>• Focus on scar mobility</li>
                        <li>• 15-20 minutes sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Safe Massage Techniques */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Hand className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Safe Massage Techniques</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-800 mb-4">Early Stage Lymphatic Drainage (2-6 weeks)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Technique:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Very light pressure (barely touching skin)</li>
                        <li>• Circular motions around incision area</li>
                        <li>• Start 2-3 inches away from scar</li>
                        <li>• Move in upward direction toward heart</li>
                        <li>• 30 seconds in each area</li>
                        <li>• Total time: 5-10 minutes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-purple-600 text-sm">
                        <li>• Reduces post-surgical swelling</li>
                        <li>• Improves circulation</li>
                        <li>• Helps prevent fluid buildup</li>
                        <li>• Promotes natural healing</li>
                        <li>• Reduces risk of complications</li>
                        <li>• Provides gentle comfort</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Scar Mobilization (8+ weeks with medical clearance)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Direct Scar Massage:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Clean hands and scar area</li>
                        <li>• Use vitamin E oil or gentle moisturizer</li>
                        <li>• Start with light pressure</li>
                        <li>• Massage along the scar line</li>
                        <li>• Cross-friction perpendicular to scar</li>
                        <li>• Gradually increase pressure as tolerated</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Skin Rolling Technique:</h4>
                      <ul className="space-y-1 text-teal-600 text-sm">
                        <li>• Pinch skin gently between fingers</li>
                        <li>• Roll skin away from scar</li>
                        <li>• Hold for 10-15 seconds</li>
                        <li>• Release and repeat along scar</li>
                        <li>• Improves tissue mobility</li>
                        <li>• Prevents adhesion formation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-800 mb-4">Abdominal Muscle Re-education (8+ weeks)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Gentle Massage:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Light circular motions on entire abdomen</li>
                        <li>• Focus on areas of tension</li>
                        <li>• Incorporate deep breathing</li>
                        <li>• Work from center outward</li>
                        <li>• Include oblique muscles</li>
                        <li>• 10-15 minutes daily</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2">Coordination with Exercise:</h4>
                      <ul className="space-y-1 text-orange-600 text-sm">
                        <li>• Combine with gentle core exercises</li>
                        <li>• Practice diaphragmatic breathing</li>
                        <li>• Work on posture correction</li>
                        <li>• Coordinate with pelvic floor exercises</li>
                        <li>• Gradually progress intensity</li>
                        <li>• Monitor for diastasis recti</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Warning Signs & Precautions */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Warning Signs: Stop Massage Immediately
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Immediate Medical Attention:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Sudden increase in pain during massage</li>
                      <li>• Drainage or discharge from incision</li>
                      <li>• Redness, warmth, or swelling around scar</li>
                      <li>• Fever or chills after massage</li>
                      <li>• Opening or separation of incision</li>
                      <li>• Unusual odor from incision area</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Stop and Consult Doctor:</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Persistent pain that worsens</li>
                      <li>• Increased sensitivity to touch</li>
                      <li>• Heavy bleeding or spotting</li>
                      <li>• Nausea or dizziness during massage</li>
                      <li>• Skin changes or discoloration</li>
                      <li>• Any concerns about healing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Remember:</strong> Every woman&apos;s healing process is different. Always trust your 
                    instincts and consult your healthcare provider if you have any concerns about your recovery 
                    or the appropriateness of self-massage.
                  </p>
                </div>
              </div>
            </section>

            {/* Step-by-Step Massage Guide */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Step-by-Step Massage Guide</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-4">Daily Scar Massage Routine (8+ weeks)</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">Preparation (2 minutes)</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Wash hands thoroughly with soap</li>
                        <li>• Ensure scar area is clean and dry</li>
                        <li>• Choose comfortable, private space</li>
                        <li>• Have oil or moisturizer ready</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">Warm-up (3 minutes)</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Apply small amount of oil to fingers</li>
                        <li>• Start with light circular motions around scar</li>
                        <li>• Work from sides toward center</li>
                        <li>• Gradually move closer to scar line</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">Direct Scar Work (5-8 minutes)</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Massage along the scar line with moderate pressure</li>
                        <li>• Use cross-friction motions perpendicular to scar</li>
                        <li>• Practice skin rolling technique</li>
                        <li>• Focus on any areas of thickening or adhesion</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">Surrounding Areas (5 minutes)</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Massage entire abdominal area gently</li>
                        <li>• Include lower ribcage and pelvis</li>
                        <li>• Use broad, sweeping motions</li>
                        <li>• Incorporate deep breathing exercises</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">Cool Down (2 minutes)</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• End with light, soothing strokes</li>
                        <li>• Practice relaxation breathing</li>
                        <li>• Apply moisturizer if needed</li>
                        <li>• Note any changes or improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional vs Self-Massage */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Professional vs. Self-Massage</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-4">Benefits of Professional Massage</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Expertise:</strong> Trained in post-surgical massage</li>
                    <li>• <strong>Assessment:</strong> Can identify problem areas</li>
                    <li>• <strong>Technique:</strong> Advanced scar management skills</li>
                    <li>• <strong>Safety:</strong> Knows contraindications</li>
                    <li>• <strong>Holistic approach:</strong> Full body integration</li>
                    <li>• <strong>Peace of mind:</strong> Professional supervision</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">When to Choose Professional:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Complicated healing process</li>
                      <li>• Significant scar tissue formation</li>
                      <li>• Persistent pain or sensitivity</li>
                      <li>• First-time massage after surgery</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-800 mb-4">Benefits of Self-Massage</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Convenience:</strong> Anytime, anywhere</li>
                    <li>• <strong>Control:</strong> Adjust pressure and technique</li>
                    <li>• <strong>Cost-effective:</strong> No ongoing appointments</li>
                    <li>• <strong>Privacy:</strong> Comfort of your own space</li>
                    <li>• <strong>Body awareness:</strong> Learn your healing process</li>
                    <li>• <strong>Empowerment:</strong> Active role in recovery</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Best Practices for Self-Massage:</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Start with professional guidance</li>
                      <li>• Follow medical clearance timeline</li>
                      <li>• Begin gently and progress slowly</li>
                      <li>• Stay consistent with daily practice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Recovery Support */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Supporting Your Overall Recovery</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-800 mb-4">Lifestyle Factors That Support Healing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Nutrition:</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Protein for tissue repair</li>
                        <li>• Vitamin C for collagen formation</li>
                        <li>• Zinc for wound healing</li>
                        <li>• Adequate hydration</li>
                        <li>• Anti-inflammatory foods</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Sleep & Rest:</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• 7-9 hours of quality sleep</li>
                        <li>• Proper positioning for comfort</li>
                        <li>• Rest periods throughout day</li>
                        <li>• Stress management techniques</li>
                        <li>• Avoid overexertion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-2">Activity Balance:</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Gentle walking as tolerated</li>
                        <li>• Gradual return to activities</li>
                        <li>• Avoid heavy lifting</li>
                        <li>• Listen to your body</li>
                        <li>• Follow medical guidelines</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-800 mb-4">Emotional Support During Recovery</h3>
                  <p className="text-teal-700 mb-4">
                    Recovering from major surgery while caring for a newborn can be emotionally challenging. 
                    Massage can provide not only physical benefits but also emotional support and stress relief.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Mental Health Benefits:</h4>
                      <ul className="text-teal-600 text-sm space-y-1">
                        <li>• Reduces stress and anxiety</li>
                        <li>• Promotes relaxation</li>
                        <li>• Improves mood and well-being</li>
                        <li>• Provides self-care time</li>
                        <li>• Builds confidence in recovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">When to Seek Help:</h4>
                      <ul className="text-teal-600 text-sm space-y-1">
                        <li>• Persistent sadness or anxiety</li>
                        <li>• Difficulty bonding with baby</li>
                        <li>• Overwhelming feelings</li>
                        <li>• Loss of interest in activities</li>
                        <li>• Concerns about recovery progress</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Long-term Benefits */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Long-term Benefits of Consistent Massage</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Improved Scar Appearance</div>
                  <div className="text-sm text-gray-600">Flatter, more flexible, less noticeable</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Better Function</div>
                  <div className="text-sm text-gray-600">Increased mobility and reduced adhesions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">Enhanced Recovery</div>
                  <div className="text-sm text-gray-600">Faster return to normal activities</div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Recovery Guides:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/delivery-methods-comparison" className="text-purple-600 hover:underline">C-Section vs Vaginal Delivery</a></li>
                    <li><a href="/blog/complete-newborn-care-guide" className="text-purple-600 hover:underline">Newborn Care Guide</a></li>
                    <li><a href="/blog/pregnancy-exercise-guide" className="text-purple-600 hover:underline">Postpartum Exercise</a></li>
                    <li><a href="/blog/stages-of-pre-labor" className="text-purple-600 hover:underline">Labor and Delivery</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Baby Care Resources:</h3>
                  <ul className="space-y-1">
                    <li><a href="/blog/newborn-first-week-guide" className="text-purple-600 hover:underline">First Week with Baby</a></li>
                    <li><a href="/blog/formula-vs-breastfeeding-guide" className="text-purple-600 hover:underline">Feeding Guide</a></li>
                    <li><a href="/baby" className="text-purple-600 hover:underline">Baby Health Tracker</a></li>
                    <li><a href="/tools/due-date-calculator" className="text-purple-600 hover:underline">Due Date Calculator</a></li>
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