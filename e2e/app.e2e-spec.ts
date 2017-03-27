import { CsgosmokesPage } from './app.po';

describe('csgosmokes App', () => {
  let page: CsgosmokesPage;

  beforeEach(() => {
    page = new CsgosmokesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
