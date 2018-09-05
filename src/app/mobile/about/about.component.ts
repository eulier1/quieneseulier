import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  @Output() nextStep = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  goToPortofolio(event: Event) {
    this.nextStep.emit('Portfolio');
  }

}
