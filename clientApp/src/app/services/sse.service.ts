import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  private sseUrl?: string;
  private eventSource?: EventSource;
  private _message$ = new Subject<any>();

  message$ = this._message$.asObservable();

  constructor() { }

  start() {
    this.sseUrl = environment.sseUrl;
    this.eventSource = new EventSource(this.sseUrl);

    this.eventSource.onmessage = event => {
      this._message$.next(JSON.parse(event.data));
    };

    this.eventSource.onerror = error => {
      console.error('EventSource error: ', error);
    };
  }

  stop() {
    this.eventSource?.close();
  }
}
