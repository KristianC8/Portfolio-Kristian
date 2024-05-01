import { robots } from 'vite-plugin-robots'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    robots({
      /* pass your config */
    })
  ],

})
