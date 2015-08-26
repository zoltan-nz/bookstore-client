import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  author: DS.belongsTo('author'),
  publisher: DS.belongsTo('publisher')
});
