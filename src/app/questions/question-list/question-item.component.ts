import { Component, Input } from '@angular/core';

import { Question } from '../question';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styles: []
})
export class QuestionItemComponent {
  @Input() question: Question;
  @Input() questionId: number;
}
