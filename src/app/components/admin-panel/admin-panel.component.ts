import { Component, OnInit } from '@angular/core';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model';
import { Notification } from '../../shared/models/notification.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../shared/models/user.model';
import { RestApiService } from '../../services/rest-api.service';
import { CryptocurrencyDetails } from '../../shared/models/cryptocurrencyDetails.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  cryptocurrencies: Cryptocurrency[] = [];
  cryptocurrencyDetailsList: CryptocurrencyDetails[] = [];
  users: User[] = [];
  deleteIcon = faTrash;

  constructor(private restApi: RestApiService) {}

  ngOnInit(): void {
    this.loadCryptocurrencies();
    this.loadCryptocurrencyDetailsList();
    this.loadUsers();
  }

  loadCryptocurrencies(): void{
    this.restApi.getAllCryptocurrencies().subscribe((data: {}) => {
      this.cryptocurrencies = data as Cryptocurrency[];
    });
  }

  loadUsers(): void{
    this.restApi.getAllUsers().subscribe((data: {}) => {
      this.users = data as User[];
    });
  }

  loadCryptocurrencyDetailsList(): void{
    this.restApi.getAllCryptocurrencyDetails().subscribe((data: {}) => {
      this.cryptocurrencyDetailsList = data as CryptocurrencyDetails[];
    });
  }

  removeCryptocurrency(cryptocurrencyName: string): void{
    this.restApi.deleteCryptocurrency(cryptocurrencyName).subscribe();
  }

  removeCryptocurrencyDetails(cryptocurrencyDetailsName: string): void{
    this.restApi.removeCryptocurrencyDetails(cryptocurrencyDetailsName).subscribe();
  }

  checkCryptocurrencyDetails(cryptocurrency: Cryptocurrency): string{
    if (cryptocurrency.cryptocurrencyDetails != null){
      return 'Details available';
    }else{
      return 'Missing Details';
    }
  }

}
