'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Baby, Clock, Calendar, BarChart3, Droplets, AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface DiaperEntry {
  id: string
  date: string
  time: string
  type: 'wet' | 'dirty' | 'both' | 'dry'
  consistency?: 'liquid' | 'soft' | 'formed' | 'hard'
  color?: 'yellow' | 'brown' | 'green' | 'black' | 'other'
  amount: 'small' | 'medium' | 'large'
  notes: string
}

interface DiaperStats {
  totalChanges: number
  wetDiapers: number
  dirtyDiapers: number
  avgInterval: number
  todayTotal: number
  concerningChanges: number
}

export default function DiaperChangeTracker() {
  const [diaperEntries, setDiaperEntries] = useState<DiaperEntry[]>([])
  const [diaperType, setDiaperType] = useState<'wet' | 'dirty' | 'both' | 'dry'>('wet')
  const [consistency, setConsistency] = useState<'liquid' | 'soft' | 'formed' | 'hard'>('soft')
  const [color, setColor] = useState<'yellow' | 'brown' | 'green' | 'black' | 'other'>('yellow')
  const [amount, setAmount] = useState<'small' | 'medium' | 'large'>('medium')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const addDiaperEntry = () => {
    if (time) {
      const newEntry: DiaperEntry = {
        id: Date.now().toString(),
        date: selectedDate,
        time,
        type: diaperType,
        consistency: diaperType === 'dirty' || diaperType === 'both' ? consistency : undefined,
        color: diaperType === 'dirty' || diaperType === 'both' ? color : undefined,
        amount,
        notes
      }
      
      setDiaperEntries([...diaperEntries, newEntry].sort((a, b) => 
        new Date(b.date + 'T' + b.time).getTime() - new Date(a.date + 'T' + a.time).getTime()
      ))
      
      // Reset form but keep current time as default
      setTime(new Date().toTimeString().slice(0, 5))
      setNotes('')
    }
  }

  const deleteDiaperEntry = (id: string) => {
    setDiaperEntries(diaperEntries.filter(entry => entry.id !== id))
  }

  const calculateStats = (): DiaperStats => {
    if (diaperEntries.length === 0) {
      return {
        totalChanges: 0,
        wetDiapers: 0,
        dirtyDiapers: 0,
        avgInterval: 0,
        todayTotal: 0,
        concerningChanges: 0
      }
    }

    const wetDiapers = diaperEntries.filter(entry => entry.type === 'wet' || entry.type === 'both').length
    const dirtyDiapers = diaperEntries.filter(entry => entry.type === 'dirty' || entry.type === 'both').length
    const todayTotal = diaperEntries.filter(entry => entry.date === selectedDate).length
    
    // Calculate average interval between changes
    const sortedEntries = [...diaperEntries].sort((a, b) => 
      new Date(a.date + 'T' + a.time).getTime() - new Date(b.date + 'T' + b.time).getTime()
    )
    
    let totalInterval = 0
    for (let i = 1; i < sortedEntries.length; i++) {
      const prev = new Date(sortedEntries[i - 1].date + 'T' + sortedEntries[i - 1].time)
      const curr = new Date(sortedEntries[i].date + 'T' + sortedEntries[i].time)
      totalInterval += (curr.getTime() - prev.getTime()) / (1000 * 60 * 60) // hours
    }

    const avgInterval = sortedEntries.length > 1 ? totalInterval / (sortedEntries.length - 1) : 0
    
    // Count concerning changes (no wet diapers for 6+ hours, black stools after day 3, etc.)
    const concerningChanges = diaperEntries.filter(entry => 
      entry.color === 'black' || 
      entry.color === 'green' ||
      entry.consistency === 'hard' ||
      entry.type === 'dry'
    ).length

    return {
      totalChanges: diaperEntries.length,
      wetDiapers,
      dirtyDiapers,
      avgInterval,
      todayTotal,
      concerningChanges
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'wet': return '💧'
      case 'dirty': return '💩'
      case 'both': return '💧💩'
      case 'dry': return '🔍'
      default: return '👶'
    }
  }

  const getColorEmoji = (color: string) => {
    switch (color) {
      case 'yellow': return '🟡'
      case 'brown': return '🟤'
      case 'green': return '🟢'
      case 'black': return '⚫'
      default: return '🔴'
    }
  }

  const isAgeAppropriate = (entry: DiaperEntry): boolean => {
    // Basic checks for concerning patterns
    return !(entry.color === 'black' || entry.color === 'green' || entry.consistency === 'hard')
  }

  const stats = calculateStats()
  const todayEntries = diaperEntries.filter(entry => entry.date === selectedDate)
  const concerningEntries = diaperEntries.filter(entry => !isAgeAppropriate(entry))

  // Set default time to current time
  if (!time) {
    setTime(new Date().toTimeString().slice(0, 5))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Diaper Change Tracker</h1>
            <p className="text-xl text-gray-600">Monitor your baby&apos;s diaper patterns and track important health indicators</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Diaper Entry Form */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Baby className="h-5 w-5" />
                    Log Diaper Change
                  </CardTitle>
                  <CardDescription>
                    Record diaper changes to monitor health patterns
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
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="diaperType">Diaper Type</Label>
                    <select
                      id="diaperType"
                      value={diaperType}
                      onChange={(e) => setDiaperType(e.target.value as 'wet' | 'dirty' | 'both' | 'dry')}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="wet">💧 Wet only</option>
                      <option value="dirty">💩 Dirty only</option>
                      <option value="both">💧💩 Both wet and dirty</option>
                      <option value="dry">🔍 Dry (diaper check)</option>
                    </select>
                  </div>

                  {(diaperType === 'dirty' || diaperType === 'both') && (
                    <>
                      <div>
                        <Label htmlFor="consistency">Stool Consistency</Label>
                        <select
                          id="consistency"
                          value={consistency}
                          onChange={(e) => setConsistency(e.target.value as 'liquid' | 'soft' | 'formed' | 'hard')}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="liquid">Liquid/Watery</option>
                          <option value="soft">Soft/Pasty</option>
                          <option value="formed">Formed</option>
                          <option value="hard">Hard/Pellets</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="color">Stool Color</Label>
                        <select
                          id="color"
                          value={color}
                          onChange={(e) => setColor(e.target.value as 'yellow' | 'brown' | 'green' | 'black' | 'other')}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="yellow">🟡 Yellow (normal for breastfed)</option>
                          <option value="brown">🟤 Brown (normal for formula-fed)</option>
                          <option value="green">🟢 Green (may need attention)</option>
                          <option value="black">⚫ Black (concerning after day 3)</option>
                          <option value="other">🔴 Other color</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <select
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value as 'small' | 'medium' | 'large')}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Input
                      id="notes"
                      placeholder="Any observations, concerns, or notes..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  <Button onClick={addDiaperEntry} className="w-full" disabled={!time}>
                    <Baby className="h-4 w-4 mr-2" />
                    Log Diaper Change
                  </Button>
                </CardContent>
              </Card>

              {/* Diaper Guidelines */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5" />
                    Daily Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-blue-700">Day 1-2:</strong>
                      <p className="text-gray-600">1-2 wet, 1-2 dirty (meconium)</p>
                    </div>
                    <div>
                      <strong className="text-green-700">Day 3-5:</strong>
                      <p className="text-gray-600">3-5 wet, 3-4 dirty (changing color)</p>
                    </div>
                    <div>
                      <strong className="text-purple-700">Week 1+:</strong>
                      <p className="text-gray-600">6+ wet, 3-4 dirty per day</p>
                    </div>
                    <div>
                      <strong className="text-orange-700">After 6 weeks:</strong>
                      <p className="text-gray-600">May go days without dirty diapers (breastfed)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Statistics and History */}
            <div className="lg:col-span-2 space-y-6">
              {/* Concerning Patterns Alert */}
              {concerningEntries.length > 0 && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    <strong>Attention:</strong> {concerningEntries.length} diaper change(s) may need discussion with your healthcare provider.
                    Look for patterns like hard stools, black stools after day 3, or green stools.
                  </AlertDescription>
                </Alert>
              )}

              {/* Diaper Statistics */}
              {diaperEntries.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Diaper Statistics (Last 7 Days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-800">
                          {stats.wetDiapers}
                        </div>
                        <div className="text-blue-600 text-sm">Wet Diapers</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <Baby className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-800">
                          {stats.dirtyDiapers}
                        </div>
                        <div className="text-green-600 text-sm">Dirty Diapers</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-800">
                          {stats.avgInterval.toFixed(1)}h
                        </div>
                        <div className="text-purple-600 text-sm">Avg Interval</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Total Changes:</span> {stats.totalChanges}
                      </div>
                      <div>
                        <span className="font-semibold">Today&apos;s Total:</span> {stats.todayTotal}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Today&apos;s Diapers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Today&apos;s Diapers ({selectedDate})
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
                                    {entry.type === 'wet' && 'Wet diaper'}
                                    {entry.type === 'dry' && 'Dry check'}
                                    {(entry.type === 'dirty' || entry.type === 'both') && (
                                      <>
                                        {entry.type === 'both' ? 'Wet & dirty' : 'Dirty diaper'} - 
                                        {entry.color && ` ${getColorEmoji(entry.color)} ${entry.color}`}
                                        {entry.consistency && `, ${entry.consistency}`}
                                      </>
                                    )}
                                    {` (${entry.amount})`}
                                  </div>
                                </div>
                                {!isAgeAppropriate(entry) && (
                                  <AlertTriangle className="h-4 w-4 text-red-500" />
                                )}
                              </div>
                              {entry.notes && (
                                <p className="text-gray-600 text-sm">{entry.notes}</p>
                              )}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteDiaperEntry(entry.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-green-700 font-medium">
                          Total diapers today: {todayEntries.length}
                        </p>
                        <p className="text-green-600 text-sm">
                          Wet: {todayEntries.filter(e => e.type === 'wet' || e.type === 'both').length} | 
                          Dirty: {todayEntries.filter(e => e.type === 'dirty' || e.type === 'both').length}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Baby className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No diaper changes logged for this date</p>
                      <p className="text-sm mt-2">Add your first diaper entry above</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Diaper History */}
              {diaperEntries.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Diaper Changes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {diaperEntries.slice(0, 10).map((entry) => (
                        <div key={entry.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{getTypeIcon(entry.type)}</span>
                            <div>
                              <div className="font-medium">{entry.date} at {entry.time}</div>
                              <div className="text-sm text-gray-600">
                                {entry.type} - {entry.amount}
                                {entry.color && ` ${getColorEmoji(entry.color)}`}
                              </div>
                            </div>
                          </div>
                          {!isAgeAppropriate(entry) && (
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Health Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Diaper Health Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Normal Patterns</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li><strong>Wet diapers:</strong> 6+ per day after day 5</li>
                    <li><strong>Breastfed stools:</strong> Yellow, soft, seedy</li>
                    <li><strong>Formula stools:</strong> Light brown, firmer</li>
                    <li><strong>Frequency:</strong> 3-4 times daily (newborns)</li>
                    <li><strong>Color changes:</strong> Normal as diet changes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">When to Contact Healthcare Provider</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>No wet diapers for 6+ hours</li>
                    <li>Black stools after day 3</li>
                    <li>Blood in stool</li>
                    <li>Very hard, pellet-like stools</li>
                    <li>Persistent green, watery stools</li>
                    <li>Signs of dehydration</li>
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