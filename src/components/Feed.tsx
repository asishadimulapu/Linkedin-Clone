import React, { useState } from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';

const Feed = () => {
  const [sortBy, setSortBy] = useState<'top' | 'recent'>('top');

  const allPosts = [
    {
      author: {
        name: "Sarah Johnson",
        title: "Product Manager at Microsoft",
        time: "3h",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      content: "Just launched our new feature that improves user engagement by 40%! 🚀 The key was listening to our users and iterating quickly. Big thanks to our amazing engineering team for making this possible. Sometimes the simplest solutions have the biggest impact. #ProductManagement #Innovation #Teamwork",
      likes: 128,
      comments: 24,
      reposts: 18,
      timestamp: Date.now() - 10800000, // 3 hours ago
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
    },
    {
      author: {
        name: "Alex Chen",
        title: "Software Engineer at Google",
        time: "2d",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      content: "Sharing some insights from our recent tech talk on machine learning optimization. The future of AI is not just about bigger models, but smarter algorithms. Here are 3 key takeaways: 1) Efficiency matters more than complexity 2) Real-world data beats perfect lab conditions 3) User experience should drive technical decisions. What are your thoughts on the current AI landscape? #MachineLearning #AI #TechTalk",
      likes: 89,
      comments: 31,
      reposts: 22,
      timestamp: Date.now() - 172800000, // 2 days ago
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      author: {
        name: "Maria Rodriguez",
        title: "UX Designer at Adobe",
        time: "5h",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      content: "Design thinking workshop completed! 🎨 Spent the last 3 days with an amazing team solving real user problems. The power of empathy-driven design never ceases to amaze me. We went from 'users don't understand our product' to 'our product doesn't understand users' - and that shift changed everything. #UXDesign #DesignThinking #UserExperience",
      likes: 203,
      comments: 45,
      reposts: 37,
      timestamp: Date.now() - 18000000, // 5 hours ago
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      author: {
        name: "David Kim",
        title: "Data Scientist at Netflix",
        time: "1w",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      content: "Data storytelling is an art form. 📊 Just presented our quarterly insights to the leadership team, and the response was incredible. The secret? Start with the story, not the data. People remember narratives, not numbers. Here's my framework: 1) Hook with a surprising insight 2) Build context with clear visuals 3) End with actionable recommendations. #DataScience #Analytics #Storytelling",
      likes: 156,
      comments: 28,
      reposts: 41,
      timestamp: Date.now() - 604800000, // 1 week ago
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      author: {
        name: "Jennifer Wang",
        title: "Marketing Director at Tesla",
        time: "1d",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      content: "Excited to share my journey in digital marketing! 📈 Started from managing small campaigns to leading a team of 15 marketers. The key lessons I've learned: 1) Always test your assumptions 2) Data-driven decisions win over gut feelings 3) Customer feedback is gold 4) Consistency builds trust. To all aspiring marketers - your first campaign won't be perfect, but every experiment makes you better! #DigitalMarketing #Leadership #GrowthMindset",
      likes: 92,
      comments: 18,
      reposts: 12,
      timestamp: Date.now() - 86400000, // 1 day ago
      showCloseButton: true
    }
  ];

  const sortedPosts = [...allPosts].sort((a, b) => {
    if (sortBy === 'recent') {
      return b.timestamp - a.timestamp;
    } else {
      // Sort by engagement (likes + comments + reposts)
      const aEngagement = a.likes + a.comments + a.reposts;
      const bEngagement = b.likes + b.comments + b.reposts;
      return bEngagement - aEngagement;
    }
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'top' | 'recent')}
              className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-transparent border-none focus:outline-none dark:bg-gray-800 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <option value="top" className="bg-white dark:bg-gray-800">Top</option>
              <option value="recent" className="bg-white dark:bg-gray-800">Recent</option>
            </select>
          </div>
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1 mx-4"></div>
          <div className="text-xs text-gray-500 dark:text-gray-500">
            {sortedPosts.length} posts
          </div>
        </div>
      </div>
      
      <CreatePost />
      
      {sortedPosts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default Feed;
