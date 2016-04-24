import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  actions: {
    login(user) {
      this.get('session').authenticate('authenticator:firebase', user).then(() => {
        this.transitionTo('index');
      });
    },
  },
});
