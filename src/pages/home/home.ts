import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePage} from "../create/create";
import { PollDetailsPage } from "../poll-details/poll-details";

import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  createPage = CreatePage;
  pollDetailsPage = PollDetailsPage;

  // Will contain all the polls to populate home.html
  public polls;

  // Will contain the UUIDs needed to access each poll
  public pollKeys;

  constructor(public navCtrl: NavController) {}

  // Is called whenever the create.html page is loaded
  ionViewDidLoad() {
    const pollRef: firebase.database.Reference = firebase.database().ref('/poll');
    pollRef.on('value', pollSnapshot => {
      var newPost = pollSnapshot.val();
      console.log(newPost)
      this.polls = newPost;
      this.pollKeys = Object.keys(newPost);

      // Iterates over each poll
      pollSnapshot.forEach(child => {
        console.log(child.key + ": " + child.val().pollName);
        console.log(child.key + ": " + child.val().description);
      });
    });
  }

  navigateToPollDetailsPage(key: string) {
    this.navCtrl.push(PollDetailsPage, {
      name: this.polls[key].pollName,
      desc: this.polls[key].description
    });
  }

}


// Unused for now
interface Poll {
  id: string;
  pollName: string;
  description: string;
}
