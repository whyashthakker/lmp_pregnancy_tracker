'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Timer, Play, Pause, RotateCcw, AlertTriangle, Clock } from 'lucide-react';

interface Contraction {
  id: number;
  startTime: Date;
  endTime?: Date;
  duration?: number; // in seconds
}

export default function ContractionTimerClient() {
  const [contractions, setContractions] = useState<Contraction[]>([]);
  const [currentContraction, setCurrentContraction] = useState<Contraction | null>(null);
  const [timer, setTimer] = useState(0); // current contraction timer in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && currentContraction) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, currentContraction]);

  const startContraction = () => {
    const newContraction: Contraction = {
      id: Date.now(),
      startTime: new Date(),
    };
    
    setCurrentContraction(newContraction);
    setIsRunning(true);
    setTimer(0);
  };

  const endContraction = () => {
    if (currentContraction) {
      const endTime = new Date();
      const duration = Math.floor((endTime.getTime() - currentContraction.startTime.getTime()) / 1000);
      
      const completedContraction: Contraction = {
        ...currentContraction,
        endTime,
        duration,
      };
      
      setContractions(prev => [completedContraction, ...prev]);
      setCurrentContraction(null);
      setIsRunning(false);
      setTimer(0);
    }
  };

  const clearHistory = () => {
    setContractions([]);
    setCurrentContraction(null);
    setIsRunning(false);
    setTimer(0);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateStats = () => {
    if (contractions.length < 2) return null;
    
    // Average duration
    const totalDuration = contractions.reduce((sum, c) => sum + (c.duration || 0), 0);
    const avgDuration = totalDuration / contractions.length;
    
    // Calculate intervals (time between start of contractions)
    const intervals = [];
    for (let i = 0; i < contractions.length - 1; i++) {
      const interval = Math.floor((contractions[i].startTime.getTime() - contractions[i + 1].startTime.getTime()) / 1000 / 60);
      intervals.push(interval);
    }
    
    const avgInterval = intervals.length > 0 ? intervals.reduce((sum, i) => sum + i, 0) / intervals.length : 0;
    
    return {
      avgDuration: Math.round(avgDuration),
      avgInterval: Math.round(avgInterval),
      totalContractions: contractions.length,
      lastHourContractions: contractions.filter(c => 
        (new Date().getTime() - c.startTime.getTime()) < 3600000
      ).length
    };
  };

  const shouldGoToHospital = () => {
    const stats = calculateStats();
    if (!stats) return null;
    
    // 5-1-1 rule: contractions 5 minutes apart, lasting 1 minute, for 1 hour
    const recentContractions = contractions.slice(0, 12); // last 12 contractions (roughly 1 hour)
    
    if (recentContractions.length < 6) return null;
    
    const avgDurationMinutes = stats.avgDuration / 60;
    const isRegular = stats.avgInterval <= 5 && stats.avgInterval >= 3;
    const isDurationLongEnough = avgDurationMinutes >= 1;
    const hasEnoughContractions = stats.lastHourContractions >= 6;
    
    if (isRegular && isDurationLongEnough && hasEnoughContractions) {
      return 'hospital';
    } else if (stats.avgInterval <= 10 && avgDurationMinutes >= 0.5) {
      return 'monitor';
    }
    
    return 'early';
  };

  const getAdviceMessage = () => {
    const advice = shouldGoToHospital();
    
    switch (advice) {
      case 'hospital':
        return {
          title: '🚨 Time to Go to Hospital!',
          message: 'Your contractions meet the 5-1-1 rule. Contact your healthcare provider and head to the hospital.',
          color: 'bg-red-50 border-red-200 text-red-800',
          urgent: true
        };
      case 'monitor':
        return {
          title: '⚠️ Active Labor May Be Starting',
          message: 'Keep timing contractions and prepare to head to the hospital soon. Contact your healthcare provider.',
          color: 'bg-orange-50 border-orange-200 text-orange-800',
          urgent: false
        };
      case 'early':
        return {
          title: '📝 Early Labor',
          message: 'Continue timing contractions. Try to rest and stay hydrated. Labor may still be early.',
          color: 'bg-blue-50 border-blue-200 text-blue-800',
          urgent: false
        };
      default:
        return {
          title: '📊 Keep Tracking',
          message: 'Time more contractions to establish a pattern. Every labor is different.',
          color: 'bg-gray-50 border-gray-200 text-gray-800',
          urgent: false
        };
    }
  };

  const stats = calculateStats();
  const advice = getAdviceMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-red-600 hover:text-red-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Timer className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Contraction Timer
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Time your labor contractions to track their frequency and duration. 
            Know when it&apos;s time to head to the hospital with our smart analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Timer */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5" />
                Contraction Timer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-mono font-bold text-red-600 mb-4">
                  {formatTime(timer)}
                </div>
                
                {currentContraction ? (
                  <div className="space-y-3">
                    <div className="text-lg text-gray-600">Contraction in progress...</div>
                    <Button 
                      onClick={endContraction}
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      size="lg"
                    >
                      <Pause className="h-5 w-5 mr-2" />
                      End Contraction
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-lg text-gray-600">Ready to time next contraction</div>
                    <Button 
                      onClick={startContraction}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      size="lg"
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Start Contraction
                    </Button>
                  </div>
                )}
                
                {contractions.length > 0 && (
                  <Button 
                    onClick={clearHistory}
                    variant="outline"
                    className="w-full mt-3"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Clear History
                  </Button>
                )}
              </div>

              {/* Quick Stats */}
              {stats && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{stats.avgInterval}m</div>
                    <div className="text-sm text-gray-600">Avg Interval</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{formatTime(stats.avgDuration)}</div>
                    <div className="text-sm text-gray-600">Avg Duration</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analysis & Advice */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Labor Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {advice && (
                <div className={`p-4 rounded-lg border-2 ${advice.color}`}>
                  <h3 className="font-bold text-lg mb-2">{advice.title}</h3>
                  <p className="text-sm">{advice.message}</p>
                </div>
              )}

              {stats && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">Current Session Stats:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-700">{stats.totalContractions}</div>
                      <div className="text-sm text-gray-600">Total Contractions</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-700">{stats.lastHourContractions}</div>
                      <div className="text-sm text-gray-600">Last Hour</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h4 className="font-medium text-yellow-800 mb-2">The 5-1-1 Rule</h4>
                <p className="text-sm text-yellow-700">
                  Go to the hospital when contractions are <strong>5 minutes apart</strong>, 
                  last <strong>1 minute each</strong>, and continue for <strong>1 hour</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contraction History */}
        {contractions.length > 0 && (
          <Card className="shadow-xl mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Contraction History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {contractions.map((contraction, index) => {
                  const nextContraction = contractions[index + 1];
                  const interval = nextContraction 
                    ? Math.floor((contraction.startTime.getTime() - nextContraction.startTime.getTime()) / 1000 / 60)
                    : null;
                  
                  return (
                    <div key={contraction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">
                          {contraction.startTime.toLocaleTimeString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          Contraction #{contractions.length - index}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">
                          {contraction.duration ? formatTime(contraction.duration) : 'In progress...'}
                        </div>
                        {interval && (
                          <div className="text-sm text-gray-600">
                            {interval}m interval
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>How to Use the Timer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-sm text-gray-600">
                    Press &quot;Start Contraction&quot; when you feel a contraction beginning
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-sm text-gray-600">
                    Press &quot;End Contraction&quot; when the contraction completely stops
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-sm text-gray-600">
                    Repeat for each contraction to track patterns
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <p className="text-sm text-gray-600">
                    Watch for the 5-1-1 pattern to know when to go to the hospital
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When to Call Your Doctor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Contractions are 5 minutes apart for 1 hour
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Your water breaks (with or without contractions)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Heavy bleeding or severe pain
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Decreased baby movement
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Any concerns about your or baby&apos;s wellbeing
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
            <Link href="/tools/kick-counter" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Timer className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Kick Counter</h3>
                  <p className="text-sm text-gray-600">Track your baby&apos;s movements</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/due-date-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Due Date Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your estimated delivery date</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/pregnancy-week-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Week Calculator</h3>
                  <p className="text-sm text-gray-600">Find out how many weeks pregnant you are</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}