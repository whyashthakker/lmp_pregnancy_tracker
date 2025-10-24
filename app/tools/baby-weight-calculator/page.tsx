'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AlertTriangle, Scale, TrendingUp, TrendingDown, Activity, Baby } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface WeightEntry {
  date: string
  weight: number
  ageWeeks: number
  ageDays: number
}

interface WeightAnalysis {
  currentPercentile: number
  weightCategory: string
  weeklyGain: number
  dailyGain: number
  concernLevel: 'normal' | 'monitor' | 'consult'
  recommendations: string[]
}

export default function BabyWeightCalculator() {
  const [gender, setGender] = useState<'male' | 'female' | ''>('')
  const [birthWeight, setBirthWeight] = useState('')
  const [currentWeight, setCurrentWeight] = useState('')
  const [ageWeeks, setAgeWeeks] = useState('')
  const [ageDays, setAgeDays] = useState('')
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg')
  const [analysis, setAnalysis] = useState<WeightAnalysis | null>(null)
  const [weightHistory, setWeightHistory] = useState<WeightEntry[]>([])

  // WHO weight percentiles for babies (kg) - simplified data points
  const weightPercentiles = {
    male: {
      1: { p3: 2.9, p10: 3.3, p25: 3.6, p50: 4.0, p75: 4.4, p90: 4.8, p97: 5.1 },
      2: { p3: 3.8, p10: 4.3, p25: 4.7, p50: 5.2, p75: 5.7, p90: 6.2, p97: 6.6 },
      4: { p3: 4.9, p10: 5.6, p25: 6.2, p50: 6.8, p75: 7.5, p90: 8.2, p97: 8.7 },
      8: { p3: 6.2, p10: 7.0, p25: 7.7, p50: 8.6, p75: 9.4, p90: 10.3, p97: 11.0 },
      12: { p3: 7.1, p10: 8.0, p25: 8.8, p50: 9.7, p75: 10.7, p90: 11.7, p97: 12.4 },
      16: { p3: 7.7, p10: 8.6, p25: 9.5, p50: 10.5, p75: 11.6, p90: 12.6, p97: 13.4 },
      20: { p3: 8.2, p10: 9.2, p25: 10.1, p50: 11.2, p75: 12.3, p90: 13.4, p97: 14.2 },
      24: { p3: 8.6, p10: 9.6, p25: 10.5, p50: 11.7, p75: 12.9, p90: 14.1, p97: 15.0 }
    },
    female: {
      1: { p3: 2.8, p10: 3.2, p25: 3.5, p50: 3.8, p75: 4.2, p90: 4.5, p97: 4.8 },
      2: { p3: 3.6, p10: 4.0, p25: 4.5, p50: 4.9, p75: 5.4, p90: 5.8, p97: 6.2 },
      4: { p3: 4.7, p10: 5.4, p25: 5.9, p50: 6.5, p75: 7.1, p90: 7.8, p97: 8.2 },
      8: { p3: 5.9, p10: 6.7, p25: 7.3, p50: 8.1, p75: 8.9, p90: 9.8, p97: 10.4 },
      12: { p3: 6.7, p10: 7.5, p25: 8.3, p50: 9.2, p75: 10.1, p90: 11.0, p97: 11.7 },
      16: { p3: 7.2, p10: 8.1, p25: 8.9, p50: 9.9, p75: 10.9, p90: 11.9, p97: 12.6 },
      20: { p3: 7.7, p10: 8.5, p25: 9.4, p50: 10.4, p75: 11.5, p90: 12.5, p97: 13.3 },
      24: { p3: 8.1, p10: 8.9, p25: 9.8, p50: 10.8, p75: 12.0, p90: 13.1, p97: 13.9 }
    }
  }

  const convertWeight = (weight: number, fromUnit: string, toUnit: string): number => {
    if (fromUnit === toUnit) return weight
    if (fromUnit === 'lbs' && toUnit === 'kg') return weight * 0.453592
    if (fromUnit === 'kg' && toUnit === 'lbs') return weight * 2.20462
    return weight
  }

  const getPercentile = (weight: number, ageWeeks: number, gender: 'male' | 'female'): number => {
    const weightInKg = convertWeight(weight, unit, 'kg')
    const percentileData = weightPercentiles[gender]
    
    // Find closest age weeks
    const availableWeeks = Object.keys(percentileData).map(Number).sort((a, b) => a - b)
    let closestWeek = availableWeeks[0]
    
    for (const week of availableWeeks) {
      if (ageWeeks >= week) {
        closestWeek = week
      }
    }
    
    const data = percentileData[closestWeek as keyof typeof percentileData]
    
    if (weightInKg <= data.p3) return 3
    if (weightInKg <= data.p10) return 10
    if (weightInKg <= data.p25) return 25
    if (weightInKg <= data.p50) return 50
    if (weightInKg <= data.p75) return 75
    if (weightInKg <= data.p90) return 90
    if (weightInKg <= data.p97) return 97
    return 97
  }

  const analyzeWeight = (): WeightAnalysis => {
    const currentWeightNum = parseFloat(currentWeight)
    const birthWeightNum = parseFloat(birthWeight)
    const totalAgeWeeks = parseInt(ageWeeks) + parseInt(ageDays || '0') / 7
    
    if (gender === '') {
      throw new Error('Gender must be selected')
    }
    
    const currentPercentile = getPercentile(currentWeightNum, totalAgeWeeks, gender as 'male' | 'female')
    
    // Calculate weight gain
    const totalGain = currentWeightNum - birthWeightNum
    const weeklyGain = totalGain / totalAgeWeeks
    const dailyGain = weeklyGain / 7
    
    // Convert to display units
    const weeklyGainDisplay = unit === 'kg' ? weeklyGain * 1000 : weeklyGain // grams for kg, lbs for lbs
    const dailyGainDisplay = unit === 'kg' ? dailyGain * 1000 : dailyGain
    
    let weightCategory = ''
    let concernLevel: 'normal' | 'monitor' | 'consult' = 'normal'
    let recommendations: string[] = []
    
    if (currentPercentile < 3) {
      weightCategory = 'Underweight'
      concernLevel = 'consult'
      recommendations = [
        'Contact your pediatrician immediately',
        'Monitor feeding frequency and duration',
        'Consider lactation consultation if breastfeeding',
        'Track daily weight gain'
      ]
    } else if (currentPercentile < 10) {
      weightCategory = 'Below Average'
      concernLevel = 'monitor'
      recommendations = [
        'Monitor weight gain closely',
        'Ensure adequate feeding frequency',
        'Discuss with pediatrician at next visit',
        'Track feeding patterns'
      ]
    } else if (currentPercentile <= 90) {
      weightCategory = 'Normal Range'
      concernLevel = 'normal'
      recommendations = [
        'Continue current feeding routine',
        'Regular pediatric check-ups',
        'Monitor growth patterns',
        'Maintain healthy feeding practices'
      ]
    } else if (currentPercentile <= 97) {
      weightCategory = 'Above Average'
      concernLevel = 'monitor'
      recommendations = [
        'Monitor for overfeeding signs',
        'Ensure proper feeding cues recognition',
        'Discuss growth pattern with pediatrician',
        'Continue regular check-ups'
      ]
    } else {
      weightCategory = 'Overweight'
      concernLevel = 'consult'
      recommendations = [
        'Consult pediatrician about feeding',
        'Review feeding amounts and frequency',
        'Monitor for overfeeding signs',
        'Consider feeding technique evaluation'
      ]
    }
    
    return {
      currentPercentile,
      weightCategory,
      weeklyGain: weeklyGainDisplay,
      dailyGain: dailyGainDisplay,
      concernLevel,
      recommendations
    }
  }

  const handleCalculate = () => {
    if (!gender || !birthWeight || !currentWeight || !ageWeeks) {
      alert('Please fill in all required fields')
      return
    }
    
    const newAnalysis = analyzeWeight()
    setAnalysis(newAnalysis)
    
    // Add to weight history
    const newEntry: WeightEntry = {
      date: new Date().toISOString().split('T')[0],
      weight: parseFloat(currentWeight),
      ageWeeks: parseInt(ageWeeks),
      ageDays: parseInt(ageDays || '0')
    }
    
    setWeightHistory(prev => [...prev, newEntry].slice(-10)) // Keep last 10 entries
  }

  const getGrowthTrend = () => {
    if (weightHistory.length < 2) return null
    
    const recent = weightHistory.slice(-2)
    const weightChange = recent[1].weight - recent[0].weight
    
    if (weightChange > 0) return 'increasing'
    if (weightChange < 0) return 'decreasing'
    return 'stable'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Baby Weight Calculator</h1>
            <p className="text-xl text-gray-600">Track your baby&apos;s weight gain and growth patterns after the first week</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Weight Information
                </CardTitle>
                <CardDescription>
                  Enter your baby&apos;s current weight and birth details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="gender">Baby&apos;s Gender *</Label>
                  <Select value={gender} onValueChange={(value: 'male' | 'female') => setGender(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="unit">Weight Unit</Label>
                  <Select value={unit} onValueChange={(value: 'kg' | 'lbs') => setUnit(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      <SelectItem value="lbs">Pounds (lbs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="birthWeight">Birth Weight * ({unit})</Label>
                  <Input
                    id="birthWeight"
                    type="number"
                    step="0.1"
                    value={birthWeight}
                    onChange={(e) => setBirthWeight(e.target.value)}
                    placeholder={`e.g., ${unit === 'kg' ? '3.2' : '7.1'}`}
                  />
                </div>

                <div>
                  <Label htmlFor="currentWeight">Current Weight * ({unit})</Label>
                  <Input
                    id="currentWeight"
                    type="number"
                    step="0.1"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(e.target.value)}
                    placeholder={`e.g., ${unit === 'kg' ? '4.5' : '9.9'}`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ageWeeks">Age (Weeks) *</Label>
                    <Input
                      id="ageWeeks"
                      type="number"
                      value={ageWeeks}
                      onChange={(e) => setAgeWeeks(e.target.value)}
                      placeholder="e.g., 8"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ageDays">Extra Days</Label>
                    <Input
                      id="ageDays"
                      type="number"
                      min="0"
                      max="6"
                      value={ageDays}
                      onChange={(e) => setAgeDays(e.target.value)}
                      placeholder="0-6"
                    />
                  </div>
                </div>

                <Button onClick={handleCalculate} className="w-full">
                  Calculate Weight Analysis
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Weight Analysis
                </CardTitle>
                <CardDescription>
                  Growth assessment and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                {analysis ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-blue-600">Current Percentile</div>
                        <div className="text-2xl font-bold text-blue-800">{analysis.currentPercentile}th</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-green-600">Weight Category</div>
                        <div className="text-lg font-semibold text-green-800">{analysis.weightCategory}</div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Weight Gain</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-purple-600">Weekly: </span>
                          <span className="font-semibold">
                            {analysis.weeklyGain.toFixed(1)} {unit === 'kg' ? 'g' : 'lbs'}
                          </span>
                        </div>
                        <div>
                          <span className="text-purple-600">Daily: </span>
                          <span className="font-semibold">
                            {analysis.dailyGain.toFixed(1)} {unit === 'kg' ? 'g' : 'lbs'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {analysis.concernLevel !== 'normal' && (
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          {analysis.concernLevel === 'consult' 
                            ? 'Consider consulting your pediatrician about your baby\'s weight pattern.'
                            : 'Monitor your baby\'s weight gain more closely and discuss at next pediatric visit.'
                          }
                        </AlertDescription>
                      </Alert>
                    )}

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Recommendations:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {analysis.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </div>

                    {getGrowthTrend() && (
                      <div className="flex items-center gap-2 text-sm">
                        <span>Growth Trend:</span>
                        {getGrowthTrend() === 'increasing' && (
                          <>
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-green-600">Increasing</span>
                          </>
                        )}
                        {getGrowthTrend() === 'decreasing' && (
                          <>
                            <TrendingDown className="h-4 w-4 text-red-600" />
                            <span className="text-red-600">Decreasing</span>
                          </>
                        )}
                        {getGrowthTrend() === 'stable' && (
                          <span className="text-blue-600">Stable</span>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Baby className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter your baby&apos;s information to see weight analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {weightHistory.length > 0 && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Weight History</CardTitle>
                <CardDescription>Your recent weight tracking entries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Date</th>
                        <th className="text-left p-2">Age</th>
                        <th className="text-left p-2">Weight ({unit})</th>
                        <th className="text-left p-2">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weightHistory.map((entry, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2">{new Date(entry.date).toLocaleDateString()}</td>
                          <td className="p-2">{entry.ageWeeks}w {entry.ageDays}d</td>
                          <td className="p-2">{entry.weight.toFixed(1)}</td>
                          <td className="p-2">
                            {index > 0 && (
                              <span className={
                                entry.weight > weightHistory[index - 1].weight 
                                  ? 'text-green-600' 
                                  : entry.weight < weightHistory[index - 1].weight 
                                    ? 'text-red-600' 
                                    : 'text-blue-600'
                              }>
                                {entry.weight > weightHistory[index - 1].weight && '+'}
                                {(entry.weight - weightHistory[index - 1].weight).toFixed(1)}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Normal Weight Gain Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Expected Weight Gain:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li><strong>0-4 months:</strong> 150-200g (5-7 oz) per week</li>
                    <li><strong>4-6 months:</strong> 100-150g (3.5-5 oz) per week</li>
                    <li><strong>6-12 months:</strong> 70-90g (2.5-3 oz) per week</li>
                    <li><strong>Birth weight recovery:</strong> Usually by 10-14 days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">When to Consult Doctor:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Weight loss after first 2 weeks</li>
                    <li>• No weight gain for 2+ weeks</li>
                    <li>• Falling across percentile lines</li>
                    <li>• Feeding difficulties</li>
                    <li>• Below 3rd percentile</li>
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