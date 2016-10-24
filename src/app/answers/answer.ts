/*
 * Each question may have multiple answers, offered by difference users.
 * This data structure represents a single answer by one user.
 */
export class Answer {
  constructor(public name: string, public description: string, public imagePath: string) {}
}
