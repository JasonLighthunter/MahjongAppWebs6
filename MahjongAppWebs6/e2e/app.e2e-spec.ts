import { MahjongAppWebs6Page } from './app.po';

describe('mahjong-app-webs6 App', () => {
  let page: MahjongAppWebs6Page;

  beforeEach(() => {
    page = new MahjongAppWebs6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
