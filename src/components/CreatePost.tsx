
import React, { useState } from 'react';
import { Video, Image, FileText, Calendar, MoreHorizontal, Sparkles } from 'lucide-react';

const CreatePost = () => {
  const [postText, setPostText] = useState('');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
            alt="Your avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <button 
          className="flex-1 text-left px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 font-medium group"
          onClick={() => {}}
        >
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <span>Start a post, try writing with AI</span>
          </div>
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <PostOption icon={Image} text="Media" color="text-blue-600 dark:text-blue-400" />
        <PostOption icon={Calendar} text="Event" color="text-orange-600 dark:text-orange-400" />
        <PostOption icon={FileText} text="Write article" color="text-red-600 dark:text-red-400" />
        <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-105">
          <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors" />
        </button>
      </div>
    </div>
  );
};

interface PostOptionProps {
  icon: React.ElementType;
  text: string;
  color: string;
}

const PostOption = ({ icon: Icon, text, color }: PostOptionProps) => {
  return (
    <button className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 hover:scale-[1.02] group">
      <Icon className={`w-5 h-5 ${color} group-hover:scale-110 transition-transform`} />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
        {text}
      </span>
    </button>
  );
};

export default CreatePost;
