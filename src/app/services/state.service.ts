import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  counter = signal(10);

  inc() {
    this.counter.set(this.counter() +1);
  }
}
