import { BattleshipsPage } from './app.po';

describe('battleships App', function() {
  let page: BattleshipsPage;

  beforeEach(() => {
    page = new BattleshipsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
