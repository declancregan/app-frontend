import { AppFrontendPage } from './app.po';

describe('app-frontend App', () => {
  let page: AppFrontendPage;

  beforeEach(() => {
    page = new AppFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
