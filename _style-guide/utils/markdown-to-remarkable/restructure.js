import flattenDeep from 'lodash/flattenDeep';
import * as tokenTypes from 'style-guide/utils/remarkable-to-react/token-types';
import { _cardCheck, _cardRule } from './restructure-rules/_card';

const restructureRulesCheckMap = {
  [tokenTypes.HEADING]: _cardCheck,
};

const restructureRules = {
  [tokenTypes.HEADING]: _cardRule,
};

function hasRestructureRule(element) {
  return element.props &&
         element.props['data-markdown-type'] &&
         restructureRulesCheckMap[element.props['data-markdown-type']] &&
         restructureRulesCheckMap[element.props['data-markdown-type']](element) &&
         restructureRules[element.props['data-markdown-type']];
}

export default function restructure(content) {
  let index = -1;
  let restructureRule;
  const restructured = [];
  const flatStructure = flattenDeep(content);

  while (++index < flatStructure.length) {
    if ((restructureRule = hasRestructureRule(flatStructure[index]))) {
      index += restructureRule(flatStructure, index, restructured);
    } else {
      restructured.push(flatStructure[index]);
    }
  }

  return restructured;
}
