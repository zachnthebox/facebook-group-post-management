import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['styleClass'],
  attributeBindings: ['disabled'],
  style: 'default',
  styleClass: Ember.computed('style', function() {
    return `btn-${this.get('style')}`;
  }),
});
