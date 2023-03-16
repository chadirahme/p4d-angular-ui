import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  element: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    document.getElementById('home')?.classList.remove("rotate");
  
    this.element =document.getElementById('aboutus') as HTMLElement;
    this.element.classList.add("rotate");
  }

}
