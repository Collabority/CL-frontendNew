/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        // Change 'Poppins' to 'Permanent Marker'
        sans: ["Permanent Marker", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
