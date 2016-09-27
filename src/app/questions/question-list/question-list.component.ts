import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  @Output() questionSelected = new EventEmitter<Question>();

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  onSelected(question: Question) {
    this.questionSelected.emit(question);
  }
}
