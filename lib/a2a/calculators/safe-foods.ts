import type { SafeFoodsParams, SafeFoodsResult } from '../types';

interface FoodSafetyData {
  isSafe: boolean;
  safetyLevel: 'safe' | 'moderate' | 'avoid' | 'dangerous';
  explanation: string;
  alternatives?: string[];
  recommendations?: string[];
  trimesterSpecific?: Record<number, string>;
}

const FOOD_SAFETY_DATABASE: Record<string, FoodSafetyData> = {
  // Seafood
  'salmon': {
    isSafe: true,
    safetyLevel: 'safe',
    explanation: 'Salmon is safe and highly recommended during pregnancy. Rich in omega-3 fatty acids.',
    recommendations: ['Choose wild-caught when possible', 'Cook to 145°F internal temperature', 'Limit to 2-3 servings per week']
  },
  'tuna': {
    isSafe: false,
    safetyLevel: 'moderate',
    explanation: 'High mercury content. Light tuna is safer than albacore.',
    alternatives: ['Salmon', 'Sardines', 'Anchovies'],
    recommendations: ['If consumed, limit to 6oz per week of light tuna', 'Avoid albacore tuna']
  },
  'sushi': {
    isSafe: false,
    safetyLevel: 'avoid',
    explanation: 'Raw fish poses risk of bacterial and parasitic infections.',
    alternatives: ['Cooked sushi rolls', 'Vegetarian sushi', 'Cooked fish'],
    recommendations: ['Choose fully cooked options', 'Avoid raw fish entirely']
  },
  'shellfish': {
    isSafe: true,
    safetyLevel: 'moderate',
    explanation: 'Safe when fully cooked. High risk when raw or undercooked.',
    recommendations: ['Cook to 145°F', 'Avoid raw oysters, clams, mussels', 'Ensure shells open during cooking']
  },
  
  // Dairy
  'soft cheese': {
    isSafe: false,
    safetyLevel: 'avoid',
    explanation: 'Unpasteurized soft cheeses may contain Listeria bacteria.',
    alternatives: ['Hard cheeses', 'Pasteurized soft cheeses', 'Cream cheese'],
    recommendations: ['Check labels for pasteurization', 'Avoid brie, camembert, feta unless pasteurized']
  },
  'milk': {
    isSafe: true,
    safetyLevel: 'safe',
    explanation: 'Pasteurized milk is safe and provides essential calcium and protein.',
    recommendations: ['Choose pasteurized milk only', 'Aim for 3 servings daily', 'Consider low-fat options']
  },
  'yogurt': {
    isSafe: true,
    safetyLevel: 'safe',
    explanation: 'Excellent source of probiotics, calcium, and protein.',
    recommendations: ['Choose pasteurized varieties', 'Greek yogurt provides extra protein', 'Avoid added sugars when possible']
  },
  
  // Meat
  'deli meat': {
    isSafe: false,
    safetyLevel: 'avoid',
    explanation: 'Risk of Listeria contamination from cold cuts.',
    alternatives: ['Freshly cooked meat', 'Hot sandwiches', 'Roasted chicken breast'],
    recommendations: ['Heat deli meat to steaming hot if consumed', 'Avoid eating cold']
  },
  'hot dogs': {
    isSafe: false,
    safetyLevel: 'moderate',
    explanation: 'Risk of Listeria. Safe only when heated to steaming.',
    recommendations: ['Heat until steaming hot', 'Avoid eating cold', 'Choose nitrate-free options when possible']
  },
  'beef': {
    isSafe: true,
    safetyLevel: 'safe',
    explanation: 'Safe when cooked to proper temperature. Good source of iron and protein.',
    recommendations: ['Cook to 160°F ground beef, 145°F steaks', 'Choose lean cuts', 'Avoid rare or medium-rare']
  },
  
  // Eggs
  'raw eggs': {
    isSafe: false,
    safetyLevel: 'dangerous',
    explanation: 'High risk of Salmonella infection.',
    alternatives: ['Pasteurized eggs', 'Fully cooked eggs'],
    recommendations: ['Cook eggs until yolks are firm', 'Avoid homemade mayonnaise, eggnog']
  },
  'eggs': {
    isSafe: true,
    safetyLevel: 'safe',
    explanation: 'Excellent protein source when fully cooked.',
    recommendations: ['Cook until both white and yolk are firm', 'Avoid runny yolks', 'Pasteurized eggs are safest']
  },
  
  // Beverages
  'coffee': {
    isSafe: true,
    safetyLevel: 'moderate',
    explanation: 'Safe in moderation. High caffeine intake may increase miscarriage risk.',
    recommendations: ['Limit to 200mg caffeine daily (about 1 cup)', 'Consider decaf alternatives'],
    trimesterSpecific: {
      1: 'Be extra cautious in first trimester - consider reducing intake',
      2: 'Moderate intake is generally safe',
      3: 'Monitor for sleep disruption'
    }
  },
  'alcohol': {
    isSafe: false,
    safetyLevel: 'dangerous',
    explanation: 'No safe amount during pregnancy. Can cause fetal alcohol syndrome.',
    alternatives: ['Sparkling water with fruit', 'Mocktails', 'Herbal teas'],
    recommendations: ['Avoid completely', 'Seek support if needed to quit']
  },
  'herbal tea': {
    isSafe: true,
    safetyLevel: 'moderate',
    explanation: 'Some herbs are safe, others should be avoided.',
    recommendations: ['Ginger and peppermint are generally safe', 'Avoid chamomile in large amounts', 'Consult provider about specific herbs']
  },
  
  // Fruits and Vegetables
  'unwashed produce': {
    isSafe: false,
    safetyLevel: 'avoid',
    explanation: 'May harbor harmful bacteria and parasites.',
    recommendations: ['Wash all fruits and vegetables thoroughly', 'Use produce brush for firm items', 'Avoid pre-cut fruits from questionable sources']
  },
  'sprouts': {
    isSafe: false,
    safetyLevel: 'avoid',
    explanation: 'High risk of bacterial contamination.',
    alternatives: ['Cooked sprouts', 'Other fresh vegetables'],
    recommendations: ['Avoid raw sprouts entirely', 'Cooked sprouts are safe']
  },
  
  // Other
  'pate': {
    isSafe: false,
    safetyLevel: 'avoid',
    explanation: 'Risk of Listeria contamination.',
    alternatives: ['Hummus', 'Avocado spread', 'Cream cheese'],
    recommendations: ['Avoid all types of pate', 'Choose safer spreads']
  },
  'honey': {
    isSafe: true,
    safetyLevel: 'safe',
    explanation: 'Safe for pregnant women. Botulism risk only affects infants under 1 year.',
    recommendations: ['Use in moderation due to high sugar content']
  }
};

export function checkFoodSafety(params: SafeFoodsParams): SafeFoodsResult {
  const { food, trimester } = params;
  
  const lowerFood = food.toLowerCase();
  
  // Try to find exact match first
  let foodData = FOOD_SAFETY_DATABASE[lowerFood];
  
  // If no exact match, search for partial matches
  if (!foodData) {
    for (const [key, data] of Object.entries(FOOD_SAFETY_DATABASE)) {
      if (lowerFood.includes(key) || key.includes(lowerFood)) {
        foodData = data;
        break;
      }
    }
  }
  
  // If still no match, provide general guidance
  if (!foodData) {
    return {
      food,
      isSafe: true,
      safetyLevel: 'moderate',
      explanation: `No specific safety data available for "${food}". General pregnancy food safety applies.`,
      recommendations: [
        'Ensure food is fresh and properly cooked',
        'Wash thoroughly if raw',
        'Avoid if unpasteurized or from unreliable sources',
        'When in doubt, consult your healthcare provider'
      ]
    };
  }
  
  let trimesterSpecificAdvice: string | undefined;
  if (trimester && foodData.trimesterSpecific) {
    trimesterSpecificAdvice = foodData.trimesterSpecific[trimester];
  }
  
  return {
    food,
    isSafe: foodData.isSafe,
    safetyLevel: foodData.safetyLevel,
    explanation: foodData.explanation,
    alternatives: foodData.alternatives,
    recommendations: foodData.recommendations,
    trimesterSpecificAdvice
  };
}