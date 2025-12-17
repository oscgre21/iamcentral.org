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
        'iglesia': {
          'verde-lima': '#7CB342',
          'verde-claro': '#8BC34A',
          'azul-marino': '#1A237E',
          'naranja': '#E65100',
          'naranja-dorado': '#F57C00',
          'gris-oscuro': '#424242',
          'gris-medio': '#757575',
        }
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
      keyframes: {
        'slow-zoom': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
