import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-my-cryptocurrencies',
  templateUrl: './my-cryptocurrencies.component.html',
  styleUrls: ['./my-cryptocurrencies.component.css']
})
export class MyCryptocurrenciesComponent implements OnInit {

  userFavouriteCryptocurrencies:any =[];

  constructor(public restApiService:RestApiService) { 
  }

  ngOnInit(): void {
    this.loadUserCryptocurrency();
  }


  loadUserCryptocurrency(){
    return this.restApiService.getUserFavouriteCryptocurrencyList().subscribe((data:{}) => {
      console.log(data);
      this.userFavouriteCryptocurrencies=data;
    })
  }

}
