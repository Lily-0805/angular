import { Component, OnInit, Input } from '@angular/core';
import { AllServiceService } from '../all-service.service';
import { oilPrice } from '../oilPrice'

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {
  @Input() cateType;
  @Input() cateTypeName;

  options:Object;
  oilPrice: oilPrice[];
  xSeries = [];
  ySeries = [];
  varySeries = [];
  screenWidth  = window.innerWidth-20;
  oilDay=7;
  oiltarget=false;
  targetClass="point-target";

  targetPrice:number;
  targetTime:string;
  targetVary:number;

  constructor(private allService : AllServiceService) {}

  ngOnInit() {


    this.getOilPrice(7);



  }

  getOilPrice(num):void{
    this.allService.getOilPrice()
      .subscribe(data => {
        this.oilPrice = data['oilPrice'];
        if(num==0){
          num=this.oilPrice.length
        }

        for(let i =0; i<num; i++){
          this.xSeries.push(this.oilPrice[i].modifyDate);
          this.ySeries.push(this.oilPrice[i].price);
          this.varySeries.push(this.oilPrice[i].vary);
        }

        this.options = {
          title: {
            text: null
          },
          chart:{
            width:this.screenWidth,
            height:220
          },
          legend:{
            enabled:false
          },
          credits:{
            enabled:false
          },
          tooltip: {
            enabled:false
          },
          xAxis: {
            categories: this.xSeries,
            gridLineColor: '#eee',
            gridLineWidth: 1,
            lineColor:'#eee',
            minorTickColor: '#eee'
          },
          yAxis: {
            title: {
              text: null
            },
            gridLineColor: '#eee',
            gridLineWidth: 1,
            lineColor:'#eee',
            minorTickColor: '#eee'
          },
          series: [{
            type: "line",
            data: this.ySeries,
            allowPointSelect:true
          }],
        }
      });

  }

  onPointSelect(e){
    this.targetTime = e.context.category;
    this.targetPrice = e.context.y;
    var index = e.context.index;
    this.targetVary = this.varySeries[index];
    this.oiltarget=true;

    if(this.targetVary>0){
      this.targetClass="point-target up";
    }else if(this.targetVary<0){
      this.targetClass="point-target down";
    }else{
      this.targetClass="point-target";
    }

  }

  changeOilDay(num){
    this.getOilPrice(num);
    this.oilDay=num;
  }





}


