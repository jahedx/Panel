/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef3ff", // Lightest shade
          100: "#dce4ff",
          200: "#b8c7ff",
          300: "#94aaff",
          400: "#708dff",
          500: "#4366f7", // Base color
          600: "#3752c6",
          700: "#2b3d94",
          800: "#1f2962",
          900: "#141531", // Darkest shade
        },
        secondary: "#88C0D0", // A complementary soft blue
        highlight: "#e1f4f5",
        accent: "#5E81AC", // A darker accent for contrast
        background: "#ECEFF4", // Light background
        foreground: "#3a3f4a", // Dark foreground (text)
        muted: "#D8DEE9", // Muted elements
        warning: "#EBCB8B", // Warning color (soft orange)
        error: "#BF616A", // Error (red tone)
        success: "#A3BE8C", // Success (green tone)
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
