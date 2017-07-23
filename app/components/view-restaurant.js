import Ember from 'ember';

export default Ember.Component.extend({
favoriteRestaurant: Ember.inject.service(),
actions:{
  addFavorite(restaurant){
    this.get('favoriteRestaurant').add(restaurant);
  }
}


});
