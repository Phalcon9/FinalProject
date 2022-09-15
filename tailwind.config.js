/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#4A3AFF',
      'blue-500': '#3b82f6',
      'teal-500': '#14b8a6',
      'white': '#ffffff',
      'wheat': '#e3dac8',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'orange-500': '#f97316',
      'custom1': '#033d59',
      'custom2': '#e5c3c3',
      'custom3': '#1e5a91',
      'gray-700': '#9ebad4',
      'gray-300': '#193651',
      'gray-800': '#1f2937',
      'gray-900': '#111827',
      'gray-400': '#9ca3af',
      'gray-600': '#4b5563',
      'blue-700': '#1d4ed8',
      'slate-700': '#334155',
      'slate-200': '#e2e8f0',
      'slate-500': '#64748b',
      'slate-900': '#0f172a',
      'black': '#171717',
      'red': '#c91b1b',
      'red-500': '#ef4444',
      'sky-400': '#38bdf8',
    },
    extend: {

      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
