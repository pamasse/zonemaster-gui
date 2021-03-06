/**
 * Created by pamasse on 05/11/2017.
 */
import {protractor, by, browser, element } from 'protractor';

import { Utils } from './utils/app.utils';

describe('Zonemaster test FR18 - [The GUI should be able to run tests by just providing the domain name]', () => {
  const utils = new Utils();
  beforeAll(() => {
    utils.goToHome();
    utils.setLang('en');
  });

  it('should display progress bar',  async() => {
    await expect(element(by.css('.progress-bar')).isPresent()).toBe(false);
    await element(by.css('#domain_check_name')).sendKeys('afNiC.Fr');
    await element(by.css('div button.launch')).click();

    await browser.wait(() => element(by.css('.progress-bar')).isPresent(), 10 * 1000);
    await expect(element(by.css('.progress-bar')).isPresent()).toBe(true);  });
});
