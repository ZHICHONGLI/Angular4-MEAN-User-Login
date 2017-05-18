import { Angular4MEANUserLoginPage } from './app.po';

describe('angular4-mean-user-login App', () => {
  let page: Angular4MEANUserLoginPage;

  beforeEach(() => {
    page = new Angular4MEANUserLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
