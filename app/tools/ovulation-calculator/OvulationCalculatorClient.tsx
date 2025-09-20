'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calendar, Heart, Flower, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function OvulationCalculatorClient() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('28');
  const [result, setResult] = useState<{
    ovulationDate: string;
    fertileWindow: {
      start: string;
      end: string;
    };
    nextPeriod: string;
    daysUntilOvulation: number;
    status: 'approaching' | 'fertile' | 'past' | 'unknown';
    lutealPhase: string;
  } | null>(null);

  const calculateOvulation = () => {
    if (!lastPeriodDate || !cycleLength) return;

    const lmp = new Date(lastPeriodDate);
    const cycle = parseInt(cycleLength);
    const today = new Date();

    // Calculate ovulation date (typically 14 days before next period)
    const ovulationDay = cycle - 14;
    const ovulationDate = new Date(lmp);
    ovulationDate.setDate(ovulationDate.getDate() + ovulationDay);

    // Calculate fertile window (5 days before ovulation + ovulation day)
    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(fertileStart.getDate() - 5);
    
    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(fertileEnd.getDate() + 1);

    // Calculate next period
    const nextPeriod = new Date(lmp);
    nextPeriod.setDate(nextPeriod.getDate() + cycle);

    // Calculate luteal phase start
    const lutealPhase = new Date(ovulationDate);
    lutealPhase.setDate(lutealPhase.getDate() + 1);

    // Determine current status
    const daysUntilOvulation = Math.ceil((ovulationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    let status: 'approaching' | 'fertile' | 'past' | 'unknown';
    if (today >= fertileStart && today <= fertileEnd) {
      status = 'fertile';
    } else if (daysUntilOvulation > 0 && daysUntilOvulation <= 7) {
      status = 'approaching';
    } else if (daysUntilOvulation < 0) {
      status = 'past';
    } else {
      status = 'unknown';
    }

    setResult({
      ovulationDate: ovulationDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      fertileWindow: {
        start: fertileStart.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        }),
        end: fertileEnd.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        })
      },
      nextPeriod: nextPeriod.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      daysUntilOvulation,
      status,
      lutealPhase: lutealPhase.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    });
  };

  const getStatusInfo = () => {
    if (!result) return null;

    switch (result.status) {
      case 'fertile':
        return {
          message: 'You are currently in your fertile window! This is the best time to try for pregnancy.',
          color: 'text-green-700',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          badge: 'Fertile Now'
        };
      case 'approaching':
        return {
          message: 'Your fertile window is approaching. Start preparing if you&apos;re trying to conceive.',
          color: 'text-blue-700',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          icon: <Clock className="h-5 w-5 text-blue-600" />,
          badge: 'Approaching'
        };
      case 'past':
        return {
          message: 'Your fertile window has passed for this cycle. Focus on tracking for next month.',
          color: 'text-gray-700',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          icon: <AlertCircle className="h-5 w-5 text-gray-600" />,
          badge: 'Past Ovulation'
        };
      default:
        return {
          message: 'Track your cycle regularly for more accurate predictions.',
          color: 'text-purple-700',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200',
          icon: <Heart className="h-5 w-5 text-purple-600" />,
          badge: 'Tracking'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-pink-600 hover:text-pink-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Flower className="h-12 w-12 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            Ovulation Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calculate your fertile window and ovulation date to optimize your chances of conception. 
            Track your cycle and find the best days to try for pregnancy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Calculate Your Fertile Window
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="lmp-date" className="text-base font-medium">
                  First day of your last period
                </Label>
                <Input
                  id="lmp-date"
                  type="date"
                  value={lastPeriodDate}
                  onChange={(e) => setLastPeriodDate(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  This helps calculate when your next ovulation will occur
                </p>
              </div>

              <div>
                <Label htmlFor="cycle-length" className="text-base font-medium">
                  Average cycle length (days)
                </Label>
                <Input
                  id="cycle-length"
                  type="number"
                  min="21"
                  max="40"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Typical range is 21-35 days. Average is 28 days.
                </p>
              </div>

              <Button 
                onClick={calculateOvulation} 
                className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700"
                disabled={!lastPeriodDate || !cycleLength}
              >
                <Heart className="h-4 w-4 mr-2" />
                Calculate Fertile Window
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flower className="h-5 w-5" />
                  Your Fertility Calendar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Status Alert */}
                {getStatusInfo() && (
                  <div className={`p-4 rounded-lg border ${getStatusInfo()!.bgColor} ${getStatusInfo()!.borderColor}`}>
                    <div className="flex items-start gap-3">
                      {getStatusInfo()!.icon}
                      <div>
                        <Badge className="mb-2">{getStatusInfo()!.badge}</Badge>
                        <p className={`text-sm ${getStatusInfo()!.color}`}>
                          {getStatusInfo()!.message}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center p-6 bg-gradient-to-r from-pink-100 to-red-100 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    {result.ovulationDate}
                  </div>
                  <div className="text-gray-600">Estimated Ovulation Date</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      {result.fertileWindow.start} - {result.fertileWindow.end}
                    </div>
                    <div className="text-sm text-gray-600">Fertile Window</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {Math.abs(result.daysUntilOvulation)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {result.daysUntilOvulation > 0 ? 'Days Until Ovulation' : 'Days Since Ovulation'}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Next Period Expected:</span>
                    <span className="text-purple-600 font-bold">{result.nextPeriod}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Luteal Phase Starts:</span>
                    <span className="text-orange-600 font-bold">{result.lutealPhase}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Educational Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Understanding Your Cycle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Menstrual Phase (Days 1-5)</h4>
                  <p className="text-sm text-gray-600">
                    Your period begins. Estrogen and progesterone levels are low.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Follicular Phase (Days 1-13)</h4>
                  <p className="text-sm text-gray-600">
                    Eggs begin to mature. Estrogen levels rise, preparing for ovulation.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Ovulation (Day 14)</h4>
                  <p className="text-sm text-gray-600">
                    A mature egg is released. This is your most fertile time.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Luteal Phase (Days 15-28)</h4>
                  <p className="text-sm text-gray-600">
                    Progesterone rises to prepare the uterus for potential pregnancy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-600" />
                Fertility Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Track Your Signs</h4>
                  <p className="text-sm text-gray-600">
                    Monitor basal body temperature, cervical mucus, and ovulation tests for accuracy.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Optimal Timing</h4>
                  <p className="text-sm text-gray-600">
                    Try every other day during your fertile window for the best chances.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Healthy Lifestyle</h4>
                  <p className="text-sm text-gray-600">
                    Maintain a healthy weight, reduce stress, and take prenatal vitamins.
                  </p>
                </div>
                <div className="bg-pink-50 border-l-4 border-pink-400 p-3 rounded">
                  <p className="text-sm text-pink-700">
                    <strong>Remember:</strong> Sperm can live up to 5 days, so your fertile window is longer than just ovulation day.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Related Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/due-date-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Due Date Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your estimated delivery date</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/pregnancy-week-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Pregnancy Week Calculator</h3>
                  <p className="text-sm text-gray-600">Find out how many weeks pregnant you are</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/pregnancy-nutrition-tracker" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Nutrition Tracker</h3>
                  <p className="text-sm text-gray-600">Track essential nutrients for pregnancy</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}