import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { Notification, NotificationRequest } from '../../shared/models/notification.model';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model';
import { TokenStorageService } from '../../services/token-storage.service';
import { faMinus, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  cryptocurrencyList: Cryptocurrency[] = [];
  userNotifications: Notification[] = [];
  newNotification: NotificationRequest = new NotificationRequest();
  username?: string;
  minusIcon = faMinus;
  editIcon = faPen;

  constructor(private restApiService: RestApiService,
              private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.loadUserNotifications();
    this.loadAllCryptocurrencies();
  }

  loadUserNotifications(): void {
    this.restApiService.getUserNotifications().subscribe((data: {}) => {
      console.log(data);
      this.userNotifications = data as Notification[];
    });
  }

  loadAllCryptocurrencies(): void {
    this.restApiService.getAllCryptocurrencies().subscribe((data: {}) => {
      this.cryptocurrencyList = data as Cryptocurrency[];
    });
  }

  createNotification(): void {
    const user = this.tokenStorageService.getUser();
    this.newNotification.notificationOwner = user.username;
    this.restApiService.createNotification(this.newNotification);
  }

  removeNotification(notification: Notification): void{
    this.restApiService.removeNotification(notification.id);
    this.loadUserNotifications();
  }

  editNotification(notification: Notification): void{
    this.restApiService.updateNotification(notification);
    this.loadUserNotifications();
  }

}
