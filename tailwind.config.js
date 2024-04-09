/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      bell: ["Bellefair", "serif"],
    },
    extend: {
      colors: {
        lila: "#D0D6F9",
        oscuro: "0B0D17",
      },
      backgroundImage: {
        fondopc: "url('./assets/home/background-home-desktop.jpg')",
        fondotablet: "url('./assets/home/background-home-tablet.jpg')",
        fondocel: "url('./assets/home/background-home-mobile.jpg')",
        destinopc:
          "url('./assets/destination/background-destination-desktop.jpg')",
        destinotablet:
          "url('./assets/destination/background-destination-tablet.jpg')",
        destinocel:
          "url('./assets/destination/background-destination-mobile.jpg')",
        tripulacionpc: "url('./assets/crew/background-crew-desktop.jpg')",
        tripulaciontablet: "url('./assets/crew/background-crew-tablet.jpg')",
        tripulacioncel: "url('./assets/crew/background-crew-mobile.jpg')",

        tecnologiapc:
          "url('./assets/technology/background-technology-desktop.jpg')",
        tecnologiatablet:
          "url('./assets/technology/background-technology-tablet.jpg')",
        tecnologiacel:
          "url('./assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
