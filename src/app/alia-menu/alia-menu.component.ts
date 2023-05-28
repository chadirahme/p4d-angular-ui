import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alia-menu',
  templateUrl: './alia-menu.component.html',
  styleUrls: ['./alia-menu.component.css']
})
export class AliaMenuComponent implements OnInit {

  homePath: string ="https://s3.ca-central-1.amazonaws.com/passion4d.ca/assets/img/Cakes/c03_1.jpg";
  homePath1: string ="https://s3.ca-central-1.amazonaws.com/passion4d.ca/assets/img/Cakes/c01.jpg";

  menuItems = [
    { name: 'Espresso', description: 'A single shot of espresso', price: 2.50 },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 3.50 },
    { name: 'Latte', description: 'Espresso with steamed milk', price: 4.00 },
    { name: 'Americano', description: 'Espresso with hot water', price: 3.00 },
    { name: 'Iced Coffee', description: 'Chilled coffee over ice', price: 4.50 },
    { name: 'Tea', description: 'A selection of black, green, and herbal teas', price: 2.00 },
    { name: 'Hot Chocolate', description: 'Warm chocolate drink with whipped cream', price: 4.00 },
    { name: 'Croissant', description: 'Flaky pastry filled with butter and chocolate', price: 2.50 },
    { name: 'Bagel', description: 'Toasted bagel with cream cheese or butter', price: 3.00 },
    { name: 'Muffin', description: 'Freshly baked muffins in a variety of flavors', price: 2.75 },
    { name: 'Scone', description: 'Flaky pastry filled with dried fruit or nuts', price: 3.00 },
    { name: 'Quiche', description: 'Savory egg dish with cheese and vegetables', price: 5.00 },
    { name: 'Sandwich', description: 'Freshly made sandwiches with various fillings', price: 6.50 },
    { name: 'Soup', description: 'Homemade soups in a variety of flavors', price: 4.50 },
    { name: 'Salad', description: 'Freshly made salads with various toppings', price: 7.00 },
    { name: 'Fruit Cup', description: 'Assortment of fresh fruit in a cup', price: 3.50 },
    { name: 'Yogurt Parfait', description: 'Layered yogurt and fruit in a cup', price: 4.50 },
    { name: 'Smoothie', description: 'Blended fruit drink in a variety of flavors', price: 5.00 },
    { name: 'Milkshake', description: 'Blended ice cream drink in a variety of flavors', price: 6.00 },
    { name: 'Ice Cream Scoops', description: 'Assortment of ice cream flavors', price: 3.50 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
