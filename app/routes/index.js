import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    Ember.$('body').toggleClass("home")
  },
  deactivate: function(){
    Ember.$('body').toggleClass("home")
  }
});
