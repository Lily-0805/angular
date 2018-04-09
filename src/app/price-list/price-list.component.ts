import { Component, OnInit,EventEmitter } from '@angular/core';
import { AllServiceService } from '../all-service.service';
import { Material } from '../material'

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
  vary=0;
  modifyTime="11-27";
  indexPrice=680;

  isFollow=1;
  editMaterialMaskFlag=false;
  editMaterialFlag=false;

  materialList:Material[];



  constructor(private allService : AllServiceService) { }

  ngOnInit() {
    this.getMaterialList();
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
      this.vary=-100;
      this.modifyTime="11-28";
      this.indexPrice=756;
    }

    if(this.cateTypeName=="PVC"){
      this.price=5680;
      this.vary=160;
      this.modifyTime="11-29";
      this.indexPrice=699;
    }


    //this.getNewsList00()
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

}
