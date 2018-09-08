import { Component, OnInit, EventEmitter, Output, AfterContentInit } from '@angular/core';
import { removeAnimateCssClassAfterAnimationEnd } from '../../helpers/removeAnimateCssClass';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit, AfterContentInit {

  @Output() nextStep = new EventEmitter<string>();
  public content = '';

  constructor() {
    this.initContent();
  }

  ngOnInit() {

  }

  ngAfterContentInit(){
    removeAnimateCssClassAfterAnimationEnd('aboutContent', ['Animated', 'fadeInRight', 'fast']);
  }

  initContent() {
    this.content = `
    <span class="first-letter">C</span>omencé en el diseño y desarrollo web hace 3 años, con Php utilizando el framework
    Laravel en una intranet para un cliente, y a su vez en Javascript e interesado mas en este último lenguaje,
    empleando Linux (Xubuntu, Lubuntu, Ubuntu, ElementaryOS) como S.O. de desarrollo, para luego abordar a angulajs y finalmente
    Angular, de la mano de Ionic, utilizando el sistema de control de versiones Git, el cliente de GitKraken,
    el gestionador de proyecto kanban trello para crear applicaciones
    web y UX mobiles y de escritorio orientadas a las necesidades del cliente. Tambien interesado en ayudar a las comunidades que sufren,
    padecen y lidian por la falta de compromiso de sus gobernantes.
    `;
  }

  goToPortofolio(event: Event) {
    this.nextStep.emit('Portfolio');
  }

}
