import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-7clsee1nzr8ucaon.us.auth0.com',
      clientId: 'd1WhcWHJt6QYBOPtP71K0Q4gECmalzk8',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200',
      },
    }),
  ]
};
