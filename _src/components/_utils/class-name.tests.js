import assert from 'assert';
import { mergeClassNameSets, removeClassNameSetProps } from './class-name';

describe('components: utils : class-name', () => {
  describe('class merging', () => {
    describe('global class set', () => {
      it('can add the hidden class', () => {
        assert.equal(mergeClassNameSets({ hiddenUntil: 'small' }, ['global']), 'ax-hidden-until--small');
      });

      it('can add the visible class', () => {
        assert.equal(mergeClassNameSets({ visibleUntil: 'small' }, ['global']), 'ax-visible-until--small');
      });
    });

    describe('text class set', () => {
      describe('text left', () => {
        it('can add the left class', () => {
          assert.equal(mergeClassNameSets({ textLeft: true }, ['text']), 'ax-text--left');
        });

        it('can add the responsive class', () => {
          assert.equal(mergeClassNameSets({ textLeft: 'small' }, ['text']), 'ax-text--left--small');
        });
      });

      describe('text center', () => {
        it('can add the center class', () => {
          assert.equal(mergeClassNameSets({ textCenter: true }, ['text']), 'ax-text--center');
        });

        it('can add the responsive class', () => {
          assert.equal(mergeClassNameSets({ textCenter: 'small' }, ['text']), 'ax-text--center--small');
        });
      });

      describe('text right', () => {
        it('can add the right class', () => {
          assert.equal(mergeClassNameSets({ textRight: true }, ['text']), 'ax-text--right');
        });

        it('can add the responsive class', () => {
          assert.equal(mergeClassNameSets({ textRight: 'small' }, ['text']), 'ax-text--right--small');
        });
      });

      describe('text weights', () => {
        it('can add the bold class', () => {
          assert.equal(mergeClassNameSets({ textBold: true }, ['text']), 'ax-text--bold');
        });

        it('can add the weak class', () => {
          assert.equal(mergeClassNameSets({ textWeak: true }, ['text']), 'ax-text--weak');
        });
      });

      describe('text breaking', () => {
        it('can add the break none class', () => {
          assert.equal(mergeClassNameSets({ textBreak: 'none' }, ['text']), 'ax-text--break-none');
        });

        it('can add the break all class', () => {
          assert.equal(mergeClassNameSets({ textBreak: 'all' }, ['text']), 'ax-text--break-all');
        });

        it('can add the break word class', () => {
          assert.equal(mergeClassNameSets({ textBreak: 'word' }, ['text']), 'ax-text--break-word');
        });
      });

      describe('text casing', () => {
        it('can add the uppercase class', () => {
          assert.equal(mergeClassNameSets({ textCase: 'upper' }, ['text']), 'ax-text--uppercase');
        });

        it('can add the capitalise class', () => {
          assert.equal(mergeClassNameSets({ textCase: 'capital' }, ['text']), 'ax-text--capitalize');
        });

        it('can add the ellipsis class', () => {
          assert.equal(mergeClassNameSets({ textCase: 'lower' }, ['text']), 'ax-text--lowercase');
        });
      });

      it('can add the ellipsis class', () => {
        assert.equal(mergeClassNameSets({ textEllipsis: true }, ['text']), 'ax-text--ellipsis');
      });
    });

    describe('merge class sets', () => {
      const testProps = {
        hiddenUntil: 'small',
        textLeft: true,
      };

      it('ignores props if request set is not given', () => {
        assert(mergeClassNameSets(testProps, ['text']).includes('ax-text--left'));
        assert(!mergeClassNameSets(testProps, ['text']).includes('ax-hidden-until--small'));

        assert(!mergeClassNameSets(testProps, ['global']).includes('ax-text--left'));
        assert(mergeClassNameSets(testProps, ['global']).includes('ax-hidden-until--small'));
      });

      it('it can add multiple classes from multiple sets', () => {
        assert(mergeClassNameSets(testProps, ['text', 'global']).includes('ax-hidden-until--small'));
        assert(mergeClassNameSets(testProps, ['text', 'global']).includes('ax-text--left'));
      });
    });
  });

  describe('removing class set props', () => {
    it('removes all classname props', () => {
      assert.deepEqual(removeClassNameSetProps({
        foo: 'bar',
        hiddenUntil: true,
        visibleUntil: true,
        textLeft: true,
        textCenter: true,
        textRight: true,
        textBold: true,
        textWeak: true,
        textBreak: true,
        textCase: true,
        textEllipsis: true,
        textColor: true,
      }), {
        foo: 'bar',
      })
    });
  });
});
