import Marionette from 'backbone.marionette';
import LoginModel from '../models/login';
import loginTemplate from '../../templates/login.hbs';

const LoginView = Marionette.View.extend({
  model: new LoginModel(),
  template: loginTemplate,

  ui: {
    email: '#email',
    password: '#password',
    loginButton: '.login-button',
    forgottenPasswordLink: 'a.forgotten-password-link'
  },

  events: {
    'keyup @ui.email': 'handleEmailChange',
    'keyup @ui.password': 'handlePasswordChange',
    'click @ui.loginButton': 'handleLoginClick',
    'click @ui.forgottenPasswordLink': 'handleForgottenPasswordClick'
  },

  modelEvents: {
    'change': 'validate',
    'validated': 'handleValidation'
  },

  validate: function() {
    this.model.validate();
  },

  handleValidation: function(isValid, model, errors) {
    _.keys(this.model.changedAttributes()).forEach(
      function(name) {
        var $element = this.getUI(name);
        var $elementHolder = $element.closest('.form-group');
        var $errorLabel = $element.siblings('.form-control-error');

        $elementHolder.removeClass('has-error has-success');
        $errorLabel.empty();

        if(errors.hasOwnProperty(name)) {
          $elementHolder.addClass('has-error');
          $errorLabel.append(errors[name]);
        } else {
          $elementHolder.addClass('has-success');
        }
      },
      this
    );
  },

  handleEmailChange: function() {
    this.model.set('email', this.getUI('email').val());
  },

  handlePasswordChange: function() {
    this.model.set('password', this.getUI('password').val());
  },

  handleLoginClick: function(event) {
    event.preventDefault();
    this.model.login()
      .then(function(data) {
        console.log(data);
      })
      .fail(function() {
        console.log('There was a problem!');
      });
  },

  handleForgottenPasswordClick: function(event) {
    event.preventDefault();
  }
});

export default LoginView;
