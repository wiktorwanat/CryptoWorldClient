import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { faBell, faMinus, faRing } from '@fortawesome/free-solid-svg-icons';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model';

@Component({
  selector: 'app-my-cryptocurrencies',
  templateUrl: './my-cryptocurrencies.component.html',
  styleUrls: ['./my-cryptocurrencies.component.css']
})
export class MyCryptocurrenciesComponent implements OnInit {

  userFavouriteCryptocurrencies: Cryptocurrency[] = [];
  minusIcon = faMinus;
  notificationIcon = faBell;

  constructor(public restApiService: RestApiService) {
  }

  ngOnInit(): void {
    this.loadUserCryptocurrency();
  }


  loadUserCryptocurrency(): void {
    this.restApiService.getUserFavouriteCryptocurrencyList().subscribe((data: {}) => {
      console.log(data);
      this.userFavouriteCryptocurrencies = data as Cryptocurrency[];
    });
  }

  removeFromFavourite(cryptocurrencyName: string): void{
    this.restApiService.removeCryptocurrencyFromUserFavouriteList(cryptocurrencyName).subscribe((data: {}) => {
      console.log(data);
      this.loadUserCryptocurrency();
    });
  }

}
