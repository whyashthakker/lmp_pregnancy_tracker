"use client";

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format, isValid, parse } from 'date-fns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, CalendarDays } from 'lucide-react';


// Import types
import { 
  PregnancyData, 
  VitalSigns, 
  SymptomEntry, 
  VitalSignsForm as VitalSignsFormType
} from './types';

// Import utility functions
import { 
  calculateDueDate, 
  calculatePregnancyProgress, 
  getCurrentTrimester,
  getBabySize,
  getWeeklyInfo,
  getCriticalDates,
  extractNumeric,
  calculateAdjustedSuccessRate
} from './utils/pregnancy-calculations';

// Import components
import ProgressDashboard from './dashboard/progress-dashboard';
import WeeklyInsights from './weekly-insights/weekly-insights';
import PartnerTips from './weekly-insights/partner-tips';
import RecentSymptoms from './symptoms/recent-symptoms';
import SymptomForm from './symptoms/symptom-form';

// Import medical components
import VitalSignsFormComponent from './medical/vital-signs-form';
import RecentVitalSigns from './medical/recent-vital-signs';

// Import new components
import MiscarriageRisk from './dashboard/miscarriage-risk';
import CommonSymptoms from './symptoms/common-symptoms';

// Import settings component
import AppSettings from './settings/app-settings';

// Default empty pregnancy data
const DEFAULT_PREGNANCY_DATA: PregnancyData = {
  lmpDate: '',
  vitalSigns: [],
  medicalNotes: [],
  symptoms: [],
  appointments: [],
  customMilestones: [],
  hasHeartbeat: false
};

const PregnancyTracker: React.FC = () => {
  // State for pregnancy data
  const [pregnancyData, setPregnancyData] = useState<PregnancyData>(DEFAULT_PREGNANCY_DATA);
  
  // Form states
  const [lmpDateInput, setLmpDateInput] = useState('');
  const [vitalSignsForm, setVitalSignsForm] = useState<VitalSignsFormType>({
    bloodPressure: '',
    weight: '',
    temperature: '',
    heartRate: '',
    note: ''
  });
  
  // Derived state
  const lmpDate = pregnancyData.lmpDate ? new Date(pregnancyData.lmpDate) : new Date();
  const dueDate = calculateDueDate(lmpDate);
  const { weeksPregnant, daysRemaining, progressPercentage } = calculatePregnancyProgress(lmpDate);
  const trimester = getCurrentTrimester(weeksPregnant);
  

  const babySize = getBabySize(weeksPregnant, daysRemaining);
  const weeklyInfo = getWeeklyInfo(weeksPregnant) || {
    developmentHighlights: [],
    symptoms: '',
    husbandTips: '',
    nutrition: '',
    exercise: ''
  };
  
  // State for heartbeat confirmation (now only used by MiscarriageRisk component)
  const [hasHeartbeat, setHasHeartbeat] = useState(false);
  
  // Load data from localStorage on component mount
  useEffect(() => {
    const loadData = () => {
      const savedData = localStorage.getItem('pregnancyData');
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setPregnancyData(parsedData);
          
          // Set LMP date input field
          if (parsedData.lmpDate) {
            setLmpDateInput(parsedData.lmpDate.split('T')[0]);
          }
        } catch (error) {
          console.error('Error parsing saved pregnancy data:', error);
        }
      }
    };
    
    loadData();
  }, []);
  
  // Save data to localStorage whenever it changes
  const saveToStorage = (data: Partial<PregnancyData>) => {
    const updatedData = { ...pregnancyData, ...data };
    setPregnancyData(updatedData);
    localStorage.setItem('pregnancyData', JSON.stringify(updatedData));
  };
  
  // Handle LMP date change
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setLmpDateInput(dateValue);
    
    // Validate date format
    const parsedDate = parse(dateValue, 'yyyy-MM-dd', new Date());
    if (isValid(parsedDate)) {
      // If date is valid, update the pregnancy data
      saveToStorage({ 
        lmpDate: parsedDate.toISOString(),
        // Add default appointments based on the LMP date
        appointments: getCriticalDates(parsedDate)
      });
    }
  };
  
  // Handle vital signs form change
  const handleVitalSignsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVitalSignsForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle vital signs update
  const handleVitalSignsUpdate = () => {
    const newVitalSign: VitalSigns = {
      id: uuidv4(),
      bloodPressure: vitalSignsForm.bloodPressure,
      weight: extractNumeric(vitalSignsForm.weight),
      temperature: extractNumeric(vitalSignsForm.temperature),
      heartRate: extractNumeric(vitalSignsForm.heartRate),
      date: new Date().toISOString(),
      note: vitalSignsForm.note
    };
    
    const updatedVitalSigns = [...pregnancyData.vitalSigns, newVitalSign];
    saveToStorage({ vitalSigns: updatedVitalSigns });
    
    // Reset form
    setVitalSignsForm({
      bloodPressure: '',
      weight: '',
      temperature: '',
      heartRate: '',
      note: ''
    });
  };
  
  // Handle delete vital sign
  const handleDeleteVitalSign = (id: string) => {
    const updatedVitalSigns = pregnancyData.vitalSigns.filter(vs => vs.id !== id);
    saveToStorage({ vitalSigns: updatedVitalSigns });
  };
  
  // Handle add symptom
  const handleAddSymptom = (symptom: string, severity: number, notes?: string) => {
    const newSymptom: SymptomEntry = {
      id: uuidv4(),
      date: new Date().toISOString(),
      symptom,
      severity,
      notes
    };
    const updatedSymptoms = [...pregnancyData.symptoms, newSymptom];
    saveToStorage({ symptoms: updatedSymptoms });
  };
  
  // Handle delete symptom
  const handleDeleteSymptom = (id: string) => {
    const updatedSymptoms = pregnancyData.symptoms.filter(s => s.id !== id);
    saveToStorage({ symptoms: updatedSymptoms });
  };

  // Handle clear all data
  const handleClearData = () => {
    localStorage.removeItem('pregnancyData');
    setPregnancyData(DEFAULT_PREGNANCY_DATA);
    setLmpDateInput('');
    setVitalSignsForm({
      bloodPressure: '',
      weight: '',
      temperature: '',
      heartRate: '',
      note: ''
    });
    setHasHeartbeat(false);
  };

  // Add a function to handle heartbeat changes from the MiscarriageRisk component
  const handleHeartbeatChange = (hasHeartbeat: boolean) => {
    setHasHeartbeat(hasHeartbeat);
    // Save heartbeat status to localStorage
    const updatedData = { ...pregnancyData, hasHeartbeat };
    localStorage.setItem('pregnancyData', JSON.stringify(updatedData));
  };


  return (
    <div className="container mx-auto py-4 md:py-6 px-3 md:px-4 max-w-6xl">
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Your Pregnancy Journey</h1>
        <p className="text-sm md:text-base text-gray-600">Simple tracking for you and your baby</p>
      </div>
      
      {/* LMP Date Input */}
      <Card className="mb-4 md:mb-6 border-none shadow-md">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-4">
            <div className="flex-1">
              <label htmlFor="lmpDate" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                When was your last period?
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                </div>
                <Input
                  id="lmpDate"
                  type="date"
                  className="pl-9 md:pl-10 text-sm"
                  value={lmpDateInput}
                  onChange={handleDateChange}
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                <span className="text-xs md:text-sm text-gray-500">Due Date:</span>
                <span className="font-medium text-sm">
                  {isValid(dueDate) ? format(dueDate, 'MMMM d, yyyy') : 'Please enter LMP date'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4 md:mb-6">
          <TabsTrigger value="dashboard" className="text-xs md:text-sm py-1.5 md:py-2">Dashboard</TabsTrigger>
          <TabsTrigger value="medical" className="text-xs md:text-sm py-1.5 md:py-2">Medical</TabsTrigger>
          <TabsTrigger value="symptoms" className="text-xs md:text-sm py-1.5 md:py-2">Symptoms</TabsTrigger>
          <TabsTrigger value="settings" className="text-xs md:text-sm py-1.5 md:py-2">Settings</TabsTrigger>
        </TabsList>
        
        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-6">
          {/* Progress Dashboard */}
          <ProgressDashboard
            weeksPregnant={weeksPregnant}
            daysRemaining={daysRemaining}
            progressPercentage={progressPercentage}
            lmpDate={lmpDate}
            dueDate={dueDate}
            babySize={babySize}
            trimester={trimester}
            successRate={calculateAdjustedSuccessRate(weeksPregnant)}
          />
          
          {/* Miscarriage Risk (Stability) */}
          <MiscarriageRisk
            weeksPregnant={weeksPregnant}
            hasHeartbeat={hasHeartbeat}
            onHeartbeatChange={handleHeartbeatChange}
          />
          
          {/* Weekly Insights */}
          <WeeklyInsights
            weeklyInfo={weeklyInfo}
            weeksPregnant={weeksPregnant}
          />
          
          {/* Partner Tips */}
          <PartnerTips
            tips={weeklyInfo?.husbandTips || ''}
            weeksPregnant={weeksPregnant}
          />
        </TabsContent>
        
        {/* Medical Tab */}
        <TabsContent value="medical">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Vital Signs */}
            <RecentVitalSigns
              vitalSigns={pregnancyData.vitalSigns || []}
              onDelete={handleDeleteVitalSign}
            />
            
            {/* Vital Signs Form */}
            <VitalSignsFormComponent
              form={vitalSignsForm}
              onChange={handleVitalSignsChange}
              onSubmit={handleVitalSignsUpdate}
            />

          </div>
        </TabsContent>
        
        {/* Symptoms Tab */}
        <TabsContent value="symptoms">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Symptoms */}
            <RecentSymptoms
              symptoms={pregnancyData.symptoms || []}
              onDeleteSymptom={handleDeleteSymptom}
            />
            
            {/* Symptom Form */}
            <SymptomForm
              onAddSymptom={handleAddSymptom}
            />
            
            {/* Common Symptoms */}
            <CommonSymptoms
              trimester={trimester}
            />
          </div>
        </TabsContent>
        
        {/* Settings Tab */}
        <TabsContent value="settings">
          <AppSettings onClearData={handleClearData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PregnancyTracker; 