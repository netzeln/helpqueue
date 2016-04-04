import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeTicket(ticket) {
      var params = {
        closed: true
      };
      this.sendAction('closeTicket', ticket, params);
    }
  }
});
