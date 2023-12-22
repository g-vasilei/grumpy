import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-section': "url('/imgs/background/Hero.svg')",
        'cookie-bg': "url('/imgs/background/cookie-bg.svg')",
      },
      colors: {
        'main-color': '#0A4D3D',
      },
    },
  },
  plugins: [],
};
export default config;
