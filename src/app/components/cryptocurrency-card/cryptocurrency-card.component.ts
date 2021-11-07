import { Component, Input } from '@angular/core';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cryptocurrency-card',
  templateUrl: './cryptocurrency-card.component.html',
  styleUrls: ['./cryptocurrency-card.component.css']
})
export class CryptocurrencyCardComponent {

  @Input() cryptocurrency!: Cryptocurrency;
  @Input() loggedIn: boolean;
  moreIcon = faArrowAltCircleUp;

  constructor() {
    this.loggedIn = false;
  }
}
