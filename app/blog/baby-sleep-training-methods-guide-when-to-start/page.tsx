import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Moon, Clock, Baby, Star, Zap, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Baby Sleep Training Methods Guide: When to Start & Gentle Techniques | Newborn Sleep',
  description: 'Complete guide to baby sleep training methods including gentle techniques, when to start, sleep schedules, and solutions for common sleep challenges.',
  keywords: 'baby sleep training, newborn sleep schedule, baby sleep methods, when to start sleep training, gentle sleep training, baby sleep tips, infant sleep patterns',
  openGraph: {
    title: 'Baby Sleep Training Methods Guide: When to Start & Gentle Techniques',
    description: 'Expert guide to baby sleep training with gentle methods, timing advice, and solutions for better sleep.',
    type: 'article',
  },
};

export default function BabySleepTrainingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-indigo-100">
                <Moon className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                Sleep Training Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Baby Sleep Training Methods Guide: When to Start & Gentle Techniques
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive guide to baby sleep training with gentle methods, age-appropriate techniques, and expert advice for establishing healthy sleep patterns.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>Updated October 26, 2025</span>
              <span>•</span>
              <span>25 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-indigo-200 bg-indigo-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-indigo-800 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Sleep Training Quick Guide
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best Age to Start:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Formal training: 4-6 months</li>
                      <li>• Gentle routines: From birth</li>
                      <li>• Sleep foundations: 2-3 months</li>
                      <li>• Night weaning: 4-6 months</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prerequisites:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Healthy weight gain</li>
                      <li>• No medical issues</li>
                      <li>• Established feeding routine</li>
                      <li>• Family ready for consistency</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Baby className="w-6 h-6 text-pink-600" />
              Understanding Baby Sleep Development
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Sleep Patterns by Age</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-pink-600">Newborn (0-3 months):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Sleep 14-17 hours per day</li>
                      <li>Sleep in 2-4 hour stretches</li>
                      <li>No clear day/night distinction</li>
                      <li>REM sleep dominates</li>
                      <li>Sleep cycles are 50-60 minutes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-blue-600">Infant (3-6 months):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Sleep 12-15 hours per day</li>
                      <li>Longer nighttime sleep stretches</li>
                      <li>Circadian rhythm developing</li>
                      <li>3-4 naps during the day</li>
                      <li>Can begin to self-soothe</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-600">Older Infant (6-12 months):</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Sleep 12-14 hours per day</li>
                      <li>Can sleep through the night</li>
                      <li>2-3 naps during the day</li>
                      <li>Sleep cycles mature to 90 minutes</li>
                      <li>Sleep regressions common</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-600" />
              Popular Sleep Training Methods
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Gentle Methods (Recommended for Beginners)</h3>
            
            <Card className="mb-6 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">The Chair Method (Sleep Lady Shuffle)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Parents who want to be present during the process, sensitive babies
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">How it works:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Sit in a chair next to baby's crib for 3 nights</li>
                      <li>Move chair halfway to door for next 3 nights</li>
                      <li>Move chair to doorway for 3 nights</li>
                      <li>Finally move outside the room</li>
                      <li>Provide comfort without picking up</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Pros & Cons:</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-green-600 mb-1">Pros:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Very gentle approach</li>
                          <li>• Parent presence provides comfort</li>
                          <li>• Less crying than other methods</li>
                          <li>• Good for anxious parents</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-orange-600 mb-1">Cons:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Takes longer to see results</li>
                          <li>• Requires significant time commitment</li>
                          <li>• May be stimulating for some babies</li>
                          <li>• Can take 2-3 weeks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">Pick-Up/Put-Down Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Younger babies (under 6 months), parents who want to offer comfort
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">How it works:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Put baby down awake in crib</li>
                      <li>If baby cries, pick up and comfort until calm</li>
                      <li>Put baby back down while still awake</li>
                      <li>Repeat as needed until baby falls asleep</li>
                      <li>Gradually reduce picking up frequency</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Pros & Cons:</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-green-600 mb-1">Pros:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Provides immediate comfort</li>
                          <li>• No prolonged crying</li>
                          <li>• Builds trust</li>
                          <li>• Works well for younger babies</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-orange-600 mb-1">Cons:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Can be exhausting for parents</li>
                          <li>• May overstimulate some babies</li>
                          <li>• Progress can be slow</li>
                          <li>• Requires patience and consistency</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Graduated Methods</h3>
            
            <Card className="mb-6 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-600">Ferber Method (Progressive Waiting)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Babies 4+ months, parents comfortable with some crying
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">How it works:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Put baby down awake and leave the room</li>
                      <li>If crying, wait predetermined time before checking</li>
                      <li>Offer brief comfort (2 minutes) without picking up</li>
                      <li>Leave again and wait longer interval</li>
                      <li>Gradually increase waiting periods each night</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Sample Schedule:</h5>
                    <div className="text-sm">
                      <p><strong>Night 1:</strong> 3 min, 5 min, 7 min intervals</p>
                      <p><strong>Night 2:</strong> 5 min, 10 min, 15 min intervals</p>
                      <p><strong>Night 3:</strong> 10 min, 15 min, 20 min intervals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">3. No-Tears Approaches</h3>
            
            <Card className="mb-6 border-teal-200">
              <CardHeader>
                <CardTitle className="text-teal-600">No-Cry Sleep Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Parents opposed to any crying, very sensitive babies
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Key Strategies:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Gradually reduce sleep associations</li>
                      <li>Implement consistent bedtime routine</li>
                      <li>Use gentle removal of sleep props</li>
                      <li>Track sleep patterns to identify issues</li>
                      <li>Make small, gradual changes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-orange-600" />
              Preparing for Sleep Training
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Pre-Sleep Training Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Baby Readiness:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• At least 4 months old (for formal training)</li>
                      <li>• Weighs at least 14 pounds</li>
                      <li>• Healthy and no recent illness</li>
                      <li>• No recent major changes</li>
                      <li>• Can stay awake for 2+ hours</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Family Readiness:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Both parents committed to the plan</li>
                      <li>• No major life changes planned</li>
                      <li>• Can be consistent for 1-2 weeks</li>
                      <li>• Backup childcare arranged</li>
                      <li>• Clear on chosen method</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Setting Up the Sleep Environment</h3>
            
            <Card className="mb-6 border-gray-200 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Optimal Sleep Environment:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Room Setup:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Dark room (blackout curtains)</li>
                      <li>• Cool temperature (68-70°F)</li>
                      <li>• White noise machine</li>
                      <li>• Safe crib with firm mattress</li>
                      <li>• No loose bedding or toys</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Sleep Tools:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Swaddle or sleep sack</li>
                      <li>• Pacifier (if breastfeeding established)</li>
                      <li>• Comfortable sleepwear</li>
                      <li>• Baby monitor</li>
                      <li>• Night light for feedings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Establishing Healthy Sleep Routines</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Sample Bedtime Routine (30-45 minutes)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">7:00 PM</span>
                    <span className="text-sm">Start routine - dim lights throughout house</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">7:05 PM</span>
                    <span className="text-sm">Bath time (or washcloth if no bath night)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">7:15 PM</span>
                    <span className="text-sm">Diaper change and pajamas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">7:20 PM</span>
                    <span className="text-sm">Feeding (breast or bottle)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">7:35 PM</span>
                    <span className="text-sm">Story time or lullabies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">7:45 PM</span>
                    <span className="text-sm">Into crib awake, goodnight kisses</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Age-Appropriate Wake Windows</h3>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-pink-600 mb-2">0-3 Months:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• 45-60 minutes awake</li>
                      <li>• Watch for early sleep cues</li>
                      <li>• Frequent short naps</li>
                      <li>• No set schedule yet</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">3-6 Months:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• 1.5-2.5 hours awake</li>
                      <li>• 3-4 naps per day</li>
                      <li>• Morning wake time consistent</li>
                      <li>• Bedtime 6:30-8:00 PM</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">6-12 Months:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• 2.5-4 hours awake</li>
                      <li>• 2-3 naps per day</li>
                      <li>• Predictable schedule</li>
                      <li>• Night sleep 11-12 hours</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Sleep Challenges & Solutions</h2>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">4-Month Sleep Regression</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      <strong>What happens:</strong> Baby's sleep cycles mature, causing more frequent night wakings
                    </p>
                    <div>
                      <h5 className="font-semibold mb-2">Solutions:</h5>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Stick to consistent routine</li>
                        <li>Practice putting baby down awake</li>
                        <li>Avoid creating new sleep associations</li>
                        <li>Be patient - usually lasts 2-6 weeks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Early Morning Wakings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      <strong>Defined as:</strong> Waking before 6:00 AM consistently
                    </p>
                    <div>
                      <h5 className="font-semibold mb-2">Common Causes & Solutions:</h5>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li><strong>Too late bedtime:</strong> Move bedtime earlier by 15-30 minutes</li>
                        <li><strong>Room too bright:</strong> Install blackout curtains</li>
                        <li><strong>Overtired:</strong> Ensure adequate daytime sleep</li>
                        <li><strong>Hunger:</strong> Offer earlier dinner or bedtime snack</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Short Naps (Under 45 minutes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold mb-2">Strategies to Extend Naps:</h5>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Ensure proper wake windows</li>
                        <li>Create consistent nap routine</li>
                        <li>Use white noise and dark room</li>
                        <li>Try "crib hour" - leave baby for full hour</li>
                        <li>Check for environmental disruptions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Night Weaning Guidelines</h2>

            <Card className="mb-6 border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-purple-800 mb-4">When Baby May Be Ready for Night Weaning:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Age & Weight:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• At least 4-6 months old</li>
                      <li>• Weighs at least 15 pounds</li>
                      <li>• Getting adequate calories during day</li>
                      <li>• Healthy growth pattern</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Sleep Signs:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Can sleep 5-6 hour stretches</li>
                      <li>• Wakes mainly out of habit</li>
                      <li>• Takes minimal amounts when fed</li>
                      <li>• Falls back asleep easily</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sleep Training Troubleshooting</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>What If Sleep Training Isn't Working?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Check These Factors:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li><strong>Consistency:</strong> Are all caregivers following the same plan?</li>
                      <li><strong>Timing:</strong> Is baby developmentally ready?</li>
                      <li><strong>Environment:</strong> Is the sleep space optimal?</li>
                      <li><strong>Schedule:</strong> Are wake windows appropriate?</li>
                      <li><strong>Health:</strong> Is baby healthy and comfortable?</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">When to Pause or Modify:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Baby is sick or teething</li>
                      <li>Major life changes (moving, travel)</li>
                      <li>Method seems wrong for your baby</li>
                      <li>Excessive stress for family</li>
                      <li>No improvement after 2 weeks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-600" />
              Special Considerations
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Sleep Training Different Situations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Breastfeeding Mothers:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>May need to pump if eliminating night feeds</li>
                      <li>Watch for supply changes</li>
                      <li>Consider gradual night weaning</li>
                      <li>Maintain morning and bedtime feeds</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">Twins or Multiples:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>May need separate rooms initially</li>
                      <li>Consider staggered training</li>
                      <li>Use white noise to minimize disturbance</li>
                      <li>Train the better sleeper first</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">Reflux or Colic:</h5>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Address underlying issues first</li>
                      <li>May need gentler methods</li>
                      <li>Consider elevated sleep position</li>
                      <li>Work with pediatrician</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">Sleep Training Success Tips</h3>
                <ul className="space-y-2">
                  <li>• Choose a method that feels right for your family</li>
                  <li>• Be consistent but flexible when needed</li>
                  <li>• Remember that every baby is different</li>
                  <li>• Focus on progress, not perfection</li>
                  <li>• Take care of your own sleep needs too</li>
                  <li>• Seek support from family, friends, or professionals</li>
                  <li>• Trust your instincts about your baby's needs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </article>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Track Your Baby's Sleep</h3>
          <p className="text-lg mb-6 opacity-90">
            Monitor sleep patterns, track training progress, and get personalized insights for better baby sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/newborn-sleep-tracker"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Track Sleep Patterns
            </Link>
            <Link 
              href="/baby"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Baby Health Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}