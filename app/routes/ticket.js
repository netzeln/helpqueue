import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('ticket', params.ticket_id);
  },

  actions:{
    closeTicket(ticket, params){
      ticket.set('closed', true);
      ticket.save();
    }
  }
});
