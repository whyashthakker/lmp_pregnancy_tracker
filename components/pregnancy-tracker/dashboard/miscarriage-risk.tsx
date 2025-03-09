"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Info, Check, X } from 'lucide-react';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface StabilityFactor {
  id: string;
  name: string;
  description: string;
  positive: boolean;
  impact: 'low' | 'medium' | 'high';
  applicableTrimesters: number[];
}

interface MiscarriageRiskProps {
  weeksPregnant: number;
  hasHeartbeat: boolean;
  onHeartbeatChange?: (hasHeartbeat: boolean) => void;
}

const MiscarriageRisk: React.FC<MiscarriageRiskProps> = ({ 
  weeksPregnant, 
  hasHeartbeat,
  onHeartbeatChange 
}) => {
  // Define all possible stability factors
  const allStabilityFactors: StabilityFactor[] = [
    // Positive factors
    { 
      id: 'heartbeat', 
      name: 'Heartbeat detected', 
      description: 'Fetal heartbeat has been confirmed by ultrasound',
      positive: true,
      impact: 'high',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'normal_ultrasound', 
      name: 'Normal ultrasound', 
      description: 'Recent ultrasound showed normal development',
      positive: true,
      impact: 'high',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'normal_hormone_levels', 
      name: 'Normal hormone levels', 
      description: 'HCG and progesterone levels are within normal range',
      positive: true,
      impact: 'medium',
      applicableTrimesters: [1]
    },
    { 
      id: 'no_bleeding', 
      name: 'No vaginal bleeding', 
      description: 'Absence of vaginal bleeding is a positive sign',
      positive: true,
      impact: 'medium',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'previous_successful_pregnancy', 
      name: 'Previous successful pregnancy', 
      description: 'Having had a successful pregnancy in the past',
      positive: true,
      impact: 'medium',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'normal_anatomy_scan', 
      name: 'Normal anatomy scan', 
      description: '20-week anatomy scan showed normal development',
      positive: true,
      impact: 'high',
      applicableTrimesters: [2, 3]
    },
    { 
      id: 'normal_genetic_screening', 
      name: 'Normal genetic screening', 
      description: 'NIPT or other genetic screening tests were normal',
      positive: true,
      impact: 'medium',
      applicableTrimesters: [1, 2]
    },
    { 
      id: 'normal_blood_pressure', 
      name: 'Normal blood pressure', 
      description: 'Blood pressure readings are within normal range',
      positive: true,
      impact: 'medium',
      applicableTrimesters: [2, 3]
    },
    { 
      id: 'normal_glucose', 
      name: 'Normal glucose levels', 
      description: 'Passed glucose screening test with normal results',
      positive: true,
      impact: 'medium',
      applicableTrimesters: [2, 3]
    },
    { 
      id: 'fetal_movement', 
      name: 'Regular fetal movement', 
      description: 'Baby is moving regularly (applicable after 24 weeks)',
      positive: true,
      impact: 'high',
      applicableTrimesters: [2, 3]
    },
    
    // Negative factors
    { 
      id: 'bleeding', 
      name: 'Vaginal bleeding', 
      description: 'Experiencing vaginal bleeding or spotting',
      positive: false,
      impact: 'high',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'advanced_maternal_age', 
      name: 'Advanced maternal age', 
      description: 'Maternal age over 35 years',
      positive: false,
      impact: 'medium',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'previous_miscarriage', 
      name: 'Previous miscarriage', 
      description: 'History of one or more previous miscarriages',
      positive: false,
      impact: 'medium',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'chronic_health_condition', 
      name: 'Chronic health condition', 
      description: 'Having a chronic health condition like diabetes or thyroid disorder',
      positive: false,
      impact: 'medium',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'abnormal_ultrasound', 
      name: 'Abnormal ultrasound findings', 
      description: 'Ultrasound showed potential concerns with development',
      positive: false,
      impact: 'high',
      applicableTrimesters: [1, 2, 3]
    },
    { 
      id: 'abnormal_genetic_screening', 
      name: 'Abnormal genetic screening', 
      description: 'NIPT or other genetic screening showed potential concerns',
      positive: false,
      impact: 'high',
      applicableTrimesters: [1, 2]
    },
    { 
      id: 'high_blood_pressure', 
      name: 'High blood pressure', 
      description: 'Experiencing high blood pressure or preeclampsia',
      positive: false,
      impact: 'high',
      applicableTrimesters: [2, 3]
    },
    { 
      id: 'gestational_diabetes', 
      name: 'Gestational diabetes', 
      description: 'Diagnosed with gestational diabetes',
      positive: false,
      impact: 'medium',
      applicableTrimesters: [2, 3]
    },
    { 
      id: 'reduced_fetal_movement', 
      name: 'Reduced fetal movement', 
      description: 'Noticing reduced fetal movement (applicable after 24 weeks)',
      positive: false,
      impact: 'high',
      applicableTrimesters: [2, 3]
    }
  ];

  // Determine current trimester
  const getCurrentTrimester = (): number => {
    if (weeksPregnant < 13) return 1;
    if (weeksPregnant < 27) return 2;
    return 3;
  };
  
  const currentTrimester = getCurrentTrimester();
  
  // Filter factors applicable to current trimester
  const applicableFactors = allStabilityFactors.filter(factor => 
    factor.applicableTrimesters.includes(currentTrimester)
  );

  // State for selected factors - initialize with heartbeat if prop is true
  const [selectedFactors, setSelectedFactors] = useState<string[]>(
    hasHeartbeat ? ['heartbeat'] : []
  );
  
  // State for showing factor selection
  const [showFactorSelection, setShowFactorSelection] = useState(false);

  // Update heartbeat factor when prop changes
  useEffect(() => {
    if (hasHeartbeat && !selectedFactors.includes('heartbeat')) {
      setSelectedFactors(prev => [...prev, 'heartbeat']);
    } else if (!hasHeartbeat && selectedFactors.includes('heartbeat')) {
      setSelectedFactors(prev => prev.filter(id => id !== 'heartbeat'));
    }
  }, [hasHeartbeat, selectedFactors]);

  // Update the toggleFactor function to handle heartbeat changes
  const toggleFactor = (factorId: string, checked: boolean | "indeterminate") => {
    if (factorId === 'heartbeat' && onHeartbeatChange) {
      onHeartbeatChange(checked === true);
    }
    
    if (checked === true) {
      setSelectedFactors(prev => [...prev, factorId]);
    } else {
      setSelectedFactors(prev => prev.filter(id => id !== factorId));
    }
  };

  // Calculate base success rate based on weeks
  const getBaseSuccessRate = (): number => {
    if (weeksPregnant < 6) return 60;
    if (weeksPregnant < 8) return 75;
    if (weeksPregnant < 10) return 85;
    if (weeksPregnant < 12) return 90;
    if (weeksPregnant < 14) return 95;
    if (weeksPregnant < 20) return 98;
    return 99.5; // After 20 weeks
  };

  // Calculate adjusted success rate based on selected factors
  const calculateAdjustedSuccessRate = (): number => {
    let baseRate = getBaseSuccessRate();
    let adjustment = 0;
    
    // Get all selected factors
    const factors = applicableFactors.filter(factor => 
      selectedFactors.includes(factor.id)
    );
    
    // Apply adjustments based on factor impact and whether it's positive or negative
    factors.forEach(factor => {
      let impactValue = 0;
      
      // Determine impact value based on impact level
      switch (factor.impact) {
        case 'low':
          impactValue = 1;
          break;
        case 'medium':
          impactValue = 2;
          break;
        case 'high':
          impactValue = 4;
          break;
      }
      
      // Apply positive or negative adjustment
      if (factor.positive) {
        adjustment += impactValue;
      } else {
        adjustment -= impactValue;
      }
    });
    
    // Apply adjustment to base rate (capped between 50% and 99.9%)
    let adjustedRate = baseRate + adjustment;
    
    // Ensure rate stays within reasonable bounds
    adjustedRate = Math.max(50, Math.min(99.9, adjustedRate));
    
    return adjustedRate;
  };

  const successRate = calculateAdjustedSuccessRate();
  
  // Determine message based on success rate
  const getMessage = (): string => {
    if (successRate < 70) {
      return "Early pregnancy has natural variations in stability. Focus on self-care and regular prenatal check-ups.";
    } else if (successRate < 85) {
      return "Your pregnancy is progressing well. Each week brings increased stability.";
    } else if (successRate < 95) {
      return "Your pregnancy has reached a very stable point. Continue with regular prenatal care.";
    } else {
      return "Excellent stability! Your pregnancy is very well established at this stage.";
    }
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow mb-6">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3 mb-4">
          <div className="bg-pink-100 p-2 rounded-full">
            <Heart className="text-pink-600" size={18} />
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">Pregnancy Journey Stability</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">
                  <Info size={14} className="text-gray-400" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">
                  These are general statistics and vary based on individual factors.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Current stability rate:</span>
            <span className="font-semibold text-green-600">{successRate.toFixed(1)}%</span>
          </div>
          
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full" 
              style={{ width: `${successRate}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-700">{getMessage()}</p>
          
          {/* Selected Factors */}
          <div className="mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Factors affecting stability:</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-2 text-xs"
                onClick={() => setShowFactorSelection(!showFactorSelection)}
              >
                {showFactorSelection ? 'Hide Factors' : 'Edit Factors'}
              </Button>
            </div>
            
            {selectedFactors.length === 0 ? (
              <p className="text-xs text-gray-500 italic">No factors selected. Add factors to see how they affect stability.</p>
            ) : (
              <div className="space-y-2">
                {selectedFactors.map(factorId => {
                  const factor = applicableFactors.find(f => f.id === factorId);
                  if (!factor) return null;
                  
                  return (
                    <div 
                      key={factor.id} 
                      className={`flex items-center justify-between p-2 rounded-lg text-xs ${
                        factor.positive 
                          ? 'bg-green-50 border border-green-100' 
                          : 'bg-amber-50 border border-amber-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {factor.positive ? (
                          <Check size={14} className="text-green-600" />
                        ) : (
                          <Info size={14} className="text-amber-600" />
                        )}
                        <span className={factor.positive ? 'text-green-800' : 'text-amber-800'}>
                          {factor.name}
                        </span>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <Info size={12} className="text-gray-400" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs text-xs">{factor.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Factor Selection UI - Simplified with checkboxes */}
          {showFactorSelection && (
            <div className="mt-3 border border-gray-200 rounded-lg p-3 bg-gray-50">
              <h4 className="text-sm font-medium text-gray-800 mb-2">Select Applicable Factors</h4>
              
              {/* Positive Factors */}
              <div className="mb-3">
                <h5 className="text-xs font-medium text-green-800 mb-1.5">Positive Factors</h5>
                <div className="space-y-1.5">
                  {applicableFactors
                    .filter(factor => factor.positive)
                    .map(factor => (
                      <div key={factor.id} className="flex items-center gap-2">
                        <Checkbox 
                          id={`factor-${factor.id}`}
                          checked={selectedFactors.includes(factor.id)}
                          onCheckedChange={(checked) => toggleFactor(factor.id, checked === true)}
                        />
                        <div className="flex items-center justify-between flex-1">
                          <Label 
                            htmlFor={`factor-${factor.id}`}
                            className="text-xs text-gray-700 cursor-pointer"
                          >
                            {factor.name}
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="cursor-help">
                                  <Info size={12} className="text-gray-400" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs text-xs">{factor.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              
              <Separator className="my-2" />
              
              {/* Negative Factors */}
              <div>
                <h5 className="text-xs font-medium text-amber-800 mb-1.5">Risk Factors</h5>
                <div className="space-y-1.5">
                  {applicableFactors
                    .filter(factor => !factor.positive)
                    .map(factor => (
                      <div key={factor.id} className="flex items-center gap-2">
                        <Checkbox 
                          id={`factor-${factor.id}`}
                          checked={selectedFactors.includes(factor.id)}
                          onCheckedChange={(checked) => toggleFactor(factor.id, checked === true)}
                        />
                        <div className="flex items-center justify-between flex-1">
                          <Label 
                            htmlFor={`factor-${factor.id}`}
                            className="text-xs text-gray-700 cursor-pointer"
                          >
                            {factor.name}
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="cursor-help">
                                  <Info size={12} className="text-gray-400" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs text-xs">{factor.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-3 md:mt-4 text-xs text-gray-500 italic">
            <p>
              <strong>Note:</strong> Every pregnancy is unique. These statistics represent general patterns and not individual predictions. 
              Many factors influence pregnancy outcomes, including maternal age, health history, and lifestyle factors.
              Always consult with your healthcare provider for personalized guidance.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiscarriageRisk; 