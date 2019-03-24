import React, {Component} from 'react';
import {IconContext} from "react-icons";
import {FaArrowDown, FaArrowUp} from 'react-icons/fa';

class Thead extends Component {
  constructor(props) {
    super(props);
    this.columns = this.props.columns;
    this.state = {
      hover: false,
    }
  }

  onHover = () => {
    this.setState(({hover}) => ({hover: !hover}))
  };

  render() {
    const {ascSort, descSort} = this.props;
    return (
      <thead>
      <tr>
        {this.columns.map(col => <th scope="col" key={col.key || col.title}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{flex: 2}}>{col.title}</span>
            {col.title
              ? (
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <IconContext.Provider value={{color: "blue", size: '10px', className: "global-class-name"}}>
                    <FaArrowUp
                      style={this.state.hover ? {cursor: 'pointer'} : ''}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.onHover}
                      onClick={descSort(col.dataIndex)}
                    />
                  </IconContext.Provider>
                  <IconContext.Provider value={{color: "blue", size: '10px', className: "global-class-name"}}>
                    <FaArrowDown
                      style={this.state.hover ? {cursor: 'pointer'} : ''}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.onHover}
                      onClick={ascSort(col.dataIndex)}
                    />
                  </IconContext.Provider>
                </div>
              )
              : null
            }
          </div>
        </th>)}
      </tr>
      </thead>
    )
  }
}

export default Thead;