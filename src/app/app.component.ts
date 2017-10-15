import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from "../pages/login/login"

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // Firebase set up
    var config = {
      apiKey: "AIzaSyB9NSTesKivDC-y7p8IzCvZdAOKN24fwjk",
      authDomain: "down-8ae3d.firebaseapp.com",
      databaseURL: "https://down-8ae3d.firebaseio.com",
      projectId: "down-8ae3d",
      storageBucket: "",
      messagingSenderId: "690887171526"
    };
    firebase.initializeApp(config);
  }


}
