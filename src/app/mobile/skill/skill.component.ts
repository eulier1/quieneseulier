import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit {

  @Output() nextStep = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  goToOthers(event) {
    this.nextStep.emit('Other');
  }

}
