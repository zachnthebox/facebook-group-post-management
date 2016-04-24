import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
