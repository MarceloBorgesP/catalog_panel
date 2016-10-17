import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterCategory: function(type) {
    this.set("type", type);
    var model = this.get('model');
    model.map(item => {
      if (item.get('category') === type || type === '') {
        item.set('status', '');
      }
      else {
        item.set('status', 'hidden');
      }
    });
    }
  }
});
