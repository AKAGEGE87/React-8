/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,ts,jsx,tsx}",
  "./public/**/*.html"
];
export const theme = {
  extend: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"]
    }
  }
};
export const plugins = [];
