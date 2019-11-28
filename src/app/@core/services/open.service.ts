import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CONFIG, Config } from '@core/core.options';
import { UVModel } from '@core/models';

@Injectable()
export class OpenService {

  count = 0;

  constructor(
    private http: HttpClient,
    @Inject(CONFIG) private config: Config,
  ) {}

  categories() {
    return this.http
      .get('https://api.publicapis.org/categories');
  }

  add() {
    this.count++;
  }

  uv() {
    const url = 'http://opendata.epa.gov.tw/webapi/Data/UV/?$orderby=PublishTime%20desc&$skip=0&$top=1000&format=json';

    return this.http
      .jsonp<any>(url, 'callback')
      .pipe(
        map(list => list.map(item => new UVModel(item))),
      );
  }
}
