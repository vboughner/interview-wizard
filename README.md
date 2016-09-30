## InterviewWizard

This is a full-stack application, using Angular2 on the front-end (user interface, and the code is found here),
and Firebase on the back-end (data storage and authentication).

Interview Wizard is under development by Van Boughner and source code is on github at https://github.com/vboughner/interview-wizard

Some this project is boiler-plate, provided initially by the Angular2 Command Line Interface.
Files that were added and modified are: README.md, src/index.html, and everything under src/app. 

Hierarchy of user interface components you'll find in src/app:

app.component
  |
  header/header.component
  auth/signin.component
  auth/signup.component
  footer/footer.component
  questions/questions.component
     |
     question-start.component
     question-area/question-area.component
     question-edit/question-edit.component
     question-list/question-list.component
       |
       question-item.component


Routing information is in app.routing.ts and questions/questions.routes.ts, route protection is handled in auth/auth.service

Signup and sign in are managed by the AuthService, which uses Firebase backend for handling authenitcation

Data model is managed by questions/question.service

Cloud storage for the application is handled by data/storage.service (also using Firebase for the backend)

Not implemented yet: app/src/answer-area/answer-area.component, and it will contain code for display the answers for questions



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
