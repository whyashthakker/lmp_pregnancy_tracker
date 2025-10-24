'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Milk, Baby, Clock, TrendingUp, Calendar, BarChart3, Droplets } from 'lucide-react'

interface FeedingEntry {
  id: string
  date: string
  time: string
  type: 'breastfeeding' | 'formula' | 'pumped'
  side?: 'left' | 'right' | 'both'
  duration?: number // minutes for breastfeeding
  amount?: number // ml/oz for formula/pumped milk
  notes: string
}

interface FeedingStats {
  totalFeedings: number
  breastfeedings: number
  formulaFeedings: number
  avgInterval: number
  totalFormula: number
  avgFeedingTime: number
}

export default function FeedingLogTracker() {
  const [feedingEntries, setFeedingEntries] = useState<FeedingEntry[]>([])
  const [feedingType, setFeedingType] = useState<'breastfeeding' | 'formula' | 'pumped'>('breastfeeding')
  const [side, setSide] = useState<'left' | 'right' | 'both'>('left')
  const [duration, setDuration] = useState('')
  const [amount, setAmount] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [isFeeding, setIsFeeding] = useState(false)
  const [feedingStartTime, setFeedingStartTime] = useState<Date | null>(null)

  const startFeeding = () => {
    setFeedingStartTime(new Date())
    setIsFeeding(true)
    setTime(new Date().toTimeString().slice(0, 5))
  }

  const stopFeeding = () => {
    if (feedingStartTime) {
      const endTime = new Date()
      const duration = Math.round((endTime.getTime() - feedingStartTime.getTime()) / (1000 * 60))
      setDuration(duration.toString())
    }
    setIsFeeding(false)
    setFeedingStartTime(null)
  }

  const addFeedingEntry = () => {
    if (time && (duration || amount)) {
      const newEntry: FeedingEntry = {
        id: Date.now().toString(),
        date: selectedDate,
        time,
        type: feedingType,
        side: feedingType === 'breastfeeding' ? side : undefined,
        duration: feedingType === 'breastfeeding' ? parseInt(duration) : undefined,
        amount: feedingType !== 'breastfeeding' ? parseFloat(amount) : undefined,
        notes
      }
      
      setFeedingEntries([...feedingEntries, newEntry].sort((a, b) => 
        new Date(b.date + 'T' + b.time).getTime() - new Date(a.date + 'T' + a.time).getTime()
      ))
      
      // Reset form
      setDuration('')
      setAmount('')
      setTime('')
      setNotes('')
    }
  }

  const deleteFeedingEntry = (id: string) => {
    setFeedingEntries(feedingEntries.filter(entry => entry.id !== id))
  }

  const calculateStats = (): FeedingStats => {
    if (feedingEntries.length === 0) {
      return {
        totalFeedings: 0,
        breastfeedings: 0,
        formulaFeedings: 0,
        avgInterval: 0,
        totalFormula: 0,
        avgFeedingTime: 0
      }
    }

    const breastfeedings = feedingEntries.filter(entry => entry.type === 'breastfeeding')
    const formulaFeedings = feedingEntries.filter(entry => entry.type === 'formula' || entry.type === 'pumped')
    
    // Calculate average interval between feedings
    const sortedEntries = [...feedingEntries].sort((a, b) => 
      new Date(a.date + 'T' + a.time).getTime() - new Date(b.date + 'T' + b.time).getTime()
    )
    
    let totalInterval = 0
    for (let i = 1; i < sortedEntries.length; i++) {
      const prev = new Date(sortedEntries[i - 1].date + 'T' + sortedEntries[i - 1].time)
      const curr = new Date(sortedEntries[i].date + 'T' + sortedEntries[i].time)
      totalInterval += (curr.getTime() - prev.getTime()) / (1000 * 60 * 60) // hours
    }

    const avgInterval = sortedEntries.length > 1 ? totalInterval / (sortedEntries.length - 1) : 0
    const totalFormula = formulaFeedings.reduce((sum, entry) => sum + (entry.amount || 0), 0)
    const breastfeedingDurations = breastfeedings.filter(entry => entry.duration).map(entry => entry.duration!)
    const avgFeedingTime = breastfeedingDurations.length > 0 
      ? breastfeedingDurations.reduce((sum, duration) => sum + duration, 0) / breastfeedingDurations.length 
      : 0

    return {
      totalFeedings: feedingEntries.length,
      breastfeedings: breastfeedings.length,
      formulaFeedings: formulaFeedings.length,
      avgInterval,
      totalFormula,
      avgFeedingTime
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'breastfeeding': return '🤱'
      case 'formula': return '🍼'
      case 'pumped': return '🥛'
      default: return '🍼'
    }
  }

  const stats = calculateStats()
  const todayEntries = feedingEntries.filter(entry => entry.date === selectedDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Feeding Log Tracker</h1>
            <p className="text-xl text-gray-600">Track your baby&apos;s feeding schedule and monitor nutrition patterns</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feeding Entry Form */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Milk className="h-5 w-5" />
                    Log Feeding
                  </CardTitle>
                  <CardDescription>
                    Record feeding details and track nutrition
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

                  <div>
                    <Label htmlFor="feedingType">Feeding Type</Label>
                    <select
                      id="feedingType"
                      value={feedingType}
                      onChange={(e) => setFeedingType(e.target.value as 'breastfeeding' | 'formula' | 'pumped')}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="breastfeeding">🤱 Breastfeeding</option>
                      <option value="formula">🍼 Formula</option>
                      <option value="pumped">🥛 Pumped Milk</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="time">Feeding Time</Label>
                    <div className="flex gap-2">
                      <Input
                        id="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="flex-1"
                      />
                      {feedingType === 'breastfeeding' && (
                        <Button
                          onClick={isFeeding ? stopFeeding : startFeeding}
                          variant={isFeeding ? "destructive" : "default"}
                          className="whitespace-nowrap"
                        >
                          {isFeeding ? 'Stop' : 'Start'}
                        </Button>
                      )}
                    </div>
                    {isFeeding && (
                      <p className="text-sm text-green-600 mt-1">
                        Feeding in progress... Started at {feedingStartTime?.toTimeString().slice(0, 5)}
                      </p>
                    )}
                  </div>

                  {feedingType === 'breastfeeding' && (
                    <>
                      <div>
                        <Label htmlFor="side">Breast Side</Label>
                        <select
                          id="side"
                          value={side}
                          onChange={(e) => setSide(e.target.value as 'left' | 'right' | 'both')}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                          <option value="both">Both</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration (minutes)</Label>
                        <Input
                          id="duration"
                          type="number"
                          placeholder="Enter minutes"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {feedingType !== 'breastfeeding' && (
                    <div>
                      <Label htmlFor="amount">Amount (ml/oz)</Label>
                      <Input
                        id="amount"
                        type="number"
                        step="0.1"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Input
                      id="notes"
                      placeholder="How did baby feed? Any observations..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  <Button 
                    onClick={addFeedingEntry} 
                    className="w-full" 
                    disabled={!time || (!duration && !amount)}
                  >
                    <Milk className="h-4 w-4 mr-2" />
                    Log Feeding
                  </Button>
                </CardContent>
              </Card>

              {/* Feeding Guidelines */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Baby className="h-5 w-5" />
                    Feeding Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-pink-700">Newborn (0-2 weeks):</strong>
                      <p className="text-gray-600">8-12 feedings/day, every 1.5-3 hours</p>
                    </div>
                    <div>
                      <strong className="text-purple-700">2-4 weeks:</strong>
                      <p className="text-gray-600">8-10 feedings/day, every 2-3 hours</p>
                    </div>
                    <div>
                      <strong className="text-blue-700">1-3 months:</strong>
                      <p className="text-gray-600">6-8 feedings/day, every 3-4 hours</p>
                    </div>
                    <div>
                      <strong className="text-green-700">3-6 months:</strong>
                      <p className="text-gray-600">5-6 feedings/day, every 4-5 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feeding Statistics and History */}
            <div className="lg:col-span-2 space-y-6">
              {/* Feeding Statistics */}
              {feedingEntries.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Feeding Statistics (Last 7 Days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-pink-50 p-4 rounded-lg text-center">
                        <Milk className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-pink-800">
                          {stats.totalFeedings}
                        </div>
                        <div className="text-pink-600 text-sm">Total Feedings</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-800">
                          {stats.avgInterval.toFixed(1)}h
                        </div>
                        <div className="text-purple-600 text-sm">Avg Interval</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-800">
                          {stats.avgFeedingTime.toFixed(0)}min
                        </div>
                        <div className="text-blue-600 text-sm">Avg BF Duration</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Breastfeeding:</span> {stats.breastfeedings} sessions
                      </div>
                      <div>
                        <span className="font-semibold">Formula/Pumped:</span> {stats.formulaFeedings} sessions
                      </div>
                      <div>
                        <span className="font-semibold">Total Formula:</span> {stats.totalFormula.toFixed(1)} ml/oz
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Today&apos;s Feedings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Today&apos;s Feedings ({selectedDate})
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
                                <span className="text-2xl">{getTypeIcon(entry.type)}</span>
                                <div>
                                  <div className="font-semibold">{entry.time}</div>
                                  <div className="text-sm text-gray-600">
                                    {entry.type === 'breastfeeding' 
                                      ? `${entry.side} side, ${entry.duration} min`
                                      : `${entry.amount} ml/oz`
                                    }
                                  </div>
                                </div>
                              </div>
                              {entry.notes && (
                                <p className="text-gray-600 text-sm">{entry.notes}</p>
                              )}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteFeedingEntry(entry.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-green-700 font-medium">
                          Total feedings today: {todayEntries.length}
                        </p>
                        {todayEntries.some(entry => entry.amount) && (
                          <p className="text-green-600 text-sm">
                            Formula/pumped milk: {todayEntries.reduce((sum, entry) => sum + (entry.amount || 0), 0)} ml/oz
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Droplets className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No feedings logged for this date</p>
                      <p className="text-sm mt-2">Add your first feeding entry above</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Feeding History */}
              {feedingEntries.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Feeding History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {feedingEntries.slice(0, 10).map((entry) => (
                        <div key={entry.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{getTypeIcon(entry.type)}</span>
                            <div>
                              <div className="font-medium">{entry.date} at {entry.time}</div>
                              <div className="text-sm text-gray-600">
                                {entry.type === 'breastfeeding' 
                                  ? `${entry.side} side, ${entry.duration} min`
                                  : `${entry.amount} ml/oz`
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Feeding Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Feeding Tips & Signs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Hunger Cues</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Rooting and sucking motions</li>
                    <li>Moving head side to side</li>
                    <li>Bringing hands to mouth</li>
                    <li>Making sucking sounds</li>
                    <li>Crying (late hunger cue)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Fullness Signs</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Slowing down or stopping sucking</li>
                    <li>Releasing the nipple/bottle</li>
                    <li>Turning head away</li>
                    <li>Relaxed hands and body</li>
                    <li>Falling asleep during feeding</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Good Feeding Signs</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Regular swallowing sounds</li>
                    <li>Steady weight gain</li>
                    <li>Wet diapers (6+ per day after day 5)</li>
                    <li>Content between feedings</li>
                    <li>Alert and active when awake</li>
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