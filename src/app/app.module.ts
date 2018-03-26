import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Base components
 * **/
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/**
 * External components
 * **/
import { HomeComponent } from './components/home/home.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MenuComponent } from './components/menu/menu.component';
import { HotelComponent } from './components/hotel/hotel.component';

/**
 * Services
 * */
import { HotelService } from './services/hotel.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltersComponent,
    MenuComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    HotelService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
