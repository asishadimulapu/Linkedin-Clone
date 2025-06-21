
import React from 'react';
import { Eye, MessageSquare, ThumbsUp, Users, TrendingUp, UserPlus } from 'lucide-react';

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      type: 'profile_view',
      icon: Eye,
      text: 'Your profile was viewed by 5 people',
      time: '2 hours ago',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 2,
      type: 'post_engagement',
      icon: ThumbsUp,
      text: 'Your post received 12 likes',
      time: '4 hours ago',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 3,
      type: 'comment',
      icon: MessageSquare,
      text: 'Sarah commented on your article',
      time: '1 day ago',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      id: 4,
      type: 'connection',
      icon: UserPlus,
      text: 'You have 3 new connection requests',
      time: '2 days ago',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 5,
      type: 'analytics',
      icon: TrendingUp,
      text: 'Your post impressions increased by 25%',
      time: '3 days ago',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Recent Activities</h3>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
          See all
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors cursor-pointer">
            <div className={`p-2 rounded-full ${activity.bgColor}`}>
              <activity.icon className={`w-4 h-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-gray-100 font-medium mb-1">{activity.text}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
