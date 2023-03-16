import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {

  element: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    document.getElementById('home')?.classList.remove("rotate");
    this.element =document.getElementById('catering') as HTMLElement;
    this.element.classList.add("rotate");
  }

}
