import { Routes } from '@angular/router';

import { QuestionStartComponent } from './question-start.component';
import { QuestionAreaComponent } from './question-area/question-area.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';

export const QUESTIONS_ROUTES: Routes = [
  { path: '', component: QuestionStartComponent },
  { path: 'new', component: QuestionEditComponent },
  { path: ':id', component: QuestionAreaComponent },
  { path: ':id/edit', component: QuestionEditComponent }
];
