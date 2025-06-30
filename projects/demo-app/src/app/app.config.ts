import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFormfy } from 'ngx-formfy';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFormfy({
      apiKey: 'fk_28b869e8da09d59654e09b67e540ecd49a971986b1d9bda0de2b7660fe0b8456',
      projectId: '88a8da6b-ff05-4aad-b530-684566bcc20d'
    }),
    provideRouter(routes)
  ]
};
