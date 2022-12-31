const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    "raspberry": {
      50: "#e9e3e5",
  
      100: "#d4c8cc",
  
      200: "#c0aeb3",
  
      300: "#ad939b",
  
      400: "#957c84",
  
      500: "#7b666d",
  
      600: "#625156",
  
      700: "#4a3d41",
  
      800: "#332a2d",
  
      900: "#1d181a",
  
    },
    "tangelo": {
      50: "#e7e4e2",
  
      100: "#d1cac5",
  
      200: "#bbb0a8",
  
      300: "#a7978b",
  
      400: "#8d8076",
  
      500: "#756961",
  
      600: "#5d544d",
  
      700: "#463f3a",
  
      800: "#302c28",
  
      900: "#1c1917",
  
    },
    "apple_green": {
      50: "#e4e5df",
  
      100: "#caccbf",
  
      200: "#b0b49e",
  
      300: "#989d82",
  
      400: "#81856e",
  
      500: "#6a6d5b",
  
      600: "#545748",
  
      700: "#3f4136",
  
      800: "#2c2d26",
  
      900: "#191a16",
  
    },
    "sap_green": {
      50: "#e0e6e0",
  
      100: "#c2cec1",
  
      200: "#a4b7a3",
  
      300: "#88a186",
  
      400: "#738871",
  
      500: "#5f705d",
  
      600: "#4b594a",
  
      700: "#394338",
  
      800: "#272e26",
  
      900: "#171b16",
  
    },
    "aquamarine": {
      50: "#e0e6e4",
  
      100: "#c1ceca",
  
      200: "#a2b7b0",
  
      300: "#85a097",
  
      400: "#708780",
  
      500: "#5d6f69",
  
      600: "#4a5954",
  
      700: "#38433f",
  
      800: "#262e2b",
  
      900: "#161b19",
  
    },
    "cornflower_blue": {
      50: "#e2e5e7",
  
      100: "#c5ccd1",
  
      200: "#a9b4bc",
  
      300: "#8c9ca8",
  
      400: "#77848e",
  
      500: "#626d75",
  
      600: "#4e575d",
  
      700: "#3b4146",
  
      800: "#282d31",
  
      900: "#171a1c",
  
    },
    "persian_blue": {
      50: "#e5e4e9",
  
      100: "#cccad5",
  
      200: "#b3b0c1",
  
      300: "#9b97af",
  
      400: "#847f99",
  
      500: "#6d697e",
  
      600: "#565364",
  
      700: "#413f4b",
  
      800: "#2d2b34",
  
      900: "#1a191e",
  
    },
    "heliotrope": {
      50: "#e8e3e8",
  
      100: "#d2c8d3",
  
      200: "#beadbf",
  
      300: "#aa92ac",
  
      400: "#927b94",
  
      500: "#78657a",
  
      600: "#605161",
  
      700: "#483d49",
  
      800: "#322a32",
  
      900: "#1d181d",
  
    },
    extend: {
      
      screens: {
        'xs': '320px',
        ...defaultTheme.screens,
        'sm':'640px',
        'md': '768px',
      'llg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '1/1':'1/1',
        '16/9':'16/9'
      },
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      },

      fontFamily: {
        'myfont': ['Josefin Sans', 'sans-serif'],
      },

    
    },
  },
  plugins: [],
}