import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FindPasswordComponent } from './find-password/find-password.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { PriceListComponent } from './price-list/price-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/newsList',pathMatch:'full'},
  {path:'newsList',component:NewsListComponent},
  {path:'news/:id',component:NewsDetailComponent},
  {path:'priceList',component:PriceListComponent},
  {path:'login',component:LoginComponent},
  {path:'findPassword',component:FindPasswordComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
