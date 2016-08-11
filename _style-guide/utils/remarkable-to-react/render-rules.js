import uuid from 'uuid';
import React from 'react';
import Image from 'bw-axiom/components/image/Image';
import Heading from 'bw-axiom/components/typography/Heading';
import Italic from 'bw-axiom/components/typography/Italic';
import Link from 'bw-axiom/components/typography/Link';
import Paragraph from 'bw-axiom/components/typography/Paragraph';
import Strike from 'bw-axiom/components/typography/Strike';
import Strong from 'bw-axiom/components/typography/Strong';
import List from 'bw-axiom/components/typography/List';
import ListItem from 'bw-axiom/components/typography/ListItem';
import Table from 'bw-axiom/components/table/Table';
import Thead from 'bw-axiom/components/table/Thead';
import Tbody from 'bw-axiom/components/table/Tbody';
import Tr from 'bw-axiom/components/table/Tr';
import Th from 'bw-axiom/components/table/Th';
import Td from 'bw-axiom/components/table/Td';
import MarkdownCodeBlock from 'style-guide/components/Markdown/MarkdownCodeBlock';
import * as tokenTypes from './token-types';

const renderFnMap = {
  [tokenTypes.HEADING]: _heading,
  [tokenTypes.BLOCKQUOTE]: _blockquote,
  [tokenTypes.CODE_INLINE]: _codeInline,
  [tokenTypes.CODE_BLOCK]: _codeBlock,
  [tokenTypes.HR]: _hr,
  [tokenTypes.LIST_UNORDERED]: _listUnordered,
  [tokenTypes.LIST_ORDERED]: _listOrdered,
  [tokenTypes.LIST_ITEM]: _listItem,
  [tokenTypes.PARAGRAPH]: _paragraph,
  [tokenTypes.LINK]: _link,
  [tokenTypes.IMAGE]: _image,
  [tokenTypes.TABLE]: _table,
  [tokenTypes.THEAD]: _thead,
  [tokenTypes.TBODY]: _tbody,
  [tokenTypes.TR]: _tr,
  [tokenTypes.TH]: _th,
  [tokenTypes.TD]: _td,
  [tokenTypes.STRONG]: _strong,
  [tokenTypes.EM]: _em,
  [tokenTypes.DEL]: _del,
  [tokenTypes.HARDBREAK]: _hardbreak,
  [tokenTypes.SOFTBREAK]: _softbreak,
  [tokenTypes.TEXT]: _text,
};

export default function renderTree(tokens = []) {
  return tokens.reduce((acc, token) => {
    if (renderFnMap[token.type]) {
      acc.push(renderFnMap[token.type](token, {
        key: uuid.v4(),
        'data-markdown-type': token.type,
        'data-markdown-props': token.props,
      }));
    }

    return acc;
  }, []);
}

function _blockquote(token, props) {
  return (
    <blockquote { ...props }>
      { renderTree(token.children) }
    </blockquote>
  );
}

function _codeInline(token, props) {
  return (
    <code { ...props }>
      { token.props.content }
    </code>
  );
}

function _codeBlock(token, props) {
  return (
    <MarkdownCodeBlock { ...props }
        content={ token.props.content.replace(/\\`/g, '`') }
        language={ token.props.params } />
  );
}

function _heading(token, props) {
  return (
    <Heading { ...props } level={ token.props.hLevel }>
      { renderTree(token.children) }
    </Heading>
  );
}

function _hr(token, props) {
  return (
    <hr { ...props } />
  );
}

function _list(token, props, ordered) {
  return (
    <List { ...props } ordered={ ordered }>
      { renderTree(token.children) }
    </List>
  );
}

function _listUnordered(token, props) {
  return _list(token, props, false);
}

function _listOrdered(token, props) {
  return _list(token, props, true);
}

function _listItem(token, props) {
  return (
    <ListItem { ...props }>
      { renderTree(token.children) }
    </ListItem>
  );
}

function _paragraph(token, props) {
  return (
    <Paragraph { ...props }>
      { renderTree(token.children) }
    </Paragraph>
  );
}

function _link(token, props) {
  return (
    <Link { ...props } href={ token.props.href } title={ token.props.title }>
      { renderTree(token.children) }
    </Link>
  );
}

function _image(token, props) {
  return (
    <Image { ...props }
        alt={ token.props.alt }
        src={ token.props.src }
        title={ token.props.title } />
  );
}

function _table(token, props) {
  return (
    <Table { ...props }>
      { renderTree(token.children) }
    </Table>
  );
}

function _thead(token, props) {
  return (
    <Thead { ...props }>
      { renderTree(token.children) }
    </Thead>
  );
}

function _tbody(token, props) {
  return (
    <Tbody { ...props }>
      { renderTree(token.children) }
    </Tbody>
  );
}

function _tr(token, props) {
  return (
    <Tr { ...props }>
      { renderTree(token.children) }
    </Tr>
  );
}

function _th(token, props) {
  return (
    <Th { ...props }>
      { renderTree(token.children) }
    </Th>
  );
}

function _td(token, props) {
  return (
    <Td { ...props }>
      { renderTree(token.children) }
    </Td>
  );
}

function _strong(token, props) {
  return (
    <Strong { ...props }>
      { renderTree(token.children) }
    </Strong>
  );
}

function _em(token, props) {
  return (
    <Italic { ...props }>
      { renderTree(token.children) }
    </Italic>
  );
}

function _del(token, props) {
  return (
    <Strike { ...props }>
      { renderTree(token.children) }
    </Strike>
  );
}

function _break(token, props) {
  return (
    <br { ...props  } />
  );
}

function _hardbreak(token, props) {
  return _break(token, props);
}

function _softbreak(token, props) {
  return _break(token, props);
}

function _text(token) {
  return token.props.content;
}
