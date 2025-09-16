"use client";

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format, isValid, parse } from 'date-fns';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Heart, 
  Baby, 
  Clock, 
  Sparkles, 
  TrendingUp,
  Plus,
  X
} from 'lucide-react';

import { 
  PregnancyData, 
  SymptomEntry
} from './types';

import { 
  calculateDueDate, 
  calculatePregnancyProgress, 
  getCurrentTrimester,
  getBabySize,
  getWeeklyInfo,
  getCriticalDates,
  calculateAdjustedSuccessRate
} from './utils/pregnancy-calculations';

const DEFAULT_PREGNANCY_DATA: PregnancyData = {
  lmpDate: '',
  vitalSigns: [],
  medicalNotes: [],
  symptoms: [],
  appointments: [],
  customMilestones: [],
  hasHeartbeat: false
};

const PregnancyTrackerRedesigned: React.FC = () => {
  const [pregnancyData, setPregnancyData] = useState<PregnancyData>(DEFAULT_PREGNANCY_DATA);
  const [lmpDateInput, setLmpDateInput] = useState('');
  const [showSymptomForm, setShowSymptomForm] = useState(false);
  const [newSymptom, setNewSymptom] = useState({ name: '', severity: 1, notes: '' });

  // Derived state
  const lmpDate = pregnancyData.lmpDate ? new Date(pregnancyData.lmpDate) : new Date();
  const dueDate = calculateDueDate(lmpDate);
  const { weeksPregnant, daysRemaining, progressPercentage } = calculatePregnancyProgress(lmpDate);
  const trimester = getCurrentTrimester(weeksPregnant);
  const babySize = getBabySize(weeksPregnant, daysRemaining);
  const weeklyInfo = getWeeklyInfo(weeksPregnant);

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('pregnancyData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setPregnancyData(parsedData);
        if (parsedData.lmpDate) {
          setLmpDateInput(parsedData.lmpDate.split('T')[0]);
        }
      } catch (error) {
        console.error('Error parsing saved pregnancy data:', error);
      }
    }
  }, []);

  const saveToStorage = (data: Partial<PregnancyData>) => {
    const updatedData = { ...pregnancyData, ...data };
    setPregnancyData(updatedData);
    localStorage.setItem('pregnancyData', JSON.stringify(updatedData));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setLmpDateInput(dateValue);
    
    const parsedDate = parse(dateValue, 'yyyy-MM-dd', new Date());
    if (isValid(parsedDate)) {
      saveToStorage({ 
        lmpDate: parsedDate.toISOString(),
        appointments: getCriticalDates(parsedDate)
      });
    }
  };

  const handleAddSymptom = () => {
    if (!newSymptom.name) return;
    
    const symptom: SymptomEntry = {
      id: uuidv4(),
      date: new Date().toISOString(),
      symptom: newSymptom.name,
      severity: newSymptom.severity,
      notes: newSymptom.notes || undefined
    };
    
    saveToStorage({ symptoms: [...pregnancyData.symptoms, symptom] });
    setNewSymptom({ name: '', severity: 1, notes: '' });
    setShowSymptomForm(false);
  };

  const getTrimesterColor = () => {
    switch (trimester) {
      case 1: return 'from-pink-500 to-rose-500';
      case 2: return 'from-purple-500 to-indigo-500';
      case 3: return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getTrimesterBg = () => {
    switch (trimester) {
      case 1: return 'bg-gradient-to-br from-pink-50 to-rose-50';
      case 2: return 'bg-gradient-to-br from-purple-50 to-indigo-50';
      case 3: return 'bg-gradient-to-br from-blue-50 to-cyan-50';
      default: return 'bg-gradient-to-br from-gray-50 to-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTrimesterColor()} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                👶
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Your Journey
                </h1>
                <p className="text-sm text-gray-600">Week {weeksPregnant}, Day {daysRemaining}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Badge className={`bg-gradient-to-r ${getTrimesterColor()} text-white`}>
                {trimester === 1 ? '1st' : trimester === 2 ? '2nd' : '3rd'} Trimester
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* LMP Date Input - Only show if not set */}
        {!pregnancyData.lmpDate && (
          <Card className={`mb-8 border-0 shadow-xl ${getTrimesterBg()}`}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Let&apos;s Start Your Journey</h2>
                <p className="text-gray-600">When did your last period begin?</p>
              </div>
              <div className="max-w-sm mx-auto">
                <Input
                  type="date"
                  value={lmpDateInput}
                  onChange={handleDateChange}
                  className="text-center text-lg py-3 border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {pregnancyData.lmpDate && (
          <>
            {/* Main Overview Card */}
            <Card className="mb-8 border-0 shadow-2xl overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${getTrimesterColor()}`} />
              <CardContent className="p-0">
                <div className={`p-8 ${getTrimesterBg()}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Baby Info */}
                    <div className="text-center lg:text-left">
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                          Size of a {babySize.size}
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-lg">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-pink-500" />
                            <span className="font-semibold">{babySize.length}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-red-500" />
                            <span className="font-semibold">{babySize.weight}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{babySize.description}</p>
                    </div>

                    {/* Progress Circle */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-gray-200"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${progressPercentage * 2.51} 251`}
                            className="transition-all duration-1000 ease-out"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ec4899" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            {Math.round(progressPercentage)}%
                          </span>
                          <span className="text-sm text-gray-600">Complete</span>
                          <div className="mt-2 text-xs text-gray-500">
                            Due: {format(dueDate, 'MMM d')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white p-6">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-pink-50 border border-pink-100">
                      <Baby className="w-8 h-8 mx-auto mb-2 text-pink-500" />
                      <p className="text-2xl font-bold text-gray-800">{weeksPregnant}</p>
                      <p className="text-sm text-gray-600">Weeks</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-purple-50 border border-purple-100">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                      <p className="text-2xl font-bold text-gray-800">{Math.ceil((280 - (weeksPregnant * 7 + daysRemaining)) / 7)}</p>
                      <p className="text-sm text-gray-600">Weeks Left</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-100">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                      <p className="text-2xl font-bold text-gray-800">{calculateAdjustedSuccessRate(weeksPregnant).toFixed(0)}%</p>
                      <p className="text-sm text-gray-600">Stability</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-green-50 border border-green-100">
                      <Heart className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <p className="text-2xl font-bold text-gray-800">{pregnancyData.symptoms.length}</p>
                      <p className="text-sm text-gray-600">Symptoms Logged</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Insights */}
            {weeklyInfo && (
              <Card className="mb-8 border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                    This Week&apos;s Insights
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Development Highlights</h4>
                        <ul className="space-y-2">
                          {weeklyInfo.developmentHighlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600">
                              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Common Symptoms</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{weeklyInfo.symptoms}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Nutrition Tips</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{weeklyInfo.nutrition}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Partner Tips</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{weeklyInfo.husbandTips}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Symptoms Section */}
            <Card className="mb-8 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-red-500" />
                    How Are You Feeling?
                  </h3>
                  <Button 
                    onClick={() => setShowSymptomForm(true)}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Symptom
                  </Button>
                </div>

                {/* Symptom Form */}
                {showSymptomForm && (
                  <Card className="mb-6 bg-gray-50 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-700">Add New Symptom</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowSymptomForm(false)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <Input
                          placeholder="Symptom name (e.g., nausea, fatigue)"
                          value={newSymptom.name}
                          onChange={(e) => setNewSymptom({...newSymptom, name: e.target.value})}
                        />
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Severity: {newSymptom.severity}/5
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            value={newSymptom.severity}
                            onChange={(e) => setNewSymptom({...newSymptom, severity: Number(e.target.value)})}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Mild</span>
                            <span>Moderate</span>
                            <span>Severe</span>
                          </div>
                        </div>
                        <Textarea
                          placeholder="Additional notes (optional)"
                          value={newSymptom.notes}
                          onChange={(e) => setNewSymptom({...newSymptom, notes: e.target.value})}
                          className="resize-none"
                        />
                        <div className="flex gap-3">
                          <Button onClick={handleAddSymptom} className="flex-1">
                            Add Symptom
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setShowSymptomForm(false)}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Recent Symptoms */}
                <div className="space-y-4">
                  {pregnancyData.symptoms.slice(-5).reverse().map((symptom) => (
                    <div key={symptom.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-medium text-gray-800 capitalize">{symptom.symptom}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < symptom.severity 
                                    ? symptom.severity <= 2 
                                      ? 'bg-green-400'
                                      : symptom.severity <= 3
                                      ? 'bg-yellow-400'
                                      : 'bg-red-400'
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {format(new Date(symptom.date), 'MMM d, yyyy')}
                          {symptom.notes && ` • ${symptom.notes}`}
                        </p>
                      </div>
                    </div>
                  ))}
                  {pregnancyData.symptoms.length === 0 && (
                    <p className="text-center text-gray-500 py-8">
                      No symptoms recorded yet. Click &quot;Add Symptom&quot; to start tracking.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default PregnancyTrackerRedesigned;