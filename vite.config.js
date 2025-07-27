import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['market.vercel.app'], // 👈 добавь сюда свой ngrok-домен
    host: true, // чтобы принимать внешние подключения
    port: 5174
  }
})
