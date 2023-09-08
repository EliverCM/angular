import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObserverService {
  private _id = new Subject<any>();

  constructor() {}

  setID(value: object): void {
    this._id.next(value);
  }

  getID() {
    return this._id.asObservable();
  }

}
