import { Component, OnInit, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { removeAnimateCssClassAfterAnimationEnd } from '../../helpers/removeAnimateCssClass';
import { addAnimateCssClass } from '../../helpers/addAnimateCssClass';

@Component({
  selector: 'app-desktop-skill',
  templateUrl: './desktop-skill.component.html',
  styleUrls: ['./desktop-skill.component.sass']
})
export class DesktopSkillComponent implements OnInit, AfterContentInit {

  @Output() nextStep = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    addAnimateCssClass('content', ['animated', 'fadeInRight', 'fast'])
    removeAnimateCssClassAfterAnimationEnd('content', ['animated', 'fadeInRight', 'fast']);
  }

  goToOthers(event) {
    this.nextStep.emit('Other');
  }
}
