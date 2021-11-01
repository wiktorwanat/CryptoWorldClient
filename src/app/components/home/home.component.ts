import { Component, OnInit, ViewChild } from '@angular/core';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model';
import { RestApiService } from '../../services/rest-api.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cryptocurrencyList: Cryptocurrency[] = [];

  constructor(private restApiService: RestApiService) {
    this.loadAllCryptocurrencies();
  }

  loadAllCryptocurrencies(): void {
    this.restApiService.getAllCryptocurrencies().subscribe((data: {}) => {
      this.cryptocurrencyList = data as Cryptocurrency[];
    });
  }
}
