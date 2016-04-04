import Ember from 'ember';

export function waitTime(params) {
  var now = moment();
  var then = moment(params[0].get('time'));
  var wait = moment.utc(moment(now).diff(moment(then))).format("mm");

  return wait + "min";
}

export default Ember.Helper.helper(waitTime);
