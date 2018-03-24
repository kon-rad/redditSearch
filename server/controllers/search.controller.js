/**
 * Make a search
 * @param req
 * @param res
 * @returns void
 */
export function makeSearch(req, res) {
    console.log(req.body);
    // form submitted without any search query
    if (!req.body.search_query) {
        res.status(403).end();
    }

    console.log('here found it');

    res.json({ search: 'this is thejson message' });
}
