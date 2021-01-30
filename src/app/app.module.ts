import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptocurrenciesComponent } from './modules/cryptocurrencies/cryptocurrencies.component';
import { LoginComponent } from './modules/login/login.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { CryptocurrencyComponent } from './modules/cryptocurrency/cryptocurrency.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AuthInterceptor } from '../app/authInterceptor/authorization.interceptor';
import { MyCryptocurrenciesComponent } from './modules/my-cryptocurrencies/my-cryptocurrencies.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
