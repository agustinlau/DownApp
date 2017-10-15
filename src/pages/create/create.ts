import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as firebase from 'firebase';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  constructor(public navCtrl: NavController) {}

  // Updates the Firebase with the poll information
  createPoll(pollName: string, description: string) {
    var uuid = this.guid();
    const pollRef: firebase.database.Reference = firebase.database().ref('/poll/' + uuid);
    pollRef.update({
      id: uuid,
      pollName: pollName,
      description: description
    })
  }

  // Generates a random uuid
  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  options = [
    "",
    "",
  ];

  addOption() {
    this.options.push("");
  }

  deleteOption(option) {
    var index = this.options.indexOf(option, 0);
    if (index > -1) {
      this.options.splice(index, 1)
    }
  }


}
