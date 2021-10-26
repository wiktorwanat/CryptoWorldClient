import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { Cryptocurrency } from '../../shared/models/cryptocurrency.model';
import { faBell, faGlobe, faLink, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Notification, NotificationType } from '../../shared/models/notification.model';


@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {

  cryptocurrency: Cryptocurrency = new Cryptocurrency();
  cryptocurrencyName: any;
  notification: Notification = new Notification();
  notificationTypesOptions = [
    { name: 'Price will go over', value: NotificationType.OVER },
    { name: 'Price will drop to', value: NotificationType.BELOW }
  ];
  plusIcon = faPlus;
  redirectIcon = faLink;
  websiteIcon = faGlobe;
  twitterIcon = faTwitter;
  redditIcon = faReddit;
  githubIcon = faGithub;
  notificationIcon = faBell;


  constructor(private restApiService: RestApiService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cryptocurrencyName = this.route.snapshot.paramMap.get('name');
    this.restApiService.getCryptocurrency(this.cryptocurrencyName).subscribe(
      data => {
        this.cryptocurrency = data;
      }
    );
  }

  public addCryptocurrencytoUserFavourite(): void {
    this.restApiService.addCryptocurrencytoUserFavouriteList(this.cryptocurrencyName).subscribe(
      data => this.router.navigate(['/myCryptocurrencies'])
    );
  }

  public createNotification(): void {
    console.log(this.notification.value);
    console.log(this.notification.notificationType);
  }

  public goToWebsite(): void {
    this.redirect(this.cryptocurrency.cryptocurrencyDetails.websiteUrl);
  }

  public goToTwitter(): void {
    this.redirect(this.cryptocurrency.cryptocurrencyDetails.twitterUrl);
  }

  public goToDocumentation(): void {
    this.redirect(this.cryptocurrency.cryptocurrencyDetails.technicalDocumentationUrl);
  }

  public goToReddit(): void {
    this.redirect(this.cryptocurrency.cryptocurrencyDetails.redditUrl);
  }

  public goToSourceSite(): void {
    this.redirect(this.cryptocurrency.cryptocurrencyDetails.sourceCodeUrl);
  }

  public goToForum(): void {
    this.redirect(this.cryptocurrency.cryptocurrencyDetails.forumUrl);
  }

  redirect(url: string): void {
    window.location.href = url;
  }
}
