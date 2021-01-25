import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrenciesComponent } from './modules/cryptocurrencies/cryptocurrencies.component';
import { CryptocurrencyComponent } from './modules/cryptocurrency/cryptocurrency.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'cryptocurrency',component: CryptocurrenciesComponent},
  {path:'cryptocurrency/:name',component: CryptocurrencyComponent},
  {path:'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
