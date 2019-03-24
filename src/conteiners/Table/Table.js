import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table} from '../../components/Table';
import actions from '../../redux/table/actions';

import {FaTimes} from 'react-icons/fa';

class TableWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleDelete = (row) => () => {
    const {deleteRow} = this.props;
    deleteRow(row.id);
  };

  onHover = () => {
    this.setState(({hover}) => ({hover: !hover}))
  };

  componentDidMount() {
    const {init, saveToStorage} = this.props;
    init();
    window.addEventListener(
      "beforeunload",
      saveToStorage
    );
  }

  componentWillUnmount() {
    const {saveToStorage} = this.props;
    window.removeEventListener(
      "beforeunload",
      saveToStorage
    );
    saveToStorage();
  }

  render() {
    const {tableData} = this.props;
    const columns = [
      {
        key: 'id',
        dataIndex: 'id',
        title: 'id',
      },
      {
        key: 'manage',
        dataIndex: 'manage',
        title: '',
        render: (text, row) => (
          <div >
            <FaTimes
              style={this.state.hover ? {cursor: 'pointer'} : ''}
              onClick={this.handleDelete(row)}
              onMouseEnter={this.onHover}
              onMouseLeave={this.onHover}
            />
          </div>
        )
      },
      {
        key: 'firstName',
        dataIndex: 'firstName',
        title: 'first name',
      },
      {
        key: 'lastName',
        dataIndex: 'lastName',
        title: 'last name',
      },
      {
        key: 'phone',
        dataIndex: 'phone',
        title: 'phone',
      },
      {
        key: 'age',
        dataIndex: 'age',
        title: 'age',
        render: (text) => text
      }
    ];
    return (
      <div className="col-12">
        <Table columns={columns} data={tableData}/>
      </div>
    );
  }
}

export default connect(({tableData}) => ({tableData}), {
  init: actions.init,
  saveToStorage: actions.saveToLocalStorage,
  deleteRow: actions.deleteRow,
})(TableWrapper);