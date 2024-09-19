/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slate-blue": "#6C63FF",
        "slate-gray": "#6B7280",
        "gunmetal": "#1F2937"
      }
    },
  },
  plugins: [],
}

