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
          const url = req.url ? req.url.split('?')[0] : '';
          
          // Se for /gamejam10 ou /gamejam10/ (e não for um arquivo como .css ou .js)
          // reescrevemos internamente para index.html para que o Vite sirva o arquivo
          // sem alterar a URL do navegador.
          if ((url === '/gamejam10' || url.startsWith('/gamejam10/')) && !url.includes('.')) {
            req.url = '/gamejam10/index.html';
          }
          
          next();
        });
      }
    }
  ]
});
