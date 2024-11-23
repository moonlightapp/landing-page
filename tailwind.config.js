/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,css}", 
  ],
  theme: {
    fontFamily: {
      // Set default sans font
      sans: ['Poppins-Regular', 'sans-serif'],
      // Add all Poppins variants
      'poppins-black': ['Poppins-Black', 'sans-serif'],
      'poppins-black-italic': ['Poppins-Black-Italic', 'sans-serif'],
      'poppins-bold': ['Poppins-Bold', 'sans-serif'],
      'poppins-bold-italic': ['Poppins-Bold-Italic', 'sans-serif'],
      'poppins-extrabold': ['Poppins-Extra-Bold', 'sans-serif'],
      'poppins-extrabold-italic': ['Poppins-Extra-Bold-Italic', 'sans-serif'],
      'poppins-extralight': ['Poppins-Extra-Light', 'sans-serif'],
      'poppins-extralight-italic': ['Poppins-Extra-Light-Italic', 'sans-serif'],
      'poppins-italic': ['Poppins-Italic', 'sans-serif'],
      'poppins-light': ['Poppins-Light', 'sans-serif'],
      'poppins-light-italic': ['Poppins-Light-Italic', 'sans-serif'],
      'poppins-medium': ['Poppins-Medium', 'sans-serif'],
      'poppins-medium-italic': ['Poppins-Medium-Italic', 'sans-serif'],
      'poppins-regular': ['Poppins-Regular', 'sans-serif'],
      'poppins-semibold': ['Poppins-Semi-Bold', 'sans-serif'],
      'poppins-semibold-italic': ['Poppins-Semi-Bold-Italic', 'sans-serif'],
      'poppins-thin': ['Poppins-Thin', 'sans-serif'],
      'poppins-thin-italic': ['Poppins-Thin-Italic', 'sans-serif'],
    },
    extend: {
      colors: {
        'campaign-blue': '#155e78',
        'input-bg': '#F7F7E7',
        'text-dark': '#16191c',
        'text-gray': '#656b73',
        orange: {
          400: '#FF9E57', 
        },
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'scale-in': 'scaleIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}