import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { QUESTIONS_ROUTES } from './questions/questions.routes';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent, children: QUESTIONS_ROUTES },
  { path: '**', redirectTo: 'questions' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
