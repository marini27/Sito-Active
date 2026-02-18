// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/icon'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo-zinella.png' }
      ]
    }
  },
  ui: {
    theme: {
      colors: {
        primary: 'yellow',
        neutral: 'zinc',
      },
    },
  },
})