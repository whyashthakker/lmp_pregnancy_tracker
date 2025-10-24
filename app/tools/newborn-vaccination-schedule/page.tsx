'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Shield, Calendar, CheckCircle, AlertTriangle, Syringe } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface Vaccination {
  id: string
  name: string
  fullName: string
  ageWeeks: number
  ageDisplay: string
  description: string
  sideEffects: string[]
  required: boolean
  completed: boolean
  completedDate?: string
  nextDue?: string
  notes?: string
}

interface VaccineSchedule {
  [key: string]: Vaccination[]
}

const defaultVaccinations: VaccineSchedule = {
  'birth': [
    {
      id: 'hep-b-1',
      name: 'Hepatitis B (1st dose)',
      fullName: 'Hepatitis B Vaccine',
      ageWeeks: 0,
      ageDisplay: 'Birth - 2 days',
      description: 'Protects against hepatitis B virus infection',
      sideEffects: ['Mild soreness at injection site', 'Low-grade fever'],
      required: true,
      completed: false
    }
  ],
  '2-months': [
    {
      id: 'dtap-1',
      name: 'DTaP (1st dose)',
      fullName: 'Diphtheria, Tetanus, Pertussis',
      ageWeeks: 8,
      ageDisplay: '2 months',
      description: 'Protects against diphtheria, tetanus, and whooping cough',
      sideEffects: ['Redness/swelling at site', 'Fever', 'Fussiness'],
      required: true,
      completed: false
    },
    {
      id: 'hib-1',
      name: 'Hib (1st dose)',
      fullName: 'Haemophilus influenzae type b',
      ageWeeks: 8,
      ageDisplay: '2 months',
      description: 'Prevents serious bacterial infections',
      sideEffects: ['Mild fever', 'Redness at injection site'],
      required: true,
      completed: false
    },
    {
      id: 'ipv-1',
      name: 'IPV (1st dose)',
      fullName: 'Inactivated Poliovirus',
      ageWeeks: 8,
      ageDisplay: '2 months',
      description: 'Protects against polio',
      sideEffects: ['Soreness at injection site'],
      required: true,
      completed: false
    },
    {
      id: 'pcv13-1',
      name: 'PCV13 (1st dose)',
      fullName: 'Pneumococcal Conjugate',
      ageWeeks: 8,
      ageDisplay: '2 months',
      description: 'Prevents pneumococcal disease',
      sideEffects: ['Redness/swelling', 'Mild fever', 'Decreased appetite'],
      required: true,
      completed: false
    },
    {
      id: 'rv-1',
      name: 'RV (1st dose)',
      fullName: 'Rotavirus',
      ageWeeks: 8,
      ageDisplay: '2 months',
      description: 'Prevents rotavirus gastroenteritis',
      sideEffects: ['Mild diarrhea', 'Vomiting', 'Fever'],
      required: true,
      completed: false
    },
    {
      id: 'hep-b-2',
      name: 'Hepatitis B (2nd dose)',
      fullName: 'Hepatitis B Vaccine',
      ageWeeks: 8,
      ageDisplay: '1-2 months',
      description: 'Second dose of hepatitis B protection',
      sideEffects: ['Mild soreness at injection site'],
      required: true,
      completed: false
    }
  ],
  '4-months': [
    {
      id: 'dtap-2',
      name: 'DTaP (2nd dose)',
      fullName: 'Diphtheria, Tetanus, Pertussis',
      ageWeeks: 16,
      ageDisplay: '4 months',
      description: 'Second dose for continued protection',
      sideEffects: ['Redness/swelling at site', 'Fever', 'Fussiness'],
      required: true,
      completed: false
    },
    {
      id: 'hib-2',
      name: 'Hib (2nd dose)',
      fullName: 'Haemophilus influenzae type b',
      ageWeeks: 16,
      ageDisplay: '4 months',
      description: 'Continued protection against bacterial infections',
      sideEffects: ['Mild fever', 'Redness at injection site'],
      required: true,
      completed: false
    },
    {
      id: 'ipv-2',
      name: 'IPV (2nd dose)',
      fullName: 'Inactivated Poliovirus',
      ageWeeks: 16,
      ageDisplay: '4 months',
      description: 'Continued polio protection',
      sideEffects: ['Soreness at injection site'],
      required: true,
      completed: false
    },
    {
      id: 'pcv13-2',
      name: 'PCV13 (2nd dose)',
      fullName: 'Pneumococcal Conjugate',
      ageWeeks: 16,
      ageDisplay: '4 months',
      description: 'Continued pneumococcal protection',
      sideEffects: ['Redness/swelling', 'Mild fever'],
      required: true,
      completed: false
    },
    {
      id: 'rv-2',
      name: 'RV (2nd dose)',
      fullName: 'Rotavirus',
      ageWeeks: 16,
      ageDisplay: '4 months',
      description: 'Continued rotavirus protection',
      sideEffects: ['Mild diarrhea', 'Fever'],
      required: true,
      completed: false
    }
  ],
  '6-months': [
    {
      id: 'dtap-3',
      name: 'DTaP (3rd dose)',
      fullName: 'Diphtheria, Tetanus, Pertussis',
      ageWeeks: 24,
      ageDisplay: '6 months',
      description: 'Third dose for strong immunity',
      sideEffects: ['Redness/swelling at site', 'Fever'],
      required: true,
      completed: false
    },
    {
      id: 'hib-3',
      name: 'Hib (3rd dose)',
      fullName: 'Haemophilus influenzae type b',
      ageWeeks: 24,
      ageDisplay: '6 months',
      description: 'Third dose for continued protection',
      sideEffects: ['Mild fever', 'Redness at injection site'],
      required: true,
      completed: false
    },
    {
      id: 'ipv-3',
      name: 'IPV (3rd dose)',
      fullName: 'Inactivated Poliovirus',
      ageWeeks: 24,
      ageDisplay: '6 months',
      description: 'Third dose of polio vaccine',
      sideEffects: ['Soreness at injection site'],
      required: true,
      completed: false
    },
    {
      id: 'pcv13-3',
      name: 'PCV13 (3rd dose)',
      fullName: 'Pneumococcal Conjugate',
      ageWeeks: 24,
      ageDisplay: '6 months',
      description: 'Third pneumococcal dose',
      sideEffects: ['Redness/swelling', 'Mild fever'],
      required: true,
      completed: false
    },
    {
      id: 'rv-3',
      name: 'RV (3rd dose)',
      fullName: 'Rotavirus',
      ageWeeks: 24,
      ageDisplay: '6 months',
      description: 'Final rotavirus dose',
      sideEffects: ['Mild diarrhea'],
      required: true,
      completed: false
    },
    {
      id: 'hep-b-3',
      name: 'Hepatitis B (3rd dose)',
      fullName: 'Hepatitis B Vaccine',
      ageWeeks: 24,
      ageDisplay: '6-18 months',
      description: 'Final hepatitis B dose',
      sideEffects: ['Mild soreness at injection site'],
      required: true,
      completed: false
    },
    {
      id: 'flu-1',
      name: 'Influenza (1st dose)',
      fullName: 'Seasonal Flu Vaccine',
      ageWeeks: 24,
      ageDisplay: '6 months+',
      description: 'Annual flu protection (first year needs 2 doses)',
      sideEffects: ['Soreness at site', 'Low-grade fever'],
      required: false,
      completed: false
    }
  ]
}

export default function NewbornVaccinationSchedule() {
  const [vaccinations, setVaccinations] = useState<VaccineSchedule>(defaultVaccinations)
  const [babyBirthDate, setBabyBirthDate] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all')

  const calculateBabyAge = (birthDate: string): { weeks: number; months: number } => {
    if (!birthDate) return { weeks: 0, months: 0 }
    
    const birth = new Date(birthDate)
    const today = new Date()
    const diffTime = today.getTime() - birth.getTime()
    const weeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7))
    const months = Math.floor(weeks / 4.33)
    
    return { weeks, months }
  }

  const markVaccineCompleted = (periodKey: string, vaccineId: string, notes: string = '') => {
    setVaccinations(prev => ({
      ...prev,
      [periodKey]: prev[periodKey].map(vaccine => 
        vaccine.id === vaccineId 
          ? { 
              ...vaccine, 
              completed: true, 
              completedDate: new Date().toISOString().split('T')[0],
              notes 
            }
          : vaccine
      )
    }))
  }

  const unmarkVaccine = (periodKey: string, vaccineId: string) => {
    setVaccinations(prev => ({
      ...prev,
      [periodKey]: prev[periodKey].map(vaccine => 
        vaccine.id === vaccineId 
          ? { 
              ...vaccine, 
              completed: false, 
              completedDate: undefined,
              notes: undefined 
            }
          : vaccine
      )
    }))
  }

  const getVaccineStatus = (vaccine: Vaccination): 'upcoming' | 'due' | 'overdue' | 'completed' => {
    if (vaccine.completed) return 'completed'
    if (!babyBirthDate) return 'upcoming'
    
    const babyAge = calculateBabyAge(babyBirthDate)
    
    if (babyAge.weeks < vaccine.ageWeeks) return 'upcoming'
    if (babyAge.weeks >= vaccine.ageWeeks && babyAge.weeks <= vaccine.ageWeeks + 4) return 'due'
    return 'overdue'
  }

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200'
      case 'due': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'overdue': return 'text-red-600 bg-red-50 border-red-200'
      case 'upcoming': return 'text-gray-600 bg-gray-50 border-gray-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getAllVaccines = () => {
    return Object.entries(vaccinations).flatMap(([period, vaccines]) => 
      vaccines.map(vaccine => ({ ...vaccine, period }))
    )
  }

  const getFilteredVaccinations = () => {
    if (selectedPeriod === 'all') return vaccinations
    return { [selectedPeriod]: vaccinations[selectedPeriod] || [] }
  }

  const allVaccines = getAllVaccines()
  const completedCount = allVaccines.filter(v => v.completed).length
  const overdueCount = allVaccines.filter(v => getVaccineStatus(v) === 'overdue').length
  const dueCount = allVaccines.filter(v => getVaccineStatus(v) === 'due').length
  const babyAge = calculateBabyAge(babyBirthDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Newborn Vaccination Schedule</h1>
            <p className="text-xl text-gray-600">Track your baby&apos;s immunization schedule and stay up to date</p>
          </div>

          {/* Baby Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Baby Information & Vaccination Overview
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
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-blue-800">{babyAge.weeks}</div>
                      <div className="text-blue-600 text-xs">Weeks</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-green-800">{completedCount}</div>
                      <div className="text-green-600 text-xs">Completed</div>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-yellow-800">{dueCount}</div>
                      <div className="text-yellow-600 text-xs">Due Now</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-red-800">{overdueCount}</div>
                      <div className="text-red-600 text-xs">Overdue</div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Overdue Vaccines Alert */}
          {overdueCount > 0 && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">
                <strong>Attention:</strong> Your baby has {overdueCount} overdue vaccination(s). 
                Please schedule an appointment with your pediatrician as soon as possible.
              </AlertDescription>
            </Alert>
          )}

          {/* Period Filter */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedPeriod === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedPeriod('all')}
                >
                  All Vaccines
                </Button>
                <Button
                  variant={selectedPeriod === 'birth' ? 'default' : 'outline'}
                  onClick={() => setSelectedPeriod('birth')}
                >
                  🍼 Birth
                </Button>
                <Button
                  variant={selectedPeriod === '2-months' ? 'default' : 'outline'}
                  onClick={() => setSelectedPeriod('2-months')}
                >
                  👶 2 Months
                </Button>
                <Button
                  variant={selectedPeriod === '4-months' ? 'default' : 'outline'}
                  onClick={() => setSelectedPeriod('4-months')}
                >
                  🧸 4 Months
                </Button>
                <Button
                  variant={selectedPeriod === '6-months' ? 'default' : 'outline'}
                  onClick={() => setSelectedPeriod('6-months')}
                >
                  🎯 6 Months
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Vaccination Schedule */}
          <div className="space-y-8">
            {Object.entries(getFilteredVaccinations()).map(([period, vaccines]) => (
              <Card key={period}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {period.charAt(0).toUpperCase() + period.slice(1).replace('-', ' ')} Vaccinations
                  </CardTitle>
                  <CardDescription>
                    {period === 'birth' && 'Given within 24-48 hours of birth'}
                    {period === '2-months' && 'First major vaccination appointment'}
                    {period === '4-months' && 'Second round of vaccinations'}
                    {period === '6-months' && 'Third round plus seasonal vaccines'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {vaccines.map((vaccine) => {
                      const status = getVaccineStatus(vaccine)
                      return (
                        <div key={vaccine.id} className={`border rounded-lg p-4 ${getStatusColor(status)}`}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Syringe className="h-5 w-5" />
                                <div>
                                  <h3 className="font-semibold">{vaccine.name}</h3>
                                  <p className="text-sm opacity-75">{vaccine.fullName}</p>
                                </div>
                                {vaccine.completed && (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                )}
                                {!vaccine.required && (
                                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                                    Optional
                                  </span>
                                )}
                              </div>
                              
                              <p className="text-sm mb-2">{vaccine.description}</p>
                              
                              <details className="text-sm">
                                <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                                  View side effects
                                </summary>
                                <ul className="list-disc list-inside mt-1 ml-4">
                                  {vaccine.sideEffects.map((effect, index) => (
                                    <li key={index}>{effect}</li>
                                  ))}
                                </ul>
                              </details>

                              {vaccine.completed && vaccine.completedDate && (
                                <div className="mt-3 bg-white bg-opacity-50 p-2 rounded">
                                  <p className="text-sm">
                                    <strong>Completed:</strong> {vaccine.completedDate}
                                  </p>
                                  {vaccine.notes && (
                                    <p className="text-sm">
                                      <strong>Notes:</strong> {vaccine.notes}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                            
                            <div className="ml-4 space-y-2">
                              {vaccine.completed ? (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => unmarkVaccine(period, vaccine.id)}
                                >
                                  Unmark
                                </Button>
                              ) : (
                                <Button
                                  onClick={() => {
                                    const notes = prompt('Add any notes about this vaccination (optional):')
                                    markVaccineCompleted(period, vaccine.id, notes || '')
                                  }}
                                  size="sm"
                                  variant={status === 'overdue' ? 'destructive' : 'default'}
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Mark Complete
                                </Button>
                              )}
                              
                              {babyBirthDate && (
                                <div className="text-xs text-center">
                                  <div className="font-medium capitalize">{status}</div>
                                  {status === 'upcoming' && (
                                    <div>Due in {vaccine.ageWeeks - babyAge.weeks} weeks</div>
                                  )}
                                  {status === 'overdue' && (
                                    <div>{babyAge.weeks - vaccine.ageWeeks} weeks overdue</div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vaccination Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Important Vaccination Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Before Vaccination</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Inform doctor of any allergies or previous reactions</li>
                    <li>Let them know if baby is sick or has fever</li>
                    <li>Bring vaccination record card</li>
                    <li>Ask questions about vaccines if you have concerns</li>
                    <li>Plan for comfort items after vaccination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">After Vaccination</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Watch for serious allergic reactions (first 15 minutes)</li>
                    <li>Comfort baby with feeding, cuddling, or soothing</li>
                    <li>Give acetaminophen if recommended by doctor</li>
                    <li>Apply cool, damp cloth to injection site if swollen</li>
                    <li>Call doctor for high fever or concerning symptoms</li>
                  </ul>
                </div>
              </div>
              
              <Alert className="mt-6 border-blue-200 bg-blue-50">
                <Shield className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-700">
                  <strong>Important:</strong> This schedule follows CDC recommendations for the United States. 
                  Always consult with your pediatrician for personalized vaccination advice and timing.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}