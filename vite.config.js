import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function generateStaticRoutesPlugin() {
  return {
    name: 'generate-static-routes',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(distDir, 'index.html')

      if (!fs.existsSync(indexPath)) return

      const routes = [
        'noida',
        'noida/ghaziabad',
        'greater-noida',
        'ghaziabad',
        'physiotherapy-at-home',
        'back-pain-physiotherapy',
        'neck-pain-physiotherapy',
        'knee-pain-physiotherapy',
        'sports-injury-physiotherapy',
        'post-surgery-rehabilitation',
        'elderly-mobility-physiotherapy',
        'home-visit-physiotherapy'
      ]

      routes.forEach(route => {
        const routeDir = path.join(distDir, route)
        fs.mkdirSync(routeDir, { recursive: true })
        fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'))
      })

      // Ensure 404.html is present in dist
      const public404 = path.resolve(__dirname, 'public', '404.html')
      if (fs.existsSync(public404)) {
        fs.copyFileSync(public404, path.join(distDir, '404.html'))
      } else {
        fs.copyFileSync(indexPath, path.join(distDir, '404.html'))
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), generateStaticRoutesPlugin()],
})
