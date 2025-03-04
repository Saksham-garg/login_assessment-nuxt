// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-03-04",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  vite: {
    optimizeDeps: {
      include: ["class-variance-authority", "lucide-vue-next"],
    },
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
    shim: false,
  },
});
