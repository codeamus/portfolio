import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0f172a',
          blue: '#5b5bff',
          purple: '#6366f1',
        },
        accent: {
          coral: '#ff6b6b',
          peach: '#ffa14d',
          gold: '#ffd93d',
          mint: '#a8e6cf',
        },
      },
      fontSize: {
        "2xs": "0.688rem",
        xs: "0.875rem",
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "3.400rem",
      },
      fontFamily: {
        pacifico: ["Pacifico", "regular"],
        poppins: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(91, 91, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(91, 91, 255, 0.6)' },
        },
      },
      boxShadow: {
        'elevation-1': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'elevation-2': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'glow-blue': '0 0 20px rgba(91, 91, 255, 0.3)',
      },
    },
  },
  plugins: [typography],
};
