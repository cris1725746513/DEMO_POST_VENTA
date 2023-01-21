import { Component, OnInit } from '@angular/core';
//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLkt9btQ7yX7nLBj9yqlO9WQr0SefjnGA",
  authDomain: "test-d4a16.firebaseapp.com",
  databaseURL: "https://test-d4a16-default-rtdb.firebaseio.com",
  projectId: "test-d4a16",
  storageBucket: "test-d4a16.appspot.com",
  messagingSenderId: "1098803561252",
  appId: "1:1098803561252:web:93643e3d097a1ecddd69b1",
  measurementId: "G-KCR8MMFYLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@Component({
  selector: 'app-firbease',
  templateUrl: './firbease.component.html',
  styleUrls: ['./firbease.component.css']
})
export class FirbeaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
