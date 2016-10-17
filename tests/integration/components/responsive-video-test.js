import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('responsive-video', 'Integration | Component | responsive video', {
  integration: true
});

test('it renders', function(assert) {

  this.set('video', 'https://www.youtube.com/watch?v=evaxnA_XstY');
  this.render(hbs`{{responsive-video url=video}}`);

  assert.equal(this.$('iframe')[0].src, 'https://www.youtube.com/v/evaxnA_XstY', 'renders the video');
});
