import React from 'react';
import { X, Minimize2, Maximize2 } from 'lucide-react';

export function TitleBar({ projectName = 'ali-code' }) {
  return (
    <div className="flex items-center justify-between h-10 bg-editor-darker border-b border-editor-line px-4 select-none">
      {/* Left: Logo and Title */}
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-accent-green rounded flex items-center justify-center">
          <span className="text-black text-xs font-bold">A</span>
        </div>
        <span className="text-text-primary text-sm font-medium">Ali Code</span>
        <span className="text-text-muted text-xs ml-2">—</span>
        <span className="text-text-secondary text-xs ml-2">{projectName}</span>
      </div>

      {/* Right: Window Controls */}
      <div className="flex items-center gap-2">
        <button className="p-1 text-text-secondary hover:text-text-primary transition-colors duration-150">
          <Minimize2 size={16} />
        </button>
        <button className="p-1 text-text-secondary hover:text-text-primary transition-colors duration-150">
          <Maximize2 size={16} />
        </button>
        <button className="p-1 text-text-secondary hover:text-red-500 transition-colors duration-150">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
