import { defineConfig } from 'cypress'

export default defineConfig({
  retries: 2,  
  e2e: {
    baseUrl: 'https://burton.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  }
})
