import React, { PropTypes } from 'react';
import Row from 'awesome-possum/lib/Row';
import Col from 'awesome-possum/lib/Col';
import Card from 'awesome-possum/lib/Card';
import Button from 'awesome-possum/lib/Button';

// Import Components
import SearchListItem from './SearchListItem/SearchListItem';

function SearchList(props) {
  console.log('heres SearchList. props: ', props);
  return (
    <div className="search_list_view">
      {
        props.searchItems.map(searchItem => (
          <Row>                
            <Col large={6}>
              <Card>
                <Card.Header>
                  <Row className="rev-Row--flex rev-Row--middle">
                    <Col>
                      <h4>Header</h4>
                    </Col>
                    <Col shrink>
                      <Button small>Button</Button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                    <img src={searchItem.data.title} className="ResponsiveImage" /> 
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
      }
    </div>
  );
}

SearchList.propTypes = {
  searchItem: PropTypes.arrayOf(PropTypes.shape({
    data: {
      thumbnail: PropTypes.string.isRequired,
      autor: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      subreddit_name_prefixed: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }
  })).isRequired,
};

export default SearchList;
