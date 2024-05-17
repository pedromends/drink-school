// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
    "nuxt-simple-robots",
    "@nuxtjs/sitemap",
  ],
  ssr: true,
  css: ["~/assets/css/main.css", "~/layouts/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Escola de Bar - Vivendo de caipirinha",
      meta: [
        {
          name: "description",
          content:
            "Somos apaixonados por coquetéis e por compartilhar nosso conhecimento com vocês! Descubra mais sobre a história da Escola de Bar.",
        },
      ],
    },
  },
  gtag: {
    id: "G-73VDFFMFR2",
  },
});
