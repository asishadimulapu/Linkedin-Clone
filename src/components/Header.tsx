
import React from 'react';
import { Search, Home, Users, Briefcase, MessageCircle, Bell, User, Grid3X3 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Search */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors cursor-pointer">
                <span className="text-white font-bold text-lg">in</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <NavItem icon={Home} label="Home" active />
            <NavItem icon={Users} label="My Network" badge="12" />
            <NavItem icon={Briefcase} label="Jobs" />
            <NavItem icon={MessageCircle} label="Messaging" badge="3" />
            <NavItem icon={Bell} label="Notifications" badge="9" />
            <NavItem icon={User} label="Me" />
            <NavItem icon={Grid3X3} label="For Business" />
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}

const NavItem = ({ icon: Icon, label, active, badge }: NavItemProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group relative py-2 hover:scale-105 transition-transform duration-200">
      <div className="relative p-1">
        <Icon className={`w-6 h-6 ${active ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'} transition-all duration-200`} />
        {badge && (
          <span className="absolute -top-1 -right-1 bg-red-500 dark:bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium shadow-sm animate-pulse">
            {badge}
          </span>
        )}
      </div>
      <span className={`text-xs mt-1 ${active ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'} hidden lg:block transition-all duration-200`}>
        {label}
      </span>
      {active && <div className="absolute bottom-0 w-full h-0.5 bg-gray-900 dark:bg-white rounded-full animate-fade-in"></div>}
    </div>
  );
};

export default Header;
