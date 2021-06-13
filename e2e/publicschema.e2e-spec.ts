import { browser, element, by, ProtractorExpectedConditions, protractor, ExpectedConditions } from 'protractor';


describe('Check for default data source', function () {

    var EC = protractor.ExpectedConditions;
    browser.waitForAngularEnabled(false);
    browser.driver.get('http://localhost:4200/');

    it('Check depts table', function () {

        browser.driver.findElement(by.css("[href='#/views/schema-editing']")).click();
        browser.wait(EC.elementToBeClickable(element(by.className("toggle-children"))));
        browser.driver.findElement(by.className("toggle-children")).click();
        browser.driver.findElement(by.xpath("//span[@class='toggle-children-wrapper toggle-children-wrapper-collapsed']/span[@class='toggle-children']")).click();


        browser.driver.findElement(by.xpath("//span[.='depts']")).click();
        var schemaName = browser.driver.findElement(by.xpath("//h5[.='public.depts']")).getText()
        expect<any>(schemaName).toContain("public.depts");
        browser.wait(EC.presenceOf(element(by.css(".row  div:nth-of-type(2)"))));
        browser.wait(EC.presenceOf(element(by.css(".row  div:nth-of-type(3)"))));
        var div1 = element(by.css(".row  div:nth-of-type(2)"))
        var div2 = element(by.css(".row  div:nth-of-type(3)"))
        expect(div1.isDisplayed()).toBeTruthy();
        expect(div2.isDisplayed()).toBeTruthy();


        //To be Used for getting and comparing values of both div tags
        //    browser.driver.findElement(by.css(".row  div:nth-of-type(2)")).getText().then(function(text) {
        //     console.log("what" +  text);
        //   });

    });

    it('Check emp table', function () {

        browser.driver.findElement(by.xpath("//span[.='emp']")).click();
        var schemaName = browser.driver.findElement(by.xpath("//h5[.='public.emp']")).getText()
        expect<any>(schemaName).toContain("public.emp");
        browser.wait(EC.presenceOf(element(by.css(".row  div:nth-of-type(2)"))));
        browser.wait(EC.presenceOf(element(by.css(".row  div:nth-of-type(3)"))));
        var div1 = element(by.css(".row  div:nth-of-type(2)"))
        var div2 = element(by.css(".row  div:nth-of-type(3)"))
        expect(div1.isDisplayed()).toBeTruthy();
        expect(div2.isDisplayed()).toBeTruthy();

    });

    it('Check emps table', function () {

        browser.driver.findElement(by.xpath("//span[.='emps']")).click();
        var schemaName = browser.driver.findElement(by.xpath("//h5[.='public.emps']")).getText()
        expect<any>(schemaName).toContain("public.emps");
        browser.wait(EC.presenceOf(element(by.css(".row  div:nth-of-type(2)"))));
        browser.wait(EC.presenceOf(element(by.css(".row  div:nth-of-type(3)"))));
        var div1 = element(by.css(".row  div:nth-of-type(2)"))
        var div2 = element(by.css(".row  div:nth-of-type(3)"))
        expect(div1.isDisplayed()).toBeTruthy();
        expect(div2.isDisplayed()).toBeTruthy();


    });

    it('Check work table', function () {

        browser.driver.findElement(by.xpath("//span[.='work']")).click();
        var schemaName = browser.driver.findElement(by.xpath("//h5[.='public.work']")).getText()
        expect<any>(schemaName).toContain("public.work");
        browser.wait(EC.presenceOf(element(by.css(".row  div:nth-of-type(2)"))));
        browser.wait(EC.presenceOf(element(by.css(".row  div:nth-of-type(3)"))));
        var div1 = element(by.css(".row  div:nth-of-type(2)"))
        var div2 = element(by.css(".row  div:nth-of-type(3)"))
        expect(div1.isDisplayed()).toBeTruthy();
        expect(div2.isDisplayed()).toBeTruthy();


    });



});
