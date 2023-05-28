import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventsComponent } from './events/events.component';
import { CateringComponent } from './catering/catering.component';
import { ProductsComponent } from './products/products.component';
import { CakesComponent } from './cakes/cakes.component';
import { AliaMenuComponent } from './alia-menu/alia-menu.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ShopifyItemComponent } from './shopify-item/shopify-item.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contactus', component: ContactusComponent},
  {path:'aboutus' , component:AboutusComponent},
  {path:'events' , component:EventsComponent},
  {path:'catering',component:CateringComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:type',component:ProductsComponent},
  {path:'cakes',component:CakesComponent},
  {path:'menu',component:AliaMenuComponent},
  {path:'user',component:UserDataComponent},
  {path:'shopify',component:ShopifyItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}