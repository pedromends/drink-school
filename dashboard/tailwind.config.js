/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        mainyellow: "#FEE54A",
        mainblack: "#131313",
        skin: "#FCF7E1"
      },
      width: {
        68: "17rem",
        76: "19rem",
        88: "22rem",
        100: "25rem",
        112: "28rem",
        116: "29rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        140: "35rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
        196: "49rem",
        216: "54rem",
      },
      height: {
        68: "17rem",
        76: "19rem",
        88: "22rem",
        100: "25rem",
        112: "28rem",
        116: "29rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        140: "35rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
        196: "49rem",
        216: "54rem",
      },
      padding: {
        "my-md": "17rem",
      },
      fontFamily: {
        opensans: ['"OpenSans"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
