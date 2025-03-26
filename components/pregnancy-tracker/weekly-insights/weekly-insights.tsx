"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Heart, Activity, Brain } from 'lucide-react';
import { WeeklyInfo } from '../types';

interface WeeklyInsightsProps {
  weeklyInfo: WeeklyInfo;
  weeksPregnant: number;
}

const WeeklyInsights: React.FC<WeeklyInsightsProps> = ({ weeklyInfo, weeksPregnant }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow mb-6">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3 mb-4">
          <div className="bg-amber-100 p-2 rounded-full">
            <Lightbulb className="text-amber-600" size={18} />
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">Week {weeksPregnant} Insights</h3>
        </div>
        
        <Tabs defaultValue="development" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="development" className="text-xs px-1 py-1.5 md:px-2 md:py-2">Development</TabsTrigger>
            <TabsTrigger value="symptoms" className="text-xs px-1 py-1.5 md:px-2 md:py-2">Symptoms</TabsTrigger>
            <TabsTrigger value="nutrition" className="text-xs px-1 py-1.5 md:px-2 md:py-2">Nutrition</TabsTrigger>
            <TabsTrigger value="exercise" className="text-xs px-1 py-1.5 md:px-2 md:py-2">Exercise</TabsTrigger>
          </TabsList>
          
          <TabsContent value="development" className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-purple-100 p-1.5 md:p-2 rounded-full">
                <Brain className="text-purple-600" size={16} />
              </div>
              <h4 className="font-medium text-purple-900 text-sm">Baby&apos;s Development</h4>
            </div>
            
            <ul className="list-disc pl-5 space-y-1.5 md:space-y-2">
              {weeklyInfo.developmentHighlights.map((highlight, index) => (
                <li key={index} className="text-sm text-gray-700">{highlight}</li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="symptoms" className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-100 p-1.5 md:p-2 rounded-full">
                <Activity className="text-blue-600" size={16} />
              </div>
              <h4 className="font-medium text-blue-900 text-sm">Common Symptoms</h4>
            </div>
            
            <p className="text-sm text-gray-700">{weeklyInfo.symptoms}</p>
          </TabsContent>
          
          <TabsContent value="nutrition" className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-red-100 p-1.5 md:p-2 rounded-full">
                <span role="img" aria-label="apple" className="text-red-600 text-base md:text-lg">🍎</span>
              </div>
              <h4 className="font-medium text-red-900 text-sm">Nutrition Focus</h4>
            </div>
            
            <p className="text-sm text-gray-700">{weeklyInfo.nutrition}</p>
          </TabsContent>
          
          <TabsContent value="exercise" className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-green-100 p-1.5 md:p-2 rounded-full">
                <Heart className="text-green-600" size={16} />
              </div>
              <h4 className="font-medium text-green-900 text-sm">Exercise Tips</h4>
            </div>
            
            <p className="text-sm text-gray-700">{weeklyInfo.exercise}</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WeeklyInsights; 