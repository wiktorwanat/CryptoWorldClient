import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  cryptocurrencies: any = [];
  searchText = '';
  searchIcon = faSearch;

  constructor(public restApiService: RestApiService) {
  }

  ngOnInit(): void {
    this.loadAllCryptocurrencies();
  }


  loadAllCryptocurrencies(): void {
    this.restApiService.getAllCryptocurrencies().subscribe((data: {}) => {
      this.cryptocurrencies = data;
    });
  }
}
