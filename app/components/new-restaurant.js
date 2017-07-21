import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions: {
    showRestaurantForm(){
      this.set('addNewRestaurant', true)
    },
    cancel(){
    this.setProperties({'addNewRestaurant': false, 'name':'','type':'', 'class_rating':'', 'description':'', 'longitude':'', 'latitude':'','image':''})
    },
    addRestaurant(){
      var params ={
        name: this.get('name'),
        type: this.get('type'),
        class_rating: parseInt(this.get('class_rating')),
        description: this.get('description'),
        longitude: parseFloat(this.get('longitude')),
        latitude: parseFloat(this.get('latitude')),
        image: this.get('image'),
      }
      this.sendAction('addRestaurant', params);
      this.setProperties({'addNewRestaurant': false, 'name':'','type':'', 'class_rating':'', 'description':'', 'longitude':'', 'latitude':'','image':''})

    }
  }
});
