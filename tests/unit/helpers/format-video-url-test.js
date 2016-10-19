
import { formatVideoUrl } from 'catalog-panel/helpers/format-video-url';
import { module, test } from 'qunit';

module('Unit | Helper | format video url');

test('it works', function(assert) {
  let result = formatVideoUrl(['https://www.youtube.com/watch?v=evaxnA_XstY']);
  assert.equal(result, 'https://www.youtube.com/v/evaxnA_XstY', 'formats the url properly');
});

