import Ember from 'ember';

export default Ember.Component.extend({


  map: Ember.inject.service('google-map'),
  showMap: true,

  actions: {

    showMap(restaurant) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(restaurant.get('latitude'), restaurant.get('longitude')),
        zoom: 12
      };
      this.get('map').findMap(container, options);
    }
  }
});
