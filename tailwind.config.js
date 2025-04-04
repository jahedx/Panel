/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
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
        background: "rgb(var(--background) / <alpha-value>)",
        "background-secondary":
          "rgb(var(--background-secondary) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "foreground-secondary":
          "rgb(var(--foreground-secondary) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "input-bg": "var(--input-bg, white)",
        "input-bg-hover": "var(--input-bg-hover, #f8f9fa)",
        "input-bg-focus": "var(--input-bg-focus, white)",
        "input-txt": "var(--input-txt, #212529)",

        // Accent colors
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },
      },
      height: {
        input: "2.5rem", // 40px default height for inputs
      },
      padding: {
        input: "0.75rem", // 12px default padding for inputs
      },
      width: {
        sidebar: "17rem",
        content: "calc(100% - 17rem)",
        72: "18rem",
        "input-title": "8rem", // Added based on your CSS using w-input-title
      },
      margin: {
        "sidebar-distance": "17rem",
      },
      fontSize: {
        "2xs": ["11px", "18px"],
        xs: ["12px", "20px"],
        sm: ["13px", "22px"],
        base: ["14px", "24px"],
        lg: ["15px", "26px"],
        xl: ["16px", "28px"],
        "2xl": ["18px", "32px"],
        "3xl": ["20px", "36px"],
        "4xl": ["22px", "40px"],
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
