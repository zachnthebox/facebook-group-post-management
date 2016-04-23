import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-button', 'Integration | Component | bs button', {
  integration: true
});

test('can change bootstrap style of button', function(assert) {
  this.render(hbs`{{bs-button style='info'}}`);
  assert.ok(this.$('button').hasClass('btn-info'));
});

test('button has disabled property', function(assert) {
  this.render(hbs`{{bs-button disabled=true}}`);
  assert.ok(this.$('button').prop('disabled'));
});

test('button doesn\'t have disabled property', function(assert) {
  this.render(hbs`{{bs-button disabled=false}}`);
  assert.notOk(this.$('button').prop('disabled'));
});

test('can add onclick handler', function(assert) {
  this.set('onClick', () => assert.ok(true));
  this.render(hbs`{{bs-button click=(action onClick)}}`);
  this.$('button').click();
});

test('click action doesn\'t fire when disabled', function(assert) {
  assert.expect(0);
  this.set('onClickAction', () => assert.ok(true));
  this.render(hbs`{{bs-button disabled=true click=(action onClickAction)}}`);
  this.$('button').click();
});
