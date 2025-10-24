import { Metadata } from 'next'
import { Heart, Flower, Activity, Target, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yoga Positions for Normal Delivery Preparation | Prenatal Yoga Guide for Natural Birth',
  description: 'Complete guide to prenatal yoga positions that help prepare your body for normal delivery. Safe exercises, breathing techniques, and poses for each trimester.',
  keywords: 'prenatal yoga, yoga for normal delivery, pregnancy yoga poses, natural birth preparation, prenatal exercise, yoga for pregnant women, labor preparation yoga, birthing positions',
  openGraph: {
    title: 'Yoga Positions for Normal Delivery: Complete Prenatal Yoga Guide',
    description: 'Prepare your body for natural birth with safe prenatal yoga positions and breathing techniques.',
    type: 'article',
  },
}

export default function YogaPositionsNormalDeliveryPreparation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Flower className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Yoga Positions for Normal Delivery Preparation</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Safe prenatal yoga poses and breathing techniques to prepare your body for natural birth
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-800">Strengthen</div>
                  <div className="text-purple-600">Pelvic floor & core muscles</div>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <Activity className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-pink-800">Flexibility</div>
                  <div className="text-pink-600">Hip & pelvis mobility</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center">
                  <Target className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-orange-800">Breathing</div>
                  <div className="text-orange-600">Labor breathing techniques</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Safety Notice</h3>
                      <p className="text-orange-700">
                        Always consult your healthcare provider before starting any exercise program during pregnancy. Modify or avoid poses as needed based on your individual condition.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Prenatal Yoga for Normal Delivery</h2>

                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-4">Physical Benefits</h3>
                      <ul className="list-disc list-inside text-green-700 space-y-2">
                        <li>Strengthens pelvic floor muscles</li>
                        <li>Improves hip and pelvis flexibility</li>
                        <li>Enhances core stability</li>
                        <li>Reduces back pain and discomfort</li>
                        <li>Improves posture and balance</li>
                        <li>Increases stamina for labor</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-4">Mental & Emotional Benefits</h3>
                      <ul className="list-disc list-inside text-green-700 space-y-2">
                        <li>Reduces stress and anxiety</li>
                        <li>Improves sleep quality</li>
                        <li>Enhances mind-body connection</li>
                        <li>Builds confidence for delivery</li>
                        <li>Teaches breathing techniques for labor</li>
                        <li>Promotes relaxation and calm</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Essential Breathing Techniques</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">1. Deep Belly Breathing (Pranayama)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">How to Practice:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Sit comfortably with spine straight</li>
                          <li>Place one hand on chest, one on belly</li>
                          <li>Breathe slowly through nose</li>
                          <li>Feel belly expand, chest stays still</li>
                          <li>Exhale slowly through mouth</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Benefits for Labor:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Helps manage contractions</li>
                          <li>Reduces tension and fear</li>
                          <li>Increases oxygen to baby</li>
                          <li>Promotes relaxation between contractions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">2. Ocean Breath (Ujjayi)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Technique:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Breathe in and out through nose</li>
                          <li>Slightly constrict throat</li>
                          <li>Create soft &quot;ocean&quot; sound</li>
                          <li>Keep mouth closed throughout</li>
                          <li>Maintain steady, even rhythm</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Labor Applications:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Maintains focus during contractions</li>
                          <li>Creates calming rhythm</li>
                          <li>Helps conserve energy</li>
                          <li>Reduces anxiety and panic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">First Trimester Yoga Poses (Weeks 1-12)</h2>

                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Gentle Foundation Building</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Cat-Cow Pose (Marjaryasana-Bitilasana)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Start on hands and knees</li>
                          <li>Arch back (cow), then round spine (cat)</li>
                          <li>Move slowly with breath</li>
                          <li>5-10 repetitions</li>
                        </ul>
                        <p className="text-green-600"><strong>Benefits:</strong> Relieves back tension, improves spinal mobility, gentle core engagement</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Child&apos;s Pose (Balasana) - Modified</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Kneel with knees wide apart</li>
                          <li>Sit back on heels</li>
                          <li>Fold forward with arms extended</li>
                          <li>Rest forehead on ground or block</li>
                        </ul>
                        <p className="text-green-600"><strong>Benefits:</strong> Deep relaxation, hip opening, stress relief</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Standing Mountain Pose (Tadasana)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Stand with feet hip-width apart</li>
                          <li>Ground through feet, lengthen spine</li>
                          <li>Shoulders relaxed, crown reaching up</li>
                          <li>Focus on posture and breathing</li>
                        </ul>
                        <p className="text-green-600"><strong>Benefits:</strong> Improves posture, builds stability, mindful awareness</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Second Trimester Yoga Poses (Weeks 13-27)</h2>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Building Strength & Flexibility</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Goddess Pose (Utkata Konasana)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Stand with feet wide, toes turned out</li>
                          <li>Bend knees, lower into squat</li>
                          <li>Keep spine straight, chest open</li>
                          <li>Hold for 30 seconds to 1 minute</li>
                        </ul>
                        <p className="text-blue-600"><strong>Benefits:</strong> Strengthens legs, opens hips, prepares pelvis for birth</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Warrior II (Virabhadrasana II)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Step feet wide apart</li>
                          <li>Turn right foot out, bend right knee</li>
                          <li>Extend arms parallel to floor</li>
                          <li>Hold, then repeat on left side</li>
                        </ul>
                        <p className="text-blue-600"><strong>Benefits:</strong> Builds leg strength, opens hips, improves stamina</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Supported Side Angle (Parsva Konasana)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>From Warrior II, place forearm on thigh</li>
                          <li>Extend top arm over ear</li>
                          <li>Create line from top hand to back heel</li>
                          <li>Breathe deeply, switch sides</li>
                        </ul>
                        <p className="text-blue-600"><strong>Benefits:</strong> Stretches side body, opens ribs for breathing space</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Third Trimester Yoga Poses (Weeks 28-40)</h2>

                <div className="bg-purple-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Labor Preparation & Comfort</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Supported Squat (Malasana)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Squat with feet flat on ground</li>
                          <li>Use wall or blocks for support</li>
                          <li>Keep knees wide, spine straight</li>
                          <li>Practice for short periods</li>
                        </ul>
                        <p className="text-purple-600"><strong>Benefits:</strong> Opens pelvis, encourages optimal baby position, labor position practice</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Butterfly Pose (Baddha Konasana)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Sit with soles of feet together</li>
                          <li>Hold feet, gently pull heels toward body</li>
                          <li>Sit tall, breathe deeply</li>
                          <li>Gently flutter knees up and down</li>
                        </ul>
                        <p className="text-purple-600"><strong>Benefits:</strong> Hip flexibility, pelvic opening, improves circulation</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Pelvic Tilts</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Stand against wall or on hands and knees</li>
                          <li>Tilt pelvis forward and backward</li>
                          <li>Engage core muscles gently</li>
                          <li>10-15 repetitions</li>
                        </ul>
                        <p className="text-purple-600"><strong>Benefits:</strong> Relieves back pain, strengthens core, helps baby positioning</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Pelvic Floor Strengthening</h2>

                <div className="bg-rose-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-rose-800 mb-4">Essential for Birth Preparation</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-rose-700 mb-3">Kegel Exercises</h4>
                      <ul className="list-disc list-inside text-rose-600 space-y-2">
                        <li>Contract pelvic floor muscles</li>
                        <li>Hold for 5-10 seconds</li>
                        <li>Release slowly</li>
                        <li>Repeat 10-15 times</li>
                        <li>Practice multiple times daily</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-rose-700 mb-3">Bridge Pose (Setu Bandhasana)</h4>
                      <ul className="list-disc list-inside text-rose-600 space-y-2">
                        <li>Lie on back with knees bent</li>
                        <li>Lift hips, creating bridge shape</li>
                        <li>Engage glutes and core</li>
                        <li>Hold for 15-30 seconds</li>
                        <li>Lower slowly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Relaxation & Meditation Poses</h2>

                <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4">Stress Relief & Mental Preparation</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">Supported Savasana (Corpse Pose)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-indigo-600 space-y-1">
                          <li>Lie on left side with pillow support</li>
                          <li>Place pillow between knees</li>
                          <li>Support head and belly as needed</li>
                          <li>Focus on complete relaxation</li>
                        </ul>
                        <p className="text-indigo-600"><strong>Benefits:</strong> Deep relaxation, stress relief, better sleep preparation</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">Legs Up the Wall (Viparita Karani)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-indigo-600 space-y-1">
                          <li>Lie near wall with legs up</li>
                          <li>Support lower back with bolster</li>
                          <li>Arms relaxed at sides</li>
                          <li>Hold for 5-15 minutes</li>
                        </ul>
                        <p className="text-indigo-600"><strong>Benefits:</strong> Reduces swelling, improves circulation, deeply relaxing</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Safety Guidelines & Modifications</h2>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <h3 className="text-lg font-bold text-red-800 mb-3">Poses to Avoid During Pregnancy</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      <li>Deep backbends</li>
                      <li>Deep twists</li>
                      <li>Poses on belly</li>
                      <li>Hot yoga</li>
                      <li>Breath retention exercises</li>
                    </ul>
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      <li>Inversions (after first trimester)</li>
                      <li>Lying flat on back (after 20 weeks)</li>
                      <li>Jumping or bouncing movements</li>
                      <li>Overstretching</li>
                      <li>Poses that cause dizziness</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">When to Stop and Consult Your Doctor</h3>
                  <ul className="list-disc list-inside text-yellow-700 space-y-2">
                    <li>Vaginal bleeding or fluid leakage</li>
                    <li>Chest pain or severe shortness of breath</li>
                    <li>Dizziness or fainting</li>
                    <li>Severe headache</li>
                    <li>Calf pain or swelling</li>
                    <li>Decreased fetal movement</li>
                    <li>Preterm labor contractions</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-teal-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-teal-700 space-y-1">
                      <li><a href="/blog/pregnancy-exercise-guide" className="text-teal-600 underline hover:text-teal-800">Pregnancy exercise guide</a></li>
                      <li><a href="/blog/labor-induction-guide" className="text-teal-600 underline hover:text-teal-800">Labor preparation guide</a></li>
                      <li><a href="/blog/delivery-methods-comparison" className="text-teal-600 underline hover:text-teal-800">Delivery methods comparison</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-teal-700 space-y-1">
                      <li><a href="/tools/contraction-timer" className="text-teal-600 underline hover:text-teal-800">Contraction timer</a></li>
                      <li><a href="/blog/stages-of-pre-labor" className="text-teal-600 underline hover:text-teal-800">Stages of pre-labor</a></li>
                      <li><a href="/tools/hospital-bag-checklist" className="text-teal-600 underline hover:text-teal-800">Hospital bag checklist</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}