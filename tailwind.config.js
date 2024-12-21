/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend:{
        colors:{
          primary:"#de2c4d",
          secondary:"#fb923c"
        },
        fontFamily:{
          poppins:["Poppins","sans-serif"],
          averial:["averia Serif Libre","Serif"],
        },
        container:{
          center:true,
          padding:{
            DEFAULT:"1rem",
            sm:"2rem",
            lg:"4rem",
            xl:"5rem",
            "2xl":"6rem"
          }


        }
      },
    },
  },
  plugins: [],
}
