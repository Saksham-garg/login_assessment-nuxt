// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-04",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  vite: {
    resolve: {
      alias: {
        "lucide-vue-next": "lucide-vue-next/dist/lucide-vue-next.es.js",
      },
    },
    optimizeDeps: {
      include: ["class-variance-authority", "lucide-vue-next"],
    },
  },
  typescript: {
    strict: true,
    shim: false,
  },
});
