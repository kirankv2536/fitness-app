import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-daily-report',
  templateUrl: 'daily-report.html',
})
export class DailyReportPage {
  current: number = 3;
  max: number = 5;
  stroke: number = 15;
  radius: number = 125;
  semicircle: boolean = false;
  rounded: boolean = true;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '';
  background: string = '#eaeaea';
  duration: number = 5000;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  rate:number;
  status: string ='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(this.current == 1){
      this.color = 'red';
      this.status = 'Poor';
    }
    if(this.current < 4 && this.current > 1){
      this.color = 'orange';
      this.status = 'Average';
    }
    if(this.current == 4){
      this.color = 'green';
      this.status = 'Good';
    }
  }

  

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px',
      'position': 'absolute',
      'line-height': '1'
    };
  }


}
