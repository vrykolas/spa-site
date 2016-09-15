import init from './init';
import Marionette from 'backbone.marionette';

init();

export default Marionette.Application.extend({
  region: '#app',

  initialize() {
    this.on('start', () => {
    });
  }
});
