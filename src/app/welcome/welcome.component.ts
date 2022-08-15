import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Products } from '../shared/products';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  homePath1: string = "assets/img/";
  homePath: string ="https://s3.ca-central-1.amazonaws.com/passionfordessert.net/assets/img/Home/";

  path: string = "assets/img/Cakes.jpg";
  products:Products[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    var x=0;

    this.dataService.getlistAllProductType('home').subscribe((data) => {
      console.log(data);
      this.products = data;
    })  
  }

}
