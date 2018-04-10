import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {
  @Input() cateType;
  @Input() cateTypeName;
  constructor() { }

  ngOnInit() {
  }

}
