/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        // Theme colors
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        card: "var(--card)",
        border: "var(--border)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        muted: "var(--muted)",

        // Accent colors
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
      },
      width: {
        sidebar: "20rem",
        content: "calc(100% - 20rem)",
        72: "18rem",
      },
      margin: {
        "sidebar-distance": "21rem",
      },
      boxShadow: {
        DEFAULT: "0 4px 6px var(--shadow)",
      },
      backgroundColor: {
        overlay: "var(--overlay)",
      },
      ringColor: {
        DEFAULT: "var(--ring)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
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
