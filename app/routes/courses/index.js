import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
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
            // IN ORDER TO NOT LOAD COURSES WHICH ARE NOT PUBLISHED
            self.store.unloadRecord(course);
          }
        });
      return model;
      }
    );
  },
  setupController: function(controller) {
    controller.set('model', this.store.peekAll('course'));
  },
  actions: {
    didTransition: function() {
      this.controllerFor('application').set('isCoursesIndex', true);
    },
    willTransition: function() {
      this.controllerFor('application').set('isCoursesIndex', false);
    }
  }
});
