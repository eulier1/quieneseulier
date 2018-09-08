import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.sass']
})
export class DesktopComponent implements OnInit, AfterViewInit {

  public navigations = [
    { name: 'Acerca', value: 'About', isActive: true},
    { name: 'Portafolio', value: 'Portfolio', isActive: true},
    { name: 'Habilidades', value: 'Skill', isActive: true},
    { name: 'Otros', value: 'Other', isActive: true}
  ]

  selectOption = 'About';

  constructor() {

  }

  ngOnInit() {
    this.selectOption = 'About';
  }

  ngAfterViewInit(){
    this.selectOption = 'About';
  }

  navTo(name: string){
    this.selectOption = name;
  }

}
