'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft, Moon, Clock, Sun, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SleepSchedule {
  ageGroup: string;
  totalSleep: string;
  nightSleep: string;
  napCount: number;
  napDuration: string;
  bedtime: string;
  wakeTime: string;
  schedule: Array<{ time: string; activity: string; duration?: string }>;
  tips: string[];
}

export default function BabySleepScheduleCalculatorClient() {
  const [babyAge, setBabyAge] = useState('');
  const [desiredWakeTime, setDesiredWakeTime] = useState('');
  const [currentBedtime, setCurrentBedtime] = useState('');
  const [result, setResult] = useState<SleepSchedule | null>(null);

  const calculateSleepSchedule = () => {
    if (!babyAge) return;

    const ageInMonths = parseInt(babyAge);
    let schedule: SleepSchedule;

    if (ageInMonths < 1) {
      // Newborn (0-4 weeks)
      schedule = {
        ageGroup: 'Newborn (0-1 month)',
        totalSleep: '14-17 hours',
        nightSleep: '8-9 hours (broken)',
        napCount: 4-6,
        napDuration: '30 minutes - 3 hours',
        bedtime: '9:00-11:00 PM',
        wakeTime: '6:00-8:00 AM',
        schedule: [
          { time: '7:00 AM', activity: 'Wake up & feed' },
          { time: '8:00 AM', activity: 'Nap 1', duration: '1-2 hours' },
          { time: '10:00 AM', activity: 'Wake & feed' },
          { time: '11:00 AM', activity: 'Nap 2', duration: '1-2 hours' },
          { time: '1:00 PM', activity: 'Wake & feed' },
          { time: '2:00 PM', activity: 'Nap 3', duration: '1-2 hours' },
          { time: '4:00 PM', activity: 'Wake & feed' },
          { time: '5:00 PM', activity: 'Nap 4', duration: '30-60 minutes' },
          { time: '6:00 PM', activity: 'Wake & feed' },
          { time: '8:00 PM', activity: 'Bedtime routine' },
          { time: '9:00 PM', activity: 'Night sleep (with night feeds)' }
        ],
        tips: [
          'Sleep when baby sleeps during the day',
          'Don\'t worry about strict schedules yet',
          'Night feeds are normal and necessary',
          'Create calm environment for night feeds',
          'Watch for sleepy cues (yawning, rubbing eyes)'
        ]
      };
    } else if (ageInMonths <= 3) {
      // 1-3 months
      schedule = {
        ageGroup: '1-3 months',
        totalSleep: '12-15 hours',
        nightSleep: '8-10 hours (with 1-2 night feeds)',
        napCount: 3-4,
        napDuration: '1-3 hours',
        bedtime: '8:00-10:00 PM',
        wakeTime: '6:00-7:30 AM',
        schedule: [
          { time: '7:00 AM', activity: 'Wake up & feed' },
          { time: '8:30 AM', activity: 'Morning nap', duration: '1.5-2 hours' },
          { time: '10:30 AM', activity: 'Wake & feed' },
          { time: '12:00 PM', activity: 'Midday nap', duration: '1.5-2 hours' },
          { time: '2:00 PM', activity: 'Wake & feed' },
          { time: '3:30 PM', activity: 'Afternoon nap', duration: '1-1.5 hours' },
          { time: '5:00 PM', activity: 'Wake & feed' },
          { time: '6:30 PM', activity: 'Short catnap', duration: '30-45 minutes' },
          { time: '7:30 PM', activity: 'Bedtime routine' },
          { time: '8:30 PM', activity: 'Night sleep' }
        ],
        tips: [
          'Start establishing bedtime routine',
          'Longer wake periods during the day',
          '1-2 night feeds are still normal',
          'Begin to differentiate day and night',
          'Wake windows: 1-2 hours'
        ]
      };
    } else if (ageInMonths <= 6) {
      // 4-6 months
      schedule = {
        ageGroup: '4-6 months',
        totalSleep: '12-14 hours',
        nightSleep: '10-12 hours (may sleep through)',
        napCount: 3,
        napDuration: '1-2 hours',
        bedtime: '7:00-8:30 PM',
        wakeTime: '6:00-7:00 AM',
        schedule: [
          { time: '6:30 AM', activity: 'Wake up & feed' },
          { time: '8:30 AM', activity: 'Morning nap', duration: '1-2 hours' },
          { time: '10:30 AM', activity: 'Wake & feed' },
          { time: '12:30 PM', activity: 'Afternoon nap', duration: '1-2 hours' },
          { time: '2:30 PM', activity: 'Wake & feed' },
          { time: '4:30 PM', activity: 'Late afternoon nap', duration: '45-60 minutes' },
          { time: '5:30 PM', activity: 'Wake & feed/dinner' },
          { time: '7:00 PM', activity: 'Bedtime routine' },
          { time: '7:30 PM', activity: 'Night sleep' }
        ],
        tips: [
          'May begin sleeping through the night',
          'Consistent bedtime routine important',
          'Wake windows: 2-2.5 hours',
          'Consider sleep training if desired',
          'Room should be dark and cool'
        ]
      };
    } else if (ageInMonths <= 12) {
      // 6-12 months
      schedule = {
        ageGroup: '6-12 months',
        totalSleep: '11-14 hours',
        nightSleep: '10-12 hours',
        napCount: 2,
        napDuration: '1-2 hours each',
        bedtime: '7:00-8:00 PM',
        wakeTime: '6:00-7:00 AM',
        schedule: [
          { time: '6:30 AM', activity: 'Wake up & feed' },
          { time: '9:30 AM', activity: 'Morning nap', duration: '1-2 hours' },
          { time: '11:30 AM', activity: 'Wake, feed & lunch' },
          { time: '2:00 PM', activity: 'Afternoon nap', duration: '1-2 hours' },
          { time: '4:00 PM', activity: 'Wake & snack' },
          { time: '6:00 PM', activity: 'Dinner' },
          { time: '7:00 PM', activity: 'Bedtime routine' },
          { time: '7:30 PM', activity: 'Night sleep' }
        ],
        tips: [
          'Two solid naps per day',
          'Wake windows: 2.5-3.5 hours',
          'Most babies sleep through the night',
          'Solid foods don\'t interfere with sleep',
          'May experience sleep regressions'
        ]
      };
    } else {
      // 12+ months (toddler)
      schedule = {
        ageGroup: '12+ months (Toddler)',
        totalSleep: '11-13 hours',
        nightSleep: '10-12 hours',
        napCount: 1,
        napDuration: '1-3 hours',
        bedtime: '7:00-8:00 PM',
        wakeTime: '6:00-7:30 AM',
        schedule: [
          { time: '7:00 AM', activity: 'Wake up & breakfast' },
          { time: '12:00 PM', activity: 'Lunch' },
          { time: '1:00 PM', activity: 'Afternoon nap', duration: '1-3 hours' },
          { time: '3:30 PM', activity: 'Wake & snack' },
          { time: '6:00 PM', activity: 'Dinner' },
          { time: '7:30 PM', activity: 'Bedtime routine' },
          { time: '8:00 PM', activity: 'Night sleep' }
        ],
        tips: [
          'One longer afternoon nap',
          'Wake windows: 5-6 hours',
          'Consistent bedtime very important',
          'May resist naps but still needs rest',
          'Transition happens between 15-18 months'
        ]
      };
    }

    setResult(schedule);
  };

  // const _adjustScheduleForWakeTime = (_schedule: SleepSchedule, _wakeTime: string) => {
  //   if (!wakeTime) return schedule;
  //   
  //   // This is a simplified adjustment - in a real app you'd do more complex time calculations
  //   const adjustedSchedule = { ...schedule };
  //   adjustedSchedule.wakeTime = wakeTime;
  //   
  //   return adjustedSchedule;
  // };

  const reset = () => {
    setBabyAge('');
    setDesiredWakeTime('');
    setCurrentBedtime('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Baby Sleep Schedule Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create an age-appropriate sleep schedule for your baby with optimal bedtimes, wake times, and nap schedules.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-indigo-600" />
                Sleep Schedule Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="age">Baby's Age (months)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="e.g., 6"
                  value={babyAge}
                  onChange={(e) => setBabyAge(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">Enter age in months (0 for newborn)</p>
              </div>

              <div>
                <Label htmlFor="wakeTime">Desired Wake Time (Optional)</Label>
                <Input
                  id="wakeTime"
                  type="time"
                  value={desiredWakeTime}
                  onChange={(e) => setDesiredWakeTime(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">Leave blank for age-appropriate default</p>
              </div>

              <div>
                <Label htmlFor="bedtime">Current Bedtime (Optional)</Label>
                <Input
                  id="bedtime"
                  type="time"
                  value={currentBedtime}
                  onChange={(e) => setCurrentBedtime(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">For schedule adjustment recommendations</p>
              </div>

              <div className="flex gap-4">
                <Button onClick={calculateSleepSchedule} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                  Create Sleep Schedule
                </Button>
                <Button onClick={reset} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card className="shadow-xl border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  Recommended Sleep Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-xl font-bold text-indigo-600 mb-1">{result.ageGroup}</div>
                  <div className="text-sm text-gray-600">{result.totalSleep} total sleep</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-600">Night Sleep</div>
                    <div className="text-sm text-gray-600">{result.nightSleep}</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-600">Naps</div>
                    <div className="text-sm text-gray-600">{result.napCount} naps, {result.napDuration}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="font-semibold text-yellow-600">Bedtime</div>
                    <div className="text-sm text-gray-600">{result.bedtime}</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-600">Wake Time</div>
                    <div className="text-sm text-gray-600">{result.wakeTime}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-600" />
                    Daily Schedule
                  </h4>
                  <div className="space-y-2">
                    {result.schedule.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-indigo-600 w-20">{item.time}</span>
                          <span className="text-sm">{item.activity}</span>
                        </div>
                        {item.duration && (
                          <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                            {item.duration}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-purple-600" />
                    Sleep Tips for This Age
                  </h4>
                  <ul className="space-y-2">
                    {result.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mt-8 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-purple-600" />
              Sleep Guidelines by Age
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">0-3 Months</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 14-17 hours total sleep</li>
                  <li>• 4-6 naps per day</li>
                  <li>• Night feeds normal</li>
                  <li>• No set schedule yet</li>
                  <li>• Sleep in 2-4 hour chunks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">3-6 Months</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 12-15 hours total sleep</li>
                  <li>• 3-4 naps per day</li>
                  <li>• May sleep through night</li>
                  <li>• Schedule emerges</li>
                  <li>• Longer wake windows</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">6-12 Months</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 11-14 hours total sleep</li>
                  <li>• 2-3 naps per day</li>
                  <li>• Sleep through night</li>
                  <li>• Predictable schedule</li>
                  <li>• Solid night sleep</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">12+ Months</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 11-13 hours total sleep</li>
                  <li>• 1-2 naps per day</li>
                  <li>• One afternoon nap</li>
                  <li>• Consistent bedtime</li>
                  <li>• Longer wake periods</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <h5 className="font-semibold text-indigo-800 mb-2">Creating Healthy Sleep Habits:</h5>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• Consistent bedtime routine (bath, book, lullaby)</li>
                <li>• Dark, cool, quiet sleep environment</li>
                <li>• Put baby down awake to learn self-soothing</li>
                <li>• Watch for sleep cues (yawning, rubbing eyes)</li>
                <li>• Be patient - sleep patterns take time to develop</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Track Your Baby's Sleep</h3>
            <p className="text-lg mb-6 opacity-90">
              Monitor sleep patterns and get insights to improve your baby's rest with our tracking tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/newborn-sleep-tracker"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Sleep Tracker
              </Link>
              <Link 
                href="/blog/baby-sleep-training-methods-guide-when-to-start"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Sleep Training Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}