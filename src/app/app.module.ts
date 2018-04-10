import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { PriceListComponent } from './price-list/price-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { LoginComponent } from './login/login.component';
import { FindPasswordComponent } from './find-password/find-password.component';

import { AllServiceService } from './all-service.service';
import { AppRoutingModule } from './/app-routing.module';
import { PriceChartComponent } from './price-chart/price-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    PriceListComponent,
    NewsDetailComponent,
    LoginComponent,
    FindPasswordComponent,
    PriceChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AllServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
