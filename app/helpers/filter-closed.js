import Ember from 'ember';

export function filterClosed(params/*, hash*/) {
  if (params[0].get('closed') !== true){
    return true;
  }else{
    return false;
  }
}
export default Ember.Helper.helper(filterClosed);
