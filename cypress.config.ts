import { defineConfig } from 'cypress'

export default defineConfig({
  retries: 2, 
  supportFolder: './cypress/e2e/smoke',
  e2e: {
    baseUrl: 'https://burton.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  }
})
