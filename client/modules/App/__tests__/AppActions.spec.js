import test from 'ava';
import { actionTest } from 'redux-ava';
import {
  DISPLAY_RESULTS,
  displayResults,
} from '../AppActions';

test('should return the correct type for displayResults', actionTest(
  displayResults,
  { results: 'results' },
  { type: DISPLAY_RESULTS, results: { results: 'results' }
}));
