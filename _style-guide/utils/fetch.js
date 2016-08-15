import isomorphicFetch from 'isomorphic-fetch';

export default function fetch(url, options) {
  return isomorphicFetch(url, {
    method: 'GET',
    ...options,
  }).then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json().catch((error) => Promise.reject(error));
    }

    return Promise.reject(response);
  });
}
