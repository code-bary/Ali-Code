import React, { useState } from 'react';
import { X, ChevronDown, Plus } from 'lucide-react';

const TERMINAL_OUTPUT = [
  { type: 'command', text: '> npm run dev' },
  { type: 'output', text: '' },
  { type: 'output', text: '  VITE v5.0.0  ready in 234 ms' },
  { type: 'output', text: '' },
  { type: 'output', text: '  ➜  Local:   http://localhost:5173/' },
  { type: 'output', text: '  ➜  Network: use --host to expose' },
  { type: 'output', text: '' },
  { type: 'output', text: '  press h + enter to show help' },
  { type: 'output', text: '' },
  { type: 'command', text: '> npm run build' },
  { type: 'output', text: '' },
  { type: 'output', text: '  vite v5.0.0 building for production...' },
  { type: 'output', text: '  ✓ 1234 modules transformed.' },
  { type: 'output', text: '  dist/index.html                   0.46 kb' },
  { type: 'output', text: '  dist/assets/index-a1b2c3d4.js   45.32 kb' },
  { type: 'output', text: '  dist/assets/index-e5f6g7h8.css  12.15 kb' },
];

export function Terminal() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex flex-col h-full bg-black border-t border-editor-line">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-editor-darker border-b border-editor-line h-11">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer hover:text-accent-green-bright transition-colors">
            <span className="text-xs font-medium text-text-secondary">TERMINAL</span>
            <span className="text-xs text-text-muted">bash</span>
          </div>
          <div className="flex gap-1 border-l border-editor-line pl-4">
            <button className="p-1 hover:bg-editor-line rounded transition-colors" title="New Terminal">
              <Plus size={14} className="text-text-secondary hover:text-text-primary" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-editor-line rounded transition-colors" title="Close">
            <X size={14} className="text-text-secondary hover:text-text-primary" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto terminal-scroll p-4 font-mono text-xs">
        {TERMINAL_OUTPUT.map((line, i) => (
          <div key={i} className={`whitespace-pre-wrap break-words leading-relaxed`}>
            {line.type === 'command' ? (
              <span className="text-accent-green-bright">{line.text}</span>
            ) : (
              <span className="text-text-secondary">{line.text}</span>
            )}
          </div>
        ))}
        
        {/* Blinking cursor */}
        <div className="inline-block w-1.5 h-5 bg-text-primary/50 ml-1 animate-pulse" />
      </div>
    </div>
  );
}
