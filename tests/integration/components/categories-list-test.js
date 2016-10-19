import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('categories-list', 'Integration | Component | categories list', {
  integration: true
});

test('it renders', function(assert) {

  let model = Ember.Object.create({
    "id":7698,
    "title":"Cozinha vegetariana",
    "rating":5,
    "status":"published",
    "thumb":"http://cdn.eduk.com.br/images/course/image/4408/index_1459893660-9616-0251-3217_20150826-1315-18341-3504_cozinha_vegetariana_eduK_padovan-27.jpg",
    "preview_video_url":"https://www.youtube.com/watch?v=evaxnA_XstY",
    "category":"Gastronomia",
    "author":"Luana Budel"
  });
  this.set('model', [model]);
  this.render(hbs`{{categories-list data=model}}`);
  
  assert.equal(this.$('input[type=\'radio\']').length, 2, 'renders categories');
});
