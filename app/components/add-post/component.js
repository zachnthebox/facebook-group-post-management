import Ember from 'ember';

export default Ember.Component.extend({
  type: 'scripture',
  actions: {
    addPost() {
      let text = this.get('text');
      let type = this.get('type');
      let date = moment(this.get('date'), 'mm/dd/yyyy').toDate();
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
