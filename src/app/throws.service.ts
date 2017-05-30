import { Injectable } from '@angular/core';
import { db, Db } from './constants/kinda-db/db.constant';

@Injectable()
export class ThrowsService {
  getThrows(): Promise<Db> {
    return Promise.resolve(db);
  }
}
