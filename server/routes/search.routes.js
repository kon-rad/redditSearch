import { Router } from 'express';
import * as SearchController from '../controllers/search.controller';
const router = new Router();

// Make Search Query
router.route('/search').post(SearchController.makeSearch);

export default router;
