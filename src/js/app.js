import Marionette from 'backbone.marionette';

export default Marionette.Application.extend({
  region: '#app',

  initialize() {
    this.on('start', () => {
    });
  }
});
