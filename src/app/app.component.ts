import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'hello-world';
  markdown: string = '';

  constructor() {}

  public multiplyFunction(a: number, b: number): number {
    return a * b;
  }
}
