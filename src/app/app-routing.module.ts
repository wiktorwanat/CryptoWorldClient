import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrenciesComponent } from './modules/cryptocurrencies/cryptocurrencies.component';
import { CryptocurrencyComponent } from './modules/cryptocurrency/cryptocurrency.component';
import { LoginComponent } from './modules/login/login.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { MyCryptocurrenciesComponent } from './modules/my-cryptocurrencies/my-cryptocurrencies.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'cryptocurrency',component: CryptocurrenciesComponent},
  {path:'cryptocurrency/:name',component: CryptocurrencyComponent},
  {path:'login',component: LoginComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'myCryptocurrencies',component:MyCryptocurrenciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
