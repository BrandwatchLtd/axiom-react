import humanize from 'humanize-string';
import Fuse from 'fuse.js';
import { getMarkdownContentFunction, getDocs, markdownRouteToPath } from 'style-guide/utils/markdown-document';

function buildFuse(searchable) {
  return new Fuse(searchable, {
    keys: ['name', 'content'],
    threshold: 0.0,
    tokenize: true,
  });
}

function buildSearchObjects(docs, searchObjects = [], path = []) {
  if (Array.isArray(docs)) {
    docs.forEach((doc) => {
      buildSearchObjects(doc, searchObjects, path);
    });
  } else if (Array.isArray(docs.children)) {
    docs.children.filter(({ hidden }) => !hidden).forEach((doc) => {
      buildSearchObjects(doc, searchObjects, [...path, docs.id]);
    });
  } else {
    searchObjects.push({
      name: humanize(docs.id),
      to: markdownRouteToPath([...path, docs.id]),
      content: getMarkdownContentFunction([...path, docs.id])({}, {})
        .filter((e) => typeof e === 'string')
        .join(' '),
    });
  }

  return searchObjects;
}

export function searchDocumentation(query) {
  return buildFuse(buildSearchObjects(getDocs())).search(query)
}
