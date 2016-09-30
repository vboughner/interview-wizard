## InterviewWizard

This is a full-stack application, but only the source for the frontend is found here.  Using Angular2 for the front-end (user interface), and Firebase for the backend (data storage and authentication).

Interview Wizard is under development by Van Boughner, and is mainly intended to be useful for storing interview questions, and for demonstrating an ability to create single page applications.

Some this project is boiler-plate, provided initially by the Angular2 CLI. Files that were added and modified are: README.md, src/index.html, and everything under src/app. 

Hierarchy of components (you'll find all these in src/app):

Under 'app': header, signin, signup, questions, footer

Under 'questions': question-start, question-area.component, question-edit, question-list, question-item


Routing is handled in app.routing and questions/questions.routes
 
Signup, sign in, and route protection are handled in auth/auth.service, Firebase is used to store authentication information.

Data model is managed by questions/question.service and cloud storage of the data is handled by data/storage.service (also using Firebase for the backend).

Not implemented yet: app/src/answer-area/answer-area.component, and it will contain code for display the answers for questions.



------ boilerplate follows....

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
