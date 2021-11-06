import { Component, OnInit } from '@angular/core';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model';
import { Notification } from '../../shared/models/notification.model';
import { faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../shared/models/user.model';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  cryptocurrencies: Cryptocurrency[] = [];
  users: User[] = [];
  notifications: Notification[] = [];
  deleteIcon = faTrash;

  constructor(private restApi: RestApiService) {}

  ngOnInit(): void {
    this.loadCryptocurrencies();
    this.loadNotifications();
    this.loadUsers();
  }

  loadCryptocurrencies(): void{
    this.restApi.getAllCryptocurrencies().subscribe((data: {}) => {
      this.cryptocurrencies = data as Cryptocurrency[];
    });
  }

  loadNotifications(): void{
    this.restApi.getAllNotifications().subscribe((data: {}) => {
      this.notifications = data as Notification[];
    });
  }

  loadUsers(): void{
    this.restApi.getAllUsers().subscribe((data: {}) => {
      this.users = data as User[];
    });
  }

  removeCryptocurrency(cryptocurrencyName: string): void{
    this.restApi.deleteCryptocurrency(cryptocurrencyName);
  }

  readRoles(user: User): string{
    console.log(user.role);

    if ( user.role !== undefined)
    {
      return user.role.toString();
    }else{
      return 'missing';
    }
  }

}
