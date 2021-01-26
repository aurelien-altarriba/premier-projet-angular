import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  constructor(private appareilService: AppareilService) {
    this.appareilSubscription = null;
    this.appareils = [];
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );

    this.appareilService.emitAppareilSubject();
  }

  isAuth: boolean = false;
  appareils: any[];
  appareilSubscription: Subscription | null;

  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  getActif() {
    if (this.isAuth) {
      return 'btn btn-success';
    } else {
      return 'btn btn-secondary';
    }
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
}
