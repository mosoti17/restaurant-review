import Ember from 'ember';

export default Ember.Component.extend({
  editRestaurant: false,
  actions: {
    showEditForm(){
      this.set('editRestaurant', true)
    },
    cancel(){
      this.setProperties({'editRestaurant': false,})
    },
    editRestaurant(restaurant){
      var params ={
        name: this.get('name'),
        type: this.get('type'),
        class_rating:this.get('class_rating'),
        description: this.get('description'),
        longitude: this.get('longitude'),
        latitude:this.get('latitude'),
        image: this.get('image'),
      }
      this.sendAction('editRestaurant', restaurant, params);
      this.setProperties({'editRestaurant': false, })

      }
    }

});
