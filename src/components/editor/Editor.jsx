import React from 'react';

const CODE_SAMPLE = `import React, { useState } from 'react';
import { Button } from './components/Button';

export function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Ali Code
      </h1>
      
      <div className="space-y-4">
        <p className="text-lg text-gray-600">
          Count: <span className="font-semibold">{count}</span>
        </p>
        
        <Button 
          onClick={handleIncrement}
          className="px-6 py-3 bg-accent-green hover:bg-accent-green-bright"
        >
          Increment
        </Button>
      </div>
    </div>
  );
}`;

const LINES = CODE_SAMPLE.split('\n');

export function Editor() {
  const [highlightedLine, setHighlightedLine] = React.useState(6);

  return (
    <div className="flex-1 flex bg-editor-bg">
      {/* Line Numbers and Code */}
      <div className="flex flex-1 overflow-hidden">
        {/* Line Numbers */}
        <div className="bg-editor-darker border-r border-editor-line py-4 px-3 select-none">
          {LINES.map((_, i) => (
            <div
              key={i}
              className={`text-xs font-mono h-6 flex items-center transition-colors ${
                highlightedLine === i + 1
                  ? 'text-accent-green bg-editor-line/30'
                  : 'text-text-muted'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto editor-scroll">
          <div className="p-4 font-mono text-sm text-text-primary">
            {LINES.map((line, i) => {
              let highlightedContent = line;
              
              // Simple syntax highlighting patterns
              if (line.includes('import') || line.includes('from')) {
                highlightedContent = line
                  .replace(/import/g, '<span style="color: #c586c0">import</span>')
                  .replace(/from/g, '<span style="color: #c586c0">from</span>')
                  .replace(/'{[^}]*}'/g, (m) => `<span style="color: #ce9178">${m}</span>`);
              }
              
              return (
                <div
                  key={i}
                  className={`h-6 flex items-center hover:bg-editor-line/20 transition-colors group ${
                    highlightedLine === i + 1 ? 'bg-editor-line/40' : ''
                  }`}
                  onMouseEnter={() => setHighlightedLine(i + 1)}
                >
                  <span className="whitespace-pre">{line || ' '}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Minimap */}
      <div className="w-16 bg-editor-darker border-l border-editor-line hidden lg:block overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-editor-line/10 to-transparent relative">
          {/* Minimap placeholder - subtle code visualization */}
          {LINES.map((line, i) => (
            <div
              key={i}
              className={`h-1 w-full transition-colors ${
                i % 3 === 0
                  ? 'bg-editor-line/20'
                  : i % 3 === 1
                    ? 'bg-editor-line/10'
                    : 'bg-transparent'
              }`}
            />
          ))}
          
          {/* Visible area indicator */}
          <div className="absolute inset-0 bg-accent-green/5 border border-accent-green/20 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
