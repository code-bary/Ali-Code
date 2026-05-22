/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '11px',
        'sm': '12px',
        'base': '13px',
        'lg': '14px',
      },
      spacing: {
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.7)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.8)',
        'inner-sm': 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
