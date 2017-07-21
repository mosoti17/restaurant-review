import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('restaurant', params.restaurant_id);
  },
  actions: {
    editRestaurant(restaurant, params){
      Object.keys(params).forEach(function (key) {
        if(params[key]!==undefined) {
          restaurant.set(key,params[key]);
        }
      })
      restaurant.save();
      this.transitionTo('restaurant', restaurant);
    },
    createReview(params){
      var newReview = this.store.createRecord('review', params);
      var model = params.restaurant;
      model.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return model.save();

      });
      this.transitionTo('restaurant', model);
    },
  }
});
