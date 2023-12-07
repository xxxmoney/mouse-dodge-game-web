// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-primevue'
  ],
  primevue: {
    components: {
      include: '*'
    },
    options: {
      unstyled: false,
      ripple: true,
      inputStyle: 'filled'
    },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
  },
  css: [
      'primevue/resources/themes/lara-light-blue/theme.css'
  ],
  ssr: false
})
