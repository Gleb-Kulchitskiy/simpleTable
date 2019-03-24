import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import Table from '../Table/Table';
import Form from '../Form/Form';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Simple table example</h1>
          <Table/>
          <h3>Add record</h3>
          <Form/>
        </div>
      </Provider>
    );
  }
}

export default App;
