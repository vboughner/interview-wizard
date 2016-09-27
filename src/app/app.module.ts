import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionItemComponent } from './questions/question-list/question-item.component';
import { QuestionAreaComponent } from './questions/question-area/question-area.component';
import { AnswerAreaComponent } from './questions/answer-area/answer-area.component';
import { DropdownDirective } from './dropdown.directive';
import { QuestionService } from './questions/question.service';
import { routing } from './app.routing';
import { QuestionEditComponent } from './questions/question-edit/question-edit.component';
import { QuestionStartComponent } from './questions/question-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsComponent,
    FooterComponent,
    QuestionListComponent,
    QuestionItemComponent,
    QuestionAreaComponent,
    AnswerAreaComponent,
    DropdownDirective,
    QuestionEditComponent,
    QuestionStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
