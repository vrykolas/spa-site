var config = require('../features-config');

describe('Login Page', function() {
  before(function() {
    browser.url(config.baseUrl);
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

  describe('Check client-side validation', function() {
    beforeEach(function() {
      browser.refresh();
      browser.waitForExist('#login');
    });

    it('should display an error if the email is made blank', function() {
      browser.setValue('#login #email', 'a');
      browser.setValue('#login #email', '');
      browser.setValue('#login #password', 'valid-password');
      browser.waitForVisible('#login .form-control-email-error');
      browser.isVisible('#login .form-control-email-error').should.be.true;
    });

    it('should display an error if an invalid email is supplied', function() {
      browser.setValue('#login #email', 'bob');
      browser.setValue('#login #password', 'valid-password');
      browser.waitForVisible('#login .form-control-email-error');
      browser.isVisible('#login .form-control-email-error').should.be.true;
    });

    it('should display success if a valid email is supplied', function() {
      browser.setValue('#login #email', 'valid-email@example.com');
      browser.setValue('#login #password', 'valid-password');
      browser.waitForVisible('#login .form-control-feedback-email-success');
      browser.isVisible('#login .form-control-feedback-email-success').should.be.true;
    });

    it('should display an error if no password is supplied', function() {
      browser.setValue('#login #email', 'valid-email@example.com');
      browser.setValue('#login #password', 'valid-password');
      browser.setValue('#login #password', '');
      browser.waitForVisible('#login .form-control-password-error');
      browser.isVisible('#login .form-control-password-error').should.be.true;
    });

    it('should display success if a password is supplied', function() {
      browser.setValue('#login #email', 'valid-email@example.com');
      browser.setValue('#login #password', 'valid-password');
      browser.waitForVisible('#login .form-control-feedback-password-success');
      browser.isVisible('#login .form-control-feedback-password-success').should.be.true;
    });

    it('should display an error if no email is submitted', function() {
      browser.setValue('#login #email', '');
      browser.setValue('#login #password', 'valid-password');
      browser.leftClick('#login .login-button');
      browser.waitForVisible('#login .form-control-email-error');
      browser.isVisible('#login .form-control-email-error').should.be.true;
    });

    it('should display an error if an invalid email is submitted', function() {
      browser.setValue('#login #email', 'bob');
      browser.setValue('#login #password', 'valid-password');
      browser.leftClick('#login .login-button');
      browser.waitForVisible('#login .form-control-email-error');
      browser.isVisible('#login .form-control-email-error').should.be.true;
    });

    it('should display an error if no password is submitted', function() {
      browser.setValue('#login #email', 'valid-email@example.com');
      browser.setValue('#login #password', '');
      browser.leftClick('#login .login-button');
      browser.waitForVisible('#login .form-control-password-error');
      browser.isVisible('#login .form-control-password-error').should.be.true;
    });

    it('should redirect if a valid login is submitted', function() {
      browser.setValue('#login #email', 'valid-username@example.com');
      browser.setValue('#login #password', 'valid-password');
      browser.leftClick('#login .login-button');
      browser.waitUntil(
        function() {
          return browser.url === config.baseUrl + '/select-customer';
        },
        5000,
        100
      );
      browser.url().should.equal(config.baseUrl + '/select-customer');
    });
  });
});
