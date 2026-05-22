# Development Setup & Architecture Guide

## Project Overview

Ali Code is a production-quality, desktop-only code editor UI inspired by Visual Studio Code. It's built entirely with React, Vite, Tailwind CSS, and Lucide React icons to showcase professional UI/UX design and React component architecture.

### Key Design Principles

1. **UI-First**: Focus on visual design and user experience
2. **Professional**: Production-ready code quality
3. **Modular**: Reusable, maintainable components
4. **Clean**: Minimalist dark theme inspired by VS Code
5. **Desktop-Only**: No mobile responsive design

## Project Structure

```
ali-code/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TitleBar.jsx           # Window header with branding
│   │   │   ├── EditorLayout.jsx       # Main orchestrator component
│   │   │   └── StatusBar.jsx          # Bottom status indicators
│   │   ├── editor/
│   │   │   ├── Editor.jsx             # Main code editor area
│   │   │   └── EditorTabs.jsx         # File tabs UI
│   │   ├── sidebar/
│   │   │   ├── ActivityBar.jsx        # Left icon sidebar
│   │   │   └── FileExplorer.jsx       # File tree panel
│   │   ├── terminal/
│   │   │   └── Terminal.jsx           # Terminal panel
│   │   └── common/                    # Shared utility components
│   ├── App.jsx                        # Root app component
│   ├── App.css                        # App-specific styles
│   ├── index.css                      # Global styles + Tailwind directives
│   └── main.jsx                       # React entry point
├── public/
├── dist/                              # Build output
├── node_modules/
├── package.json
├── tailwind.config.js                 # Tailwind configuration
├── postcss.config.js                  # PostCSS configuration
├── vite.config.js                     # Vite configuration
├── README.md                          # Project documentation
├── COMPONENT_GUIDE.md                 # Component usage guide
└── DEVELOPMENT.md                     # This file
```

## Tech Stack Details

### React 18
- Component-based UI architecture
- Hooks for state management (useState, useEffect)
- Local component state for UI state management
- Future: Context API for global state

### Vite
- Fast dev server with HMR (Hot Module Replacement)
- Optimized production builds
- ES module based development
- Instant server startup

### Tailwind CSS
- Utility-first CSS framework
- Custom color palette for editor theme
- Custom components for consistent styling
- Tree-shaking for smaller builds

### Lucide React
- 400+ professional icons
- SVG-based (scalable and performant)
- Consistent icon design
- Easy to customize

## State Management

### Current Approach
Local state managed in `EditorLayout.jsx` using React hooks:
- `activeTab`: Active sidebar tab (explorer, search, git, etc.)
- `activeEditor`: Active editor tab
- `terminalHeight`: Terminal panel height
- `isDragging`: Terminal resize state

### Future Improvements
```javascript
// Option 1: Context API (recommended for this scale)
const EditorContext = createContext()

// Option 2: Custom Hook for reusability
const useEditor = () => {
  const [state, dispatch] = useReducer(editorReducer, initialState)
  return state
}

// Option 3: Zustand (lightweight state management)
const useEditorStore = create((set) => ({
  activeTab: 'explorer',
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
```

## Component Architecture

### Component Hierarchy

```
EditorLayout (main container)
├── TitleBar
├── ActivityBar (sidebar)
├── FileExplorer (sidebar content)
├── Editor (main area)
│   ├── EditorTabs
│   └── Editor (code display)
├── Terminal
└── StatusBar
```

### Component Communication

**Parent → Child**: Props drilling
```javascript
<ActivityBar activeTab={activeTab} onTabChange={setActiveTab} />
```

**Child → Parent**: Callback functions
```javascript
onClick={() => onTabChange('explorer')}
```

**Sibling Communication**: Through parent state
```javascript
const [activeTab, setActiveTab] = useState('explorer')
// Both ActivityBar and FileExplorer depend on activeTab
```

## Styling Strategy

### Tailwind Configuration
Custom color palette defined in `tailwind.config.js`:
```javascript
colors: {
  'editor-bg': '#1e1e1e',
  'editor-dark': '#252526',
  'editor-darker': '#1f1f1f',
  'editor-line': '#3e3e42',
  'accent-green': '#0f3d2e',
  'accent-green-bright': '#13d895',
  'text-primary': '#e0e0e0',
  'text-secondary': '#a0a0a0',
  'text-muted': '#808080',
}
```

### Custom Components
Defined in `index.css` using Tailwind's `@layer components`:
```css
@layer components {
  .tab-active {
    @apply bg-editor-bg border-b-2 border-accent-green-bright;
  }
  
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: #464647 transparent;
  }
}
```

### Responsive Utilities
```javascript
// Example responsive classes
className="w-64 hidden lg:block"  // Hidden on mobile, shown on desktop
className="gap-2 md:gap-4 lg:gap-6"  // Responsive spacing
```

## Interactive Features

### 1. File Tree Expansion
```javascript
const [isExpanded, setIsExpanded] = useState(false)
// Toggle folder expansion with chevron icon
```

### 2. Terminal Resizing
```javascript
const [terminalHeight, setTerminalHeight] = useState(200)
// Drag resize handle to change height
// Update height in mousemove handler
```

### 3. Tab Management
```javascript
const [activeEditor, setActiveEditor] = useState(1)
// Click tab to switch active editor
// Close button removes tab (UI only)
```

### 4. Activity Bar Switching
```javascript
const [activeTab, setActiveTab] = useState('explorer')
// Click activity icon to switch sidebar content
// Active indicator shows current tab
```

## Performance Optimization

### Current Optimizations
1. **Component Memoization**: Potential candidates for React.memo
2. **CSS Optimization**: Tailwind's tree-shaking removes unused styles
3. **Event Delegation**: Minimal event listeners
4. **Efficient Re-renders**: Local state prevents unnecessary updates

### Future Optimizations
```javascript
// Memoize expensive components
const FileExplorer = React.memo(({ files }) => {
  return /* JSX */
})

// Use useCallback for stable callbacks
const handleTabChange = useCallback((tabId) => {
  setActiveTab(tabId)
}, [])

// Lazy load components
const Terminal = React.lazy(() => import('./terminal/Terminal'))

// Use useMemo for expensive calculations
const sortedFiles = useMemo(() => {
  return files.sort((a, b) => a.name.localeCompare(b.name))
}, [files])
```

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Visit http://localhost:5173/

# Build for production
npm run build

# Preview production build
npm run preview
```

### Key Commands
```bash
# Install new package
npm install package-name

# Install dev dependency
npm install -D package-name

# Build production
npm run build

# Type check (if using TypeScript)
npm run type-check

# Lint code (if configured)
npm run lint
```

### Hot Module Replacement (HMR)
Vite provides instant HMR - changes in components are reflected immediately without full page reload.

## Code Style Guidelines

### Naming Conventions
- **Components**: PascalCase (e.g., `FileExplorer.jsx`)
- **Files**: PascalCase for components
- **Functions**: camelCase (e.g., `handleTabChange`)
- **Variables**: camelCase (e.g., `activeTab`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `ACTIVITY_ITEMS`)

### Component Structure
```javascript
// Imports
import React, { useState } from 'react'
import { Icon } from 'lucide-react'

// Constants
const ITEMS = [...]

// Helper components
function ItemComponent() { ... }

// Main component
export function MyComponent(props) {
  // Hooks
  const [state, setState] = useState()
  
  // Event handlers
  const handleClick = () => { ... }
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

### Comment Style
```javascript
// Section comment for major features
// ============================================================================
// FEATURE NAME
// ============================================================================

// Inline comment for non-obvious code
const activeColor = isActive ? 'green' : 'gray' // Color based on state
```

## Adding New Features

### Example: Add a New Activity Tab

1. **Update ActivityBar**
   ```javascript
   const ACTIVITY_ITEMS = [
     // ... existing items
     { id: 'new-tab', icon: NewIcon, label: 'New Tab', tooltip: 'New Tab (Ctrl+K)' },
   ]
   ```

2. **Create New Component**
   ```javascript
   // src/components/sidebar/NewTab.jsx
   export function NewTab() {
     return <div>New Tab Content</div>
   }
   ```

3. **Add Rendering in EditorLayout**
   ```javascript
   {activeTab === 'new-tab' && <NewTab />}
   ```

### Example: Add a New Editor Tab

1. **Update EditorTabs TABS array**
2. **Add content to Editor component**
3. **Connect tab switching logic**

## Browser Compatibility

### Supported Browsers
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Unsupported Features
- CSS Grid gaps in Safari 12-14 (use workarounds)
- Backdrop-filter in older browsers (graceful degradation)

## Building for Production

### Build Process
```bash
npm run build
# Outputs optimized files to dist/
```

### Build Output
- `dist/index.html` - Entry HTML
- `dist/assets/index-*.js` - Bundled JavaScript
- `dist/assets/index-*.css` - Bundled CSS

### Deployment Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel deploy
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**
```bash
npm run build
# Deploy dist/ folder
```

## Troubleshooting

### Common Issues

**Issue**: Styles not applying
- Check Tailwind configuration
- Verify utility classes are spelled correctly
- Ensure CSS imports are in main.jsx

**Issue**: Icons not rendering
- Check Lucide React import
- Verify icon name is correct
- Check icon size props

**Issue**: Components not re-rendering
- Check state update logic
- Verify event handlers are connected
- Use React DevTools to inspect component tree

**Issue**: HMR not working
- Restart dev server
- Clear browser cache
- Check terminal for build errors

## Git Workflow

### Branches
- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: Feature branches

### Commit Messages
```
type(scope): description

feat(editor): add line highlighting
fix(sidebar): correct file tree indentation
docs(readme): update setup instructions
style(colors): adjust accent green color
refactor(editor): simplify state management
```

## Future Roadmap

### Phase 1: Foundation ✅
- [x] Basic UI layout
- [x] Component architecture
- [x] Styling system

### Phase 2: Enhancement
- [ ] Add theme switcher
- [ ] Implement command palette
- [ ] Add settings panel
- [ ] Create search functionality

### Phase 3: Integration
- [ ] Real code editor (Monaco)
- [ ] File system access
- [ ] Git integration
- [ ] Terminal functionality

### Phase 4: Production
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Browser testing
- [ ] Documentation

## Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [VS Code UI Reference](https://code.visualstudio.com)
- [Web Accessibility](https://www.w3.org/WAI)

## Contact & Support

For questions or issues:
1. Check COMPONENT_GUIDE.md
2. Review React documentation
3. Check Tailwind configuration

---

Last Updated: 2024
