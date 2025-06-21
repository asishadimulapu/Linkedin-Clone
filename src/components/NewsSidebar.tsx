
import React from 'react';
import RecentActivities from './RecentActivities';
import ConnectionsList from './ConnectionsList';

const NewsSidebar = () => {
  return (
    <div className="space-y-4">
      <RecentActivities />
      <ConnectionsList />
    </div>
  );
};

export default NewsSidebar;
