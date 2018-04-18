import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news';
import { oilPrice } from './oilPrice';


@Injectable()
export class AllServiceService {
  getNewsListUrl='assets/package.json';
  getOilPriceUrl='assets/oilPrice.json';
  newsList: News[];
  oilPriceList: oilPrice[];

  constructor(private http:HttpClient) { }

  getNewsList(){
    return this.http.get<News[]>(this.getNewsListUrl)
  }

  getOilPrice(){
    return this.http.get<oilPrice[]>(this.getOilPriceUrl)
  }

}
