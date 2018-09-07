import { Component, OnInit, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { removeAnimateCssClassAfterAnimationEnd } from '../../helpers/removeAnimateCssClass';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit, AfterContentInit {

  @Output() nextStep = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    removeAnimateCssClassAfterAnimationEnd('skillContent', ['Animated', 'fadeInRight', 'fast']);
  }

  goToOthers(event) {
    this.nextStep.emit('Other');
  }

}
