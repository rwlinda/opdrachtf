/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {    
    extend: {
      colors: {
        'white': '#FFFFFF',
        'primary': {
          DEFAULT: '#f59f00',
          'hover': '#f97316',
          'active': '#f97316'
        }
      }
    },
    screens: {
      'sm': '560px',
      'md': '960px',
      'lg': '1280px'
    }
  },
  plugins: [],
}
