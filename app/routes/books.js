import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    limit: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('book', params);
  }

});
