import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutUserInputPage } from './workout-user-input';


@NgModule({
  declarations: [
    WorkoutUserInputPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutUserInputPage)
  ],
})
export class WorkoutUserInputPageModule { }