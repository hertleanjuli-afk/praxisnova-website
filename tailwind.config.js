/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080C1A',
        'bg-dark': '#0F1629',
        coral: '#E8472A',
        card: '#0F1629',
        'card-hover': '#141E3A',
        'card-border': '#1E2947',
        muted: '#555555',
        'border-subtle': '#1E2947',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
