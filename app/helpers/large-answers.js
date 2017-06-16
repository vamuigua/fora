import Ember from 'ember';

export function largeAnswers(params) {
  var question = params[0];
  var answersTotal = question.get('answers').get('length');
  if(answersTotal>=5){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;'+answersTotal + ' Answers');
  }else if(question.get('answers').get('length')===0){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-folder-open"></span>&nbsp;&nbsp;'+ answersTotal + ' Answers');
  }else if(question.get('answers').get('length')>0){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-folder-open"></span>&nbsp;&nbsp;'+ answersTotal + ' Answers');
}
}

export default Ember.Helper.helper(largeAnswers);
