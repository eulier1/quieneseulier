import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../../model/project';

import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  @Output() nextStep = new EventEmitter<string>();

  currentProjectInfo: Project;

  images: GalleryItem[];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.initGallery();
    this.initProjectInfo();
  }

  displayProjectInfo(ev: any) {
    console.log(ev)
    this.currentIndex = ev.currIndex;
    switch (ev.currIndex) {
      case 0:
        this.showFirstProjectInfo();
        break;
      case 1:
        this.showFirstProjectInfo();
        break;
      case 2:
        this.showTwoProjectInfo();
        break;
      case 4:
        this.showTwoProjectInfo();
        break;
      case 5:
        this.showThreeProjectInfo();
        break;
      case 7:
        this.showThreeProjectInfo();
        break;
      case 8:
        this.showFourProjectInfo();
        break;
      case 15:
        this.showFourProjectInfo();
        break;

      default:
        break;
    }

  }

  initProjectInfo() {
    this.showFirstProjectInfo();
  }

  showFirstProjectInfo() {
    this.currentProjectInfo = {
      name: 'Intranet',
      description: `
      <p>Intranet para un cliente que deseaba gestionar la compra y venta de carros que emitía</p>
      <ul>
      <li> - Diseño utilizando Webflow</li>
      <li> - Implementación del sistema con Laravel, el ORM Eloquent, Jquery y PostgresSQL</li>
      <li> - Servidor web utilizado: Apache</li>
      </ul>
      `,
    };
  }

  showTwoProjectInfo() {
    this.currentProjectInfo = {
      name: 'Menú para hoy',
      description: `
      <p> Applicación movil hibrida para la busqueda y reservación en restaurantes, trabajando como desarrollador Front-End </p>
      <ul>
      <li> - Diseño utilizando Webflow</li>
      <li> - Trabajando con angularjs e Ionic 1</li>
      <li> - Muestra un timeline menu de restaurantes cercanos a su posición</li>
      <li> - Buscar restaurantes por nombres, precio, calificación y su posición cercana utilizando Google Maps</li>
      </ul>
      `,
    };
  }

  showThreeProjectInfo() {
    this.currentProjectInfo = {
      name: 'Plugstreaming',
      description: `
      <p> Sistema de gestión de radios para el administrador y gerentes, trabajando como desarrollador Front-End </p>
      <ul>
      <li> - Diseño utilizando Figma</li>
      <li> - Angular 2 y 4 </li>
      <li> - Creación y gestion de radios, gerentes, operadores, publicidades y parrilla de programación </li>
      </ul>
      `,
    };
  }

  showFourProjectInfo() {
    this.currentProjectInfo = {
      name: 'Bewtinc',
      description: `
      <p> Applicación móvil de compra y venta en México *Proximamente*</p>
      <ul>
      <li> - Diseño utilizando Figma</li>
      <li> - Angular 5 e Ionic 3 </li>
      <li> - Registro, Login, Timeline de productos, Crear Producto, Checkout </li>
      </ul>
      `,
    };
  }

  goToSkill(ev: Event) {
    this.nextStep.emit('Skill');
  }

  private initGallery() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: 'assets/img/portfolio1.1.png', thumb: 'assets/img/portfolio1.1.png' }),
      new ImageItem({ src: 'assets/img/portfolio1.2.png', thumb: 'assets/img/portfolio1.2.png' }),
      new ImageItem({ src: 'assets/img/portfolio2.1.png', thumb: 'assets/img/portfolio2.1.png' }),
      new ImageItem({ src: 'assets/img/portfolio2.2.png', thumb: 'assets/img/portfolio2.2.png' }),
      new ImageItem({ src: 'assets/img/portfolio2.3.png', thumb: 'assets/img/portfolio2.3.png' }),
      new ImageItem({ src: 'assets/img/portfolio3.1.png', thumb: 'assets/img/portfolio3.1.png' }),
      new ImageItem({ src: 'assets/img/portfolio3.2.png', thumb: 'assets/img/portfolio3.2.png' }),
      new ImageItem({ src: 'assets/img/portfolio3.3.png', thumb: 'assets/img/portfolio3.3.png' }),
      new ImageItem({ src: 'assets/img/portfolio4.1.png', thumb: 'assets/img/portfolio4.1.png' }),
      new ImageItem({ src: 'assets/img/portfolio4.2.png', thumb: 'assets/img/portfolio4.2.png' }),
      new ImageItem({ src: 'assets/img/portfolio4.3.png', thumb: 'assets/img/portfolio4.3.png' }),
      new ImageItem({ src: 'assets/img/portfolio4.4.png', thumb: 'assets/img/portfolio4.4.png' }),
      new ImageItem({ src: 'assets/img/portfolio4.5.png', thumb: 'assets/img/portfolio4.5.png' }),
      new ImageItem({ src: 'assets/img/portfolio4.6.png', thumb: 'assets/img/portfolio4.6.png' }),
      new ImageItem({ src: 'assets/img/portfolio4.7.png', thumb: 'assets/img/portfolio4.7.png' }),
      new ImageItem({ src: 'assets/img/portfolio4.8.png', thumb: 'assets/img/portfolio4.8.png' })
    ];
}

}
