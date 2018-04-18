import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';
import { Material } from '../material'
import { Price } from '../price'

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  cateTypeName='PE';
  cateTypes=[
    {name:'PE',id:1},
    {name:'PP',id:2},
    {name:'PVC',id:3},
  ];
  cateType=1;
  moreCateType=false;

  price=6800;
  vary="0";
  modifyTime="6天前";
  indexPrice="0.33%";

  isFollow=1;
  editMaterialMaskFlag=false;
  editMaterialFlag=false;

  materialList:Material[];

  priceList:Price[];
  type=2;



  constructor(private allService : AllServiceService) { }

  ngOnInit() {
    this.getMaterialList();
    this.getPriceList12();
  }

  //显示品种
  showmoreCateType(){
    if(this.moreCateType){
      this.moreCateType=false;
    }else{
      this.moreCateType=true;
    }
  }

  //选择品种
  selectCateType(catetype):void{
    this.moreCateType=false;

    this.cateTypeName=catetype.name;
    this.cateType=catetype.id;

    if(this.cateTypeName=="PP"){
      this.price=7856;
      this.vary="-43";
      this.modifyTime="3天前";
      this.indexPrice="0.45%";
    }

    if(this.cateTypeName=="PVC"){
      this.price=5680;
      this.vary="+30";
      this.modifyTime="9天前";
      this.indexPrice="0.65%";
    }


  }


  //编辑牌号-弹窗
  showEditMaterialMask(flag):void{
    this.editMaterialMaskFlag=flag;
  }

  //编辑牌号
  showEditMaterial(flag):void{
    this.editMaterialFlag=flag;
  }

  //获取关注的牌号
  getMaterialList():void{
    this.allService.getNewsList()
      .subscribe(data => this.materialList = data['followMaterialList']);
  }

  //删除牌号
  deleteMaterial(materialList:Material):void{
    this.materialList = this.materialList.filter(m => m !== materialList);
  }

  changeType(type):void{
    this.type=type;
    if(type==1){
      this.getPriceList11();
    }else{
      this.getPriceList12();
    }
  }

  getPriceList11():void{
    this.allService.getNewsList()
      .subscribe(data => this.priceList = data['priceList11']);
  }
  getPriceList12():void{
    this.allService.getNewsList()
      .subscribe(data => this.priceList = data['priceList12']);
  }

}
