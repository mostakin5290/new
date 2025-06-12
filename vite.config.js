import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // This makes the server accessible externally
    port: 5173,      // The port your app will run on
    
    // Add this allowedHosts section
    // It's a security feature of Vite
    allowedHosts: [
      'new-vs9s.onrender.com' // Your Render deployment URL
    ],

    // For HMR (Hot Module Replacement) to work with a reverse proxy
    hmr: {
      clientPort: 443,
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  }
})
