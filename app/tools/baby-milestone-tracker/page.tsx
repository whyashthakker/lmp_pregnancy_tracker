'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Baby, Star, CheckCircle, Clock } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface Milestone {
  id: string
  category: 'physical' | 'cognitive' | 'social' | 'language'
  title: string
  description: string
  typicalAge: string
  earlyAge: number // weeks
  lateAge: number // weeks
  achieved: boolean
  achievedDate?: string
  notes?: string
}


const defaultMilestones: Milestone[] = [
  // Physical Milestones
  {
    id: 'lift-head',
    category: 'physical',
    title: 'Lifts head when on tummy',
    description: 'Can briefly lift head up when lying on stomach',
    typicalAge: '2-4 weeks',
    earlyAge: 1,
    lateAge: 6,
    achieved: false
  },
  {
    id: 'follows-object',
    category: 'physical',
    title: 'Follows moving objects with eyes',
    description: 'Tracks objects moving side to side with their eyes',
    typicalAge: '1-2 months',
    earlyAge: 3,
    lateAge: 10,
    achieved: false
  },
  {
    id: 'holds-head-steady',
    category: 'physical',
    title: 'Holds head steady when supported',
    description: 'Can keep head upright when held in sitting position',
    typicalAge: '2-4 months',
    earlyAge: 6,
    lateAge: 16,
    achieved: false
  },
  {
    id: 'reaches-for-toys',
    category: 'physical',
    title: 'Reaches for and grasps toys',
    description: 'Intentionally reaches for objects and can grasp them',
    typicalAge: '3-5 months',
    earlyAge: 10,
    lateAge: 20,
    achieved: false
  },
  {
    id: 'rolls-over',
    category: 'physical',
    title: 'Rolls over (front to back)',
    description: 'Can roll from tummy to back position',
    typicalAge: '4-6 months',
    earlyAge: 14,
    lateAge: 26,
    achieved: false
  },
  {
    id: 'sits-supported',
    category: 'physical',
    title: 'Sits with support',
    description: 'Can sit upright when supported by pillows or hands',
    typicalAge: '4-6 months',
    earlyAge: 16,
    lateAge: 28,
    achieved: false
  },

  // Cognitive Milestones
  {
    id: 'responds-to-sounds',
    category: 'cognitive',
    title: 'Responds to loud sounds',
    description: 'Startles or turns toward loud noises',
    typicalAge: 'Birth-1 month',
    earlyAge: 0,
    lateAge: 4,
    achieved: false
  },
  {
    id: 'recognizes-voices',
    category: 'cognitive',
    title: 'Recognizes familiar voices',
    description: 'Shows recognition of parent or caregiver voices',
    typicalAge: '1-2 months',
    earlyAge: 2,
    lateAge: 8,
    achieved: false
  },
  {
    id: 'tracks-faces',
    category: 'cognitive',
    title: 'Focuses on faces',
    description: 'Shows preference for looking at faces over objects',
    typicalAge: '1-3 months',
    earlyAge: 2,
    lateAge: 12,
    achieved: false
  },
  {
    id: 'explores-hands',
    category: 'cognitive',
    title: 'Discovers hands and feet',
    description: 'Shows interest in examining their own hands and feet',
    typicalAge: '2-4 months',
    earlyAge: 6,
    lateAge: 16,
    achieved: false
  },

  // Social Milestones
  {
    id: 'first-smile',
    category: 'social',
    title: 'First social smile',
    description: 'Smiles in response to someone talking or smiling at them',
    typicalAge: '6-8 weeks',
    earlyAge: 4,
    lateAge: 12,
    achieved: false
  },
  {
    id: 'enjoys-interaction',
    category: 'social',
    title: 'Enjoys social interaction',
    description: 'Shows pleasure during social play and interaction',
    typicalAge: '2-3 months',
    earlyAge: 6,
    lateAge: 14,
    achieved: false
  },
  {
    id: 'laughs',
    category: 'social',
    title: 'Laughs out loud',
    description: 'Produces clear laughing sounds during play',
    typicalAge: '3-4 months',
    earlyAge: 10,
    lateAge: 18,
    achieved: false
  },

  // Language Milestones
  {
    id: 'different-cries',
    category: 'language',
    title: 'Different types of cries',
    description: 'Has distinct cries for different needs (hunger, tired, etc.)',
    typicalAge: '2-6 weeks',
    earlyAge: 1,
    lateAge: 8,
    achieved: false
  },
  {
    id: 'cooing-sounds',
    category: 'language',
    title: 'Makes cooing sounds',
    description: 'Produces "ooh" and "ahh" vocalizations',
    typicalAge: '6-8 weeks',
    earlyAge: 4,
    lateAge: 12,
    achieved: false
  },
  {
    id: 'babbling',
    category: 'language',
    title: 'Begins babbling',
    description: 'Makes repetitive consonant sounds like "ba-ba" or "da-da"',
    typicalAge: '4-6 months',
    earlyAge: 14,
    lateAge: 26,
    achieved: false
  }
]

export default function BabyMilestoneTracker() {
  const [milestones, setMilestones] = useState<Milestone[]>(defaultMilestones)
  const [babyBirthDate, setBabyBirthDate] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'physical' | 'cognitive' | 'social' | 'language'>('all')

  const calculateBabyAge = (birthDate: string): { weeks: number; months: number } => {
    if (!birthDate) return { weeks: 0, months: 0 }
    
    const birth = new Date(birthDate)
    const today = new Date()
    const diffTime = today.getTime() - birth.getTime()
    const weeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7))
    const months = Math.floor(weeks / 4.33) // approximate months
    
    return { weeks, months }
  }

  const markMilestoneAchieved = (milestoneId: string, notes: string = '') => {
    setMilestones(prev => prev.map(milestone => 
      milestone.id === milestoneId 
        ? { 
            ...milestone, 
            achieved: true, 
            achievedDate: new Date().toISOString().split('T')[0],
            notes 
          }
        : milestone
    ))
  }

  const unmarkMilestone = (milestoneId: string) => {
    setMilestones(prev => prev.map(milestone => 
      milestone.id === milestoneId 
        ? { 
            ...milestone, 
            achieved: false, 
            achievedDate: undefined,
            notes: undefined 
          }
        : milestone
    ))
  }

  const getMilestoneStatus = (milestone: Milestone): 'early' | 'on-time' | 'late' | 'concerning' => {
    if (!babyBirthDate || !milestone.achieved) return 'on-time'
    
    const babyAge = calculateBabyAge(babyBirthDate)
    const achievedWeeks = babyAge.weeks
    
    if (achievedWeeks < milestone.earlyAge) return 'early'
    if (achievedWeeks <= milestone.lateAge) return 'on-time'
    if (achievedWeeks <= milestone.lateAge + 4) return 'late'
    return 'concerning'
  }

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'early': return 'text-blue-600 bg-blue-50'
      case 'on-time': return 'text-green-600 bg-green-50'
      case 'late': return 'text-yellow-600 bg-yellow-50'
      case 'concerning': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'physical': return '💪'
      case 'cognitive': return '🧠'
      case 'social': return '😊'
      case 'language': return '🗣️'
      default: return '👶'
    }
  }

  const filteredMilestones = selectedCategory === 'all' 
    ? milestones 
    : milestones.filter(m => m.category === selectedCategory)

  const achievedCount = milestones.filter(m => m.achieved).length
  const babyAge = calculateBabyAge(babyBirthDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Baby Milestone Tracker</h1>
            <p className="text-xl text-gray-600">Track your baby&apos;s developmental progress and celebrate achievements</p>
          </div>

          {/* Baby Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Baby Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="birthDate">Baby&apos;s Birth Date</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={babyBirthDate}
                    onChange={(e) => setBabyBirthDate(e.target.value)}
                  />
                </div>
                {babyBirthDate && (
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-800">{babyAge.weeks}</div>
                      <div className="text-blue-600 text-sm">Weeks Old</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-800">{babyAge.months}</div>
                      <div className="text-green-600 text-sm">Months Old</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-800">{achievedCount}</div>
                      <div className="text-purple-600 text-sm">Milestones</div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Category Filter */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                >
                  All Milestones
                </Button>
                <Button
                  variant={selectedCategory === 'physical' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('physical')}
                >
                  💪 Physical
                </Button>
                <Button
                  variant={selectedCategory === 'cognitive' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('cognitive')}
                >
                  🧠 Cognitive
                </Button>
                <Button
                  variant={selectedCategory === 'social' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('social')}
                >
                  😊 Social
                </Button>
                <Button
                  variant={selectedCategory === 'language' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('language')}
                >
                  🗣️ Language
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Milestones Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMilestones.map((milestone) => {
              const status = getMilestoneStatus(milestone)
              return (
                <Card key={milestone.id} className={`${milestone.achieved ? 'ring-2 ring-green-200' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{getCategoryIcon(milestone.category)}</span>
                        <div>
                          <CardTitle className="text-lg">{milestone.title}</CardTitle>
                          <div className="text-sm text-gray-500">{milestone.typicalAge}</div>
                        </div>
                      </div>
                      {milestone.achieved && (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{milestone.description}</p>
                    
                    {milestone.achieved ? (
                      <div className="space-y-3">
                        <div className={`px-3 py-1 rounded-full text-sm text-center ${getStatusColor(status)}`}>
                          Achieved {milestone.achievedDate}
                          {babyBirthDate && ` (${status})`}
                        </div>
                        {milestone.notes && (
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-700">{milestone.notes}</p>
                          </div>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => unmarkMilestone(milestone.id)}
                          className="w-full"
                        >
                          Unmark
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Button
                          onClick={() => {
                            const notes = prompt('Add any notes about this milestone (optional):')
                            markMilestoneAchieved(milestone.id, notes || '')
                          }}
                          className="w-full"
                        >
                          <Star className="h-4 w-4 mr-2" />
                          Mark as Achieved
                        </Button>
                        
                        {babyBirthDate && babyAge.weeks > milestone.lateAge && (
                          <Alert className="border-yellow-200 bg-yellow-50">
                            <Clock className="h-4 w-4 text-yellow-600" />
                            <AlertDescription className="text-yellow-700 text-sm">
                              This milestone is typically achieved by {milestone.lateAge} weeks. 
                              Consider discussing with your pediatrician.
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Development Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Developmental Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Encouraging Development</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Provide tummy time daily (when awake and supervised)</li>
                    <li>Talk and sing to your baby regularly</li>
                    <li>Make eye contact during interactions</li>
                    <li>Read books together, even to newborns</li>
                    <li>Provide age-appropriate toys and stimulation</li>
                    <li>Respond to your baby&apos;s cues and attempts to communicate</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Remember</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Every baby develops at their own pace</li>
                    <li>Premature babies may reach milestones later</li>
                    <li>Some babies excel in one area before others</li>
                    <li>Consistent delays may warrant pediatric consultation</li>
                    <li>Celebrate small progress and achievements</li>
                    <li>Trust your instincts as a parent</li>
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