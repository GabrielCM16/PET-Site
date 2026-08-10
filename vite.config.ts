import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [
    {
      name: 'serve-gamejam10-dev',
      configureServer(server) {
        server.middlewares.use((req: any, res: any, next: any) => {
          // Pega a URL limpa sem os parâmetros de query (?v=123, etc)
          const url = req.url ? req.url.split('?')[0] : '';
          
          // 1. Força a barra no final se o usuário digitar sem ela (evita quebra de CSS)
          if (url === '/unipet') {
            res.writeHead(301, { Location: '/unipet/' });
            return res.end();
          }
          if (url === '/gamejam10') {
            res.writeHead(301, { Location: '/gamejam10/' });
            return res.end();
          }

          // 2. Se a rota for a pasta e não um arquivo direto (.css, .js, .png), serve o index.html
          if (url.startsWith('/gamejam10/') && !url.includes('.')) {
            req.url = '/gamejam10/index.html';
          } else if (url.startsWith('/unipet/') && !url.includes('.')) {
            req.url = '/unipet/index.html';
          }
          
          next();
        });
      }
    }
  ]
});
