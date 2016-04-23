import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';
import moment from 'moment';

const Validations = buildValidations({
  'post.text': validator('presence', true),
  'post.type': validator('presence', true),
  'post.date': validator('presence', true),
});

export default Ember.Component.extend(Validations, {
  minDate: Ember.computed(function() {
    return new Date();
  }),
  init() {
    this._super(...arguments);
    this.createNewPost();
  },
  createNewPost() {
    this.set('post', {
      type: 'scripture',
    });
  },
  isFormValid: Ember.computed.alias('validations.isValid'),
  disabled: Ember.computed.not('isFormValid'),
  actions: {
    addPost() {
      this.sendAction('action', this.get('post'));
      this.createNewPost(); //TODO handle error saving
    },
  },
});
