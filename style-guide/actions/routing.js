import { browserHistory } from 'react-router';
import * as routes from 'style-guide/constants/Routing';
import { getFirstPath } from 'style-guide/utils/examples';

export function goToSearchPage(q) {
  browserHistory.push({
    pathname: `/${routes.SEARCH}`,
    query: { q },
  });
}

export function goToDocs() {
  browserHistory.push({
    pathname: getFirstPath(),
  });
}
