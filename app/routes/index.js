import Ember from 'ember';

export default Ember.Route.extend({
  ticketSent: false,

  actions : {
    saveTicket(params){
      var newTicket = this.store.createRecord('ticket', params);
      this.set('ticketSent', true);
      newTicket.save();
      this.transitionTo('ticket', newTicket.id);
    }
  }
});
