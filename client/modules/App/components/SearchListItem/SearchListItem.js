import React, { PropTypes, Component } from 'react';
import Row from 'awesome-possum/lib/Row';
import Col from 'awesome-possum/lib/Col';
import Card from 'awesome-possum/lib/Card';
import CardLayout from 'awesome-possum/lib/CardLayout';
import NumberFormatter from 'awesome-possum/lib/NumberFormatter';
import FaChain from 'react-icons/lib/fa/chain';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaComments from 'react-icons/lib/fa/comments';
import FaUser from 'react-icons/lib/fa/user';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaReddit from 'react-icons/lib/fa/reddit';
import GoOrganization from 'react-icons/lib/go/organization';

// Import Style
import styles from './SearchListItem.css';

class SearchListItem extends Component {
  static defaultHeight = '184px';
  constructor(props) {
    super(props);
  };

  state = {
    height: this.constructor.defaultHeight,
  };

  contract = () => {
    this.setState({ height: this.constructor.defaultHeight })
  };

  getDateFormat = (date) => {
    const t = new Date(date * 1000);
    return t.toLocaleDateString();
  };

  expand = () => {
    this.setState({ height: null })
  };

  render() {
    return (
      <CardLayout
        className={styles.search_item}
        style={{
          height: this.state ? this.state.height : null,
        }}
        key={this.props.searchItem.data.id}
      >
        <Card.Header className={styles.search_item__header}>
          <Row flex className="rev-Row--flex rev-Row--middle search_item__header_inner">
            <Col>
              <a target="_blank" className={styles.search_item__link} href={this.props.searchItem.data.url}>{this.props.searchItem.data.title}</a>
            </Col>
            <Col shrink>
              <img 
                src={this.props.searchItem.data.thumbnail.includes('https://') ? this.props.searchItem.data.thumbnail : require('../../../../assets/reddit_thumbnail.png')} 
                className={styles.search_item__thumbnail} 
              />
            </Col>
          </Row>
        </Card.Header>
        <CardLayout.Fill className={styles.search_item__detail}>
          <Row flex>
            <Col small={4}>
              <FaCalendar/>
              <span className={styles.search_item__detail_item}>
                Created: {this.getDateFormat(this.props.searchItem.data.created)}
              </span><br/>
              <FaUser/>
              <span className={styles.search_item__detail_item}>
                Author: {this.props.searchItem.data.author}
              </span><br/>
            </Col>
            <Col small={4}>
              <FaComments/>  
              <span className={styles.search_item__detail_item}>          
                Comments: <NumberFormatter value={this.props.searchItem.data.num_comments} />
              </span><br/>
              <FaArrowUp/>
              <span className={styles.search_item__detail_item}>
                Upvotes: <NumberFormatter value={this.props.searchItem.data.score} />
              </span><br/>
            </Col>
            <Col small={4}>
              <FaReddit/>
              <span className={styles.search_item__detail_item}>
                Subreddit: {this.props.searchItem.data.subreddit_name_prefixed}
              </span><br/>
              <GoOrganization/>
              <span className={styles.search_item__detail_item}>
                Subscribers: <NumberFormatter value={this.props.searchItem.data.subreddit_subscribers} />
              </span><br/>
            </Col>
          </Row>
        </CardLayout.Fill>
        <Card.Footer className={styles.search_item__footer} >
          <Row flex>
            <Col small={6}>
              <a 
                style={{ display: this.state.height ? 'block' : 'none', }} 
                className={styles.search_item__toggle} onClick={this.expand}
              >
                <FaAngleDown/>
                <span className={styles.search_item__detail_item}>Expand</span>
              </a>
              <a
                style={{ display: this.state.height ? 'none' : 'block', }}
                className={styles.search_item__toggle} onClick={this.contract}
              >
                <FaAngleUp/>
                <span className={styles.search_item__detail_item}>Contract</span>
              </a>
            </Col>
            <Col small={6}>
              <a target="_blank" className={styles.search_item__comments} href={`https://reddit.com${this.props.searchItem.data.permalink}`}>
                <FaChain />
                <span className={styles.search_item__detail_item}>Comments</span>
              </a>
            </Col>
          </Row>
        </Card.Footer>
      </CardLayout>
    );
  }
}

SearchListItem.propTypes = {
  searchItem: PropTypes.object,
};

export default SearchListItem;
