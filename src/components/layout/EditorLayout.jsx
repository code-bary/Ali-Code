import React, { useState } from 'react';
import { TitleBar } from './TitleBar';
import { StatusBar } from './StatusBar';
import { ActivityBar } from '../sidebar/ActivityBar';
import { FileExplorer } from '../sidebar/FileExplorer';
import { EditorTabs } from '../editor/EditorTabs';
import { Editor } from '../editor/Editor';
import { Terminal } from '../terminal/Terminal';

export function EditorLayout() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [activeEditor, setActiveEditor] = useState(1);
  const [terminalHeight, setTerminalHeight] = useState(200);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const container = document.getElementById('editor-main');
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const newHeight = containerRect.bottom - e.clientY;
    
    if (newHeight > 100 && newHeight < containerRect.height - 100) {
      setTerminalHeight(newHeight);
    }
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="flex flex-col w-full h-full bg-black">
      {/* Title Bar */}
      <TitleBar projectName="ali-code" />

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Sidebar */}
        <div className="w-64 bg-editor-darker border-r border-editor-line flex-shrink-0">
          {activeTab === 'explorer' && <FileExplorer />}
          {activeTab === 'search' && (
            <div className="flex flex-col items-center justify-center h-full text-text-muted text-sm">
              Search functionality
            </div>
          )}
          {activeTab === 'git' && (
            <div className="flex flex-col items-center justify-center h-full text-text-muted text-sm">
              Source Control
            </div>
          )}
          {activeTab === 'run' && (
            <div className="flex flex-col items-center justify-center h-full text-text-muted text-sm">
              Run & Debug
            </div>
          )}
          {activeTab === 'extensions' && (
            <div className="flex flex-col items-center justify-center h-full text-text-muted text-sm">
              Extensions
            </div>
          )}
        </div>

        {/* Editor Area */}
        <div id="editor-main" className="flex flex-1 flex-col overflow-hidden bg-editor-bg">
          {/* Editor Tabs */}
          <EditorTabs activeTab={activeEditor} onTabChange={setActiveEditor} />

          {/* Editor + Terminal Split */}
          <div className="flex flex-1 overflow-hidden flex-col">
            {/* Editor */}
            <div className="flex-1 overflow-hidden">
              <Editor />
            </div>

            {/* Resize Handle */}
            <div
              onMouseDown={handleMouseDown}
              className={`h-1 bg-editor-line hover:bg-accent-green/50 cursor-row-resize transition-colors ${
                isDragging ? 'bg-accent-green-bright' : ''
              }`}
              title="Drag to resize terminal"
            />

            {/* Terminal */}
            <div style={{ height: `${terminalHeight}px` }} className="flex-shrink-0 overflow-hidden">
              <Terminal />
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}
