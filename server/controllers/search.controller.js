// /**
//  * Make a search
//  * @param req
//  * @param res
//  * @returns void
//  */
// export function makeSearch(req, res) {
//     console.log(req.body);
//     // form submitted without any search query
//     if (!req.body.search_query) {
//         res.status(403).end();
//     }
//     let searchLimit = 100;

//     let data = fetch(`http://www.reddit.com/search.json?q=${req.body.search_query}&limit=${searchLimit}`)
//         .then(res => res.json())
//         .then(data => data.data.children.map(data => data.data))
//         .catch(err => console.log(err));

//     data.then(results => {
//             results.forEach(post => {
//                 console.log('data resolved!!!***', post);
//             })
//         }
//     )

//     console.log('heres the data', data);

//     res.json({ search: 'this is thejson message' });
// }
