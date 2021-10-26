import { Cryptocurrency } from './cryptocurrency.model';

export class Notification{
  id !: string;
  value!: number;
  cryptocurrency!: Cryptocurrency;
  notificationType!: NotificationType;
}

export class NotificationRequest {
  notificationValue?: number;
  notificationCryptocurrencyName?: string;
  notificationOwner?: string;
  notificationType?: NotificationType;

  constructor() {
    this.notificationOwner = '';
    this.notificationType = NotificationType.OVER;
    this.notificationCryptocurrencyName = '';
    this.notificationValue = 0.0;
  }
}

export enum NotificationType{
 BELOW, OVER
}

