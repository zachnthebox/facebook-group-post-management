import Ember from 'ember';

export default Ember.Component.extend({
  type: 'scripture',
  minDate: Ember.computed(function() {
    return new Date();
  }),
  actions: {
    addPost() {
      let text = this.get('text');
      let type = this.get('type');
      let date = this.get('date');
      if (!text || !date) {
        alert('bad inputs');
        return;
      }
      this.sendAction('action', {
        type,
        text,
        date,
      });
    },
  },
});
