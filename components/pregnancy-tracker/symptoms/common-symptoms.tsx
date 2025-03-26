"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Activity, ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CommonSymptomsProps {
  trimester: number;
}

const CommonSymptoms: React.FC<CommonSymptomsProps> = ({ trimester }) => {
  const firstTrimesterSymptoms = [
    { name: "Morning sickness", description: "Nausea and vomiting, often in the morning but can occur at any time", severity: "Common", management: "Eat small, frequent meals. Try ginger tea or crackers before getting out of bed." },
    { name: "Fatigue", description: "Extreme tiredness, especially in early pregnancy", severity: "Very common", management: "Rest when possible. Maintain a balanced diet and stay hydrated." },
    { name: "Breast tenderness", description: "Swollen, sensitive breasts", severity: "Very common", management: "Wear a supportive bra. Avoid caffeine which can increase breast tenderness." },
    { name: "Frequent urination", description: "Needing to urinate more often", severity: "Common", management: "Stay hydrated but reduce fluids before bedtime." },
    { name: "Food aversions/cravings", description: "Strong dislike or desire for certain foods", severity: "Common", management: "Follow cravings in moderation. Avoid foods that trigger nausea." },
    { name: "Mood swings", description: "Rapid changes in mood and emotions", severity: "Common", management: "Practice relaxation techniques. Talk about your feelings with supportive people." },
    { name: "Headaches", description: "Mild to moderate head pain", severity: "Common", management: "Rest in a dark, quiet room. Stay hydrated and maintain regular meals." },
    { name: "Constipation", description: "Difficulty passing stools", severity: "Common", management: "Increase fiber and water intake. Regular gentle exercise can help." },
    { name: "Bloating", description: "Feeling of fullness in the abdomen", severity: "Common", management: "Eat smaller meals. Avoid gas-producing foods like beans and carbonated drinks." },
    { name: "Mild cramping", description: "Light cramping similar to menstrual cramps", severity: "Common", management: "Rest. Use a heating pad on low setting. Contact doctor if severe or with bleeding." }
  ];

  const secondTrimesterSymptoms = [
    { name: "Back pain", description: "Pain in the lower back as your center of gravity shifts", severity: "Common", management: "Practice good posture. Use supportive shoes and consider a pregnancy support belt." },
    { name: "Round ligament pain", description: "Sharp pain or jabbing feeling in the lower abdomen or groin area", severity: "Common", management: "Change positions slowly. Avoid sudden movements. Apply warm compress." },
    { name: "Leg cramps", description: "Painful contractions in the calf muscles, often at night", severity: "Common", management: "Stretch calf muscles before bed. Stay hydrated and consider magnesium supplements (with doctor approval)." },
    { name: "Increased appetite", description: "Feeling hungrier than usual", severity: "Very common", management: "Choose nutrient-dense foods. Keep healthy snacks available." },
    { name: "Nasal congestion", description: "Stuffy nose due to increased blood volume", severity: "Common", management: "Use a humidifier. Saline nasal sprays can help." },
    { name: "Skin changes", description: "Darkening of skin (melasma), linea nigra, stretch marks", severity: "Common", management: "Use sunscreen. Moisturize skin regularly. These changes typically fade after pregnancy." },
    { name: "Braxton Hicks contractions", description: "Irregular, painless tightening of the uterus", severity: "Common", management: "Change positions. Stay hydrated. These are normal practice contractions." },
    { name: "Heartburn", description: "Burning sensation in the chest or throat", severity: "Common", management: "Eat smaller, frequent meals. Avoid spicy, fatty foods. Don't lie down right after eating." },
    { name: "Dizziness", description: "Feeling lightheaded or unsteady", severity: "Common", management: "Rise slowly from sitting or lying positions. Stay hydrated and eat regularly." },
    { name: "Increased vaginal discharge", description: "Clear or white discharge", severity: "Common", management: "Wear cotton underwear. Contact doctor if discharge has strong odor, unusual color, or causes itching." }
  ];

  const thirdTrimesterSymptoms = [
    { name: "Shortness of breath", description: "Difficulty breathing fully as baby presses against diaphragm", severity: "Very common", management: "Maintain good posture. Sleep with extra pillows to elevate upper body." },
    { name: "Swelling (edema)", description: "Fluid retention in feet, ankles, and hands", severity: "Very common", management: "Elevate feet when sitting. Avoid standing for long periods. Reduce salt intake." },
    { name: "Insomnia", description: "Difficulty sleeping due to discomfort, frequent urination, or anxiety", severity: "Very common", management: "Use pregnancy pillow. Establish bedtime routine. Avoid screens before bed." },
    { name: "Frequent urination", description: "Increased need to urinate as baby presses on bladder", severity: "Very common", management: "Plan bathroom breaks. Reduce fluids before bedtime but stay hydrated during the day." },
    { name: "Braxton Hicks contractions", description: "More frequent practice contractions", severity: "Very common", management: "Change positions. Stay hydrated. Time contractions if they become regular." },
    { name: "Pelvic pressure", description: "Feeling of heaviness in the pelvis as baby drops lower", severity: "Common", management: "Pelvic exercises. Consider a support belt. Rest frequently." },
    { name: "Backache", description: "Increased back pain due to weight and posture changes", severity: "Very common", management: "Practice good posture. Consider prenatal massage. Use heat/cold therapy." },
    { name: "Leaky breasts", description: "Colostrum (early milk) may leak from breasts", severity: "Common", management: "Use nursing pads in bra. This is normal preparation for breastfeeding." },
    { name: "Hemorrhoids", description: "Swollen veins in the rectum", severity: "Common", management: "Avoid constipation. Use witch hazel pads. Soak in warm bath." },
    { name: "Varicose veins", description: "Swollen, visible veins in legs", severity: "Common", management: "Avoid standing for long periods. Elevate legs. Consider compression stockings." }
  ];

  const [expandedSymptom, setExpandedSymptom] = React.useState<string | null>(null);

  const toggleSymptom = (symptomName: string) => {
    if (expandedSymptom === symptomName) {
      setExpandedSymptom(null);
    } else {
      setExpandedSymptom(symptomName);
    }
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow mb-6">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Activity className="text-blue-600" size={18} />
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">Common Pregnancy Symptoms</h3>
        </div>
        
        <Tabs defaultValue={trimester.toString()} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="1" className="text-xs px-1 py-1.5 md:px-2 md:py-2">First Trimester</TabsTrigger>
            <TabsTrigger value="2" className="text-xs px-1 py-1.5 md:px-2 md:py-2">Second Trimester</TabsTrigger>
            <TabsTrigger value="3" className="text-xs px-1 py-1.5 md:px-2 md:py-2">Third Trimester</TabsTrigger>
          </TabsList>
          
          {[1, 2, 3].map((trimNum) => (
            <TabsContent key={trimNum} value={trimNum.toString()} className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                {trimNum === 1 ? 
                  "First trimester (weeks 1-12) symptoms often relate to hormonal changes." :
                  trimNum === 2 ? 
                  "Second trimester (weeks 13-26) symptoms often relate to your growing baby and body changes." :
                  "Third trimester (weeks 27-40) symptoms often relate to your baby's size and preparing for birth."}
              </p>
              
              <div className="space-y-2">
                {(trimNum === 1 ? firstTrimesterSymptoms : 
                  trimNum === 2 ? secondTrimesterSymptoms : 
                  thirdTrimesterSymptoms).map((symptom, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                    <div 
                      className="flex items-center justify-between p-2 md:p-3 bg-gray-50 cursor-pointer"
                      onClick={() => toggleSymptom(symptom.name)}
                    >
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <span className="font-medium text-gray-800 text-xs md:text-sm">{symptom.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                          symptom.severity === 'Very common' ? 'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {symptom.severity}
                        </span>
                      </div>
                      {expandedSymptom === symptom.name ? 
                        <ChevronUp size={14} className="text-gray-500" /> : 
                        <ChevronDown size={14} className="text-gray-500" />
                      }
                    </div>
                    
                    {expandedSymptom === symptom.name && (
                      <div className="p-2 md:p-3 bg-white">
                        <p className="text-xs md:text-sm text-gray-700 mb-2">{symptom.description}</p>
                        <div className="mt-2">
                          <p className="text-xs font-medium text-gray-700">Management:</p>
                          <p className="text-xs text-gray-600">{symptom.management}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-3 md:mt-4 text-xs text-gray-500 italic">
                <p>
                  <strong>Note:</strong> Not everyone experiences all these symptoms, and their intensity varies. 
                  Contact your healthcare provider if symptoms are severe or concerning.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CommonSymptoms; 