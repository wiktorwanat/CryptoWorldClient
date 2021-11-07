import { Component } from '@angular/core';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model';
import { RestApiService } from '../../services/rest-api.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cryptocurrencyList: Cryptocurrency[] = [];
  isLoggedIn = false;

  constructor(private restApiService: RestApiService,
              private tokenStorageService: TokenStorageService) {
    this.loadAllCryptocurrencies();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  loadAllCryptocurrencies(): void {
    this.restApiService.getAllCryptocurrencies().subscribe((data: {}) => {
      this.cryptocurrencyList = data as Cryptocurrency[];
    });
  }
}
