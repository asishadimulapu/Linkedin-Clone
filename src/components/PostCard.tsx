
import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, Repeat2, Send, MoreHorizontal, X } from 'lucide-react';

interface PostCardProps {
  author: {
    name: string;
    title: string;
    time: string;
    avatar: string;
  };
  content: string;
  likes: number;
  comments: number;
  reposts: number;
  timestamp?: number;
  showCloseButton?: boolean;
  image?: string;
}

const PostCard = ({ author, content, likes, comments, reposts, showCloseButton, image }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6 hover:shadow-md transition-all duration-200">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
              {author.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              {author.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center space-x-1 mt-1">
              <span>{author.time}</span>
              <span>•</span>
              <span>🌐</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 hover:scale-105">
            <MoreHorizontal className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" />
          </button>
          {showCloseButton && (
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 hover:scale-105">
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors" />
            </button>
          )}
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm mb-4">
          {content}
        </p>
        {image && (
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Engagement Stats */}
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-1">
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-sm">
              <ThumbsUp className="w-3 h-3 text-white fill-current" />
            </div>
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-sm">
              <span className="text-white text-xs">❤️</span>
            </div>
            <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-sm">
              <span className="text-white text-xs">👏</span>
            </div>
          </div>
          <span className="ml-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">
            {likeCount.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
            {comments} comments
          </span>
          <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
            {reposts} reposts
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-4 gap-2">
        <ActionButton 
          icon={ThumbsUp} 
          text="Like" 
          onClick={handleLike}
          active={isLiked}
        />
        <ActionButton icon={MessageCircle} text="Comment" />
        <ActionButton icon={Repeat2} text="Repost" />
        <ActionButton icon={Send} text="Send" />
      </div>

      {/* Comment Input */}
      <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="Your avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
        />
      </div>
    </div>
  );
};

interface ActionButtonProps {
  icon: React.ElementType;
  text: string;
  onClick?: () => void;
  active?: boolean;
}

const ActionButton = ({ icon: Icon, text, onClick, active }: ActionButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
        active 
          ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20' 
          : 'text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
};

export default PostCard;
