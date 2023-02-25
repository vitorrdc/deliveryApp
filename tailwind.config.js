/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Thin: 'Poppins_100Thin',
        ExtraLight: 'Poppins_200ExtraLight',
        Light: 'Poppins_300Light',
        Regular: 'Poppins_400Regular',
        Medium: 'Poppins_500Medium',
        Semiboold: 'Poppins_600SemiBold',
        Bold: 'Poppins_700Bold',
        Extrabold: 'Poppins_800ExtraBold',
        Black: 'Poppins_900Black',
        Roboto: 'Roboto_700Bold',
        roboto_regular: 'Roboto_400Regular',
        roboto_medium: 'Roboto_500Medium',
      },
      textColor: {
        Orange: '#FA641F',
        DeclineColor: '#E8453E',
      },
      borderColor: {
        DeclineBorder: '#E8453E',
      },
    },
  },
  plugins: [],
}
