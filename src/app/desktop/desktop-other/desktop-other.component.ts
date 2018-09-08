import { Component, OnInit, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { addAnimateCssClass } from '../../helpers/addAnimateCssClass';
import { removeAnimateCssClassAfterAnimationEnd } from '../../helpers/removeAnimateCssClass';

@Component({
  selector: 'app-desktop-other',
  templateUrl: './desktop-other.component.html',
  styleUrls: ['./desktop-other.component.sass']
})
export class DesktopOtherComponent implements OnInit, AfterContentInit {

  @Output() nextStep = new EventEmitter<string>()
  showEmailContact: boolean = false;

  contactForm: any

  constructor(private fb: FormBuilder, private af: AngularFireDatabase ) { }

  ngOnInit() {

    this.contactForm = this.fb.group({
      name: ['',  [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  ngAfterContentInit() {
    addAnimateCssClass('content', ['animated', 'fadeInRight', 'fast']);
    removeAnimateCssClassAfterAnimationEnd('content', ['animated', 'fadeInRight', 'fast']);
  }

  goToHome(event) {
    this.nextStep.emit('About')
  }

  sendEmail() {
    const {name, email, message} = this.contactForm.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;

    let formRequest = { name, email, message, date, html };

    this.af.database.ref('/messages').push(formRequest);
    this.contactForm.reset();
  }

}
