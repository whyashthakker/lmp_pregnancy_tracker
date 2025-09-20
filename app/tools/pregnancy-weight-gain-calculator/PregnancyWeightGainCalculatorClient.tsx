'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Scale, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function PregnancyWeightGainCalculatorClient() {
  const [prePregnancyWeight, setPrePregnancyWeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [height, setHeight] = useState('');
  const [currentWeek, setCurrentWeek] = useState('');
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    recommendedGain: string;
    currentGain: number;
    status: 'under' | 'normal' | 'over';
    weeklyTarget: number;
    totalTarget: string;
    recommendedWeeklyGain: number;
  } | null>(null);

  const calculateWeightGain = () => {
    if (!prePregnancyWeight || !currentWeight || !height || !currentWeek) return;

    const preWeight = parseFloat(prePregnancyWeight);
    const currWeight = parseFloat(currentWeight);
    const heightValue = parseFloat(height);
    const week = parseInt(currentWeek);

    // Calculate BMI
    let bmi: number;
    if (unit === 'imperial') {
      // BMI = (weight in pounds × 703) / (height in inches)²
      bmi = (preWeight * 703) / (heightValue * heightValue);
    } else {
      // BMI = weight in kg / (height in meters)²
      bmi = preWeight / (heightValue * heightValue);
    }

    // Determine BMI category and recommended weight gain
    let category: string;
    let recommendedGain: string;
    let totalLowRange: number;
    let totalHighRange: number;

    if (bmi < 18.5) {
      category = 'Underweight';
      recommendedGain = '28-40 lbs (12.7-18.1 kg)';
      totalLowRange = unit === 'imperial' ? 28 : 12.7;
      totalHighRange = unit === 'imperial' ? 40 : 18.1;
    } else if (bmi < 25) {
      category = 'Normal weight';
      recommendedGain = '25-35 lbs (11.3-15.9 kg)';
      totalLowRange = unit === 'imperial' ? 25 : 11.3;
      totalHighRange = unit === 'imperial' ? 35 : 15.9;
    } else if (bmi < 30) {
      category = 'Overweight';
      recommendedGain = '15-25 lbs (6.8-11.3 kg)';
      totalLowRange = unit === 'imperial' ? 15 : 6.8;
      totalHighRange = unit === 'imperial' ? 25 : 11.3;
    } else {
      category = 'Obese';
      recommendedGain = '11-20 lbs (5.0-9.1 kg)';
      totalLowRange = unit === 'imperial' ? 11 : 5.0;
      totalHighRange = unit === 'imperial' ? 20 : 9.1;
    }

    const currentGain = currWeight - preWeight;
    
    // Calculate expected gain by current week
    let expectedGainLow: number;
    let expectedGainHigh: number;
    
    if (week <= 13) {
      // First trimester: 1-4.5 lbs total
      expectedGainLow = unit === 'imperial' ? 1 : 0.45;
      expectedGainHigh = unit === 'imperial' ? 4.5 : 2.04;
    } else {
      // After first trimester
      const trimesterGain = unit === 'imperial' ? 4.5 : 2.04;
      const weeksAfterFirst = week - 13;
      const weeklyRate = (totalLowRange - trimesterGain) / 27; // 27 weeks in 2nd and 3rd trimester
      const weeklyRateHigh = (totalHighRange - trimesterGain) / 27;
      
      expectedGainLow = trimesterGain + (weeksAfterFirst * weeklyRate);
      expectedGainHigh = trimesterGain + (weeksAfterFirst * weeklyRateHigh);
    }

    let status: 'under' | 'normal' | 'over';
    if (currentGain < expectedGainLow - 2) {
      status = 'under';
    } else if (currentGain > expectedGainHigh + 2) {
      status = 'over';
    } else {
      status = 'normal';
    }

    // Calculate recommended weekly gain for remaining weeks
    const remainingWeeks = 40 - week;
    const targetRemaining = (totalLowRange + totalHighRange) / 2 - currentGain;
    const recommendedWeeklyGain = remainingWeeks > 0 ? targetRemaining / remainingWeeks : 0;

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      recommendedGain,
      currentGain: Math.round(currentGain * 10) / 10,
      status,
      weeklyTarget: Math.round(((expectedGainLow + expectedGainHigh) / 2) * 10) / 10,
      totalTarget: `${Math.round(totalLowRange)}-${Math.round(totalHighRange)} ${unit === 'imperial' ? 'lbs' : 'kg'}`,
      recommendedWeeklyGain: Math.max(0, Math.round(recommendedWeeklyGain * 10) / 10)
    });
  };

  const getStatusMessage = () => {
    if (!result) return {
      message: '',
      color: '',
      bgColor: '',
      borderColor: '',
      icon: null
    };
    
    switch (result.status) {
      case 'under':
        return {
          message: 'Your weight gain is below the recommended range. Consider discussing nutrition with your healthcare provider.',
          color: 'text-orange-700',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          icon: <AlertCircle className="h-5 w-5 text-orange-600" />
        };
      case 'over':
        return {
          message: 'Your weight gain is above the recommended range. Focus on healthy eating and appropriate exercise.',
          color: 'text-red-700',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          icon: <AlertCircle className="h-5 w-5 text-red-600" />
        };
      default:
        return {
          message: 'Your weight gain is within the healthy range. Keep up the good work!',
          color: 'text-green-700',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          icon: <CheckCircle className="h-5 w-5 text-green-600" />
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-green-600 hover:text-green-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Scale className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Pregnancy Weight Gain Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track your pregnancy weight gain and ensure you&apos;re maintaining a healthy range based on your 
            pre-pregnancy BMI and current week of pregnancy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Weight Gain Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Measurement Units</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={unit === 'imperial' ? 'default' : 'outline'}
                    onClick={() => setUnit('imperial')}
                  >
                    Imperial (lbs/in)
                  </Button>
                  <Button
                    variant={unit === 'metric' ? 'default' : 'outline'}
                    onClick={() => setUnit('metric')}
                  >
                    Metric (kg/m)
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="pre-weight" className="text-base font-medium">
                  Pre-pregnancy weight ({unit === 'imperial' ? 'lbs' : 'kg'})
                </Label>
                <Input
                  id="pre-weight"
                  type="number"
                  value={prePregnancyWeight}
                  onChange={(e) => setPrePregnancyWeight(e.target.value)}
                  placeholder={unit === 'imperial' ? 'e.g. 150' : 'e.g. 68'}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="current-weight" className="text-base font-medium">
                  Current weight ({unit === 'imperial' ? 'lbs' : 'kg'})
                </Label>
                <Input
                  id="current-weight"
                  type="number"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                  placeholder={unit === 'imperial' ? 'e.g. 160' : 'e.g. 72'}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="height" className="text-base font-medium">
                  Height ({unit === 'imperial' ? 'inches' : 'meters'})
                </Label>
                <Input
                  id="height"
                  type="number"
                  step={unit === 'metric' ? '0.01' : '1'}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={unit === 'imperial' ? 'e.g. 65' : 'e.g. 1.65'}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {unit === 'imperial' ? 'Total inches (5 feet 5 inches = 65 inches)' : 'In meters (e.g. 1.65)'}
                </p>
              </div>

              <div>
                <Label htmlFor="week" className="text-base font-medium">
                  Current week of pregnancy
                </Label>
                <Input
                  id="week"
                  type="number"
                  min="1"
                  max="42"
                  value={currentWeek}
                  onChange={(e) => setCurrentWeek(e.target.value)}
                  placeholder="e.g. 20"
                  className="mt-2"
                />
              </div>

              <Button 
                onClick={calculateWeightGain} 
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                disabled={!prePregnancyWeight || !currentWeight || !height || !currentWeek}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Calculate Weight Gain
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Your Weight Gain Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">BMI: {result.bmi}</div>
                    <div className="text-sm text-gray-600">{result.category}</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-600">
                      {result.currentGain > 0 ? '+' : ''}{result.currentGain} {unit === 'imperial' ? 'lbs' : 'kg'}
                    </div>
                    <div className="text-sm text-gray-600">Current Gain</div>
                  </div>
                </div>

                {/* Status Alert */}
                {(() => {
                  const statusMsg = getStatusMessage();
                  return (
                    <div className={`p-4 rounded-lg border ${statusMsg.bgColor} ${statusMsg.borderColor}`}>
                      <div className="flex items-start gap-3">
                        {statusMsg.icon}
                        <p className={`text-sm ${statusMsg.color}`}>
                          {statusMsg.message}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Recommended Total Gain:</span>
                    <span className="text-green-600 font-bold">{result.recommendedGain}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Target for Week {currentWeek}:</span>
                    <span className="text-blue-600 font-bold">
                      {result.weeklyTarget} {unit === 'imperial' ? 'lbs' : 'kg'}
                    </span>
                  </div>

                  {result.recommendedWeeklyGain > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Recommended Weekly Gain:</span>
                      <span className="text-purple-600 font-bold">
                        {result.recommendedWeeklyGain} {unit === 'imperial' ? 'lbs' : 'kg'}/week
                      </span>
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progress to Target Range</span>
                    <span>{Math.round((result.currentGain / parseFloat(result.totalTarget.split('-')[1])) * 100)}%</span>
                  </div>
                  <Progress 
                    value={Math.min((result.currentGain / parseFloat(result.totalTarget.split('-')[1])) * 100, 100)} 
                    className="h-3" 
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Educational Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Healthy Weight Gain Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Underweight (BMI &lt; 18.5)</h4>
                  <p className="text-sm text-gray-600">28-40 lbs (12.7-18.1 kg) total gain</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Normal Weight (BMI 18.5-24.9)</h4>
                  <p className="text-sm text-gray-600">25-35 lbs (11.3-15.9 kg) total gain</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Overweight (BMI 25-29.9)</h4>
                  <p className="text-sm text-gray-600">15-25 lbs (6.8-11.3 kg) total gain</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Obese (BMI ≥ 30)</h4>
                  <p className="text-sm text-gray-600">11-20 lbs (5.0-9.1 kg) total gain</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weight Gain Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">First Trimester (Weeks 1-13)</h4>
                  <p className="text-sm text-gray-600">1-4.5 lbs (0.45-2.04 kg) total</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Second Trimester (Weeks 14-27)</h4>
                  <p className="text-sm text-gray-600">1-2 lbs (0.45-0.9 kg) per week</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Third Trimester (Weeks 28-40)</h4>
                  <p className="text-sm text-gray-600">1-2 lbs (0.45-0.9 kg) per week</p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                  <p className="text-sm text-yellow-700">
                    <strong>Note:</strong> These are general guidelines. Always consult your healthcare provider for personalized advice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pregnancy Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/pregnancy-nutrition-tracker" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Nutrition Tracker</h3>
                  <p className="text-sm text-gray-600">Track your daily nutrition intake</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/pregnancy-week-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Scale className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Week Calculator</h3>
                  <p className="text-sm text-gray-600">Find out how many weeks pregnant you are</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/due-date-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Due Date Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your estimated delivery date</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}