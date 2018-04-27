import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCardHeader() {
    return element(by.css('app-root .card-header')).getText();
  }
}
