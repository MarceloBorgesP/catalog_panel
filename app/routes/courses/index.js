import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var model = [];
    return this.store.findAll('course').then(
      function(courses) {
        courses.map(function(course) {
          if (course.get('status') === 'published') {
            model.push(course);
          }
        });
      return model;
      }
    );
  }
});
