import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-bar', 'Integration | Component | search bar', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{search-bar}}`);
  assert.equal(this.$('input[type=\'text\']').length, 1, 'there is an input text');

});
