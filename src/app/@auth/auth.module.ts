import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from '@shared/shared.module';
import { AUTH_CONFIG, DEFAULT_CONFIG, AUTH_DEFAULT_CONFIG, DefaultConfig } from './auth.options';
import { AuthService } from './auth.service';
import { defaultsDeep } from 'lodash';

export function authConfigFactory(option: any) {
  const authConfig = defaultsDeep(option, DEFAULT_CONFIG);
  return authConfig;
}

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {

  static forRoot(option: DefaultConfig = DEFAULT_CONFIG): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: AUTH_DEFAULT_CONFIG, useValue: option},
        { provide: AUTH_CONFIG, useFactory: authConfigFactory, deps: [AUTH_DEFAULT_CONFIG] },
        AuthService,
      ]
    };
  }

}
