import React, { useState } from 'react';
import { User, Users, Eye, Bookmark, Users2, TrendingUp } from 'lucide-react';
import EditableProfileSection from './EditableProfileSection';

const ProfileSidebar = () => {
  const [profileData, setProfileData] = useState({
    name: 'Asish Adimulapu',
    headline: 'Aspiring Full Stack AI/ML Developer | Passionate About Technology & Innovation',
    location: 'Hyderabad, Telangana, India',
    education: 'Anurag University'
  });

  const updateProfileField = (field: keyof typeof profileData, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600"></div>
        <div className="px-6 pb-6 -mt-10 relative">
          <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-800 mb-4 overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <EditableProfileSection
            title="Name"
            value={profileData.name}
            onSave={(value) => updateProfileField('name', value)}
            placeholder="Enter your name"
          />
          
          <EditableProfileSection
            title="Headline"
            value={profileData.headline}
            onSave={(value) => updateProfileField('headline', value)}
            multiline={true}
            placeholder="Describe what you do"
          />
          
          <EditableProfileSection
            title="Location"
            value={profileData.location}
            onSave={(value) => updateProfileField('location', value)}
            placeholder="Enter your location"
          />
          
          <EditableProfileSection
            title="Education"
            value={profileData.education}
            onSave={(value) => updateProfileField('education', value)}
            placeholder="Enter your education"
          />
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
            <div className="flex justify-between items-center mb-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Profile viewers</span>
              </div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">19</span>
            </div>
            <div className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Post impressions</span>
              </div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">370</span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Access exclusive tools & insights</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Try Premium for ₹0</span>
              <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">1 month free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="space-y-1">
          <QuickLink icon={Bookmark} text="Saved items" />
          <QuickLink icon={Users} text="Groups" />
          <QuickLink icon={Users2} text="Newsletters" />
          <QuickLink icon={Eye} text="Events" />
        </div>
      </div>
    </div>
  );
};

interface QuickLinkProps {
  icon: React.ElementType;
  text: string;
}

const QuickLink = ({ icon: Icon, text }: QuickLinkProps) => {
  return (
    <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-3 -m-3 rounded-lg transition-colors">
      <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
};

export default ProfileSidebar;
