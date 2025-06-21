
import React, { useState } from 'react';
import { Edit3, Check, X } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface EditableProfileSectionProps {
  title: string;
  value: string;
  onSave: (newValue: string) => void;
  multiline?: boolean;
  placeholder?: string;
}

const EditableProfileSection = ({ 
  title, 
  value, 
  onSave, 
  multiline = false, 
  placeholder 
}: EditableProfileSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-500 dark:text-gray-400">{title}</span>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            <Edit3 className="w-3 h-3 text-gray-500" />
          </button>
        )}
      </div>
      
      {isEditing ? (
        <div className="space-y-2">
          {multiline ? (
            <Textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder={placeholder}
              className="text-sm"
              rows={3}
            />
          ) : (
            <Input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder={placeholder}
              className="text-sm"
            />
          )}
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
            >
              <Check className="w-3 h-3" />
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
            >
              <X className="w-3 h-3" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-900 dark:text-gray-100">
          {value || `Add ${title.toLowerCase()}`}
        </p>
      )}
    </div>
  );
};

export default EditableProfileSection;
