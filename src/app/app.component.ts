import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router,
    private dataService: DataService) {
      this.dataService.cartItems.subscribe(value=>{
        console.log("cnt>> "+value);
        this.carts =this.dataService.cartProductList.length;
      });
  }

  element: HTMLElement;
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.element =document.getElementById('home') as HTMLElement;
    this.element.classList.add("rotate");

    this.route.queryParams
      .subscribe(params => {
        //console.log(window.location.href);

        //this.element =document.getElementById('dessert') as HTMLElement;
      //  this.element.classList.add("rotate");

       // console.log(this.router.url);
        //console.log(this.route); // { orderby: "price" }
       // this.orderby = params.orderby;
        //console.log(this.orderby); // price
      }
    );

  }
  title = 'hinawi-erp-ui';

   toggle : boolean = false;
   carts: number;

  test(event:any){
    this.toggle = !this.toggle;     
    console.log(event.srcElement);
    event.srcElement.classList.add("rotate");
    console.log('tesss');
  }

  calcTotal() {
    //return this.products.reduce((acc, prod) => acc+= prod.num ,0)
    return 1;
  }
}
