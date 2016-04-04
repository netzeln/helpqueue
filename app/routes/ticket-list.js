import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('ticket');
  },

  actions: {

    markAsClosed(ticket, params) {
      ticket.set('closed', true);
      ticket.save().then(function(){
        location.reload();
      });
    }
  }
});
