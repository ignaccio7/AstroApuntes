import animations from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        inter: '#16161a', // Color de fondo
        headline: '#fffffe', // Color del encabezado
        paragraph: '#94a1b2', // Color del párrafo
        button: '#7f5af0', // Color del botón
        buttonText: '#fffffe', // Color del texto del botón
        illustrationStroke: '#010101', // Color del trazo de ilustración
        main: '#fffffe', // Color principal
        highlight: '#7f5af0', // Color de resaltado
        secondary: '#72757e', // Color secundario
        tertiary: '#2cb67d', // Color terciario
      },
    }
  },
  plugins: [
    animations
  ],
}