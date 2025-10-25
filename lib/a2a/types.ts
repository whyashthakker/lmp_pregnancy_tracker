// A2A Types for EGSpect Pregnancy Tools

export interface DueDateCalculatorParams {
  lastMenstrualPeriod?: string;
  conceptionDate?: string;
  cycleLength?: number;
}

export interface DueDateResult {
  dueDate: string;
  currentWeek: number;
  currentDay: number;
  trimester: number;
  conceptionDate: string;
  estimatedDate: string;
  weeksRemaining: number;
  daysRemaining: number;
}

export interface PregnancyWeekParams {
  lastMenstrualPeriod?: string;
  dueDate?: string;
}

export interface PregnancyWeekResult {
  currentWeek: number;
  currentDay: number;
  trimester: number;
  weekDescription: string;
  milestones: string[];
  developmentInfo: string;
}

export interface BabyNameParams {
  gender?: 'boy' | 'girl' | 'unisex';
  origin?: string;
  style?: string;
  length?: 'short' | 'medium' | 'long';
  popularity?: 'common' | 'unique' | 'trendy';
  startsWith?: string;
  endsWith?: string;
  meaning?: string;
  count?: number;
}

export interface BabyNameResult {
  names: Array<{
    name: string;
    meaning: string;
    origin: string;
    gender: string;
    popularity: string;
    alternativeSpellings?: string[];
  }>;
  totalSuggestions: number;
}

export interface WeightGainParams {
  prePregnancyWeight: number;
  height: number;
  currentWeek: number;
  currentWeight?: number;
  unit?: 'metric' | 'imperial';
}

export interface WeightGainResult {
  preBMI: number;
  bmiCategory: string;
  recommendedGainMin: number;
  recommendedGainMax: number;
  currentGain?: number;
  weeklyRecommendation: number;
  isOnTrack?: boolean;
  advice: string;
}

export interface OvulationParams {
  lastPeriodDate: string;
  cycleLength: number;
  periodLength?: number;
}

export interface OvulationResult {
  ovulationDate: string;
  fertileWindowStart: string;
  fertileWindowEnd: string;
  nextPeriodDate: string;
  cycleDayToday: number;
  daysUntilOvulation: number;
  fertilityStatus: string;
  advice: string;
}

export interface BabyCostParams {
  country: string;
  includeFirstYear?: boolean;
  deliveryType?: 'vaginal' | 'cesarean';
  insurance?: 'public' | 'private' | 'none';
}

export interface BabyCostResult {
  totalCost: number;
  currency: string;
  breakdown: {
    prenatalCare: number;
    delivery: number;
    hospitalStay: number;
    babySupplies: number;
    firstYearCosts?: number;
  };
  recommendations: string[];
}

export interface GenderPredictorParams {
  dueDate: string;
  motherAge: number;
  conceptionMonth: number;
  symptoms?: string[];
  cravings?: string[];
}

export interface GenderPredictorResult {
  chineseCalendarPrediction: 'boy' | 'girl';
  symptomsPrediction: 'boy' | 'girl';
  cravingsPrediction: 'boy' | 'girl';
  overallPrediction: 'boy' | 'girl';
  confidence: number;
  disclaimer: string;
}

export interface BabySizeParams {
  pregnancyWeek: number;
}

export interface BabySizeResult {
  week: number;
  length: string;
  weight: string;
  fruitComparison: string;
  developmentDescription: string;
  motherChanges: string;
  tips: string[];
}

export interface ContractionTimerParams {
  contractions: Array<{
    startTime: string;
    endTime: string;
    intensity?: number;
  }>;
}

export interface ContractionResult {
  averageFrequency: number;
  averageDuration: number;
  pattern: string;
  recommendation: string;
  shouldGoToHospital: boolean;
  totalContractions: number;
}

export interface KickCounterParams {
  date: string;
  kicks: Array<{
    time: string;
    intensity?: number;
  }>;
  pregnancyWeek: number;
}

export interface KickCounterResult {
  totalKicks: number;
  kicksPerHour: number;
  isNormalActivity: boolean;
  recommendation: string;
  nextCountTime?: string;
}

export interface NutritionParams {
  pregnancyWeek: number;
  dailyIntake: {
    calories?: number;
    protein?: number;
    calcium?: number;
    iron?: number;
    folate?: number;
    vitaminD?: number;
  };
}

export interface NutritionResult {
  recommendations: {
    calories: number;
    protein: number;
    calcium: number;
    iron: number;
    folate: number;
    vitaminD: number;
  };
  currentIntake: Record<string, number>;
  deficiencies: string[];
  suggestions: string[];
  warningsOrTips: string[];
}

export interface SymptomParams {
  symptoms: string[];
  pregnancyWeek: number;
  severity?: 'mild' | 'moderate' | 'severe';
  duration?: string;
}

export interface SymptomResult {
  normalSymptoms: string[];
  concerningSymptoms: string[];
  recommendations: string[];
  shouldSeeDoctor: boolean;
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency';
}

export interface HospitalBagItem {
  name: string;
  category: 'labor' | 'postpartum' | 'baby' | 'partner' | 'documents';
  essential: boolean;
  description?: string;
}

export interface HospitalBagResult {
  checklist: HospitalBagItem[];
  categories: Record<string, HospitalBagItem[]>;
  progress: {
    totalItems: number;
    packedItems: number;
    percentage: number;
  };
}

export interface SafeFoodsParams {
  food: string;
  trimester?: number;
  category?: string;
}

export interface SafeFoodsResult {
  food: string;
  isSafe: boolean;
  safetyLevel: 'safe' | 'moderate' | 'avoid' | 'dangerous';
  explanation: string;
  alternatives?: string[];
  recommendations?: string[];
  trimesterSpecificAdvice?: string;
}

// A2A Agent Skills definitions
export const EGSPECT_SKILLS = {
  DUE_DATE_CALCULATOR: 'due-date-calculator',
  PREGNANCY_WEEK_CALCULATOR: 'pregnancy-week-calculator', 
  BABY_NAME_GENERATOR: 'baby-name-generator',
  WEIGHT_GAIN_CALCULATOR: 'weight-gain-calculator',
  OVULATION_CALCULATOR: 'ovulation-calculator',
  BABY_COST_CALCULATOR: 'baby-cost-calculator',
  GENDER_PREDICTOR: 'gender-predictor',
  BABY_SIZE_COMPARISON: 'baby-size-comparison',
  CONTRACTION_TIMER: 'contraction-timer',
  KICK_COUNTER: 'kick-counter',
  NUTRITION_TRACKER: 'nutrition-tracker',
  SYMPTOM_CHECKER: 'symptom-checker',
  HOSPITAL_BAG_CHECKLIST: 'hospital-bag-checklist',
  SAFE_FOODS_CHECKER: 'safe-foods-checker'
} as const;