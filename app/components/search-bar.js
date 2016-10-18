import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    valueChanged: function() {
      var value = this.get('value');
      this.get('search')(value);
    }
  }
});
