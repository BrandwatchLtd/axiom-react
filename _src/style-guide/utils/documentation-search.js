import humanize from 'humanize-string';
import Fuse from 'fuse.js';
import { V_CURRENT } from 'style-guide/constants/Versions';
import { getMarkdownContentFunction, getVersion, markdownRouteToPath } from 'style-guide/utils/markdown-document';

function buildFuse(searchable) {
  return new Fuse(searchable, {
    keys: ['name', 'content'],
    threshold: 0.0,
    tokenize: true,
  });
}

function buildSearchObjects({ id, children }, searchObjects = [], path = []) {
  if (Array.isArray(children)) {
    children.filter(({ hidden }) => !hidden).forEach((doc) => {
      buildSearchObjects(doc, searchObjects, [...path, id]);
    });
  } else {
    searchObjects.push({
      name: humanize(id),
      to: markdownRouteToPath([...path, id]),
      content: getMarkdownContentFunction([...path, id])()
        .filter((e) => typeof e === 'string')
        .join(' '),
    });
  }

  return searchObjects;
}

export function searchDocumentationVersion(query, version = V_CURRENT) {
  return buildFuse(buildSearchObjects(getVersion(version))).search(query)
}
