import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Heart, Users, AlertTriangle, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Safe Pregnancy Yoga Poses by Week - Complete Guide for All Trimesters | Prenatal Yoga',
  description: 'Comprehensive week-by-week guide to safe pregnancy yoga poses. Learn which positions to practice and avoid during each trimester for a healthy, comfortable pregnancy.',
  keywords: 'pregnancy yoga, prenatal yoga poses, safe yoga pregnancy, yoga by trimester, pregnancy exercise, prenatal fitness, yoga poses to avoid pregnancy',
  openGraph: {
    title: 'Safe Pregnancy Yoga Poses by Week - Complete Trimester Guide',
    description: 'Week-by-week prenatal yoga guide with safe poses and positions to avoid during pregnancy.',
    type: 'article',
  },
};

export default function PregnancyYogaGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Safe Pregnancy Yoga: Week-by-Week Guide for All Trimesters
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <Users className="mr-2 h-4 w-4" />
            <span>18 min read • Prenatal Health</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Discover safe and effective yoga poses for every week of pregnancy. This comprehensive guide covers beneficial positions, 
            poses to avoid, and modifications for each trimester to support your changing body and growing baby.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Heart className="mr-2 h-5 w-5" />
              Benefits of Prenatal Yoga
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-700">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• Reduces back pain and improves posture</li>
                <li>• Enhances sleep quality and reduces insomnia</li>
                <li>• Strengthens muscles for labor and delivery</li>
                <li>• Improves flexibility and balance</li>
              </ul>
              <ul className="space-y-2">
                <li>• Reduces stress and anxiety</li>
                <li>• Promotes better breathing techniques</li>
                <li>• Builds community with other expectant mothers</li>
                <li>• Prepares body for postpartum recovery</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Safety Guidelines */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-800">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Essential Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="text-red-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Always Consult Your Healthcare Provider First</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Get medical clearance before starting</li>
                  <li>• Discuss any pregnancy complications</li>
                  <li>• Modify based on your fitness level</li>
                  <li>• Stop if you experience any discomfort</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">General Safety Rules</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Listen to your body and don&apos;t overdo it</li>
                  <li>• Stay hydrated and avoid overheating</li>
                  <li>• Use props for support and stability</li>
                  <li>• Breathe normally - never hold your breath</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* First Trimester (Weeks 1-12) */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-800">First Trimester (Weeks 1-12)</CardTitle>
            <p className="text-gray-600">Building Foundation and Managing Early Symptoms</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">What&apos;s Happening in Your Body</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                  <ul className="space-y-1">
                    <li>• Hormonal changes and fatigue</li>
                    <li>• Morning sickness and nausea</li>
                    <li>• Breast tenderness</li>
                    <li>• Increased heart rate</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Joint loosening due to relaxin</li>
                    <li>• Mood swings and emotional changes</li>
                    <li>• Increased blood volume</li>
                    <li>• Minimal visible body changes</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Safe Poses (Weeks 1-12)
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Mountain Pose (Tadasana)</p>
                      <p className="text-gray-600">Improves posture and grounding. Stand tall with feet hip-width apart.</p>
                    </div>
                    <div>
                      <p className="font-medium">Cat-Cow Stretch</p>
                      <p className="text-gray-600">Relieves back tension. Move slowly between arching and rounding spine.</p>
                    </div>
                    <div>
                      <p className="font-medium">Child&apos;s Pose (Modified)</p>
                      <p className="text-gray-600">Wide-knee version for rest. Keep knees apart to make room for belly.</p>
                    </div>
                    <div>
                      <p className="font-medium">Seated Forward Fold</p>
                      <p className="text-gray-600">Gentle stretch. Don&apos;t compress belly, fold from hips.</p>
                    </div>
                    <div>
                      <p className="font-medium">Standing Side Stretch</p>
                      <p className="text-gray-600">Opens side body. Reach arm overhead and lean gently to side.</p>
                    </div>
                    <div>
                      <p className="font-medium">Warrior II</p>
                      <p className="text-gray-600">Builds strength and stability. Hold for shorter periods.</p>
                    </div>
                    <div>
                      <p className="font-medium">Triangle Pose (Modified)</p>
                      <p className="text-gray-600">Use block for support. Don&apos;t twist deeply.</p>
                    </div>
                    <div>
                      <p className="font-medium">Butterfly Pose</p>
                      <p className="text-gray-600">Hip opener. Sit on blanket for comfort.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Poses to Avoid (Weeks 1-12)
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Deep Backbends</p>
                      <p className="text-gray-600">Wheel, camel pose - can strain abdominal muscles.</p>
                    </div>
                    <div>
                      <p className="font-medium">Deep Twists</p>
                      <p className="text-gray-600">Avoid compressing abdomen and restricting blood flow.</p>
                    </div>
                    <div>
                      <p className="font-medium">Prone Positions</p>
                      <p className="text-gray-600">Belly-down poses become uncomfortable as pregnancy progresses.</p>
                    </div>
                    <div>
                      <p className="font-medium">Hot Yoga</p>
                      <p className="text-gray-600">Risk of overheating and dehydration.</p>
                    </div>
                    <div>
                      <p className="font-medium">Jumping or Sudden Movements</p>
                      <p className="text-gray-600">Joints are more unstable due to relaxin hormone.</p>
                    </div>
                    <div>
                      <p className="font-medium">Deep Core Work</p>
                      <p className="text-gray-600">Intense ab exercises can cause diastasis recti.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">First Trimester Focus</h4>
                <p className="text-yellow-700 text-sm">
                  Concentrate on gentle movements, proper breathing, and building a consistent practice. 
                  Many women experience fatigue, so honor your body&apos;s need for rest and modified poses.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Second Trimester (Weeks 13-26) */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-green-800">Second Trimester (Weeks 13-26)</CardTitle>
            <p className="text-gray-600">The &apos;Golden Period&apos; - Energy Returns with Growing Belly</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">What&apos;s Happening in Your Body</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                  <ul className="space-y-1">
                    <li>• Energy levels often improve</li>
                    <li>• Belly becomes more pronounced</li>
                    <li>• Center of gravity shifts</li>
                    <li>• Increased blood volume</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Round ligament pain may begin</li>
                    <li>• Back pain from postural changes</li>
                    <li>• Possible shortness of breath</li>
                    <li>• Skin and hair changes</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Safe Poses (Weeks 13-26)
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Modified Warrior Poses</p>
                      <p className="text-gray-600">Warrior I & II with wider stance for stability. Use wall for support.</p>
                    </div>
                    <div>
                      <p className="font-medium">Goddess Pose</p>
                      <p className="text-gray-600">Wide-legged squat. Strengthens legs and opens hips.</p>
                    </div>
                    <div>
                      <p className="font-medium">Side-lying Poses</p>
                      <p className="text-gray-600">Side-lying leg lifts and stretches. Support with bolsters.</p>
                    </div>
                    <div>
                      <p className="font-medium">Wall-supported Poses</p>
                      <p className="text-gray-600">Wall downward dog, wall push-ups for upper body strength.</p>
                    </div>
                    <div>
                      <p className="font-medium">Prenatal Sun Salutations</p>
                      <p className="text-gray-600">Modified flow avoiding prone and deep backbends.</p>
                    </div>
                    <div>
                      <p className="font-medium">Supported Bridge</p>
                      <p className="text-gray-600">With block or bolster under sacrum. Brief holds only.</p>
                    </div>
                    <div>
                      <p className="font-medium">Seated Spinal Twist</p>
                      <p className="text-gray-600">Gentle twists away from belly. Use chair or bolster.</p>
                    </div>
                    <div>
                      <p className="font-medium">Tree Pose</p>
                      <p className="text-gray-600">Use wall support. Builds balance and focus.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Poses to Avoid (Weeks 13-26)
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Supine Positions (after 20 weeks)</p>
                      <p className="text-gray-600">Lying on back can compress vena cava, reducing blood flow.</p>
                    </div>
                    <div>
                      <p className="font-medium">Deep Backbends</p>
                      <p className="text-gray-600">Camel, wheel, king pigeon - risk of abdominal separation.</p>
                    </div>
                    <div>
                      <p className="font-medium">Closed Twists</p>
                      <p className="text-gray-600">Twisting toward belly compresses uterus and baby.</p>
                    </div>
                    <div>
                      <p className="font-medium">Inversions</p>
                      <p className="text-gray-600">Headstands, handstands unless very experienced.</p>
                    </div>
                    <div>
                      <p className="font-medium">Intense Core Work</p>
                      <p className="text-gray-600">Boat pose, bicycle crunches can worsen diastasis recti.</p>
                    </div>
                    <div>
                      <p className="font-medium">Deep Hip Openers</p>
                      <p className="text-gray-600">Lotus, pigeon - ligaments are looser, risk of injury.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Second Trimester Modifications</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Use blocks and bolsters for support in seated poses</li>
                  <li>• Widen stance in standing poses for better balance</li>
                  <li>• Avoid deep forward folds - fold from hips with space for belly</li>
                  <li>• Transition slowly between poses to prevent dizziness</li>
                  <li>• Keep water nearby and take breaks as needed</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third Trimester (Weeks 27-40) */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-purple-800">Third Trimester (Weeks 27-40)</CardTitle>
            <p className="text-gray-600">Preparing for Birth - Comfort and Mobility Focus</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">What&apos;s Happening in Your Body</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
                  <ul className="space-y-1">
                    <li>• Significant weight gain and belly growth</li>
                    <li>• Increased back pain and pelvic pressure</li>
                    <li>• Shortness of breath from baby pressing organs</li>
                    <li>• Fatigue returns in final weeks</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Braxton Hicks contractions</li>
                    <li>• Difficulty sleeping and finding comfort</li>
                    <li>• Swelling in hands, feet, and ankles</li>
                    <li>• Baby&apos;s movements become more pronounced</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Safe Poses (Weeks 27-40)
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Supported Child&apos;s Pose</p>
                      <p className="text-gray-600">Wide-knee version with bolster. Provides relief for back.</p>
                    </div>
                    <div>
                      <p className="font-medium">Wall Squats</p>
                      <p className="text-gray-600">Prepare pelvis for birth. Use exercise ball for support.</p>
                    </div>
                    <div>
                      <p className="font-medium">Supported Side-lying Stretches</p>
                      <p className="text-gray-600">Hip flexor stretches, gentle spinal twists with props.</p>
                    </div>
                    <div>
                      <p className="font-medium">Standing Pelvic Tilts</p>
                      <p className="text-gray-600">Against wall. Relieves back pain and improves posture.</p>
                    </div>
                    <div>
                      <p className="font-medium">Supported Warrior III</p>
                      <p className="text-gray-600">Hands on chair or wall. Builds leg strength.</p>
                    </div>
                    <div>
                      <p className="font-medium">Gentle Neck and Shoulder Rolls</p>
                      <p className="text-gray-600">Relieves tension from carrying extra weight.</p>
                    </div>
                    <div>
                      <p className="font-medium">Ankle Circles and Calf Raises</p>
                      <p className="text-gray-600">Improve circulation and reduce swelling.</p>
                    </div>
                    <div>
                      <p className="font-medium">Pranayama (Breathing Exercises)</p>
                      <p className="text-gray-600">Practice labor breathing techniques. Avoid breath retention.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Poses to Avoid (Weeks 27-40)
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">All Supine Positions</p>
                      <p className="text-gray-600">Lying on back compresses major blood vessels.</p>
                    </div>
                    <div>
                      <p className="font-medium">Deep Forward Folds</p>
                      <p className="text-gray-600">Can compress baby and cause dizziness.</p>
                    </div>
                    <div>
                      <p className="font-medium">Prone Positions</p>
                      <p className="text-gray-600">Impossible and unsafe with large belly.</p>
                    </div>
                    <div>
                      <p className="font-medium">Any Balancing Poses Without Support</p>
                      <p className="text-gray-600">High risk of falling due to shifted center of gravity.</p>
                    </div>
                    <div>
                      <p className="font-medium">Deep Twists in Either Direction</p>
                      <p className="text-gray-600">Can compress uterus and restrict baby&apos;s space.</p>
                    </div>
                    <div>
                      <p className="font-medium">Strenuous Vinyasa Flows</p>
                      <p className="text-gray-600">Risk of overheating and overexertion.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Third Trimester Focus</h4>
                <p className="text-purple-700 text-sm mb-3">
                  Emphasize comfort, mobility, and birth preparation. Many poses will need significant modifications or props.
                </p>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Use chairs, walls, and bolsters for all poses</li>
                  <li>• Practice labor positions like squatting and hands-knees</li>
                  <li>• Focus on breathing and relaxation techniques</li>
                  <li>• Gentle movement is better than intense poses</li>
                  <li>• Stop immediately if you feel contractions or discomfort</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Week-by-Week Specific Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Week-by-Week Specific Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-700">Weeks 1-12: Foundation</h4>
                <div className="text-sm space-y-2">
                  <p><strong>Week 1-4:</strong> Gentle introduction, basic poses</p>
                  <p><strong>Week 5-8:</strong> Establish routine, focus on breath</p>
                  <p><strong>Week 9-12:</strong> Build strength, prepare for growth</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-green-700">Weeks 13-26: Building</h4>
                <div className="text-sm space-y-2">
                  <p><strong>Week 13-16:</strong> Increase pose difficulty gradually</p>
                  <p><strong>Week 17-20:</strong> Focus on balance and stability</p>
                  <p><strong>Week 21-26:</strong> Begin major modifications</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-700">Weeks 27-40: Adaptation</h4>
                <div className="text-sm space-y-2">
                  <p><strong>Week 27-32:</strong> Comfort-focused poses</p>
                  <p><strong>Week 33-36:</strong> Birth preparation positions</p>
                  <p><strong>Week 37-40:</strong> Gentle movement, relaxation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Considerations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Special Considerations and Modifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Common Pregnancy Discomforts & Helpful Poses</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-blue-700">Morning Sickness</p>
                    <p className="text-gray-600">Gentle twists, supported child&apos;s pose, pranayama</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-700">Back Pain</p>
                    <p className="text-gray-600">Cat-cow, pelvic tilts, supported child&apos;s pose</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-700">Hip Pain</p>
                    <p className="text-gray-600">Butterfly pose, figure-4 stretch, goddess pose</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-700">Swelling</p>
                    <p className="text-gray-600">Legs up the wall, ankle circles, gentle inversions</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-700">Insomnia</p>
                    <p className="text-gray-600">Restorative poses, gentle twists, meditation</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Props and Equipment</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-green-700">Essential Props</p>
                    <p className="text-gray-600">Bolsters, blocks, blankets, pregnancy pillow</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Optional Equipment</p>
                    <p className="text-gray-600">Exercise ball, wall space, yoga strap</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Clothing Tips</p>
                    <p className="text-gray-600">Comfortable, breathable, stretchy fabrics</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Safety Equipment</p>
                    <p className="text-gray-600">Non-slip mat, water bottle, towel</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Stop or Modify */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800">When to Stop or Seek Medical Advice</CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Stop Yoga Immediately If You Experience:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Vaginal bleeding or fluid leakage</li>
                  <li>• Severe abdominal pain or cramping</li>
                  <li>• Chest pain or difficulty breathing</li>
                  <li>• Dizziness or fainting</li>
                  <li>• Severe headache</li>
                  <li>• Muscle weakness affecting balance</li>
                  <li>• Calf pain or swelling</li>
                  <li>• Decreased fetal movement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Conditions Requiring Special Caution:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Pregnancy-induced hypertension</li>
                  <li>• Placenta previa or placental abruption</li>
                  <li>• Cervical insufficiency</li>
                  <li>• Multiple pregnancies (twins, triplets)</li>
                  <li>• History of preterm labor</li>
                  <li>• Severe anemia</li>
                  <li>• Heart or lung conditions</li>
                  <li>• Any high-risk pregnancy designation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-500" />
              Final Tips for Safe Pregnancy Yoga
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Best Practices</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Start slowly and build gradually</li>
                    <li>• Find a qualified prenatal yoga instructor</li>
                    <li>• Practice consistently but gently</li>
                    <li>• Stay hydrated and cool</li>
                    <li>• Listen to your body above all else</li>
                    <li>• Modify or skip poses that don&apos;t feel right</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Building Your Practice</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Aim for 20-30 minutes, 3-4 times per week</li>
                    <li>• Combine with walking or swimming</li>
                    <li>• Include meditation and breathing exercises</li>
                    <li>• Connect with other pregnant women in classes</li>
                    <li>• Keep a pregnancy yoga journal</li>
                    <li>• Prepare for labor with specific poses</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Remember:</strong> Every pregnancy is unique. What works for one person may not work for another. 
                  Always prioritize safety over achievement, and don&apos;t hesitate to modify or skip poses that don&apos;t feel right. 
                  Your body is doing incredible work growing a baby - honor it with gentle, mindful movement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Resources */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Related Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog/complete-newborn-care-guide" className="text-blue-600 hover:text-blue-700 font-medium">
              Newborn Care Guide
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/postpartum-recovery-guide-complete-healing-timeline" className="text-blue-600 hover:text-blue-700 font-medium">
              Postpartum Recovery
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/pregnancy-emergency-warning-signs-when-call-doctor" className="text-blue-600 hover:text-blue-700 font-medium">
              Pregnancy Warning Signs
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/tools" className="text-blue-600 hover:text-blue-700 font-medium">
              Pregnancy Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}