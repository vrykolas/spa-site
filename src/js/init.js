import window from 'window';

function init() {
  // Initialize class structure
  _.extend(Backbone.Model.prototype, BackboneValidation.mixin);

  window.App = {};
  window.App.Views = {};
}

export default init;
