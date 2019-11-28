import { InjectionToken } from '@angular/core';

export interface Config {
  baseUrl: string;
}

export const CONFIG = new InjectionToken<Config>('app config');

export const DefaultConfig = {
  baseUrl: 'https://api.publicapis.org/',
}
