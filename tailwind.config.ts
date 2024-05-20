import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blue: '#3F88C5',
        'dark-blue': '#032B43',
        red: '#EF5B5B',
        yellow: '#FFBA49',
        green: '#136F63',
        purple: '#23001E',
        gray: '#7D8491',
        turquoise: '#CCF5AC',
        pink: '#FFCAD4',
      },
    },
  },
  plugins: [],
}
export default config
