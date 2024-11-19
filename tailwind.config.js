/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dnd-yellow': 'rgba(231, 159, 52, 0.9)',
        'dnd-yellow-hover': 'rgba(241, 185, 62, 1)',
        'dnd-white': 'rgb(238, 238, 238)',
        'dnd-blue': '#1F263F',
        'dnd-black': 'rgba(25, 29, 36, 0.7)',
        junk: 'rgb(50, 50, 50)',
        poor: 'rgb(100, 100, 100)',
        common: 'rgb(222, 222, 222)',
        uncommon: 'rgb(98, 190, 11)',
        rare: 'rgb(74, 155, 209)',
        epic: 'rgb(173, 90, 255)',
        legend: 'rgb(247, 162, 45)',
        unique: 'rgb(227, 216, 140)',
      },
    },
  },
  plugins: [],
}
