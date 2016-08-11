import { browserHistory } from 'react-router';
import * as routes from 'style-guide/constants/Routing';
import { getFirstDocumentPath } from 'style-guide/utils/markdown-document';

export function goToSearchPage(q) {
  browserHistory.push({
    pathname: `/${routes.SEARCH}`,
    query: { q },
  });
}

export function goToDocs() {
  browserHistory.push({
    pathname: getFirstDocumentPath(),
  });
}
