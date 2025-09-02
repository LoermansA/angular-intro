import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  backendUrl = "http://localhost:8080/"

  message = signal<Message>(new Message())

  constructor(private httpClient: HttpClient) { }

  callGreeter() {
    this.httpClient.get<Message>(this.backendUrl + "greeter").subscribe(
        response => {
          console.log(response.message);
          this.message.set(response);
        }
    )

    console.log('Call gedaan')
  }
}
