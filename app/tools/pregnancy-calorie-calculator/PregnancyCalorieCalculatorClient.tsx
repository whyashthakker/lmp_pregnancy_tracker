'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft, Utensils, TrendingUp, Info, Apple } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CalorieResult {
  baseCalories: number;
  pregnancyCalories: number;
  additionalCalories: number;
  trimester: string;
  recommendations: string[];
}

export default function PregnancyCalorieCalculatorClient() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [prePregnancyWeight, setPrePregnancyWeight] = useState('');
  const [weeks, setWeeks] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [breastfeeding, setBreastfeeding] = useState('');
  const [result, setResult] = useState<CalorieResult | null>(null);

  const calculateCalories = () => {
    if (!age || !height || !prePregnancyWeight || !weeks || !activityLevel) return;

    const ageNum = parseInt(age);
    const heightCm = parseFloat(height);
    const weightKg = parseFloat(prePregnancyWeight);
    const weekNum = parseInt(weeks);

    // Calculate BMR using Mifflin-St Jeor Equation
    const bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * ageNum) - 161;

    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    };

    const baseCalories = Math.round(bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]);

    // Pregnancy calorie additions by trimester
    let additionalCalories = 0;
    let trimester = '';
    let recommendations: string[] = [];

    if (weekNum <= 12) {
      trimester = 'First Trimester';
      additionalCalories = 0;
      recommendations = [
        'Focus on folate-rich foods (leafy greens, fortified cereals)',
        'Take prenatal vitamins with folic acid',
        'Stay hydrated with 8-10 glasses of water daily',
        'Eat small, frequent meals to manage nausea',
        'Include protein at every meal and snack'
      ];
    } else if (weekNum <= 26) {
      trimester = 'Second Trimester';
      additionalCalories = 340;
      recommendations = [
        'Add healthy snacks like nuts, yogurt, and fruit',
        'Include calcium-rich foods (dairy, leafy greens)',
        'Focus on iron-rich foods to prevent anemia',
        'Continue taking prenatal vitamins',
        'Add omega-3 fatty acids (fish, walnuts, flax seeds)'
      ];
    } else {
      trimester = 'Third Trimester';
      additionalCalories = 450;
      recommendations = [
        'Eat smaller, more frequent meals as baby grows',
        'Focus on nutrient-dense foods',
        'Include extra protein for baby\'s rapid growth',
        'Stay hydrated to prevent constipation',
        'Prepare for breastfeeding with adequate calories'
      ];
    }

    // Add breastfeeding calories if applicable
    if (breastfeeding === 'yes') {
      additionalCalories += 500;
      recommendations.push('Add 500 extra calories for breastfeeding');
      recommendations.push('Include extra fluids (water, milk, herbal teas)');
    }

    const pregnancyCalories = baseCalories + additionalCalories;

    setResult({
      baseCalories,
      pregnancyCalories,
      additionalCalories,
      trimester,
      recommendations
    });
  };

  const reset = () => {
    setAge('');
    setHeight('');
    setPrePregnancyWeight('');
    setWeeks('');
    setActivityLevel('');
    setBreastfeeding('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Pregnancy Calorie Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate your daily calorie needs during pregnancy based on your trimester, activity level, and individual factors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-orange-600" />
                Calorie Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age (years)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="e.g., 28"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="e.g., 165"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight">Pre-pregnancy Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="e.g., 65"
                    value={prePregnancyWeight}
                    onChange={(e) => setPrePregnancyWeight(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="weeks">Current Pregnancy Week</Label>
                  <Input
                    id="weeks"
                    type="number"
                    placeholder="e.g., 20"
                    value={weeks}
                    onChange={(e) => setWeeks(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="activity">Activity Level</Label>
                <Select value={activityLevel} onValueChange={setActivityLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                    <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                    <SelectItem value="very_active">Very Active (very hard exercise, physical job)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="breastfeeding">Are you currently breastfeeding?</Label>
                <Select value={breastfeeding} onValueChange={setBreastfeeding}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="yes">Yes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button onClick={calculateCalories} className="flex-1 bg-orange-600 hover:bg-orange-700">
                  Calculate Calories
                </Button>
                <Button onClick={reset} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card className="shadow-xl border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  Your Daily Calorie Needs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {result.pregnancyCalories.toLocaleString()} calories/day
                  </div>
                  <div className="text-gray-600 mb-4">{result.trimester}</div>
                  {result.additionalCalories > 0 && (
                    <div className="text-sm text-gray-600">
                      Base: {result.baseCalories.toLocaleString()} + Extra: {result.additionalCalories.toLocaleString()}
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Apple className="w-4 h-4 text-green-600" />
                    Nutrition Recommendations
                  </h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Important Notes:</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Consult your healthcare provider for personalized advice</li>
                    <li>• Focus on nutrient quality, not just calories</li>
                    <li>• Adjust based on hunger, weight gain, and energy levels</li>
                    <li>• Stay hydrated with plenty of water</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mt-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-orange-600" />
              Understanding Pregnancy Calorie Needs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">First Trimester</h4>
                <p className="text-sm text-gray-600 mb-2">
                  No additional calories needed, but focus on nutrient-dense foods.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Folic acid crucial for development</li>
                  <li>• Manage nausea with small meals</li>
                  <li>• Stay hydrated</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">Second Trimester</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Add 340 calories per day for baby's growth.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Increased appetite returns</li>
                  <li>• Focus on protein and calcium</li>
                  <li>• Add healthy snacks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">Third Trimester</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Add 450 calories per day for rapid growth.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Baby's brain developing rapidly</li>
                  <li>• Smaller, frequent meals</li>
                  <li>• Prepare for breastfeeding</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Track Your Nutrition</h3>
            <p className="text-lg mb-6 opacity-90">
              Use our other tools to monitor your pregnancy nutrition and weight gain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/pregnancy-weight-gain-calculator"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Weight Gain Calculator
              </Link>
              <Link 
                href="/tools/pregnancy-nutrition-tracker"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Nutrition Tracker
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}