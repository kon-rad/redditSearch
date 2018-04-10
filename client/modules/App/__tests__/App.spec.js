import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { App } from '../App';
import { intlShape } from 'react-intl';
import styles from '../App.css';
import { intl } from '../../../util/react-intl-test-helper';
import { makeSearch } from '../AppActions';

const intlProp = { ...intl, enabledLanguages: ['en', 'fr'] };
const app = [];
const dispatch = sinon.spy();
const props = {
  app,
  dispatch,
  intl: intlProp,
};

test('renders properly', t => {

  const wrapper = shallow(
    <App {...props} />
  );

  t.is(wrapper.find('h1').length, 1);
  t.is(wrapper.find('SearchBox').length, 1);
  t.is(wrapper.find('SearchList').length, 1);
  t.is(wrapper.find('SearchBox').prop('makeSearch'), wrapper.instance().handleMakeSearch);
  t.is(wrapper.find('SearchList').prop('searchItems'), wrapper.instance().props.app);

  t.truthy(wrapper.find('h1').hasClass(styles.title));
});

test('calls componentDidMount', t => {
  sinon.spy(App.prototype, 'componentDidMount');
  mount(
    <App {...props} />,
    {
      context: {
        router: {
          isActive: sinon.stub().returns(true),
          push: sinon.stub(),
          replace: sinon.stub(),
          go: sinon.stub(),
          goBack: sinon.stub(),
          goForward: sinon.stub(),
          setRouteLeaveHook: sinon.stub(),
          createHref: sinon.stub(),
        },
        intl,
        app: [],
      },
      childContextTypes: {
        router: React.PropTypes.object,
        intl: intlShape,
        app: React.PropTypes.array
      },
    },
  );

  t.truthy(App.prototype.componentDidMount.calledOnce);
  App.prototype.componentDidMount.restore();
});

test('calling handleMakeSearch dispatches makeSearch', t => {
  const wrapper = shallow(
    <App {...props} />
  );

  wrapper.instance().handleMakeSearch({ searchQuery: 'test search query' });
  t.truthy(dispatch.calledOnce);
  // t.truthy(dispatch.calledWith(makeSearch({ searchQuery: 'test search query' })));
});
