import React, { useState } from 'react';
import {
  FileText,
  Search,
  GitBranch,
  Play,
  Puzzle,
  Settings,
} from 'lucide-react';

const ACTIVITY_ITEMS = [
  { id: 'explorer', icon: FileText, label: 'Explorer', tooltip: 'Explorer (Ctrl+B)' },
  { id: 'search', icon: Search, label: 'Search', tooltip: 'Search (Ctrl+Shift+F)' },
  { id: 'git', icon: GitBranch, label: 'Source Control', tooltip: 'Source Control (Ctrl+Shift+G)' },
  { id: 'run', icon: Play, label: 'Run & Debug', tooltip: 'Run and Debug (Ctrl+Shift+D)' },
  { id: 'extensions', icon: Puzzle, label: 'Extensions', tooltip: 'Extensions (Ctrl+Shift+X)' },
];

const BOTTOM_ITEMS = [
  { id: 'settings', icon: Settings, label: 'Settings', tooltip: 'Settings (Ctrl+,)' },
];

export function ActivityBar({ activeTab, onTabChange }) {
  return (
    <div className="flex flex-col items-center justify-between h-full w-16 bg-editor-darker border-r border-editor-line py-2">
      {/* Top Activity Items */}
      <div className="flex flex-col gap-2">
        {ACTIVITY_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              title={item.tooltip}
              className="relative flex items-center justify-center w-12 h-12 transition-all duration-200 group"
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-green-bright rounded-r" />
              )}
              
              {/* Icon */}
              <Icon
                size={20}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-text-primary'
                    : 'text-text-muted group-hover:text-text-secondary'
                }`}
              />
              
              {/* Tooltip */}
              <div className="absolute left-16 px-2 py-1 bg-black border border-editor-line rounded text-xs text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {item.tooltip}
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Activity Items */}
      <div className="flex flex-col gap-2 border-t border-editor-line pt-2">
        {BOTTOM_ITEMS.map((item) => {
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              title={item.tooltip}
              className="relative flex items-center justify-center w-12 h-12 transition-all duration-200 group"
            >
              <Icon
                size={20}
                className="text-text-muted group-hover:text-text-secondary transition-colors duration-200"
              />
              
              {/* Tooltip */}
              <div className="absolute left-16 px-2 py-1 bg-black border border-editor-line rounded text-xs text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {item.tooltip}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
