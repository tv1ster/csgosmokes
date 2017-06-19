import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Throws} from './constants/db.constant';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ThrowsService {
  constructor(private http: Http) {
  }

  getThrows(): Observable<Throws[]> {
    return this.http.get('assets/json/throws.json')
      .map((resp: Response) => {
        return resp.json().throws;
      });
  }
}
