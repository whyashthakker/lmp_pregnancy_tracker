'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, Plus, RotateCcw, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

interface KickSession {
  id: number;
  startTime: Date;
  endTime?: Date;
  kicks: Array<{
    time: Date;
    type: 'kick' | 'roll' | 'hiccup' | 'punch';
  }>;
  completed: boolean;
}

export default function KickCounterClient() {
  const [currentSession, setCurrentSession] = useState<KickSession | null>(null);
  const [sessions, setSessions] = useState<KickSession[]>([]);
  const [timer, setTimer] = useState(0); // in seconds
  const [targetKicks] = useState(10); // Standard recommendation

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (currentSession && !currentSession.completed) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [currentSession]);

  const startSession = () => {
    const newSession: KickSession = {
      id: Date.now(),
      startTime: new Date(),
      kicks: [],
      completed: false
    };
    
    setCurrentSession(newSession);
    setTimer(0);
  };

  const addKick = (type: 'kick' | 'roll' | 'hiccup' | 'punch') => {
    if (!currentSession) return;
    
    const newKick = {
      time: new Date(),
      type
    };
    
    const updatedSession = {
      ...currentSession,
      kicks: [...currentSession.kicks, newKick]
    };
    
    // Check if we've reached the target
    if (updatedSession.kicks.length >= targetKicks) {
      updatedSession.completed = true;
      updatedSession.endTime = new Date();
      
      setSessions(prev => [updatedSession, ...prev]);
      setCurrentSession(null);
      setTimer(0);
    } else {
      setCurrentSession(updatedSession);
    }
  };

  const endSession = () => {
    if (!currentSession) return;
    
    const endedSession = {
      ...currentSession,
      endTime: new Date(),
      completed: false // Ended early
    };
    
    setSessions(prev => [endedSession, ...prev]);
    setCurrentSession(null);
    setTimer(0);
  };

  const clearHistory = () => {
    setSessions([]);
    setCurrentSession(null);
    setTimer(0);
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getSessionStatus = () => {
    if (!currentSession) return null;
    
    const kickCount = currentSession.kicks.length;
    const timeElapsed = timer;
    
    if (kickCount >= targetKicks) {
      return {
        status: 'completed',
        message: '✅ Great! You felt 10 movements.',
        color: 'bg-green-50 border-green-200 text-green-800'
      };
    } else if (timeElapsed >= 7200) { // 2 hours
      return {
        status: 'concern',
        message: '⚠️ Consider contacting your healthcare provider if you haven\'t felt 10 movements in 2 hours.',
        color: 'bg-red-50 border-red-200 text-red-800'
      };
    } else if (timeElapsed >= 3600) { // 1 hour
      return {
        status: 'monitor',
        message: '👀 Continue monitoring. Most babies complete 10 movements within 2 hours.',
        color: 'bg-orange-50 border-orange-200 text-orange-800'
      };
    } else {
      return {
        status: 'normal',
        message: '📊 Keep tracking movements. You\'re doing great!',
        color: 'bg-blue-50 border-blue-200 text-blue-800'
      };
    }
  };

  const getTodaysAverage = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todaySessions = sessions.filter(session => 
      session.startTime >= today && session.completed
    );
    
    if (todaySessions.length === 0) return null;
    
    const totalTime = todaySessions.reduce((sum, session) => {
      if (session.endTime) {
        return sum + (session.endTime.getTime() - session.startTime.getTime());
      }
      return sum;
    }, 0);
    
    const avgTimeSeconds = Math.floor(totalTime / todaySessions.length / 1000);
    
    return {
      sessions: todaySessions.length,
      avgTime: avgTimeSeconds
    };
  };

  const currentStatus = getSessionStatus();
  const todayStats = getTodaysAverage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-teal-600 hover:text-teal-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Activity className="h-12 w-12 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Kick Counter
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track your baby&apos;s movements to monitor their health and activity. 
            Count 10 movements to complete a session and ensure your baby is doing well.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Counter */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Movement Counter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!currentSession ? (
                <div className="text-center space-y-4">
                  <div className="text-gray-600">Ready to start counting movements</div>
                  <Button 
                    onClick={startSession}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    size="lg"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Start Counting Session
                  </Button>
                  <div className="text-sm text-gray-500">
                    Best time: When baby is usually active (often after meals)
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">
                      {currentSession.kicks.length} / {targetKicks}
                    </div>
                    <div className="text-gray-600">Movements counted</div>
                    <div className="text-2xl font-mono text-gray-800 mt-2">
                      {formatTime(timer)}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      onClick={() => addKick('kick')}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      🦵 Kick
                    </Button>
                    <Button 
                      onClick={() => addKick('roll')}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      🔄 Roll
                    </Button>
                    <Button 
                      onClick={() => addKick('punch')}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      👊 Punch
                    </Button>
                    <Button 
                      onClick={() => addKick('hiccup')}
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      🫧 Hiccup
                    </Button>
                  </div>

                  <Button 
                    onClick={endSession}
                    variant="outline"
                    className="w-full"
                  >
                    End Session Early
                  </Button>
                </div>
              )}

              {sessions.length > 0 && (
                <Button 
                  onClick={clearHistory}
                  variant="outline"
                  className="w-full"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Clear History
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Status & Analysis */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Movement Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStatus && (
                <div className={`p-4 rounded-lg border-2 ${currentStatus.color}`}>
                  <p className="text-sm font-medium">{currentStatus.message}</p>
                </div>
              )}

              {todayStats && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">Today&apos;s Summary:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-teal-50 rounded-lg text-center">
                      <div className="text-xl font-bold text-teal-600">{todayStats.sessions}</div>
                      <div className="text-sm text-gray-600">Sessions</div>
                    </div>
                    <div className="p-3 bg-cyan-50 rounded-lg text-center">
                      <div className="text-xl font-bold text-cyan-600">{formatTime(todayStats.avgTime)}</div>
                      <div className="text-sm text-gray-600">Avg Time</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h4 className="font-medium text-blue-800 mb-2">Movement Guidelines</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Feel for 10 movements within 2 hours</li>
                  <li>• Count kicks, rolls, punches, and turns</li>
                  <li>• Best times: after meals or when lying down</li>
                  <li>• Start counting around 26-28 weeks</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h4 className="font-medium text-yellow-800 mb-2">When to Contact Your Doctor</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Less than 10 movements in 2 hours</li>
                  <li>• Significant decrease in usual movement</li>
                  <li>• No movements for several hours</li>
                  <li>• Any concerns about baby&apos;s activity</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Movements */}
        {currentSession && currentSession.kicks.length > 0 && (
          <Card className="shadow-xl mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Current Session Movements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentSession.kicks.map((kick, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">#{currentSession.kicks.length - index}</Badge>
                      <span className="capitalize">{kick.type}</span>
                      {kick.type === 'kick' && '🦵'}
                      {kick.type === 'roll' && '🔄'}
                      {kick.type === 'punch' && '👊'}
                      {kick.type === 'hiccup' && '🫧'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {kick.time.toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Session History */}
        {sessions.length > 0 && (
          <Card className="shadow-xl mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Session History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {sessions.slice(0, 10).map((session, index) => {
                  const duration = session.endTime 
                    ? Math.floor((session.endTime.getTime() - session.startTime.getTime()) / 1000)
                    : null;
                  
                  return (
                    <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {session.startTime.toLocaleDateString()}
                          {session.completed ? (
                            <Badge className="bg-green-100 text-green-800">Completed</Badge>
                          ) : (
                            <Badge variant="secondary">Incomplete</Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {session.startTime.toLocaleTimeString()} • {session.kicks.length} movements
                        </div>
                      </div>
                      <div className="text-right">
                        {duration && (
                          <div className="font-medium">
                            {formatTime(duration)}
                          </div>
                        )}
                        <div className="text-sm text-gray-600">
                          {session.completed ? 'Goal reached' : 'Ended early'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Educational Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Why Count Baby Movements?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    <strong>Monitor baby&apos;s health:</strong> Regular movement indicates baby is getting enough oxygen and nutrition
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    <strong>Peace of mind:</strong> Daily counting helps you stay connected with your baby
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    <strong>Early detection:</strong> Changes in movement patterns can indicate potential issues
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    <strong>Learn patterns:</strong> Each baby has their own activity schedule
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">When to Count</h4>
                  <p className="text-sm text-gray-600">
                    After meals, in the evening, or when baby is typically active. Choose a consistent time each day.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Position</h4>
                  <p className="text-sm text-gray-600">
                    Lie on your left side or sit comfortably. This position optimizes blood flow to the baby.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">What Counts</h4>
                  <p className="text-sm text-gray-600">
                    Kicks, rolls, punches, turns, and hiccups all count as movements. Even small movements matter.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">When to Start</h4>
                  <p className="text-sm text-gray-600">
                    Begin regular counting around 26-28 weeks when movements become more predictable.
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
            <Link href="/tools/contraction-timer" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Activity className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Contraction Timer</h3>
                  <p className="text-sm text-gray-600">Time your labor contractions</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/baby-size-comparison" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Baby Size Guide</h3>
                  <p className="text-sm text-gray-600">See how big your baby is each week</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/pregnancy-week-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
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