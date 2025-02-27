/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef3ff",
          100: "#dce4ff",
          200: "#b8c7ff",
          300: "#94aaff",
          400: "#708dff",
          500: "#4366f7",
          600: "#3752c6",
          700: "#2b3d94",
          800: "#1f2962",
          900: "#141531",
        },
        secondary: "#88C0D0",
        highlight: "#e1f4f5",
        accent: "#5E81AC",
        background: "#ECEFF4",
        card: "#FFFF",
        foreground: "#3a3f4a",
        muted: "#D8DEE9",
        warning: "#EBCB8B",
        error: "#BF616A",
        success: "#A3BE8C",
      },
      width: {
        sidebar: "22rem",
        content: "calc(100% - 22rem)",
        72: "18rem",
      },
      margin: {
        "sidebar-distance": "23rem",
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
