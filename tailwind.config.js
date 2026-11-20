/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'mac-window': '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'mac-dock': '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0.5px 0.5px rgba(255, 255, 255, 0.4)',
        'mac-menu': '0 10px 30px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
