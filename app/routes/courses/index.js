import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var model = [];
    var self = this;
    return this.store.findAll('course').then(
      function(courses) {
        courses.map(function(course) {
          if (course.get('status') === 'published') {
            model.push(course);
          }
          else {
            // THE QUERY FILTER IS NOT WORKING PROPERLY, SO THIS WORKAROUND WAS CREATED
            // NOT TO LOAD COURSES WHICH ARE NOT PUBLISHED
            self.store.unloadRecord(course);
          }
        });
      return model;
      }
    );
  }
});
