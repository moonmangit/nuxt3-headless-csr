import { preset } from "./assets/src/primevue/preset";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
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
  primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset,
        options: {
          prefix: "p",
          darkModeSelector: ".dark",
        },
      },
    },
  },
});
