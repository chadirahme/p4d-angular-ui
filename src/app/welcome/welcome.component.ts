import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  path: string = "assets/img/Cakes.jpg";

  constructor() { }

  ngOnInit(): void {
    var x=0;
  }

}
