import type { WeightGainParams, WeightGainResult } from '../types';

export function calculateWeightGain(params: WeightGainParams): WeightGainResult {
  const { 
    prePregnancyWeight, 
    height, 
    currentWeek, 
    currentWeight, 
    unit = 'metric' 
  } = params;
  
  // Convert to metric if needed
  let weightKg = prePregnancyWeight;
  let heightCm = height;
  let currentWeightKg = currentWeight;
  
  if (unit === 'imperial') {
    weightKg = prePregnancyWeight * 0.453592; // lbs to kg
    heightCm = height * 2.54; // inches to cm
    if (currentWeight) {
      currentWeightKg = currentWeight * 0.453592;
    }
  }
  
  // Calculate BMI
  const heightM = heightCm / 100;
  const preBMI = weightKg / (heightM * heightM);
  
  // Determine BMI category and recommended weight gain
  let bmiCategory: string;
  let recommendedGainMinKg: number;
  let recommendedGainMaxKg: number;
  
  if (preBMI < 18.5) {
    bmiCategory = 'Underweight';
    recommendedGainMinKg = 12.5;
    recommendedGainMaxKg = 18;
  } else if (preBMI < 25) {
    bmiCategory = 'Normal weight';
    recommendedGainMinKg = 11.5;
    recommendedGainMaxKg = 16;
  } else if (preBMI < 30) {
    bmiCategory = 'Overweight';
    recommendedGainMinKg = 7;
    recommendedGainMaxKg = 11.5;
  } else {
    bmiCategory = 'Obese';
    recommendedGainMinKg = 5;
    recommendedGainMaxKg = 9;
  }
  
  // Calculate weekly recommendation (most gain happens after 12 weeks)
  let weeklyRecommendationKg: number;
  if (currentWeek <= 12) {
    // First trimester: 0.5-2 kg total
    weeklyRecommendationKg = 0.1;
  } else {
    // Second and third trimester
    if (preBMI < 18.5) {
      weeklyRecommendationKg = 0.5;
    } else if (preBMI < 25) {
      weeklyRecommendationKg = 0.4;
    } else if (preBMI < 30) {
      weeklyRecommendationKg = 0.3;
    } else {
      weeklyRecommendationKg = 0.2;
    }
  }
  
  // Calculate current gain if current weight provided
  let currentGainKg: number | undefined;
  let isOnTrack: boolean | undefined;
  
  if (currentWeightKg) {
    currentGainKg = currentWeightKg - weightKg;
    
    // Calculate expected gain for current week
    let expectedMinGain: number;
    let expectedMaxGain: number;
    
    if (currentWeek <= 12) {
      expectedMinGain = 0.5;
      expectedMaxGain = 2;
    } else {
      const weeksAfter12 = currentWeek - 12;
      expectedMinGain = 0.5 + (weeksAfter12 * weeklyRecommendationKg * 0.8);
      expectedMaxGain = 2 + (weeksAfter12 * weeklyRecommendationKg * 1.2);
    }
    
    isOnTrack = currentGainKg >= expectedMinGain && currentGainKg <= expectedMaxGain;
  }
  
  // Generate advice
  let advice: string;
  if (isOnTrack === true) {
    advice = "Your weight gain is on track! Continue with your healthy eating and exercise routine.";
  } else if (isOnTrack === false) {
    if (currentGainKg! < 0) {
      advice = "You've lost weight during pregnancy. Please consult your healthcare provider for guidance.";
    } else if (currentGainKg! > (recommendedGainMaxKg * currentWeek / 40)) {
      advice = "Your weight gain is higher than recommended. Focus on nutritious foods and regular exercise.";
    } else {
      advice = "Your weight gain is lower than recommended. Ensure you're eating enough nutritious calories.";
    }
  } else {
    advice = `Aim for ${recommendedGainMinKg}-${recommendedGainMaxKg}kg total weight gain. Gain about ${weeklyRecommendationKg}kg per week after the first trimester.`;
  }
  
  // Convert back to original units if needed
  let recommendedGainMin = recommendedGainMinKg;
  let recommendedGainMax = recommendedGainMaxKg;
  let weeklyRecommendation = weeklyRecommendationKg;
  let currentGain = currentGainKg;
  
  if (unit === 'imperial') {
    recommendedGainMin = recommendedGainMinKg * 2.20462; // kg to lbs
    recommendedGainMax = recommendedGainMaxKg * 2.20462;
    weeklyRecommendation = weeklyRecommendationKg * 2.20462;
    if (currentGain) {
      currentGain = currentGain * 2.20462;
    }
  }
  
  return {
    preBMI: Math.round(preBMI * 10) / 10,
    bmiCategory,
    recommendedGainMin: Math.round(recommendedGainMin * 10) / 10,
    recommendedGainMax: Math.round(recommendedGainMax * 10) / 10,
    currentGain: currentGain ? Math.round(currentGain * 10) / 10 : undefined,
    weeklyRecommendation: Math.round(weeklyRecommendation * 10) / 10,
    isOnTrack,
    advice
  };
}