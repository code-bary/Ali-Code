# Ali Code - VS Code Inspired Code Editor UI

A modern, professional, desktop-only code editor UI inspired by Visual Studio Code. Built with React, Vite, Tailwind CSS, and Lucide React icons.

## Features

### 1. **Professional Design**
- Dark developer aesthetic with black and dark green color scheme
- Production-quality layout inspired by VS Code
- Smooth hover animations and transitions
- Professional shadows and borders
- Sharp, minimal design

### 2. **Complete Editor Layout**
- **Title Bar**: App branding, window controls, project name
- **Activity Bar**: Vertical icon sidebar with explorer, search, source control, run & debug, extensions, settings
- **File Explorer**: Realistic file tree with folder expansion, file icons by extension
- **Editor Tabs**: Multiple tab support with active/inactive states, close buttons
- **Code Editor**: Syntax-highlighted code display with line numbers, minimap preview
- **Terminal**: VS Code-style terminal panel with realistic command output
- **Status Bar**: Git branch, encoding, language mode, line/column position
- **Resizable Panels**: Drag-to-resize terminal panel

### 3. **Component Architecture**
- Clean, modular React components
- Reusable layout system
- Well-organized folder structure
- Proper naming conventions
- Easy to extend and maintain

### 4. **Interactive Features**
- Expandable/collapsible file tree
- Tab management UI
- Hover effects on all interactive elements
- Resizable terminal panel (drag handle)
- Active state indicators
- Smooth scrolling with custom scrollbars

### 5. **Professional UI Elements**
- Custom scrollbars matching VS Code style
- Tooltip system for buttons
- Icon hover states
- Smooth transitions and animations
- Proper spacing and alignment

## Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **JavaScript (ES6+)**: Modern JavaScript

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Primary Background | Black | `#000000` |
| Editor Background | Dark Gray | `#1e1e1e` |
| Secondary Background | Darker Gray | `#252526` |
| Accent Color | Green | `#0f3d2e` |
| Accent Bright | Bright Green | `#13d895` |
| Text Primary | Light Gray | `#e0e0e0` |
| Text Secondary | Medium Gray | `#a0a0a0` |
| Text Muted | Dim Gray | `#808080` |
| Border | Light Dark | `#3e3e42` |

## Project Structure

```
ali-code/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TitleBar.jsx
│   │   │   ├── EditorLayout.jsx
│   │   │   └── StatusBar.jsx
│   │   ├── editor/
│   │   │   ├── Editor.jsx
│   │   │   └── EditorTabs.jsx
│   │   ├── sidebar/
│   │   │   ├── ActivityBar.jsx
│   │   │   └── FileExplorer.jsx
│   │   ├── terminal/
│   │   │   └── Terminal.jsx
│   │   └── common/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Component Overview

### TitleBar
- App logo and "Ali Code" branding
- Current project name display
- Window control buttons (minimize, maximize, close)

### ActivityBar
- Vertical sidebar with 6 main icons
- Explorer, Search, Source Control, Run & Debug, Extensions, Settings
- Active indicator bar
- Tooltip on hover

### FileExplorer
- Realistic file/folder tree
- Folder expand/collapse functionality
- File icons by extension (.jsx, .json, .js)
- New file/folder buttons
- Outline section

### EditorTabs
- Multiple file tabs
- Active/inactive states
- Close button per tab
- Modified file indicator
- Tab selection with icons

### Editor
- Fake code display with syntax highlighting
- Line numbers
- Line highlighting on hover
- Minimap preview on the right
- Scrollable content

### Terminal
- VS Code-style terminal panel
- Terminal output display
- Fake npm commands and output
- Blinking cursor indicator
- Tab support (placeholder)

### StatusBar
- Git branch display
- Problem/error count
- Prettier indicator
- Text encoding
- Line and column position
- Language mode indicator

## Customization

### Colors
Edit the color theme in `tailwind.config.js`:
```javascript
colors: {
  'editor-bg': '#1e1e1e',
  'editor-dark': '#252526',
  'accent-green': '#0f3d2e',
  'accent-green-bright': '#13d895',
  // ... more colors
}
```

### Typography
Modify fonts in `tailwind.config.js`:
```javascript
fontFamily: {
  'mono': ['JetBrains Mono', 'monospace'],
  'sans': ['Inter', 'system-ui', 'sans-serif'],
}
```

### Spacing
Adjust editor spacing in the `spacing` config or component styles

### Icons
Replace or add icons from [Lucide React](https://lucide.dev/)

## Features Not Implemented (By Design)

As a UI-only project, the following are not implemented:
- ❌ Real file system access
- ❌ Actual code execution
- ❌ Terminal functionality
- ❌ Real syntax highlighting parser
- ❌ Authentication system
- ❌ Backend services
- ❌ Mobile responsiveness
- ❌ Dark/Light theme toggle

These can be added in the future if needed.

## Best Practices Used

1. **Component Organization**: Features are grouped in logical folders
2. **Naming Conventions**: Clear, descriptive component names
3. **Props Drilling**: Managed state at the EditorLayout level
4. **Reusable Styles**: Tailwind CSS for consistency
5. **Custom Scrollbars**: Enhanced UX with styled scrollbars
6. **Responsive Layout**: CSS Grid and Flexbox for flexible layout
7. **Accessibility**: Proper ARIA labels and keyboard-friendly design
8. **Clean Code**: Well-commented components with clear structure

## Browser Compatibility

Tested and optimized for:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lightweight components with minimal re-renders
- Optimized CSS with Tailwind's tree-shaking
- Vite's fast HMR (Hot Module Replacement)
- Efficient state management

## Future Enhancements

- Add real file explorer functionality
- Implement actual code highlighting (highlight.js or Prism)
- Add more tabs and editor instances
- Implement command palette
- Add settings panel
- Create theme switcher
- Add keyboard shortcuts
- Implement search functionality
- Add git integration UI

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Credits

Designed and built as a high-quality UI mockup inspired by Visual Studio Code.

---

**Note**: This is a UI/UX project designed to look and feel like a professional code editor. It does not have actual editing, file system, or compilation capabilities. It serves as an excellent template for building a real code editor or learning React component architecture.
