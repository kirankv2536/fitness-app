import { Component} from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

// declare var require: any;
// var loki = require('lokijs');

// const LokiFSStructuredAdapter = require('lokijs/src/loki-fs-structured-adapter');
// var localforage = require('localforage');

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // db: any;
  // results: any;    
  // users: any; 
  fullName;
  email;
  password;
  signUpFormData: FormGroup;
  constructor(public navCtrl: NavController,public navParams: NavParams, public formBuilder: FormBuilder) {
  //   this.db = new loki("fitness.db", {
  //     autoload: true,
  //     autosave: true,
  //     adapter: new LokiFSStructuredAdapter(),
  //     autoloadCallback: this.loki,
  //     autosaveInterval: 2000
  //   });

  let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signUpFormData = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    });
  }
  
  // loki(){
  //   this.users = this.db.getCollection("users");
    
  //   console.log(this.users.get(1));
  // }
  showData(){
    this.navCtrl.push('PersonalDetailsPage');
  }
  login(){
    this.navCtrl.push('LoginPage');
  }
  public type = 'password';
  public showPass = false;
 
 
  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
