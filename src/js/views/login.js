import Marionette from 'backbone.marionette';
import loginTemplate from '../../templates/login.hbs';

const LoginView = Marionette.View.extend({
  template: loginTemplate()
});

export default LoginView;
