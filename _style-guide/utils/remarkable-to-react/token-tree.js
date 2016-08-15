import { TYPE_MAP } from './token-types';

const TOP_LEVEL = 0;
const OPEN_IDENTIFIER = '_open';
const CLOSE_IDENTIFIER = '_close';
const INLINE_TYPE = 'inline';
const PROP_EXCLUDE = ['level', 'lines', 'type'];

function isOpenToken({ type }) {
  return type.includes(OPEN_IDENTIFIER);
}

function isCloseToken({ type }) {
  return type.includes(CLOSE_IDENTIFIER);
}

function isInlineToken({ type }) {
  return type === INLINE_TYPE;
}

function stripProps(token) {
  return Object.keys(token).reduce((tok, key) => {
    if (!PROP_EXCLUDE.includes(key)) {
      tok[key] = token[key];
    }

    return tok;
  }, {});
}

function buildLoneToken(tokens, index) {
  return {
    type: TYPE_MAP[tokens[index].type],
    props: stripProps(tokens[index]),
  };
}

function buildOpenToken(tokens, index, level) {
  return {
    ...buildLoneToken(tokens, index),
    children: toTokenTree(tokens, index, level + 1),
  };
}

function toTokenTree(tokens, index = -1, level = TOP_LEVEL) {
  const collection = [];

  while (++index < tokens.length) {
    if (level === tokens[index].level) {
      if (isInlineToken(tokens[index])) {
        return toTokenTree(tokens[index].children);
      }

      if (isOpenToken(tokens[index])) {
        collection.push(buildOpenToken(tokens, index, level));
      } else if (!isCloseToken(tokens[index])) {
        collection.push(buildLoneToken(tokens, index));
      }
    } else if (level !== TOP_LEVEL && level > tokens[index].level) {
      return collection;
    }
  }

  return collection;
}

export default toTokenTree;
