import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    this._super();
    var self = this;
    Ember.$(window).on('resize', function () {
      self.send('fixHeight');
    });
  },
  didRender: function() {
    this.send('fixHeight');
  },
  actions: {
    fixHeight: function() {
      Ember.$('iframe').height(Ember.$('iframe').width()*0.5606);
    }
  }
});
