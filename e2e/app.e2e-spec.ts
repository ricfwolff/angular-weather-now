import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('weather-now App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show card with Nuuk, GL in the header', () => {
    page.navigateTo();
    browser.waitForAngularEnabled(false);
    expect(page.getCardHeader()).toEqual('Nuuk, GL');
  });
});
