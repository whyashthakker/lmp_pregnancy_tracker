"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  Bell, 
  Download, 
  Share, 
  Trash2, 
  Moon, 
  HelpCircle,
  Shield
} from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AppSettingsProps {
  onClearData: () => void;
}

const AppSettings: React.FC<AppSettingsProps> = ({ onClearData }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const [privacyModeEnabled, setPrivacyModeEnabled] = React.useState(false);

  const handleExportData = () => {
    const pregnancyData = localStorage.getItem('pregnancyData');
    if (!pregnancyData) {
      alert('No data to export');
      return;
    }

    // Create a blob and download it
    const blob = new Blob([pregnancyData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pregnancy-tracker-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gray-100 p-2 rounded-full">
              <Settings className="text-gray-600" size={20} />
            </div>
            <h3 className="font-medium text-gray-800">Application Settings</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Bell className="text-indigo-600" size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Appointment Reminders</h4>
                  <p className="text-sm text-gray-500">Receive notifications for upcoming appointments</p>
                </div>
              </div>
              <Switch 
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Moon className="text-purple-600" size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Dark Mode</h4>
                  <p className="text-sm text-gray-500">Use dark theme for the application</p>
                </div>
              </div>
              <Switch 
                checked={darkModeEnabled}
                onCheckedChange={setDarkModeEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="text-green-600" size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Privacy Mode</h4>
                  <p className="text-sm text-gray-500">Hide sensitive information when sharing screen</p>
                </div>
              </div>
              <Switch 
                checked={privacyModeEnabled}
                onCheckedChange={setPrivacyModeEnabled}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gray-100 p-2 rounded-full">
              <HelpCircle className="text-gray-600" size={20} />
            </div>
            <h3 className="font-medium text-gray-800">Data Management</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Download className="text-amber-600" size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Export Data</h4>
                  <p className="text-sm text-gray-500">Download your pregnancy tracking data</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleExportData}
              >
                Export
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Share className="text-purple-600" size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Share with Healthcare Provider</h4>
                  <p className="text-sm text-gray-500">Generate a report to share with your doctor</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Generate</Button>
            </div>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Trash2 className="text-red-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Clear All Data</h4>
                      <p className="text-sm text-gray-500">Delete all your pregnancy tracking data</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200">
                    Clear
                  </Button>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete all your pregnancy tracking data
                    and remove it from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onClearData} className="bg-red-500 hover:bg-red-600">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>Pregnancy Tracker v1.0.0</p>
        <p className="mt-1">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  );
};

export default AppSettings; 