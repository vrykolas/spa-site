import init from './init';
import window from 'window';

init();

import LoginView from './views/login';
window.App.Views.Login = LoginView;

var App = Marionette.Application.extend({
  region: '#app',

  onStart: function() {
    this.showView(new window.App.Views.Login());
  }
});

var myApp = new App();
myApp.start();
