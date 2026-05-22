import React from 'react';
import { X } from 'lucide-react';

const TABS = [
  { id: 1, name: 'App.jsx', icon: '⚛️', modified: false },
  { id: 2, name: 'package.json', icon: '📦', modified: false },
  { id: 3, name: 'vite.config.js', icon: '⚡', modified: true },
];

export function EditorTabs({ activeTab = 1, onTabChange }) {
  return (
    <div className="flex items-center gap-0 bg-editor-darker border-b border-editor-line h-11 overflow-x-auto editor-scroll">
      {TABS.map((tab) => (
        <div
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 border-r border-editor-line cursor-pointer transition-all duration-200 flex-shrink-0 group ${
            activeTab === tab.id ? 'tab-active' : 'tab-inactive'
          }`}
        >
          <span className="text-sm">{tab.icon}</span>
          <span className={`text-xs font-medium ${activeTab === tab.id ? 'text-text-primary' : 'text-text-secondary'}`}>
            {tab.name}
          </span>
          {tab.modified && !activeTab === tab.id && (
            <div className="w-1.5 h-1.5 rounded-full bg-accent-green-bright" />
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="p-0.5 ml-1 hover:bg-editor-line rounded transition-colors opacity-0 group-hover:opacity-100"
          >
            <X size={12} className="text-text-secondary" />
          </button>
        </div>
      ))}
    </div>
  );
}
