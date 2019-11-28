import { Injectable, Inject } from '@angular/core';
import { OpenService } from '@core/services/open.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CONFIG, Config } from '@core/core.options';

@Injectable()
export class OpenMockService extends OpenService {

  constructor(
    http: HttpClient,
    @Inject(CONFIG) config: Config,
  ) {
    super(http, config);
  }

  categories() {
    return of([
      "Animals",
    ]);
  }
}
