import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CryptocurrencyComponent } from './components/cryptocurrency/cryptocurrency.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AuthInterceptor } from '../app/authInterceptor/authorization.interceptor';
import { MyCryptocurrenciesComponent } from './components/my-cryptocurrencies/my-cryptocurrencies.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchPipe } from './pipes/search.pipe';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponentComponent } from './components/charts/line-chart-component/line-chart-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent,
    CryptocurrenciesComponent,
    LoginComponent,
    RegistrationComponent,
    MyCryptocurrenciesComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NotificationsComponent,
    SearchPipe,
    LineChartComponentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbTooltipModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
