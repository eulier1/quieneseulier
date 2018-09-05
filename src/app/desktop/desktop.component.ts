import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.sass']
})
export class DesktopComponent implements OnInit {

  public innerWidth = 0
  public displayMobileUX = false
  public displayDesktopUX = false

  public slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  public slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  public navigations = [
    { name: 'Acerca', isActive: true},
    { name: 'Portafolio', isActive: true},
    // { name: 'Habilidades', isActive: true},
    // { name: 'Otros', isActive: true}
  ]

  selectOption = 'Acerca';

  constructor() { }

  ngOnInit() {
  }

  navTo(name: string, ev: any){
    ev.preventDefault();
    this.selectOption = name;
  }

}
