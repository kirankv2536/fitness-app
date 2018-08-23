import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html'
})
export class PersonalDetailsPage {
  users: any = [];
  gender;
  dob;
  age:any;
  birthdate:any;
  today: any;
  isMedicalOthers;
  isOriginOthers;
  heightValue;
  weightValue;
  heights: any = [
    "72"
  ];
  weights: any = [
    "158"
  ];
  origins = [
    "African American","Asian American","Native American","British Asian","Hispanic/latino","White/Caucasian",
    "Arabic/Middle Eastern",
    "South East Asian/Malay/Thai/Chinese",
    "Indian/Pakistani/Bangladesh",
    "2 or more races",
    "Others"];
  workTypes = [
    "stay at home parent/guardian",
    "part time professional",
    "Self employed/entrepreneur",
    "Full time professional",
    "unemployed",
    "Retired",
    "Student"];
  medicalConditions = [
    "none",
    "Asthma",
    "High/Low blood pressure",
    "High Blood sugar/Diabetic",
    "Low sugar",
    "Heart condition",
    "Severe allergy",
    "Others"];
  constructor(public navCtrl: NavController,public navParams: NavParams,private alertCtrl: AlertController,private storage: Storage) {
    
    
  }
  
  
  selectHeight(selectedValue: any){
    this.heightValue = selectedValue;
  }
  selectWeight(selectedValue: any){
    this.weightValue = selectedValue;
  }
  selectOrigin(selectedValue: any){
    if (selectedValue == "Others"){
      this.isOriginOthers=true;
    } else {
      this.isOriginOthers=false;
    }
  }
  selectMedical(selectedValue: any){
    if (selectedValue == "Others"){
      this.isMedicalOthers=true;
    } else {
      this.isMedicalOthers=false;
    }
  }
  computeBMI() {
    this.birthdate = new Date(this.birthdate);
    this.today = new Date(Date.now());
    var timeDiff = Math.abs(this.today - this.birthdate);
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      

    this.heightValue = this.heightValue/39.3700787;
    this.weightValue = this.weightValue/2.20462;

    var BMI = this.weightValue / Math.pow(this.heightValue, 2);
    var output = Math.round(BMI * 10) / 10;
      
    if (output < 18.5){
      let alert = this.alertCtrl.create({
        title: 'Your BMI is '+ output,
        message: 'You are Underweight',
        buttons: ['Ok']
      });
      alert.present();
    }
        
    else if (output >= 18.5 && output <= 24.9){
      let alert = this.alertCtrl.create({
        title: 'Your BMI is '+ output,
        message: 'You are Normal',
        buttons: ['Ok']
      });
      alert.present();
    }
    else if (output >= 25 && output <= 29.9){
      let alert = this.alertCtrl.create({
        title: 'Your BMI is '+ output,
        message: 'You are Overweight',
        buttons: ['Ok']
      });
      alert.present();
    }
    else if (output > 30){
      let alert = this.alertCtrl.create({
        title: 'Your BMI is '+ output,
        message: 'You are Obese',
        buttons: ['Ok']
      });
      alert.present();
    }
    this.navCtrl.push("WorkoutSuggestionInitialPage");
  }
  
}
