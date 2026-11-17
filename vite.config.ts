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
          includeAssets: ['icon.svg', 'apple-touch-icon.png'],
          manifest: {
            name: 'LaboClair — Biologie médicale',
            short_name: 'LaboClair',
            description: 'Apprendre la biologie médicale (TBM) simplement.',
            lang: 'fr',
            theme_color: '#0b4f6c',
            background_color: '#0f1720',
            display: 'standalone',
            start_url: './',
            icons: [
              { src: 'pwa-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
              { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
              { src: 'maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
              { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
            ],
          },
          workbox: { globPatterns: ['**/*.{js,css,html,svg,png,woff2}'] },
        }),
  ],
  build: mode === 'preview' ? { outDir: 'dist-preview' } : {},
}))
