import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  questionOne: string;
  questionTwo: string;
  questionThree: string;
  questionFour: string;
  questionFive: string;

  questionsAnswered: { one: boolean, two: boolean, three: boolean, four: boolean, five: boolean }
                  =  { one: false, two: false, three: false, four: false, five: false };
                   


  constructor(public navCtrl: NavController) {

  }

  answerQuestion(id: number) {
    if (id === 1) {
      this.questionsAnswered.one = true;
    }
    if (id === 2) {
      this.questionsAnswered.two = true;
    }
    if (id === 3) {
      this.questionsAnswered.three = true;
    }
    if (id === 4) {
      this.questionsAnswered.four = true;
    }
    if (id === 5) {
      this.questionsAnswered.five = true;
    }
  }

  submitAnswers() {
    alert('All questions answered!');
  }

  ngOnInit() {
    console.log(this.questionsAnswered);
    // this.questionAnswered = { one: false, two: false, three: false, four: false, five: false };
  }
}
