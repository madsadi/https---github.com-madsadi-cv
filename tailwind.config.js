/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'developer': "url('/mac.jpeg')",
        'profile': "url('/profile.jpeg')",
        'code':"url('/code.jpeg')"
      }
    },
  },
  plugins: [],
}
