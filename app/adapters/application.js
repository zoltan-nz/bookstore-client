import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: config.APIfolder,

  shouldReloadRecord(store, snapshot) {
    console.log("Calling shouldReloadRecord");
    return false;
  },

  shouldBackgroundReloadRecord(store, snapshot) {
    console.log("Calling shouldBackgroundReloadRecord");
    return false;
  }
});
