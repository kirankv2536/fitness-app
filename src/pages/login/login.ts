import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';

// declare var require: any;
// var loki = require('lokijs');
// const LokiFSStructuredAdapter = require('lokijs/src/loki-fs-structured-adapter');
// var localforage = require('localforage');

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  db: any;                        // LokiJS database
  users: any;                  // our DB's document collection object
  
  results;
  getResult;
  email;
  password;
  loginFormData: FormGroup;

  constructor(public navCtrl: NavController,public navParams: NavParams, public formBuilder: FormBuilder) {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginFormData = this.formBuilder.group({
      
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    });
  }
  login(){

    // this.db = new loki("fitness.db", {
    //   autoload: true,
    //   autosave: true,
    //   adapter: new LokiFSStructuredAdapter(),
    //   autoloadCallback: this.loki,
    //   autosaveInterval: 2000
    // });
    
  }
  // loki(){
  //   this.users = this.db.getCollection("users");
  //   if(!this.users){
  //     this.users = this.db.addCollection("users");
  //   }
  //   this.users.insert({userEmail : this.email,userPassword: this.password});
  // }
  signup(){
    this.navCtrl.push('SignupPage');
  }
  forgotPassword(){
    this.navCtrl.push('ForgotPasswordPage');
  }
  showworkoutsugg(){
    this.navCtrl.push('WorkoutUserInputPage');
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
