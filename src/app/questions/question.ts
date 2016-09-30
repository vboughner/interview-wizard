/*
 * The main data structure, contains all information about a single question.
 * The application manages an array of these questions in the QuestionService.
 */
export class Question {
  constructor(public name: string, public description: string, public imagePath: string) {}
}
