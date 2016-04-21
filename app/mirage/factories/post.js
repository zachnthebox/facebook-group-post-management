import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  type: 'scripture',
  text() { return `Romans ${faker.random.number()} ${faker.random.number()}`; },
  date() { return faker.date.future(); },
});
