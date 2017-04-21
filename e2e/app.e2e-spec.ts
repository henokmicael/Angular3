import { AngularHW2Page } from './app.po';

describe('angular-hw2 App', () => {
  let page: AngularHW2Page;

  beforeEach(() => {
    page = new AngularHW2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
