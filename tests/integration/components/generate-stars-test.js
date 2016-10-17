import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('generate-stars', 'Integration | Component | generate stars', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{generate-stars rating=4}}`);
  assert.equal(this.$('span.glyphicon-star').length, 4, 'There are 4 stars');
});
