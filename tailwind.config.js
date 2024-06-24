/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        DarkRead:"#840C0B",
        Red:"#BE1614",
        SmoothRed:"#D8605F",
        White:"#F5F5F5",
        Gray:"#4B4B4C"
      }
    },
    screens:{
      xs:"360px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
}

