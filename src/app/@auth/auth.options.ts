import { InjectionToken } from '@angular/core';

export const DEFAULT_CONFIG = {
  form: {
    login: {
      username: {
        required: true,
        minLength: 3,
      },
      password: {
        required: true,
      },
      redirect: {
        url: '',
        delay: 1000,
      },
      messages: {
        error: '',
        success: '',
      }
    },
  },
};

export type DefaultConfig = typeof DEFAULT_CONFIG;

export const AUTH_DEFAULT_CONFIG = new InjectionToken<DefaultConfig>('auth default config');
export const AUTH_CONFIG = new InjectionToken<DefaultConfig>('auth config');
