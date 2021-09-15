import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';
import { CryptocurrencyComponent } from './components/cryptocurrency/cryptocurrency.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MyCryptocurrenciesComponent } from './components/my-cryptocurrencies/my-cryptocurrencies.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
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
