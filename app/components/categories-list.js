import Ember from 'ember';

export default Ember.Component.extend({
  type: "all",
  init() {
    this._super('courses');
    var elems = this.get('data');
    var categories = [];

    elems.map(item => {
      var category = item.get('category');
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
    this.set('categories', categories);
  },
  actions: {
    filterCategory: function() {
      var type = this.get('type');
      this.get('filterCategory')(type);
    }
  }
});
