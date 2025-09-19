/**
 * @type {import('tailwindcss').Config}
 * @file tailwind.config.ts
 * @description Tailwind CSS configuration file.
 * @see {@link https://tailwindcss.com/docs/configuration}
 * @author 03-renate
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;