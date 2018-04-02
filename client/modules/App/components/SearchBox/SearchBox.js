import React, { Component, PropTypes } from 'react';
import InputGroup from 'awesome-possum/lib/InputGroup';
import Input from 'awesome-possum/lib/Input';
import Button from 'awesome-possum/lib/Button';
import Row from 'awesome-possum/lib/Row';
import Col from 'awesome-possum/lib/Col';


// Import Style
import styles from './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim()) {
      this.props.makeSearch(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div className={styles.search_container}>
        <form className={styles.search_form} onSubmit={this.handleSubmit}>
          <Row flex center>
            <Col large={8}>
              <InputGroup>
                <InputGroup.Field>
                  <Input className={styles.search_input} placeholder="search ..." type="text" value={this.state.value} onChange={this.handleChange} />
                </InputGroup.Field> 
                <InputGroup.Button>         
                  <Button type="submit">Submit</Button>
                </InputGroup.Button>                   
              </InputGroup>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  makeSearch: PropTypes.func.isRequired,
};

export default SearchBox;
