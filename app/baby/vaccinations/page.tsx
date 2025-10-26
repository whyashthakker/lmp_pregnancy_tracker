"use client";

import { useState, useEffect } from "react";
import { format, addDays, addWeeks, addMonths, differenceInDays } from "date-fns";
import { Check, Clock, AlertTriangle, Shield, Syringe, Calendar } from "lucide-react";

interface Vaccination {
  id: string;
  name: string;
  fullName: string;
  description: string;
  protectsAgainst: string[];
  schedulePoints: {
    ageWeeks?: number;
    ageMonths?: number;
    ageDays?: number;
    label: string;
    isRequired: boolean;
    notes?: string;
  }[];
  importance: "critical" | "recommended" | "optional";
  sideEffects: string[];
  contraindications?: string[];
}

const vaccinations: Vaccination[] = [
  {
    id: "hepatitis-b",
    name: "Hepatitis B",
    fullName: "Hepatitis B Vaccine",
    description: "Protects against hepatitis B virus infection that can cause liver damage",
    protectsAgainst: ["Hepatitis B", "Liver disease", "Liver cancer"],
    schedulePoints: [
      { ageDays: 0, label: "Birth (within 24 hours)", isRequired: true, notes: "Given in hospital before discharge" },
      { ageMonths: 1, label: "1-2 months", isRequired: true },
      { ageMonths: 6, label: "6-18 months", isRequired: true, notes: "Completes initial series" }
    ],
    importance: "critical",
    sideEffects: ["Soreness at injection site", "Low-grade fever", "Fussiness"],
    contraindications: ["Severe illness", "Previous severe allergic reaction"]
  },
  {
    id: "dtap",
    name: "DTaP",
    fullName: "Diphtheria, Tetanus, and Pertussis",
    description: "Protects against three serious bacterial diseases",
    protectsAgainst: ["Diphtheria", "Tetanus (lockjaw)", "Pertussis (whooping cough)"],
    schedulePoints: [
      { ageMonths: 2, label: "2 months", isRequired: true },
      { ageMonths: 4, label: "4 months", isRequired: true },
      { ageMonths: 6, label: "6 months", isRequired: true },
      { ageMonths: 15, label: "15-18 months", isRequired: true },
      { ageMonths: 48, label: "4-6 years", isRequired: true, notes: "Before school entry" }
    ],
    importance: "critical",
    sideEffects: ["Redness/swelling at site", "Fever", "Fussiness", "Tiredness"],
    contraindications: ["Severe illness", "Previous severe reaction", "Progressive neurologic disorder"]
  },
  {
    id: "hib",
    name: "Hib",
    fullName: "Haemophilus Influenzae Type B",
    description: "Prevents serious bacterial infections including meningitis",
    protectsAgainst: ["Meningitis", "Pneumonia", "Epiglottitis", "Sepsis"],
    schedulePoints: [
      { ageMonths: 2, label: "2 months", isRequired: true },
      { ageMonths: 4, label: "4 months", isRequired: true },
      { ageMonths: 6, label: "6 months", isRequired: true, notes: "May not be needed depending on vaccine brand" },
      { ageMonths: 12, label: "12-15 months", isRequired: true }
    ],
    importance: "critical",
    sideEffects: ["Redness at injection site", "Fever", "Irritability"],
    contraindications: ["Severe illness", "Age under 6 weeks"]
  },
  {
    id: "pneumococcal",
    name: "PCV13",
    fullName: "Pneumococcal Conjugate Vaccine",
    description: "Protects against pneumococcal bacteria that cause serious infections",
    protectsAgainst: ["Pneumonia", "Meningitis", "Blood infections", "Ear infections"],
    schedulePoints: [
      { ageMonths: 2, label: "2 months", isRequired: true },
      { ageMonths: 4, label: "4 months", isRequired: true },
      { ageMonths: 6, label: "6 months", isRequired: true },
      { ageMonths: 12, label: "12-15 months", isRequired: true }
    ],
    importance: "critical",
    sideEffects: ["Redness/swelling at site", "Fever", "Decreased appetite", "Fussiness"],
    contraindications: ["Severe illness", "Previous severe allergic reaction"]
  },
  {
    id: "polio",
    name: "IPV",
    fullName: "Inactivated Poliovirus Vaccine",
    description: "Prevents polio, a disease that can cause paralysis",
    protectsAgainst: ["Polio", "Paralysis", "Death from polio"],
    schedulePoints: [
      { ageMonths: 2, label: "2 months", isRequired: true },
      { ageMonths: 4, label: "4 months", isRequired: true },
      { ageMonths: 6, label: "6-18 months", isRequired: true },
      { ageMonths: 48, label: "4-6 years", isRequired: true }
    ],
    importance: "critical",
    sideEffects: ["Soreness at injection site", "Redness", "Low-grade fever"],
    contraindications: ["Severe illness", "Allergy to vaccine components"]
  },
  {
    id: "rotavirus",
    name: "RV",
    fullName: "Rotavirus Vaccine",
    description: "Prevents rotavirus infection that causes severe diarrhea and dehydration",
    protectsAgainst: ["Rotavirus diarrhea", "Severe dehydration", "Hospitalization"],
    schedulePoints: [
      { ageMonths: 2, label: "2 months", isRequired: true, notes: "Oral vaccine (by mouth)" },
      { ageMonths: 4, label: "4 months", isRequired: true },
      { ageMonths: 6, label: "6 months", isRequired: true, notes: "May not be needed depending on vaccine type" }
    ],
    importance: "recommended",
    sideEffects: ["Mild diarrhea", "Vomiting", "Fussiness", "Loss of appetite"],
    contraindications: ["Severe illness", "Immunodeficiency", "Previous intussusception"]
  },
  {
    id: "mmr",
    name: "MMR",
    fullName: "Measles, Mumps, and Rubella",
    description: "Protects against three viral diseases",
    protectsAgainst: ["Measles", "Mumps", "Rubella (German measles)"],
    schedulePoints: [
      { ageMonths: 12, label: "12-15 months", isRequired: true },
      { ageMonths: 48, label: "4-6 years", isRequired: true }
    ],
    importance: "critical",
    sideEffects: ["Fever", "Mild rash", "Swollen glands", "Joint pain"],
    contraindications: ["Pregnancy", "Immunodeficiency", "Recent blood transfusion", "Severe illness"]
  },
  {
    id: "varicella",
    name: "Varicella",
    fullName: "Chickenpox Vaccine",
    description: "Prevents chickenpox, a highly contagious viral infection",
    protectsAgainst: ["Chickenpox", "Shingles later in life", "Serious complications"],
    schedulePoints: [
      { ageMonths: 12, label: "12-15 months", isRequired: true },
      { ageMonths: 48, label: "4-6 years", isRequired: true }
    ],
    importance: "recommended",
    sideEffects: ["Soreness at injection site", "Fever", "Mild rash"],
    contraindications: ["Pregnancy", "Immunodeficiency", "Severe illness"]
  },
  {
    id: "hepatitis-a",
    name: "Hepatitis A",
    fullName: "Hepatitis A Vaccine",
    description: "Protects against hepatitis A virus infection",
    protectsAgainst: ["Hepatitis A", "Liver infection", "Jaundice"],
    schedulePoints: [
      { ageMonths: 12, label: "12-23 months", isRequired: true },
      { ageMonths: 18, label: "18-23 months", isRequired: true, notes: "Second dose 6-18 months after first" }
    ],
    importance: "recommended",
    sideEffects: ["Soreness at injection site", "Headache", "Loss of appetite"],
    contraindications: ["Severe illness", "Previous severe allergic reaction"]
  },
  {
    id: "meningococcal",
    name: "MenACWY",
    fullName: "Meningococcal Conjugate Vaccine",
    description: "Protects against certain types of meningococcal disease",
    protectsAgainst: ["Meningitis", "Sepsis", "Death from meningococcal disease"],
    schedulePoints: [
      { ageMonths: 132, label: "11-12 years", isRequired: true },
      { ageMonths: 192, label: "16 years", isRequired: true, notes: "Booster dose" }
    ],
    importance: "recommended",
    sideEffects: ["Redness at injection site", "Headache", "Fatigue"],
    contraindications: ["Severe illness", "Previous severe allergic reaction"]
  },
  {
    id: "hpv",
    name: "HPV",
    fullName: "Human Papillomavirus Vaccine",
    description: "Prevents certain cancers caused by HPV",
    protectsAgainst: ["Cervical cancer", "Other HPV-related cancers", "Genital warts"],
    schedulePoints: [
      { ageMonths: 132, label: "11-12 years", isRequired: true, notes: "Series of 2-3 doses" },
      { ageMonths: 138, label: "6 months later", isRequired: true }
    ],
    importance: "recommended",
    sideEffects: ["Pain at injection site", "Headache", "Fatigue", "Nausea"],
    contraindications: ["Pregnancy", "Severe illness", "Previous severe allergic reaction"]
  }
];

interface VaccinationStatus {
  vaccinationId: string;
  schedulePointIndex: number;
  status: "completed" | "pending" | "overdue";
  completedDate?: string;
  notes?: string;
}

interface VaccinationInfo {
  vaccination: Vaccination;
  schedulePoint: Vaccination['schedulePoints'][0];
  scheduleIndex: number;
  dueDate: Date;
  status: "upcoming" | "due" | "overdue" | "completed";
  daysUntilDue: number;
  isComplete: boolean;
}

export default function BabyVaccinationPage() {
  const [birthDate, setBirthDate] = useState<string>("");
  const [savedBirthDate, setSavedBirthDate] = useState<Date | null>(null);
  const [vaccinationStatuses, setVaccinationStatuses] = useState<VaccinationStatus[]>([]);

  // Load saved data from localStorage
  useEffect(() => {
    const savedBirth = localStorage.getItem("babyBirthDate");
    if (savedBirth) {
      const parsedDate = new Date(savedBirth);
      setSavedBirthDate(parsedDate);
      setBirthDate(format(parsedDate, "yyyy-MM-dd"));
    }

    const savedStatuses = localStorage.getItem("vaccinationStatuses");
    if (savedStatuses) {
      setVaccinationStatuses(JSON.parse(savedStatuses));
    }
  }, []);

  const handleSaveBirthDate = () => {
    if (birthDate) {
      const date = new Date(birthDate);
      setSavedBirthDate(date);
      localStorage.setItem("babyBirthDate", date.toISOString());
    }
  };

  const calculateDueDate = (schedulePoint: Vaccination['schedulePoints'][0], birthDate: Date): Date => {
    if (schedulePoint.ageDays !== undefined) {
      return addDays(birthDate, schedulePoint.ageDays);
    } else if (schedulePoint.ageWeeks !== undefined) {
      return addWeeks(birthDate, schedulePoint.ageWeeks);
    } else if (schedulePoint.ageMonths !== undefined) {
      return addMonths(birthDate, schedulePoint.ageMonths);
    }
    return birthDate;
  };

  const getVaccinationInfo = (): VaccinationInfo[] => {
    if (!savedBirthDate) return [];

    const today = new Date();
    const allVaccinations: VaccinationInfo[] = [];

    vaccinations.forEach(vaccination => {
      vaccination.schedulePoints.forEach((schedulePoint, scheduleIndex) => {
        const dueDate = calculateDueDate(schedulePoint, savedBirthDate);
        const daysUntilDue = differenceInDays(dueDate, today);
        
        const existingStatus = vaccinationStatuses.find(
          status => status.vaccinationId === vaccination.id && status.schedulePointIndex === scheduleIndex
        );

        let status: VaccinationInfo['status'];
        if (existingStatus?.status === "completed") {
          status = "completed";
        } else if (daysUntilDue < -30) {
          status = "overdue";
        } else if (daysUntilDue <= 7) {
          status = "due";
        } else {
          status = "upcoming";
        }

        allVaccinations.push({
          vaccination,
          schedulePoint,
          scheduleIndex,
          dueDate,
          status,
          daysUntilDue,
          isComplete: existingStatus?.status === "completed"
        });
      });
    });

    return allVaccinations.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  };

  const toggleVaccinationStatus = (vaccinationId: string, scheduleIndex: number) => {
    const existingStatusIndex = vaccinationStatuses.findIndex(
      status => status.vaccinationId === vaccinationId && status.schedulePointIndex === scheduleIndex
    );

    let newStatuses: VaccinationStatus[];
    
    if (existingStatusIndex >= 0) {
      const existingStatus = vaccinationStatuses[existingStatusIndex];
      if (existingStatus.status === "completed") {
        // Remove completed status
        newStatuses = vaccinationStatuses.filter((_, index) => index !== existingStatusIndex);
      } else {
        // Mark as completed
        newStatuses = [...vaccinationStatuses];
        newStatuses[existingStatusIndex] = {
          ...existingStatus,
          status: "completed",
          completedDate: format(new Date(), "yyyy-MM-dd")
        };
      }
    } else {
      // Add new completed status
      newStatuses = [...vaccinationStatuses, {
        vaccinationId,
        schedulePointIndex: scheduleIndex,
        status: "completed",
        completedDate: format(new Date(), "yyyy-MM-dd")
      }];
    }

    setVaccinationStatuses(newStatuses);
    localStorage.setItem("vaccinationStatuses", JSON.stringify(newStatuses));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "border-green-400 bg-green-50";
      case "due": return "border-yellow-400 bg-yellow-50";
      case "overdue": return "border-red-400 bg-red-50";
      case "upcoming": return "border-gray-300 bg-gray-50";
      default: return "border-gray-300 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string, isComplete: boolean) => {
    if (isComplete) return <Check className="w-5 h-5 text-green-600" />;
    
    switch (status) {
      case "due": return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case "overdue": return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "upcoming": return <Clock className="w-5 h-5 text-gray-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "critical": return "bg-red-100 text-red-800";
      case "recommended": return "bg-blue-100 text-blue-800";
      case "optional": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDaysUntilDue = (days: number): string => {
    if (days === 0) return "Due today";
    if (days === 1) return "Due tomorrow";
    if (days > 1) return `Due in ${days} days`;
    if (days === -1) return "1 day overdue";
    return `${Math.abs(days)} days overdue`;
  };

  const vaccinationInfo = getVaccinationInfo();
  const dueVaccinations = vaccinationInfo.filter(info => info.status === "due" && !info.isComplete);
  const overdueVaccinations = vaccinationInfo.filter(info => info.status === "overdue" && !info.isComplete);
  const upcomingVaccinations = vaccinationInfo.filter(info => info.status === "upcoming" && !info.isComplete).slice(0, 6);
  const completedVaccinations = vaccinationInfo.filter(info => info.isComplete);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Baby Vaccination Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your baby protected! Track all recommended vaccinations with personalized schedules, 
            due date reminders, and completion tracking.
          </p>
        </div>

        {/* Birth Date Input */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Setup Your Baby&apos;s Vaccination Schedule</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                Baby&apos;s Date of Birth
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                max={format(new Date(), "yyyy-MM-dd")}
              />
            </div>
            <button
              onClick={handleSaveBirthDate}
              disabled={!birthDate}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Save & Track Vaccinations
            </button>
          </div>
          {savedBirthDate && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-green-700">
                ✅ Tracking vaccinations for baby born on {format(savedBirthDate, "MMMM d, yyyy")}
              </p>
              <p className="text-sm text-green-600 mt-1">
                {completedVaccinations.length} of {vaccinationInfo.length} vaccinations completed
              </p>
            </div>
          )}
        </div>

        {savedBirthDate && (
          <>
            {/* Overdue Vaccinations */}
            {overdueVaccinations.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                  <AlertTriangle className="mr-3" />
                  Overdue Vaccinations - Schedule Immediately!
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800">
                    <strong>Important:</strong> These vaccinations are overdue. Please contact your pediatrician 
                    to schedule these important immunizations as soon as possible.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {overdueVaccinations.map((info) => (
                    <div
                      key={`${info.vaccination.id}-${info.scheduleIndex}`}
                      className={`border-2 rounded-xl p-6 ${getStatusColor(info.status)}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{info.vaccination.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(info.vaccination.importance)}`}>
                              {info.vaccination.importance}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{info.schedulePoint.label}</p>
                          <p className="text-red-600 font-medium">{formatDaysUntilDue(info.daysUntilDue)}</p>
                        </div>
                        <button
                          onClick={() => toggleVaccinationStatus(info.vaccination.id, info.scheduleIndex)}
                          className={`p-2 rounded-full transition-colors ${
                            info.isComplete 
                              ? "bg-green-100 hover:bg-green-200" 
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                          title={info.isComplete ? "Mark as incomplete" : "Mark as completed"}
                        >
                          {getStatusIcon(info.status, info.isComplete)}
                        </button>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{info.vaccination.description}</p>
                      
                      <div className="bg-white bg-opacity-70 rounded-lg p-3">
                        <h4 className="font-semibold text-gray-900 mb-1">Protects Against:</h4>
                        <p className="text-sm text-gray-600">
                          {info.vaccination.protectsAgainst.join(", ")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Due Vaccinations */}
            {dueVaccinations.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6 flex items-center">
                  <Syringe className="mr-3" />
                  Due Now - Schedule These Vaccinations
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {dueVaccinations.map((info) => (
                    <div
                      key={`${info.vaccination.id}-${info.scheduleIndex}`}
                      className={`border-2 rounded-xl p-6 ${getStatusColor(info.status)}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{info.vaccination.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(info.vaccination.importance)}`}>
                              {info.vaccination.importance}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{info.schedulePoint.label}</p>
                          <p className="text-yellow-600 font-medium">{formatDaysUntilDue(info.daysUntilDue)}</p>
                        </div>
                        <button
                          onClick={() => toggleVaccinationStatus(info.vaccination.id, info.scheduleIndex)}
                          className={`p-2 rounded-full transition-colors ${
                            info.isComplete 
                              ? "bg-green-100 hover:bg-green-200" 
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                          title={info.isComplete ? "Mark as incomplete" : "Mark as completed"}
                        >
                          {getStatusIcon(info.status, info.isComplete)}
                        </button>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{info.vaccination.description}</p>
                      
                      <div className="bg-white bg-opacity-70 rounded-lg p-3 mb-3">
                        <h4 className="font-semibold text-gray-900 mb-1">Protects Against:</h4>
                        <p className="text-sm text-gray-600">
                          {info.vaccination.protectsAgainst.join(", ")}
                        </p>
                      </div>

                      {info.schedulePoint.notes && (
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-blue-700">
                            <strong>Note:</strong> {info.schedulePoint.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Vaccinations */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
                <Calendar className="mr-3" />
                Upcoming Vaccinations
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {upcomingVaccinations.map((info) => (
                  <div
                    key={`${info.vaccination.id}-${info.scheduleIndex}`}
                    className={`border-2 rounded-xl p-6 ${getStatusColor(info.status)}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{info.vaccination.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(info.vaccination.importance)}`}>
                            {info.vaccination.importance}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{info.schedulePoint.label}</p>
                        <p className="text-sm text-blue-600 font-medium">
                          Due: {format(info.dueDate, "MMM d, yyyy")}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleVaccinationStatus(info.vaccination.id, info.scheduleIndex)}
                        className={`p-2 rounded-full transition-colors ${
                          info.isComplete 
                            ? "bg-green-100 hover:bg-green-200" 
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        title={info.isComplete ? "Mark as incomplete" : "Mark as completed"}
                      >
                        {getStatusIcon(info.status, info.isComplete)}
                      </button>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-3">{info.vaccination.description}</p>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-blue-700">
                        <strong>Protects against:</strong> {info.vaccination.protectsAgainst.slice(0, 2).join(", ")}
                        {info.vaccination.protectsAgainst.length > 2 && "..."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Vaccinations */}
            {completedVaccinations.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-green-600 mb-6 flex items-center">
                  <Check className="mr-3" />
                  Completed Vaccinations ({completedVaccinations.length})
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {completedVaccinations.map((info) => (
                    <div
                      key={`${info.vaccination.id}-${info.scheduleIndex}`}
                      className="border-2 border-green-200 bg-green-50 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900">{info.vaccination.name}</h3>
                          <p className="text-sm text-gray-600">{info.schedulePoint.label}</p>
                          <p className="text-xs text-green-600 mt-1">
                            ✓ Completed
                          </p>
                        </div>
                        <button
                          onClick={() => toggleVaccinationStatus(info.vaccination.id, info.scheduleIndex)}
                          className="p-1 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                          title="Mark as incomplete"
                        >
                          <Check className="w-4 h-4 text-green-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complete Schedule Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Vaccination Schedule</h2>
              <div className="space-y-4">
                {vaccinationInfo.map((info) => (
                  <div 
                    key={`${info.vaccination.id}-${info.scheduleIndex}`}
                    className={`border-2 rounded-lg p-4 transition-all ${getStatusColor(info.status)}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-gray-900">
                            {info.vaccination.name} - {info.schedulePoint.label}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(info.vaccination.importance)}`}>
                            {info.vaccination.importance}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            info.isComplete ? "bg-green-100 text-green-800" :
                            info.status === "overdue" ? "bg-red-100 text-red-800" :
                            info.status === "due" ? "bg-yellow-100 text-yellow-800" :
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {info.isComplete ? "completed" : info.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{info.vaccination.fullName}</p>
                        <p className="text-xs text-gray-500">
                          Due: {format(info.dueDate, "MMM d, yyyy")}
                          {!info.isComplete && ` (${formatDaysUntilDue(info.daysUntilDue)})`}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleVaccinationStatus(info.vaccination.id, info.scheduleIndex)}
                        className={`p-2 rounded-full transition-colors ${
                          info.isComplete 
                            ? "bg-green-100 hover:bg-green-200" 
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        title={info.isComplete ? "Mark as incomplete" : "Mark as completed"}
                      >
                        {getStatusIcon(info.status, info.isComplete)}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {!savedBirthDate && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Tracking?</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter your baby&apos;s birth date above to create a personalized vaccination schedule 
              with due date reminders and progress tracking.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}