import Ember from 'ember';

export function largeAnswers(params) {
  var question = params[0];
  if(question.get('answers').get('length')>=5){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-plus"></span>');
  }
}

export default Ember.Helper.helper(largeAnswers);
