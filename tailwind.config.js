const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
 purge: [
  "./src/components/**/*.{js,jsx}",
  "./public/index.html",
],
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

      colors: {
        'blue2':'#ABA8A9',
        'green': '#94AFAA',
        "lime":"#ebf6d6",
        'gray': '#a84b62',
        'green': '#779682',
        'rose': '#c2828f',
        'moon': '#ebf6d6',
        'midnight':"#003442",
        'beige':"#dedcd7",
        'dark':"#333333",
        'ring':"#aba89e",
        "blue-200":"#52949e"
      
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
  enabled: process.env.NODE_ENV === "production"
}