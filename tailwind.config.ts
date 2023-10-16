import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Rajdhani'],
      serif: ['Sofia Sans'],
    },

    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        icon: 'var(--icon)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        bg1: 'var(--bg-1)',
        bg2: 'var(--bg-2)',
        btnBg: 'var(--btn-bg)',
        border: 'var(--border)',
        neutral: 'var(--neutral-700)',
        primaryLight: 'var(--primary-light)',
        secondaryLight: 'var(--secondary-light)',
        secondary500: 'var(--secondary-500)',
        dark: 'var(--dark)',
        rtWhite: 'var(--rt-color-white)',
        rtDark: 'var(--rt-color-dark)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [],
};
export default config;
