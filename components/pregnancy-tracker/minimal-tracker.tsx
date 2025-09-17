"use client";

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Calendar as CalendarIcon, 
  Heart, 
  Baby, 
  Sparkles, 
  Plus,
  X,
  Edit3,
  Check
} from 'lucide-react';
import { cn } from "@/lib/utils";

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

const MinimalPregnancyTracker: React.FC = () => {
  const [pregnancyData, setPregnancyData] = useState<PregnancyData>(DEFAULT_PREGNANCY_DATA);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [showSymptomForm, setShowSymptomForm] = useState(false);
  const [newSymptom, setNewSymptom] = useState({ name: '', severity: 1, notes: '' });
  const [calendarMonth, setCalendarMonth] = useState<Date>();

  // Derived state
  const lmpDate = pregnancyData.lmpDate ? new Date(pregnancyData.lmpDate) : null;
  const dueDate = lmpDate ? calculateDueDate(lmpDate) : null;
  const { weeksPregnant, daysRemaining, progressPercentage } = lmpDate ? 
    calculatePregnancyProgress(lmpDate) : { weeksPregnant: 0, daysRemaining: 0, progressPercentage: 0 };
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
          const lmpDate = new Date(parsedData.lmpDate);
          setSelectedDate(lmpDate);
          setCalendarMonth(lmpDate);
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

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      saveToStorage({ 
        lmpDate: date.toISOString(),
        appointments: getCriticalDates(date)
      });
      setIsEditingDate(false);
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

  const getTrimesterGradient = () => {
    switch (trimester) {
      case 1: return 'from-pink-400 to-rose-500';
      case 2: return 'from-purple-400 to-indigo-500';
      case 3: return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Minimal Header */}
      <div className="bg-white/60 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/baby.svg" alt="Pregnancy Tracker" width={32} height={32} className="rounded-full" />
              <div>
                <h1 className="text-2xl font-light text-gray-800">
                  Your Journey
                </h1>
                {lmpDate ? (
                  <p className="text-gray-500 text-sm">
                    Week {weeksPregnant} • {format(new Date(), 'MMMM d, yyyy')}
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm">Pregnancy Tracker</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <nav className="hidden sm:flex items-center gap-6">
                <Link href="/blog" className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium">
                  Blog
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium">
                  About
                </Link>
              </nav>
              {lmpDate && (
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getTrimesterGradient()} text-white text-sm font-medium`}>
                  {trimester === 1 ? '1st' : trimester === 2 ? '2nd' : '3rd'} Trimester
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Date Selection Section */}
        <div className="mb-12">
          {!lmpDate || isEditingDate ? (
            <div className="text-center py-16">
              <CalendarIcon className="w-16 h-16 mx-auto mb-6 text-gray-300" />
              <h2 className="text-2xl font-light text-gray-700 mb-4">
                When did your last period begin?
              </h2>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-80 justify-start text-left font-normal bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select your last period date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    month={calendarMonth}
                    onMonthChange={setCalendarMonth}
                    defaultMonth={selectedDate || calendarMonth}
                    fixedWeeks
                  />
                </PopoverContent>
              </Popover>
              {isEditingDate && (
                <div className="mt-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsEditingDate(false)}
                    className="text-gray-500"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="py-8 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Last Period Started</p>
                  <p className="text-xl font-light text-gray-800">{format(lmpDate, "MMMM d, yyyy")}</p>
                  <p className="text-sm text-gray-500 mt-1">Due date: {dueDate ? format(dueDate, "MMMM d, yyyy") : "Unknown"}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsEditingDate(true)}
                  className="text-gray-500 hover:text-gray-700 shrink-0 self-start sm:self-center"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Edit Date</span>
                  <span className="sm:hidden">Edit</span>
                </Button>
              </div>
            </div>
          )}
        </div>

        {lmpDate && !isEditingDate && (
          <>
            {/* Progress Section */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-light text-gray-800 mb-4">
                    Size of a {babySize.size}
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Baby className="w-5 h-5" />
                      <span>Length: <strong>{babySize.length}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Heart className="w-5 h-5" />
                      <span>Weight: <strong>{babySize.weight}</strong></span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{babySize.description}</p>
                </div>

                {/* Minimal Progress Circle */}
                <div className="flex justify-center">
                  <div className="relative">
                    <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="2"
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
                      <span className="text-3xl font-light bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        {Math.round(progressPercentage)}%
                      </span>
                      <span className="text-sm text-gray-500 mt-1">Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-800 mb-2">{weeksPregnant}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-800 mb-2">{Math.ceil((280 - (weeksPregnant * 7 + daysRemaining)) / 7)}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Weeks Left</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-800 mb-2">{calculateAdjustedSuccessRate(weeksPregnant).toFixed(0)}%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Stability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-800 mb-2">{pregnancyData.symptoms.length}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Symptoms</div>
              </div>
            </div>

            {/* Weekly Insights */}
            {weeklyInfo && (
              <div className="mb-16">
                <h3 className="text-2xl font-light text-gray-800 mb-8 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                  This Week&apos;s Insights
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Development Highlights</h4>
                      <ul className="space-y-2">
                        {weeklyInfo.developmentHighlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Partner Tips</h4>
                      <p className="text-gray-600 leading-relaxed">{weeklyInfo.husbandTips}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Symptoms Section */}
            <div className="border-t border-gray-100 pt-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-light text-gray-800 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-400" />
                  How Are You Feeling?
                </h3>
                <Button 
                  onClick={() => setShowSymptomForm(true)}
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Symptom
                </Button>
              </div>

              {/* Symptom Form */}
              {showSymptomForm && (
                <div className="mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-700">Add New Symptom</h4>
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
                      className="bg-white/80 border-gray-200"
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
                      className="resize-none bg-white/80 border-gray-200"
                    />
                    <div className="flex gap-3">
                      <Button onClick={handleAddSymptom} className="flex-1">
                        <Check className="w-4 h-4 mr-2" />
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
                </div>
              )}

              {/* Symptoms List */}
              <div className="space-y-4">
                {pregnancyData.symptoms.slice(-10).reverse().map((symptom) => (
                  <div key={symptom.id} className="py-4 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800 capitalize">{symptom.symptom}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < symptom.severity 
                                ? symptom.severity <= 2 
                                  ? 'bg-emerald-400'
                                  : symptom.severity <= 3
                                  ? 'bg-amber-400'
                                  : 'bg-red-400'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-3">
                      <span>{format(new Date(symptom.date), 'MMM d, yyyy')}</span>
                      {symptom.notes && <span>• {symptom.notes}</span>}
                    </div>
                  </div>
                ))}
                {pregnancyData.symptoms.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    No symptoms recorded yet. Click &quot;Add Symptom&quot; to start tracking.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MinimalPregnancyTracker;