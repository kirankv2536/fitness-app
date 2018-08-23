import { Component} from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-workout-user-input',
  templateUrl: 'workout-user-input.html'
})
export class WorkoutUserInputPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  }
  openMenu() {
    this.menuCtrl.open();
  }
  submitUserActivity(){
    this.navCtrl.push('DailyReportPage');
  }
}
