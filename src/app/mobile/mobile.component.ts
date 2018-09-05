import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.sass']
})
export class MobileComponent implements OnInit, AfterViewInit {

  public innerWidth = 0

  public navigations = [
    { name: 'Acerca', value: 'About', isActive: true},
    { name: 'Portafolio', value: 'Portfolio', isActive: true},
    { name: 'Habilidades', value: 'Skill', isActive: true},
    { name: 'Otros', value: 'Other', isActive: true}
  ]

  selectOption = 'Home';

  constructor(){

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.selectOption = 'Home';
  }

  ngAfterViewInit(){
    this.innerWidth = window.innerWidth;
    this.selectOption = 'Home';
  }

  navTo(name: string){
    this.selectOption = name;
  }

}
