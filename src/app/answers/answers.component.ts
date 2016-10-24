import { Component, OnInit } from '@angular/core';

import { Answer } from './answer';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styles: []
})
export class AnswersComponent implements OnInit {
  answers: Answer[] = [
    new Answer('test1', 'desc', ''),
    new Answer('test2', 'desc', '')
  ];

  constructor() { }

  ngOnInit() {
  }

}
