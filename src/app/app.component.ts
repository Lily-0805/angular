import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  navName='资讯';

  changeNav(name):void{
    this.navName=name
  }

  ngOnInit(): void {
    var locationurl = location.href;
    if(locationurl.indexOf("news") > 0){
      this.navName='资讯';
    }else if(locationurl.indexOf("price") > 0){
      this.navName='价格';
    }


  }





}
