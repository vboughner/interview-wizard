import { Component, OnInit } from '@angular/core';

import {Question} from "../question";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  question = new Question('Dummy', 'Dummy Description', 'http://assets.uvamagazine.org/images/uploads/2009/01-Spring/Research/Dummy.jpg');

  constructor() { }

  ngOnInit() {
  }

}
