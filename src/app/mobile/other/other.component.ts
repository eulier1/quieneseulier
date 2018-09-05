import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.sass']
})
export class OtherComponent implements OnInit {

  @Output() nextStep = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  goToHome(event) {
    this.nextStep.emit('Home')
  }

}
