import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-poll-details',
  templateUrl: 'poll-details.html'
})
export class PollDetailsPage {

  public pollName;
  public description;
  public options;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pollName = navParams.get("name");
    this.description = navParams.get("desc");
    this.options = navParams.get("options");
  }

  // console.log(vote);


}
