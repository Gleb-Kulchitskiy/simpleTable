import React, {Component} from 'react';
import _ from 'lodash';
import Thead from './Thead';
import Tbody from './Tbody';

class CustomTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  static getDerivedStateFromProps(props, state) {
    const prevDataSortedId = state.data.map(obj => obj.id).sort((a, b) => a - b);
    const curDataSortedId = props.data.map(obj => obj.id).sort((a, b) => a - b);
    if (!_.isEqual(prevDataSortedId, curDataSortedId) || !state.data.length) {
      return {data: props.data}
    }
    return null
  }

  componentDidUpdate() {
    if (this.state.sort) {
      this.setState({sort: false})
    }
  }

  ascSort = (key) => () => {
    const data = _.orderBy(this.state.data, (obj) => obj[key], ['asc']);
    this.setState({
      data: data
    })
  };
  descSort = (key) => () => {
    const data = _.orderBy(this.state.data, (obj) => obj[key], ['desc']);
    this.setState({
      data: data
    })
  };

  render() {
    return (
        <table className="table table-striped">
          <Thead
            columns={this.props.columns}
            ascSort={this.ascSort}
            descSort={this.descSort}
          />
          <Tbody
            columns={this.props.columns}
            data={this.state.data}
          />
        </table>
    )
  }
}

export default CustomTable;