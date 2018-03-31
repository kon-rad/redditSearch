import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Row from 'awesome-possum/lib/Row';
import Col from 'awesome-possum/lib/Col';
import Card from 'awesome-possum/lib/Card';
import Button from 'awesome-possum/lib/Button';
import CardLayout from 'awesome-possum/lib/CardLayout';
import HelpText from 'awesome-possum/lib/HelpText';
import Lipsum from 'awesome-possum/lib/Lipsum';
import ExpandingCol from 'awesome-possum/lib/ExpandingCol';
import NumberFormatter from 'awesome-possum/lib/NumberFormatter';


// Import Style
import styles from './SearchListItem.css';
require('./SearchListItemStyles.scss');
class SearchListItem extends Component {
  constructor(props) {
    super(props);
    console.log('inside constructor. props: ', props);
    // this.state = { isMounted: false };
    // this.state.searchItems = [];
  }
  static defaultHeight = '184px';

  state = {
    height: this.constructor.defaultHeight,
  };

  expand = () => {
    console.log('expand here state: ', this.state);
    this.setState({height: null})
  };

  contract = () => {
    console.log('contract here state: ', this.state);
    
    this.setState({height: this.constructor.defaultHeight})
  };

  getDateFormat = (date) => {
    console.log(date);
    let t = new Date(date * 1000);
    return t.toLocaleDateString();
  }
  render() {
    return (
      <CardLayout
        className={styles['search_item']}
        style={{
          height: this.state ? this.state.height : null,
        }}
      >
        <Card.Header className={styles['search_item__header']}>
          <Row flex className="rev-Row--flex rev-Row--middle search_item__header_inner">
            <Col>
            <a target="_blank" className={styles['search_item__link']} href={this.props.searchItem.data.url}>{this.props.searchItem.data.title}</a>
            </Col>
            <Col shrink>
            <img src={this.props.searchItem.data.thumbnail.includes('https://') ? this.props.searchItem.data.thumbnail : require('../../../../assets/reddit_thumbnail.png')} className={styles['search_item__thumbnail']} />
            </Col>
          </Row>
        </Card.Header>
        <CardLayout.Fill  className={styles['search_item__detail']}>
          <Row flex left>
            <Col small={4}>
              Created: {this.getDateFormat(this.props.searchItem.data.created)}<br/>
              Author: {this.props.searchItem.data.author}<br/>
            </Col>
            <Col small={4}>
              Comments: <NumberFormatter value={this.props.searchItem.data.num_comments} /><br/>
              Upvotes: <NumberFormatter value={this.props.searchItem.data.score} /><br/>
            </Col>
            <Col small={4}>
              Subreddit: {this.props.searchItem.data.subreddit_name_prefixed}<br/>
              Subreddit Subscribers: <NumberFormatter value={this.props.searchItem.data.subreddit_subscribers} /><br/>
            </Col>
          </Row>
        </CardLayout.Fill>
        <Card.Footer className={styles['search_item__footer']} >
          <Row>
            <Col>
              <a style={{
                display: this.state.height ? 'inline-block' : 'none',
              }} className={styles['search_item__toggle']} onClick={this.expand}>Expand</a>
              <a style={{
                display: this.state.height ? 'none' : 'inline-block',
              }} className={styles['search_item__toggle']} onClick={this.contract}>Contract</a>
              <a target="_blank" className={styles['search_item__comments']} href={`https://reddit.com${this.props.searchItem.data.permalink}`}>Comments</a>
              
            </Col>
          </Row>
        </Card.Footer>
      </CardLayout>
    );

  }
}

SearchListItem.propTypes = {
  searchItem: PropTypes.shape(PropTypes.shape({
    data: {
      thumbnail: PropTypes.string.isRequired,
      autor: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      subreddit_name_prefixed: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cuid: PropTypes.string.isRequired,
    }
  })).isRequired,
};

export default SearchListItem;
