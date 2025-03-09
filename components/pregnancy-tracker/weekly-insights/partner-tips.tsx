"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from 'lucide-react';

interface PartnerTipsProps {
  tips: string;
  weeksPregnant: number;
}

const PartnerTips: React.FC<PartnerTipsProps> = ({ tips, weeksPregnant }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow mb-6">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3 mb-4">
          <div className="bg-pink-100 p-2 rounded-full">
            <Heart className="text-pink-600" size={18} />
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">Partner Tips: Week {weeksPregnant}</h3>
        </div>
        
        <div className="bg-pink-50 rounded-lg p-3 md:p-4 border border-pink-100">
          <p className="text-sm text-gray-700">{tips}</p>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-gray-800 mb-2 text-sm">General Support Tips</h4>
          <ul className="list-disc pl-5 space-y-1.5 md:space-y-2">
            <li className="text-sm text-gray-700">Be patient and understanding with mood swings and emotional changes.</li>
            <li className="text-sm text-gray-700">Help with household chores and errands to reduce her stress.</li>
            <li className="text-sm text-gray-700">Attend prenatal appointments when possible to stay involved.</li>
            <li className="text-sm text-gray-700">Learn about the pregnancy process together through books or classes.</li>
            <li className="text-sm text-gray-700">Encourage and support healthy eating and exercise habits.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnerTips; 