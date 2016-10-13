import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super();
    var elems = this.attrs.object.value;
    var categories = []

    for (var i = 0, length= elems.length; i < length; i++) {
      var category = elems[i].category;
      if (!categories.includes(category)) {
        categories.push(category);
      }
    }
    this.set('categories', categories);
  }
});
