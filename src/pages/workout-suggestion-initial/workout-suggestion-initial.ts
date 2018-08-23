import { Component} from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-workout-suggestion-initial',
  templateUrl: 'workout-suggestion-initial.html'
})
export class WorkoutSuggestionInitialPage {

  constructor(public navCtrl: NavController) {
  }
  workout(){
      this.navCtrl.push('WorkoutUserInputPage');
  }
  openModerateActivity(){
    this.navCtrl.push('ModeratePage');
  }
}
