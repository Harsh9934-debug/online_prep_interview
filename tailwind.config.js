// tailwind.config.js
import { tailwindcss } from "@tailwindcss/postcss";

export default {
  // Add your configuration here based on your globals.css
  // For example, defining the custom variants and plugins.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Your theme configuration from globals.css goes here
    },
  },
  plugins: [
    tailwindcss(),
    // Add other plugins like tailwindcss-animate here
  ],
};