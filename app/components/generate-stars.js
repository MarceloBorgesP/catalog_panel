import Ember from 'ember';

export default Ember.Component.extend({
  stars: Ember.computed(function() {
    var rating = this.get('rating');
    var array = [];
    for (var i = 0; i < rating; i++) {
      array.push('<span class="glyphicon glyphicon-star"></span>');
    }
    return array;
  })
});
