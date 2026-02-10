/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './**/*.md',
    '!./node_modules/**'
  ],
  theme: {
    extend: {
      colors: {
        // Minimalist palette
        zen: {
          bg: '#ffffff',
          text: '#000000',
          gray: '#f5f5f5',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
