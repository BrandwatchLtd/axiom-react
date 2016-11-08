import omit from 'lodash/omit';
import classnames from 'classnames';

const CLASS_NAMES_SETS = {
  global: (props) => {
    return classnames({
      [`ax-hidden-until--${props.hiddenUntil}`]: props.hiddenUntil,
      [`ax-visible-until--${props.visibleUntil}`]: props.visibleUntil,
    });
  },
  text: (props) => {
    return classnames({
      'ax-text--left': props.textLeft === true,
      [`ax-text--left--${props.textLeft}`]: props.textLeft && props.textLeft !== true,
      'ax-text--center': props.textCenter === true,
      [`ax-text--center--${props.textCenter}`]: props.textCenter && props.textCenter !== true,
      'ax-text--right': props.textRight === true,
      [`ax-text--right--${props.textRight}`]: props.textRight && props.textRight !== true,
      'ax-text--strong': props.textStrong === true,
      'ax-text--weak': props.textWeak === true,
      'ax-text--break-none': props.textBreak === 'none',
      'ax-text--break-all': props.textBreak === 'all',
      'ax-text--break-word': props.textBreak === 'word',
      'ax-text--uppercase': props.textCase === 'upper',
      'ax-text--capitalize': props.textCase === 'capital',
      'ax-text--lowercase': props.textCase === 'lower',
      'ax-text--ellipsis': props.textEllipsis === true,
      'ax-text--light': props.textLight,
      'ax-text--dark': props.textDark,
      'ax-text--subtle': props.textSubtle,
    });
  },
};

export function mergeClassNameSets(props = {}, classNameSets = []) {
  return classnames(
    props.className,
    ...classNameSets.map((set) => CLASS_NAMES_SETS[set](props)),
  );
}

export function removeClassNameSetProps(props) {
  return omit(props, [
    'hiddenUntil', 'visibleUntil',
    'textLeft', 'textCenter', 'textRight',
    'textStrong', 'textWeak',
    'textBreak',
    'textCase',
    'textEllipsis',
    'textLight', 'textDark', 'textSubtle',
  ]);
}
