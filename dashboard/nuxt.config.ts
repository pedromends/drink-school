// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  plugins: ["~/plugins/preline.client.ts"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Escola de bar",
      meta: [
        {
          name: "description",
          content: "",
        },
        {
          name: "facebook-domain-verification",
          content: "wy9wfskr1ycgkzj13291g8uzikn5yv",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://preline.co/",
        },
        {
          rel: "stylesheet",
          href: "./assets/css/main.min.css",
        },
      ],
      script: [
        {
          type: "text/javascript",
          src: "./assets/js/index.js",
        },
        {
          type: "text/javascript",
          src: "./assets/js/hs.theme-appearance.js",
        },
        {
          type: "text/javascript",
          src: "./assets/js/clipboard.min.js",
        },
        {
          type: "text/javascript",
          src: "./assets/js/hs-copy-clipboard-helper.js",
        },
        {
          type: "text/javascript",
          src: "./assets/js/lodash.min.js",
        },
        {
          type: "text/javascript",
          src: "./assets/js/apexcharts.min.js",
        },
        {
          type: "text/javascript",
          src: "./assets/js/hs-apexcharts-helpers.js",
        },
      ],
    },
  },
});
