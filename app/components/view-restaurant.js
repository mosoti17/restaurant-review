import Ember from 'ember';

export default Ember.Component.extend({
  averageScore: Ember.computed('reviews.@each.rating', function() {
   return this.get('reviews').reduce(function(sum, review) {
     return sum += review.get('rating');
   }, 0) / this.get('reviews').get('length');
 }),

favoriteRestaurant: Ember.inject.service(),
actions:{
  addFavorite(restaurant){
    this.get('favoriteRestaurant').add(restaurant);
  }
}


});
