/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': 'hsl(47, 84%, 80%)',
        'primary-color-bg': 'hsl(40, 84%, 80%)',
        'secondary-color': 'hsl(39, 97%, 58%)',
        'button-color': 'hsl(31, 66%, 49%)',
        'detail-color': 'hsl(12, 80%, 46%)',
        'fnt-clr': 'hsl(207, 95%, 8%)',
      },
      backgroundImage:{
        'pizza' : "url('../dist/images/Pizza_p.jpg')",
        'shawarma' : "url('../dist/images/Shawarma.jpg')",
        'falafel': "url('../dist/images/falafel.jpg')",
        'drink' : "url('../dist/images/Drink.jpg')",
        'footer': "url('../dist/images/footer.svg')"
      }
    },
    
    fontFamily:{
      'josefin': ['Josefin Sans', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif']
    }

  },
  plugins: [],
}

