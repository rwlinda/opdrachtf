// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  icon: {
    componentName: 'NuxtIcon',
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons'
      },
    ],
  },
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: "first" }],
    configPath: '~/tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  }
})