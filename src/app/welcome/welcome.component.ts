import { Component, OnInit } from '@angular/core';
import { IndividualConfig } from 'ngx-toastr';
import { DataService } from '../data.service';
import { NotificationService, toastPayload } from '../notification.service';
import { Products } from '../shared/products';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  homePath1: string = "assets/img/";
  homePath2: string ="https://s3.ca-central-1.amazonaws.com/passionfordessert.net/assets/img/Home/";
  homePath: string ="https://s3.ca-central-1.amazonaws.com/passion4d.ca/assets/img/Home/";

  path: string = "assets/img/Cakes.jpg";
  products:Products[];
  toast!: toastPayload;
  
  constructor(private dataService: DataService, private ts: NotificationService) { }

  ngOnInit(): void {
    var x=0;

    this.dataService.getlistAllProductType('home').subscribe((data) => {
      console.log(data);
      this.products = data;
    });

    this.toast = {
      // message: 'Some Message to Show',
      message: `Call us for pickup or <i>delievry</i><b></b>
                <h3>226-219-7708</h3>
                <i>1455 Lakeshore Rd., Burlington</i>
                <img src="assets/img/ramadan.jpeg"/>`,
      
      title: 'Maamoul',
      type: 'info',
      ic: {
        timeOut: 8500,
        closeButton: true,
      } as IndividualConfig,
    };
    this.ts.showToast(this.toast);

    //this.ts.showSuccess("messssss" , "ttititititit");
  }


}
