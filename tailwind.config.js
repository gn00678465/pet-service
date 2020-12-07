module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1140px',
      // => @media (min-width: 1024px) { ... }
    },
    fontSize: {
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    colors: {
      'orange': {
        400: '#D54100',
        500: '#D5411A'
      },
      'gray': {
        100: '#FAFAFA',
        200: '#DEE2E6',
        300: '#00000029',
        400: '#CED4DA',
      },
      'dark': {
        600: '#818A91',
        700: '#495057',
        800: '#373A3C',
        900: '#212529'
      },
      'transparent': 'transparent',
      'white': '#fff',
      'black': '#000',
      'primary': '#772400',
      'light': '#F0AD25',
      'border': {
        'light': '#F6A436',
      },
    },
    spacing: {
      1: "4px",
      1.5: "6px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      12: "48px",
      15: "60px",
      18: "72px",
      20: "80px",
      24: "96px",
      25: "100px",
      28: "112px",
      31: "124px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        md: '39px',
        lg: '30px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
