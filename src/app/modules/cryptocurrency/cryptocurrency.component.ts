import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model'



@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {

  cryptocurrency!:Cryptocurrency;
  cryptocurrencyName: any;

  constructor(private restApiService:RestApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cryptocurrencyName=this.route.snapshot.paramMap.get('name');
    this.restApiService.getCryptocurrency(this.cryptocurrencyName).subscribe(data=>this.cryptocurrency);
  }

}
