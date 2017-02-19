import { FijufitPage } from './app.po';

describe('fijufit App', () => {
  let page: FijufitPage;

  beforeEach(() => {
    page = new FijufitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
