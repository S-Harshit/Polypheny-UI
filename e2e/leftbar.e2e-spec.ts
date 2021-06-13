import { browser, element, by } from 'protractor';


describe('Tests for Left Side-Bar ', function () {
  // browser.waitForAngularEnabled(true);

  browser.get('http://localhost:4200/');

  it('Test Search bar of left sidebar', function () {

    var some_name = browser.driver.getTitle();
    expect<any>(some_name).toEqual('Polypheny-DB');
    browser.driver.findElement(by.css('.d-lg-block.d-none.navbar-toggler')).click()
    browser.driver.findElement(by.css('.d-lg-block.d-none.navbar-toggler')).click()

    browser.driver.findElement(by.id('search-tree')).sendKeys('java');
    var filtered_word = browser.driver.findElement(by.xpath("//span[@class='title']"));
    expect<any>(filtered_word.getText()).toContain("Java Runtime");

    browser.driver.findElement(by.id('search-tree')).clear();
    browser.driver.findElement(by.id('search-tree')).sendKeys('in');

    filtered_word = browser.driver.findElement(by.xpath("//span[.='Information Manager']"));
    expect<any>(filtered_word.getText()).toContain("Information Manager");

    filtered_word = browser.driver.findElement(by.xpath(" //span[.='Polystore Indexes']"));
    expect<any>(filtered_word.getText()).toContain("Polystore Indexes");
    browser.driver.findElement(by.id('search-tree')).clear();

  });


});
