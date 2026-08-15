import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f4f8",
          100: "#e4e6ee",
          200: "#c8ccdd",
          300: "#a3a9c3",
          400: "#78809d",
          500: "#5a6383",
          600: "#414b6b",
          700: "#2e3a5c",
          800: "#22334c",
          900: "#1c3150",
          950: "#0f1c30",
        },
        caramel: {
          50: "#fbf5ee",
          100: "#f4e7d6",
          200: "#e8d0ad",
          300: "#dcb88a",
          400: "#cdaa80",
          500: "#bf9163",
          600: "#a8764a",
          700: "#8b5c3a",
          800: "#6e472f",
          900: "#503525",
        },
        beige: {
          50: "#faf3ee",
          100: "#f5e8df",
          200: "#dbc6c0",
          300: "#c9aea6",
          400: "#b39289",
          500: "#9a766c",
          600: "#7d5d54",
          700: "#5f4640",
          800: "#3f2e2a",
          900: "#241a17",
        },
        cream: {
          50: "#faf7f5",
          100: "#f5efec",
          200: "#ece4df",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        devanagari: ['"Tiro Devanagari Hindi"', '"Noto Sans Devanagari"', 'serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        'gold-gradient': 'linear-gradient(135deg, #d99a2c 0%, #f4deac 50%, #d99a2c 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
