import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import SearchBox from '../../components/SearchBox/SearchBox';

test('renders the SearchBox properly', t => {
  const wrapper = shallow(
    <SearchBox />
  );

  t.is(wrapper.find('form').length, 1);
});
