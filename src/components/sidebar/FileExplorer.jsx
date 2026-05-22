import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  File,
  FileJson,
  FileCode,
  Package,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

const FILE_STRUCTURE = [
  {
    id: 'src',
    name: 'src',
    type: 'folder',
    expanded: true,
    children: [
      {
        id: 'components',
        name: 'components',
        type: 'folder',
        expanded: true,
        children: [
          {
            id: 'pages',
            name: 'pages',
            type: 'folder',
            expanded: false,
            children: [
              { id: 'home', name: 'Home.jsx', type: 'file', icon: 'jsx' },
              { id: 'about', name: 'About.jsx', type: 'file', icon: 'jsx' },
            ],
          },
          { id: 'layout', name: 'Layout.jsx', type: 'file', icon: 'jsx' },
          { id: 'nav', name: 'Navigation.jsx', type: 'file', icon: 'jsx' },
        ],
      },
      {
        id: 'assets',
        name: 'assets',
        type: 'folder',
        expanded: false,
        children: [
          { id: 'logo', name: 'logo.svg', type: 'file', icon: 'code' },
          { id: 'styles', name: 'styles.css', type: 'file', icon: 'code' },
        ],
      },
      { id: 'app', name: 'App.jsx', type: 'file', icon: 'jsx' },
      { id: 'main', name: 'main.jsx', type: 'file', icon: 'jsx' },
    ],
  },
  {
    id: 'public',
    name: 'public',
    type: 'folder',
    expanded: false,
    children: [{ id: 'favicon', name: 'favicon.ico', type: 'file' }],
  },
  { id: 'package', name: 'package.json', type: 'file', icon: 'json' },
  { id: 'vite', name: 'vite.config.js', type: 'file', icon: 'code' },
  { id: 'env', name: '.env', type: 'file', icon: 'code' },
];

function FileIcon({ type, icon }) {
  switch (icon) {
    case 'jsx':
      return <FileCode size={14} className="text-yellow-500" />;
    case 'json':
      return <FileJson size={14} className="text-yellow-600" />;
    case 'code':
      return <File size={14} className="text-gray-400" />;
    default:
      return <File size={14} className="text-text-secondary" />;
  }
}

function FileTreeNode({ node, level = 0, onSelectFile }) {
  const [isExpanded, setIsExpanded] = useState(node.expanded || false);

  const isFolder = node.type === 'folder';
  const hasChildren = node.children && node.children.length > 0;

  return (
    <>
      <div
        className="flex items-center gap-1 px-2 py-1 cursor-pointer hover:bg-editor-line/50 transition-colors duration-150 group"
        style={{ paddingLeft: `${8 + level * 16}px` }}
      >
        {isFolder && hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-0 hover:bg-editor-line/50 rounded transition-colors"
          >
            {isExpanded ? (
              <ChevronDown size={14} className="text-text-secondary" />
            ) : (
              <ChevronRight size={14} className="text-text-secondary" />
            )}
          </button>
        )}
        {isFolder && !hasChildren && <div className="w-4" />}
        {!isFolder && <div className="w-4" />}

        {/* Icon */}
        {isFolder ? (
          isExpanded ? (
            <FolderOpen size={14} className="text-accent-green" />
          ) : (
            <Folder size={14} className="text-accent-green" />
          )
        ) : (
          <FileIcon type={node.type} icon={node.icon} />
        )}

        {/* Label */}
        <span
          className={`text-xs flex-1 truncate ${
            node.id === 'app' ? 'text-accent-green font-medium' : 'text-text-secondary'
          }`}
        >
          {node.name}
        </span>

        {/* Hover actions */}
        {isFolder && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
            <button className="p-0.5 hover:bg-editor-line rounded transition-colors" title="New File">
              <Plus size={12} className="text-text-muted" />
            </button>
          </div>
        )}
      </div>

      {/* Render children */}
      {isFolder && hasChildren && isExpanded && (
        <>
          {node.children.map((child) => (
            <FileTreeNode
              key={child.id}
              node={child}
              level={level + 1}
              onSelectFile={onSelectFile}
            />
          ))}
        </>
      )}
    </>
  );
}

export function FileExplorer() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="flex flex-col h-full bg-editor-darker border-r border-editor-line">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-editor-line">
        <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wide">
          Explorer
        </h3>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-editor-line rounded transition-colors" title="New File">
            <Plus size={14} className="text-text-secondary hover:text-text-primary" />
          </button>
          <button className="p-1 hover:bg-editor-line rounded transition-colors" title="More">
            <MoreHorizontal size={14} className="text-text-secondary hover:text-text-primary" />
          </button>
        </div>
      </div>

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto editor-scroll">
        <div className="py-2">
          {FILE_STRUCTURE.map((node) => (
            <FileTreeNode
              key={node.id}
              node={node}
              level={0}
              onSelectFile={setSelectedFile}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-editor-line px-4 py-3 text-xs text-text-muted">
        <p>OUTLINE</p>
      </div>
    </div>
  );
}
