'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft, Clock, Baby, Milk, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FeedingSchedule {
  age: string;
  feedingMethod: string;
  frequency: string;
  duration: string;
  amount: string;
  schedule: string[];
  tips: string[];
}

export default function BabyFeedingScheduleCalculatorClient() {
  const [babyAge, setBabyAge] = useState('');
  const [feedingMethod, setFeedingMethod] = useState('');
  const [babyWeight, setBabyWeight] = useState('');
  const [result, setResult] = useState<FeedingSchedule | null>(null);

  const calculateSchedule = () => {
    if (!babyAge || !feedingMethod) return;

    const ageInWeeks = parseInt(babyAge);
    // const _weightKg = babyWeight ? parseFloat(babyWeight) : null;

    let schedule: FeedingSchedule;

    if (ageInWeeks <= 4) {
      // Newborn (0-4 weeks)
      if (feedingMethod === 'breastfeeding') {
        schedule = {
          age: '0-4 weeks (Newborn)',
          feedingMethod: 'Breastfeeding',
          frequency: 'Every 1.5-3 hours (8-12 times per day)',
          duration: '15-45 minutes per session',
          amount: 'On demand',
          schedule: [
            '6:00 AM - Wake up feeding',
            '8:00 AM - Morning feeding',
            '10:30 AM - Mid-morning feeding',
            '1:00 PM - Afternoon feeding',
            '3:30 PM - Late afternoon feeding',
            '6:00 PM - Early evening feeding',
            '8:30 PM - Bedtime feeding',
            '11:00 PM - Late evening feeding',
            '2:00 AM - Night feeding',
            '4:30 AM - Early morning feeding'
          ],
          tips: [
            'Follow baby\'s hunger cues rather than strict schedule',
            'Feed whenever baby shows signs of hunger',
            'Night feedings are normal and necessary',
            'Cluster feeding in evenings is common',
            'Wake baby if sleeping longer than 4 hours during day'
          ]
        };
      } else {
        schedule = {
          age: '0-4 weeks (Newborn)',
          feedingMethod: 'Bottle Feeding',
          frequency: 'Every 2-3 hours (8-10 times per day)',
          duration: '15-30 minutes per session',
          amount: '1-3 oz (30-90ml) per feeding',
          schedule: [
            '6:00 AM - 2 oz (60ml)',
            '9:00 AM - 2 oz (60ml)',
            '12:00 PM - 2.5 oz (75ml)',
            '3:00 PM - 2.5 oz (75ml)',
            '6:00 PM - 3 oz (90ml)',
            '9:00 PM - 3 oz (90ml)',
            '12:00 AM - 2 oz (60ml)',
            '3:00 AM - 2 oz (60ml)'
          ],
          tips: [
            'Start with smaller amounts and increase gradually',
            'Watch for fullness cues (turning away, pushing bottle)',
            'Never force baby to finish bottle',
            'Pace feeding to prevent overfeeding',
            'Formula should be body temperature'
          ]
        };
      }
    } else if (ageInWeeks <= 12) {
      // 1-3 months
      if (feedingMethod === 'breastfeeding') {
        schedule = {
          age: '1-3 months',
          feedingMethod: 'Breastfeeding',
          frequency: 'Every 2-4 hours (6-8 times per day)',
          duration: '15-30 minutes per session',
          amount: 'On demand',
          schedule: [
            '6:00 AM - Wake up feeding',
            '9:00 AM - Morning feeding',
            '12:00 PM - Lunch feeding',
            '3:00 PM - Afternoon feeding',
            '6:00 PM - Dinner feeding',
            '9:00 PM - Bedtime feeding',
            '12:00 AM - Night feeding (may drop)',
            '3:00 AM - Early morning feeding'
          ],
          tips: [
            'Schedule becomes more predictable',
            'May sleep longer stretches at night',
            'Growth spurts may increase frequency temporarily',
            'Watch for efficient feeding patterns',
            'One night feeding may naturally drop'
          ]
        };
      } else {
        schedule = {
          age: '1-3 months',
          feedingMethod: 'Bottle Feeding',
          frequency: 'Every 3-4 hours (6-7 times per day)',
          duration: '15-25 minutes per session',
          amount: '3-5 oz (90-150ml) per feeding',
          schedule: [
            '6:00 AM - 4 oz (120ml)',
            '10:00 AM - 4 oz (120ml)',
            '2:00 PM - 5 oz (150ml)',
            '6:00 PM - 5 oz (150ml)',
            '10:00 PM - 4 oz (120ml)',
            '2:00 AM - 3 oz (90ml)'
          ],
          tips: [
            'Amounts increase as baby grows',
            'May go longer between night feedings',
            'Watch baby\'s weight gain to adjust amounts',
            'Establish more predictable routine',
            'Burp after every 1-2 ounces'
          ]
        };
      }
    } else if (ageInWeeks <= 26) {
      // 3-6 months
      if (feedingMethod === 'breastfeeding') {
        schedule = {
          age: '3-6 months',
          feedingMethod: 'Breastfeeding',
          frequency: 'Every 3-4 hours (5-6 times per day)',
          duration: '15-25 minutes per session',
          amount: 'On demand',
          schedule: [
            '6:00 AM - Wake up feeding',
            '10:00 AM - Morning feeding',
            '2:00 PM - Afternoon feeding',
            '6:00 PM - Evening feeding',
            '10:00 PM - Bedtime feeding',
            '2:00 AM - Night feeding (optional)'
          ],
          tips: [
            'May sleep through night without feeding',
            'Prepare for solid food introduction around 6 months',
            'Maintain milk as primary nutrition source',
            'Growth spurts may temporarily increase frequency',
            'Baby becomes more efficient at feeding'
          ]
        };
      } else {
        schedule = {
          age: '3-6 months',
          feedingMethod: 'Bottle Feeding',
          frequency: 'Every 4 hours (5-6 times per day)',
          duration: '15-20 minutes per session',
          amount: '5-6 oz (150-180ml) per feeding',
          schedule: [
            '6:00 AM - 6 oz (180ml)',
            '10:00 AM - 6 oz (180ml)',
            '2:00 PM - 6 oz (180ml)',
            '6:00 PM - 6 oz (180ml)',
            '10:00 PM - 5 oz (150ml)'
          ],
          tips: [
            'May eliminate night feeding',
            'Introduce sippy cup with water',
            'Prepare for solid food introduction',
            'Total daily intake: 24-32 oz (720-960ml)',
            'Watch for readiness signs for solids'
          ]
        };
      }
    } else {
      // 6+ months
      if (feedingMethod === 'breastfeeding') {
        schedule = {
          age: '6+ months',
          feedingMethod: 'Breastfeeding + Solids',
          frequency: 'Every 4-6 hours (4-5 times per day)',
          duration: '15-20 minutes per session',
          amount: 'On demand + solid foods',
          schedule: [
            '6:00 AM - Wake up feeding',
            '8:00 AM - Solid breakfast + milk',
            '12:00 PM - Solid lunch + milk',
            '4:00 PM - Afternoon milk feeding',
            '6:00 PM - Solid dinner + milk',
            '8:00 PM - Bedtime feeding'
          ],
          tips: [
            'Introduce solid foods gradually',
            'Milk remains primary nutrition source',
            'Offer solids before milk feeding',
            'Watch for allergic reactions to new foods',
            'Night feedings usually eliminated'
          ]
        };
      } else {
        schedule = {
          age: '6+ months',
          feedingMethod: 'Bottle Feeding + Solids',
          frequency: 'Every 4-6 hours (4-5 times per day)',
          duration: '10-15 minutes per session',
          amount: '6-8 oz (180-240ml) per feeding + solids',
          schedule: [
            '6:00 AM - 7 oz (210ml)',
            '8:00 AM - Solid breakfast + 2 oz milk',
            '12:00 PM - Solid lunch + 4 oz milk',
            '4:00 PM - 6 oz (180ml)',
            '6:00 PM - Solid dinner + 2 oz milk',
            '8:00 PM - 6 oz (180ml)'
          ],
          tips: [
            'Introduce variety of solid foods',
            'Total daily milk: 24-30 oz (720-900ml)',
            'Offer water with solid meals',
            'Encourage self-feeding',
            'Follow baby\'s appetite cues'
          ]
        };
      }
    }

    setResult(schedule);
  };

  const reset = () => {
    setBabyAge('');
    setFeedingMethod('');
    setBabyWeight('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Baby Feeding Schedule Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create a personalized feeding schedule for your baby based on age, weight, and feeding method.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="w-5 h-5 text-blue-600" />
                Baby Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="age">Baby's Age (weeks)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="e.g., 8"
                  value={babyAge}
                  onChange={(e) => setBabyAge(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">Enter age in weeks from birth</p>
              </div>

              <div>
                <Label htmlFor="feeding">Primary Feeding Method</Label>
                <Select value={feedingMethod} onValueChange={setFeedingMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select feeding method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breastfeeding">Breastfeeding</SelectItem>
                    <SelectItem value="bottle">Bottle Feeding (Formula/Pumped Milk)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="weight">Baby's Current Weight (kg) - Optional</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 4.5"
                  value={babyWeight}
                  onChange={(e) => setBabyWeight(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">Helps provide more accurate recommendations</p>
              </div>

              <div className="flex gap-4">
                <Button onClick={calculateSchedule} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Create Schedule
                </Button>
                <Button onClick={reset} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card className="shadow-xl border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Recommended Feeding Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-xl font-bold text-blue-600 mb-1">{result.age}</div>
                  <div className="text-sm text-gray-600">{result.feedingMethod}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frequency</h4>
                    <p className="text-sm text-gray-600">{result.frequency}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <p className="text-sm text-gray-600">{result.duration}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Amount per Feeding</h4>
                  <p className="text-sm text-gray-600">{result.amount}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    Suggested Daily Schedule
                  </h4>
                  <div className="space-y-2">
                    {result.schedule.map((feeding, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span className="text-sm">{feeding}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Milk className="w-4 h-4 text-yellow-600" />
                    Feeding Tips
                  </h4>
                  <ul className="space-y-2">
                    {result.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mt-8 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-green-600" />
              Feeding Guidelines by Age
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">0-4 Weeks</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 8-12 feedings/day</li>
                  <li>• Follow hunger cues</li>
                  <li>• Night feedings essential</li>
                  <li>• 1-3 oz if bottle feeding</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">1-3 Months</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 6-8 feedings/day</li>
                  <li>• More predictable schedule</li>
                  <li>• Longer sleep stretches</li>
                  <li>• 3-5 oz if bottle feeding</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">3-6 Months</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5-6 feedings/day</li>
                  <li>• May sleep through night</li>
                  <li>• Efficient feeding</li>
                  <li>• 5-6 oz if bottle feeding</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">6+ Months</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 4-5 milk feedings/day</li>
                  <li>• Introduce solid foods</li>
                  <li>• Milk remains primary</li>
                  <li>• 6-8 oz if bottle feeding</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">Important Reminders:</h5>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Every baby is different - this is a general guide</li>
                <li>• Follow your baby's hunger and fullness cues</li>
                <li>• Consult pediatrician for personalized advice</li>
                <li>• Growth spurts may temporarily change patterns</li>
                <li>• Adjust schedule based on your baby's needs</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Track Your Baby's Feeding</h3>
            <p className="text-lg mb-6 opacity-90">
              Monitor feeding sessions and baby's growth with our comprehensive tracking tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/feeding-log-tracker"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Feeding Log Tracker
              </Link>
              <Link 
                href="/tools/baby-weight-calculator"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Track Baby Growth
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}