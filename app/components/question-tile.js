import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    // upVote(question){
    //   var votes = parseInt(question.get('totalVotes'));
    //   votes++;
    //   question.set('totalVotes', votes);
    //   this.sendAction('upVote1', question);
    // },
  }
});
