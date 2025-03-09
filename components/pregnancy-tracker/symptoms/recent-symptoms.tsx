"use client";

import React from 'react';
import { format, isValid, parseISO } from 'date-fns';
import { Card, CardContent } from "@/components/ui/card";
import { Activity, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SymptomEntry } from '../types';

interface RecentSymptomsProps {
  symptoms: SymptomEntry[];
  onDeleteSymptom: (id: string) => void;
}

const RecentSymptoms: React.FC<RecentSymptomsProps> = ({ symptoms, onDeleteSymptom }) => {
  // Sort symptoms by date (most recent first)
  const sortedSymptoms = [...symptoms].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get only the 5 most recent symptoms
  const recentSymptoms = sortedSymptoms.slice(0, 5);

  // Function to get severity color
  const getSeverityColor = (severity: number) => {
    if (severity <= 3) return 'bg-green-100 text-green-800';
    if (severity <= 6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  // Safe date formatting function
  const formatDate = (dateString: string): string => {
    try {
      const date = parseISO(dateString);
      if (!isValid(date)) {
        return 'Invalid date';
      }
      return format(date, 'MMM d, yyyy');
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow mb-6">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Activity className="text-blue-600" size={18} />
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">Recent Symptoms</h3>
        </div>
        
        {recentSymptoms.length === 0 ? (
          <div className="text-center py-4 md:py-6 text-gray-500">
            <p className="text-sm">No symptoms recorded yet.</p>
            <p className="text-xs mt-1 md:mt-2">Track your symptoms to monitor your pregnancy health.</p>
          </div>
        ) : (
          <div className="space-y-2 md:space-y-3">
            {recentSymptoms.map((symptom) => (
              <div key={symptom.id} className="bg-gray-50 rounded-lg p-3 md:p-4 border border-gray-100 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-1 right-1 md:top-2 md:right-2 h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                  onClick={() => onDeleteSymptom(symptom.id)}
                >
                  <X size={14} />
                </Button>
                
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex items-center gap-2 pr-6">
                    <span className="font-medium text-gray-800 text-sm">{symptom.symptom}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${getSeverityColor(symptom.severity)}`}>
                      {symptom.severity <= 3 ? 'Mild' : symptom.severity <= 6 ? 'Moderate' : 'Severe'}
                    </span>
                  </div>
                  
                  {symptom.notes && (
                    <p className="text-xs text-gray-600 mt-1">{symptom.notes}</p>
                  )}
                  
                  <div className="text-xs text-gray-500 mt-1">
                    {formatDate(symptom.date)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentSymptoms; 