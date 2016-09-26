import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

import { Question } from '../question';

@Component({
  selector: 'app-question-area',
  templateUrl: './question-area.component.html',
  styles: []
})
export class QuestionAreaComponent implements OnInit {
  @Input() selectedQuestion: Question;

  constructor() { }

  ngOnInit() {
  }

}
