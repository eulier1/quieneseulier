import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.sass']
})
export class OtherComponent implements OnInit {

  @Output() nextStep = new EventEmitter<string>()
  showEmailContact: boolean = false;

  contactForm: any

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.contactForm = this.fb.group({
      name: ['',  [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  goToHome(event) {
    this.nextStep.emit('Home')
  }

  sendEmail(){

  }
}
