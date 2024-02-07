/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],

  //exemplo de estender thema do tailwind
  theme: {
    extend: {
      fontFamily: {
        //estou salvando a font inter para ser padrão se não uma sans-serif qualquer
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
