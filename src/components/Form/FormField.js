import React, {Component} from 'react';

class Field extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {title, placeholder, onChange, value, render, error} = this.props;
    return (
      render && (typeof render === 'function')
        ? (
          <div className='form-group row'>
            {render()}
          </div>
        )
        : (
          <div className='form-group row'>
            <label className='col-sm-4 col-form-label'>
              {title}
            </label>
            < div className='col-sm-8'>
              <input
                onChange={onChange && typeof onChange === 'function'
                  ? onChange
                  : function () {
                  }}
                className={error ? 'is-invalid form-control' : 'form-control'}
                placeholder={placeholder}
                value={value || ''}
              >
              </input>
              {error
                ? (
                  <div className="invalid-feedback">
                    {error.join(',')}
                  </div>
                )
                : null}
            </div>
          </div>
        )
    )
  }
}

export default Field;