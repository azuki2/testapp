import { Component } from '@angular/core';
import {initializeApp, database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final-Project';

  constructor() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBU6dy6GkewnUDOYJABwCk4vucwu1zLO-A",
      authDomain: "final-project-recording-18e43.firebaseapp.com",
      databaseURL: "https://final-project-recording-18e43.firebaseio.com",
      projectId: "final-project-recording-18e43",
      storageBucket: "final-project-recording-18e43.appspot.com",
      messagingSenderId: "1041531780717"
    };
    initializeApp(config);

    var root = database().ref('messages/2');
    root.on('value', function(snap){
      console.log(snap.key, snap.val());
    });

  }
}
