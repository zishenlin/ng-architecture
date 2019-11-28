import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() { }

  login(value: any) {
    const mockData = {
      isSuccess: true,
      errorMessage: '',
      returnObject: {},
    };

    return of(mockData);
  }
}
