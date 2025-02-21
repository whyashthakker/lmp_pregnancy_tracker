"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInDays, addDays, format, addWeeks, isValid, parse } from 'date-fns';
import { Calendar, CalendarDays, Stethoscope, FileText, Activity, Plus, LineChart, AlertCircle, CalendarRange } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface BabySize {
  size: string;
  length: string;
  commits: number;
}

interface WeeklyInfo {
  symptoms: string;
  husbandTips: string;
}

interface BabySizes {
  [key: number]: BabySize;
}

interface WeeklyNotes {
  [key: number]: WeeklyInfo;
}

interface MilestoneDate {
  date: Date;
  title: string;
  type: 'screening' | 'checkup' | 'test' | 'milestone';
  description: string;
  urgent?: boolean;
}

interface VitalSigns {
  bloodPressure: string;
  weight: number;
  temperature: number;
  heartRate: number;
  date: string;
}

interface MedicalNote {
  date: string;
  note: string;
  doctor: string;
}

interface PregnancyData {
  lmpDate: string;
  vitalSigns: VitalSigns[];
  medicalNotes: MedicalNote[];
  symptoms: string[];
}

interface VitalSignsForm {
  bloodPressure: string;
  weight: string;
  temperature: string;
  heartRate: string;
}

const PregnancyTracker: React.FC = () => {
  // Constants
  const DEFAULT_LMP = new Date('2025-01-19');

  const [lmpDate, setLmpDate] = useState<Date>(DEFAULT_LMP);
  const [lmpInput, setLmpInput] = useState<string>('2025-01-19');
  const [showDateError, setShowDateError] = useState<boolean>(false);
  const [vitalSigns, setVitalSigns] = useState<VitalSigns[]>([]);
  const [medicalNotes, setMedicalNotes] = useState<MedicalNote[]>([]);
  const [currentSymptoms, setCurrentSymptoms] = useState<string[]>([]);
  const [doctorName, setDoctorName] = useState<string>('');
  const [newNote, setNewNote] = useState<string>('');
  const [vitalSignsForm, setVitalSignsForm] = useState<VitalSignsForm>({
    bloodPressure: '',
    weight: '',
    temperature: '',
    heartRate: ''
  });

  const TODAY: Date = new Date();
  const PREGNANCY_DURATION: number = 280;
  const DUE_DATE: Date = addDays(lmpDate, PREGNANCY_DURATION);

  // Calculate current progress
  const daysPregnant: number = differenceInDays(TODAY, lmpDate);
  const weeksPregnant: number = Math.floor(daysPregnant / 7);
  const daysRemaining: number = Math.floor(daysPregnant % 7);
  
  const getBabySize = (weeks: number): BabySize => {
    if (weeks >= 40) {
      return { 
        size: "👶 Congratulations! You have a baby!", 
        length: "18-22 inches", 
        commits: 40 
      };
    }
  
    const sizes: BabySizes = {
      1: { size: "Poppy seed", length: "0.01 inches", commits: 1 },
      2: { size: "Caraway seed", length: "0.02 inches", commits: 1 },
      3: { size: "Sesame seed", length: "0.03 inches", commits: 2 },
      4: { size: "Poppy seed", length: "0.04 inches", commits: 3 },
      5: { size: "Sesame seed", length: "0.05 inches", commits: 4 },
      6: { size: "Lentil", length: "0.08 inches", commits: 5 },
      7: { size: "Blueberry", length: "0.3 inches", commits: 6 },
      8: { size: "Raspberry", length: "0.6 inches", commits: 7 },
      9: { size: "Green olive", length: "0.9 inches", commits: 8 },
      10: { size: "Prune", length: "1.2 inches", commits: 9 },
      11: { size: "Lime", length: "1.6 inches", commits: 10 },
      12: { size: "Plum", length: "2.1 inches", commits: 11 },
      13: { size: "Peach", length: "2.9 inches", commits: 12 },
      14: { size: "Lemon", length: "3.4 inches", commits: 13 },
      15: { size: "Apple", length: "4.0 inches", commits: 14 },
      16: { size: "Avocado", length: "4.6 inches", commits: 15 },
      17: { size: "Pear", length: "5.1 inches", commits: 16 },
      18: { size: "Sweet Potato", length: "5.6 inches", commits: 17 },
      19: { size: "Mango", length: "6.0 inches", commits: 18 },
      20: { size: "Banana", length: "6.5 inches", commits: 19 },
      21: { size: "Carrot", length: "7.2 inches", commits: 20 },
      22: { size: "Corn", length: "7.6 inches", commits: 21 },
      23: { size: "Large Mango", length: "8.0 inches", commits: 22 },
      24: { size: "Cantaloupe", length: "8.4 inches", commits: 23 },
      25: { size: "Cauliflower", length: "8.8 inches", commits: 24 },
      26: { size: "Lettuce", length: "9.2 inches", commits: 25 },
      27: { size: "Rutabaga", length: "9.6 inches", commits: 26 },
      28: { size: "Eggplant", length: "10.2 inches", commits: 27 },
      29: { size: "Butternut Squash", length: "10.8 inches", commits: 28 },
      30: { size: "Cabbage", length: "11.4 inches", commits: 29 },
      31: { size: "Coconut", length: "11.8 inches", commits: 30 },
      32: { size: "Jicama", length: "12.4 inches", commits: 31 },
      33: { size: "Pineapple", length: "13.2 inches", commits: 32 },
      34: { size: "Cantaloupe", length: "14.0 inches", commits: 33 },
      35: { size: "Honeydew Melon", length: "14.8 inches", commits: 34 },
      36: { size: "Large Romaine Lettuce", length: "15.7 inches", commits: 35 },
      37: { size: "Winter Melon", length: "16.5 inches", commits: 36 },
      38: { size: "Pumpkin", length: "17.2 inches", commits: 37 },
      39: { size: "Watermelon", length: "18.0 inches", commits: 38 },
      40: { size: "Small Pumpkin 🎃", length: "18.9-20.9 inches", commits: 39 }
    };
  
    // For early weeks
    if (weeks < 1) {
      return { 
        size: "The journey begins! 🌟", 
        length: "Not yet visible", 
        commits: 1 
      };
    }
  
    // For weeks beyond 40 but before birth
    if (weeks > 40) {
      return { 
        size: "Ready to meet you! 👶", 
        length: "18-22 inches", 
        commits: 40 
      };
    }
  
    return sizes[weeks] || { 
      size: "Loading size data...", 
      length: "measurement pending", 
      commits: 1 
    };
  };

  const getWeeklyInfo = (weeks: number): WeeklyInfo => {
    const weeklyNotes: WeeklyNotes = {
      4: {
        symptoms: "Missed period, fatigue, mild cramping",
        husbandTips: "🎮 QUEST: Emotional Support\n- Stock up on her favorite snacks\n- Take over some household chores\n- Be extra patient with mood swings"
      },
      5: {
        symptoms: "Morning sickness may begin, tender breasts",
        husbandTips: "🎮 QUEST: Morning Sickness Support\n- Keep crackers by the bedside\n- Learn to cook mild, non-spicy meals\n- Handle strong-smelling tasks"
      },
      6: {
        symptoms: "Frequent urination, mood swings",
        husbandTips: "🎮 QUEST: Comfort Provider\n- Plan bathroom breaks during outings\n- Start pregnancy journal together\n- Research pregnancy apps"
      },
      7: {
        symptoms: "Morning sickness, food aversions/cravings",
        husbandTips: "🎮 QUEST: Food Manager\n- Be ready for midnight snack runs\n- Keep track of food aversions\n- Make sure she stays hydrated"
      },
      8: {
        symptoms: "Fatigue, heightened sense of smell",
        husbandTips: "🎮 QUEST: Environment Master\n- Use unscented cleaning products\n- Create a relaxing sleep environment\n- Take over cooking if smells bother her"
      },
      9: {
        symptoms: "Mood swings, morning sickness peak",
        husbandTips: "🎮 QUEST: Emotional Guardian\n- Practice active listening\n- Plan relaxing activities together\n- Start planning nursery design"
      },
      10: {
        symptoms: "Less fatigue, possible heartburn",
        husbandTips: "🎮 QUEST: Health Support\n- Stock up on antacids (doctor-approved)\n- Plan gentle exercise together\n- Start researching birthing classes"
      },
      11: {
        symptoms: "Decreased nausea, increased energy",
        husbandTips: "🎮 QUEST: Activity Partner\n- Plan short, gentle walks together\n- Start pregnancy photography\n- Research baby gear together"
      },
      12: {
        symptoms: "Food cravings, round ligament pain",
        husbandTips: "🎮 QUEST: Comfort Champion\n- Learn pregnancy massage techniques\n- Help with stretching exercises\n- Start planning baby shower"
      },
      13: {
        symptoms: "Increased energy, visible bump forming",
        husbandTips: "🎮 QUEST: Documentation Master\n- Take weekly bump photos\n- Start planning maternity photoshoot\n- Research childbirth classes"
      }
    };
    return weeklyNotes[weeks] || {
      symptoms: "Consult your healthcare provider",
      husbandTips: "🎮 QUEST: Support Partner\n- Attend doctor appointments\n- Keep learning about pregnancy\n- Stay supportive"
    };
  };

  const getCriticalDates = (lmpDate: Date): MilestoneDate[] => {
    return [
      {
        date: addWeeks(lmpDate, 4),
        title: "First Prenatal Visit",
        type: 'checkup',
        description: "Confirm pregnancy, medical history, initial screenings",
        urgent: true
      },
      {
        date: addWeeks(lmpDate, 6),
        title: "First Heartbeat",
        type: 'milestone',
        description: "Early ultrasound to detect heartbeat"
      },
      {
        date: addWeeks(lmpDate, 8),
        title: "Initial Blood Tests",
        type: 'test',
        description: "Blood type, infections, hemoglobin"
      },
      {
        date: addWeeks(lmpDate, 10),
        title: "NIPT Test",
        type: 'screening',
        description: "Non-invasive prenatal testing available"
      },
      {
        date: addWeeks(lmpDate, 11),
        title: "NT Scan",
        type: 'screening',
        description: "Nuchal translucency ultrasound"
      },
      {
        date: addWeeks(lmpDate, 12),
        title: "First Trimester Screening",
        type: 'screening',
        description: "Combined screening for chromosomal conditions",
        urgent: true
      },
      {
        date: addWeeks(lmpDate, 16),
        title: "Quad Screen Test",
        type: 'test',
        description: "Second trimester screening test"
      },
      {
        date: addWeeks(lmpDate, 18),
        title: "Fetal Movement",
        type: 'milestone',
        description: "Begin monitoring fetal movements"
      },
      {
        date: addWeeks(lmpDate, 20),
        title: "Anatomy Scan",
        type: 'screening',
        description: "Detailed ultrasound of baby's anatomy",
        urgent: true
      },
      {
        date: addWeeks(lmpDate, 24),
        title: "Glucose Test",
        type: 'test',
        description: "Gestational diabetes screening"
      },
      {
        date: addWeeks(lmpDate, 26),
        title: "Tdap Vaccine",
        type: 'milestone',
        description: "Recommended vaccination"
      },
      {
        date: addWeeks(lmpDate, 28),
        title: "RhoGAM Shot",
        type: 'test',
        description: "If Rh negative blood type"
      },
      {
        date: addWeeks(lmpDate, 32),
        title: "Growth Scan",
        type: 'screening',
        description: "Monitor baby's growth and position"
      },
      {
        date: addWeeks(lmpDate, 34),
        title: "Group B Strep Test",
        type: 'test',
        description: "Screening for GBS infection"
      },
      {
        date: addWeeks(lmpDate, 36),
        title: "Weekly Checkups Begin",
        type: 'checkup',
        description: "More frequent monitoring",
        urgent: true
      },
      {
        date: addWeeks(lmpDate, 37),
        title: "Full Term Begins",
        type: 'milestone',
        description: "Baby is considered early term"
      },
      {
        date: addWeeks(lmpDate, 39),
        title: "Full Term",
        type: 'milestone',
        description: "Optimal time for delivery"
      },
      {
        date: DUE_DATE,
        title: "Due Date",
        type: 'milestone',
        description: "Estimated delivery date",
        urgent: true
      }
    ];
  };

  const progressPercentage: number = (daysPregnant / PREGNANCY_DURATION) * 100;

  // Load data from storage
  useEffect(() => {
    const loadData = () => {
      try {
        const storedData = localStorage.getItem('pregnancyData');
        if (storedData) {
          const pregnancyData: PregnancyData = JSON.parse(storedData);
          
          // Validate and parse the date
          const parsedDate = parse(pregnancyData.lmpDate, 'yyyy-MM-dd', new Date());
          if (isValid(parsedDate)) {
            setLmpDate(parsedDate);
            setLmpInput(pregnancyData.lmpDate);
          } else {
            // If date is invalid, reset to default
            setLmpDate(DEFAULT_LMP);
            setLmpInput(format(DEFAULT_LMP, 'yyyy-MM-dd'));
          }

          // Load other data
          setVitalSigns(pregnancyData.vitalSigns || []);
          setMedicalNotes(pregnancyData.medicalNotes || []);
          setCurrentSymptoms(pregnancyData.symptoms || []);
        }
      } catch (error) {
        console.error('Error loading pregnancy data:', error);
        // Reset to defaults on error
        setLmpDate(DEFAULT_LMP);
        setLmpInput(format(DEFAULT_LMP, 'yyyy-MM-dd'));
      }
    };
    loadData();
  }, [DEFAULT_LMP]);

  // Save data to storage
  const saveToStorage = (data: Partial<PregnancyData>) => {
    try {
      const storedData = localStorage.getItem('pregnancyData');
      const currentData = storedData ? JSON.parse(storedData) : {};
      
      // Ensure lmpDate is stored in the correct format
      const updatedData = {
        ...currentData,
        ...data,
        lmpDate: format(lmpDate, 'yyyy-MM-dd') // Always use the current lmpDate when saving
      };
      
      localStorage.setItem('pregnancyData', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Error saving pregnancy data:', error);
    }
  };

  // Handle date change
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setLmpInput(newDate);
    
    const parsedDate = parse(newDate, 'yyyy-MM-dd', new Date());
    if (isValid(parsedDate)) {
      setLmpDate(parsedDate);
      setShowDateError(false);
      saveToStorage({ lmpDate: newDate });
    } else {
      setShowDateError(true);
    }
  };


  // Handle vital signs update
  const handleVitalSignsUpdate = (newVitals: VitalSigns) => {
    const updatedVitals = [...vitalSigns, newVitals];
    setVitalSigns(updatedVitals);
    saveToStorage({ vitalSigns: updatedVitals });
  };

  const handleVitalSignsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVitals: VitalSigns = {
      bloodPressure: vitalSignsForm.bloodPressure,
      weight: parseFloat(vitalSignsForm.weight) || 0,
      temperature: parseFloat(vitalSignsForm.temperature) || 0,
      heartRate: parseFloat(vitalSignsForm.heartRate) || 0,
      date: format(new Date(), 'yyyy-MM-dd')
    };
    handleVitalSignsUpdate(newVitals);
    setVitalSignsForm({
      bloodPressure: '',
      weight: '',
      temperature: '',
      heartRate: ''
    });
  };

  // Handle medical note addition
  const handleAddNote = () => {
    if (newNote && doctorName) {
      const newMedicalNote: MedicalNote = {
        date: format(new Date(), 'yyyy-MM-dd'),
        note: newNote,
        doctor: doctorName
      };
      const updatedNotes = [...medicalNotes, newMedicalNote];
      setMedicalNotes(updatedNotes);
      saveToStorage({ medicalNotes: updatedNotes });
      setNewNote('');
    }
  };

  // Handle symptom tracking
  const handleSymptomUpdate = (symptom: string) => {
    const updatedSymptoms = currentSymptoms.includes(symptom)
      ? currentSymptoms.filter(s => s !== symptom)
      : [...currentSymptoms, symptom];
    setCurrentSymptoms(updatedSymptoms);
    saveToStorage({ symptoms: updatedSymptoms });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Pregnancy Progress Tracker</h1>
          <p className="text-sm text-gray-500 mt-1">Professional pregnancy monitoring system</p>
        </div>
        <Card className="w-full md:w-auto">
          <CardContent className="p-3">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="text-blue-500" size={16} />
                <div className="relative w-full">
                  <Input
                    type="date"
                    value={lmpInput}
                    onChange={handleDateChange}
                    className={`h-9 ${showDateError ? 'border-red-500' : ''}`}
                    max={format(TODAY, 'yyyy-MM-dd')}
                  />
                  {showDateError && (
                    <p className="absolute -bottom-5 left-0 text-xs text-red-500">
                      Please enter a valid date
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="outline">LMP: {format(lmpDate, 'MMM dd, yyyy')}</Badge>
                <Badge variant="outline" className="bg-blue-50">Due: {format(DUE_DATE, 'MMM dd, yyyy')}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-blue-500" size={20} />
              <h3 className="font-medium">Gestational Age</h3>
            </div>
            <p className="text-2xl font-semibold text-gray-900">{weeksPregnant} weeks {daysRemaining} days</p>
            <p className="text-sm text-gray-500 mt-1">{daysPregnant} days from LMP</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <LineChart className="text-emerald-500" size={20} />
              <h3 className="font-medium">Progress</h3>
            </div>
            <p className="text-2xl font-semibold text-emerald-600">{progressPercentage.toFixed(1)}%</p>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
              <div
                className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="text-amber-500" size={20} />
              <h3 className="font-medium">Time Remaining</h3>
            </div>
            <p className="text-2xl font-semibold text-gray-900">{40 - weeksPregnant} weeks</p>
            <p className="text-sm text-gray-500 mt-1">{PREGNANCY_DURATION - daysPregnant} days to due date</p>
          </CardContent>
        </Card>
      </div>

      {/* New Timeline Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarRange className="text-blue-500" size={20} />
            Important Dates & Checkpoints
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-6">
              {getCriticalDates(lmpDate)
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((milestone, idx) => {
                  const isPast = milestone.date <= TODAY;
                  const isToday = differenceInDays(milestone.date, TODAY) === 0;
                  const weekNumber = Math.floor(differenceInDays(milestone.date, lmpDate) / 7);

                  return (
                    <div 
                      key={idx}
                      className={`relative flex items-start gap-4 ${
                        isPast ? 'opacity-50' : 
                        isToday ? 'opacity-100' : 
                        'opacity-90'
                      }`}
                    >
                      <div 
                        className={`absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full mt-1.5 ${
                          milestone.urgent ? 'ring-2 ring-offset-2 ring-red-500' : ''
                        } ${
                          milestone.type === 'screening' ? 'bg-purple-500' :
                          milestone.type === 'checkup' ? 'bg-blue-500' :
                          milestone.type === 'test' ? 'bg-amber-500' :
                          'bg-emerald-500'
                        }`}
                      ></div>
                      <div className="ml-8">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={
                              milestone.type === 'screening' ? 'default' :
                              milestone.type === 'checkup' ? 'secondary' :
                              milestone.type === 'test' ? 'outline' :
                              'default'
                            }
                            className={
                              milestone.urgent ? 'border-red-500 text-red-500' : ''
                            }
                          >
                            Week {weekNumber}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {format(milestone.date, 'MMM dd, yyyy')}
                          </span>
                          {isToday && (
                            <Badge variant="default" className="bg-green-500">Today</Badge>
                          )}
                        </div>
                        <h3 className="text-base font-medium text-gray-900 mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-0.5">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="vitals" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 lg:max-w-[600px]">
          <TabsTrigger value="vitals">Vital Signs</TabsTrigger>
          <TabsTrigger value="notes">Medical Notes</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="growth">Fetal Growth</TabsTrigger>
        </TabsList>

        <TabsContent value="vitals" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="text-emerald-500" size={20} />
                Vital Signs Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <form onSubmit={handleVitalSignsSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Blood Pressure</Label>
                        <Input
                          type="text"
                          placeholder="e.g., 120/80"
                          value={vitalSignsForm.bloodPressure}
                          onChange={(e) => setVitalSignsForm(prev => ({
                            ...prev,
                            bloodPressure: e.target.value
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Weight (kg)</Label>
                        <Input
                          type="number"
                          placeholder="Weight"
                          value={vitalSignsForm.weight}
                          onChange={(e) => setVitalSignsForm(prev => ({
                            ...prev,
                            weight: e.target.value
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Temperature (°C)</Label>
                        <Input
                          type="number"
                          placeholder="Temperature"
                          value={vitalSignsForm.temperature}
                          onChange={(e) => setVitalSignsForm(prev => ({
                            ...prev,
                            temperature: e.target.value
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Heart Rate (bpm)</Label>
                        <Input
                          type="number"
                          placeholder="Heart Rate"
                          value={vitalSignsForm.heartRate}
                          onChange={(e) => setVitalSignsForm(prev => ({
                            ...prev,
                            heartRate: e.target.value
                          }))}
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full md:w-auto"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Record
                    </Button>
                  </form>
                </div>

                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BP</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Temp</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">HR</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {vitalSigns.slice().reverse().map((vital, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-4 py-2 text-sm text-gray-900">{vital.date}</td>
                            <td className="px-4 py-2 text-sm text-gray-900">{vital.bloodPressure}</td>
                            <td className="px-4 py-2 text-sm text-gray-900">{vital.weight} kg</td>
                            <td className="px-4 py-2 text-sm text-gray-900">{vital.temperature}°C</td>
                            <td className="px-4 py-2 text-sm text-gray-900">{vital.heartRate} bpm</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-blue-500" size={20} />
                Medical Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-4">
                  <div className="space-y-2">
                    <Label>Doctor&apos;s Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Medical Notes</Label>
                    <Textarea
                      placeholder="Add medical notes..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      className="h-32 resize-none"
                    />
                  </div>
                  <Button
                    onClick={handleAddNote}
                    className="w-full"
                    disabled={!newNote || !doctorName}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Note
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {medicalNotes.slice().reverse().map((note, idx) => (
                      <div key={idx} className="p-4 rounded-lg border">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">Dr. {note.doctor}</Badge>
                            <span className="text-sm text-gray-500">{note.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 whitespace-pre-wrap">{note.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="text-rose-500" size={20} />
                Symptom Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  'Nausea', 'Fatigue', 'Headache', 'Back Pain',
                  'Swelling', 'Cramping', 'Mood Changes', 'Insomnia',
                  'Heartburn', 'Dizziness', 'Constipation', 'Breast Tenderness'
                ].map((symptom) => (
                  <button
                    key={symptom}
                    onClick={() => handleSymptomUpdate(symptom)}
                    className={`p-3 rounded-lg text-sm transition-all border ${
                      currentSymptoms.includes(symptom)
                        ? 'bg-rose-500 text-white border-rose-500'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-rose-500 hover:text-rose-500'
                    }`}
                  >
                    {symptom}
                  </button>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">Current Symptoms</h3>
                <div className="flex flex-wrap gap-2">
                  {currentSymptoms.map((symptom) => (
                    <Badge key={symptom} variant="secondary">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="growth" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="text-blue-500" size={20} />
                Fetal Growth Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Current Size</h3>
                  <p className="text-2xl font-semibold text-gray-900">{getBabySize(weeksPregnant).size}</p>
                  <p className="text-gray-500 mt-1">Approximately {getBabySize(weeksPregnant).length}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Weekly Development</h3>
                  <p className="text-gray-700">{getWeeklyInfo(weeksPregnant).symptoms}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PregnancyTracker;