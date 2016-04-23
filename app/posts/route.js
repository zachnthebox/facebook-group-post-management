import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.get('store').query('post', {
        orderBy: 'pending',
        equalTo: true,
      }),
    });
  },
  actions: {
    addPost(post) {
      this.get('store').createRecord('post', post).save();
    },
    deletePost(post) {
      post.destroyRecord();
    }
  },
});
