import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth: boolean = false;

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  getActif() {
    if (this.isAuth) {
      return 'btn btn-success';
    } else {
      return 'btn btn-secondary';
    }
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
