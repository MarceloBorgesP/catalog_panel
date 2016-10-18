import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterCategory: function(type) {
      this.set("type", type);
      var model = this.store.peekAll('course');
      var newModel = [];
      model.map(item => {
        if (item.get('category') === type || type === '') {
          newModel.push(item);
        }
      });
      this.set('model', newModel);
    },
    reloadModel: function(newModel) {
      this.set('model', newModel);
    }
  }
});
