import {Component, OnInit} from '@angular/core';
import { AllServiceService } from '../all-service.service';
import { News } from '../news'



@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  cateTypeName='PE';
  cateTypes=[
    {name:'PE',id:1},
    {name:'PP',id:2},
    {name:'PVC',id:3},
  ];
  cateType=1;
  moreCateType=false;

  cates=[
    {name:'全部',id:0},
    {name:'开市早报',id:71},
    {name:'交易动态',id:72},
    {name:'收市点评',id:73},
    {name:'权威观察',id:74}
  ];
  cateId=0;

  newsList:News[];

  constructor(private allService : AllServiceService) { }

  ngOnInit(): void {
    this.getNewsList00()
  }

  showmoreCateType(){
    if(this.moreCateType){
      this.moreCateType=false;
    }else{
      this.moreCateType=true;
    }
  }


  selectCateType(catetype):void{
    this.moreCateType=false;

    this.cateTypeName=catetype.name;
    this.cateType=catetype.id;
    this.cateId=0;
    this.getNewsList00()
  }


  selectCate(cate):void{
    this.cateId=cate.id;
    if(cate.id==71){
      this.getNewsList71()
    }else if(cate.id==72){
      this.getNewsList72()
    }else if(cate.id==73){
      this.getNewsList73()
    }else if(cate.id==74){
      this.getNewsList74()
    }else{
      this.getNewsList00()
    }

  }


  getNewsList00():void{
    this.allService.getNewsList()
      .subscribe(data => this.newsList = data['newsList00']);
  }
  getNewsList71():void{
    this.allService.getNewsList()
      .subscribe(data => this.newsList = data['newsList71']);
  }
  getNewsList72():void{
    this.allService.getNewsList()
      .subscribe(data => this.newsList = data['newsList72']);
  }
  getNewsList73():void{
    this.allService.getNewsList()
      .subscribe(data => this.newsList = data['newsList73']);
  }
  getNewsList74():void{
    this.allService.getNewsList()
      .subscribe(data => this.newsList = data['newsList74']);
  }

  nav(){
    return "资讯"
  }

}

