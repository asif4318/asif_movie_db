import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const BASE_URL = new InjectionToken<string>("Base URL");

export function provideBaseUrl(value: string) {
  return { provide: BASE_URL, useValue: value };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideClientHydration(), 
    provideHttpClient(),
    provideBaseUrl('http://127.0.0.1:3000/')
  ]
};
