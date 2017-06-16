import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    cancelQuestionForm(){
      this.set('addNewQuestion',false);
    },
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        postedDate: new Date()
      };
      this.set('author',null);
      this.set('content',null);
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
