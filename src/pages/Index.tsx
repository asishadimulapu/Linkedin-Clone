
import React from 'react';
import Header from '../components/Header';
import ProfileSidebar from '../components/ProfileSidebar';
import Feed from '../components/Feed';
import NewsSidebar from '../components/NewsSidebar';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        
        {/* Theme Toggle Button */}
        <div className="fixed top-20 left-4 z-50">
          <ThemeToggle />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Profile */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <ProfileSidebar />
              </div>
            </div>
            
            {/* Main Feed */}
            <div className="lg:col-span-6">
              <Feed />
            </div>
            
            {/* Right Sidebar - News */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <NewsSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
