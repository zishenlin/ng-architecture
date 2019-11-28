import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { OpenService } from './services/open.service';
import { environment } from 'src/environments/environment';
import { OpenMockService } from './mock/open-mock.service';
import { CONFIG, DefaultConfig } from './core.options';
// import { AuthModule } from '@auth/auth.module';

const useMock = environment.useMock;

const PROVIDERS = [
  // ...AuthModule.forRoot().providers,
  { provide: OpenService, useClass: useMock ? OpenMockService: OpenService, },
  { provide: CONFIG, useValue: DefaultConfig },
];

@NgModule({
  declarations: [],
  imports: [
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...PROVIDERS,
      ]
    };
  }
}
