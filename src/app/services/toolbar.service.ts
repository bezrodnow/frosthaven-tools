import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  public title = signal('Test')

  setTitle(title: string) {
    this.title.set(title)
  }
}
