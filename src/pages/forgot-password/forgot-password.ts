import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
  email;
  forgotPasswordFormData: FormGroup;
  constructor(public navCtrl: NavController,public navParams: NavParams, public formBuilder: FormBuilder) {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.forgotPasswordFormData = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)])
    });
  }
  
}
