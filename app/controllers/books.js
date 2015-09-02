import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['limit'],
  limit: 5,

  total: function() {
    return this.get('model.meta').total;
  }.property('model.meta')

});
