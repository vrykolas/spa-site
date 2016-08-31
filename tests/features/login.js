var config = require('../features-config');

describe('Login Page', function() {
  before(function() {
    browser.url(config.baseUrl + '/login');
  });

  describe('Check required elements', function() {
    beforeEach(function() {
      browser.refresh();
      browser.waitForExist('#login');
    });

    it('should have a login form', function() {
      browser.isExisting('#login').should.be.true;
    });

    it('the login form should have an email field', function() {
      browser.isExisting('#login #email').should.be.true;
    });

    it('the login form should have a password field', function() {
      browser.isExisting('#login #password').should.be.true;
    });

    it('the login form should have a login button', function() {
      browser.isExisting('#login .login-button').should.be.true;
    });

    it('the login form should have a forgotten password link', function() {
      browser.isExisting('#login a.forgotten-password-link').should.be.true;
    });
  });
});
