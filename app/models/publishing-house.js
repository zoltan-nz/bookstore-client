import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  discount: DS.attr('number'),
  books: DS.hasMany('book')
});
