import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3030,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/vitest.setup.ts',
        include: ['src/**/*.test.{ts,tsx}'],
    }
})

