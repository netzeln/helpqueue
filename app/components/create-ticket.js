import Ember from 'ember';

export default Ember.Component.extend({
  ticketSent: false,

  actions: {
    saveTicket(){
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        issue: this.get('issue'),
        time: Date()
      };
      this.set('ticketSent', true);
      this.sendAction('saveTicket', params);
      this.set('name', '');
      this.set('location', '');
      this.set('issue', '');
    }
  }
});
