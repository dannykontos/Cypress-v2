import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://burton.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})
