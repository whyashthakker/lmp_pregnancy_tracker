'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Apple, Milk, Wheat, Carrot, CheckCircle, AlertTriangle } from 'lucide-react';

interface NutritionData {
  calories?: number;
  protein?: number;
  folate?: number;
  iron?: number;
  calcium?: number;
  vitamin_d?: number;
  omega3?: number;
  fiber?: number;
}

const nutritionTargets = {
  calories: { pregnant: 2200, lactating: 2500 },
  protein: { pregnant: 71, lactating: 71 }, // grams
  folate: { pregnant: 600, lactating: 500 }, // mcg
  iron: { pregnant: 27, lactating: 9 }, // mg
  calcium: { pregnant: 1000, lactating: 1000 }, // mg
  vitamin_d: { pregnant: 600, lactating: 600 }, // IU
  omega3: { pregnant: 200, lactating: 200 }, // mg DHA
  fiber: { pregnant: 28, lactating: 29 } // grams
};

const foodDatabase: Record<string, NutritionData> = {
  'Spinach (1 cup)': { folate: 58, iron: 0.8, calcium: 30, protein: 0.9, calories: 7 },
  'Salmon (3 oz)': { protein: 22, omega3: 1200, calcium: 12, calories: 175 },
  'Greek Yogurt (1 cup)': { protein: 20, calcium: 230, calories: 130 },
  'Lentils (1 cup)': { folate: 358, iron: 6.6, protein: 18, fiber: 15, calories: 230 },
  'Fortified Cereal (1 cup)': { folate: 400, iron: 18, vitamin_d: 40, calories: 120 },
  'Orange (1 medium)': { folate: 55, fiber: 3, calcium: 52, calories: 62 },
  'Lean Beef (3 oz)': { protein: 22, iron: 2.6, calories: 180 },
  'Milk (1 cup)': { protein: 8, calcium: 276, vitamin_d: 144, calories: 149 },
  'Avocado (1/2)': { folate: 59, fiber: 7, calories: 160 },
  'Quinoa (1 cup)': { protein: 8, iron: 2.8, fiber: 5, calories: 222 },
  'Sweet Potato (1 medium)': { fiber: 4, calories: 112 },
  'Eggs (2 large)': { protein: 12, folate: 48, calories: 140 },
  'Almonds (1 oz)': { protein: 6, calcium: 76, calories: 164 },
  'Broccoli (1 cup)': { folate: 57, calcium: 43, fiber: 5, calories: 55 }
};

export default function PregnancyNutritionTrackerClient() {
  const [currentIntake, setCurrentIntake] = useState({
    calories: 0,
    protein: 0,
    folate: 0,
    iron: 0,
    calcium: 0,
    vitamin_d: 0,
    omega3: 0,
    fiber: 0
  });
  
  const [isLactating, setIsLactating] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

  const targets = isLactating ? 
    Object.fromEntries(Object.entries(nutritionTargets).map(([key, value]) => [key, value.lactating])) :
    Object.fromEntries(Object.entries(nutritionTargets).map(([key, value]) => [key, value.pregnant]));

  const addFood = (food: string) => {
    const nutrition = foodDatabase[food];
    
    setCurrentIntake(prev => ({
      calories: prev.calories + (nutrition?.calories || 0),
      protein: prev.protein + (nutrition?.protein || 0),
      folate: prev.folate + (nutrition?.folate || 0),
      iron: prev.iron + (nutrition?.iron || 0),
      calcium: prev.calcium + (nutrition?.calcium || 0),
      vitamin_d: prev.vitamin_d + (nutrition?.vitamin_d || 0),
      omega3: prev.omega3 + (nutrition?.omega3 || 0),
      fiber: prev.fiber + (nutrition?.fiber || 0)
    }));
    
    setSelectedFoods(prev => [...prev, food]);
  };

  const removeFood = (index: number) => {
    const food = selectedFoods[index];
    const nutrition = foodDatabase[food];
    
    setCurrentIntake(prev => ({
      calories: Math.max(0, prev.calories - (nutrition?.calories || 0)),
      protein: Math.max(0, prev.protein - (nutrition?.protein || 0)),
      folate: Math.max(0, prev.folate - (nutrition?.folate || 0)),
      iron: Math.max(0, prev.iron - (nutrition?.iron || 0)),
      calcium: Math.max(0, prev.calcium - (nutrition?.calcium || 0)),
      vitamin_d: Math.max(0, prev.vitamin_d - (nutrition?.vitamin_d || 0)),
      omega3: Math.max(0, prev.omega3 - (nutrition?.omega3 || 0)),
      fiber: Math.max(0, prev.fiber - (nutrition?.fiber || 0))
    }));
    
    setSelectedFoods(prev => prev.filter((_, i) => i !== index));
  };

  const resetTracker = () => {
    setCurrentIntake({
      calories: 0,
      protein: 0,
      folate: 0,
      iron: 0,
      calcium: 0,
      vitamin_d: 0,
      omega3: 0,
      fiber: 0
    });
    setSelectedFoods([]);
  };


  const getProgressStatus = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage >= 100) return 'Complete';
    if (percentage >= 75) return 'Good';
    if (percentage >= 50) return 'Fair';
    return 'Low';
  };

  const nutritionData = [
    { key: 'calories', name: 'Calories', unit: 'kcal', icon: Apple, color: 'text-red-600' },
    { key: 'protein', name: 'Protein', unit: 'g', icon: Milk, color: 'text-blue-600' },
    { key: 'folate', name: 'Folate', unit: 'mcg', icon: Wheat, color: 'text-green-600' },
    { key: 'iron', name: 'Iron', unit: 'mg', icon: Carrot, color: 'text-orange-600' },
    { key: 'calcium', name: 'Calcium', unit: 'mg', icon: Milk, color: 'text-purple-600' },
    { key: 'vitamin_d', name: 'Vitamin D', unit: 'IU', icon: Apple, color: 'text-yellow-600' },
    { key: 'omega3', name: 'Omega-3 DHA', unit: 'mg', icon: Apple, color: 'text-teal-600' },
    { key: 'fiber', name: 'Fiber', unit: 'g', icon: Wheat, color: 'text-brown-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
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
            <Apple className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Pregnancy Nutrition Tracker
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track your daily nutrient intake to ensure you and your baby get all the essential vitamins 
            and minerals needed for healthy development.
          </p>
        </div>

        {/* Status Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <Button
              variant={!isLactating ? 'default' : 'ghost'}
              onClick={() => setIsLactating(false)}
              className="px-6"
            >
              Pregnant
            </Button>
            <Button
              variant={isLactating ? 'default' : 'ghost'}
              onClick={() => setIsLactating(true)}
              className="px-6"
            >
              Breastfeeding
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Food Selection */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Apple className="h-5 w-5" />
                Add Foods
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2 max-h-96 overflow-y-auto">
                {Object.keys(foodDatabase).map((food) => (
                  <Button
                    key={food}
                    variant="outline"
                    onClick={() => addFood(food)}
                    className="justify-start text-left h-auto p-3"
                  >
                    <div>
                      <div className="font-medium">{food}</div>
                      <div className="text-xs text-gray-500">
                        {foodDatabase[food as keyof typeof foodDatabase].calories} cal
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
              
              {selectedFoods.length > 0 && (
                <Button 
                  onClick={resetTracker}
                  variant="outline"
                  className="w-full"
                >
                  Reset Day
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Current Foods */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Today&apos;s Foods</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedFoods.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Apple className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Start adding foods to track your nutrition</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {selectedFoods.map((food, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    >
                      <span className="text-sm">{food}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFood(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Daily Summary */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Daily Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-blue-600">
                    {currentIntake.calories}
                  </div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-green-600">
                    {Math.round(currentIntake.protein)}g
                  </div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-purple-600">
                    {Math.round(currentIntake.folate)}mcg
                  </div>
                  <div className="text-sm text-gray-600">Folate</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-orange-600">
                    {Math.round(currentIntake.iron)}mg
                  </div>
                  <div className="text-sm text-gray-600">Iron</div>
                </div>
              </div>
              
              <div className="space-y-2">
                {nutritionData.slice(0, 4).map(({ key, name, unit }) => {
                  const current = currentIntake[key as keyof typeof currentIntake];
                  const target = targets[key as keyof typeof targets];
                  const percentage = Math.min((current / target) * 100, 100);
                  
                  return (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{name}</span>
                        <span>{Math.round(current)}/{target} {unit}</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Nutrition Progress */}
        <Card className="shadow-xl mt-8">
          <CardHeader>
            <CardTitle>Detailed Nutrition Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nutritionData.map(({ key, name, unit, icon: Icon, color }) => {
                const current = currentIntake[key as keyof typeof currentIntake];
                const target = targets[key as keyof typeof targets];
                const percentage = (current / target) * 100;
                const status = getProgressStatus(current, target);
                
                return (
                  <div key={key} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${color}`} />
                      <span className="font-medium">{name}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{Math.round(current)} {unit}</span>
                        <Badge variant={status === 'Complete' ? 'default' : 'secondary'}>
                          {status}
                        </Badge>
                      </div>
                      <Progress value={Math.min(percentage, 100)} className="h-2" />
                      <div className="text-xs text-gray-500">
                        Target: {target} {unit}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Nutrition Tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Essential Nutrients
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Folate/Folic Acid</h4>
                  <p className="text-sm text-gray-600">
                    Prevents neural tube defects. Found in leafy greens, fortified cereals, legumes.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Iron</h4>
                  <p className="text-sm text-gray-600">
                    Prevents anemia and supports baby&apos;s growth. Found in lean meat, beans, fortified cereals.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Calcium</h4>
                  <p className="text-sm text-gray-600">
                    Builds baby&apos;s bones and teeth. Found in dairy, fortified plant milks, sardines.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Omega-3 DHA</h4>
                  <p className="text-sm text-gray-600">
                    Supports brain development. Found in fatty fish, walnuts, algae supplements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Foods to Limit or Avoid
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">High-Mercury Fish</h4>
                  <p className="text-sm text-gray-600">
                    Limit shark, swordfish, king mackerel, tilefish. Choose low-mercury options.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Raw or Undercooked Foods</h4>
                  <p className="text-sm text-gray-600">
                    Avoid sushi, raw eggs, undercooked meat, unpasteurized dairy.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Alcohol</h4>
                  <p className="text-sm text-gray-600">
                    No safe amount during pregnancy. Can cause serious birth defects.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Caffeine</h4>
                  <p className="text-sm text-gray-600">
                    Limit to 200mg daily (about one 12-oz cup of coffee).
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
            <Link href="/tools/pregnancy-weight-gain-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Apple className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Weight Gain Calculator</h3>
                  <p className="text-sm text-gray-600">Track healthy pregnancy weight gain</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/pregnancy-week-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Milk className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Week Calculator</h3>
                  <p className="text-sm text-gray-600">Find out how many weeks pregnant you are</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/baby-size-comparison" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Carrot className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Baby Size Guide</h3>
                  <p className="text-sm text-gray-600">See how big your baby is each week</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}