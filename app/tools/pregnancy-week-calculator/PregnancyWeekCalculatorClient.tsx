'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, Baby, Heart, Activity } from 'lucide-react';

const weeklyDevelopments = {
  4: "Your baby is the size of a poppy seed. The neural tube is forming.",
  5: "Baby is the size of a sesame seed. Heart begins to beat.",
  6: "Baby is the size of a lentil. Facial features are developing.",
  7: "Baby is the size of a blueberry. Arms and legs are budding.",
  8: "Baby is the size of a kidney bean. All major organs are present.",
  12: "Baby is the size of a lime. Reflexes are developing.",
  16: "Baby is the size of an avocado. You might feel first movements.",
  20: "Baby is the size of a banana. Halfway point reached!",
  24: "Baby is the size of a cantaloupe. Lungs are developing rapidly.",
  28: "Baby is the size of an eggplant. Brain development accelerates.",
  32: "Baby is the size of a coconut. Bones are hardening.",
  36: "Baby is the size of a papaya. Considered full-term soon.",
  40: "Baby is full-term and ready to meet you!"
};

export default function PregnancyWeekCalculatorClient() {
  const [lmpDate, setLmpDate] = useState('');
  const [result, setResult] = useState<{
    weeksPregnant: number;
    daysIntoWeek: number;
    totalDays: number;
    dueDate: string;
    trimester: number;
    progressPercentage: number;
    weeklyInfo: string;
  } | null>(null);

  const calculateWeeks = () => {
    if (!lmpDate) return;

    const lmp = new Date(lmpDate);
    const today = new Date();
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const weeksPregnant = Math.floor(diffDays / 7);
    const daysIntoWeek = diffDays % 7;
    const trimester = weeksPregnant <= 12 ? 1 : weeksPregnant <= 26 ? 2 : 3;
    
    // Calculate due date (280 days from LMP)
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);
    
    const progressPercentage = Math.min((diffDays / 280) * 100, 100);
    
    // Get appropriate weekly development info
    let weeklyInfo = "Your baby is developing rapidly!";
    const infoWeeks = [4, 5, 6, 7, 8, 12, 16, 20, 24, 28, 32, 36, 40];
    const closestWeek = infoWeeks.reduce((prev, curr) => 
      Math.abs(curr - weeksPregnant) < Math.abs(prev - weeksPregnant) ? curr : prev
    );
    weeklyInfo = weeklyDevelopments[closestWeek as keyof typeof weeklyDevelopments] || weeklyInfo;

    setResult({
      weeksPregnant: Math.max(0, weeksPregnant),
      daysIntoWeek,
      totalDays: Math.max(0, diffDays),
      dueDate: dueDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      trimester,
      progressPercentage,
      weeklyInfo
    });
  };

  const getTrimesterInfo = (trimester: number) => {
    switch (trimester) {
      case 1:
        return {
          name: "First Trimester",
          weeks: "Weeks 1-12",
          description: "Foundation of pregnancy with rapid organ development",
          color: "from-green-400 to-green-600"
        };
      case 2:
        return {
          name: "Second Trimester",
          weeks: "Weeks 13-26", 
          description: "Often called the &apos;golden period&apos; with increased energy",
          color: "from-blue-400 to-blue-600"
        };
      case 3:
        return {
          name: "Third Trimester",
          weeks: "Weeks 27-40",
          description: "Final preparations for birth as baby grows rapidly",
          color: "from-purple-400 to-purple-600"
        };
      default:
        return {
          name: "Early Pregnancy",
          weeks: "",
          description: "Very early in pregnancy",
          color: "from-pink-400 to-pink-600"
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Clock className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Pregnancy Week Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find out exactly how many weeks and days pregnant you are, plus get insights about your baby&apos;s development 
            and what to expect in your current week.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Calculate Your Pregnancy Week
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="lmp-date" className="text-base font-medium">
                  First day of your last menstrual period (LMP)
                </Label>
                <Input
                  id="lmp-date"
                  type="date"
                  value={lmpDate}
                  onChange={(e) => setLmpDate(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  This is the standard method healthcare providers use to calculate pregnancy weeks
                </p>
              </div>

              <Button 
                onClick={calculateWeeks} 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={!lmpDate}
              >
                Calculate Pregnancy Week
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5" />
                  Your Pregnancy Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {result.weeksPregnant} weeks {result.daysIntoWeek} days
                  </div>
                  <div className="text-gray-600">You are pregnant</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Pregnancy Progress</span>
                    <span>{Math.round(result.progressPercentage)}% complete</span>
                  </div>
                  <Progress value={result.progressPercentage} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Calendar className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-xl font-bold text-green-600">{result.totalDays}</div>
                    <div className="text-sm text-gray-600">Total Days</div>
                  </div>
                  
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Heart className="h-6 w-6 text-pink-600" />
                    </div>
                    <div className="text-xl font-bold text-pink-600">{280 - result.totalDays}</div>
                    <div className="text-sm text-gray-600">Days to Go</div>
                  </div>
                </div>

                {/* Trimester Info */}
                {result.trimester && (
                  <div className={`p-6 rounded-lg bg-gradient-to-r ${getTrimesterInfo(result.trimester).color} text-white`}>
                    <h3 className="font-bold text-lg mb-2">{getTrimesterInfo(result.trimester).name}</h3>
                    <p className="text-sm opacity-90 mb-1">{getTrimesterInfo(result.trimester).weeks}</p>
                    <p className="text-sm opacity-90" dangerouslySetInnerHTML={{ __html: getTrimesterInfo(result.trimester).description }}></p>
                  </div>
                )}

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h4 className="font-medium text-yellow-800 mb-2">This Week&apos;s Development</h4>
                  <p className="text-sm text-yellow-700">{result.weeklyInfo}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Trimester Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Pregnancy Trimester Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <CardTitle className="text-green-600">First Trimester</CardTitle>
                <p className="text-sm text-gray-600">Weeks 1-12</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Major organ development</li>
                  <li>• Morning sickness may begin</li>
                  <li>• Increased fatigue</li>
                  <li>• Breast tenderness</li>
                  <li>• First prenatal appointments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">2</span>
                </div>
                <CardTitle className="text-blue-600">Second Trimester</CardTitle>
                <p className="text-sm text-gray-600">Weeks 13-26</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Energy levels improve</li>
                  <li>• Baby&apos;s movements felt</li>
                  <li>• Anatomy scan ultrasound</li>
                  <li>• Baby&apos;s sex can be determined</li>
                  <li>• Belly becomes more visible</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">3</span>
                </div>
                <CardTitle className="text-purple-600">Third Trimester</CardTitle>
                <p className="text-sm text-gray-600">Weeks 27-40</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Rapid baby weight gain</li>
                  <li>• Preparation for labor</li>
                  <li>• More frequent appointments</li>
                  <li>• Baby&apos;s lungs mature</li>
                  <li>• Full-term at 37 weeks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Week-by-Week Guide Preview */}
        {result && result.weeksPregnant >= 4 && (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Your Pregnancy Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Recent Milestones</h4>
                    <div className="space-y-2">
                      {result.weeksPregnant >= 8 && (
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Week 8: All major organs present</span>
                        </div>
                      )}
                      {result.weeksPregnant >= 12 && (
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Week 12: End of first trimester</span>
                        </div>
                      )}
                      {result.weeksPregnant >= 20 && (
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Week 20: Halfway point reached!</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Upcoming Milestones</h4>
                    <div className="space-y-2">
                      {result.weeksPregnant < 20 && (
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Week 20: Anatomy scan ultrasound</span>
                        </div>
                      )}
                      {result.weeksPregnant < 28 && (
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Week 28: Third trimester begins</span>
                        </div>
                      )}
                      {result.weeksPregnant < 37 && (
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Week 37: Baby considered full-term</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pregnancy Tools</h2>
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
            
            <Link href="/tools/baby-size-comparison" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Baby className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Baby Size Guide</h3>
                  <p className="text-sm text-gray-600">See how big your baby is each week</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/kick-counter" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Activity className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Kick Counter</h3>
                  <p className="text-sm text-gray-600">Track your baby&apos;s movements</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}