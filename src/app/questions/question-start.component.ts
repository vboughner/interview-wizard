import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-start',
  template: `
    <div class="row">
      <div class="col-sm-12">
        <p>Please start by selecting a question on the left.</p>
      </div>
    </div>
  `,
  styles: []
})
export class QuestionStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
