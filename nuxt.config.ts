// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@pinia/nuxt",
  ],
  components: {
    dirs: [
      {
        path: "@/components/app",
        prefix: "app",
        pathPrefix: false,
      },
    ],
  },
  googleFonts: {
    families: {
      "Noto Sans Thai": [400, 700, 900],
    },
  },
});
