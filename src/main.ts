import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
    console.error(err);
    const marker = document.createElement('pre');
    marker.style.whiteSpace = 'pre-wrap';
    marker.style.padding = '16px';
    marker.style.margin = '16px';
    marker.style.background = '#fff4f4';
    marker.style.color = '#7a1f1f';
    marker.style.border = '1px solid #e3b3b3';
    marker.textContent = `App bootstrap failed:\n${String(err)}`;
    document.body.appendChild(marker);
  });
