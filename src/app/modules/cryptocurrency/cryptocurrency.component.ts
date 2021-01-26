import { Component, OnInit,Input } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model'


@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {

  //cryptocurrency:null;
  //@Input('cryptocurrencyName') cryptocurrencyName!: string;

  constructor(private restApiService:RestApiService) { }

  ngOnInit(): void {
    //this.restApiService.getCryptocurrency(this.cryptocurrencyName).subscribe(data=>this.cryptocurrency);
  }

}
