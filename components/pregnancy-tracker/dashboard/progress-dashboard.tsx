"use client";

import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BabySize } from '../types';
import Image from 'next/image';

interface ProgressDashboardProps {
  weeksPregnant: number;
  daysRemaining: number;
  progressPercentage: number;
  lmpDate: Date;
  dueDate: Date;
  babySize: BabySize;
  trimester: number;
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  weeksPregnant,
  daysRemaining,
  progressPercentage,
  lmpDate,
  dueDate,
  babySize,
  trimester
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
      {/* Current Progress Card */}
      <Card className="border-none shadow-md md:col-span-1 hover:shadow-lg transition-shadow">
        <CardContent className="p-4 md:p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-full">
                <Calendar className="text-indigo-600" size={20} />
              </div>
              <h3 className="font-medium text-gray-800">Pregnancy Timeline</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Current</span>
                <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                  Week {weeksPregnant}, Day {daysRemaining}
                </Badge>
              </div>
              
              <Progress value={progressPercentage} className="h-2.5 bg-gray-100" />
              
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Week 0</span>
                <span>Week 20</span>
                <span>Week 40</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="bg-indigo-50 rounded-lg p-2 md:p-3 text-center">
                  <p className="text-xs text-gray-500">First Day</p>
                  <p className="font-medium text-gray-800 text-xs md:text-sm">{format(lmpDate, 'MMM d')}</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-2 md:p-3 text-center">
                  <p className="text-xs text-gray-500">Today</p>
                  <p className="font-medium text-gray-800 text-xs md:text-sm">{format(new Date(), 'MMM d')}</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-2 md:p-3 text-center">
                  <p className="text-xs text-gray-500">Due Date</p>
                  <p className="font-medium text-gray-800 text-xs md:text-sm">{format(dueDate, 'MMM d')}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 text-xs md:text-sm">Current Trimester:</span>
                  <Badge className={`ml-2 
                    ${trimester === 1 ? 'bg-blue-100 text-blue-800' : 
                    trimester === 2 ? 'bg-purple-100 text-purple-800' : 
                    'bg-pink-100 text-pink-800'}`}>
                    {trimester === 1 ? 'First' : trimester === 2 ? 'Second' : 'Third'}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Baby Size Card */}
      <Card className="border-none shadow-md md:col-span-2 hover:shadow-lg transition-shadow">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-100 p-2 rounded-full">
                  <span role="img" aria-label="baby" className="text-pink-600 text-xl">👶</span>
                </div>
                <h3 className="font-medium text-gray-800">Baby Size</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl font-semibold text-gray-800">Size of a {babySize.size}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">Length</p>
                    <p className="font-medium text-gray-800">{babySize.length}</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">Weight</p>
                    <p className="font-medium text-gray-800">{babySize.weight}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">Development</p>
                  <p className="text-sm text-gray-700">{babySize.description}</p>
                </div>
                
                <div>
                  <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">Key Milestones</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {babySize.milestones.map((milestone, index) => (
                      <li key={index} className="text-sm text-gray-700">{milestone}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {babySize.imageUrl && (
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="bg-pink-50 p-4 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                  <Image 
                    src={babySize.imageUrl} 
                    alt={`Baby at week ${weeksPregnant}`} 
                    width={160}
                    height={160}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressDashboard; 