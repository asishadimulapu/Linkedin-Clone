
import React from 'react';
import { MessageCircle, UserPlus, X } from 'lucide-react';

const ConnectionsList = () => {
  const connections = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Product Manager at Google',
      avatar: '/lovable-uploads/94001092-db51-4bd0-809f-f24e29b371b9.png',
      mutualConnections: 12
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Software Engineer at Microsoft',
      avatar: '/lovable-uploads/94001092-db51-4bd0-809f-f24e29b371b9.png',
      mutualConnections: 5
    },
    {
      id: 3,
      name: 'Emily Davis',
      title: 'UX Designer at Apple',
      avatar: '/lovable-uploads/94001092-db51-4bd0-809f-f24e29b371b9.png',
      mutualConnections: 8
    },
    {
      id: 4,
      name: 'David Wilson',
      title: 'Data Scientist at Meta',
      avatar: '/lovable-uploads/94001092-db51-4bd0-809f-f24e29b371b9.png',
      mutualConnections: 3
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">People you may know</h3>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
          See all
        </button>
      </div>
      <div className="space-y-4">
        {connections.map((connection) => (
          <div key={connection.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 flex-shrink-0">
              <img 
                src={connection.avatar} 
                alt={connection.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100 truncate hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">{connection.name}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 truncate">{connection.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">{connection.mutualConnections} mutual connections</p>
              <div className="flex items-center space-x-2 mt-3">
                <button className="flex items-center space-x-1 px-4 py-1.5 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full text-xs font-medium transition-colors">
                  <UserPlus className="w-3 h-3" />
                  <span>Connect</span>
                </button>
                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors">
                  <X className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectionsList;
