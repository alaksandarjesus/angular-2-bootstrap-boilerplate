import { MatrimonyPage } from './app.po';

describe('matrimony App', () => {
  let page: MatrimonyPage;

  beforeEach(() => {
    page = new MatrimonyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
