module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    screens: {
      'sm': {'min': '390px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px',},
      // 'xl': {'min': '1280px', 'max': '1535px'},
    },
    extend: {},
  },
  plugins: [],
}