import Ember from 'ember';

export function starReview(params/*, hash*/) {
  var rating = parseInt(params[0]);

 if (rating === 1) {
    return "\u2B50";
  } else if (rating === 2) {
    return "\u2B50\u2B50";
  } else if (rating === 3) {
    return "\u2B50\u2B50\u2B50";
  } else if (rating === 4) {
    return "\u2B50\u2B50\u2B50\u2B50";
  } else if (rating === 5) {
    return "\u2B50\u2B50\u2B50\u2B50\u2B50";
  }
}

export default Ember.Helper.helper(starReview);
