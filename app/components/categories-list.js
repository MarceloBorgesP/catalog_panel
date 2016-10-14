import Ember from 'ember';

export default Ember.Component.extend({
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
  }
});
