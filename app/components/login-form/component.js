import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'user.email': [validator('presence', true), validator('format', { type: 'email' })],
  'user.password': validator('presence', true),
});

export default Ember.Component.extend(Validations, {
  init() {
    this._super(...arguments);
    this.set('user', {});
  },
  isFormValid: Ember.computed.alias('validations.isValid'),
  disabled: Ember.computed.not('isFormValid'),
  actions: {
    login(user) {
      this.sendAction('action', user);
    },
  },
});
