import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    markAsClosed(ticket, params) {
      var ticket2 = ticket;
      var params2 = params;
      this.sendAction('markAsClosed', ticket, params);
    }
  }
});
