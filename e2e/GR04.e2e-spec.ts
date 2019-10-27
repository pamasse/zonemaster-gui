import { by, browser, element } from 'protractor';

import { Utils } from './utils/app.utils';

describe('Zonemaster test GR04 - [On launching the URL opens with a default simple view]', () => {
  const utils = new Utils();
  beforeAll(() => {
    utils.goToHome();
    utils.setLang('en');
  });

  it('should have [Domain name] label visible', () => {
    expect(element(by.xpath('//h1[(.="Domain name")]')).isPresent()).toBe(true);
  });
  it('should have [Options] label visible', () => {
    expect(element(by.xpath('//label[contains(., "Options")]')).isPresent()).toBe(true);
  });
  it('should have [Nameservers label] NOT visible', () => {
    expect(element(by.xpath('//legend[contains(., "Nameservers")]')).isPresent()).toBe(false);
  });
  it('should have [Digests] NOT visible', () => {
    expect(element(by.xpath('//legend[contains(., "Digests")]')).isPresent()).toBe(false);
  });
});
