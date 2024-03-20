module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {

    extend: {

      colors: {
        'custom-color': '#45242f',
        'brown' : '#48262b'
      },
      spacing: {
        '240': '240px',
        '100': '150px',
        '200': '80px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),

  ],
}
