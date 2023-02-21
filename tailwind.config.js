const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        "xs":'320',
        ...defaultTheme.screens,
        'sm':'640px',
        'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1536px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '1/1':'1/1',
        '16/9':'16/9'
      },
      corePlugins: {
        aspectRatio: false,
      },
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
     
      padding: {
        '1/3': '33.33333%',
        '2/3': '60.66667%'
      },

      fontFamily: {
        'myfont': ['Josefin Sans', 'sans-serif'],
        'serif':['Gloock', 'serif']
      },

      colors: {
        'blue2':'#2D489E',
        'green': '#94AFAA',
        "dark-green":"#94afaa",
        'gray': '#e0e1e4',
        'rose': '#CF8599',
        'pink-txt': '#DD8EA4',
        'lilac': '#8da0b8',
        'light': '#d6d9ed',
        'yellow':' #DDB271',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}