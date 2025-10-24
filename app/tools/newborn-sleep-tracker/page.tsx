'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Moon, Sun, Clock, TrendingUp, Baby, Calendar, BarChart3 } from 'lucide-react'

interface SleepEntry {
  id: string
  date: string
  sleepTime: string
  wakeTime: string
  duration: number
  quality: 'poor' | 'fair' | 'good' | 'excellent'
  notes: string
}

interface SleepStats {
  avgDuration: number
  totalSleep: number
  longestSleep: number
  shortestSleep: number
  nightSleeps: number
  napCount: number
}

export default function NewbornSleepTracker() {
  const [sleepEntries, setSleepEntries] = useState<SleepEntry[]>([])
  const [sleepTime, setSleepTime] = useState('')
  const [wakeTime, setWakeTime] = useState('')
  const [quality, setQuality] = useState<'poor' | 'fair' | 'good' | 'excellent'>('good')
  const [notes, setNotes] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const calculateDuration = (start: string, end: string): number => {
    const startTime = new Date(`2025-01-01T${start}:00`)
    const endTime = new Date(`2025-01-01T${end}:00`)
    
    // Handle overnight sleep
    if (endTime < startTime) {
      endTime.setDate(endTime.getDate() + 1)
    }
    
    return (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60)
  }

  const addSleepEntry = () => {
    if (sleepTime && wakeTime) {
      const duration = calculateDuration(sleepTime, wakeTime)
      const newEntry: SleepEntry = {
        id: Date.now().toString(),
        date: selectedDate,
        sleepTime,
        wakeTime,
        duration,
        quality,
        notes
      }
      
      setSleepEntries([...sleepEntries, newEntry].sort((a, b) => 
        new Date(b.date + 'T' + b.sleepTime).getTime() - new Date(a.date + 'T' + a.sleepTime).getTime()
      ))
      
      // Reset form
      setSleepTime('')
      setWakeTime('')
      setQuality('good')
      setNotes('')
    }
  }

  const deleteSleepEntry = (id: string) => {
    setSleepEntries(sleepEntries.filter(entry => entry.id !== id))
  }

  const calculateStats = (): SleepStats => {
    if (sleepEntries.length === 0) {
      return {
        avgDuration: 0,
        totalSleep: 0,
        longestSleep: 0,
        shortestSleep: 0,
        nightSleeps: 0,
        napCount: 0
      }
    }

    const totalSleep = sleepEntries.reduce((sum, entry) => sum + entry.duration, 0)
    const durations = sleepEntries.map(entry => entry.duration)
    
    // Classify sleep periods (night sleep > 4 hours, naps <= 4 hours)
    const nightSleeps = sleepEntries.filter(entry => entry.duration > 4).length
    const napCount = sleepEntries.filter(entry => entry.duration <= 4).length

    return {
      avgDuration: totalSleep / sleepEntries.length,
      totalSleep,
      longestSleep: Math.max(...durations),
      shortestSleep: Math.min(...durations),
      nightSleeps,
      napCount
    }
  }

  const formatTime = (hours: number): string => {
    const h = Math.floor(hours)
    const m = Math.round((hours - h) * 60)
    return `${h}h ${m}m`
  }

  const getQualityColor = (quality: string): string => {
    switch (quality) {
      case 'excellent': return 'text-green-600 bg-green-50'
      case 'good': return 'text-blue-600 bg-blue-50'
      case 'fair': return 'text-yellow-600 bg-yellow-50'
      case 'poor': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const stats = calculateStats()
  const todayEntries = sleepEntries.filter(entry => entry.date === selectedDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Newborn Sleep Tracker</h1>
            <p className="text-xl text-gray-600">Monitor your baby&apos;s sleep patterns and establish healthy routines</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sleep Entry Form */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="h-5 w-5" />
                    Log Sleep Session
                  </CardTitle>
                  <CardDescription>
                    Record when your baby went to sleep and woke up
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sleepTime">Sleep Time</Label>
                      <Input
                        id="sleepTime"
                        type="time"
                        value={sleepTime}
                        onChange={(e) => setSleepTime(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="wakeTime">Wake Time</Label>
                      <Input
                        id="wakeTime"
                        type="time"
                        value={wakeTime}
                        onChange={(e) => setWakeTime(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="quality">Sleep Quality</Label>
                    <select
                      id="quality"
                      value={quality}
                      onChange={(e) => setQuality(e.target.value as 'poor' | 'fair' | 'good' | 'excellent')}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="excellent">Excellent - Deep, uninterrupted</option>
                      <option value="good">Good - Mostly peaceful</option>
                      <option value="fair">Fair - Some restlessness</option>
                      <option value="poor">Poor - Very restless/frequent waking</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Input
                      id="notes"
                      placeholder="Environment, feeding before sleep, etc."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  {sleepTime && wakeTime && (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>Duration:</strong> {formatTime(calculateDuration(sleepTime, wakeTime))}
                      </p>
                    </div>
                  )}

                  <Button onClick={addSleepEntry} className="w-full" disabled={!sleepTime || !wakeTime}>
                    <Moon className="h-4 w-4 mr-2" />
                    Log Sleep Session
                  </Button>
                </CardContent>
              </Card>

              {/* Sleep Guidelines */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Baby className="h-5 w-5" />
                    Sleep Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-blue-700">Newborn (0-3 months):</strong>
                      <p className="text-gray-600">14-17 hours total, 2-4 hour stretches</p>
                    </div>
                    <div>
                      <strong className="text-green-700">3-6 months:</strong>
                      <p className="text-gray-600">12-15 hours total, longer night sleep</p>
                    </div>
                    <div>
                      <strong className="text-purple-700">6-12 months:</strong>
                      <p className="text-gray-600">12-14 hours total, 2-3 naps per day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sleep Statistics and History */}
            <div className="lg:col-span-2 space-y-6">
              {/* Sleep Statistics */}
              {sleepEntries.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Sleep Statistics (Last 7 Days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-800">
                          {formatTime(stats.avgDuration)}
                        </div>
                        <div className="text-blue-600 text-sm">Average Sleep Duration</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-800">
                          {formatTime(stats.longestSleep)}
                        </div>
                        <div className="text-green-600 text-sm">Longest Sleep</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-800">
                          {stats.napCount}
                        </div>
                        <div className="text-purple-600 text-sm">Total Naps</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Total Sleep Time:</span> {formatTime(stats.totalSleep)}
                      </div>
                      <div>
                        <span className="font-semibold">Night Sleeps (4+ hours):</span> {stats.nightSleeps}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Today&apos;s Sleep */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5" />
                    Today&apos;s Sleep ({selectedDate})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {todayEntries.length > 0 ? (
                    <div className="space-y-3">
                      {todayEntries.map((entry) => (
                        <div key={entry.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-2">
                                <span className="font-semibold">{entry.sleepTime} - {entry.wakeTime}</span>
                                <span className="text-blue-600 font-medium">{formatTime(entry.duration)}</span>
                                <span className={`px-2 py-1 rounded-full text-xs ${getQualityColor(entry.quality)}`}>
                                  {entry.quality}
                                </span>
                              </div>
                              {entry.notes && (
                                <p className="text-gray-600 text-sm">{entry.notes}</p>
                              )}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteSleepEntry(entry.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-green-700 font-medium">
                          Total sleep today: {formatTime(todayEntries.reduce((sum, entry) => sum + entry.duration, 0))}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Baby className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No sleep sessions logged for this date</p>
                      <p className="text-sm mt-2">Add your first sleep entry above</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Sleep History */}
              {sleepEntries.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Sleep History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {sleepEntries.slice(0, 10).map((entry) => (
                        <div key={entry.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{entry.date}</div>
                            <div className="text-sm text-gray-600">
                              {entry.sleepTime} - {entry.wakeTime} ({formatTime(entry.duration)})
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${getQualityColor(entry.quality)}`}>
                            {entry.quality}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sleep Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Sleep Tips for Better Rest</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Creating Good Sleep Environment</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Keep room temperature cool (68-70°F)</li>
                    <li>Use blackout curtains for darkness</li>
                    <li>Maintain consistent sleep routine</li>
                    <li>Consider white noise machine</li>
                    <li>Ensure safe sleep environment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Recognizing Sleep Cues</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Yawning and rubbing eyes</li>
                    <li>Becoming fussy or cranky</li>
                    <li>Staring off into distance</li>
                    <li>Decreased activity and alertness</li>
                    <li>Clenching fists</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}