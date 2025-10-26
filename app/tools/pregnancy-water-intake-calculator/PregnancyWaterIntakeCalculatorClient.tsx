'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft, Droplets, Thermometer, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface HydrationResult {
  baseWater: number;
  pregnancyWater: number;
  totalWater: number;
  glasses: number;
  bottles: number;
  tips: string[];
  trimester: string;
}

export default function PregnancyWaterIntakeCalculatorClient() {
  const [weight, setWeight] = useState('');
  const [weeks, setWeeks] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [climate, setClimate] = useState('');
  const [breastfeeding, setBreastfeeding] = useState('');
  const [result, setResult] = useState<HydrationResult | null>(null);

  const calculateWaterIntake = () => {
    if (!weight || !weeks || !activityLevel || !climate) return;

    const weightKg = parseFloat(weight);
    const weekNum = parseInt(weeks);

    // Base water intake: 35ml per kg of body weight
    const baseWater = weightKg * 35;

    // Pregnancy additions
    let pregnancyAddition = 300; // Base pregnancy addition in ml

    // Trimester adjustments
    let trimester = '';
    if (weekNum <= 12) {
      trimester = 'First Trimester';
      pregnancyAddition += 0; // No additional water needed
    } else if (weekNum <= 26) {
      trimester = 'Second Trimester';
      pregnancyAddition += 200; // Increased blood volume
    } else {
      trimester = 'Third Trimester';
      pregnancyAddition += 300; // Maximum blood volume, amniotic fluid
    }

    // Activity level adjustments
    const activityMultipliers = {
      sedentary: 1.0,
      light: 1.1,
      moderate: 1.2,
      active: 1.3,
      very_active: 1.4
    };

    pregnancyAddition *= activityMultipliers[activityLevel as keyof typeof activityMultipliers];

    // Climate adjustments
    const climateMultipliers = {
      cool: 1.0,
      moderate: 1.1,
      warm: 1.2,
      hot: 1.3,
      very_hot: 1.4
    };

    pregnancyAddition *= climateMultipliers[climate as keyof typeof climateMultipliers];

    // Breastfeeding addition
    if (breastfeeding === 'yes') {
      pregnancyAddition += 700; // Additional 700ml for breastfeeding
    }

    const totalWater = Math.round(baseWater + pregnancyAddition);
    const glasses = Math.round(totalWater / 250); // 250ml per glass
    const bottles = Math.round(totalWater / 500); // 500ml per bottle

    const tips = [
      'Drink a glass of water when you wake up',
      'Keep a water bottle with you at all times',
      'Set reminders to drink water throughout the day',
      'Eat water-rich foods like fruits and vegetables',
      'Monitor your urine color - pale yellow is ideal'
    ];

    // Add specific tips based on conditions
    if (activityLevel === 'active' || activityLevel === 'very_active') {
      tips.push('Drink extra water before, during, and after exercise');
    }

    if (climate === 'hot' || climate === 'very_hot') {
      tips.push('Increase intake in hot weather to prevent overheating');
    }

    if (breastfeeding === 'yes') {
      tips.push('Breastfeeding mothers need extra fluids for milk production');
    }

    if (weekNum >= 27) {
      tips.push('Third trimester requires more water for increased blood volume');
    }

    setResult({
      baseWater: Math.round(baseWater),
      pregnancyWater: Math.round(pregnancyAddition),
      totalWater,
      glasses,
      bottles,
      tips,
      trimester
    });
  };

  const reset = () => {
    setWeight('');
    setWeeks('');
    setActivityLevel('');
    setClimate('');
    setBreastfeeding('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Pregnancy Water Intake Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate your daily water needs during pregnancy based on your weight, activity level, climate, and trimester.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-cyan-600" />
                Hydration Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight">Current Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="e.g., 65"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="weeks">Pregnancy Week</Label>
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
                <Label htmlFor="climate">Climate/Temperature</Label>
                <Select value={climate} onValueChange={setClimate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your climate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cool">Cool (Below 20°C/68°F)</SelectItem>
                    <SelectItem value="moderate">Moderate (20-25°C/68-77°F)</SelectItem>
                    <SelectItem value="warm">Warm (25-30°C/77-86°F)</SelectItem>
                    <SelectItem value="hot">Hot (30-35°C/86-95°F)</SelectItem>
                    <SelectItem value="very_hot">Very Hot (Above 35°C/95°F)</SelectItem>
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
                <Button onClick={calculateWaterIntake} className="flex-1 bg-cyan-600 hover:bg-cyan-700">
                  Calculate Water Needs
                </Button>
                <Button onClick={reset} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card className="shadow-xl border-cyan-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-cyan-600" />
                  Your Daily Water Needs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-cyan-50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    {result.totalWater.toLocaleString()} ml/day
                  </div>
                  <div className="text-gray-600 mb-4">{result.trimester}</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">≈ {result.glasses} glasses</div>
                      <div className="text-gray-500">(250ml each)</div>
                    </div>
                    <div>
                      <div className="font-semibold">≈ {result.bottles} bottles</div>
                      <div className="text-gray-500">(500ml each)</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-lg font-semibold text-blue-600">{result.baseWater} ml</div>
                    <div className="text-sm text-gray-600">Base Daily Needs</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-lg font-semibold text-green-600">+{result.pregnancyWater} ml</div>
                    <div className="text-sm text-gray-600">Pregnancy Addition</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-orange-600" />
                    Hydration Tips
                  </h4>
                  <ul className="space-y-2">
                    {result.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-800 mb-2">Signs of Proper Hydration:</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Pale yellow urine</li>
                    <li>• Urinating every 2-4 hours</li>
                    <li>• Moist lips and mouth</li>
                    <li>• Good energy levels</li>
                    <li>• Elastic skin (pinch test)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mt-8 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              Hydration During Pregnancy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 mb-3">Why Extra Water?</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Increased blood volume (50% more)</li>
                  <li>• Amniotic fluid production</li>
                  <li>• Supporting baby's development</li>
                  <li>• Preventing constipation</li>
                  <li>• Regulating body temperature</li>
                  <li>• Reducing swelling</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-600 mb-3">Hydration Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Plain water (best choice)</li>
                  <li>• Herbal teas (pregnancy-safe)</li>
                  <li>• Fresh fruit juices (diluted)</li>
                  <li>• Milk and dairy drinks</li>
                  <li>• Water-rich foods (fruits, soups)</li>
                  <li>• Coconut water (natural electrolytes)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-600 mb-3">Warning Signs</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Dark yellow urine</li>
                  <li>• Dizziness or headaches</li>
                  <li>• Dry mouth or lips</li>
                  <li>• Fatigue</li>
                  <li>• Constipation</li>
                  <li>• Infrequent urination</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">When to Consult Your Doctor:</h5>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Persistent nausea preventing fluid intake</li>
                <li>• Severe swelling in hands, face, or feet</li>
                <li>• Signs of dehydration despite adequate intake</li>
                <li>• Concerns about water quality or safety</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Healthy & Hydrated</h3>
            <p className="text-lg mb-6 opacity-90">
              Use our other tools to monitor your overall pregnancy health and nutrition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/pregnancy-nutrition-tracker"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Nutrition Tracker
              </Link>
              <Link 
                href="/tools/pregnancy-weight-gain-calculator"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Weight Gain Tracker
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}