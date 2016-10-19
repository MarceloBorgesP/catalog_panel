import Ember from 'ember';

export function formatVideoUrl(params) {
  // THIS IS NEEDED BECAUSE OF ERROR IN THE BROWSER:
  // Refused to display 'video_url' in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN'.
  return params[0].replace("watch?v=", "v/");
}

export default Ember.Helper.helper(formatVideoUrl);
