import { browserHistory } from 'react-router';
import * as routes from 'style-guide/constants/Routing';
import { getFirstDocumentRoute, markdownRouteToPath } from 'style-guide/utils/markdown-document';

export function goToSearchPage(q) {
  browserHistory.push({
    pathname: `/${routes.SEARCH}`,
    query: { q },
  });
}

export function goToDocs(version) {
  browserHistory.push({
    pathname: markdownRouteToPath(getFirstDocumentRoute(version)),
  });
}
