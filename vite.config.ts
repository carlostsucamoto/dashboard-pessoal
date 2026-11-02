import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-legacy',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.startsWith('/legacy/') || req.url === '/legacy')) {
            const cleanUrl = req.url.split('?')[0];
            let filePath = path.join(__dirname, 'public', cleanUrl);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
              filePath = path.join(filePath, 'index.html');
            }
            if (fs.existsSync(filePath)) {
              if (filePath.endsWith('.html')) res.setHeader('Content-Type', 'text/html; charset=utf-8');
              else if (filePath.endsWith('.css')) res.setHeader('Content-Type', 'text/css; charset=utf-8');
              else if (filePath.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
              return res.end(fs.readFileSync(filePath));
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173
  }
});
