import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Products } from '../shared/products';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

    homePath: string ="https://s3.ca-central-1.amazonaws.com/passionfordessert.net/assets/img/";
    form: FormGroup;
    description:string = " Passion for Dessert !!";
    productData:Products;


    constructor(
      private dataService: DataService,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ProductDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data:any) 
      {
        this.homePath+=data.productData.productType+"/";
        this.productData=data.productData;
      //this.description = data.productData.productName;
      }


  ngOnInit() {
    // this.form = this.fb.group({
    //     description: [this.description, []],
      
    // });
}

save() {
  this.dialogRef.close(this.form.value);
}

close() {
  this.dialogRef.close();
}

cartProductList:any = [];
addToCart(){
 
  this.cartProductList.push(this.productData); 
  console.log(this.cartProductList);
  console.log(this.cartProductList.length);
  this.dataService.addItem(this.productData);
  this.dataService.cartItems.next(this.cartProductList);
}

}
