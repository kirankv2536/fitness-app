import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutSuggestionInitialPage } from './workout-suggestion-initial';


@NgModule({
  declarations: [
    WorkoutSuggestionInitialPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutSuggestionInitialPage)
  ],
})
export class WorkoutSuggestionInitialPageModule { }