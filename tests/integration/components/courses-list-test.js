import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('courses-list', 'Integration | Component | courses list', {
  integration: true
});

test('it renders', function(assert) {
  var model = Ember.Object.create({
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
  this.render(hbs`{{courses-list courses=model}}`);
  assert.equal(this.$('li.col-md-3').length, 1, '1 course was rendered');
});
