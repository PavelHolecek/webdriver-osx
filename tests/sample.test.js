var chai = require('chai');  
var expect = chai.expect;

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        expect(title).to.equal("WebdriverIO - WebDriver bindings for Node.js");
    });
});