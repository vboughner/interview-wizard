import { Component, Input } from '@angular/core';

import { Question } from '../question';

/*
 * Displays just one question line, within the list of questions shown
 * in the question-list.component.
 */
@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styles: []
})
export class QuestionItemComponent {
  @Input() question: Question;
  @Input() questionId: number;
}
