export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // Head configurations
  },

  serverMiddleware: ['~/api'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/store',
  ],

  pages: {
    '/': { // Set the root path to '/' 
      entry: 'notes.vue',
      endpoint: 'http://localhost:8000/api/notes' // Adjust according to the correct endpoint
    }
  },

  env: {
    apiUrl: process.env.API_URL || 'http://localhost:8000/api'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/router',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 3000 // Adjust to the correct port
  },

  router: {
    base: '/', // Set the base URL to '/'
  }
}
