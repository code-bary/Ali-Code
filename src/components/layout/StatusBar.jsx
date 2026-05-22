import React from 'react';
import { AlertCircle, GitBranch, Zap } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="flex items-center justify-between h-8 bg-editor-darker border-t border-editor-line px-4 select-none">
      {/* Left Status */}
      <div className="flex items-center gap-6 text-xs">
        {/* Git Branch */}
        <div className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
          <GitBranch size={12} />
          <span>main</span>
        </div>

        {/* Problems/Errors */}
        <div className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
          <AlertCircle size={12} />
          <span>0</span>
        </div>
      </div>

      {/* Right Status */}
      <div className="flex items-center gap-6 text-xs text-text-secondary">
        {/* Prettier */}
        <div className="flex items-center gap-1.5 hover:text-text-primary transition-colors cursor-pointer">
          <Zap size={12} />
          <span>Prettier</span>
        </div>

        {/* Encoding */}
        <span className="hover:text-text-primary transition-colors cursor-pointer">UTF-8</span>

        {/* Line/Column */}
        <span className="hover:text-text-primary transition-colors cursor-pointer">Ln 28, Col 5</span>

        {/* Language */}
        <span className="px-2 py-1 hover:bg-editor-line rounded transition-colors cursor-pointer">
          JavaScript JSX
        </span>
      </div>
    </div>
  );
}
