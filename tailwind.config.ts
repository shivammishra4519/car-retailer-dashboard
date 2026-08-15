import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFC72C',
          'yellow-hover': '#eab308',
          blue: '#1E6FFB',
          'blue-dark': '#1354C7',
          'blue-light': '#EBF2FE',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    }
  }
}
