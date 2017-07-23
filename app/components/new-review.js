import Ember from 'ember';
import moment from 'moment';
export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    showReviewForm(){
      this.set('addNewReview',true)
    },
    cancel(){
      this.setProperties({'addNewReview':false, 'title':'', 'message':'', 'rating':''});
    },
    addReview(){
      var today = moment().format('DD-MM-YYYY' );
      var params ={
        author:this.get('author'),
        title: this.get('title'),
        message: this.get('message'),
        rating: parseInt(this.get('rating')),
        date_created:today,
        restaurant: this.get('restaurant')
      }
      this.sendAction('addReview', params);
      this.setProperties({'addNewReview':false, 'title':'', 'message':'', 'rating':''});
     }
  }
});
