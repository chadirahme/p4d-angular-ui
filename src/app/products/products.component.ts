import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { Products } from '../shared/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  homePath: string ="https://s3.ca-central-1.amazonaws.com/passionfordessert.net/assets/img/";
  products:Products[];
  type:any = "Cakes";

  constructor(private dataService: DataService,private _Activatedroute:ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    var x=0;
    
    document.getElementById('home')?.classList.remove("rotate");
    document.getElementById('dessert')?.classList.add("rotate");

    

    this.type=this._Activatedroute.snapshot.paramMap.get("type")==null?"Cakes":this._Activatedroute.snapshot.paramMap.get("type");
    this.homePath+=this.type+"/";

    switch(this.type){
      case "Muffins": { 
        document.getElementById('Muffins')?.classList.add("rotate");
        break; 
     }
     case "CupCakes": { 
      document.getElementById('CupCakes')?.classList.add("rotate");
      break; 
   }

   case "Cookies": { 
    document.getElementById('Cookies')?.classList.add("rotate");
    break; 
 }

 case "Tart": { 
  document.getElementById('Tart')?.classList.add("rotate");
  break; 
}

case "Bars": { 
  document.getElementById('Bars')?.classList.add("rotate");
  break; 
}
     
     default: { 
      document.getElementById('Cakes')?.classList.add("rotate");
      break; 
   } 

    }

  //     this._Activatedroute.paramMap.subscribe(params => { 
  //     console.log(params);
  //      this.type = params.get('type')==null?"Cakes":params.get('type'); 
  //      this.homePath+=this.type+"/";
  //     //  let products=this._productService.getProducts();
  //     //  this.product=products.find(p => p.productID==this.id);    
  //  });

    this.dataService.getlistAllProductType(this.type).subscribe((data) => {
      console.log(data);
      this.products = data;
    })  
  }

  openDialog(product:Products) {

    console.log("open...");

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
   // dialogConfig.panelClass='my-class';
    //dialogConfig.autoFocus = true;

  //   dialogConfig.position = {
  //     top: '100',
  //     left: '100'
  // };

  dialogConfig.data = {
    id: 1,
    title: product.productName,
    productData:product
};

    this.dialog.open(ProductDialogComponent, dialogConfig);

    console.log("open...");
  }

}
