import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as proxy from 'http-proxy-middleware';
import { environment } from 'src/environments/environment';
import { Express } from 'express';

export function app(lang: string): Express {
  const server = express();
  const distFolder = join(process.cwd(), `dist/browser/${lang}`);
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  const apiProxy = proxy('/api', { target: 'http://localhost:3000' });
  server.use('/api', apiProxy);

  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  server.get('*', (req, res) => {
    res.render(`${indexHtml}`, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: `${req.baseUrl}` }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4200;

  const appFr = app('ua');
  const appEn = app('en');

  const server = express();
  server.use('/ua', appFr);
  server.use('/en', appEn);
  server.use('', appEn);

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (
  (!environment.production && moduleFilename === __filename) ||
  moduleFilename.includes('iisnode')
) {
  run();
}

export * from './src/main.server';
