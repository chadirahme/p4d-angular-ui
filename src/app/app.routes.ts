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

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contactus', component: ContactusComponent},
  {path:'aboutus' , component:AboutusComponent},
  {path:'events' , component:EventsComponent},
  {path:'catering',component:CateringComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:type',component:ProductsComponent},
  {path:'cakes',component:CakesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}