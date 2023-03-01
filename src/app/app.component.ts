import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularprojet';

  public addition(chiffre1:number, chiffre2:number): number {
    return chiffre1 + chiffre2;
  }
}