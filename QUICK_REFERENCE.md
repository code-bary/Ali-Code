# Ali Code - Quick Reference Card

## 🚀 Essential Commands

```bash
npm install              # Install all dependencies
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build
npm install -D pkg-name  # Install development dependency
npm install pkg-name     # Install package
```

## 📁 Component File Locations

| Component | Location |
|-----------|----------|
| TitleBar | `src/components/layout/TitleBar.jsx` |
| EditorLayout | `src/components/layout/EditorLayout.jsx` |
| StatusBar | `src/components/layout/StatusBar.jsx` |
| ActivityBar | `src/components/sidebar/ActivityBar.jsx` |
| FileExplorer | `src/components/sidebar/FileExplorer.jsx` |
| EditorTabs | `src/components/editor/EditorTabs.jsx` |
| Editor | `src/components/editor/Editor.jsx` |
| Terminal | `src/components/terminal/Terminal.jsx` |

## 🎨 Color Quick Reference

```javascript
// Tailwind class prefix: 'editor-' or 'text-' or 'accent-'
bg-black              // Pure black background
bg-editor-bg          // Main editor background (#1e1e1e)
bg-editor-dark        // Light dark (#252526)
bg-editor-darker      // Darker (#1f1f1f)
bg-editor-line        // Borders (#3e3e42)

text-text-primary     // Main text (#e0e0e0)
text-text-secondary   // Secondary text (#a0a0a0)
text-text-muted       // Muted text (#808080)

bg-accent-green       // Accent dark green
bg-accent-green-bright // Accent bright green (#13d895)
```

## 🏗️ Component Template

```javascript
import React, { useState } from 'react'
import { Icon } from 'lucide-react'

export function MyComponent({ prop1, prop2 }) {
  const [state, setState] = useState(null)

  const handleAction = () => {
    // Logic here
  }

  return (
    <div className="bg-editor-bg text-text-primary">
      {/* Component JSX */}
    </div>
  )
}
```

## 📦 Import Patterns

```javascript
// React
import React, { useState, useEffect } from 'react'

// Lucide Icons
import { FileText, Folder, X, ChevronRight } from 'lucide-react'

// Components (adjust path)
import { TitleBar } from './components/layout/TitleBar'

// Custom CSS
import './App.css'
import './index.css'
```

## 🎯 Common Props

```javascript
// State update
const [value, setValue] = useState(initialValue)

// Event handler
onClick={() => handleClick(value)}
onChange={(e) => setValue(e.target.value)}

// Conditional rendering
{condition && <Component />}
{condition ? <IfTrue /> : <IfFalse />}

// Conditional styling
className={`base-class ${isActive ? 'active-class' : 'inactive-class'}`}
```

## 🎨 Tailwind Class Combinations

```javascript
// Flexbox layouts
className="flex items-center justify-between gap-2"
className="flex flex-col gap-4"

// Padding/Margin
className="px-4 py-2"    // Padding x and y
className="p-4"           // All padding
className="mx-auto"       // Margin auto

// Sizing
className="w-full h-full" // Full width/height
className="w-64"          // Fixed width
className="flex-1"        // Flexible width

// Borders
className="border border-editor-line"
className="border-b-2 border-accent-green"

// Hover effects
className="hover:bg-editor-line transition-colors"
className="group-hover:opacity-100"

// Responsive (desktop-only in this project)
className="hidden lg:block"
className="md:gap-4 lg:gap-6"
```

## 🔄 State Management Pattern

```javascript
// In EditorLayout.jsx
const [activeTab, setActiveTab] = useState('explorer')
<ActivityBar activeTab={activeTab} onTabChange={setActiveTab} />

// In ActivityBar.jsx - receive and use
export function ActivityBar({ activeTab, onTabChange }) {
  return (
    <button onClick={() => onTabChange('explorer')}>
      {activeTab === 'explorer' ? 'Active' : 'Inactive'}
    </button>
  )
}
```

## 📝 Tailwind Config Reference

```javascript
// tailwind.config.js structure
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { /* custom colors */ },
      fontFamily: { /* custom fonts */ },
      spacing: { /* custom spacing */ },
      fontSize: { /* custom sizes */ },
      boxShadow: { /* custom shadows */ },
    },
  },
  plugins: [],
}
```

## 🎯 Common Lucide Icons

```javascript
// Navigation
FileText, Folder, FolderOpen, File

// Actions
X, Plus, MoreHorizontal, ChevronRight, ChevronDown

// Features
Search, Settings, GitBranch, AlertCircle

// Usage
<Icon size={16} className="text-text-secondary" />
```

## 🚨 Debugging Tips

```javascript
// Console logging
console.log('Component props:', { prop1, prop2 })

// Component inspection
// Use React DevTools in browser
// Check component tree and props

// CSS debugging
// Use browser DevTools
// Inspect element to see applied classes
// Check computed styles

// Performance
// Use React Profiler in DevTools
// Check for unnecessary re-renders
```

## 📋 File Tree Example Structure

```javascript
const FILE_STRUCTURE = [
  {
    id: 'unique-id',
    name: 'Display Name',
    type: 'folder',  // or 'file'
    expanded: true,  // Initial state
    children: [      // Only for folders
      {
        id: 'child-id',
        name: 'Child.jsx',
        type: 'file',
        icon: 'jsx',  // 'jsx', 'json', 'code', or none
      }
    ]
  }
]
```

## 🎨 CSS Custom Classes

```css
/* Defined in index.css */
.scrollbar-thin          /* Custom scrollbar */
.editor-scroll           /* Scrollable element */
.tab-active              /* Active tab styling */
.tab-inactive            /* Inactive tab styling */
.icon-hover              /* Icon hover effects */
.glass-effect            /* Glassmorphism */
.editor-border           /* Consistent borders */
```

## 💾 File Save Locations

| What | Where |
|------|-------|
| New component | `src/components/category/ComponentName.jsx` |
| Styles | `src/index.css` (global) or component file |
| Config | Root directory (tailwind.config.js, etc.) |
| Docs | Root directory (README.md, etc.) |
| Build output | `dist/` folder (do not edit) |

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)
- [Tailwind Color Reference](https://tailwindcss.com/docs/customizing-colors)

## ✅ Pre-commit Checklist

- [ ] Code runs without errors (`npm run dev`)
- [ ] Builds successfully (`npm run build`)
- [ ] No console errors/warnings
- [ ] Components are documented
- [ ] Tailwind classes follow conventions
- [ ] State management is logical
- [ ] No unused imports
- [ ] File names follow conventions

## 🎯 Performance Tips

- Use `React.memo()` for pure components
- Use `useCallback()` for stable functions
- Avoid inline object/array creation
- Use CSS for animations (not JS)
- Lazy load components when needed
- Minimize prop drilling

## 🚀 Deploy Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] No console errors in production
- [ ] All images/assets load correctly
- [ ] Links work correctly
- [ ] Responsive layout works (if applicable)
- [ ] Performance is acceptable
- [ ] SEO meta tags present (if needed)

---

**Keep this handy while developing!**
