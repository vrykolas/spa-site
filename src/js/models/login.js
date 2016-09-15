import _ from 'underscore';
import Backbone from 'backbone';
import Validation from 'backbone-validation';

_.extend(Backbone.Model.prototype, Validation.mixin);

const LoginModel = Backbone.Model.extend({
  url: 'https://localhost:3000/login',

  defaults: {
    email: '',
    password: ''
  },

  validation: {
    email: [
      {
        required: true,
        msg: 'Please enter an email address'
      },
      {
        pattern: 'email',
        msg: 'Please enter a valid email'
      }
    ],
    password: {
      required: true,
      msg: 'Please enter a password'
    }
  },

  login: function() {
    return $.post(this.url, this.toJSON());
  }
});

export default LoginModel;
