import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  rating: DS.attr(),
  message: DS.attr(),
  date_created: DS.attr(),
  author: DS.attr(),
  restaurant: DS.belongsTo('restaurant', {asyc:true})

});
