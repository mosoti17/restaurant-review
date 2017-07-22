import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  type: DS.attr(),
  class_rating: DS.attr(),
  reviews:DS.hasMany('review', {async:true}),
  
});
