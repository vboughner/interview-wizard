import { InterviewWizardPage } from './app.po';

describe('interview-wizard App', function() {
  let page: InterviewWizardPage;

  beforeEach(() => {
    page = new InterviewWizardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
