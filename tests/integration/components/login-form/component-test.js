import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});


test('validation works', function(assert) {
  assert.expect(2);

  this.render(hbs`{{login-form}}`);

  this.$('.text-muted').each(function() {
    if ($(this).text()) {
      assert.ok(true);
    }
  });
});

test('add post', function(assert) {
  this.set('loginAction', user => {
    assert.equal(user.email, 'z@b.com');
    assert.equal(user.password, 'password');
  });
  this.render(hbs`{{login-form action=(action loginAction)}}`);

  let inputs = this.$('input');
  inputs.eq(0).val('z@b.com').change();
  inputs.eq(1).val('password').change();

  this.$('button').click();
});
