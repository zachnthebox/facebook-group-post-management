import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { openDatepicker } from 'ember-pikaday/helpers/pikaday';
import moment from 'moment';

moduleForComponent('add-post', 'Integration | Component | add post', {
  integration: true
});

test('validation works', function(assert) {
  assert.expect(2);

  this.render(hbs`{{add-post}}`);

  this.$('.text-muted').each(function() {
    if ($(this).text()) {
      assert.ok(true);
    }
  });
});

test('add post', function(assert) {
  const postDate = moment().add(4, 'days').startOf('day').toDate();
  this.set('addPostAction', post => {
    assert.equal(post.text, 'foo');
    assert.equal(post.type, 'scripture');
    assert.ok(moment(post.date).isSame(postDate));
  });
  this.render(hbs`{{add-post action=(action addPostAction)}}`);

  let inputs = this.$('input');
  let interactor = openDatepicker(inputs.eq(2));

  interactor.selectDate(postDate);
  inputs.eq(0).val('foo').change();

  this.$('button').click();
});
