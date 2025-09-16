export interface BabySize {
  size: string;
  length: string;
  weight: string;
  description: string;
  milestones: string[];
  imageUrl?: string;
}

export interface WeeklyInfo {
  symptoms: string;
  husbandTips: string;
  nutrition: string;
  exercise: string;
  developmentHighlights: string[];
}

export interface BabySizes {
  [key: number]: BabySize;
}

export interface WeeklyNotes {
  [key: number]: WeeklyInfo;
}

export interface MilestoneDate {
  date: Date;
  title: string;
  type: 'screening' | 'checkup' | 'test' | 'milestone';
  description: string;
  urgent?: boolean;
  completed?: boolean;
}

export interface VitalSigns {
  id: string;
  bloodPressure: string;
  weight: number;
  temperature: number;
  heartRate: number;
  date: string;
  note?: string;
}

export interface MedicalNote {
  id: string;
  date: string;
  note: string;
  doctor: string;
  category: 'general' | 'test' | 'prescription' | 'concern' | 'advice';
  attachments?: string[];
}

export interface SymptomEntry {
  id: string;
  symptom: string;
  severity: number;
  date: string;
  notes?: string;
}

export interface PregnancyData {
  lmpDate: string;
  dueDate?: string;
  vitalSigns: VitalSigns[];
  medicalNotes: MedicalNote[];
  symptoms: SymptomEntry[];
  appointments: MilestoneDate[];
  customMilestones: MilestoneDate[];
  hasHeartbeat: boolean;
}

export interface VitalSignsForm {
  bloodPressure: string;
  weight: string;
  temperature: string;
  heartRate: string;
  note?: string;
}

export interface FetalGrowthData {
  week: number;
  day: number;
  crown_rump_length: number; // mm
  biparietal_diameter: number; // mm
  head_circumference: number; // mm
  abdominal_circumference: number; // mm
  femur_length: number; // mm
  weight: number; // grams
} 