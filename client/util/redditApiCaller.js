export const REDDIT_API_URL = 'http://www.reddit.com';

export default function callRedditApi(searchQuery, searchLimit) {
  const searchQueryEncoded = encodeURI(searchQuery);
  const searchLimitEncoded = encodeURI(searchLimit);

  return fetch(`${REDDIT_API_URL}/search.json?q=${searchQueryEncoded}&limit=${searchLimitEncoded}`)
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    response => response,
    error => error
  );
}
