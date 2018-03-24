import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

router.route('/search').post(function(req, res) {
    console.log(req.body);
    // form submitted without any search query
    if (!req.body.search_query) {
        res.status(403).end();
    }

    console.log('here found it');

    res.json({ search: 'this is thejson message' });
});

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

export default router;
