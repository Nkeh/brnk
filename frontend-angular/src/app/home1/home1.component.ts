import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {
  // texts: string[] = [
  //   'I am a WEB DEVELOPER',
  //   'I build web apps',
  //   'I am a COMPUTER ENGINEERING STUDENT',
  //   'A first class student',
  //   'I am an AI/ML ENGINEER',
  //   'developing ml models'
  // ];
  // currentIndex = 0;

  // ngOnInit() {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.texts.length;
  //   }, 3000);
  // }
}
//   texts: string[] = ['I am a WEB DEVELOPER', 'I build web apps', 'I am a COMPUTER ENGINEERING STUDENT', 'A first class student', 'I am an AI/ML ENGINEER', 'developing ml models'];
//   currentIndex = 0;
//   currentText = this.texts[0];

//   constructor() {
//     setInterval(() => {
//       this.currentIndex = (this.currentIndex + 1) % this.texts.length;
//       this.currentText = this.texts[this.currentIndex]; // Update currentText
//     }, 3000);
//  }

