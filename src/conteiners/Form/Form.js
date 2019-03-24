import React, {Component} from 'react';
import {Form, FormField} from '../../components/Form';
import {connect} from 'react-redux';
import tableActions from '../../redux/table/actions';

class FormWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      age: '',
      errors: {}
    };
  }

  validate = () => {
    const {firstName, lastName, age, phone} = this.state;
    let errors = {};
    const alphaExp = /^[a-zA-Z]+$/;
    const phoneExp = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
    const numExp = /^[0-9]+$/;
    if (firstName && !firstName.match(alphaExp)) {
      errors.firstName
        ? errors.firstName.push('must not contain numbers')
        : errors.firstName = ['must not contain numbers']
    }
    if (firstName.length < 2) {
      errors.firstName
        ? errors.firstName.push('must be longer than two letters')
        : errors.firstName = ['must be longer than two letters']
    }
    if (lastName && !lastName.match(alphaExp)) {
      errors.lastName
        ? errors.lastName.push('must not contain numbers')
        : errors.lastName = ['must not contain numbers']
    }
    if (lastName.length < 2) {
      errors.lastName
        ? errors.lastName.push('must be longer than two letters')
        : errors.lastName = ['must be longer than two letters']
    }
    if (!phone.match(phoneExp)) {
      console.log('-phone not match-',)
      errors.phone = ['not valid phone number']
    }
    if (age && !age.match(numExp)) {
      errors.age = ['must not contain letters']
    }
    if (age.match(numExp) && +age > 300) {
      errors.age = ['not real age']
    }
    if (age.length < 1) {
      errors.age = ['cant be empty']
    }
    this.setState(() => ({
      errors: {
        firstName: errors.firstName || null,
        lastName: errors.lastName || null,
        phone: errors.phone || null,
        age: errors.age || null
      }
    }));
    return Object.keys(errors).length === 0
  };

  onChange = (field) => (e) => {
    e.persist();
    this.setState(() => ({[field]: e.target.value}))
  };

  formSubmit = () => {
    const {addRow} = this.props;
    const isValid = this.validate()
    if (isValid) {
      const data = {
        // dev
        id: Math.round(Math.random() * 1000),
        key: Math.round(Math.random() * 1000),
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        phone: this.state.phone,
      };
      addRow(data)
      this.formClear()
    }
  };

  formClear = () => {
    this.setState(() => ({
        firstName: '',
        lastName: '',
        phone: '',
        age: ''
      })
    )
  };

  render() {
    return (
      <Form>
        <FormField
          title='first name'
          placeholder='first name'
          onChange={this.onChange('firstName')}
          value={this.state.firstName}
          error={this.state.errors.firstName}
        />
        <FormField
          title='last name'
          placeholder='last name'
          onChange={this.onChange('lastName')}
          value={this.state.lastName}
          error={this.state.errors.lastName}
        />
        <FormField
          title='phone'
          placeholder='(012)345-6789'
          onChange={this.onChange('phone')}
          value={this.state.phone}
          error={this.state.errors.phone}
        />
        <FormField
          title='age'
          placeholder='age'
          onChange={this.onChange('age')}
          value={this.state.age}
          error={this.state.errors.age}
        />
        <FormField
          render={() => (
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
              <button type='button' className='btn btn-light' onClick={this.formClear}>Clear</button>
              <button type='button' className='btn btn-primary' onClick={this.formSubmit}>Add</button>
            </div>
          )}
        />
      </Form>
    )
  }
}

export default connect(null, {addRow: tableActions.addRow})(FormWrapper);