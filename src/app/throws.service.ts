import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Throws} from './constants/db.constant';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class ThrowsService {
  constructor(private http: Http) {
  }

  getThrows(mapName: string, throwType: string = 'smoke', throwSide: string = 't'): Observable<Throws[]> {
    return this.http.get('assets/json/throws.json')
      .map((resp: Response) => {
        const data = resp.json().throws;
        return data.filter((item) => {
          return item.map === mapName && item.type === throwType && item.side === throwSide;
        });
      });
  }
}
