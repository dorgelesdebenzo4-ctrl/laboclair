import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`          -> version GitHub Pages (PWA, hors ligne)
// `npm run build:preview`  -> un seul fichier HTML (aperçu)
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    react(),
    mode === 'preview'
      ? viteSingleFile()
      : VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['icon.svg'],
          manifest: {
            name: 'LaboClair — Biologie médicale',
            short_name: 'LaboClair',
            description: 'Apprendre la biologie médicale (TBM) simplement.',
            lang: 'fr',
            theme_color: '#136d92',
            background_color: '#0f1720',
            display: 'standalone',
            start_url: './',
            icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
          },
          workbox: { globPatterns: ['**/*.{js,css,html,svg,png,woff2}'] },
        }),
  ],
  build: mode === 'preview' ? { outDir: 'dist-preview' } : {},
}))
