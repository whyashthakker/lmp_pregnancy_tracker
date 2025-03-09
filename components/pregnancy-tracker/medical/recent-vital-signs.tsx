"use client";

import React from 'react';
import { format, isValid, parseISO } from 'date-fns';
import { Card, CardContent } from "@/components/ui/card";
import { Activity, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { VitalSigns } from '../types';

interface RecentVitalSignsProps {
  vitalSigns: VitalSigns[];
  onDelete: (id: string) => void;
}

const RecentVitalSigns: React.FC<RecentVitalSignsProps> = ({ vitalSigns, onDelete }) => {
  // Sort vital signs by date (most recent first)
  const sortedVitalSigns = [...vitalSigns].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get only the 5 most recent vital signs
  const recentVitalSigns = sortedVitalSigns.slice(0, 5);

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
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Activity className="text-green-600" size={20} />
            </div>
            <h3 className="font-medium text-gray-800">Recent Vital Signs</h3>
          </div>
        </div>
        
        {recentVitalSigns.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            <p>No vital signs recorded yet.</p>
            <p className="text-sm mt-2">Record your vital signs to monitor your health during pregnancy.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {recentVitalSigns.map((vitalSign) => (
              <div key={vitalSign.id} className="bg-gray-50 rounded-lg p-4 border border-gray-100 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                  onClick={() => onDelete(vitalSign.id)}
                >
                  <X size={14} />
                </Button>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-gray-500">Blood Pressure</p>
                        <p className="font-medium text-gray-800">{vitalSign.bloodPressure}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Weight</p>
                        <p className="font-medium text-gray-800">{vitalSign.weight} kg</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Temperature</p>
                        <p className="font-medium text-gray-800">{vitalSign.temperature} °C</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Heart Rate</p>
                        <p className="font-medium text-gray-800">{vitalSign.heartRate} bpm</p>
                      </div>
                    </div>
                    
                    {vitalSign.note && (
                      <p className="text-sm text-gray-600 mt-2 border-t border-gray-100 pt-2">{vitalSign.note}</p>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {formatDate(vitalSign.date)}
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

export default RecentVitalSigns; 