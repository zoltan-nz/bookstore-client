import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    limit: {
      refreshModel: false
    }
  },

  model(params) {
    return this.store.query('book', params);
  }

});
