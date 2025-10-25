import type { SymptomParams, SymptomResult } from '../types';

// Define symptom categories and their severity
const NORMAL_SYMPTOMS: Record<string, { trimesters: number[], severity: string[] }> = {
  'nausea': { trimesters: [1, 2], severity: ['mild', 'moderate'] },
  'morning sickness': { trimesters: [1, 2], severity: ['mild', 'moderate'] },
  'fatigue': { trimesters: [1, 2, 3], severity: ['mild', 'moderate'] },
  'breast tenderness': { trimesters: [1, 2], severity: ['mild', 'moderate'] },
  'frequent urination': { trimesters: [1, 3], severity: ['mild', 'moderate'] },
  'heartburn': { trimesters: [2, 3], severity: ['mild', 'moderate'] },
  'constipation': { trimesters: [1, 2, 3], severity: ['mild', 'moderate'] },
  'back pain': { trimesters: [2, 3], severity: ['mild', 'moderate'] },
  'round ligament pain': { trimesters: [2, 3], severity: ['mild', 'moderate'] },
  'swelling': { trimesters: [2, 3], severity: ['mild', 'moderate'] },
  'stretch marks': { trimesters: [2, 3], severity: ['mild'] },
  'mood swings': { trimesters: [1, 2, 3], severity: ['mild', 'moderate'] },
  'food aversions': { trimesters: [1, 2], severity: ['mild', 'moderate'] },
  'food cravings': { trimesters: [1, 2, 3], severity: ['mild', 'moderate'] },
  'difficulty sleeping': { trimesters: [1, 3], severity: ['mild', 'moderate'] },
  'shortness of breath': { trimesters: [2, 3], severity: ['mild'] },
  'braxton hicks contractions': { trimesters: [2, 3], severity: ['mild', 'moderate'] },
  'leg cramps': { trimesters: [2, 3], severity: ['mild', 'moderate'] },
  'varicose veins': { trimesters: [2, 3], severity: ['mild', 'moderate'] },
  'hemorrhoids': { trimesters: [2, 3], severity: ['mild', 'moderate'] },
  'skin changes': { trimesters: [1, 2, 3], severity: ['mild'] },
  'hair changes': { trimesters: [2, 3], severity: ['mild'] }
};

const CONCERNING_SYMPTOMS: string[] = [
  'severe nausea',
  'persistent vomiting',
  'severe headache',
  'vision changes',
  'severe abdominal pain',
  'chest pain',
  'difficulty breathing',
  'severe swelling',
  'high fever',
  'chills',
  'burning urination',
  'severe back pain',
  'regular contractions',
  'fluid leakage',
  'decreased fetal movement',
  'severe mood changes',
  'thoughts of self-harm'
];

const EMERGENCY_SYMPTOMS: string[] = [
  'heavy bleeding',
  'severe cramping',
  'signs of preeclampsia',
  'severe headache with vision changes',
  'chest pain with shortness of breath',
  'high fever over 101°F',
  'severe abdominal pain',
  'water breaking',
  'no fetal movement',
  'thoughts of harming self or baby',
  'severe allergic reaction',
  'fainting',
  'seizures'
];

export function checkSymptoms(params: SymptomParams): SymptomResult {
  const { symptoms, pregnancyWeek, severity = 'mild', duration } = params;
  
  // Determine current trimester
  let trimester: number;
  if (pregnancyWeek <= 12) trimester = 1;
  else if (pregnancyWeek <= 27) trimester = 2;
  else trimester = 3;
  
  const normalSymptoms: string[] = [];
  const concerningSymptoms: string[] = [];
  let urgencyLevel: 'low' | 'medium' | 'high' | 'emergency' = 'low';
  let shouldSeeDoctor = false;
  
  // Analyze each symptom
  for (const symptom of symptoms) {
    const lowerSymptom = symptom.toLowerCase();
    
    // Check for emergency symptoms
    if (EMERGENCY_SYMPTOMS.some(emergency => lowerSymptom.includes(emergency))) {
      concerningSymptoms.push(symptom);
      urgencyLevel = 'emergency';
      shouldSeeDoctor = true;
      continue;
    }
    
    // Check for concerning symptoms
    if (CONCERNING_SYMPTOMS.some(concerning => lowerSymptom.includes(concerning))) {
      concerningSymptoms.push(symptom);
      if (urgencyLevel !== 'emergency') {
        urgencyLevel = severity === 'severe' ? 'high' : 'medium';
      }
      shouldSeeDoctor = true;
      continue;
    }
    
    // Check normal symptoms
    let isNormal = false;
    for (const [normalSymptom, data] of Object.entries(NORMAL_SYMPTOMS)) {
      if (lowerSymptom.includes(normalSymptom.toLowerCase())) {
        if (data.trimesters.includes(trimester) && data.severity.includes(severity)) {
          normalSymptoms.push(symptom);
          isNormal = true;
          break;
        }
      }
    }
    
    // If not categorized as normal, consider it concerning
    if (!isNormal) {
      concerningSymptoms.push(symptom);
      if (urgencyLevel === 'low') {
        urgencyLevel = severity === 'severe' ? 'high' : 'medium';
      }
      shouldSeeDoctor = true;
    }
  }
  
  // Generate recommendations
  const recommendations: string[] = [];
  
  if (urgencyLevel === 'emergency') {
    recommendations.push("🚨 SEEK EMERGENCY MEDICAL ATTENTION IMMEDIATELY");
    recommendations.push("Call emergency services or go to the nearest emergency room");
    recommendations.push("Do not wait - these symptoms require immediate evaluation");
  } else if (urgencyLevel === 'high') {
    recommendations.push("Contact your healthcare provider immediately");
    recommendations.push("If after hours, call the emergency line or consider urgent care");
    recommendations.push("These symptoms need prompt medical evaluation");
  } else if (urgencyLevel === 'medium') {
    recommendations.push("Schedule an appointment with your healthcare provider within 24-48 hours");
    recommendations.push("Monitor symptoms closely and call if they worsen");
    recommendations.push("Keep a symptom diary to discuss with your doctor");
  } else {
    recommendations.push("These are common pregnancy symptoms");
    recommendations.push("Continue regular prenatal care");
    recommendations.push("Contact your provider if symptoms worsen or persist");
  }
  
  // Add general recommendations based on normal symptoms
  if (normalSymptoms.length > 0) {
    if (normalSymptoms.some(s => s.toLowerCase().includes('nausea'))) {
      recommendations.push("For nausea: Try small, frequent meals and ginger");
    }
    if (normalSymptoms.some(s => s.toLowerCase().includes('fatigue'))) {
      recommendations.push("For fatigue: Ensure adequate rest and proper nutrition");
    }
    if (normalSymptoms.some(s => s.toLowerCase().includes('back pain'))) {
      recommendations.push("For back pain: Practice good posture and gentle stretching");
    }
    if (normalSymptoms.some(s => s.toLowerCase().includes('heartburn'))) {
      recommendations.push("For heartburn: Eat smaller meals and avoid spicy foods");
    }
  }
  
  // Add duration-based recommendations
  if (duration && duration.includes('week')) {
    recommendations.push("Persistent symptoms lasting weeks should be discussed with your provider");
  }
  
  return {
    normalSymptoms,
    concerningSymptoms,
    recommendations,
    shouldSeeDoctor,
    urgencyLevel
  };
}