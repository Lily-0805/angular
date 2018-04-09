import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { News } from './news'


@Injectable()
export class AllServiceService {
  getNewsListUrl='assets/package.json';
  newsList: News[];

  constructor(private http:HttpClient) { }

  getNewsList(){
    return this.http.get<News[]>(this.getNewsListUrl)


  }

}
