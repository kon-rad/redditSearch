export const REDDIT_API_URL = 'http://www.reddit.com';

export default function callRedditApi(search_query, searchLimit) {
    search_query = encodeURI(search_query);
    searchLimit = encodeURI(searchLimit);
    return fetch(`${REDDIT_API_URL}/search.json?q=${search_query}&limit=${searchLimit}`)
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
