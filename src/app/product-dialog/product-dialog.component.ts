import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Products } from '../shared/products';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

    homePath: string ="https://s3.ca-central-1.amazonaws.com/passionfordessert.net/assets/img/";
    form: FormGroup;
    description:string = " Passion for Dessert.  Serve for 10 persons";
    productData:Products;


    constructor(
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


}
