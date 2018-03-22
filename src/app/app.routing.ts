import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { QUESTIONS_ROUTES } from './questions/questions.routes';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { ProfileComponent } from './auth/profile.component';
import { ProfileEditComponent } from './auth/profile-edit.component';

/*
 * Top-level routes for URLs in the application.
 */
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent, children: QUESTIONS_ROUTES },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: '**', redirectTo: 'questions' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
