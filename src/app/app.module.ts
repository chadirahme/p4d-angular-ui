import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouters } from './app.routes';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventsComponent } from './events/events.component';
import { CateringComponent } from './catering/catering.component';
import { ProductsComponent } from './products/products.component';
import { CakesComponent } from './cakes/cakes.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreakFilterPipe } from './shared/break-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    ContactusComponent,
    AboutusComponent,
    EventsComponent,
    CateringComponent,
    ProductsComponent,
    CakesComponent,
    ProductDialogComponent,
    BreakFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductDialogComponent]
})
export class AppModule { }
