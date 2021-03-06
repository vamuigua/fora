import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    cancelAnswerForm(){
      this.set('addNewAnswer',false)
    },
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        answeredDate: new Date(),
      };
      this.set('author',null);
      this.set('content',null);
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
