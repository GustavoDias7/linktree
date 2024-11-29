const path = require("path");

const context = {
  static(filename) {
    return path.resolve("/", filename);
  },
  cards: [
    {
      name: "AppMaster",
      image: "../../img/AppMaster-Home.png",
      description: "Startup fabricante de aplicativos para android e IOS.",
      link: "https://appmaster.netlify.app/",
    },
    {
      name: "Aprender Teclado",
      image: "../../img/Aprender-Teclado.png",
      description:
        "Ensinar os tecladistas iniciantes a melhor maneira de aprender a tocar teclado.",
      link: "https://aprender-teclado.vercel.app/",
    },
    {
      name: "Cafeteria Real",
      image: "../../img/Cafeteria-Real.png",
      description:
        "Cafeteria onde são servidas diversas opções de cafés e sobremesas.",
      link: "https://cafeteriareal.com.br/",
    },
    {
      name: "Dogs",
      image: "../../img/Fotos-Dogs.png",
      description:
        "Rede social focada no compatilhamento de fotos de cachorros.",
      link: "https://socialdogs.vercel.app/",
    },
    {
      name: "Projeto Noiz",
      image: "../../img/Projeto-Noiz-Construindo-um-Futuro.png",
      description:
        "ONG que atua na área de educação e profissionalização das pessoas.",
      link: "https://noizprojetosocial.org/",
    },
  ],
};

module.exports = { context };
