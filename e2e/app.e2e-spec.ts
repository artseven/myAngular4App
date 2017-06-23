import { MyAngular4AppPage } from './app.po';

describe('my-angular4-app App', () => {
  let page: MyAngular4AppPage;

  beforeEach(() => {
    page = new MyAngular4AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
