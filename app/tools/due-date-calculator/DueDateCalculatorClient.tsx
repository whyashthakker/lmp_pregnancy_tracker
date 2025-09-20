'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Baby, Clock, Heart, Calculator } from 'lucide-react';

export default function DueDateCalculatorClient() {
  const [lmpDate, setLmpDate] = useState('');
  const [conceptionDate, setConceptionDate] = useState('');
  const [calculationType, setCalculationType] = useState<'lmp' | 'conception'>('lmp');
  const [result, setResult] = useState<{
    dueDate: string;
    weeksPregnant: number;
    daysRemaining: number;
    trimester: number;
    conceptionDate: string;
  } | null>(null);

  const calculateDueDate = () => {
    let baseDate: Date;
    
    if (calculationType === 'lmp' && lmpDate) {
      baseDate = new Date(lmpDate);
      baseDate.setDate(baseDate.getDate() + 280); // 40 weeks from LMP
    } else if (calculationType === 'conception' && conceptionDate) {
      baseDate = new Date(conceptionDate);
      baseDate.setDate(baseDate.getDate() + 266); // 38 weeks from conception
    } else {
      return;
    }

    const today = new Date();
    const diffTime = today.getTime() - new Date(calculationType === 'lmp' ? lmpDate : conceptionDate).getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let weeksPregnant = 0;
    if (calculationType === 'lmp') {
      weeksPregnant = Math.floor(diffDays / 7);
    } else {
      weeksPregnant = Math.floor((diffDays + 14) / 7); // Add 2 weeks for conception date
    }

    const daysRemaining = Math.ceil((baseDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const trimester = weeksPregnant <= 12 ? 1 : weeksPregnant <= 26 ? 2 : 3;

    let calculatedConceptionDate = '';
    if (calculationType === 'lmp') {
      const conception = new Date(lmpDate);
      conception.setDate(conception.getDate() + 14);
      calculatedConceptionDate = conception.toLocaleDateString();
    } else {
      calculatedConceptionDate = new Date(conceptionDate).toLocaleDateString();
    }

    setResult({
      dueDate: baseDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      weeksPregnant: Math.max(0, weeksPregnant),
      daysRemaining: Math.max(0, daysRemaining),
      trimester,
      conceptionDate: calculatedConceptionDate
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
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
            <Calendar className="h-12 w-12 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Pregnancy Due Date Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calculate your baby&apos;s estimated due date based on your last menstrual period or conception date. 
            Get accurate pregnancy timeline information instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Due Date Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Choose calculation method:</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={calculationType === 'lmp' ? 'default' : 'outline'}
                    onClick={() => setCalculationType('lmp')}
                    className="h-auto py-3"
                  >
                    <div>
                      <div className="font-medium">Last Period (LMP)</div>
                      <div className="text-xs opacity-75">Most common method</div>
                    </div>
                  </Button>
                  <Button
                    variant={calculationType === 'conception' ? 'default' : 'outline'}
                    onClick={() => setCalculationType('conception')}
                    className="h-auto py-3"
                  >
                    <div>
                      <div className="font-medium">Conception Date</div>
                      <div className="text-xs opacity-75">If you know exact date</div>
                    </div>
                  </Button>
                </div>
              </div>

              {calculationType === 'lmp' ? (
                <div>
                  <Label htmlFor="lmp-date" className="text-base font-medium">
                    First day of your last menstrual period
                  </Label>
                  <Input
                    id="lmp-date"
                    type="date"
                    value={lmpDate}
                    onChange={(e) => setLmpDate(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    This is the most accurate method for calculating due dates
                  </p>
                </div>
              ) : (
                <div>
                  <Label htmlFor="conception-date" className="text-base font-medium">
                    Conception date (or ovulation date)
                  </Label>
                  <Input
                    id="conception-date"
                    type="date"
                    value={conceptionDate}
                    onChange={(e) => setConceptionDate(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Use this if you know the exact date of conception
                  </p>
                </div>
              )}

              <Button 
                onClick={calculateDueDate} 
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                disabled={(!lmpDate && calculationType === 'lmp') || (!conceptionDate && calculationType === 'conception')}
              >
                Calculate Due Date
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5" />
                  Your Pregnancy Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    {result.dueDate}
                  </div>
                  <div className="text-gray-600">Your estimated due date</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-xl font-bold text-blue-600">{result.weeksPregnant}</div>
                    <div className="text-sm text-gray-600">Weeks Pregnant</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-xl font-bold text-green-600">{result.daysRemaining}</div>
                    <div className="text-sm text-gray-600">Days to Go</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Current Trimester:</span>
                    <span className="text-purple-600 font-bold">
                      {result.trimester === 1 ? 'First' : result.trimester === 2 ? 'Second' : 'Third'} Trimester
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Estimated Conception:</span>
                    <span className="text-gray-700">{result.conceptionDate}</span>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Remember:</strong> This is an estimated date. Only about 5% of babies are born on their exact due date. 
                    Most babies are born within 2 weeks before or after the due date.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>How Due Dates Are Calculated</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Naegele&apos;s Rule</h4>
                <p className="text-sm text-gray-600">
                  The most common method adds 280 days (40 weeks) to the first day of your last menstrual period. 
                  This assumes a 28-day cycle with ovulation on day 14.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Conception Date Method</h4>
                <p className="text-sm text-gray-600">
                  If you know your conception date, we add 266 days (38 weeks) to calculate your due date.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Ultrasound Dating</h4>
                <p className="text-sm text-gray-600">
                  Early ultrasounds (before 20 weeks) can provide the most accurate due dates, especially if your cycles are irregular.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Due dates are estimates - your baby may arrive 2 weeks before or after
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    First-time mothers often deliver after their due date
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Your healthcare provider may adjust your due date based on ultrasound measurements
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Always consult with your healthcare provider for personalized care
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Other Pregnancy Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/pregnancy-week-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Week Calculator</h3>
                  <p className="text-sm text-gray-600">Find out how many weeks pregnant you are</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/ovulation-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Ovulation Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your fertile window</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/baby-size-comparison" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Baby className="h-8 w-8 text-blue-600 mx-auto mb-3" />
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