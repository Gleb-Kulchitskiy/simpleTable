import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className='col-6'>
        {this.props.children}
      </form>
    )
  }
}

export default Form;