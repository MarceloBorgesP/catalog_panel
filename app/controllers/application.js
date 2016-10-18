import Ember from 'ember';

export default Ember.Controller.extend({
  'courses.index': Ember.inject.controller(),
  isCoursesIndex: Ember.computed(function() {
    return this.currentRouteName === 'courses.index';
  }),
  actions: {
    search: function(param) {
      var model = this.store.peekAll('course');
      var newModel = [];
      model.map(function(course) {
        var title = course.get('title').toUpperCase();
        var value = param.toUpperCase();
        if (title.includes(value)) {
          newModel.push(course);
        }
      });
      this.get('courses.index').send('reloadModel', newModel);
    }
  }
});
