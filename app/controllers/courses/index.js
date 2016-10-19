import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterCategory: function(type) {
      this.set("type", type);
      var model = this.store.peekAll('course');
      var categories = [];
      model.map(item => {
        if (item.get('category') === type || type === '') {
          categories.push(item);
        }
      });
      this.set('model', categories);
    },
    reloadModel: function(categories) {
      this.set('model', categories);
    }
  }
});
