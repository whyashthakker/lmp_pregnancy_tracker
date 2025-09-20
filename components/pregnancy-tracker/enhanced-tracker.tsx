"use client";

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
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
  Check,
  User,
  Activity,
  TrendingUp,
  Clock4,
  Info
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

const EnhancedPregnancyTracker: React.FC = () => {
  const [pregnancyData, setPregnancyData] = useState<PregnancyData>(DEFAULT_PREGNANCY_DATA);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [showSymptomForm, setShowSymptomForm] = useState(false);
  const [newSymptom, setNewSymptom] = useState({ name: '', severity: 1, notes: '' });
  const [calendarMonth, setCalendarMonth] = useState<Date>();

  // Derived state
  const lmpDate = pregnancyData.lmpDate ? new Date(pregnancyData.lmpDate) : null;
  // const dueDate = lmpDate ? calculateDueDate(lmpDate) : null;
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


  const getTrimesterBg = () => {
    switch (trimester) {
      case 1: return 'from-pink-50/50 to-rose-50/50';
      case 2: return 'from-purple-50/50 to-indigo-50/50';
      case 3: return 'from-blue-50/50 to-cyan-50/50';
      default: return 'from-gray-50/50 to-gray-100/50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Date Selection Section */}
        {!lmpDate || isEditingDate ? (
          <section className={`mb-12 p-8 rounded-2xl bg-gradient-to-r ${getTrimesterBg()} border border-white/50`}>
            <div className="text-center py-8">
              <div className="mb-6">
                <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-pink-400" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Let&apos;s Start Your Journey
                </h2>
                <p className="text-gray-600">When did your last period begin?</p>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-80 justify-start text-left font-normal bg-white/90 backdrop-blur-sm border-pink-200/60 hover:bg-white shadow-sm",
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
                <div className="mt-6">
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsEditingDate(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </section>
        ) : (
          <>
            {/* Minimal Date Bar */}
            <section className="mb-8 p-3 rounded-lg bg-white/40 backdrop-blur-sm border border-gray-100/40">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{format(lmpDate, "MMM d, yyyy")}</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span>Week {weeksPregnant}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsEditingDate(true)}
                  className="text-gray-400 hover:text-gray-600 text-xs p-1 h-6 w-6"
                >
                  <Edit3 className="w-3 h-3" />
                </Button>
              </div>
            </section>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Baby Info */}
              <section className="lg:col-span-8">
                {/* Baby Development Card */}
                <div className="mb-8 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100/60">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Baby className="w-6 h-6 text-pink-500" />
                        <h2 className="text-xl font-semibold text-gray-800">Your Baby This Week</h2>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Size of a {babySize.size}
                        </h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            <div>
                              <div className="text-xs text-gray-500">Length</div>
                              <div className="font-semibold">{babySize.length}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Heart className="w-4 h-4 text-red-500" />
                            <div>
                              <div className="text-xs text-gray-500">Weight</div>
                              <div className="font-semibold">{babySize.weight}</div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{babySize.description}</p>
                      </div>

                      {/* Milestones */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          Key Developments
                        </h4>
                        <ul className="space-y-2">
                          {babySize.milestones?.map((milestone, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Progress Circle */}
                    <div className="flex justify-center">
                      <div className="relative w-48 h-48">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            className="text-gray-200"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={`${progressPercentage * 2.51} 251`}
                            className="transition-all duration-1000 ease-out drop-shadow-sm"
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
                          <span className="text-xs text-gray-500 mt-1">Complete</span>
                          <div className="mt-2 text-xs text-gray-400 font-medium">
                            Week {weeksPregnant}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weekly Insights */}
                {weeklyInfo && (
                  <div className="mb-8 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100/60">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                      <Info className="w-5 h-5 text-blue-500" />
                      This Week&apos;s Insights
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Baby className="w-4 h-4 text-pink-500" />
                            Development Highlights
                          </h4>
                          <ul className="space-y-2">
                            {weeklyInfo.developmentHighlights.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-green-500" />
                            Common Symptoms
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{weeklyInfo.symptoms}</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <User className="w-4 h-4 text-purple-500" />
                            Partner Tips
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{weeklyInfo.husbandTips}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Nutrition Focus
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{weeklyInfo.nutrition}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Right Column - Stats & Symptoms */}
              <aside className="lg:col-span-4 space-y-6">
                {/* Quick Stats */}
                <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100/60">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Clock4 className="w-5 h-5 text-blue-500" />
                    Quick Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-pink-50/60">
                      <div className="text-2xl font-bold text-pink-600">{weeksPregnant}</div>
                      <div className="text-xs text-gray-500 font-medium">Weeks</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-purple-50/60">
                      <div className="text-2xl font-bold text-purple-600">{Math.ceil((280 - (weeksPregnant * 7 + daysRemaining)) / 7)}</div>
                      <div className="text-xs text-gray-500 font-medium">Weeks Left</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-blue-50/60">
                      <div className="text-2xl font-bold text-blue-600">{calculateAdjustedSuccessRate(weeksPregnant).toFixed(0)}%</div>
                      <div className="text-xs text-gray-500 font-medium">Stability</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-green-50/60">
                      <div className="text-2xl font-bold text-green-600">{pregnancyData.symptoms.length}</div>
                      <div className="text-xs text-gray-500 font-medium">Symptoms</div>
                    </div>
                  </div>
                </div>

                {/* Symptoms Section */}
                <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100/60">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      How Are You Feeling?
                    </h3>
                    <Button 
                      onClick={() => setShowSymptomForm(true)}
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-sm"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>

                  {/* Symptom Form */}
                  {showSymptomForm && (
                    <div className="mb-4 p-4 bg-gray-50/60 backdrop-blur-sm rounded-xl border border-gray-200/60">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-700 text-sm">Add New Symptom</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowSymptomForm(false)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="space-y-3">
                        <Input
                          placeholder="Symptom (e.g., nausea, fatigue)"
                          value={newSymptom.name}
                          onChange={(e) => setNewSymptom({...newSymptom, name: e.target.value})}
                          className="bg-white/80 border-gray-200 text-sm"
                        />
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
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
                            <span>Severe</span>
                          </div>
                        </div>
                        <Textarea
                          placeholder="Notes (optional)"
                          value={newSymptom.notes}
                          onChange={(e) => setNewSymptom({...newSymptom, notes: e.target.value})}
                          className="resize-none bg-white/80 border-gray-200 text-sm"
                          rows={2}
                        />
                        <div className="flex gap-2">
                          <Button onClick={handleAddSymptom} size="sm" className="flex-1 text-xs">
                            <Check className="w-3 h-3 mr-1" />
                            Add
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setShowSymptomForm(false)}
                            size="sm"
                            className="flex-1 text-xs"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Symptoms List */}
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {pregnancyData.symptoms.slice(-8).reverse().map((symptom) => (
                      <div key={symptom.id} className="p-3 bg-gray-50/40 rounded-lg border border-gray-100/60">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-800 capitalize text-sm">{symptom.symptom}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${
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
                        <div className="text-xs text-gray-500">
                          {format(new Date(symptom.date), 'MMM d, h:mm a')}
                          {symptom.notes && (
                            <div className="mt-1 text-gray-600">{symptom.notes}</div>
                          )}
                        </div>
                      </div>
                    ))}
                    {pregnancyData.symptoms.length === 0 && (
                      <div className="text-center py-8 text-gray-500 text-sm">
                        No symptoms recorded yet.
                        <br />
                        <span className="text-xs">Click &quot;Add&quot; to start tracking.</span>
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default EnhancedPregnancyTracker;