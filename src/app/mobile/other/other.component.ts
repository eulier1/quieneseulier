import { Component, OnInit, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { removeAnimateCssClassAfterAnimationEnd } from '../../helpers/removeAnimateCssClass';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.sass']
})
export class OtherComponent implements OnInit, AfterContentInit {

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
    removeAnimateCssClassAfterAnimationEnd('otherContent', ['Animated', 'fadeInRight', 'fast']);
  }

  goToHome(event) {
    this.nextStep.emit('Home')
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

    this.af.database.ref('/messages').push(formRequest).key;
    this.contactForm.reset();
  }
}
