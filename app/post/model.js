import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  type: attr('string'),
  text: attr('string'),
  date: attr('date'),
});
