import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  cryptocurrencies:any =[];

  constructor(public restApiService:RestApiService) { 
  }

  ngOnInit(): void {
    this.loadAllCryptocurrencies();
  }


  loadAllCryptocurrencies(){
    return this.restApiService.getAllCryptocurrencies().subscribe((data:{}) => {
      console.log(data);
      this.cryptocurrencies=data;
    })
  }
}
