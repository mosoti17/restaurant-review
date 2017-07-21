import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions: {
    showRestaurantForm(){
      this.set('addNewRestaurant', true)
    },
    cancel(){
      this.set('addNewRestaurant', false)
    },
    addRestaurant(){
      var params ={
        name: this.get('name'),
        type: this.get('type'),
        class_rating: parseInt(this.get('class_rating')),
        description: this.get('description'),
        longitude: parseInt(this.get('longitude')),
        latitude: parseInt(this.get('latitude')),
        image: this.get('image'),
      }
      this.sendAction('addRestaurant', params);
      this.setProperties({'addNewRestaurant': false, 'name':'',})

    }
  }
});
