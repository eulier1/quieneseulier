import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'quieneseulier';

  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  navigations = [
    { name: 'Acerca', isActive: true},
    { name: 'Portafolio', isActive: true},
    // { name: 'Habilidades', isActive: true},
    // { name: 'Otros', isActive: true}
  ]

  selectOption = 'Acerca';

  constructor(){

  }

  navTo(name: string){
    this.selectOption = name;
  }

  addSlide() {
    this.slides.push({img: 'http://placehold.it/350x150/777777'})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }



}
