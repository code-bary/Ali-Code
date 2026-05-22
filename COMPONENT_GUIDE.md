// COMPONENT USAGE GUIDE
// ====================
// This file documents how to use and extend the Ali Code editor components

// ============================================================================
// 1. EDITORLAYOUT - Main Container Component
// ============================================================================
// Location: src/components/layout/EditorLayout.jsx
// Purpose: Main layout component that orchestrates all editor sections
// Props: None (uses internal state)
// Features:
//   - Manages active tab (explorer, search, git, run, extensions)
//   - Manages active editor tab
//   - Manages terminal height and resizing
//   - Renders all child components in grid layout

// Usage:
import { EditorLayout } from './components/layout/EditorLayout'

function App() {
  return <EditorLayout />
}

// Extending:
// To add a new sidebar tab:
// 1. Add new condition in activeTab === 'new-tab'
// 2. Create corresponding component
// 3. Update ActivityBar icons


// ============================================================================
// 2. TITLEBAR - Window Header
// ============================================================================
// Location: src/components/layout/TitleBar.jsx
// Props:
//   - projectName: string (default: 'ali-code')
// Features:
//   - Logo display
//   - Window control buttons
//   - Project name

import { TitleBar } from './components/layout/TitleBar'

// Usage:
<TitleBar projectName="my-project" />

// Customizing:
// Edit the logo section to change the "A" icon
// Modify window control handlers in the button onClick events


// ============================================================================
// 3. ACTIVITYBAR - Left Icon Sidebar
// ============================================================================
// Location: src/components/sidebar/ActivityBar.jsx
// Props:
//   - activeTab: string (id of current tab)
//   - onTabChange: function (receives tab id)
// Features:
//   - 5 main activity icons
//   - 1 bottom settings icon
//   - Active indicator bar
//   - Tooltips on hover

import { ActivityBar } from './components/sidebar/ActivityBar'

// Usage:
const [activeTab, setActiveTab] = useState('explorer')
<ActivityBar activeTab={activeTab} onTabChange={setActiveTab} />

// Adding New Activity Items:
// Edit ACTIVITY_ITEMS or BOTTOM_ITEMS array in ActivityBar.jsx
// Import icon from lucide-react
// Add tooltip and handler in EditorLayout


// ============================================================================
// 4. FILEEXPLORER - Sidebar File Tree
// ============================================================================
// Location: src/components/sidebar/FileExplorer.jsx
// Props: None (uses internal state)
// Features:
//   - Folder expand/collapse
//   - File icons by extension
//   - New file/folder buttons
//   - Outline section

import { FileExplorer } from './components/sidebar/FileExplorer'

// Usage:
<FileExplorer />

// Customizing File Structure:
// Edit FILE_STRUCTURE array in FileExplorer.jsx
// Structure format:
const fileNode = {
  id: 'unique-id',
  name: 'display-name',
  type: 'folder' | 'file',
  icon: 'jsx' | 'json' | 'code',
  expanded: true | false,
  children: [] // for folders
}

// Adding File Extensions:
// Add cases to FileIcon() function
// Map extensions to colors and icons


// ============================================================================
// 5. EDITORTABS - Editor File Tabs
// ============================================================================
// Location: src/components/editor/EditorTabs.jsx
// Props:
//   - activeTab: number (tab id)
//   - onTabChange: function (receives tab id)
// Features:
//   - Multiple tabs display
//   - Active/inactive styling
//   - Close button (UI only)
//   - Modified indicator

import { EditorTabs } from './components/editor/EditorTabs'

// Usage:
<EditorTabs activeTab={activeEditor} onTabChange={setActiveEditor} />

// Adding/Removing Tabs:
// Edit TABS array in EditorTabs.jsx
// Tab format:
const tab = {
  id: 1,
  name: 'filename.ext',
  icon: '⚛️', // emoji or text
  modified: false
}


// ============================================================================
// 6. EDITOR - Main Code Display
// ============================================================================
// Location: src/components/editor/Editor.jsx
// Props: None (uses sample code)
// Features:
//   - Line numbers
//   - Code display
//   - Line highlighting
//   - Minimap preview

import { Editor } from './components/editor/Editor'

// Usage:
<Editor />

// Customizing Code:
// Edit CODE_SAMPLE constant in Editor.jsx
// Code is automatically split into lines

// Adding Syntax Highlighting:
// Expand the syntax highlighting logic in the code mapping
// Consider using highlight.js or Prism for production


// ============================================================================
// 7. TERMINAL - Terminal Panel
// ============================================================================
// Location: src/components/terminal/Terminal.jsx
// Props: None (uses internal state and sample data)
// Features:
//   - Terminal output display
//   - Blinking cursor
//   - Command styling
//   - Custom scrollbar

import { Terminal } from './components/terminal/Terminal'

// Usage:
<Terminal />

// Changing Terminal Output:
// Edit TERMINAL_OUTPUT array in Terminal.jsx
// Output format:
const line = {
  type: 'command' | 'output',
  text: 'display text'
}


// ============================================================================
// 8. STATUSBAR - Bottom Status Display
// ============================================================================
// Location: src/components/layout/StatusBar.jsx
// Props: None (uses hardcoded values)
// Features:
//   - Git branch indicator
//   - Language mode
//   - Line/column position
//   - Encoding display
//   - Prettier status

import { StatusBar } from './components/layout/StatusBar'

// Usage:
<StatusBar />

// Making Dynamic:
// Add props to StatusBar component
// Update from parent component state


// ============================================================================
// COLOR CUSTOMIZATION
// ============================================================================
// Edit tailwind.config.js to change colors:

export default {
  theme: {
    extend: {
      colors: {
        'editor-bg': '#1e1e1e',      // Main editor background
        'editor-dark': '#252526',    // Slightly lighter dark
        'editor-darker': '#1f1f1f',  // Darker backgrounds
        'editor-line': '#3e3e42',    // Borders and lines
        'accent-green': '#0f3d2e',   // Main accent
        'accent-green-bright': '#13d895', // Bright accent
        'text-primary': '#e0e0e0',   // Main text
        'text-secondary': '#a0a0a0', // Secondary text
        'text-muted': '#808080',     // Muted text
      },
    },
  },
}


// ============================================================================
// RESPONSIVE DESIGN
// ============================================================================
// Current design is DESKTOP-ONLY
// For mobile support in the future:
// 1. Add mobile breakpoints to tailwind.config.js
// 2. Create mobile-specific components
// 3. Use responsive classes in JSX:
//    className="flex gap-2 md:gap-4 lg:gap-6"
// 4. Add responsive sidebar (hamburger menu)
// 5. Stack terminal below editor on mobile


// ============================================================================
// STATE MANAGEMENT
// ============================================================================
// Current: Local state with useState
// For larger projects, consider:
// 1. Context API for global state
// 2. Redux for complex state
// 3. Zustand for lightweight state

// Current state in EditorLayout:
const [activeTab, setActiveTab] = useState('explorer')      // Sidebar tab
const [activeEditor, setActiveEditor] = useState(1)         // Editor tab
const [terminalHeight, setTerminalHeight] = useState(200)   // Terminal size
const [isDragging, setIsDragging] = useState(false)         // Resize dragging


// ============================================================================
// STYLING APPROACH
// ============================================================================
// Using Tailwind CSS with custom components
// Key classes (defined in index.css):
// - .scrollbar-thin: Custom scrollbar
// - .editor-scroll: Scrollable element
// - .tab-active: Active tab styling
// - .tab-inactive: Inactive tab styling
// - .icon-hover: Icon hover effects
// - .glass-effect: Glassmorphism effect
// - .editor-border: Consistent borders

// Example custom component:
@layer components {
  .my-component {
    @apply flex items-center gap-2 px-4 py-2 rounded transition-colors;
  }
}


// ============================================================================
// PERFORMANCE TIPS
// ============================================================================
// 1. Use React.memo for frequently re-rendering components
// 2. Implement useCallback for event handlers
// 3. Minimize inline object/array creation
// 4. Use CSS Grid/Flexbox for layouts (avoid JavaScript)
// 5. Optimize re-renders with key props
// 6. Lazy load components with React.lazy
// 7. Use production build for deployment


// ============================================================================
// EXTENDING WITH REAL FUNCTIONALITY
// ============================================================================
// To add real editing capabilities:
// 1. Replace Editor component with Monaco Editor
// 2. Add file I/O (electron-fs or backend API)
// 3. Implement real terminal (node-pty)
// 4. Add syntax highlighting (Prism/highlight.js)
// 5. Implement search (fuzzy-search lib)
// 6. Add git integration (isomorphic-git)

// Example Monaco Editor integration:
import { Editor as MonacoEditor } from '@monaco-editor/react'

<MonacoEditor
  height="90vh"
  language="javascript"
  theme="vs-dark"
  value={code}
  onChange={setCode}
/>


// ============================================================================
// TESTING
// ============================================================================
// Setup testing with Vitest + React Testing Library
// npm install -D vitest @testing-library/react @testing-library/jest-dom

// Example test:
import { render, screen } from '@testing-library/react'
import { TitleBar } from './components/layout/TitleBar'

describe('TitleBar', () => {
  it('displays project name', () => {
    render(<TitleBar projectName="test" />)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})


// ============================================================================
// DEPLOYMENT
// ============================================================================
// Build for production:
// npm run build

// Output files in dist/
// Deploy to:
// - Vercel (recommended for React + Vite)
// - Netlify
// - GitHub Pages
// - AWS S3
// - Custom server

// Deployment command example (Vercel):
// vercel deploy
