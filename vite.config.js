import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['8419153b05f9.ngrok-free.app'], // 👈 добавь сюда свой ngrok-домен
    host: true, // чтобы принимать внешние подключения
    port: 5174
  }
})
