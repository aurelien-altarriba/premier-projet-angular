import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  constructor() {
    this.appareilName = "Indéfini";
    this.appareilStatus = "Inconnu";
  }

  ngOnInit(): void {
  }

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    } else {
      return 'grey';
    }
  }
}
