import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  rating: DS.attr('number'),
  status: DS.attr('string'),
  thumb: DS.attr('string'),
  preview_video_url: DS.attr('string'),
  category: DS.attr('string'),
  author: DS.attr('string')
});
